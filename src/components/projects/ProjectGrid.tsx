/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 3: PROJECT ARCHIVE — Editorial Bento Portfolio Grid
 * Rebuilt strictly per revamp.md design-system guidelines:
 * - Card heights are 100% intrinsic, driven by image aspect ratio and content
 * - Zero empty/stretched dead whitespace (no artificial container stretching)
 * - Columns align to items-start, decoupled from unrelated sibling heights
 * - Featured Industrial Akola card is established via an editorial portrait image (4:5)
 * - Standard cards use 4:3 aspect ratio
 * - Supporting compact cards use natural proportional 4:3 sizing without stretching
 * - Clean responsive behavior across Desktop (3-col Bento), Tablet (2-col balanced), and Mobile (1-col)
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
  className?: string;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({
  project,
  isSelected,
  onSelect,
  aspectClass = 'aspect-[4/3]',
  className = '',
}) => {
  // Category display formatting
  const categoryLabel = project.category === 'Commercial & Industrial'
    ? (project.roofType.toLowerCase().includes('industrial') || project.title?.toLowerCase().includes('industrial') ? 'Industrial' : 'Commercial')
    : project.category;

  return (
    <article
      onClick={onSelect}
      className={`group bg-white rounded-none border transition-all duration-300 cursor-pointer flex flex-col overflow-hidden shadow-2xs hover:shadow-md ${
        isSelected
          ? 'border-[#7A211D] ring-1 ring-[#7A211D]'
          : 'border-[#E6E3DD] hover:border-[#151817]'
      } ${className}`}
    >
      {/* Photo Container with Intentional Aspect Ratio */}
      <div className={`relative w-full overflow-hidden bg-stone-100 ${aspectClass}`}>
        <img
          src={project.image || '/images/projects/project1.jpg'}
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content Block — Natural height, collapses tightly to text without dead space */}
      <div className="p-4 sm:p-5 pb-3 sm:pb-4 space-y-1.5">
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

      {/* Card Action Footer: Anchored naturally right after content with consistent padding */}
      <div className="px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between border-t border-[#E6E3DD] bg-white">
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

  // If we have at least 5 projects and we're looking at the full archive, render the editorial Bento layout
  const isDefaultView = projects.length >= 5;

  if (isDefaultView) {
    return (
      <div className="w-full">
        {/* ── 1. DESKTOP (lg+): 3-Column Asymmetric Editorial Bento ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Column 1 (Left Area): 2 Stacked Cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ArchiveCard
              project={resNagpur}
              isSelected={selectedProjectId === resNagpur.id}
              onSelect={() => onSelectProject(resNagpur)}
              aspectClass="aspect-[4/3]"
            />
            <ArchiveCard
              project={indAmravati}
              isSelected={selectedProjectId === indAmravati.id}
              onSelect={() => onSelectProject(indAmravati)}
              aspectClass="aspect-[4/3]"
            />
          </div>

          {/* Column 2 (Center / Lower Area): 1 Medium Card + 2 Proportionate Compact Cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ArchiveCard
              project={commWardha}
              isSelected={selectedProjectId === commWardha.id}
              onSelect={() => onSelectProject(commWardha)}
              aspectClass="aspect-[4/3]"
            />
            
            {/* Split Row: 2 Compact Cards (Intrinsic sizing, NO stretching) */}
            <div className="grid grid-cols-2 gap-4">
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

          {/* Column 3 (Right Area): Featured Industrial Akola Card */}
          <div className="flex flex-col">
            <ArchiveCard
              project={indAkola}
              isSelected={selectedProjectId === indAkola.id}
              onSelect={() => onSelectProject(indAkola)}
              aspectClass="aspect-[4/5]"
            />
          </div>

        </div>

        {/* ── 2. TABLET (md to lg): Balanced 2-Column Grid ── */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 items-start">
          {/* Left Column (3 cards) */}
          <div className="flex flex-col gap-6">
            <ArchiveCard
              project={resNagpur}
              isSelected={selectedProjectId === resNagpur.id}
              onSelect={() => onSelectProject(resNagpur)}
              aspectClass="aspect-[4/3]"
            />
            <ArchiveCard
              project={indAmravati}
              isSelected={selectedProjectId === indAmravati.id}
              onSelect={() => onSelectProject(indAmravati)}
              aspectClass="aspect-[4/3]"
            />
            <ArchiveCard
              project={resChandrapur}
              isSelected={selectedProjectId === resChandrapur.id}
              onSelect={() => onSelectProject(resChandrapur)}
              aspectClass="aspect-[4/3]"
            />
          </div>

          {/* Right Column (3 cards with Featured Akola Card at top) */}
          <div className="flex flex-col gap-6">
            <ArchiveCard
              project={indAkola}
              isSelected={selectedProjectId === indAkola.id}
              onSelect={() => onSelectProject(indAkola)}
              aspectClass="aspect-[4/5]"
            />
            <ArchiveCard
              project={commWardha}
              isSelected={selectedProjectId === commWardha.id}
              onSelect={() => onSelectProject(commWardha)}
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

        {/* ── 3. MOBILE (< md): Clean Single-Column Sequence ── */}
        <div className="grid md:hidden grid-cols-1 gap-5 items-start">
          <ArchiveCard
            project={indAkola}
            isSelected={selectedProjectId === indAkola.id}
            onSelect={() => onSelectProject(indAkola)}
            aspectClass="aspect-[4/5]"
          />
          <ArchiveCard
            project={resNagpur}
            isSelected={selectedProjectId === resNagpur.id}
            onSelect={() => onSelectProject(resNagpur)}
            aspectClass="aspect-[4/3]"
          />
          <ArchiveCard
            project={commWardha}
            isSelected={selectedProjectId === commWardha.id}
            onSelect={() => onSelectProject(commWardha)}
            aspectClass="aspect-[4/3]"
          />
          <ArchiveCard
            project={indAmravati}
            isSelected={selectedProjectId === indAmravati.id}
            onSelect={() => onSelectProject(indAmravati)}
            aspectClass="aspect-[4/3]"
          />
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
    );
  }

  // Filtered Fallback Grid: Clean responsive grid using intrinsic sizing
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {projects.map((proj) => (
          <ArchiveCard
            key={proj.id}
            project={proj}
            isSelected={selectedProjectId === proj.id}
            onSelect={() => onSelectProject(proj)}
            aspectClass="aspect-[4/3]"
          />
        ))}
      </div>
    </div>
  );
};
