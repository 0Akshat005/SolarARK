/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolutionsScale — Single Cohesive Three-Panel Editorial Image Band
 * Strictly matched to reference mockup media_1788615637835.jpg:
 * - 3-column asymmetric header:
 *   Col 1: Eyebrow "OUR SOLUTIONS" + headline "Solar for every scale."
 *   Col 2: Concise descriptive paragraph + outline pill button "Explore Solutions →"
 *   Col 3: Vertical rectangular photograph tile "Same sun. A brighter tomorrow."
 * - Visual band: 3 large rectangular images (Residential, Commercial, Industrial)
 *   with bottom-left title + subtitle and bottom-right circular outline arrow button.
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
    <section className="w-full bg-[#FAF9F6] py-8 sm:py-10 lg:py-12 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6 sm:space-y-8">

        {/* ── 3-COLUMN ASYMMETRIC EDITORIAL HEADER (Faithful to Reference) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Column 1: Eyebrow + Headline (approx 4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                OUR SOLUTIONS
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.06]">
              Solar for<br />
              <span className="text-[#8B1E1E]">every scale.</span>
            </h2>
          </div>

          {/* Column 2: Paragraph + Pill Outline Button (approx 5 cols) */}
          <div className="md:col-span-5 space-y-4 max-w-md">
            <p className="text-stone-600 text-xs sm:text-sm font-normal leading-relaxed">
              From homes to industries, we design solar solutions that make energy simpler, smarter and more sustainable.
            </p>

            <button
              onClick={() => onNavigate('/services')}
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-stone-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 text-xs font-heading font-semibold transition-all duration-200 cursor-pointer bg-transparent"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Column 3: Asymmetric Vertical Photo Tile "Same sun. A brighter tomorrow." (approx 3 cols) */}
          <div className="hidden md:block md:col-span-3">
            <div className="relative h-[160px] lg:h-[175px] rounded-xl overflow-hidden border border-stone-300/80 shadow-xs bg-stone-900 group">
              <img
                src="/images/revamp/sun-brighter-tomorrow.jpg"
                alt="Sun shining through lush canopy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              
              <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                <span className="font-heading font-bold text-base lg:text-[17px] text-white leading-tight tracking-tight">
                  Same sun.<br />
                  A brighter<br />
                  tomorrow.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3-PANEL RECTANGULAR EDITORIAL IMAGE BAND ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {solutions.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.path)}
              className="group relative h-[340px] sm:h-[380px] lg:h-[420px] rounded-xl overflow-hidden cursor-pointer flex flex-col justify-end p-6 sm:p-7 border border-stone-300/70 bg-stone-950 shadow-sm"
            >
              {/* Rectangular Backdrop Photo */}
              <img
                src={item.image}
                alt={`${item.title} rooftop solar installation`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Editorial Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Bottom Content: Title + Subtitle on Left, Circular Outline Arrow on Right */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200/90 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Circular Outline Arrow Button (Matching Reference) */}
                <div className="w-9 h-9 rounded-full border border-white/70 group-hover:border-white group-hover:bg-white/15 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
