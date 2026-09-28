import type { Metadata } from 'next';
import Link from 'next/link';
import { Building, CheckCircle2, Leaf, ShieldCheck, Sparkles, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    'LuxeDry is a professional laundry, steam ironing and dry cleaning operation serving homes and businesses across the Bengaluru Rural belt.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Hygiene Without Compromise',
    body: 'Every load is processed on a documented hygiene protocol, at temperatures high enough to actually remove pathogens rather than merely rinse them away.',
  },
  {
    icon: Sparkles,
    title: 'Finish You Can See',
    body: 'A proper crease, a properly folded sheet, a garment returned on a proper hanger. The details are the product.',
  },
  {
    icon: Leaf,
    title: 'Measured, Not Claimed',
    body: 'We publish our water-per-kilogram and solvent recovery figures because a sustainability claim you cannot measure is not a claim.',
  },
  {
    icon: Users,
    title: 'People Who Stay',
    body: 'We promote from within and we pay on time. A stable team is the only way to get a consistent finish out of the door, every single day.',
  },
];

const milestones = [
  { year: '2019', title: 'Founded in Hoskote', body: 'Started as a single commercial washer serving neighbourhood hotels and homes around Hoskote Taluk.' },
  { year: '2021', title: 'First B2B contracts', body: 'Signed our first multi-property hospitality and healthcare accounts, and built a dedicated commercial line.' },
  { year: '2023', title: 'Steam pressing facility', body: 'Commissioned programmatic steam presses to deliver a consistent hotel-grade finish at volume.' },
  { year: '2025', title: 'Route expansion', body: 'Extended scheduled pickup and delivery across the Bengaluru Rural belt, covering six service pincode clusters.' },
  { year: '2026', title: 'SN Enterprises', body: 'Operating as SN Enterprises under the LuxeDry brand, with a structured careers and quality programme.' },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About LuxeDry"
        title="We run laundry properly —"
        highlight="because fabric is worth the effort"
        intro="LuxeDry is a professional laundry, steam ironing and dry cleaning operation based in Hoskote Taluk, serving both homes and commercial clients across the Bengaluru Rural belt."
        crumbs={[{ name: 'Home', href: '/' }]}
      />

      {/* Who we are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Who <span className="text-brand-cyan">we are</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                LuxeDry operates under SN Enterprises from Devalapura Village, Anugondanahalli
                Hobli, Hoskote Taluk. We started with a single commercial washer and a handful of
                hotel clients who were tired of buying linen that came back grey.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Today we run two distinct lines. One handles residential garments — dry cleaning,
                steam ironing, careful hand finishing. The other is a commercial operation built
                around hospitality, healthcare, restaurant and institutional linen, where the
                requirement is not perfection on every item but an absolutely consistent standard
                across thousands of items a day.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Those two lines share the same standard. That is the whole point of the business.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
              What we <span className="text-brand-cyan">stand for</span>
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
              Four commitments that decide how a garment is actually processed, not how it is
              described.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-3xl border border-slate-100 p-8 shadow-soft hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-6">
                    <v.icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-14 text-center">
              How we <span className="text-brand-cyan">got here</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-brand-navy text-brand-cyan font-black text-sm flex items-center justify-center">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-3" />}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{m.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { n: '100+', l: 'Business partners' },
                { n: '6', l: 'Service pincode clusters' },
                { n: '60–71°C', l: 'Commercial wash range' },
                { n: '24hr', l: 'Quote response time' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-4xl md:text-5xl font-black text-brand-cyan mb-2">{s.n}</div>
                  <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mx-auto mb-6">
                <Building size={30} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
                Want to work with us?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
                Whether you need residential laundry, a commercial linen partner, or you are
                looking for work — start with a message and we will route it to the right person.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/services" className="btn-outline">
                  <CheckCircle2 size={18} /> Explore Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
