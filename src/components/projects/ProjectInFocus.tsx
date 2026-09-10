/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 4 (Upper): PROJECT IN FOCUS
 * Pareto 80/20 Note: Rather than generic descriptions for every project, we dedicate 
 * an architectural split-band to ONE deeply focused case study. It breaks down the 
 * essential decision-making trinity: Requirement, Our Solution, and The Impact.
 */

import React from 'react';
import { ArrowRight, Target, Cpu, TrendingDown, Sparkles, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';
import { formatINR } from '../../utils/calculator';

interface ProjectInFocusProps {
  project: ProjectCaseStudy;
  onOpenSpecsModal: (project: ProjectCaseStudy) => void;
  onCtaClick?: () => void;
}

export const ProjectInFocus: React.FC<ProjectInFocusProps> = ({
  project,
  onOpenSpecsModal,
  onCtaClick,
}) => {
  const billReductionPercent = Math.round(
    ((project.monthlyBillBefore - project.monthlyBillAfter) / project.monthlyBillBefore) * 100
  );

  return (
    <section className="w-full bg-[#F7F5F0] py-12 sm:py-16 border-b border-[#E6E3DD]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Container with Warm Cream Architectural Card */}
        <div className="bg-white rounded-3xl border border-[#E6E3DD] shadow-md overflow-hidden p-6 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Wide Project Photo with Inset Technical Tag */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-md bg-stone-900 group">
                <img
                  src={project.image || '/images/projects/project1.jpg'}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#7A211D] text-white text-[11px] font-body font-medium uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-body font-medium border border-white/10 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {project.city}, {project.state}
                  </span>
                </div>

                {/* Inset Bottom Metric Card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#7A211D] flex items-center justify-center text-amber-300 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-heading font-medium text-sm block leading-none">
                        {project.systemSizeKw} kW High-Yield Array
                      </span>
                      <span className="text-[10px] text-stone-300 font-body block pt-1">
                        {project.roofType}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-heading font-semibold text-emerald-400 text-sm block leading-none">
                      -{billReductionPercent}% Slashed
                    </span>
                    <span className="text-[10px] text-stone-300 font-body block pt-1">
                      Save {formatINR(project.annualSavings || 100000)}/yr
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Caption Note */}
              <div className="flex items-center justify-between text-xs text-[#6C6C68] font-body font-normal px-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> DISCOM Net-Meter Synchronized
                </span>
                <span>Commissioned: {project.completionYear || '2024'}</span>
              </div>
            </div>

            {/* Right Col: Structured Case-Study Copy (Pareto Trinity) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Header Stack */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-body font-medium uppercase tracking-[0.18em] text-[#7A211D]">
                  <span>Project In Focus</span>
                  <span className="w-6 h-px bg-[#7A211D]/40" />
                  <span className="text-[#6C6C68] font-normal normal-case font-body">Verified Case Study</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#151817] tracking-tight leading-snug">
                  {project.outcomeHeadline || project.title || 'Powering progress for a growing space.'}
                </h2>

                <p className="text-sm text-[#6C6C68] leading-relaxed font-body font-normal pt-1">
                  {project.shortDescription || project.verdict}
                </p>
              </div>

              {/* 3 Compact Bullet Blocks: Requirement, Solution, Impact */}
              <div className="space-y-3.5 pt-1">
                
                {/* 1. Requirement */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F5F0] border border-[#E6E3DD]">
                  <div className="w-8 h-8 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs font-medium uppercase tracking-wider text-[#151817] block">
                      The Requirement
                    </span>
                    <p className="text-xs text-[#6C6C68] leading-relaxed font-body font-normal">
                      {project.requirement || 'Eliminate escalating grid electricity tariffs while preserving 100% usable rooftop utility.'}
                    </p>
                  </div>
                </div>

                {/* 2. Our Solution */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F5F0] border border-[#E6E3DD]">
                  <div className="w-8 h-8 rounded-xl bg-[#7A211D]/10 text-[#7A211D] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs font-medium uppercase tracking-wider text-[#151817] block">
                      Our Engineering Solution
                    </span>
                    <p className="text-xs text-[#6C6C68] leading-relaxed font-body font-normal">
                      {project.solution || 'Hot-dip galvanized structural mounting equipped with tier-1 bifacial TOPCon modules and bi-directional DISCOM net-metering.'}
                    </p>
                  </div>
                </div>

                {/* 3. The Impact */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F5F0] border border-[#E6E3DD]">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-heading text-xs font-medium uppercase tracking-wider text-[#151817] block">
                      The Realized Impact
                    </span>
                    <p className="text-xs text-[#6C6C68] leading-relaxed font-body font-normal">
                      {project.impact || `90%+ reduction in monthly electricity bills with ₹${project.annualSavings?.toLocaleString('en-IN') || '1,00,000'} annual savings and guaranteed long-term yield.`}
                    </p>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-3 border-t border-[#E6E3DD] flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenSpecsModal(project)}
                  className="btn-primary-maroon px-6 py-3 rounded-xl font-body font-medium text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md shadow-[#7A211D]/20"
                >
                  <span>View Full Project Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onCtaClick && (
                  <button
                    onClick={onCtaClick}
                    className="px-5 py-3 rounded-xl border border-[#E6E3DD] hover:border-[#151817] text-[#151817] font-body font-medium text-xs sm:text-sm transition-colors cursor-pointer bg-white"
                  >
                    Get Similar Proposal
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
