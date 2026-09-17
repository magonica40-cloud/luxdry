'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white" id="book">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card border border-slate-100 shadow-soft rounded-[2.5rem] overflow-hidden">
          <div className="grid md:grid-cols-5">
            
            {/* Left Info Side */}
            <div className="md:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-3xl font-black mb-4 relative z-10">Ready to Skip Laundry Day?</h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                Schedule a pickup in just a few steps. We&apos;ll take care of the rest, bringing you fresh, clean clothes directly to your door.
              </p>
              
              <div className="space-y-6 relative z-10 mt-auto">
                <div>
                  <p className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="font-semibold">+91 800-LUXEDRY</p>
                </div>
                <div>
                  <p className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="font-semibold">+91 98765 43210</p>
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
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-slate-500 font-medium">
                    Our team will contact you shortly to confirm the pickup timing. Thank you for choosing LuxeDry!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                      <input id="fullName" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                      <input id="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="+91 99999 99999" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-1.5">Pickup Address</label>
                    <textarea id="address" required rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50" placeholder="Enter your full address"></textarea>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-1.5">Service Required</label>
                      <select id="service" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50 text-slate-600 appearance-none">
                        <option value="">Select a service</option>
                        <option value="wash-fold">Wash & Fold</option>
                        <option value="wash-iron">Wash & Iron</option>
                        <option value="dry-clean">Dry Cleaning</option>
                        <option value="premium">Premium Care</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-bold text-slate-700 mb-1.5">Preferred Date</label>
                      <input id="date" type="date" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-slate-50 text-slate-600" />
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-brand-cyan text-brand-navy font-bold shadow-glow hover:bg-cyan-400 hover:-translate-y-1 transition-all duration-300 mt-4">
                    Schedule Pickup
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium mt-4">
                    No payment required at booking. Pay after delivery.
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
