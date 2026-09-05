/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolutionsScale — Solutions Section with Compact Editorial Magazine Top Row
 * Strictly adheres to reference close-up media_1788617653069.png & layout proportions:
 * - 3 balanced horizontal zones on top row:
 *   1. Left (~32%): Eyebrow "OUR SOLUTIONS ────" + Heading "Solar for / every scale."
 *   2. Center (~42%): Short supporting copy + compact maroon outline CTA "Explore Solutions →"
 *   3. Right (~20-22%): Small compact landscape rectangular image accent (approx 18-22% viewport width,
 *      subtly rounded [3px], NO card border, NO shadow, flush right).
 * - Compact top row proportions with minimal vertical whitespace.
 * - Immediately transitions into the continuous, full-viewport-width 3-part image band:
 *   | RESIDENTIAL | COMMERCIAL | INDUSTRIAL |
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionsScaleProps {
  onNavigate: (path: string) => void;
}

export const SolutionsScale: React.FC<SolutionsScaleProps> = ({ onNavigate }) => {
  const solutions = [
    {
      id: 'residential',
      title: 'Residential Solar',
      subtitle: 'For a more independent home',
      image: '/images/projects/featured-residential.jpg',
      path: '/services',
    },
    {
      id: 'commercial',
      title: 'Commercial Solar',
      subtitle: 'For growing businesses',
      image: '/images/projects/featured-commercial.jpg',
      path: '/services',
    },
    {
      id: 'industrial',
      title: 'Industrial Solar',
      subtitle: 'For a stronger, sustainable future',
      image: '/images/projects/featured-industrial.jpg',
      path: '/services',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] border-b border-stone-200/80">
      
      {/* ── 3-COLUMN COMPACT EDITORIAL MAGAZINE TOP ROW (~30% / ~45% / ~22%) ── */}
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-7 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center justify-between">
          
          {/* 1. LEFT (~32%): Eyebrow + Large Display Heading */}
          <div className="md:col-span-4 space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                OUR SOLUTIONS
              </span>
              <span className="w-7 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.05]">
              Solar for<br />
              <span className="text-[#8B1E1E]">every scale.</span>
            </h2>
          </div>

          {/* 2. CENTER (~44%): Short Supporting Copy + Compact Outline Pill CTA */}
          <div className="md:col-span-5 space-y-3">
            <p className="text-stone-600 text-xs sm:text-sm lg:text-[14px] font-normal leading-relaxed max-w-[390px]">
              From homes to industries, we design solar solutions that make energy simpler, smarter and more sustainable.
            </p>

            <div>
              <button
                onClick={() => onNavigate('/services')}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-[#8B1E1E]/45 hover:border-[#8B1E1E] bg-transparent hover:bg-[#8B1E1E]/5 text-[#8B1E1E] text-xs font-heading font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#8B1E1E]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* 3. RIGHT (~20–22%): Small Landscape Rectangular Supporting Image Block (NO border, NO shadow, flush right) */}
          <div className="hidden md:flex md:col-span-3 justify-end">
            <div className="relative w-[280px] sm:w-[310px] lg:w-[340px] xl:w-[360px] h-[112px] sm:h-[120px] lg:h-[128px] xl:h-[134px] rounded-[4px] overflow-hidden bg-stone-900 group select-none">
              {/* Landscape Image with Pavilion & Golden Sunlight */}
              <img
                src="/images/revamp/sun-landscape-tomorrow.jpg"
                alt="Architectural pavilion with golden sunlight"
                className="absolute inset-0 w-full h-full object-cover object-right-top transition-transform duration-700 group-hover:scale-104"
              />
              
              {/* Left Dark Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
              
              {/* Typography Overlay + White Hairline Underline (Matching reference media_1788617653069.png) */}
              <div className="relative z-10 pl-4 sm:pl-5 pr-2 py-3 h-full flex flex-col justify-center">
                <span className="font-heading font-bold text-xs sm:text-[13px] text-white leading-[1.22] tracking-tight">
                  Same sun.<br />
                  A brighter<br />
                  tomorrow.
                </span>
                <div className="w-8 sm:w-10 h-[1.5px] bg-white/95 mt-2" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── SEAMLESS TRANSITION INTO THE CONTINUOUS FULL-WIDTH 3-PART IMAGE BAND ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-stone-300/80">
        {solutions.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.path)}
            className={`group relative h-[360px] sm:h-[420px] lg:h-[460px] xl:h-[500px] overflow-hidden cursor-pointer flex flex-col justify-end p-6 sm:p-8 lg:p-10 bg-stone-950 ${
              idx !== 0 ? 'border-t md:border-t-0 md:border-l border-white/20' : ''
            }`}
          >
            {/* Full-Bleed Rectangular Photography */}
            <img
              src={item.image}
              alt={`${item.title} rooftop solar installation`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
              loading="eager"
            />

            {/* Cinematic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

            {/* Direct Information Overlay (Title + Subtitle + Circular Outline Arrow) */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-2xl sm:text-[26px] lg:text-3xl text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200/90 font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Circular Outline Arrow Button */}
              <div className="w-10 h-10 rounded-full border border-white/70 group-hover:border-white group-hover:bg-white/20 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={1.75} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
