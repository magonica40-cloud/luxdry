'use client';
import { useState } from 'react';
import { MapPin, Search, CheckCircle, MessageCircle } from 'lucide-react';
import {
  findCoverage,
  serviceableAreas,
  serviceablePincodes,
  whatsappLink,
  type Branch,
} from '@/data/site';

export default function ServiceArea() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle');
  const [match, setMatch] = useState<Branch | null>(null);

  /** Looks the entry up against the real branch coverage list in data/site.ts. */
  const lookup = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setMatch(null);
      setStatus('idle');
      return;
    }
    setStatus('checking');
    const found = findCoverage(trimmed) ?? null;
    // Small settle delay so the result never flashes past unreadable.
    window.setTimeout(() => {
      setMatch(found);
      setStatus(found ? 'available' : 'unavailable');
    }, 350);
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    lookup(query);
  };

  const pickArea = (area: string) => {
    setQuery(area);
    lookup(area);
  };

  return (
    <section className="py-24 bg-surface-light border-y border-slate-100" id="service-area">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Map/Visual Side */}
          <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
            <div className="absolute inset-0 bg-[#e2e8f0] opacity-50"></div>
            
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
              Check if LuxeDry is available in your neighborhood. Enter your pincode or area name
              below.
            </p>

            <form onSubmit={handleCheck} className="flex gap-2 max-w-md relative mb-6">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  aria-label="Enter your pincode or area name"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setStatus('idle'); }}
                  placeholder="Pincode or area (e.g. 560095)" 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan transition-colors bg-white font-medium shadow-sm"
                  maxLength={24}
                />
              </div>
              <button type="submit" disabled={status === 'checking'} className="px-6 py-4 bg-brand-cyan text-brand-navy rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-glow flex items-center gap-2">
                {status === 'checking' ? <span className="w-5 h-5 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin"></span> : <Search size={20} />}
                <span className="hidden sm:inline">Check</span>
              </button>
            </form>

            {/* Status Messages */}
            <div className="min-h-[3.25rem]">
              {status === 'available' && match && (
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 animate-[fadeUp_0.3s_ease]">
                  <p className="flex items-center gap-2 text-emerald-700 font-bold">
                    <CheckCircle size={18} className="shrink-0" /> Yes — the {match.name} branch serves
                    you.
                  </p>
                  <p className="text-emerald-800/80 text-sm font-medium mt-1">
                    {match.turnaround} turnaround &middot; pickup {match.pickupSlot}
                  </p>
                </div>
              )}
              {status === 'unavailable' && (
                <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 animate-[fadeUp_0.3s_ease]">
                  <p className="text-rose-700 font-bold">
                    We don&apos;t have a collection route for &ldquo;{query}&rdquo; yet.
                  </p>
                  <a
                    href={whatsappLink(`Hi LuxeDry, do you offer pickup and delivery at ${query.trim()}?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-brand-navy bg-white border border-slate-200 rounded-lg px-3 py-1.5 hover:border-brand-cyan transition-colors"
                  >
                    <MessageCircle size={15} /> Ask us on WhatsApp
                  </a>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Areas we cover today</p>
              <div className="flex flex-wrap gap-2">
                {serviceableAreas.slice(0, 10).map(area => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => pickArea(area)}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    {area}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium mt-4">
                {serviceablePincodes.length} pin codes live on our routes across Bengaluru.
              </p>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
