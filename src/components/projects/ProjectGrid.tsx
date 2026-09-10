/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 3: PROJECT ARCHIVE — Asymmetric Mixed-Scale Grid
 * Follows the inspiration layout structure:
 * - Col 1: 2 stacked horizontal cards (Residential · Nagpur, Industrial · Amravati)
 * - Col 2: 1 medium card on top (Commercial · Wardha) + 2 split compact cards below (Residential · Chandrapur, Commercial · Nagpur)
 * - Col 3: 1 tall card spanning the entire height (Industrial · Akola)
 *
 * Adheres to Card Best Practices:
 * 1. One concept per card
 * 2. Short summary text (<100 characters)
 * 3. One primary action (circular arrow button →)
 * 4. Clear hierarchy, sharp architectural corners (rounded-none), entry point into Project In Depth.
 */

import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { ProjectCaseStudy } from '../../types';

interface ProjectGridProps {
  projects: ProjectCaseStudy[];
  selectedProjectId?: string;
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenSpecsModal?: (project: ProjectCaseStudy) => void;
  onResetFilters: () => void;
}

// Single architectural card component following best practices
interface ArchiveCardProps {
  project: ProjectCaseStudy;
  isSelected?: boolean;
  onSelect: () => void;
  aspectClass?: string;
  tall?: boolean;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({
  project,
  isSelected,
  onSelect,
  aspectClass = 'aspect-[16/10]',
  tall = false,
}) => {
  // Category display formatting
  const categoryLabel = project.category === 'Commercial & Industrial'
    ? (project.roofType.toLowerCase().includes('industrial') || project.title?.toLowerCase().includes('industrial') ? 'Industrial' : 'Commercial')
    : project.category;

  return (
    <article
      onClick={onSelect}
      className={`group bg-white rounded-none border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md ${
        isSelected
          ? 'border-[#7A211D] ring-1 ring-[#7A211D]'
          : 'border-[#E6E3DD] hover:border-[#151817]'
      } ${tall ? 'h-full' : ''}`}
    >
      <div>
        {/* Photo Container */}
        <div className={`relative w-full overflow-hidden bg-stone-100 ${aspectClass}`}>
          <img
            src={project.image || '/images/projects/project1.jpg'}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Content Block */}
        <div className="p-4 sm:p-5 space-y-1.5">
          {/* Category · Location tag */}
          <div className="text-[11px] font-body font-medium uppercase tracking-[0.18em] text-[#6C6C68] flex items-center gap-1.5">
            <span>{categoryLabel}</span>
            <span className="text-stone-300">•</span>
            <span>{project.city}</span>
          </div>

          {/* Short summary text (<100 chars) */}
          <p className="text-xs sm:text-sm font-heading font-medium text-[#151817] line-clamp-2 leading-snug m-0">
            {project.shortDescription || project.outcomeHeadline || project.verdict}
          </p>
        </div>
      </div>

      {/* Card Action Footer: Circular Arrow Button */}
      <div className="p-4 sm:p-5 pt-0 flex items-center justify-between border-t border-[#E6E3DD] mt-2">
        <span className="text-[10px] sm:text-[11px] font-body font-medium text-[#6C6C68] uppercase tracking-wider">
          {project.systemSizeKw} kW ARRAY
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          aria-label={`View in-depth case study for ${project.title}`}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#E6E3DD] group-hover:border-[#7A211D] group-hover:bg-[#7A211D] text-[#151817] group-hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  selectedProjectId,
  onSelectProject,
  onResetFilters,
}) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-none border border-[#E6E3DD] p-8 space-y-3 max-w-md mx-auto">
        <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
          <Search className="w-5 h-5" />
        </div>
        <h3 className="font-heading text-base font-medium text-[#151817]">No matching projects found</h3>
        <p className="text-xs text-[#6C6C68] leading-relaxed font-body font-normal">
          We couldn't find any installations matching your active filters. Try selecting another filter or reset.
        </p>
        <button
          onClick={onResetFilters}
          className="px-4 py-2 bg-[#7A211D] text-white text-xs font-body font-medium rounded-none cursor-pointer hover:bg-[#962B26] transition-colors"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  // Find inspiration layout canonical projects if present
  const resNagpur = projects.find((p) => p.id === 'grid-res-nagpur') || projects[0];
  const indAmravati = projects.find((p) => p.id === 'grid-ind-amravati') || projects[1] || projects[0];
  const commWardha = projects.find((p) => p.id === 'grid-comm-wardha') || projects[2] || projects[0];
  const resChandrapur = projects.find((p) => p.id === 'grid-res-chandrapur') || projects[3] || projects[0];
  const commNagpur = projects.find((p) => p.id === 'grid-comm-nagpur') || projects[4] || projects[0];
  const indAkola = projects.find((p) => p.id === 'grid-ind-akola') || projects[5] || projects[0];

  // If we have at least 5 projects and we're looking at the full archive, render the exact inspiration layout
  const isDefaultView = projects.length >= 5;

  if (isDefaultView) {
    return (
      <div className="w-full">
        {/* Inspiration 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* ── COLUMN 1: 2 Stacked Horizontal Cards ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ArchiveCard
              project={resNagpur}
              isSelected={selectedProjectId === resNagpur.id}
              onSelect={() => onSelectProject(resNagpur)}
              aspectClass="aspect-[16/11]"
            />
            <ArchiveCard
              project={indAmravati}
              isSelected={selectedProjectId === indAmravati.id}
              onSelect={() => onSelectProject(indAmravati)}
              aspectClass="aspect-[16/11]"
            />
          </div>

          {/* ── COLUMN 2: 1 Medium-Wide Card + 2 Split Cards Below ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ArchiveCard
              project={commWardha}
              isSelected={selectedProjectId === commWardha.id}
              onSelect={() => onSelectProject(commWardha)}
              aspectClass="aspect-[16/10]"
            />
            
            {/* Split Row with 2 Compact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 flex-1">
              <ArchiveCard
                project={resChandrapur}
                isSelected={selectedProjectId === resChandrapur.id}
                onSelect={() => onSelectProject(resChandrapur)}
                aspectClass="aspect-[4/3]"
              />
              <ArchiveCard
                project={commNagpur}
                isSelected={selectedProjectId === commNagpur.id}
                onSelect={() => onSelectProject(commNagpur)}
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>

          {/* ── COLUMN 3: 1 Tall Portrait Card ── */}
          <div className="flex flex-col h-full">
            <ArchiveCard
              project={indAkola}
              isSelected={selectedProjectId === indAkola.id}
              onSelect={() => onSelectProject(indAkola)}
              aspectClass="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] lg:h-[460px]"
              tall={true}
            />
          </div>

        </div>
      </div>
    );
  }

  // Filtered Fallback Grid: Clean responsive grid using the same card design
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {projects.map((proj) => (
          <ArchiveCard
            key={proj.id}
            project={proj}
            isSelected={selectedProjectId === proj.id}
            onSelect={() => onSelectProject(proj)}
            aspectClass="aspect-[16/10]"
          />
        ))}
      </div>
    </div>
  );
};

