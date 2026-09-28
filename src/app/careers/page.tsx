import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase, Clock, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { jobs, jobApplicationSubject, site } from '@/data/site';

export const metadata: Metadata = {
  title: `Careers | ${site.name}`,
  description:
    'Open roles at LuxeDry commercial laundry operation — technicians, drivers, finishing specialists and client relationship executives.',
};

const perks = [
  {
    icon: GraduationCap,
    title: 'On-the-job training',
    body: 'Every role starts with a structured two-week induction on sorting, wash chemistry and fabric handling. You are never dropped onto the floor unbriefed.',
  },
  {
    icon: HeartHandshake,
    title: 'Promoted from within',
    body: 'Our supervisors understand why a load failed because they were on the floor when it did. We promote the person who knows the process.',
  },
  {
    icon: Clock,
    title: 'Rotating shifts, posted in advance',
    body: 'Rotas are published two weeks ahead. We know laundry does not stop, and neither should your ability to plan your week.',
  },
  {
    icon: Briefcase,
    title: 'Real progression',
    body: 'Technician to operator to shift supervisor to quality control or account work. The ladder is real and it is documented.',
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Honest work, real progression,"
        highlight="paid on time"
        intro="Laundry is physical, warm and fast-paced, and we will not pretend otherwise. In exchange you get a clear skill ladder, a stable team and a job that has to be done properly every single day."
        crumbs={[{ name: 'Home', href: '/' }]}
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
              Why people <span className="text-brand-cyan">stay with us</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-6">
                    <p.icon size={25} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
                {jobs.length} Open Roles
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Current <span className="text-brand-cyan">openings</span>
              </h2>
              <p className="text-slate-600 text-lg">
                All roles are based at our Hoskote facility. Send a short application — we read every
                one.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.08}>
                <article className="border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-soft transition-all duration-300 overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3">{job.title}</h3>
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
                          <span className="px-3 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan uppercase tracking-widest">
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={13} /> {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} /> {job.location}
                          </span>
                        </div>
                      </div>
                      <a
                        href={`mailto:${site.email}?subject=${encodeURIComponent(
                          jobApplicationSubject(job.title)
                        )}`}
                        className="btn-primary shrink-0 py-3 px-6 text-sm"
                      >
                        Apply Now <ArrowRight size={16} />
                      </a>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-8">{job.summary}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4">
                          What you will do
                        </h4>
                        <ul className="space-y-2.5">
                          {job.responsibilities.map((r) => (
                            <li key={r} className="flex gap-3 text-slate-600 text-sm">
                              <span className="text-brand-cyan font-bold shrink-0" aria-hidden="true">
                                &#8594;
                              </span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4">
                          What we are looking for
                        </h4>
                        <ul className="space-y-2.5">
                          {job.requirements.map((r) => (
                            <li key={r} className="flex gap-3 text-slate-600 text-sm">
                              <span className="text-brand-cyan font-bold shrink-0" aria-hidden="true">
                                &#8594;
                              </span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              Nothing that fits today?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-9">
              Send a short note telling us what you have done before. We hire ahead of need far
              more often than people expect.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                'General application — LuxeDry'
              )}`}
              className="btn-primary"
            >
              Send an Open Application
            </a>
            <p className="text-slate-400 text-sm mt-6">
              Or browse{' '}
              <Link href="/blog/working-at-luxedry" className="text-brand-cyan font-semibold hover:underline">
                what the work is actually like
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
