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
    <section id="technology" className="py-20 bg-[#FAF9F6] text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold font-heading border border-stone-200">
            <Cpu className="w-4 h-4 text-stone-600" />
            <span>Industrial-Grade Hardware &amp; Software</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0B1730] tracking-tight">
            Tier-1 German &amp; Japanese Solar Engineering
          </h2>

          <p className="text-base text-stone-600">
            We strictly source ALMM-approved, Tier-1 hardware components designed to perform through 
            scorching Indian summers, heavy monsoon rains, and coastal humidity.
          </p>
        </div>

        {/* Tech Spec Selector Tabs & Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech Tabs (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {TECH_SPECS.map((spec, idx) => {
              const isActive = activeTechIndex === idx;
              return (
                <button
                  key={spec.category}
                  onClick={() => setActiveTechIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all text-xs font-medium flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#8B1E1E] border-[#8B1E1E] text-white shadow-md'
                      : 'bg-white border-stone-200 text-stone-600 hover:text-slate-900 hover:bg-stone-50'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] uppercase font-semibold ${isActive ? 'text-amber-200' : 'text-stone-400'}`}>
                      {spec.category}
                    </span>
                    <div className={`text-sm font-semibold font-heading mt-0.5 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {spec.title}
                    </div>
                  </div>

                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg border ${
                    isActive
                      ? 'bg-white/20 text-white border-white/30'
                      : 'bg-stone-100 text-slate-700 border-stone-200'
                  }`}>
                    {spec.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tech Detail Panel (Right 8 Cols) */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-sm space-y-8">
            <div className="space-y-4 border-b border-stone-100 pb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8B1E1E] uppercase tracking-wider font-heading">
                  {selectedTech.category} Architecture
                </span>

                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {selectedTech.badge}
                </span>
              </div>

              <h3 className="text-2xl font-semibold font-heading text-[#0B1730]">
                {selectedTech.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                {selectedTech.description}
              </p>
            </div>

            {/* Spec Bullet List */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-heading">
                Engineering Specifications &amp; Certifications:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedTech.specifications.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware CTA */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100">
              <span className="text-xs text-stone-500">
                Full technical datasheet provided during free 3D design consultation.
              </span>

              <button
                onClick={onCtaClick}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#8B1E1E]/20 shrink-0"
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
