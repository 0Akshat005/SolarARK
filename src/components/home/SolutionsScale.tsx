/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolutionsScale — Single Continuous Horizontal Photographic Band
 * Strictly adheres to revamp.md & reference mockup media_1788615637835.jpg:
 * - TEXT: Controlled content grid for header.
 * - IMAGE: Expansive, full-width continuous photographic band: | RESIDENTIAL | COMMERCIAL | INDUSTRIAL |
 * - The three photographs sit directly against one another with NO rounded cards, NO floating boxes,
 *   and NO large outer side gutters.
 * - Minimal direct text overlay: category, short descriptor, and circular outline arrow.
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
    <section className="w-full bg-[#FAF9F6] pt-8 sm:pt-10 lg:pt-12 pb-0 border-b border-stone-200/80">
      
      {/* ── CONTROLLED CONTENT GRID FOR HEADER TEXT ── */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 mb-6 sm:mb-8">
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
            <div className="relative h-[155px] lg:h-[165px] rounded-lg overflow-hidden border border-stone-300/80 shadow-xs bg-stone-900 group">
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
      </div>

      {/* ── EXPANSIVE FULL-WIDTH CONTINUOUS EDITORIAL IMAGE BAND (NO Rounded Cards, NO Gutters) ── */}
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
