/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolutionsScale — Award-Level Editorial Solutions Presentation
 * Refined independently using the reference composition as the benchmark:
 * - Full available viewport width used intelligently across desktop viewports.
 * - 3-zone cohesive editorial top row:
 *   1. Left (~30%): Dominant display headline "Solar for every scale." with micro-eyebrow
 *   2. Center (~38%): Architectural supporting prose + precision outline pill CTA
 *   3. Right (~22-25%): Cinematic landscape vignette reaching naturally toward the right edge
 *      with zero dead space, crisp rectangular crop, soft gradient scrim & editorial typography
 * - Compact vertical rhythm seamlessly transitioning into the monumental 3-panel image band:
 *   | 01 / RESIDENTIAL | 02 / COMMERCIAL | 03 / INDUSTRIAL |
 *   spanning full viewport width with razor-thin hairline dividers and tactile interactive hover states.
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
    <section className="w-full bg-[#FAF8F5] border-b border-stone-200/80 overflow-hidden">
      
      {/* ── 3-ZONE EDITORIAL INTRO ROW (LEFT PADDED, RIGHT FLUSH TO VIEWPORT EDGE) ── */}
      <div className="w-full pl-5 sm:pl-8 lg:pl-12 xl:pl-16 2xl:pl-20 pr-0 pt-5 sm:pt-6 lg:pt-7 pb-5 sm:pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          
          {/* 1. LEFT (~30%): Eyebrow + Large Dominant Display Heading */}
          <div className="md:w-[32%] lg:w-[28%] shrink-0 space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500">
                OUR SOLUTIONS
              </span>
              <span className="w-7 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-stone-900 tracking-tight leading-[1.03]">
              Solar for<br />
              <span className="word-accent-subtle">every scale.</span>
            </h2>

            <div className="solutions-heading-accent mt-2.5" />
          </div>

          {/* 2. CENTER (~38–40%): Supporting Copy + Architectural Outline Pill CTA */}
          <div className="md:w-[40%] lg:w-[36%] space-y-3 max-w-[420px]">
            <p className="text-stone-600 text-xs sm:text-[13.5px] font-normal leading-relaxed">
              From homes to industries, we design solar solutions that make energy simpler, smarter and more sustainable.
            </p>

            <div>
              <button
                onClick={() => onNavigate('/services')}
                className="group inline-flex items-center gap-2 px-5 py-2.5 min-h-[40px] rounded-xl border border-[#8B1E1E]/45 hover:border-[#8B1E1E] bg-transparent hover:bg-[#8B1E1E]/8 text-[#8B1E1E] text-xs font-heading font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#8B1E1E]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* 3. RIGHT: Full-Fledge Landscape Image Flush to the Right Viewport Edge (STRICTLY NO RIGHT GAP) */}
          <div className="hidden md:flex justify-end md:w-[32%] lg:w-[34%] xl:w-[33%] shrink-0">
            <div 
              onClick={() => onNavigate('/services')}
              className="relative w-full h-[120px] sm:h-[130px] lg:h-[138px] xl:h-[144px] rounded-l-[3px] rounded-r-none overflow-hidden bg-stone-900 select-none group cursor-pointer"
            >
              {/* Full-Fledge Landscape Image with Pavilion & Golden Sunlight */}
              <img
                src="/images/revamp/sun-landscape-tomorrow.jpg"
                alt="Architectural pavilion with golden sunlight"
                className="absolute inset-0 w-full h-full object-cover object-right-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Left Dark Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Typography Overlay + White Hairline Underline (Matching reference media_1788634585840.png) */}
              <div className="relative z-10 pl-5 sm:pl-6 pr-2 py-3 h-full flex flex-col justify-center">
                <span className="font-heading font-bold text-xs sm:text-[13px] lg:text-[13.5px] text-white leading-[1.22] tracking-tight">
                  Same sun.<br />
                  A brighter<br />
                  tomorrow.
                </span>
                <div className="w-8 sm:w-10 h-[1.5px] bg-white/95 mt-2 transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── SEAMLESS TRANSITION INTO THE MONUMENTAL FULL-WIDTH 3-PART IMAGE BAND ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-stone-200/90">
        {solutions.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.path)}
            className={`group relative h-[260px] sm:h-[360px] md:h-[480px] lg:h-[540px] xl:h-[580px] overflow-hidden cursor-pointer flex flex-col justify-end p-5 sm:p-8 lg:p-10 bg-stone-950 ${
              idx !== 0 ? 'border-t md:border-t-0 md:border-l border-white/15' : ''
            }`}
          >
            {/* Full-Bleed Rectangular Photography */}
            <img
              src={item.image}
              alt={`${item.title} rooftop solar installation`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />

            {/* Cinematic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

            {/* Direct Information Overlay (Title + Subtitle + Circular Outline Arrow) */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-2xl sm:text-[26px] lg:text-[30px] text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Circular Outline Arrow Button */}
              <div className="w-11 h-11 rounded-full border border-white/60 group-hover:border-white group-hover:bg-white text-white group-hover:text-stone-950 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-108">
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
