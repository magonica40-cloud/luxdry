'use client';
import { Droplets, Wind, Sun, Sparkles } from 'lucide-react';

export default function FabricCare() {
  const fabrics = [
    { name: 'Cotton', icon: <Droplets />, temp: 'Cold Wash', method: 'Gentle Cycle' },
    { name: 'Silk', icon: <Wind />, temp: 'Cold Hand Wash', method: 'Air Dry' },
    { name: 'Wool', icon: <Sun />, temp: 'Warm Wash', method: 'Flat Dry' },
    { name: 'Synthetics', icon: <Sparkles />, temp: 'Warm Wash', method: 'Tumble Dry Low' },
  ];

  return (
    <section className="py-24 bg-brand-navy text-white" id="fabric-care">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Scientific Fabric Care</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Different fabrics demand different treatments. We use specialized processes for each material.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {fabrics.map((fabric, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mb-6">
                {fabric.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{fabric.name}</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Temp:</span>
                  <span className="text-white font-medium">{fabric.temp}</span>
                </div>
                <div className="flex justify-between">
                  <span>Method:</span>
                  <span className="text-white font-medium">{fabric.method}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
