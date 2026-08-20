/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  MapPin,
  Zap,
  TrendingDown,
  CheckCircle2,
  Play,
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
  Search
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

  const filterCities = ['All', 'Nagpur', 'Pune', 'Amravati', 'Chh. Sambhajinagar', 'Wardha', 'Akola'];

  // Filter projects by category and city
  const filteredProjects = PROJECT_CASE_STUDIES.filter((proj) => {
    const matchesCity = selectedCity === 'All' || proj.city.toLowerCase().includes(selectedCity.toLowerCase()) || selectedCity.toLowerCase().includes(proj.city.toLowerCase());
    
    if (activeTab === 'all') return matchesCity;
    if (activeTab === 'residential') return matchesCity && proj.category === 'Residential';
    if (activeTab === 'society') return matchesCity && proj.category === 'Housing Society';
    if (activeTab === 'commercial') return matchesCity && proj.category === 'Commercial & Industrial';
    return matchesCity;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-20">
      
      {/* ── 1. COMPACT PAGE CONTEXT / BREADCRUMB ROW ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-4">
        <div className="flex items-center justify-between py-2 border-b border-stone-200/60">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <span
              onClick={() => onNavigate('/')}
              className="hover:text-stone-800 cursor-pointer flex items-center gap-1"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-slate-800 font-bold">Our Projects &amp; Field Installations</span>
          </div>
        </div>
      </div>

      {/* ── 2. HERO SHOWCASE HEADER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-10">
        <div className="space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7D1818] shadow-xs text-[11px] font-bold text-white tracking-wider uppercase font-heading">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>VERIFIED ROOFTOP EPC INSTALLATIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0B1730] font-heading tracking-tight leading-[1.14]">
                Explore SolarArk’s <br className="hidden sm:inline" />
                <span>Verified Completed Projects</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                Powering over <strong>5,000+ rooftops across Maharashtra</strong>. Explore real residential villas, housing societies, industrial factories, and on-site field installation walkthroughs with verified electricity bill reductions.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <button
                onClick={onCtaClick}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Neighbor Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-stone-500 font-medium">
                Field engineers available across 7 Maharashtra districts
              </span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-200/80">
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-bold text-[#0B1730] font-heading">5,000+</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Rooftops Commissioned</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">35+ MW</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Total Capacity Installed</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-heading">90%+</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Avg. Bill Reduction</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 font-heading">₹78,000</div>
              <div className="text-xs text-stone-500 font-medium mt-0.5">Max Central Subsidy Claimed</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. CATEGORY NAVIGATION TABS & CITY FILTERS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sticky top-[72px] z-30 bg-[#FAF9F6]/95 backdrop-blur-md py-3">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-200 pb-3">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Projects ({PROJECT_CASE_STUDIES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'residential'
                  ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Residential Villas</span>
            </button>

            <button
              onClick={() => setActiveTab('society')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'society'
                  ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Housing Societies</span>
            </button>

            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'commercial'
                  ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Factory className="w-3.5 h-3.5" />
              <span>Commercial &amp; Industrial</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'videos'
                  ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>On-Site Video Reels ({INSTALLATION_VIDEO_REELS.length})</span>
            </button>
          </div>

          {/* City Filter Pills (When viewing projects) */}
          {activeTab !== 'videos' && (
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading mr-1 shrink-0">
                City:
              </span>
              {filterCities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCity === city
                      ? 'bg-slate-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── 4. PROJECTS CARDS GRID VIEW ── */}
      {activeTab !== 'videos' && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
              <p className="text-stone-600 font-medium">No projects found for the selected city filter.</p>
              <button
                onClick={() => setSelectedCity('All')}
                className="mt-3 text-xs font-bold text-[#8B1E1E] hover:underline"
              >
                Reset City Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider font-heading px-2.5 py-1 rounded-md bg-[#8B1E1E] text-white shadow-sm">
                          <Zap className="w-3 h-3" />
                          <span>{proj.systemSizeKw} kW Array</span>
                        </span>

                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-slate-800 uppercase tracking-wider font-heading">
                          {proj.category || 'Solar PV'}
                        </span>
                      </div>

                      {/* Bottom Image Caption */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-center justify-between">
                        <span className="text-xs font-bold font-heading flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-300" />
                          <span>{proj.city}, {proj.state}</span>
                        </span>

                        <span className="text-[10px] font-semibold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-slate-200">
                          {proj.installationDays} Days Install
                        </span>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                          {proj.homeownerName}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{proj.roofType}</span>
                        </p>
                      </div>

                      {/* Before vs After Bill Savings Box */}
                      <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-200/80 grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-heading">
                            Bill Before
                          </span>
                          <span className="text-sm font-bold text-stone-400 line-through">
                            {formatINR(proj.monthlyBillBefore)}/mo
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block font-heading">
                            Bill After Solar
                          </span>
                          <span className="text-base font-bold text-emerald-600 font-heading">
                            {formatINR(proj.monthlyBillAfter)}/mo
                          </span>
                        </div>
                      </div>

                      {/* Annual Savings & Subsidy Stats */}
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-100">
                        <div>
                          <span className="text-[11px] text-stone-500">Annual Savings:</span>
                          <span className="font-bold text-slate-900 ml-1">
                            {formatINR(proj.annualSavings || 96000)}/yr
                          </span>
                        </div>

                        {proj.subsidyReceived ? (
                          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                            ₹{proj.subsidyReceived.toLocaleString('en-IN')} Subsidy
                          </span>
                        ) : null}
                      </div>

                      {/* Homeowner Review / Verdict */}
                      <p className="text-xs text-stone-600 italic bg-amber-50/40 p-3 rounded-xl border border-amber-100/60 leading-relaxed">
                        "{proj.verdict}"
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={onCtaClick}
                      className="w-full py-3 bg-stone-100 hover:bg-[#8B1E1E] text-stone-800 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Get Similar Proposal for My Roof</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>
      )}

      {/* ── 5. DEDICATED ON-SITE VIDEO REELS VIEW ── */}
      {(activeTab === 'all' || activeTab === 'videos') && (
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          
          <div className="bg-[#120808] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#8B1E1E]/30 relative overflow-hidden space-y-8">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8B1E1E]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold font-heading border border-amber-400/30">
                  <Film className="w-3.5 h-3.5" />
                  <span>On-Site Video Proof</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight">
                  Watch SolarArk Installations Across Maharashtra
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Actual site walkthroughs, aerial drone inspections, structural mounting tests, and net-metering commissioning recordings.
                </p>
              </div>

              <div className="text-xs text-amber-300 font-bold font-heading">
                6 Verified Video Walkthroughs
              </div>
            </div>

            {/* Video Reels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {INSTALLATION_VIDEO_REELS.map((reel) => (
                <div
                  key={reel.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-sm space-y-3 hover:border-[#8B1E1E]/50 transition-colors"
                >
                  <div className="space-y-3">
                    {/* Embedded Native Video Player */}
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black shadow-inner flex items-center justify-center">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={reel.videoUrl} type="video/mp4" />
                        <source src={reel.videoUrl} type="video/quicktime" />
                        Your browser does not support video playback.
                      </video>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 font-heading">
                          {reel.category}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C53030]" /> {reel.location}
                        </span>
                      </div>

                      <h3 className="font-heading text-sm font-bold text-white leading-snug">
                        {reel.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {reel.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {reel.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-white/10 px-2 py-0.5 rounded text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>
      )}

      {/* ── 6. SEPARATE GALLERY BANNER INVITATION ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Dedicated Photo Gallery</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
              Want to see our Exhibitions, CREDAI Expos &amp; Community Events?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Explore 8 dedicated photo albums and event reels in our separate Community Gallery.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/gallery')}
            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Explore Community Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── 7. BOTTOM LOCAL REPORT & PINCODE CONSULTATION BANNER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 font-heading">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Installation Network</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-white">
                Want to see solar installations near your locality?
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                Our local field engineers can arrange a neighbor site visit in your exact pin code or share an engineered generation report customized for your rooftop area.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onCtaClick}
                className="w-full bg-white hover:bg-amber-50 text-[#8B1E1E] font-heading font-bold text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Local Installation Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:7080909590"
                className="text-center text-xs text-amber-200 hover:text-white font-medium flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Direct Field Desk: <strong>7080909590</strong></span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
