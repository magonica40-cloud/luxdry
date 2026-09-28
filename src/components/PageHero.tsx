import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type Crumb = { name: string; href: string };

export default function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="bg-brand-navy pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
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

          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-5">
            {eyebrow}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] max-w-4xl">
            {title}{' '}
            {highlight && <span className="text-brand-cyan">{highlight}</span>}
          </h1>

          {intro && (
            <p className="text-slate-300 text-lg md:text-xl font-medium mt-6 max-w-3xl leading-relaxed">
              {intro}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
