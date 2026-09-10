/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 3: PROJECT GRID WITH FILTERS — Asymmetric Grid
 * Pareto 80/20 Note: Avoids monotonous repetitive image cards by applying an asymmetric rhythm:
 * The lead project card has a prominent architectural scale (spanning 2 columns or larger height),
 * followed by crisp medium cards. Each card displays essential 20% decision data (type, city, kW, savings).
 */

import React from 'react';
import { ArrowUpRight, Zap, TrendingDown, MapPin, Search } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';
import { formatINR } from '../../utils/calculator';

interface ProjectGridProps {
  projects: ProjectCaseStudy[];
  selectedProjectId?: string;
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenSpecsModal: (project: ProjectCaseStudy) => void;
  onResetFilters: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  selectedProjectId,
  onSelectProject,
  onOpenSpecsModal,
  onResetFilters,
}) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 shadow-xs space-y-3 max-w-md mx-auto">
        <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
          <Search className="w-5 h-5" />
        </div>
        <h3 className="font-heading text-base font-bold text-stone-900">No matching projects found</h3>
        <p className="text-xs text-stone-500 leading-relaxed">
          We couldn't find any installations matching your active filters. Try selecting another city or reset your search.
        </p>
        <button
          onClick={onResetFilters}
          className="btn-primary-maroon px-4 py-2 rounded-xl text-xs font-bold font-heading cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  // First item can be given the larger showcase scale
  const leadProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <div className="w-full space-y-6">
      
      {/* Editorial Grid: 1 col on mobile, 2 col on md, 3 col on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
        
        {/* Lead Showcase Card (Larger scale or 2-column span on desktop for first item) */}
        {leadProject && (
          <div
            onClick={() => onSelectProject(leadProject)}
            className={`group relative md:col-span-2 lg:col-span-2 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 bg-stone-900 min-h-[360px] sm:min-h-[400px] shadow-sm hover:shadow-xl ${
              selectedProjectId === leadProject.id
                ? 'border-[#8B1E1E] ring-2 ring-[#8B1E1E]/30'
                : 'border-stone-200/90 hover:border-stone-400'
            }`}
          >
            {/* High-Res Photographic Background */}
            <img
              src={leadProject.image || '/images/projects/project1.jpg'}
              alt={leadProject.imageAlt || leadProject.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 opacity-80 group-hover:opacity-90"
              loading="lazy"
            />
            {/* Restrained Scrim (avoid heavy opaque overlays) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

            {/* Top Floating Tags */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#8B1E1E] text-white text-[10px] font-heading font-bold uppercase tracking-wider shadow-sm">
                  {leadProject.category || 'Featured'}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold border border-white/10 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-300" />
                  {leadProject.city}, {leadProject.state}
                </span>
              </div>

              <span className="text-[11px] font-bold text-amber-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                {leadProject.systemSizeKw} kW Array
              </span>
            </div>

            {/* Bottom Inset Content Details */}
            <div className="relative z-10 space-y-3 pt-24 text-white">
              <div className="space-y-1 max-w-2xl">
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  {leadProject.title || `${leadProject.homeownerName} — ${leadProject.city}`}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 leading-relaxed">
                  {leadProject.shortDescription || leadProject.verdict}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/15">
                <div className="flex items-center gap-4 text-xs">
                  <span className="font-heading font-bold text-amber-300">
                    {leadProject.generationUnitsPerMonth ? `${leadProject.generationUnitsPerMonth} kWh/mo` : 'High Yield'}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="font-heading font-semibold text-emerald-400 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Save {formatINR(leadProject.annualSavings || 100000)}/yr
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenSpecsModal(leadProject);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-100 text-[11px] font-semibold font-heading transition-colors"
                  >
                    Tech Specs
                  </button>
                  <div className="w-8 h-8 rounded-full border border-white/40 group-hover:border-white group-hover:bg-[#8B1E1E] flex items-center justify-center text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Medium Cards Grid */}
        {remainingProjects.map((proj) => {
          const isSelected = selectedProjectId === proj.id;
          const billCutPercent = Math.round(
            ((proj.monthlyBillBefore - proj.monthlyBillAfter) / proj.monthlyBillBefore) * 100
          );

          return (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className={`group rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between bg-white shadow-xs hover:shadow-xl ${
                isSelected
                  ? 'border-[#8B1E1E] ring-2 ring-[#8B1E1E]/30'
                  : 'border-stone-200/90 hover:border-stone-300'
              }`}
            >
              <div>
                {/* Photographic Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={proj.image || '/images/projects/project1.jpg'}
                    alt={proj.imageAlt || proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Top Floating Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/95 text-stone-900 shadow-xs">
                      {proj.category || 'Rooftop Solar'}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#8B1E1E] text-white shadow-xs flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-300" />
                      {proj.systemSizeKw} kW
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <span className="text-xs font-semibold font-heading flex items-center gap-1 drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {proj.city}, {proj.state}
                    </span>
                    <span className="text-[10px] text-stone-200 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      -{billCutPercent}% Bill
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <h3 className="font-heading text-base font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors line-clamp-1 leading-snug">
                    {proj.title || `${proj.homeownerName} — ${proj.city}`}
                  </h3>
                  
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {proj.shortDescription || proj.verdict}
                  </p>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 block font-heading">
                        Yearly Savings
                      </span>
                      <span className="font-heading font-bold text-emerald-700">
                        {formatINR(proj.annualSavings || 96000)}/yr
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-stone-400 block font-heading">
                        Structure
                      </span>
                      <span className="text-xs font-medium text-stone-700 block truncate max-w-[130px]">
                        {proj.roofType.split('(')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: View in Focus & Tech Specs Action */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenSpecsModal(proj);
                  }}
                  className="text-[11px] font-semibold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer py-1"
                >
                  Technical Details →
                </button>

                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-[#8B1E1E] text-stone-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};
