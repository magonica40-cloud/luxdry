import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import PageHero from '@/components/PageHero';
import BlogBody from '@/components/BlogBody';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts, getPost, getRelated } from '@/data/blog';
import { site } from '@/data/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getRelated(slug, 3);

  return (
    <main>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.category, href: '/blog' },
        ]}
      />

      <article className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-400 pb-8 border-b border-slate-200">
                <span className="flex items-center gap-2">
                  <User size={15} className="text-brand-cyan" /> {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={15} className="text-brand-cyan" /> {post.displayDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={15} className="text-brand-cyan" /> {post.readTime}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden my-10 border border-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <BlogBody blocks={post.body} />
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-brand-cyan font-bold text-sm hover:gap-3 transition-all"
                >
                  <ArrowLeft size={18} /> Back to all articles
                </Link>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Re: ${post.title}`)}`}
                  className="text-sm font-semibold text-slate-500 hover:text-brand-cyan transition-colors"
                >
                  Ask a question about this
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">
            Keep <span className="text-brand-cyan">Reading</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {related.map((r) => (
              <article
                key={r.slug}
                className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-soft transition-all duration-300 flex flex-col"
              >
                <Link href={`/blog/${r.slug}`} className="block">
                  <div className="h-44 overflow-hidden bg-slate-200">
                    <img
                      src={r.image}
                      alt={r.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-cyan mb-3">
                    {r.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-cyan transition-colors">
                    <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{r.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
