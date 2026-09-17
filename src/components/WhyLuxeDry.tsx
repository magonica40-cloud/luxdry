'use client';
import { CheckCircle } from 'lucide-react';

export default function WhyLuxeDry() {
  const features = [
    'Professional Fabric Care',
    'Hygienic Cleaning Process',
    'Convenient Doorstep Pickup',
    'Careful Garment Handling',
    'Transparent Pricing',
    'On-Time Delivery',
    'Modern Cleaning Technology',
    'Dedicated Customer Support'
  ];

  return (
    <section className="py-24 bg-surface-light overflow-hidden" id="why-luxedry">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-cyan/10 rounded-[2.5rem] transform -rotate-3 scale-105"></div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft">
              <img src="/hero_bg.jpg" alt="Fabric Care" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-soft max-w-[200px] hidden md:block">
              <div className="text-4xl font-black text-brand-cyan mb-2">10k+</div>
              <p className="text-sm font-bold text-slate-600">Garments cleaned with care every month.</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              More Than Cleaning. <br />
              <span className="text-brand-cyan">We Care for Every Fabric.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              We don&apos;t just wash clothes. We understand the science of fabrics, using the right temperatures, premium detergents, and careful handling to extend the life of your wardrobe.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-cyan shrink-0" />
                  <span className="font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="#book" className="btn-primary">Experience the Difference</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
