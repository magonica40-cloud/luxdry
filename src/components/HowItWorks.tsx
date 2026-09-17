'use client';
import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Book', desc: 'Choose your service and schedule a pickup online.' },
    { num: '02', title: 'We Pick Up', desc: 'Our team collects your clothes from your doorstep.' },
    { num: '03', title: 'We Clean', desc: 'Professionally cleaned and carefully handled.' },
    { num: '04', title: 'We Deliver', desc: 'Fresh, clean clothes arrive at your doorstep.' },
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Laundry Day, <span className="text-brand-cyan">Simplified.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-cyan/20 via-brand-cyan to-brand-cyan/20 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-soft flex items-center justify-center mb-6 group-hover:border-brand-cyan/30 transition-colors duration-300 relative">
                  <span className="text-3xl font-black text-slate-800">{step.num}</span>
                  <div className="absolute -bottom-3 w-8 h-8 rounded-full bg-brand-cyan text-white flex items-center justify-center border-4 border-white">
                    <CheckCircle size={16} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
