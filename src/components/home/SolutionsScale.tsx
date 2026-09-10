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
    <section className="w-full bg-[#F7F5F0] border-b border-[#E6E3DD] overflow-hidden">
      
      {/* ── BALANCED 3-PART EDITORIAL INTRO ROW (ALIGNED ACROSS SECTION WIDTH) ── */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 lg:py-9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          
          {/* 1. LEFT (~36%): Eyebrow + Large Dominant Display Heading + Accent Line */}
          <div className="md:col-span-5 lg:col-span-4 space-y-1.5 sm:space-y-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-body text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68]">
                OUR SOLUTIONS
              </span>
              <span className="w-7 h-px bg-[#E6E3DD]" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-medium text-[#151817] tracking-tight leading-[1.03]">
              Solar for<br />
              <span className="word-accent-subtle">every scale.</span>
            </h2>

            <div className="solutions-heading-accent mt-2.5" />
          </div>

          {/* 2. CENTER (~42%): Narrative Supporting Copy (Bridges Heading and Action) */}
          <div className="md:col-span-4 lg:col-span-5">
            <p className="text-[#6C6C68] text-sm sm:text-[15px] lg:text-[16px] xl:text-[16.5px] font-body font-normal leading-relaxed max-w-md lg:max-w-lg">
              From homes to industries, we design solar solutions that make energy simpler, smarter and more sustainable.
            </p>
          </div>

          {/* 3. RIGHT (~22%): Architectural Outline Pill CTA (Right-Aligned) */}
          <div className="md:col-span-3 lg:col-span-3 md:flex md:justify-end">
            <button
              onClick={() => onNavigate('/services')}
              className="group inline-flex items-center gap-2.5 px-6 py-3 min-h-[44px] rounded-xl border border-[#7A211D]/40 hover:border-[#7A211D] bg-transparent hover:bg-[#7A211D]/8 text-[#7A211D] text-xs sm:text-[13.5px] font-body font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A211D]"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#7A211D]" strokeWidth={2} />
            </button>
          </div>

        </div>
      </div>

      {/* ── SEAMLESS TRANSITION INTO THE MONUMENTAL FULL-WIDTH 3-PART IMAGE BAND ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-[#E6E3DD]">
        {solutions.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.path)}
            className={`group relative h-[260px] sm:h-[360px] md:h-[480px] lg:h-[540px] xl:h-[580px] overflow-hidden cursor-pointer flex flex-col justify-end p-5 sm:p-8 lg:p-10 bg-[#151817] ${
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
                <h3 className="font-heading font-medium text-2xl sm:text-[26px] lg:text-[30px] text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-body font-normal leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Circular Outline Arrow Button */}
              <div className="w-11 h-11 rounded-full border border-white/60 group-hover:border-white group-hover:bg-white text-white group-hover:text-[#151817] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-108">
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
