/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 2: FEATURED PROJECT STRIP (80/20 focus)
 * Pareto 80/20 Note: Surface ONE primary project that carries 80% of decision-making value.
 * Instead of burying this flagship project in a grid, we give it a contrasted, high-impact
 * horizontal presentation with core business metrics, outcome summary, and direct CTA.
 */

import React, { useState } from 'react';
import { ArrowRight, Zap, TrendingDown, Calendar, Building2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';
import { formatINR } from '../../utils/calculator';

interface FeaturedProjectStripProps {
  projects: ProjectCaseStudy[];
  onSelectProject: (project: ProjectCaseStudy) => void;
  onCtaClick?: () => void;
}

export const FeaturedProjectStrip: React.FC<FeaturedProjectStripProps> = ({
  projects,
  onSelectProject,
  onCtaClick,
}) => {
  // Filter top featured projects or fallback to first 3
  const featuredList = projects.filter((p) => p.featured);
  const displayList = featuredList.length > 0 ? featuredList.slice(0, 3) : projects.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  const current = displayList[activeIndex] || displayList[0];
  if (!current) return null;

  const billReductionPercent = Math.round(
    ((current.monthlyBillBefore - current.monthlyBillAfter) / current.monthlyBillBefore) * 100
  );

  return (
    <section className="w-full bg-[#FAF8F5] py-10 sm:py-14 border-b border-stone-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Pre-heading with Pager */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8B1E1E]">
              FEATURED PROJECT IN DEPTH
            </span>
            <span className="w-6 sm:w-10 h-px bg-[#8B1E1E]/40" />
            <span className="text-[11px] text-stone-400 font-medium hidden sm:inline">
              Pareto 80/20 Landmark Case Study
            </span>
          </div>

          {/* Tiny Pager: 01 - 03 */}
          {displayList.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-heading font-bold text-stone-700 tracking-wider">
                0{activeIndex + 1} <span className="text-stone-400">/</span> 0{displayList.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : displayList.length - 1))}
                  className="w-7 h-7 rounded-lg border border-stone-300 hover:border-stone-900 bg-white flex items-center justify-center text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
                  aria-label="Previous featured project"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev < displayList.length - 1 ? prev + 1 : 0))}
                  className="w-7 h-7 rounded-lg border border-stone-300 hover:border-stone-900 bg-white flex items-center justify-center text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
                  aria-label="Next featured project"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Contrasted Horizontal Card (Dark Slate Theme with Specular Accents) */}
        <div className="relative bg-[#141210] text-white rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
          
          {/* Subtle Warm Gradient Wash */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1E1E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Col: Project Imagery with Inset Specs */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden bg-stone-950">
              <img
                src={current.image || '/images/projects/project1.jpg'}
                alt={current.imageAlt || current.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#141210]/30 lg:to-[#141210]" />

              {/* Inset Top Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#8B1E1E] text-white text-[10px] font-bold font-heading uppercase tracking-wider shadow-md">
                  {current.category || 'Commercial EPC'}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-stone-200 text-[10px] font-semibold border border-white/10">
                  {current.city}, {current.state}
                </span>
              </div>
            </div>

            {/* Right Col: 80/20 High-Value Copy & Metrics */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                
                {/* Project Title & Location */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{current.homeownerName}</span>
                    <span className="text-stone-500">•</span>
                    <span>{current.city}, Maharashtra</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {current.title || `${current.category} Solar Installation — ${current.city}`}
                  </h3>
                </div>

                {/* 2-3 Line Short Description on Business / Living Impact */}
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
                  {current.shortDescription || current.verdict}
                </p>

                {/* Key Metrics Strip (System Size, Completion Year, Units/Year & Bill Reduction) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-heading block">
                      System Size
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                      <Zap className="w-4 h-4 text-amber-400" />
                      {current.systemSizeKw} kW
                    </span>
                    <span className="text-[10px] text-stone-400 block truncate">{current.roofType}</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-heading block">
                      Commissioned
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      {current.completionYear || '2024'}
                    </span>
                    <span className="text-[10px] text-stone-400 block">{current.installationDays} Days Turnkey</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-heading block">
                      Monthly Yield
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-amber-300 block">
                      {current.generationUnitsPerMonth ? `${current.generationUnitsPerMonth} Units` : '1,250 Units'}
                    </span>
                    <span className="text-[10px] text-stone-400 block">Per Month Clean Power</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-heading block">
                      Bill Slashed
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-emerald-400 flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      -{billReductionPercent}%
                    </span>
                    <span className="text-[10px] text-emerald-300/80 block font-medium">
                      {formatINR(current.annualSavings || 120000)}/yr
                    </span>
                  </div>

                </div>

              </div>

              {/* Bottom CTA Row */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Verified Generation Telemetry &amp; DISCOM Sync</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(current)}
                    className="btn-primary-maroon px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#8B1E1E]/40"
                  >
                    <span>View Case Study &amp; Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {onCtaClick && (
                    <button
                      onClick={onCtaClick}
                      className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Get Similar Proposal
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
