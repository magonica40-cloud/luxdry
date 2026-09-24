'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function AboutUs() {
  return (
    <section className="relative py-24 bg-white bg-dot-pattern" id="about-us">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              We Make Laundry <span className="text-brand-cyan">Simple</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              At <strong className="text-brand-cyan">Luxe Dry</strong>, we believe laundry should be convenient, reliable, and stress-free. Our goal is to provide high-quality laundry and garment-care services that give you clean, fresh, and neatly finished clothes without taking time out of your busy schedule.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              From everyday clothes to delicate garments, we handle every order with care and attention. Our professional cleaning process is designed to care for different fabrics while delivering consistently fresh results.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why We Started</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Laundry is an essential part of everyday life, but it can also be time-consuming. We started <strong className="text-slate-800">Luxe Dry</strong> to make professional laundry care easily accessible and convenient for individuals, families, and businesses.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With convenient pickup and delivery, professional cleaning, and dependable service, we take the hassle out of laundry.
            </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
