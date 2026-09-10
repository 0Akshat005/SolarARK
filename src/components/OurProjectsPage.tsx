/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolarARK Projects Experience — 4-Band Case-Study Hub
 *
 * Designed in strict adherence to revamp.md and the Pareto (80/20) Principle:
 * - Highlights the vital 20% of project content that delivers 80% of decision value:
 *   1. Band 1: HERO BAND (“Real spaces. Real impact.”) — Architectural authority & outcome introduction.
 *   2. Band 2: FEATURED PROJECT STRIP — Contrasted horizontal card surfacing the primary flagship project.
 *   3. Band 3: PROJECT GRID WITH UNDERLINE FILTERS — Asymmetric editorial cards without card fatigue.
 *   4. Band 4: PROJECT IN FOCUS + FOOTPRINT BAND — Split Requirement/Solution/Impact case study & Maharashtra map footprint.
 * - Deep technical modal and verified field video walkthroughs preserved as high-value depth layers.
 */

import React, { useState, useMemo } from 'react';
import {
  X,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Film,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { PROJECT_CASE_STUDIES, INSTALLATION_VIDEO_REELS } from '../data/solarData';
import { formatINR } from '../utils/calculator';
import { ProjectCaseStudy } from '../types';
import { ProjectsHeroBand } from './projects/ProjectsHeroBand';
import { FeaturedProjectStrip } from './projects/FeaturedProjectStrip';
import { ProjectsFilterBar, ProjectCategoryTab } from './projects/ProjectsFilterBar';
import { ProjectGrid } from './projects/ProjectGrid';
import { ProjectInFocus } from './projects/ProjectInFocus';
import { ProjectsFootprint } from './projects/ProjectsFootprint';

interface OurProjectsPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const OurProjectsPage: React.FC<OurProjectsPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  // ── PARETO FILTER STATE (Core 4 categories) ──
  const [activeTab, setActiveTab] = useState<ProjectCategoryTab>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // ── PARETO CASE STUDY FOCUS STATE (Defaults to primary flagship project) ──
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy>(
    () => PROJECT_CASE_STUDIES.find((p) => p.featured) || PROJECT_CASE_STUDIES[0]
  );

  // Technical Specs Modal State
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectCaseStudy | null>(null);

  const filterCities = ['All', 'Nagpur', 'Pune', 'Amravati', 'Chh. Sambhajinagar', 'Wardha', 'Akola'];

  // Smooth scroll helper
  const scrollToGrid = () => {
    const el = document.getElementById('projects-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFocus = () => {
    const el = document.getElementById('project-in-focus');
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

      // 2. Category Tab Matching (Pareto 4 Core Categories)
      let matchesTab = true;
      if (activeTab === 'Residential') {
        matchesTab = proj.category === 'Residential';
      } else if (activeTab === 'Commercial') {
        matchesTab =
          proj.category === 'Commercial & Industrial' ||
          proj.category === 'Housing Society';
      } else if (activeTab === 'Industrial') {
        matchesTab =
          proj.category === 'Commercial & Industrial' &&
          (proj.roofType.toLowerCase().includes('industrial') ||
            proj.roofType.toLowerCase().includes('shed') ||
            proj.title?.toLowerCase().includes('industrial') ||
            proj.homeownerName.toLowerCase().includes('engineering') ||
            proj.homeownerName.toLowerCase().includes('processing'));
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
        (p) => p.category === 'Commercial & Industrial' || p.category === 'Housing Society'
      ).length,
      Industrial: PROJECT_CASE_STUDIES.filter(
        (p) =>
          p.category === 'Commercial & Industrial' &&
          (p.roofType.toLowerCase().includes('industrial') ||
            p.roofType.toLowerCase().includes('shed') ||
            p.title?.toLowerCase().includes('industrial') ||
            p.homeownerName.toLowerCase().includes('engineering') ||
            p.homeownerName.toLowerCase().includes('processing'))
      ).length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#8B1E1E] selection:text-white pt-20 pb-20">
      
      {/* ── 1. BAND 1: HERO BAND (“Real spaces. Real impact.”) ──
          Pareto 80/20: Anchors architectural leadership and primary value proposition. */}
      <ProjectsHeroBand
        onCtaClick={onCtaClick}
        onExploreClick={scrollToGrid}
      />

      {/* ── 2. BAND 2: FEATURED PROJECT STRIP (80/20 FOCUS) ──
          Pareto 80/20: Surfaces ONE flagship project carrying 80% of perceived enterprise value. */}
      <FeaturedProjectStrip
        projects={PROJECT_CASE_STUDIES}
        onSelectProject={(project) => {
          setSelectedProject(project);
          scrollToFocus();
        }}
        onCtaClick={onCtaClick}
      />

      {/* ── 3. BAND 3: PROJECT GRID WITH UNDERLINE FILTERS (NON-REPETITIVE CARDS) ──
          Pareto 80/20: Underline tabs for the 4 vital categories; asymmetric card rhythm breaks card fatigue. */}
      <section
        id="projects-grid"
        className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 border-b border-stone-200/80 scroll-mt-24"
      >
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8B1E1E]">
              CURATED INSTALLATIONS
            </span>
            <span className="w-8 h-px bg-stone-300" />
            <span className="text-xs text-stone-400 font-medium hidden sm:inline">
              Verified Rooftop Solar Systems Across Maharashtra
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Browse Completed Solar Projects
          </h2>
        </div>

        {/* Minimalist Underline Filter Bar */}
        <ProjectsFilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cities={filterCities}
          counts={categoryCounts}
        />

        {/* Asymmetric Editorial Cards Grid */}
        <ProjectGrid
          projects={filteredProjects}
          selectedProjectId={selectedProject.id}
          onSelectProject={(proj) => {
            setSelectedProject(proj);
            scrollToFocus();
          }}
          onOpenSpecsModal={(proj) => setSelectedProjectModal(proj)}
          onResetFilters={() => {
            setActiveTab('All');
            setSelectedCity('All');
            setSearchQuery('');
          }}
        />
      </section>

      {/* ── 4. BAND 4: PROJECT IN FOCUS + FOOTPRINT BAND ──
          Pareto 80/20: Detailed Requirement/Solution/Impact breakdown for the focused project,
          paired with the regional Maharashtra authority map. */}
      <div id="project-in-focus" className="scroll-mt-24">
        <ProjectInFocus
          project={selectedProject}
          onOpenSpecsModal={(proj) => setSelectedProjectModal(proj)}
          onCtaClick={onCtaClick}
        />

        <ProjectsFootprint onCtaClick={onCtaClick} />
      </div>

      {/* ── 5. CINEMATIC VIDEO PROOF REELS (SECONDARY DEPTH SECTION) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20 border-b border-stone-200/80">
        <div className="bg-gradient-to-br from-[#120E0E] via-[#1A1414] to-[#251A1A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-stone-800 relative overflow-hidden space-y-8">
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold font-heading border border-amber-400/30">
                <Film className="w-3.5 h-3.5" />
                <span>On-Site Video Proof</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-white">
                Watch SolarArk Installations Across Maharashtra
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
                Actual site walkthroughs, aerial drone inspections, structural mounting tests, and net-metering commissioning recordings.
              </p>
            </div>

            <div className="text-xs text-amber-300 font-bold font-heading bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl shrink-0">
              {INSTALLATION_VIDEO_REELS.length} Verified Walkthroughs
            </div>
          </div>

          {/* Video Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {INSTALLATION_VIDEO_REELS.slice(0, 3).map((reel) => (
              <div
                key={reel.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-sm space-y-3 hover:border-[#8B1E1E]/60 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black shadow-inner flex items-center justify-center">
                    <video
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={reel.videoUrl} type="video/mp4" />
                      <source src={reel.videoUrl} type="video/quicktime" />
                      Your browser does not support video playback.
                    </video>

                    <div className="absolute top-2.5 left-2.5 pointer-events-none">
                      <span className="text-[10px] font-bold bg-[#8B1E1E] text-white px-2 py-0.5 rounded shadow-sm">
                        {reel.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-stone-400">
                      <span className="font-heading font-bold text-amber-300 uppercase tracking-wider">
                        {reel.id.toUpperCase()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#8B1E1E]" /> {reel.location}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-white leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                      {reel.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={onCtaClick}
                    className="w-full py-2 bg-white/10 hover:bg-[#8B1E1E] text-white text-[11px] font-bold font-heading rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Request Site Visit For This System</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. BOTTOM PINCODE CONSULTATION BANNER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-14">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 font-heading">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Maharashtra Installation Network</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-white leading-tight">
                Want to see solar installations near your locality?
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 max-w-2xl leading-relaxed">
                Our local field engineers can arrange a neighbor site visit in your exact pin code or share an engineered generation report customized for your rooftop area.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-amber-200/90 pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free 3D Shadow Analysis
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> DISCOM Net Meter Support
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ₹78k Subsidy Paperwork
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onCtaClick}
                className="w-full bg-white hover:bg-amber-50 text-[#8B1E1E] font-heading font-bold text-sm py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Request Local Installation Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:7080909590"
                className="text-center text-xs text-amber-200 hover:text-white font-medium flex items-center justify-center gap-1.5 py-1"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Field Desk: <strong className="text-white">+91 7080909590</strong></span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. INTERACTIVE PROJECT TECHNICAL SPEC MODAL ── */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header with Image */}
            <div className="relative aspect-[16/9] bg-stone-900">
              <img
                src={selectedProjectModal.image || '/images/projects/project1.jpg'}
                alt={selectedProjectModal.imageAlt || selectedProjectModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#8B1E1E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md font-heading">
                    {selectedProjectModal.systemSizeKw} kW Array
                  </span>
                  <span className="text-xs text-amber-300 font-medium">
                    {selectedProjectModal.city}, {selectedProjectModal.state}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                  {selectedProjectModal.title || selectedProjectModal.homeownerName}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <div>
                  <div className="text-[10px] text-stone-500 font-medium font-heading uppercase tracking-wider">
                    Monthly Yield
                  </div>
                  <div className="text-base font-bold text-stone-900 font-heading">
                    {selectedProjectModal.generationUnitsPerMonth || Math.round(selectedProjectModal.systemSizeKw * 120)} kWh
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium font-heading uppercase tracking-wider">
                    Bill Cut
                  </div>
                  <div className="text-base font-bold text-emerald-600 font-heading">
                    {Math.round(
                      ((selectedProjectModal.monthlyBillBefore - selectedProjectModal.monthlyBillAfter) /
                        selectedProjectModal.monthlyBillBefore) *
                        100
                    )}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium font-heading uppercase tracking-wider">
                    Annual Savings
                  </div>
                  <div className="text-base font-bold text-stone-900 font-heading">
                    {formatINR(selectedProjectModal.annualSavings || 96000)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium font-heading uppercase tracking-wider">
                    Subsidy Status
                  </div>
                  <div className="text-base font-bold text-amber-700 font-heading">
                    {selectedProjectModal.subsidyReceived
                      ? `₹${selectedProjectModal.subsidyReceived.toLocaleString('en-IN')}`
                      : 'Commercial ROI'}
                  </div>
                </div>
              </div>

              {/* Requirement, Solution & Impact in Modal */}
              <div className="space-y-2 text-xs text-stone-600">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-heading">
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
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 text-xs text-stone-700 italic">
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
                  className="flex-1"
                >
                  Get Similar Estimate for My Rooftop
                </PrimaryButton>
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
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
