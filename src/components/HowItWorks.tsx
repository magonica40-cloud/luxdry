'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  Package,
  Pause,
  Play,
  ScanSearch,
  Shirt,
  SprayCan,
  WashingMachine,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const STEP_DURATION = 4500;

const stages = [
  {
    num: '01',
    icon: ScanSearch,
    title: 'Sorting & Inspection',
    desc: 'Check care labels, separate garments by fabric and colour, and inspect every spot and stain.',
    duration: 'On arrival',
    image: '/everyday_laundry.jpg',
    points: [
      'Every care label is read before anything is touched.',
      'Garments split by fabric weight, colour and soil level.',
      'Each stain is logged against the item so nothing gets lost.',
    ],
  },
  {
    num: '02',
    icon: SprayCan,
    title: 'Spot Treatment',
    desc: 'Stain-removal solutions matched to the specific stain and fabric.',
    duration: '2 – 6 hrs',
    image: '/premium_garments.jpg',
    points: [
      'Stain identified by type — oil, tannin, protein or dye.',
      'Solvent and dwell time matched to that stain, not to the load.',
      'Hidden seam tested before any chemistry goes near the face.',
    ],
  },
  {
    num: '03',
    icon: WashingMachine,
    title: 'Dry Cleaning',
    desc: 'Customised dry-cleaning machines for a deep clean, without damaging the garment.',
    duration: '2 – 4 hrs',
    image: '/b2b_laundry.jpg',
    points: [
      'Programme chosen per fabric, at 60–71°C where the textile allows.',
      'Chemical dosing measured, never eyeballed.',
      'Silks and suitings run on the gentle solvent cycle.',
    ],
  },
  {
    num: '04',
    icon: Shirt,
    title: 'Finishing',
    desc: 'Shirt, dress and coat finishing using professional equipment.',
    duration: '1 – 2 hrs',
    image: '/uniform_laundry.jpg',
    points: [
      'Steam pressure and crease setting dialled per garment type.',
      'Collars, cuffs and plackets hand-finished.',
      'Bulky linen pressed on the flatwork ironer, not by hand.',
    ],
  },
  {
    num: '05',
    icon: BadgeCheck,
    title: 'Quality Check',
    desc: 'Experts inspect the final quality and finishing before anything is packed.',
    duration: '30 mins',
    image: '/home_fabrics.jpg',
    points: [
      'Inspected under light, not in a pile.',
      'Anything with a surviving stain is pulled and re-worked.',
      'Item count verified against the original manifest.',
    ],
  },
  {
    num: '06',
    icon: Package,
    title: 'Packaging',
    desc: 'Carefully folded and packaged, ready for collection or delivery.',
    duration: 'Same evening',
    image: '/hotel_laundry.jpg',
    points: [
      'Folded, bagged or hung on a rail depending on the garment.',
      'Sealed and tagged with your item count.',
      'Loaded onto the route for the next scheduled drop.',
    ],
  },
] as const;

const LAST = stages.length - 1;

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView || paused) return;
    // Respect reduced-motion: no auto-advance, user drives with the controls.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(
      () => setActive((prev) => (prev + 1) % stages.length),
      STEP_DURATION
    );
    return () => window.clearInterval(id);
  }, [playing, inView, paused]);

  const goTo = useCallback((index: number) => {
    setActive(((index % stages.length) + stages.length) % stages.length);
  }, []);

  const jump = (index: number) => {
    setPlaying(false);
    goTo(index);
  };

  const handleKeys = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      jump(active + 1);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      jump(active - 1);
    }
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      onKeyDown={handleKeys}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-brand-cyan/10 rounded-full blur-3xl animate-drift" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 w-[380px] h-[380px] bg-brand-purple/10 rounded-full blur-3xl animate-drift [animation-delay:2s]" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 text-center lg:text-left">
          <ScrollReveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold text-xs uppercase tracking-widest mb-4">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Laundry Day, <span className="text-brand-cyan">Simplified.</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium mt-4">
              Six controlled stages between your dirty bag and a finished garment. Tap any step to
              stop the tour and look inside it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center justify-center lg:justify-end gap-4">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause the process tour' : 'Play the process tour'}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-brand-cyan hover:text-brand-navy transition-colors"
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
                {playing ? 'Pause tour' : 'Play tour'}
              </button>
              <span aria-live="polite" className="text-xs font-black uppercase tracking-widest text-slate-400 tabular-nums">
                Step {active + 1} / {stages.length}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Stepper */}
        <div className="relative mt-16">
          <div aria-hidden="true" className="hidden sm:block absolute left-[8.333%] right-[8.333%] top-8 lg:top-10 h-1 -translate-y-1/2 rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-aqua transition-[width] duration-700 ease-out"
              style={{ width: `${(active / LAST) * 100}%` }}
            />
          </div>

          <div className="relative grid grid-cols-3 gap-y-10 gap-x-4 sm:grid-cols-6 sm:gap-x-2">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => jump(i)}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`Step ${i + 1} of ${stages.length}: ${stage.title}`}
                  className="group relative flex flex-col items-center gap-4 text-center rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-brand-cyan/30"
                >
                  <span className="relative flex items-center justify-center">
                    {isActive && <span aria-hidden="true" className="absolute w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-cyan/40 pulse-ring" />}
                    <span
                      className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? 'bg-brand-cyan border-brand-cyan text-white shadow-glow scale-110'
                          : isDone
                            ? 'bg-brand-aqua/10 border-brand-aqua/50 text-brand-aqua'
                            : 'bg-white border-slate-100 text-slate-400 group-hover:-translate-y-1 group-hover:border-brand-cyan/50 group-hover:text-brand-cyan'
                      }`}
                    >
                      {isDone ? <Check size={26} strokeWidth={3} /> : <Icon size={26} />}
                    </span>
                    <span className={`absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-[0.65rem] font-black transition-colors ${isActive ? 'bg-brand-navy text-brand-cyan' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-navy group-hover:text-brand-cyan'}`}>
                      {stage.num}
                    </span>
                  </span>
                  <span className="max-w-[9.5rem]">
                    <span className={`block text-[0.8rem] sm:text-sm font-bold leading-snug transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                      {stage.title}
                    </span>
                    <span className="hidden lg:flex items-center justify-center gap-1 text-[0.7rem] font-semibold text-slate-400 mt-1">
                      <Clock size={11} aria-hidden="true" /> {stage.duration}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-14 grid lg:grid-cols-[1.05fr_1fr] gap-8 bg-slate-50 border border-slate-100 rounded-[2rem] p-6 sm:p-8 shadow-soft overflow-hidden">
          <div key={`img-${active}`} className="relative rounded-3xl overflow-hidden min-h-[260px] lg:min-h-[400px] shine animate-pop-in">
            <Image
              src={stages[active].image}
              alt={stages[active].title}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover animate-kenburns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
            <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-brand-navy text-[0.65rem] font-black uppercase tracking-widest">
              Step {active + 1} of {stages.length}
            </span>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <span className="text-6xl font-black text-white/90 leading-none">{stages[active].num}</span>
              <span className="inline-flex items-center gap-2 text-white text-sm font-bold">
                <Clock size={15} aria-hidden="true" /> {stages[active].duration}
              </span>
            </div>
          </div>

          <div key={`copy-${active}`} className="flex flex-col animate-pop-in" aria-live="polite">
            <div className="flex items-center gap-4 mb-5">
              <span className="relative w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                <span aria-hidden="true" className="absolute inset-0 rounded-2xl border border-dashed border-brand-cyan/40 animate-orbit" />
                {(() => {
                  const Icon = stages[active].icon;
                  return <Icon size={24} />;
                })()}
              </span>
              <h3 className="text-2xl font-black text-slate-900">{stages[active].title}</h3>
            </div>

            <p className="text-slate-600 text-lg font-medium leading-relaxed">{stages[active].desc}</p>

            <ul className="mt-6 space-y-3">
              {stages[active].points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-700">
                  <Check size={16} className="mt-1 shrink-0 text-brand-aqua" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  key={`meter-${active}-${playing}`}
                  className={`h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-aqua ${playing ? 'step-progress' : 'w-full opacity-40'}`}
                  style={{ '--step-duration': `${STEP_DURATION}ms` } as React.CSSProperties}
                />
              </div>
              <div className="flex items-center justify-between gap-4 mt-5">
                <div className="flex items-center gap-2">
                  {stages.map((stage, i) => (
                    <button
                      key={stage.num}
                      type="button"
                      onClick={() => jump(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-brand-cyan' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => jump(active - 1)}
                    aria-label="Previous step"
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => jump(active + 1)}
                    aria-label="Next step"
                    className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

