import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts } from '@/data/blog';

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
                Latest Insights & Guides
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                From Our <span className="text-brand-cyan">Laundry Experts</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-cyan font-bold text-sm hover:gap-3 transition-all shrink-0"
            >
              Read all articles <ArrowUpRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-soft transition-all duration-300 flex flex-col hover:-translate-y-2"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={600}
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-navy font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  </div>
                </Link>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.displayDate}
                    </span>
                    <span aria-hidden="true">&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-medium">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                      <User size={14} className="text-brand-cyan" /> {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-brand-cyan group-hover:border-brand-cyan group-hover:text-white transition-all shadow-sm"
                      aria-label={`Read article: ${post.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
