'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How does LuxeDry pickup and delivery work?', a: 'Simply book online or via WhatsApp. Our team will pick up your clothes from your doorstep at the scheduled time, clean them according to your instructions, and deliver them back fresh within 48 hours.' },
    { q: 'How long does laundry take?', a: 'Our standard turnaround time is 48 hours. We also offer 24-hour express service for an additional fee.' },
    { q: 'Do you offer dry cleaning?', a: 'Yes! We offer premium dry cleaning for suits, dresses, silk, wool, and other delicate fabrics.' },
    { q: 'Do you clean shoes?', a: 'Absolutely. Our specialized shoe laundry service can refresh and deep clean sneakers, leather shoes, and more.' },
    { q: 'Do you clean sarees?', a: 'Yes, we provide expert saree care, including delicate dry cleaning, steam pressing, and saree rolling to ensure the fabric remains crisp.' },
    { q: 'Is doorstep pickup available?', a: 'Yes, we provide 100% free doorstep pickup and delivery across all our serviceable areas.' },
    { q: 'How can I track my order?', a: 'Once your order is picked up, you will receive an SMS/WhatsApp with a tracking link so you can check the live status of your garments.' },
    { q: 'What happens if a garment has special care instructions?', a: 'Our team thoroughly inspects each garment before cleaning. If a care label specifies special instructions (like "Dry Clean Only"), we strictly adhere to it.' },
  ];

  return (
    <section className="py-24 bg-surface-light" id="faq">
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
