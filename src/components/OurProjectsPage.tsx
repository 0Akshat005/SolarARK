/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  MapPin,
  Zap,
  TrendingDown,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Film,
  Image as ImageIcon,
  Building,
  Home,
  Factory,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall,
  X,
  ExternalLink,
  ChevronRight,
  Calendar,
  Layers,
  Search,
  Check,
  Star,
  Maximize2,
  Info,
  BadgeCheck,
  Sun,
  Wallet,
  Gauge
} from 'lucide-react';
import { PROJECT_CASE_STUDIES, INSTALLATION_VIDEO_REELS } from '../data/solarData';
import { formatINR } from '../utils/calculator';
import { ProjectCaseStudy, InstallationVideoReel } from '../types';

interface OurProjectsPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const OurProjectsPage: React.FC<OurProjectsPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'society' | 'commercial' | 'videos'>('all');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectCaseStudy | null>(null);
  const [selectedVideoModal, setSelectedVideoModal] = useState<InstallationVideoReel | null>(null);

  const filterCities = ['All', 'Nagpur', 'Pune', 'Amravati', 'Chh. Sambhajinagar', 'Wardha', 'Akola'];

  // Filter projects by category, city, and search query
  const filteredProjects = useMemo(() => {
    return PROJECT_CASE_STUDIES.filter((proj) => {
      // City matching
      const matchesCity =
        selectedCity === 'All' ||
        proj.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
        selectedCity.toLowerCase().includes(proj.city.toLowerCase());

      // Tab matching
      let matchesTab = true;
      if (activeTab === 'residential') matchesTab = proj.category === 'Residential';
      if (activeTab === 'society') matchesTab = proj.category === 'Housing Society';
      if (activeTab === 'commercial') matchesTab = proj.category === 'Commercial & Industrial';

      // Search query matching
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        matchesSearch =
          proj.homeownerName.toLowerCase().includes(query) ||
          proj.city.toLowerCase().includes(query) ||
          proj.roofType.toLowerCase().includes(query) ||
          (proj.category && proj.category.toLowerCase().includes(query)) ||
          proj.systemSizeKw.toString().includes(query);
      }

      return matchesCity && matchesTab && matchesSearch;
    });
  }, [activeTab, selectedCity, searchQuery]);

  // Counts for category badges
  const residentialCount = useMemo(() => PROJECT_CASE_STUDIES.filter(p => p.category === 'Residential').length, []);
  const societyCount = useMemo(() => PROJECT_CASE_STUDIES.filter(p => p.category === 'Housing Society').length, []);
  const commercialCount = useMemo(() => PROJECT_CASE_STUDIES.filter(p => p.category === 'Commercial & Industrial').length, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-6">
      
      {/* ── 1. COMPACT PAGE CONTEXT / BREADCRUMB ROW ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6">
        <div className="flex items-center justify-between py-2.5 border-b border-stone-200/80">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-[#8B1E1E]" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-stone-800 cursor-pointer flex items-center gap-1"
            >
              <HomeIcon className="w-3.5 h-3.5 text-stone-400" />
              <span>Home</span>
            </button>
            <span className="text-stone-300">/</span>
            <span className="text-slate-900 font-bold">Our Verified Projects</span>
          </div>
        </div>
      </div>

      {/* ── 2. HERO SHOWCASE HEADER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10">
        <div className="relative bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/30 rounded-3xl p-6 sm:p-10 lg:p-12 text-slate-900 shadow-md overflow-hidden border border-stone-200/90">
          {/* Subtle Ambient Warmth */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Eyebrow Tag & Trust Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E] shadow-sm text-[11px] font-bold text-white tracking-wider uppercase font-heading border border-red-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Verified Rooftop EPC Installations</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-stone-600">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Zero Slab Damage Guarantee
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="hidden sm:flex items-center gap-1 font-medium">
                  <Award className="w-4 h-4 text-amber-600" /> PM Surya Ghar Authorized
                </span>
              </div>
            </div>

            {/* Title & Action Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-3.5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.12] text-[#0B1730]">
                  Explore SolarArk’s <br />
                  <span className="text-[#8B1E1E]">
                    Verified Completed Projects
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl">
                  Powering over <strong className="text-slate-900">5,000+ rooftops across Maharashtra</strong>. Explore real residential villas, housing societies, industrial factories, and on-site video walkthroughs with verified electricity bill reductions.
                </p>
              </div>

              {/* Quick Action Button & Direct Desk Contact */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#8B1E1E] to-[#A82424] hover:from-[#A82424] hover:to-[#8B1E1E] text-white font-heading font-bold text-xs sm:text-sm px-7 py-4 rounded-xl shadow-lg shadow-[#8B1E1E]/30 transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] border border-red-400/20"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Request Neighbor Site Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8B1E1E]" />
                  <span>Field engineers active in 7 Maharashtra districts</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar with High-End Glass Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-6 border-t border-stone-200/80">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-[#8B1E1E]/30 hover:shadow-xs transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-stone-500 font-medium">Commissioned</span>
                  <Sun className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0B1730] font-heading">5,000+</div>
                <div className="text-[11px] text-amber-800 font-medium mt-0.5">Rooftops Across MH</div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-[#8B1E1E]/30 hover:shadow-xs transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-stone-500 font-medium">Clean EPC Capacity</span>
                  <Gauge className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0B1730] font-heading">35+ MW</div>
                <div className="text-[11px] text-blue-800 font-medium mt-0.5">Installed &amp; Grid-Synced</div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-[#8B1E1E]/30 hover:shadow-xs transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-stone-500 font-medium">Average Savings</span>
                  <TrendingDown className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-700 font-heading">90%+</div>
                <div className="text-[11px] text-emerald-800 font-medium mt-0.5">Monthly Power Bill Slashed</div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-[#8B1E1E]/30 hover:shadow-xs transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-stone-500 font-medium">Central Subsidy</span>
                  <Wallet className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-800 font-heading">₹78,000</div>
                <div className="text-[11px] text-amber-900 font-medium mt-0.5">Direct DBT Bank Credit</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. FILTER & SEARCH CONTROL BAR (NO OVERFLOW WRAP ISSUES) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-8 sticky top-[72px] z-30 bg-[#FAF9F6]/95 backdrop-blur-md py-3.5">
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-3.5 sm:p-4 space-y-3.5">
          
          {/* Top Row: Category Tabs & Search Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Category Segmented Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'all'
                    ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/30'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Projects</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'}`}>
                  {PROJECT_CASE_STUDIES.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('residential')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'residential'
                    ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/30'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Residential</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'residential' ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'}`}>
                  {residentialCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('society')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'society'
                    ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/30'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Societies</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'society' ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'}`}>
                  {societyCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'commercial'
                    ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/30'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                <Factory className="w-3.5 h-3.5" />
                <span>Commercial</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'commercial' ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'}`}>
                  {commercialCount}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('videos');
                  setTimeout(() => {
                    const el = document.getElementById('video-proof-reels');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 50);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'videos'
                    ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/30'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                <Film className="w-3.5 h-3.5 text-amber-500" />
                <span>Video Proof Reels</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'videos' ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'}`}>
                  {INSTALLATION_VIDEO_REELS.length}
                </span>
              </button>
            </div>

            {/* Real-Time Live Search Input */}
            <div className="relative min-w-[240px] lg:w-72">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search city, roof type or kW..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-stone-50 hover:bg-stone-100/80 focus:bg-white border border-stone-200 text-xs text-slate-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Clean City Filter Chips (Without ugly scrollbars) */}
          {activeTab !== 'videos' && (
            <div className="flex items-center gap-2 pt-2 border-t border-stone-100 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading shrink-0 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8B1E1E]" /> District:
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {filterCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      selectedCity === city
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-stone-100/90 text-stone-600 hover:bg-stone-200/90 hover:text-stone-900'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              {(selectedCity !== 'All' || searchQuery !== '') && (
                <button
                  onClick={() => {
                    setSelectedCity('All');
                    setSearchQuery('');
                  }}
                  className="ml-auto text-[11px] font-bold text-[#8B1E1E] hover:underline whitespace-nowrap cursor-pointer shrink-0"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ── 4. PROJECTS CARDS GRID VIEW ── */}
      {activeTab !== 'videos' && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">No matching projects found</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                We couldn't find any installations matching your current search criteria. Try selecting another city or reset filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSearchQuery('');
                }}
                className="bg-[#8B1E1E] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#5E1212] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((proj) => {
                const billReductionPercent = Math.round(
                  ((proj.monthlyBillBefore - proj.monthlyBillAfter) / proj.monthlyBillBefore) * 100
                );

                return (
                  <div
                    key={proj.id}
                    className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div>
                      {/* Project High-Res Photographic Inset */}
                      <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                        <img
                          src={proj.image || '/images/projects/project1.jpg'}
                          alt={proj.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                        {/* Top Floating Badges */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider font-heading px-3 py-1 rounded-lg bg-[#8B1E1E] text-white shadow-md border border-red-400/30 backdrop-blur-md">
                            <Zap className="w-3 h-3 text-amber-300" />
                            <span>{proj.systemSizeKw} kW Array</span>
                          </span>

                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-slate-900 uppercase tracking-wider font-heading shadow-xs">
                            {proj.category || 'Solar PV'}
                          </span>
                        </div>

                        {/* Bottom Image Caption */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-center justify-between">
                          <span className="text-xs font-bold font-heading flex items-center gap-1.5 drop-shadow-sm">
                            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{proj.city}, {proj.state}</span>
                          </span>

                          <span className="text-[10px] font-semibold bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-md text-slate-200 border border-white/10 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-emerald-400" />
                            <span>{proj.installationDays} Days Setup</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Content Details */}
                      <div className="p-6 space-y-4">
                        
                        {/* Homeowner & Roof Type */}
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                              {proj.homeownerName}
                            </h3>
                            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0" title="Verified Customer">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          </div>
                          
                          <p className="text-xs text-stone-500 mt-1 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{proj.roofType}</span>
                          </p>
                        </div>

                        {/* Before vs After Bill Savings Highlight Box */}
                        <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-200/90 relative overflow-hidden">
                          <div className="grid grid-cols-2 gap-2 relative z-10">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-heading">
                                Monthly Bill Before
                              </span>
                              <span className="text-sm font-bold text-stone-400 line-through">
                                {formatINR(proj.monthlyBillBefore)}
                              </span>
                            </div>

                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block font-heading flex items-center justify-between">
                                <span>Bill After Solar</span>
                                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-md">
                                  -{billReductionPercent}%
                                </span>
                              </span>
                              <span className="text-base font-bold text-emerald-600 font-heading">
                                {formatINR(proj.monthlyBillAfter)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Annual Savings & Subsidy Badges */}
                        <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-100">
                          <div>
                            <span className="text-[11px] text-stone-500">Yearly Savings:</span>
                            <span className="font-bold text-slate-900 ml-1">
                              {formatINR(proj.annualSavings || 96000)}/yr
                            </span>
                          </div>

                          {proj.subsidyReceived ? (
                            <span className="text-[11px] font-bold text-amber-800 bg-amber-50/80 px-2.5 py-0.5 rounded-md border border-amber-200/80 flex items-center gap-1">
                              <Wallet className="w-3 h-3 text-amber-600" />
                              <span>₹{proj.subsidyReceived.toLocaleString('en-IN')} Subsidy</span>
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                              Commercial ROI
                            </span>
                          )}
                        </div>

                        {/* Homeowner Review / Verdict */}
                        <div className="bg-amber-50/40 p-3.5 rounded-xl border border-amber-100/70 space-y-1">
                          <div className="flex items-center gap-1 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <p className="text-xs text-stone-600 italic leading-relaxed line-clamp-3">
                            "{proj.verdict}"
                          </p>
                        </div>

                      </div>
                    </div>

                    {/* Card Bottom Actions */}
                    <div className="p-6 pt-0 space-y-2">
                      <button
                        onClick={onCtaClick}
                        className="w-full py-3 bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-[#8B1E1E]/20 cursor-pointer"
                      >
                        <span>Get Similar Proposal for My Roof</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setSelectedProjectModal(proj)}
                        className="w-full py-2 bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-semibold text-[11px] rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-stone-500" />
                        <span>View Technical Specs &amp; Engineering</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </section>
      )}

      {/* ── 5. DEDICATED ON-SITE VIDEO REELS VIEW (CINEMATIC LUXURY) ── */}
      <section id="video-proof-reels" className="scroll-mt-28 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          
          <div className="bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/40 text-slate-900 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-md border border-stone-200/90 relative overflow-hidden space-y-8">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold font-heading border border-[#8B1E1E]/20">
                  <Film className="w-3.5 h-3.5" />
                  <span>On-Site Video Proof</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-[#0B1730]">
                  Watch SolarArk Installations Across Maharashtra
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 max-w-2xl font-normal">
                  Actual site walkthroughs, aerial drone inspections, structural mounting tests, and net-metering commissioning recordings with zero audio clutter.
                </p>
              </div>

              <div className="text-xs text-[#8B1E1E] font-bold font-heading bg-white border border-stone-200 px-3.5 py-1.5 rounded-xl shadow-2xs">
                6 Verified Video Walkthroughs
              </div>
            </div>

            {/* Video Reels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {INSTALLATION_VIDEO_REELS.map((reel) => (
                <div
                  key={reel.id}
                  className="bg-white border border-stone-200/90 rounded-2xl p-4 flex flex-col justify-between shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all group space-y-3"
                >
                  <div className="space-y-3">
                    {/* Embedded Native Video Player with Seamless Autoplay & Controls */}
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-stone-200 shadow-inner flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <video
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onLoadedMetadata={(e) => {
                          e.currentTarget.muted = true;
                          e.currentTarget.play().catch(() => {});
                        }}
                        className="w-full h-full object-cover"
                      >
                        <source src={reel.videoUrl} type="video/mp4" />
                        <source src={reel.videoUrl} type="video/quicktime" />
                        Your browser does not support video playback.
                      </video>

                      {/* Video Category Badge Tag */}
                      <div className="absolute top-2.5 left-2.5 pointer-events-none">
                        <span className="text-[10px] font-bold bg-[#8B1E1E] text-white px-2 py-0.5 rounded shadow-xs">
                          {reel.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E1E] font-heading">
                          Field Record #{reel.id.replace('reel-', '')}
                        </span>
                        <span className="text-[10px] text-stone-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#8B1E1E]" /> {reel.location}
                        </span>
                      </div>

                      <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                        {reel.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                        {reel.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags Pill Row & Quick Action */}
                  <div className="pt-2.5 border-t border-stone-100 space-y-2.5">
                    <div className="flex flex-wrap gap-1.5">
                      {reel.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-stone-100 border border-stone-200 px-2 py-0.5 rounded text-stone-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onCtaClick}
                      className="w-full py-2.5 bg-[#8B1E1E] hover:bg-[#5E1212] text-white text-[11px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
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

      {/* ── 6. SEPARATE GALLERY BANNER INVITATION ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-200 transition-colors">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Dedicated Photo Gallery</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
              Want to see our Exhibitions, CREDAI Expos &amp; Community Events?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Explore 8 dedicated photo albums, exhibition pavilions, and celebration moments in our separate Community Gallery.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/gallery')}
            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Explore Community Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── 7. BOTTOM LOCAL REPORT & PINCODE CONSULTATION BANNER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
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
              <p className="text-xs sm:text-sm text-slate-100 max-w-2xl leading-relaxed">
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

      {/* ── 8. INTERACTIVE PROJECT TECHNICAL SPEC MODAL ── */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header with Image */}
            <div className="relative aspect-[16/9] bg-stone-900">
              <img
                src={selectedProjectModal.image || '/images/projects/project1.jpg'}
                alt={selectedProjectModal.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#8B1E1E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    {selectedProjectModal.systemSizeKw} kW Array
                  </span>
                  <span className="text-xs text-amber-300 font-medium">
                    {selectedProjectModal.city}, {selectedProjectModal.state}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading">
                  {selectedProjectModal.homeownerName}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <div>
                  <div className="text-[10px] text-stone-500 font-medium">Monthly Generation</div>
                  <div className="text-base font-bold text-slate-900 font-heading">
                    {selectedProjectModal.generationUnitsPerMonth || Math.round(selectedProjectModal.systemSizeKw * 120)} kWh
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium">Bill Cut</div>
                  <div className="text-base font-bold text-emerald-600 font-heading">
                    {Math.round(((selectedProjectModal.monthlyBillBefore - selectedProjectModal.monthlyBillAfter) / selectedProjectModal.monthlyBillBefore) * 100)}%
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium">Annual Savings</div>
                  <div className="text-base font-bold text-slate-900 font-heading">
                    {formatINR(selectedProjectModal.annualSavings || 96000)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-500 font-medium">Govt Subsidy</div>
                  <div className="text-base font-bold text-amber-600 font-heading">
                    {selectedProjectModal.subsidyReceived ? `₹${selectedProjectModal.subsidyReceived.toLocaleString('en-IN')}` : 'Commercial'}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
                  Mounting &amp; Engineering Specifications
                </h4>
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Structure:</strong> {selectedProjectModal.roofType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Turnkey Commissioning:</strong> Completed in {selectedProjectModal.installationDays} business days with MSEDCL sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Technology:</strong> Tier-1 N-Type TOPCon High Efficiency Photovoltaic Array</span>
                  </div>
                </div>
              </div>

              {/* Customer Quote */}
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 text-xs text-stone-700 italic">
                "{selectedProjectModal.verdict}"
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedProjectModal(null);
                    onCtaClick();
                  }}
                  className="flex-1 bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs py-3 rounded-xl transition-colors text-center cursor-pointer shadow-md"
                >
                  Get Custom Estimate for My Rooftop
                </button>
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
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
