'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800" id="contact">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img src="/new_logo_light.png" alt="LuxeDry Logo" className="h-12 w-auto" />
            </a>
            <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
              Professional laundry, steam ironing and dry cleaning with convenient doorstep service. We care for every fabric.
            </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="text-slate-400 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-slate-400 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-slate-400 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {['Hotel & Hospitality', 'Hospital & Healthcare', 'Restaurant & Food', 'Corporate & Office', 'Gym & Fitness', 'Hostel & PG', 'Uniform & Workwear'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-cyan font-medium text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-cyan font-medium text-sm transition-colors">{item}</a>
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
                  <p className="text-white font-medium text-sm">+91 9180247261</p>
                  <p className="text-slate-500 text-xs mt-0.5">Mon-Sun, 8am - 8pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <p className="text-white font-medium text-sm">snenterprises3366@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <p className="text-slate-400 font-medium text-sm leading-relaxed">
                  40/3, Devalapura Village, <br />
                  Anugondanahalli Hobli, Hoskote Taluk, <br />
                  Bengaluru Rural - 560067
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
            <a href="#" className="text-slate-500 hover:text-brand-cyan text-sm font-medium">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-brand-cyan text-sm font-medium">Terms</a>
            <a href="#" className="text-slate-500 hover:text-brand-cyan text-sm font-medium">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
