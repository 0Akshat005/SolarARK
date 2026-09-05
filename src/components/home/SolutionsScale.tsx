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
      
      {/* ── 3-ZONE EDITORIAL INTRO ROW (~30% / ~38–40% / ~17–20%) ── */}
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-5 sm:pt-6 lg:pt-7 pb-4 sm:pb-5">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 lg:gap-8">
          
          {/* 1. LEFT (~30%): Eyebrow + Large Dominant Display Heading */}
          <div className="md:w-[32%] lg:w-[30%] shrink-0 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                OUR SOLUTIONS
              </span>
              <span className="w-7 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.04]">
              Solar for<br />
              <span className="text-[#8B1E1E]">every scale.</span>
            </h2>
          </div>

          {/* 2. CENTER (~38–40%): Short Supporting Copy + Compact Pill CTA */}
          <div className="md:w-[42%] lg:w-[38%] space-y-2.5 md:pt-1 max-w-[370px]">
            <p className="text-stone-600 text-xs sm:text-[13.5px] font-normal leading-relaxed">
              From homes to industries, we design solar solutions that make energy simpler, smarter and more sustainable.
            </p>

            <div>
              <button
                onClick={() => onNavigate('/services')}
                className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#8B1E1E]/45 hover:border-[#8B1E1E] bg-transparent hover:bg-[#8B1E1E]/5 text-[#8B1E1E] text-xs font-heading font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 text-[#8B1E1E]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* 3. RIGHT (~17–20%): Small Landscape Accent Image (200–240px, NO card, NO shadow, NO border) */}
          <div className="hidden md:flex justify-end md:w-[22%] lg:w-[20%] shrink-0 md:pt-0.5">
            <div className="relative w-[210px] sm:w-[220px] lg:w-[230px] xl:w-[240px] h-[110px] sm:h-[114px] lg:h-[118px] xl:h-[120px] rounded-[3px] overflow-hidden bg-stone-900 select-none">
              {/* Landscape Image with Pavilion & Golden Sunlight */}
              <img
                src="/images/revamp/sun-landscape-tomorrow.jpg"
                alt="Architectural pavilion with golden sunlight"
                className="absolute inset-0 w-full h-full object-cover object-right-top transition-transform duration-700 hover:scale-104"
              />
              
              {/* Left Dark Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              
              {/* Typography Overlay + White Hairline Underline (Matching reference media_1788618702120.png) */}
              <div className="relative z-10 pl-3.5 pr-2 py-2.5 h-full flex flex-col justify-center">
                <span className="font-heading font-bold text-[11px] text-white leading-[1.25] tracking-tight">
                  Same sun.<br />
                  A brighter<br />
                  tomorrow.
                </span>
                <div className="w-7 h-[1.5px] bg-white/95 mt-1.5" />
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
