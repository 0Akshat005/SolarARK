/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  Info, 
  Layers, 
  Building2, 
  Star, 
  Smartphone 
} from 'lucide-react';

interface DeepDiveTeaserProps {
  onNavigate: (path: string) => void;
}

export const DeepDiveTeaser: React.FC<DeepDiveTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-10 sm:space-y-12">
        
        {/* ── SECTION HEADER ── */}
        <div className="max-w-2xl space-y-3">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E]">
            <Info className="w-3.5 h-3.5" />
            <span>Discover SolarARK</span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.12]">
            See what powers <span className="text-accent-light">SolarARK.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
            Explore our technology, real installations, homeowner experiences, and smart monitoring — all in one place.
          </p>
        </div>

        {/* ── ASYMMETRIC BENTO EDITORIAL COMPOSITION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* ── TILE 01: TECHNOLOGY & HARDWARE (Left Dominant Block - lg:col-span-5) ── */}
          {/* TECHNOLOGY_IMAGE */}
          <div
            onClick={() => onNavigate('/technology')}
            className="lg:col-span-5 relative group rounded-3xl overflow-hidden bg-[#EFECE6] cursor-pointer min-h-[440px] sm:min-h-[480px] lg:min-h-[540px] flex flex-col justify-between transition-all duration-500 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10"
          >
            {/* Asset Slot: TECHNOLOGY_IMAGE */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/technology-solar-module.jpg"
                alt="Technology & Hardware - Tier-1 Monocrystalline Solar Modules"
                className="w-full h-full object-cover object-[55%_40%] group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              {/* Localized Bottom Readability Gradient (Bottom 60% only) */}
              <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent pointer-events-none" />
            </div>

            {/* Top-Left Badge Pill: 01 */}
            <div className="relative z-10 p-5 sm:p-6 flex justify-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E] text-white text-xs font-bold shadow-md">
                <Layers className="w-3.5 h-3.5" />
                <span>01</span>
              </div>
            </div>

            {/* Bottom Overlay Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Technology <br />
                &amp; Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-sm">
                Tier-1 modules, advanced inverters, and durable structures built for 25+ years of reliable performance.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                  <span>Explore Technology</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN CONTAINER (lg:col-span-7) ── */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 justify-between">
            
            {/* ── TILE 02: COMPLETED PROJECTS (Right Top / Large Horizontal Block) ── */}
            {/* PROJECTS_IMAGE */}
            <div
              onClick={() => onNavigate('/projects')}
              className="relative group rounded-3xl overflow-hidden bg-[#EFECE6] cursor-pointer min-h-[220px] sm:min-h-[240px] lg:min-h-[255px] flex flex-col justify-between transition-all duration-500 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10"
            >
              {/* Asset Slot: PROJECTS_IMAGE */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src="/images/completed-projects-home.jpg"
                  alt="Completed SolarARK Residential Rooftop Projects"
                  className="w-full h-full object-cover object-[65%_45%] group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Localized Bottom Readability Gradient */}
                <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent pointer-events-none" />
              </div>

              {/* Top-Left Badge Pill: 02 */}
              <div className="relative z-10 p-5 sm:p-6 flex justify-start">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#059669] text-white text-xs font-bold shadow-md">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>02</span>
                </div>
              </div>

              {/* Bottom Overlay Content */}
              <div className="relative z-10 p-5 sm:p-6 space-y-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Completed Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-snug max-w-md">
                  15+ cities. Hundreds of rooftop installations. Verified bill savings.
                </p>
                <div className="pt-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all">
                    <span>View Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT BOTTOM ROW: TILES 03 & 04 (2 Side-by-Side Small Blocks) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              
              {/* ── TILE 03: HOMEOWNER STORIES (Bottom Left) ── */}
              {/* HOMEOWNER_IMAGE */}
              <div
                onClick={() => onNavigate('/reviews')}
                className="relative group rounded-3xl overflow-hidden bg-[#EFECE6] cursor-pointer min-h-[220px] sm:min-h-[240px] lg:min-h-[255px] flex flex-col justify-between transition-all duration-500 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10"
              >
                {/* Asset Slot: HOMEOWNER_IMAGE */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/images/homeowner-family-stories.jpg"
                    alt="Verified Indian Homeowner Solar Stories"
                    className="w-full h-full object-cover object-[50%_25%] group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Localized Bottom Readability Gradient */}
                  <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent pointer-events-none" />
                </div>

                {/* Top-Left Badge Pill: 03 */}
                <div className="relative z-10 p-5 flex justify-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706] text-white text-xs font-bold shadow-md">
                    <Star className="w-3.5 h-3.5" />
                    <span>03</span>
                  </div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="relative z-10 p-5 space-y-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                    Homeowner Stories
                  </h3>
                  <p className="text-xs text-slate-200 font-normal leading-snug">
                    Real families. Real savings. Real experiences.
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                      <span>Read Reviews</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ── TILE 04: APP EXPERIENCE (Bottom Right) ── */}
              {/* APP_IMAGE */}
              <div
                onClick={() => onNavigate('/app')}
                className="relative group rounded-3xl overflow-hidden bg-[#EFECE6] cursor-pointer min-h-[220px] sm:min-h-[240px] lg:min-h-[255px] flex flex-col justify-between transition-all duration-500 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10"
              >
                {/* Asset Slot: APP_IMAGE */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="/images/app-experience-phone.jpg"
                    alt="SolarARK Real-Time Monitoring Mobile App"
                    className="w-full h-full object-cover object-[60%_35%] group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Localized Bottom Readability Gradient */}
                  <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-50% to-transparent pointer-events-none" />
                </div>

                {/* Top-Left Badge Pill: 04 */}
                <div className="relative z-10 p-5 flex justify-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED] text-white text-xs font-bold shadow-md">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>04</span>
                  </div>
                </div>

                {/* Bottom Overlay Content */}
                <div className="relative z-10 p-5 space-y-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                    App Experience
                  </h3>
                  <p className="text-xs text-slate-200 font-normal leading-snug">
                    Track generation, savings, and system health in real time.
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all">
                      <span>Explore Monitoring</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
