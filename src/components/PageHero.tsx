'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

type Crumb = { name: string; href: string };
type Tile = { src: string; alt: string };

export default function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  crumbs = [],
  image,
  imageAlt,
  chips = [],
  tiles = [],
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  chips?: string[];
  tiles?: Tile[];
}) {
  const frameRef = useRef<HTMLElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setShift({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section
      ref={frameRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setShift({ x: 0, y: 0 })}
      className="relative pt-40 pb-24 overflow-hidden bg-brand-navy"
    >
      {/* Photographic backdrop: slow Ken Burns drift plus pointer parallax */}
      {image && (
        <div
          aria-hidden="true"
          className="absolute -inset-10 pointer-events-none transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(${shift.x * -28}px, ${shift.y * -22}px, 0)` }}
        >
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover animate-kenburns"
          />
        </div>
      )}

      {/* Scrims keep the headline readable over any photo */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${
          image ? 'bg-gradient-to-r from-slate-950 via-slate-950/85 to-brand-navy/55' : ''
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

      {/* Living light and a faint technical grid */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none animate-drift"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/4 w-[420px] h-[420px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none animate-drift [animation-delay:1.6s]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={
            tiles.length > 0 ? 'grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-12 items-center' : ''
          }
        >
          <div className="max-w-4xl">
            <div className="animate-[fadeUp_0.7s_ease_both]">
              {crumbs.length > 0 && (
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
                    {crumbs.map((c, i) => (
                      <li key={c.name} className="flex items-center gap-2">
                        <Link href={c.href} className="hover:text-brand-cyan transition-colors">
                          {c.name}
                        </Link>
                        {i < crumbs.length - 1 && <ChevronRight size={12} aria-hidden="true" />}
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-brand-cyan font-bold text-xs uppercase tracking-widest mb-5">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"
                />
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] animate-[fadeUp_0.7s_0.1s_ease_both]">
              {title}{' '}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-aqua to-brand-cyan animated-gradient">
                  {highlight}
                </span>
              )}
            </h1>

            {intro && (
              <p className="text-slate-200 text-lg md:text-xl font-medium mt-6 max-w-3xl leading-relaxed animate-[fadeUp_0.7s_0.2s_ease_both]">
                {intro}
              </p>
            )}

            {chips.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-8 animate-[fadeUp_0.7s_0.3s_ease_both]">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-slate-200 text-xs font-bold uppercase tracking-widest hover:bg-brand-cyan/20 hover:border-brand-cyan/50 hover:text-white transition-colors"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Drifting photo mosaic — a self-contained grid so a tile can never spill
              out of its column, with tilt on the CSS `rotate` property so the drift
              animation (transform) composes with it instead of overriding it */}
          {tiles.length > 0 && (
            <div
              aria-hidden="true"
              className="hidden xl:grid grid-cols-2 gap-5 items-center justify-items-center"
            >
              {tiles.slice(0, 3).map((tile, i) => {
                const layout = [
                  'row-span-2 h-[340px] w-44 2xl:w-52',
                  'h-40 w-full max-w-[13rem]',
                  '-mt-8 h-40 w-full max-w-[13rem]',
                ][i];
                const tilt = [-5, 4, 9][i];
                return (
                  <div
                    key={`${tile.src}-${i}`}
                    className={`relative overflow-hidden rounded-2xl border-4 border-white/90 shadow-2xl shine animate-drift ${layout}`}
                    style={{ rotate: `${tilt}deg`, animationDelay: `${i * 1.1}s` }}
                  >
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes="(min-width: 1536px) 208px, (min-width: 1280px) 176px, 0px"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Animated brand hairline sealing the hero into the page */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-aqua to-brand-blue animated-gradient"
      />
    </section>
  );
}
