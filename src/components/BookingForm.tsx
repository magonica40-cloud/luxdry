'use client';
import { useState } from 'react';
import { site, whatsappLink } from '@/data/site';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState('');

  /**
   * There is no backend in this project yet, so a submission is handed to WhatsApp
   * pre-filled (email is offered as the fallback) instead of disappearing into a
   * fake "success" state.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '').trim();

    const message = [
      'New commercial laundry enquiry from the LuxeDry website',
      `Company: ${value('companyName')}`,
      `Contact person: ${value('contactPerson')}`,
      `Phone: ${value('phone')}`,
      `Industry: ${value('industry')}`,
      `Preferred start date: ${value('date')}`,
      value('requirements') ? `Requirements: ${value('requirements')}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    setSummary(message);
    setSubmitted(true);
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    'Commercial laundry enquiry'
  )}&body=${encodeURIComponent(summary)}`;

  return (
    <section className="py-24 bg-white" id="book">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card border border-slate-100 shadow-soft rounded-[2.5rem] overflow-hidden">
          <div className="grid md:grid-cols-5">
            
            {/* Left Info Side */}
            <div className="md:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-3xl font-black mb-4 relative z-10">Partner with LuxeDry</h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                Request a custom commercial laundry quote tailored to your business needs. Our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6 relative z-10 mt-auto">
                <div>
                  <p className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <a href={`tel:${site.phoneHref}`} className="font-semibold hover:text-brand-cyan transition-colors">
                    {site.phone}
                  </a>
                </div>
                <div>
                  <p className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${site.email}`} className="font-semibold hover:text-brand-cyan transition-colors break-all">
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-brand-cyan transition-colors">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="md:col-span-3 p-10 bg-white">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-[fadeUp_0.5s_ease]">
                  <div className="w-20 h-20 bg-brand-cyan/10 text-brand-cyan rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">One tap left — send it over</h3>
                  <p className="text-slate-500 font-medium mb-6">
                    WhatsApp opened in a new tab carrying everything you just entered. Hit send and
                    our team replies within 24 hours. If the tab was blocked, or you prefer email:{' '}
                    <a href={mailtoHref} className="text-brand-cyan font-bold hover:underline break-all">
                      {site.email}
                    </a>
                    .
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={whatsappLink(summary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-brand-cyan text-brand-navy font-bold shadow-glow hover:bg-cyan-400 transition-colors"
                    >
                      Open WhatsApp again
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-bold text-slate-700 mb-1.5">Company Name</label>
                      <input id="companyName" name="companyName" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="Luxe Hotel" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                      <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="+91 99999 99999" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-bold text-slate-700 mb-1.5">Contact Person</label>
                    <input id="contactPerson" name="contactPerson" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="Jane Doe" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-bold text-slate-700 mb-1.5">Industry Type</label>
                      <select id="industry" name="industry" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50 text-slate-600 appearance-none">
                        <option value="">Select industry</option>
                        <option value="Hotel & Hospitality">Hotel & Hospitality</option>
                        <option value="Hospital & Healthcare">Hospital & Healthcare</option>
                        <option value="Restaurant & Food">Restaurant & Food</option>
                        <option value="Corporate & Office">Corporate & Office</option>
                        <option value="Gym & Fitness">Gym & Fitness</option>
                        <option value="Other Commercial">Other Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-bold text-slate-700 mb-1.5">Preferred Date</label>
                      <input id="date" name="date" type="date" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50 text-slate-600" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Volume / requirements <span className="text-slate-400 font-semibold">(optional)</span>
                    </label>
                    <textarea id="requirements" name="requirements" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="e.g. 200 kg of linen a week, twice-weekly pickup" />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-brand-cyan text-brand-navy font-bold shadow-glow hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 mt-4">
                    Request Quote on WhatsApp
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium mt-4">
                    Your details open in WhatsApp so the enquiry actually reaches us. Pricing is
                    customised to your volume.
                  </p>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
