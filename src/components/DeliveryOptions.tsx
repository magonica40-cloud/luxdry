'use client';
import Link from 'next/link';
import { Check, Clock, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { deliveryOptions } from '@/data/site';

const iconMap = { Zap, Clock } as const;

export default function DeliveryOptions() {
  return (
    <section className="py-24 bg-surface-light" id="delivery">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
            Delivery Options
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Pick the Turnaround <span className="text-brand-cyan">That Suits You</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Every batch runs through the same care standards. The only difference is how fast it comes back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {deliveryOptions.map((option, idx) => {
            const Icon = iconMap[option.icon];
            const isExpress = option.id === 'express';

            return (
              <ScrollReveal key={option.id} delay={idx * 150}>
                <div
                  className={`h-full rounded-3xl p-8 md:p-10 border transition-all duration-300 flex flex-col ${
                    isExpress
                      ? 'bg-brand-navy text-white border-brand-cyan/40 shadow-xl lg:-translate-y-2'
                      : 'bg-white text-slate-900 border-slate-200 shadow-soft hover:border-brand-cyan/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        isExpress ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-cyan/10 text-brand-cyan'
                      }`}
                    >
                      <Icon size={28} />
                    </div>
                    {isExpress && (
                      <span className="py-1.5 px-3 rounded-full bg-brand-cyan text-white text-xs font-bold uppercase tracking-wider">
                        Fastest
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{option.name}</h3>

                  <p
                    className={`text-4xl md:text-5xl font-black mb-1 ${
                      isExpress ? 'text-brand-cyan' : 'text-slate-900'
                    }`}
                  >
                    {option.turnaround}
                  </p>
                  <p className="text-sm font-semibold text-slate-400 mb-6">Typical turnaround time</p>

                  <p className={`leading-relaxed font-medium mb-6 ${isExpress ? 'text-slate-300' : 'text-slate-600'}`}>
                    {option.summary}
                  </p>

                  <div
                    className={`rounded-2xl p-4 mb-6 ${
                      isExpress ? 'bg-white/5 border border-white/10' : 'bg-surface-light border border-slate-100'
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 text-brand-cyan">
                      Best for
                    </p>
                    <p className={`text-sm font-medium ${isExpress ? 'text-slate-300' : 'text-slate-600'}`}>
                      {option.bestFor}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {option.includes.map((item) => (
                      <li key={item} className={`flex items-start gap-3 text-sm font-medium ${isExpress ? 'text-slate-300' : 'text-slate-600'}`}>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isExpress ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-cyan/10 text-brand-cyan'
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={isExpress ? 'btn-primary w-full' : 'btn-outline w-full border-slate-200'}
                  >
                    {isExpress ? 'Request Express' : 'Book Normal Delivery'}
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="text-center text-sm text-slate-500 font-medium mt-10">
          Turnaround starts from the moment your laundry is collected. Need a same-day option?{' '}
          <Link href="/contact" className="text-brand-cyan font-bold hover:underline">
            Talk to our team
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
