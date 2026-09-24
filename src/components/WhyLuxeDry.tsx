'use client';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function WhyLuxeDry() {
  const features = [
    'Convenient Doorstep Service',
    'Professional Cleaning',
    'Careful Handling',
    'Hygienic Processing',
    'On-Time Service',
    'Affordable Pricing'
  ];

  return (
    <section className="py-24 bg-surface-light overflow-hidden" id="why-luxedry">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <ScrollReveal>
            <div className="max-w-xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
              What We Care About
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Your Clothes Deserve <span className="text-brand-cyan">Better Care</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              From everyday wear to your most delicate garments, our team takes care of your laundry so you don't have to. Whether it's a week's worth of clothes, a formal outfit, or household linen, we're here to make laundry simple.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800">Quality</h4>
                <p className="text-slate-600">We focus on delivering clean, fresh, and well-finished garments with every order.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Care</h4>
                <p className="text-slate-600">Every garment deserves the right treatment. We pay attention to fabric type and care requirements.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Convenience</h4>
                <p className="text-slate-600">From doorstep pickup to delivery, we make the entire laundry process simple.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Customer Satisfaction</h4>
                <p className="text-slate-600">We value your trust and aim to provide a smooth experience from the moment you place an order until your clothes are delivered.</p>
              </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-black text-slate-900 mb-8 relative">Why Choose Us?</h3>
              <div className="space-y-6 relative">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 transition-transform group-hover/item:scale-110">
                      <CheckCircle size={20} />
                    </div>
                    <span className="font-bold text-slate-700 text-lg transition-colors group-hover/item:text-brand-cyan">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-slate-100 relative">
                <a href="#book" className="btn-primary w-full text-center block">Get a Custom Quote</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
