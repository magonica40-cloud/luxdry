'use client';
import Image from 'next/image';
import { useState } from 'react';
import { branches, branchDirectionsUrl, type Branch } from '@/data/site';
import ScrollReveal from '@/components/ScrollReveal';
import { Check, Clock, MapPin, Navigation, Zap } from 'lucide-react';

export default function Branches() {
  const [active, setActive] = useState<Branch>(branches[0]);
  const isActiveBranch = active.slug === 'head-office';

  return (
    <section id="branches" className="relative py-24 bg-white overflow-x-clip">
      <div aria-hidden="true" className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-3xl animate-drift" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-14 items-start">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-brand-cyan" />
                Our Branches
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Four <span className="text-brand-cyan">Bengaluru</span> locations, one processing standard
              </h2>
              <p className="text-slate-600 mb-10">
                Every branch collects, sorts and finishes to the same checklist. Tap a branch to see
                its coverage, hours and turnaround — then open directions.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {branches.map((branch, i) => {
                const isActive = branch.slug === active.slug;
                return (
                  <ScrollReveal key={branch.slug} delay={i * 0.07}>
                    <button
                      type="button"
                      onClick={() => setActive(branch)}
                      aria-pressed={isActive}
                      className={`group w-full text-left rounded-3xl border p-5 transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-navy border-brand-navy text-white shadow-hard -translate-y-1'
                          : 'bg-white border-slate-100 hover:border-brand-cyan/40 hover:-translate-y-1 hover:shadow-soft'
                      }`}
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-brand-cyan text-brand-navy' : 'bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-navy'}`}>
                          <MapPin size={18} />
                        </span>
                        <span className={`text-[0.65rem] font-black uppercase tracking-widest ${isActive ? 'text-brand-cyan' : 'text-slate-400'}`}>
                          {branch.pincode}
                        </span>
                      </span>
                      <span className="block font-bold mt-4">{branch.name}</span>
                      <span className={`block text-sm mt-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {branch.area}
                      </span>
                      <span className={`mt-3 pt-3 border-t flex items-center gap-2 text-xs font-bold ${isActive ? 'border-white/15 text-slate-200' : 'border-slate-100 text-slate-500'}`}>
                        <Zap size={13} className="text-brand-cyan" aria-hidden="true" />
                        {branch.turnaround}
                      </span>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Active branch detail */}
          <ScrollReveal delay={0.1}>
            <div className="lg:sticky lg:top-32 rounded-[2rem] bg-slate-50 border border-slate-100 overflow-hidden shadow-soft">
              <div key={active.slug} className="relative h-56 sm:h-64 shine animate-pop-in">
                <Image
                  src={active.image}
                  alt={`${active.name} branch`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover animate-kenburns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent" />
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-brand-cyan text-brand-navy text-[0.65rem] font-black uppercase tracking-widest">
                  {active.coverage[0]}
                </span>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-black text-white">{active.name}</h3>
                  <p className="text-white/80 text-sm font-medium mt-1">{active.area}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-slate-600 font-medium leading-relaxed">{active.blurb}</p>

                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-4 py-3">
                    <Clock size={17} className="text-brand-cyan shrink-0" aria-hidden="true" />
                    <span className="text-sm font-bold text-slate-800">{active.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-100 px-4 py-3">
                    <Zap size={17} className="text-brand-cyan shrink-0" aria-hidden="true" />
                    <span className="text-sm font-bold text-slate-800">{active.turnaround}</span>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                    Pickup coverage
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.coverage.map((area) => (
                      <span key={area} className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-7 space-y-2.5">
                  {active.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm text-slate-700">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-aqua" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs font-semibold text-slate-500">
                  {isActiveBranch
                    ? 'All bulk and institutional linen for the four branches is processed here.'
                    : 'Collected here, processed to the same checklist, and returned on the same route.'}
                </p>

                <a
                  href={branchDirectionsUrl(active)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-cyan text-brand-navy font-bold hover:shadow-glow hover:-translate-y-1 transition-all"
                >
                  <Navigation size={16} aria-hidden="true" />
                  Get directions
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

