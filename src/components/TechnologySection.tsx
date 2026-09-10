/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TECH_SPECS } from '../data/solarData';
import { Cpu, ShieldCheck, Zap, Layers, ArrowRight, Check } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

export const TechnologySection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [activeTechIndex, setActiveTechIndex] = useState<number>(0);

  const selectedTech = TECH_SPECS[activeTechIndex];

  return (
    <section id="technology" className="py-20 bg-[#F7F5F0] text-[#151817] border-b border-[#E6E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-medium font-body uppercase tracking-[0.18em] border border-[#E6E3DD]">
            <Cpu className="w-4 h-4 text-stone-600" />
            <span>Industrial-Grade Hardware &amp; Software</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#151817] tracking-tight">
            Tier-1 German &amp; Japanese Solar Engineering
          </h2>

          <p className="text-base text-stone-600 font-body">
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
                  className={`w-full text-left p-5 rounded-2xl border transition-all text-xs font-medium flex items-center justify-between cursor-pointer font-body ${
                    isActive
                      ? 'bg-[#7A211D] border-[#7A211D] text-white shadow-xs'
                      : 'bg-white border-[#E6E3DD] text-stone-600 hover:text-[#151817] hover:bg-stone-50'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] uppercase font-medium tracking-[0.18em] ${isActive ? 'text-amber-200' : 'text-stone-400'}`}>
                      {spec.category}
                    </span>
                    <div className={`text-sm font-medium font-heading mt-0.5 ${isActive ? 'text-white' : 'text-[#151817]'}`}>
                      {spec.title}
                    </div>
                  </div>

                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-lg border font-body ${
                    isActive
                      ? 'bg-white/20 text-white border-white/30'
                      : 'bg-stone-100 text-stone-700 border-[#E6E3DD]'
                  }`}>
                    {spec.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tech Detail Panel (Right 8 Cols) */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-[#E6E3DD] shadow-sm space-y-8">
            <div className="space-y-4 border-b border-[#E6E3DD] pb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#7A211D] uppercase tracking-[0.18em] font-body">
                  {selectedTech.category} Architecture
                </span>

                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-body">
                  {selectedTech.badge}
                </span>
              </div>

              <h3 className="text-2xl font-medium font-heading text-[#151817]">
                {selectedTech.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed font-normal font-body">
                {selectedTech.description}
              </p>
            </div>

            {/* Spec Bullet List */}
            <div className="space-y-3">
              <span className="text-xs font-medium text-stone-700 uppercase tracking-[0.18em] font-body">
                Engineering Specifications &amp; Certifications:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedTech.specifications.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-stone-50 border border-[#E6E3DD] text-xs text-slate-700 font-medium font-body">
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

              <PrimaryButton
                onClick={onCtaClick}
                size="sm"
                className="shrink-0"
              >
                Request Tech Datasheet
              </PrimaryButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
