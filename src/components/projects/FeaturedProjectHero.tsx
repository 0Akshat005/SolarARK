/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 2: FEATURED PROJECT HERO — Panoramic Flagship Showcase
 * Directly mirrors the inspiration layout with 3-metric strip, clean typography,
 * panoramic solar installation backdrop, and slide controls.
 */

import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';

interface FeaturedProjectHeroProps {
  projects: ProjectCaseStudy[];
  onSelectProject: (project: ProjectCaseStudy) => void;
  onCtaClick?: () => void;
}

export const FeaturedProjectHero: React.FC<FeaturedProjectHeroProps> = ({
  projects,
  onSelectProject,
  onCtaClick,
}) => {
  // Extract top 5 featured or high-capacity projects
  const displayList = React.useMemo(() => {
    const featured = projects.filter((p) => p.featured);
    const combined = [...featured, ...projects.filter((p) => !p.featured)];
    return combined.slice(0, 5);
  }, [projects]);

  const [activeIndex, setActiveIndex] = useState(0);
  const current = displayList[activeIndex] || displayList[0];

  if (!current) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? displayList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === displayList.length - 1 ? 0 : prev + 1));
  };

  // Metric values
  const systemSizeDisplay = `${current.systemSizeKw} kW`;
  const completionYear = current.completionYear || '2024';
  const unitsPerYear = current.generationUnitsPerMonth 
    ? `~${(current.generationUnitsPerMonth * 12).toLocaleString('en-IN')}` 
    : '~9,50,000';

  return (
    <section className="w-full bg-[#F7F5F0] py-6 sm:py-8 border-b border-[#E6E3DD]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Panoramic Showcase Container */}
        <div className="relative w-full rounded-none overflow-hidden bg-[#151817] border border-[#232826] text-white min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between shadow-xl group">
          
          {/* Panoramic Solar Array Background */}
          <div className="absolute inset-0 z-0">
            <img
              key={current.id}
              src={current.image || '/images/projects/panoramic-featured-solar.jpg'}
              alt={current.imageAlt || current.title}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out brightness-[0.88] contrast-[1.05]"
              loading="eager"
            />
            {/* Deep Contrast Scrim Gradient on Left for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#151817] via-[#151817]/85 sm:via-[#151817]/75 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151817] via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* ── UPPER CONTENT AREA (Left Column Overlay) ── */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-body font-medium uppercase tracking-[0.18em] text-stone-300">
                FEATURED PROJECT
              </span>
              <span className="w-8 h-px bg-stone-500" />
            </div>

            {/* Title & Location */}
            <div className="space-y-1.5">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight m-0">
                {current.title || 'Commercial Solar Installation'}
              </h2>
              <p className="text-xs sm:text-sm font-body font-normal text-stone-300 m-0">
                {current.city}, {current.state}
              </p>
            </div>

            {/* 3 Metrics Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-2 max-w-lg">
              <div className="space-y-1">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-white block leading-tight">
                  {systemSizeDisplay}
                </span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-wider text-stone-400 block font-medium">
                  SYSTEM SIZE
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-white block leading-tight">
                  {completionYear}
                </span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-wider text-stone-400 block font-medium">
                  COMPLETED
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-white block leading-tight">
                  {unitsPerYear}
                </span>
                <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-wider text-stone-400 block font-medium">
                  UNITS/YEAR (EST.)
                </span>
              </div>
            </div>

            {/* Concise Summary Paragraph (<100 chars / 2 lines) */}
            <p className="text-xs sm:text-sm text-stone-300 font-body font-normal leading-relaxed max-w-lg m-0 pt-1">
              {current.shortDescription || 'A large-scale rooftop installation designed to reduce operational costs and support a cleaner future for the business.'}
            </p>

            {/* View Case Study Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onSelectProject(current)}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#7A211D] hover:bg-[#962B26] text-white font-body text-xs sm:text-sm font-medium rounded-none transition-all cursor-pointer shadow-md group/btn"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* ── BOTTOM RIGHT PAGER & ARROW CONTROLS ── */}
          <div className="relative z-10 self-end p-6 sm:p-8 lg:p-10 flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-stone-300 select-none">
              0{activeIndex + 1} — 0{displayList.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous featured project"
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/30 hover:border-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next featured project"
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/30 hover:border-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
