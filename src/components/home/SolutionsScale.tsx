/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolutionsScale — Single Cohesive Three-Panel Editorial Image Band
 * Rebuilt strictly to adhere to revamp.md:
 * - NO independent rounded cards with white bottom containers.
 * - Single continuous 3-panel editorial image band: [ Residential | Commercial | Industrial ]
 * - Photography is the dominant visual element with minimal textual overlay.
 * - Asymmetric editorial header with restrained typography.
 */

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface SolutionsScaleProps {
  onNavigate: (path: string) => void;
}

export const SolutionsScale: React.FC<SolutionsScaleProps> = ({ onNavigate }) => {
  const solutions = [
    {
      id: 'residential',
      num: '01',
      title: 'Residential Solar',
      descriptor: 'Villas, bungalows & independent homes with ₹78,000 PM Surya Ghar direct subsidy.',
      image: '/images/projects/featured-residential.jpg',
      badge: '3 kW – 10 kW',
      path: '/services',
    },
    {
      id: 'commercial',
      num: '02',
      title: 'Commercial Solar',
      descriptor: 'Offices, healthcare campuses & educational institutes slashing peak grid tariffs.',
      image: '/images/projects/featured-commercial.jpg',
      badge: '10 kW – 100 kW',
      path: '/services',
    },
    {
      id: 'industrial',
      num: '03',
      title: 'Industrial Solar',
      descriptor: 'High-capacity megawatt arrays for manufacturing plants, cold storages & warehouses.',
      image: '/images/projects/featured-industrial.jpg',
      badge: '100 kW – 1 MW+',
      path: '/services',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-8 sm:py-10 lg:py-12 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6 sm:space-y-8">

        {/* ── ASYMMETRIC EDITORIAL HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left: Eyebrow + Headline */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-600">
                OUR SOLUTIONS
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.08]">
              Solar for{' '}
              <span className="text-[#8B1E1E]">every scale.</span>
            </h2>
          </div>

          {/* Right: Short Descriptor & Direct Navigation */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="text-stone-600 text-xs sm:text-sm font-normal leading-relaxed max-w-md">
              From private residential rooftops to high-yield megawatt industrial plants, we engineer solar solutions built for structural longevity, high efficiency, and maximum financial return.
            </p>

            <button
              onClick={() => onNavigate('/services')}
              className="group shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-semibold text-[#8B1E1E] hover:text-[#701616] transition-colors cursor-pointer self-start sm:self-end pb-0.5"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ── SINGLE COHESIVE THREE-PANEL EDITORIAL IMAGE BAND ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl sm:rounded-2xl overflow-hidden border border-stone-300/80 bg-stone-900 shadow-sm">
          {solutions.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.path)}
              className={`group relative h-[380px] sm:h-[430px] lg:h-[480px] overflow-hidden cursor-pointer flex flex-col justify-between p-6 sm:p-7 ${
                idx !== 0 ? 'border-t md:border-t-0 md:border-l border-white/15' : ''
              }`}
            >
              {/* Large Rectangular Photographic Backdrop */}
              <img
                src={item.image}
                alt={`${item.title} rooftop solar installation`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Cinematic Scrim Gradient (Integrated, No Separate White Card) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/25 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Row: Category Numeral + Capacity Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-white/80 tracking-wider">
                  {item.num}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono font-medium text-white shadow-2xs">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Row: Title + Descriptor + Subtle Action */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-[#8B1E1E] backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-stone-200/90 font-normal leading-relaxed max-w-sm">
                  {item.descriptor}
                </p>

                {/* Subtle Red Hairline Indicator on Hover */}
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#8B1E1E] transition-all duration-300 mt-2" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
