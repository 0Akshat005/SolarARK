/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TECH_SPECS } from '../data/solarData';
import { Cpu, ShieldCheck, Zap, Layers, ArrowRight, Check } from 'lucide-react';

export const TechnologySection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [activeTechIndex, setActiveTechIndex] = useState<number>(0);

  const selectedTech = TECH_SPECS[activeTechIndex];

  return (
    <section id="technology" className="py-20 bg-[#0B1730] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Industrial-Grade Hardware & Software</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tier-1 German & Japanese Solar Engineering
          </h2>

          <p className="text-base text-slate-300">
            We strictly source ALMM-approved, Tier-1 hardware components designed to perform through 
            scorching Indian summers, heavy monsoon rains, and coastal humidity.
          </p>
        </div>

        {/* Tech Spec Selector Tabs & Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech Tabs (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {TECH_SPECS.map((spec, idx) => (
              <button
                key={spec.category}
                onClick={() => setActiveTechIndex(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all text-xs font-medium flex items-center justify-between cursor-pointer ${
                  activeTechIndex === idx
                    ? 'bg-slate-800 border-[#8B1E1E] text-white shadow-lg ring-1 ring-[#8B1E1E]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">{spec.category}</span>
                  <div className="text-sm font-bold font-heading text-white mt-0.5">{spec.title}</div>
                </div>

                <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#8B1E1E]/20 text-amber-300 border border-[#8B1E1E]/40">
                  {spec.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Tech Detail Panel (Right 8 Cols) */}
          <div className="lg:col-span-8 bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-8">
            <div className="space-y-4 border-b border-slate-800 pb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFB020] uppercase tracking-wider font-heading">
                  {selectedTech.category} Architecture
                </span>

                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                  {selectedTech.badge}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold font-heading text-white">
                {selectedTech.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedTech.description}
              </p>
            </div>

            {/* Spec Bullet List */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Engineering Specifications & Certifications:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedTech.specifications.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware CTA */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Full technical datasheet provided during free 3D design consultation.
              </span>

              <button
                onClick={onCtaClick}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Tech Datasheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
