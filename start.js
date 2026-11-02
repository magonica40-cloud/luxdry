
const { spawn } = require("child_process");

function run(command, args) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      stdio: "inherit",
      shell: false,
    });

    process.on("error", reject);

    process.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function start() {
  console.log("Installing project dependencies...");

  await run("npm", ["install"]);

  console.log("Starting Next.js application...");

  await run("npm", ["start"]);
}

start().catch((error) => {
  console.error("Application startup failed:", error);
  process.exit(1);
});
