/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolarARK Projects Experience — 6-Band Architectural Redesign
 *
 * Implements the inspiration structure directly:
 * 1. Hero Band: "Real spaces. Real impact." + architectural metrics + vertical solar pergola visual
 * 2. Featured Project Hero: Panoramic flagship showcase (650 kW Amravati installation, 3 metrics, slide controls)
 * 3. Structured Archive Filter Bar: Clean underline tabs (All, Residential, Commercial, Industrial) + "View All Projects →"
 * 4. Structured Archive Grid: 3-column asymmetric mixed-scale cards with card best practices (entry points)
 * 5. Project In Depth: 50/50 split band (photo with index tag on left; Requirement, Solution, Impact pillars on right)
 * 6. Our Footprint: 3-column band (narrative, interactive Maharashtra vector map, sunset hills photo)
 * 7. Pre-Footer CTA: "Planning your own solar project?" consultation strip with category links
 */

import React, { useState, useMemo } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { PROJECT_CASE_STUDIES } from '../data/solarData';
import { formatINR } from '../utils/calculator';
import { ProjectCaseStudy } from '../types';
import { ProjectsHeroBand } from './projects/ProjectsHeroBand';
import { FeaturedProjectHero } from './projects/FeaturedProjectHero';
import { ProjectsFilterBar, ProjectCategoryTab } from './projects/ProjectsFilterBar';
import { ProjectGrid } from './projects/ProjectGrid';
import { ProjectInDepth } from './projects/ProjectInDepth';
import { ProjectsFootprint } from './projects/ProjectsFootprint';
import { ProjectPreFooterCta } from './projects/ProjectPreFooterCta';

interface OurProjectsPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const OurProjectsPage: React.FC<OurProjectsPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  // ── FILTER STATE ──
  const [activeTab, setActiveTab] = useState<ProjectCategoryTab>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // ── PROJECT IN DEPTH STATE (Defaults to flagship 650 kW Amravati project) ──
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy>(
    () => PROJECT_CASE_STUDIES.find((p) => p.id === 'proj-flagship-amravati') || PROJECT_CASE_STUDIES[0]
  );

  // Technical Specs Modal State
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectCaseStudy | null>(null);

  const filterCities = ['All', 'Amravati', 'Nagpur', 'Wardha', 'Akola', 'Chandrapur', 'Pune'];

  // Smooth scroll helpers
  const scrollToGrid = () => {
    const el = document.getElementById('projects-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInDepth = () => {
    const el = document.getElementById('project-in-depth');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter projects by category, city, and search query
  const filteredProjects = useMemo(() => {
    return PROJECT_CASE_STUDIES.filter((proj) => {
      // 1. City Matching
      const matchesCity =
        selectedCity === 'All' ||
        proj.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
        selectedCity.toLowerCase().includes(proj.city.toLowerCase());

      // 2. Category Tab Matching
      let matchesTab = true;
      if (activeTab === 'Residential') {
        matchesTab = proj.category === 'Residential';
      } else if (activeTab === 'Commercial') {
        matchesTab =
          (proj.category === 'Commercial & Industrial' || proj.category === 'Housing Society') &&
          !proj.roofType.toLowerCase().includes('industrial') &&
          !proj.title?.toLowerCase().includes('industrial') &&
          !proj.homeownerName.toLowerCase().includes('industries') &&
          !proj.homeownerName.toLowerCase().includes('polyfab') &&
          !proj.homeownerName.toLowerCase().includes('textile');
      } else if (activeTab === 'Industrial') {
        matchesTab =
          proj.category === 'Commercial & Industrial' &&
          (proj.roofType.toLowerCase().includes('industrial') ||
            proj.roofType.toLowerCase().includes('shed') ||
            proj.roofType.toLowerCase().includes('truss') ||
            proj.title?.toLowerCase().includes('industrial') ||
            proj.homeownerName.toLowerCase().includes('industries') ||
            proj.homeownerName.toLowerCase().includes('polyfab') ||
            proj.homeownerName.toLowerCase().includes('textile') ||
            proj.homeownerName.toLowerCase().includes('engineering'));
      }

      // 3. Search Query Matching
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        matchesSearch =
          proj.homeownerName.toLowerCase().includes(query) ||
          proj.city.toLowerCase().includes(query) ||
          proj.roofType.toLowerCase().includes(query) ||
          (proj.title && proj.title.toLowerCase().includes(query)) ||
          (proj.category && proj.category.toLowerCase().includes(query)) ||
          proj.systemSizeKw.toString().includes(query);
      }

      return matchesCity && matchesTab && matchesSearch;
    });
  }, [activeTab, selectedCity, searchQuery]);

  // Dynamic counts for each core category
  const categoryCounts = useMemo(() => {
    return {
      All: PROJECT_CASE_STUDIES.length,
      Residential: PROJECT_CASE_STUDIES.filter((p) => p.category === 'Residential').length,
      Commercial: PROJECT_CASE_STUDIES.filter(
        (p) =>
          (p.category === 'Commercial & Industrial' || p.category === 'Housing Society') &&
          !p.roofType.toLowerCase().includes('industrial') &&
          !p.title?.toLowerCase().includes('industrial') &&
          !p.homeownerName.toLowerCase().includes('industries') &&
          !p.homeownerName.toLowerCase().includes('polyfab') &&
          !p.homeownerName.toLowerCase().includes('textile')
      ).length,
      Industrial: PROJECT_CASE_STUDIES.filter(
        (p) =>
          p.category === 'Commercial & Industrial' &&
          (p.roofType.toLowerCase().includes('industrial') ||
            p.roofType.toLowerCase().includes('shed') ||
            p.roofType.toLowerCase().includes('truss') ||
            p.title?.toLowerCase().includes('industrial') ||
            p.homeownerName.toLowerCase().includes('industries') ||
            p.homeownerName.toLowerCase().includes('polyfab') ||
            p.homeownerName.toLowerCase().includes('textile') ||
            p.homeownerName.toLowerCase().includes('engineering'))
      ).length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#8B1E1E] selection:text-white pt-20 pb-16">
      
      {/* ── 1. HERO BAND: "Real spaces. Real impact." ── */}
      <ProjectsHeroBand
        onCtaClick={onCtaClick}
        onExploreClick={scrollToGrid}
      />

      {/* ── 2. FEATURED PROJECT HERO: Panoramic Flagship Showcase ── */}
      <FeaturedProjectHero
        projects={PROJECT_CASE_STUDIES}
        onSelectProject={(project) => {
          setSelectedProject(project);
          scrollToInDepth();
        }}
        onCtaClick={onCtaClick}
      />

      {/* ── 3. STRUCTURED PROJECTS ARCHIVE: Filter Row + Mixed-Scale Grid ── */}
      <section
        id="projects-grid"
        className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 border-b border-stone-200/80 scroll-mt-20"
      >
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#8B1E1E]">
              CURATED ARCHIVE
            </span>
            <span className="w-8 h-px bg-stone-300" />
            <span className="text-xs text-stone-400 font-sans hidden sm:inline">
              Verified Installations Across Maharashtra
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight m-0">
            Browse Completed Solar Projects
          </h2>
        </div>

        {/* Filter Row with Underline Tabs + "View All Projects →" */}
        <ProjectsFilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cities={filterCities}
          counts={categoryCounts}
          onViewAllClick={() => {
            setActiveTab('All');
            setSelectedCity('All');
            setSearchQuery('');
          }}
        />

        {/* Asymmetric Mixed-Scale Grid (Entry Points to In-Depth) */}
        <ProjectGrid
          projects={filteredProjects}
          selectedProjectId={selectedProject.id}
          onSelectProject={(proj) => {
            setSelectedProject(proj);
            scrollToInDepth();
          }}
          onOpenSpecsModal={(proj) => setSelectedProjectModal(proj)}
          onResetFilters={() => {
            setActiveTab('All');
            setSelectedCity('All');
            setSearchQuery('');
          }}
        />
      </section>

      {/* ── 4. PROJECT IN DEPTH: 50/50 Split Architectural Band ── */}
      <ProjectInDepth
        project={selectedProject}
        onOpenSpecsModal={(proj) => setSelectedProjectModal(proj)}
        onCtaClick={onCtaClick}
      />

      {/* ── 5. OUR FOOTPRINT: 3-Part Regional Authority Band ── */}
      <ProjectsFootprint onCtaClick={onCtaClick} />

      {/* ── 6. PRE-FOOTER CTA STRIP: Planning your own solar project? ── */}
      <ProjectPreFooterCta
        onCtaClick={onCtaClick}
        onNavigate={onNavigate}
      />

      {/* ── 7. INTERACTIVE PROJECT TECHNICAL SPEC MODAL ── */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-none max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header with Image */}
            <div className="relative aspect-[16/9] bg-stone-900">
              <img
                src={selectedProjectModal.image || '/images/projects/project1.jpg'}
                alt={selectedProjectModal.imageAlt || selectedProjectModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#8B1E1E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-none font-sans uppercase tracking-wider">
                    {selectedProjectModal.systemSizeKw} kW Array
                  </span>
                  <span className="text-xs text-amber-300 font-sans">
                    {selectedProjectModal.city}, {selectedProjectModal.state}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white m-0">
                  {selectedProjectModal.title || selectedProjectModal.homeownerName}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 font-sans">
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 border border-stone-200">
                <div>
                  <div className="text-[10px] text-stone-500 font-medium uppercase tracking-wider">
                    Monthly Yield
                  </div>
                  <div className="text-base font-bold text-stone-900">
                    {selectedProjectModal.generationUnitsPerMonth || Math.round(selectedProjectModal.systemSizeKw * 120)} kWh
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium uppercase tracking-wider">
                    Bill Cut
                  </div>
                  <div className="text-base font-bold text-emerald-600">
                    {Math.round(
                      ((selectedProjectModal.monthlyBillBefore - selectedProjectModal.monthlyBillAfter) /
                        selectedProjectModal.monthlyBillBefore) *
                        100
                    )}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium uppercase tracking-wider">
                    Annual Savings
                  </div>
                  <div className="text-base font-bold text-stone-900">
                    {formatINR(selectedProjectModal.annualSavings || 96000)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium uppercase tracking-wider">
                    Subsidy Status
                  </div>
                  <div className="text-base font-bold text-amber-800">
                    {selectedProjectModal.subsidyReceived
                      ? `₹${selectedProjectModal.subsidyReceived.toLocaleString('en-IN')}`
                      : 'Commercial ROI'}
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-2 text-xs text-stone-600">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider m-0">
                  Mounting &amp; Engineering Specifications
                </h4>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Structure:</strong> {selectedProjectModal.roofType}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Turnkey Commissioning:</strong> Completed in {selectedProjectModal.installationDays} business days with MSEDCL sync</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Technology:</strong> Tier-1 N-Type TOPCon High Efficiency Photovoltaic Array</span>
                  </div>
                </div>
              </div>

              {/* Customer Quote / Impact */}
              <div className="bg-amber-50/60 p-4 border border-amber-200/80 text-xs text-stone-700 italic">
                "{selectedProjectModal.verdict}"
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 pt-2">
                <PrimaryButton
                  onClick={() => {
                    setSelectedProjectModal(null);
                    onCtaClick();
                  }}
                  size="sm"
                  className="flex-1 rounded-none"
                >
                  Get Similar Estimate for My Rooftop
                </PrimaryButton>
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-none transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
