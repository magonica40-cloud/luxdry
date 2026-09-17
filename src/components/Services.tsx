'use client';
import { useState } from 'react';
import { Shirt, WashingMachine, Wind, Box, Footprints, Scroll, Sofa, Package, Cat, Crown, ArrowRight } from 'lucide-react';

const allServices = [
  { id: 'wash-fold', category: 'everyday', icon: <Box />, name: 'Wash & Fold', desc: 'Everyday clothes cleaned, dried and neatly folded.' },
  { id: 'wash-iron', category: 'everyday', icon: <WashingMachine />, name: 'Wash & Iron', desc: 'Freshly washed clothes with a crisp, polished finish.' },
  { id: 'steam-iron', category: 'everyday', icon: <Wind />, name: 'Steam Iron', desc: 'Professional steam ironing for wrinkle-free clothes.' },
  
  { id: 'dry-clean', category: 'premium', icon: <Shirt />, name: 'Dry Cleaning', desc: 'Specialized care for delicate and premium garments.' },
  { id: 'saree', category: 'premium', icon: <Scroll />, name: 'Saree Care', desc: 'Gentle cleaning, finishing and careful handling of sarees.' },
  { id: 'premium-wear', category: 'premium', icon: <Crown />, name: 'Premium Garment Care', desc: 'Special handling for suits, dresses, silk, and delicate fabrics.' },
  
  { id: 'carpet', category: 'home', icon: <Sofa />, name: 'Carpet & Curtain', desc: 'Deep cleaning for household fabrics.' },
  { id: 'blanket', category: 'home', icon: <Package />, name: 'Blanket & Comforter', desc: 'Fresh, hygienic care for bulky bedding.' },
  { id: 'soft-toy', category: 'home', icon: <Cat />, name: 'Soft Toy Cleaning', desc: 'Gentle cleaning for children\'s soft toys.' },
  
  { id: 'shoe', category: 'footwear', icon: <Footprints />, name: 'Shoe Cleaning', desc: 'Deep cleaning and refreshing for your footwear.' },
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'everyday', label: 'Everyday Laundry' },
  { id: 'premium', label: 'Premium Garments' },
  { id: 'home', label: 'Home Fabric Care' },
  { id: 'footwear', label: 'Footwear Care' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === activeTab);

  return (
    <section className="py-24 bg-surface-light" id="services">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Everything Your <span className="text-brand-cyan">Wardrobe Needs</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            From everyday laundry to delicate garments, we give every piece the care it deserves.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat.id 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((svc) => (
            <div key={svc.id} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-surface-light text-brand-cyan flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/10 transition-all duration-300">
                {svc.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{svc.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {svc.desc}
              </p>
              <a href="#book" className="inline-flex items-center gap-1 text-sm font-bold text-brand-cyan hover:text-brand-blue transition-colors">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
