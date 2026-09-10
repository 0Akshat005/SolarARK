/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 4: PROJECT IN DEPTH — 50/50 Architectural Split Band
 * Directly mirrors the inspiration layout:
 * - Left 50%: Large architectural photograph with superimposed "01 —" and "Category | City"
 * - Right 50%: Headline, descriptive text, View Full Project CTA, and 3 pillars:
 *   1. Requirement (Target / Requirement icon)
 *   2. Solution (Cpu / Engineering icon)
 *   3. Impact (TrendingDown / Clean energy units & savings icon)
 * - Sharp architectural corners (rounded-none), on-brand warm neutrals and maroon CTA.
 */

import React from 'react';
import { ArrowRight, Target, Cpu, TrendingDown, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';
import { formatINR } from '../../utils/calculator';

interface ProjectInDepthProps {
  project: ProjectCaseStudy;
  onOpenSpecsModal?: (project: ProjectCaseStudy) => void;
  onCtaClick?: () => void;
}

export const ProjectInDepth: React.FC<ProjectInDepthProps> = ({
  project,
  onOpenSpecsModal,
  onCtaClick,
}) => {
  const categoryLabel = project.category === 'Commercial & Industrial'
    ? (project.roofType.toLowerCase().includes('industrial') || project.title?.toLowerCase().includes('industrial') ? 'Industrial' : 'Commercial')
    : project.category;

  const billCutPercent = Math.round(
    ((project.monthlyBillBefore - project.monthlyBillAfter) / project.monthlyBillBefore) * 100
  );

  return (
    <section id="project-in-depth" className="w-full bg-[#FAF8F5] py-12 sm:py-16 border-b border-stone-200/80 scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#8B1E1E]">
              PROJECT IN DEPTH
            </span>
            <span className="w-8 h-px bg-stone-300" />
            <span className="text-xs text-stone-400 font-sans hidden sm:inline">
              Engineering Case Study &amp; Technical Breakdown
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight m-0">
            {project.title || 'Featured Engineering Case Study'}
          </h2>
        </div>

        {/* 50/50 Split Architectural Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-none border border-stone-200/90 overflow-hidden shadow-sm">
          
          {/* ── LEFT 50% (6 Cols): Large Photographic Showcase ── */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-stone-900 overflow-hidden">
            <img
              src={project.image || '/images/projects/panoramic-featured-solar.jpg'}
              alt={project.imageAlt || project.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            {/* Superimposed Index & Category Line (Inspiration: "01 — Commercial | Amravati") */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-3 text-white">
              <span className="text-sm sm:text-base font-mono font-bold tracking-wider text-amber-300">
                01 —
              </span>
              <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-white/90">
                {categoryLabel} | {project.city}
              </span>
            </div>

            {/* Inset Metric Card at Bottom */}
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-black/60 backdrop-blur-md p-4 border border-white/20 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-300 block">
                  Capacity Installed
                </span>
                <span className="font-heading text-lg sm:text-xl font-bold text-white">
                  {project.systemSizeKw} kW Array
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-300 block">
                  Annual Impact
                </span>
                <span className="font-heading text-lg sm:text-xl font-bold text-emerald-400">
                  Save {formatINR(project.annualSavings || 100000)}/yr
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT 50% (6 Cols): Story & 3 Pillars ── */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6">
            
            {/* Narrative & Headline */}
            <div className="space-y-3">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B1E1E]">
                SOLUTION OVERVIEW
              </span>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 leading-tight m-0">
                {project.outcomeHeadline || 'Engineered for relentless yield and long-term savings.'}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed m-0">
                {project.shortDescription || project.verdict}
              </p>
            </div>

            {/* 3 Structured Pillars (Inspiration Requirement / Solution / Impact) */}
            <div className="space-y-4 pt-2 border-t border-stone-100">
              
              {/* Pillar 1: Requirement */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-none bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-stone-900 m-0">
                    Requirement
                  </h4>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed m-0">
                    {project.requirement || 'Eliminate escalating grid electricity tariffs while preserving 100% usable rooftop utility.'}
                  </p>
                </div>
              </div>

              {/* Pillar 2: Our Solution */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-none bg-amber-50 border border-amber-200 text-[#8B1E1E] flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-stone-900 m-0">
                    Our Solution
                  </h4>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed m-0">
                    {project.solution || `Custom ${project.systemSizeKw} kW rooftop installation built with hot-dip galvanized mounting and bi-directional net-metering.`}
                  </p>
                </div>
              </div>

              {/* Pillar 3: The Impact */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-none bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-stone-900 m-0">
                    The Impact
                  </h4>
                  <p className="text-xs font-sans text-stone-600 leading-relaxed m-0">
                    {project.impact || `~${((project.generationUnitsPerMonth || 1000) * 12).toLocaleString('en-IN')} units/year (est.) · -${billCutPercent}% electricity bills · Lower carbon footprint`}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  if (onOpenSpecsModal) {
                    onOpenSpecsModal(project);
                  } else if (onCtaClick) {
                    onCtaClick();
                  }
                }}
                className="px-6 py-3 bg-[#8B1E1E] hover:bg-[#701818] text-white font-sans font-semibold text-xs sm:text-sm rounded-none inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>View Full Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onCtaClick && (
                <button
                  onClick={onCtaClick}
                  className="px-5 py-3 border border-stone-300 hover:border-stone-900 text-stone-800 font-sans font-medium text-xs sm:text-sm rounded-none transition-colors cursor-pointer bg-white"
                >
                  Get Similar Estimate
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
