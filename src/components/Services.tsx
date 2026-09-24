'use client';
import { ArrowRight, Building, Plus, Utensils, Briefcase, Dumbbell, Home, Scissors, UserCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const allServices = [
  { id: 'b2b-hotel', icon: <Building />, name: 'Hotel & Hospitality Laundry', desc: 'Keep guest rooms and common areas fresh with professional cleaning for bedsheets, towels, pillow covers, duvet covers, uniforms, table linen, and other hospitality textiles.', image: '/hotel_laundry.jpg' },
  { id: 'b2b-hospital', icon: <Plus />, name: 'Hospital & Healthcare Laundry', desc: 'Professional laundry processing for healthcare facilities, including bedsheets, patient garments, towels, uniforms, and other approved textile items, with a strong focus on hygienic handling.', image: '/hospital_laundry.jpg' },
  { id: 'b2b-restaurant', icon: <Utensils />, name: 'Restaurant & Food Service Laundry', desc: 'Maintain a clean and professional dining environment with cleaning services for tablecloths, napkins, kitchen linen, chef uniforms, aprons, and other restaurant textiles.', image: '/restaurant_laundry.jpg' },
  { id: 'b2b-corporate', icon: <Briefcase />, name: 'Corporate & Office Laundry', desc: 'Keep your workplace looking professional with laundry and garment-care solutions for employee uniforms, housekeeping textiles, curtains, and other business requirements.', image: '/corporate_laundry.jpg' },
  { id: 'b2b-gym', icon: <Dumbbell />, name: 'Gym & Fitness Laundry', desc: 'Fresh and clean towels, uniforms, workout textiles, and other washable items for gyms, fitness centers, spas, and wellness facilities.', image: '/gym_laundry.jpg' },
  { id: 'b2b-hostel', icon: <Home />, name: 'Hostel & PG Laundry', desc: 'High-volume laundry solutions for hostels, PGs, student accommodations, and co-living spaces, including bedsheets, pillow covers, towels, blankets, and resident laundry.', image: '/hostel_laundry.jpg' },
  { id: 'b2b-salon', icon: <Scissors />, name: 'Salon & Spa Laundry', desc: 'Professional cleaning for towels, robes, uniforms, sheets, and other salon and spa textiles, helping maintain a clean and comfortable customer environment.', image: '/salon_laundry.jpg' },
  { id: 'b2b-uniform', icon: <UserCheck />, name: 'Uniform & Workwear Laundry', desc: 'Keep staff uniforms and workwear clean, fresh, and professionally finished with scheduled commercial laundry services.', image: '/uniform_laundry.jpg' },
];

export default function Services() {
  return (
    <section className="py-24 bg-surface-light" id="services">
      <div className="container mx-auto px-4">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Our <span className="text-brand-cyan">B2B Laundry Services</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Professional commercial laundry solutions designed to keep your business running smoothly.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 pb-12">
          {allServices.map((svc) => (
            <div key={svc.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col xl:[&:nth-child(even)]:translate-y-12 lg:[&:nth-child(even)]:translate-y-8">
              <div className="h-48 w-full relative overflow-hidden bg-slate-100">
                <img 
                  src={svc.image} 
                  alt={svc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-5 flex items-center gap-3 pr-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white drop-shadow-md leading-tight">{svc.name}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                  {svc.desc}
                </p>
                <a href="#book" className="inline-flex items-center gap-1 text-sm font-bold text-brand-cyan hover:text-brand-blue transition-colors mt-auto">
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
