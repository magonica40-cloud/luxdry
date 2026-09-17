'use client';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Everyday Laundry',
      desc: 'Perfect for your daily wear',
      price: '89',
      unit: 'per kg',
      features: ['Wash & Fold', 'Premium Detergent', 'Free Pickup & Delivery', '48hr Turnaround'],
      popular: false,
      color: 'bg-slate-100',
    },
    {
      name: 'Wash & Iron',
      desc: 'Crisp finish for office wear',
      price: '129',
      unit: 'per kg',
      features: ['Wash & Steam Iron', 'Stain Treatment', 'Free Pickup & Delivery', '48hr Turnaround'],
      popular: true,
      color: 'bg-brand-cyan/10',
    },
    {
      name: 'Premium Care',
      desc: 'For delicate & expensive fabrics',
      price: '199',
      unit: 'starting per piece',
      features: ['Dry Cleaning', 'Individual Inspection', 'Custom Packaging', '24hr Express Available'],
      popular: false,
      color: 'bg-brand-purple/10',
    }
  ];

  return (
    <section className="py-24 bg-surface-light" id="pricing">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Simple, Honest <span className="text-brand-cyan">Pricing</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Premium care without the premium price tag. No hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-white rounded-3xl p-8 border ${plan.popular ? 'border-brand-cyan shadow-soft transform -translate-y-2' : 'border-slate-100'} transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cyan text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm font-medium mb-6">{plan.desc}</p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-slate-500 font-bold">₹</span>
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium text-sm">/{plan.unit}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="#book" className={`w-full py-3.5 rounded-full font-bold transition-all flex justify-center items-center ${plan.popular ? 'bg-brand-cyan text-white shadow-glow hover:bg-cyan-400' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                Choose Plan
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-600 hover:text-brand-cyan transition-colors underline underline-offset-4">
            View Full Detailed Price List
          </a>
        </div>
        
      </div>
    </section>
  );
}
