'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How do I book a laundry pickup?', a: 'Simply book online or contact our team with your pickup details. We\'ll arrange a convenient time to collect your clothes.' },
    { q: 'Do you offer doorstep pickup and delivery?', a: 'Yes. We provide convenient pickup and delivery within our service areas.' },
    { q: 'Do you handle delicate clothes?', a: 'Yes. Delicate garments are handled according to their fabric and care requirements.' },
    { q: 'How long does laundry service take?', a: 'Turnaround time depends on the service and garment type. Our team will provide the expected delivery time when you place your order.' },
    { q: 'Can I request ironing along with washing?', a: 'Yes. You can choose washing, ironing, or a combination of services based on your needs.' }
  ];

  return (
    <section className="py-24 bg-surface-light" id="faqs">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Frequently Asked <span className="text-brand-cyan">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-brand-cyan shadow-sm' : 'border-slate-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-bold pr-4 ${openIndex === idx ? 'text-brand-cyan' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'transform rotate-180 text-brand-cyan' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
