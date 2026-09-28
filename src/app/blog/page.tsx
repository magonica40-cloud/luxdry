import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts, categories } from '@/data/blog';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Blog & Fabric Care Guides | ${site.name}`,
  description:
    'Practical guides on fabric care, stain removal, commercial laundry operations and sustainable cleaning from the LuxeDry team.',
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;
  const remaining = rest.length > 0 ? rest : [featured];

  return (
    <main>
      <PageHero
        eyebrow="The LuxeDry Journal"
        title="Fabric care, laundry operations and"
        highlight="sustainable cleaning"
        intro="Practical, tested guidance from the people who process laundry every day — written for homeowners who want to do less damage to their clothes, and for operators who need the process to hold up."
        crumbs={[{ name: 'Home', href: '/' }]}
      />

      {/* Categories */}
      <div className="bg-brand-navy pb-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <article className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden">
              <Link href={`/blog/${featured.slug}`} className="block h-64 md:h-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-8 md:p-12">
                <span className="inline-block px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-5">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {featured.displayDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {featured.readTime}
                  </span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="btn-primary">
                  Read the article <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* All posts */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">
              All <span className="text-brand-cyan">Articles</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remaining.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-soft transition-all duration-300 flex flex-col hover:-translate-y-2"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-52 overflow-hidden bg-slate-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-navy font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                      </div>
                    </div>
                  </Link>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 mb-3">
                      <span>{post.displayDate}</span>
                      <span aria-hidden="true">&bull;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-cyan transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 pt-5 border-t border-slate-200/80 text-xs font-bold uppercase tracking-widest text-brand-cyan inline-flex items-center gap-2"
                    >
                      Read article <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
