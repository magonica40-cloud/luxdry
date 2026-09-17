'use client';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface-light">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6 animate-[fadeUp_0.8s_ease]">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide text-brand-cyan uppercase">LuxeDry Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-slate-900 animate-[fadeUp_0.8s_0.1s_ease_both]">
              Your Clothes Deserve <br />
              <span className="gradient-text">Luxe-Level Care.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-lg animate-[fadeUp_0.8s_0.2s_ease_both]">
              Professional laundry, steam ironing and dry cleaning with convenient doorstep pickup and delivery.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-[fadeUp_0.8s_0.3s_ease_both]">
              <a href="#book" className="btn-primary">Book a Pickup</a>
              <a href="#services" className="btn-outline">Explore Services</a>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-500 animate-[fadeUp_0.8s_0.4s_ease_both]">
              <span className="flex items-center gap-1.5"><Truck size={16} className="text-brand-cyan" /> Doorstep Pickup</span>
              <span className="flex items-center gap-1.5"><Sparkles size={16} className="text-brand-cyan" /> Professional Care</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-cyan" /> Fresh Delivery</span>
            </div>
          </div>
          
          {/* Image & Floating Cards */}
          <div className="relative animate-[fadeUp_1s_0.2s_ease_both] flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 mix-blend-overlay z-10"></div>
              <img src="/hero_bg.jpg" alt="Premium Laundry Service" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Card 1 */}
            <div className="absolute top-12 -left-6 md:-left-12 glass-card px-5 py-4 flex items-center gap-3 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center text-white">
                <Truck size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fast</p>
                <p className="text-sm font-bold text-slate-800">Pickup at your doorstep</p>
              </div>
            </div>
            
            {/* Floating Card 2 */}
            <div className="absolute bottom-24 -right-6 md:-right-12 glass-card px-5 py-4 flex items-center gap-3 animate-[float_5s_1s_ease-in-out_infinite_reverse]">
              <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Premium</p>
                <p className="text-sm font-bold text-slate-800">Expert Fabric Care</p>
              </div>
            </div>
            
            {/* Floating Card 3 */}
            <div className="absolute -bottom-6 left-10 md:left-20 glass-card px-5 py-4 flex items-center gap-3 animate-[float_7s_2s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Quality</p>
                <p className="text-sm font-bold text-slate-800">Fresh & Ready</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
