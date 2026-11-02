'use strict';
const { spawn, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const os = require('node:os');

const ROOT = __dirname;
process.chdir(ROOT);

// Must match the Enhance proxy port. APP_PORT overrides if you ever change it.
const PORT = String(process.env.APP_PORT || 3000);
const HOST = '0.0.0.0';
const npmBin = path.join(path.dirname(process.execPath), 'npm');

const log = (m) => console.log(`[start.js ${new Date().toISOString()}] ${m}`);

function run(cmd, args, env = {}) {
  log(`$ ${path.basename(cmd)} ${args.join(' ')}`);
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    stdio: 'inherit',
    env: { ...process.env, ...env },
  });
  return r.status === 0;
}

// Wait 60s before exiting so Enhance's auto-restart doesn't loop a slow build.
function fail(msg) {
  console.error(`[start.js] FATAL: ${msg}`);
  setTimeout(() => process.exit(1), 60000);
}

log(`node ${process.version}, cwd ${ROOT}, RAM total ${Math.round(os.totalmem() / 1048576)} MB`);

// 1. Dependencies (include devDependencies: typescript is needed to build)
if (!fs.existsSync(path.join(ROOT, 'node_modules', 'next', 'package.json'))) {
  log('node_modules missing, installing dependencies...');
  if (!run(npmBin, ['install', '--include=dev', '--no-audit', '--no-fund'])) {
    return fail('npm install failed');
  }
}

let nextBin;
try {
  nextBin = require.resolve('next/dist/bin/next', { paths: [ROOT] });
} catch (e) {
  return fail('next is not installed even after npm install');
}

// 2. Production build (BUILD_ID is written when a build completes)
if (!fs.existsSync(path.join(ROOT, '.next', 'BUILD_ID')) || process.env.FORCE_BUILD === '1') {
  log('no production build found, running next build (can take several minutes)...');
  const buildEnv = {
    NODE_ENV: 'production',
    NEXT_TELEMETRY_DISABLED: '1',
    NODE_OPTIONS: process.env.NODE_OPTIONS || '--max-old-space-size=1024',
  };
  let ok = run(process.execPath, [nextBin, 'build'], buildEnv);
  if (!ok) {
    log('default build failed, retrying with --webpack...');
    ok = run(process.execPath, [nextBin, 'build', '--webpack'], buildEnv);
  }
  if (!ok) return fail('next build failed twice, see the errors above');
} else {
  log('existing production build found, skipping build');
}

// 3. Start the server
log(`starting next on ${HOST}:${PORT}`);
const child = spawn(process.execPath, [nextBin, 'start', '-H', HOST, '-p', PORT], {
  cwd: ROOT,
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'production', NEXT_TELEMETRY_DISABLED: '1' },
});
child.on('exit', (code, signal) => {
  log(`next exited (code=${code}, signal=${signal})`);
  process.exit(code === null ? 1 : code);
});
for (const sig of ['SIGTERM', 'SIGINT']) process.on(sig, () => child.kill(sig));

// 4. Readiness probe: only logs READY if the server really answers
let tries = 0;
const probe = setInterval(() => {
  tries += 1;
  http.get({ host: '127.0.0.1', port: PORT, path: '/', timeout: 2000 }, (res) => {
    log(`READY: GET / returned HTTP ${res.statusCode} on 127.0.0.1:${PORT}`);
    res.resume();
    clearInterval(probe);
  }).on('error', () => {
    if (tries >= 60) { log('NOT READY after 120s'); clearInterval(probe); }
  });
}, 2000);
