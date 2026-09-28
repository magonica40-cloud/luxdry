'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons';
import { site, services } from '@/data/site';

const socialBase =
  'text-slate-400 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-all';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo_lockup_light.png"
                alt="LuxeDry Logo"
                width={593}
                height={489}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
              Professional laundry, steam ironing and dry cleaning with convenient doorstep service.
              We care for every fabric.
            </p>
            <div className="flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LuxeDry on Instagram"
                className={socialBase}
              >
                <InstagramIcon size={19} />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={socialBase}
              >
                <WhatsAppIcon size={19} />
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-brand-cyan font-medium text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Our Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
                { name: 'FAQs', href: '/#faqs' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-brand-cyan font-medium text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-white font-medium text-sm hover:text-brand-cyan transition-colors"
                  >
                    {site.phone}
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">{site.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-white font-medium text-sm hover:text-brand-cyan transition-colors break-all"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <p className="text-slate-400 font-medium text-sm leading-relaxed">
                  {site.address.line1}, <br />
                  {site.address.line2}, <br />
                  {site.address.line3}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} LuxeDry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-slate-500 hover:text-brand-cyan text-sm font-medium">
              Privacy
            </Link>
            <Link href="/" className="text-slate-500 hover:text-brand-cyan text-sm font-medium">
              Terms
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-brand-cyan text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
