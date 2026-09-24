'use client';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface-light bg-grid-pattern">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6 animate-[fadeUp_0.8s_ease]">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide text-brand-cyan uppercase">Trusted B2B Laundry Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-900 animate-[fadeUp_0.8s_0.1s_ease_both]">
              Fresh Clothes. <br />
              <span className="gradient-text">Less Hassle.</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 animate-[fadeUp_0.8s_0.2s_ease_both]">
              Professional Laundry & Dry Cleaning at Your Doorstep
            </h2>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-lg animate-[fadeUp_0.8s_0.3s_ease_both]">
              Take laundry off your to-do list. We provide reliable washing, drying, ironing, and dry-cleaning services with convenient doorstep pickup and delivery.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-[fadeUp_0.8s_0.3s_ease_both]">
              <a href="#book" className="btn-primary">Get a Custom Quote</a>
              <a href="#services" className="btn-outline">Explore Services</a>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-500 animate-[fadeUp_0.8s_0.4s_ease_both]">
              <span className="flex items-center gap-1.5"><Truck size={16} className="text-brand-cyan" /> Doorstep Pickup</span>
              <span className="flex items-center gap-1.5"><Sparkles size={16} className="text-brand-cyan" /> Professional Care</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-cyan" /> Fresh Delivery</span>
            </div>
          </div>
          
          {/* Image Editorial Composition */}
          <div className="relative animate-[fadeUp_1s_0.2s_ease_both] flex justify-center mt-10 lg:mt-0">
            {/* Offset backdrop */}
            <div className="absolute top-6 -right-4 md:-right-8 w-full max-w-md aspect-[4/5] bg-brand-cyan/10 rounded-3xl border border-brand-cyan/20 z-0"></div>
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent mix-blend-overlay z-10"></div>
              <img src="/hero_bg.jpg" alt="Premium Commercial Laundry Service" className="w-full h-full object-cover" />
            </div>
            
            {/* Editorial Circle Badge */}
            <div className="absolute -bottom-8 -left-4 md:-left-8 w-32 h-32 bg-white rounded-full p-2 shadow-xl z-20 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-full h-full rounded-full border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
                <span className="text-brand-cyan font-black text-2xl leading-none">100+</span>
                <span className="text-[0.6rem] font-bold text-slate-500 uppercase tracking-widest mt-1">Partners</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
