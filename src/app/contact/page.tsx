import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { InstagramIcon } from '@/components/SocialIcons';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    'Contact LuxeDry for commercial laundry quotes, residential laundry, service availability or careers enquiries.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Tell us what you need"
        highlight="processed"
        intro="Commercial quote requests get a response within 24 hours. For anything urgent, WhatsApp is the fastest way to reach us."
        crumbs={[{ name: 'Home', href: '/' }]}
        image="/hero_bg.jpg"
        imageAlt="Premium commercial laundry service"
        chips={['24hr quote reply', 'WhatsApp fastest', 'Open all 7 days']}
        tiles={[
          { src: '/b2b_laundry.jpg', alt: 'Commercial laundry' },
          { src: '/everyday_laundry.jpg', alt: 'Everyday laundry' },
          { src: '/hotel_laundry.jpg', alt: 'Hotel linen' },
        ]}
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Phone,
                  label: 'Call Us',
                  value: site.phone,
                  href: `tel:${site.phoneHref}`,
                  note: site.hours,
                  external: false,
                },
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: site.email,
                  href: `mailto:${site.email}`,
                  note: 'Replies within 24 hours',
                  external: false,
                },
                {
                  icon: () => <InstagramIcon size={24} />,
                  label: 'Instagram',
                  value: '@luxedry_',
                  href: site.instagram,
                  note: 'Recent work and updates',
                  external: true,
                },
                {
                  icon: Clock,
                  label: 'Working Hours',
                  value: site.hours,
                  href: null,
                  note: 'Open all seven days',
                  external: false,
                },
              ].map((c) => {
                const inner = (
                  <div className="bg-white rounded-3xl border border-slate-100 p-8 h-full shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-5">
                      <c.icon size={24} />
                    </div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-2">
                      {c.label}
                    </p>
                    <p className="text-slate-900 font-bold text-sm mb-1 break-all">{c.value}</p>
                    <p className="text-slate-500 text-xs">{c.note}</p>
                  </div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="h-full">
                    {inner}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
                  Visit the <span className="text-brand-cyan">facility</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  If you are a commercial client, we encourage you to visit the plant before you
                  sign. Seeing the sorting area, the wash line and the finishing floor tells you more
                  in ten minutes than any proposal can.
                </p>
                <address className="not-italic bg-slate-50 border border-slate-100 rounded-3xl p-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={22} className="text-brand-cyan shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900 mb-2">SN Enterprises</p>
                      <p className="text-slate-600 leading-relaxed">
                        {site.address.line1},<br />
                        {site.address.line2},<br />
                        {site.address.line3}
                      </p>
                    </div>
                  </div>
                </address>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 h-full">
                <h2 className="text-2xl font-black text-slate-900 mb-3">Send us a message</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-7">
                  Use whichever channel suits you. We read everything and we answer everything.
                </p>

                <div className="space-y-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-cyan hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                        Email
                      </p>
                      <p className="text-slate-900 font-bold text-sm truncate">{site.email}</p>
                    </div>
                  </a>

                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-cyan hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                        WhatsApp
                      </p>
                      <p className="text-slate-900 font-bold text-sm">{site.phone}</p>
                    </div>
                  </a>

                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-cyan hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]/10 text-[#DD2A7B] flex items-center justify-center shrink-0">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                        Instagram
                      </p>
                      <p className="text-slate-900 font-bold text-sm">@luxedry_</p>
                    </div>
                  </a>
                </div>

                <Link href="/#book" className="btn-primary w-full mt-7">
                  Request a Custom Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
