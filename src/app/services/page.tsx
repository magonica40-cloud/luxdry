import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Building,
  Dumbbell,
  Home,
  Plus,
  Scissors,
  UserCheck,
  Utensils,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { services, site } from '@/data/site';

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    'Commercial and residential laundry services for hotels, hospitals, restaurants, corporate offices, gyms, hostels, salons and uniform management.',
};

const iconMap = {
  Building,
  Plus,
  Utensils,
  Briefcase,
  Dumbbell,
  Home,
  Scissors,
  UserCheck,
} as const;

const included = [
  'Scheduled doorstep pickup and delivery',
  'Segregation by fabric, colour and client',
  'Industrial wash, dry and steam-press cycles',
  'Documented item counts on every load',
  'Damaged item quarantine and reporting',
  'Custom pricing based on your volume',
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Do"
        title="Commercial laundry for"
        highlight="eight industries"
        intro="We run a separate commercial line for institutional textiles, and a residential line for individual garments. Both are held to the same standard, because both come back to someone who will judge the result."
        crumbs={[{ name: 'Home', href: '/' }]}
        image="/everyday_laundry.jpg"
        imageAlt="Folded laundry ready for delivery"
        chips={['Hotels', 'Hospitals', 'Restaurants', 'Corporate', 'Gyms', 'Hostels', 'Salons', 'Uniforms']}
        tiles={[
          { src: '/hospital_laundry.jpg', alt: 'Hospital laundry' },
          { src: '/restaurant_laundry.jpg', alt: 'Restaurant linen' },
          { src: '/gym_laundry.jpg', alt: 'Gym towels' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => {
                const Icon = iconMap[svc.icon as keyof typeof iconMap];
                return (
                  <article
                    key={svc.id}
                    id={svc.id}
                    className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-2 flex flex-col"
                  >
                    <div className="h-52 relative overflow-hidden bg-slate-200">
                      <Image
                        src={svc.image}
                        alt={svc.name}
                        width={800}
                        height={600}
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                      <div className="absolute bottom-5 left-6 flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0">
                          <Icon size={22} />
                        </div>
                        <h2 className="text-lg font-bold text-white leading-tight">{svc.short}</h2>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">
                        {svc.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">{svc.desc}</p>
                      <Link
                        href="/contact"
                        className="mt-6 pt-5 border-t border-slate-200/80 text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-brand-cyan inline-flex items-center gap-2 transition-colors"
                      >
                        Request a quote <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
                Every service <span className="text-brand-cyan">includes</span>
              </h2>
              <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
                The process around the wash is where most providers quietly cut corners. Ours does
                not.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-5"
                  >
                    <span className="text-brand-cyan font-bold shrink-0 mt-0.5" aria-hidden="true">
                      &#10003;
                    </span>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              Not sure which service you need?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-9">
              Send us a list of what you process and your weekly volume. We will tell you plainly
              whether we are the right fit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Custom Quote <ArrowRight size={18} />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white/20 text-white font-bold rounded-full transition-all duration-300 hover:border-brand-cyan hover:text-brand-cyan"
              >
                {site.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
