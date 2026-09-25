'use client';
import ScrollReveal from '@/components/ScrollReveal';
import { ShieldCheck, Leaf, Sparkles, Thermometer } from 'lucide-react';

export default function Compliance() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      
      {/* Decorative background lines */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Industrial Standards, <span className="text-brand-cyan">Uncompromised Care</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">
              We strictly adhere to global healthcare and hospitality standards, ensuring every fiber is sanitized, protected, and pristine.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <ScrollReveal delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full">
              <div className="h-14 w-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center mb-6">
                <Thermometer size={28} className="text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Thermal Disinfection</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Hospital-grade high-temperature washes to guarantee the elimination of 99.9% of bacteria and pathogens.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full">
              <div className="h-14 w-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center mb-6">
                <Leaf size={28} className="text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Grade Chemicals</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We use 100% commercial-grade, biodegradable detergents that are tough on stains but gentle on the environment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full">
              <div className="h-14 w-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} className="text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fabric Life Extension</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advanced chemistry and precise mechanical action designed specifically to prolong the lifespan of your expensive linen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full">
              <div className="h-14 w-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={28} className="text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Optical Brightening</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specialized treatments that prevent yellowing in white linens and maintain the vibrancy of colored staff uniforms.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
