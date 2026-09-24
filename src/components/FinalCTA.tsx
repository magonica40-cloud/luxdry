'use client';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-cyan relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Upgrade Your Laundry Operations?</h2>
        <p className="text-xl opacity-90 mb-10">
          Partner with LuxeDry today for reliable, professional, and hygienic commercial laundry solutions.
        </p>
        <a href="#book" className="inline-flex items-center gap-2 bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          Get a Custom Quote <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
