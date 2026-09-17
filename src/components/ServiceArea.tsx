'use client';
import { useState } from 'react';
import { MapPin, Search, CheckCircle } from 'lucide-react';

export default function ServiceArea() {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode) return;
    
    setStatus('checking');
    // Simulate API call
    setTimeout(() => {
      // Mock validation: just assume pincodes starting with 5 or 1 are available
      if (pincode.startsWith('5') || pincode.startsWith('1') || pincode === '400001') {
        setStatus('available');
      } else {
        setStatus('unavailable');
      }
    }, 800);
  };

  return (
    <section className="py-24 bg-surface-light border-y border-slate-100" id="service-area">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Map/Visual Side */}
          <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
            {/* Simple abstract map visual */}
            <div className="absolute inset-0 bg-[#e2e8f0] opacity-50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Location pins */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
              <MapPin className="text-brand-cyan" fill="#cffafe" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-brand-cyan rounded-full shadow-glow flex items-center justify-center animate-[pulse-ring_3s_infinite]">
              <MapPin className="text-white w-8 h-8" fill="#06b6d4" />
            </div>
            <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-[float_5s_1s_ease-in-out_infinite]">
              <MapPin className="text-brand-purple" fill="#f3e8ff" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
          </div>

          {/* Form Side */}
          <div>
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
              Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              We Come to <span className="text-brand-cyan">You</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium mb-8">
              Check if LuxeDry is available in your neighborhood. Enter your pincode below.
            </p>

            <form onSubmit={handleCheck} className="flex gap-2 max-w-md relative mb-6">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  aria-label="Enter Pincode"
                  value={pincode}
                  onChange={(e) => { setPincode(e.target.value); setStatus('idle'); }}
                  placeholder="Enter Pincode (e.g. 400001)" 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-white font-medium shadow-sm"
                  maxLength={6}
                />
              </div>
              <button type="submit" disabled={status === 'checking'} className="px-6 py-4 bg-brand-cyan text-brand-navy rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-glow flex items-center gap-2">
                {status === 'checking' ? <span className="w-5 h-5 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin"></span> : <Search size={20} />}
                <span className="hidden sm:inline">Check</span>
              </button>
            </form>

            {/* Status Messages */}
            <div className="h-12">
              {status === 'available' && (
                <div className="flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100 inline-flex animate-[fadeUp_0.3s_ease]">
                  <CheckCircle size={18} /> Yes! We serve your area.
                </div>
              )}
              {status === 'unavailable' && (
                <div className="flex items-center gap-2 text-rose-600 font-bold bg-rose-50 px-4 py-2 rounded-lg border border-rose-100 inline-flex animate-[fadeUp_0.3s_ease]">
                  Oops! We don&apos;t serve this area yet.
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Popular Areas</p>
              <div className="flex flex-wrap gap-2">
                {['South Delhi', 'Gurugram', 'Noida', 'Indiranagar', 'Bandra'].map(area => (
                  <span key={area} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
