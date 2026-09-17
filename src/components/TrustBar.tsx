'use client';
import { CalendarCheck, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const trusts = [
    { icon: <ShieldCheck size={28} />, title: 'Premium Care', desc: 'Expert fabric handling' },
    { icon: <Truck size={28} />, title: 'Free Pickup', desc: 'At your doorstep' },
    { icon: <CalendarCheck size={28} />, title: '48hr Delivery', desc: 'Fast turnaround' },
    { icon: <Sparkles size={28} />, title: 'Eco-friendly', desc: 'Safe for environment' },
  ];

  return (
    <section className="py-12 bg-white relative z-10 -mt-8 mx-4 md:mx-12 rounded-3xl shadow-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trusts.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
