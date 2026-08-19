/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ClipboardList, 
  Cpu, 
  Wrench, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Step 3: Installation

  const stages = [
    {
      id: '01',
      label: 'Survey & Audit',
      tagline: 'Precision 3D shadow analysis and roof load testing.',
      icon: ClipboardList,
      image: '/images/hero-roof-solar-ark.jpg',
      alt: 'SolarARK engineer surveying residential rooftop with precision instruments',
      hotspots: [
        { label: '3D Drone Roof Scan', desc: 'Accurate shadow & angle map', pos: 'top-[28%] right-[22%]' },
      ],
    },
    {
      id: '02',
      label: 'CAD Engineering',
      tagline: 'Bespoke layout with zero slab penetration mounting.',
      icon: Cpu,
      image: '/calculator-solar-home.jpg',
      alt: 'SolarARK high-yield engineering and string inverter design layout',
      hotspots: [
        { label: 'Tier-1 Mono PERC', desc: '540W+ high-yield panels', pos: 'top-[35%] right-[18%]' },
      ],
    },
    {
      id: '03',
      label: 'Certified Install',
      tagline: 'MNRE-trained technicians complete installation in 48 hours.',
      icon: Wrench,
      image: '/images/how-it-works-rooftop-crew.jpg',
      alt: 'SolarARK certified installation team installing solar panels on residential roof',
      hotspots: [
        { label: 'Tier-1 Monocrystalline Cells', desc: '22.8% high-efficiency modules', pos: 'top-[18%] right-[12%]' },
        { label: 'WindPro 170 km/h Structure', desc: 'Galvanized zero-slab penetration', pos: 'bottom-[22%] right-[20%]' },
      ],
    },
    {
      id: '04',
      label: 'Net-Meter & Live',
      tagline: 'DISCOM bidirectional meter activated for instant zero bills.',
      icon: Zap,
      image: '/images/gallery-grid-1.jpg',
      alt: 'SolarARK smart telemetry app showing zero electricity bills',
      hotspots: [
        { label: 'Smart Telemetry Hub', desc: 'Real-time generation tracking', pos: 'top-[32%] right-[15%]' },
      ],
    },
  ];

  const currentStage = stages[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 border-b border-stone-200/60 overflow-hidden text-slate-900 selection:bg-[#8B1E1E] selection:text-white"
    >
      {/* ── 1. AMBIENT RADIAL WARMTH ILLUMINATION ── */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/8 via-[#8B1E1E]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-red-500/4 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── 2. SEAMLESS PHOTOREALISTIC STAGE BACKDROP WITH SUBTLE CINEMATIC VIGNETTE ── */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[78%] xl:w-[75%] pointer-events-none z-0 overflow-hidden select-none">
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
              activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Crisp, Full-Vibrancy Photographic Image (No milky washout) */}
            <img
              src={stage.image}
              alt={stage.alt}
              className="w-full h-full object-cover object-[center_35%] filter brightness-[0.98] contrast-[1.06] saturate-[1.10]"
            />

            {/* Subtle Immersive Cinematic Dark Fade on the Left Side (Enhances text contrast without washing out the photo) */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/18 via-35% to-transparent pointer-events-none" 
            />

            {/* Subtle Top & Bottom Edge Vignettes for Photographic Depth */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />

            {/* Organic Transition from Left Cream Base into the Image */}
            <div 
              className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none" 
            />

            {/* Stage Hotspot Tooltip Badges (Floating on image) */}
            <div className="absolute inset-0 pointer-events-none hidden xl:block">
              {stage.hotspots.map((spot, sIdx) => (
                <div
                  key={sIdx}
                  className={`absolute ${spot.pos} animate-in fade-in zoom-in-95 duration-500`}
                >
                  <div className="bg-white/92 backdrop-blur-md border border-stone-200/90 rounded-2xl px-3.5 py-2 shadow-lg shadow-black/10 inline-flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-900 font-heading leading-tight">
                        {spot.label}
                      </div>
                      <div className="text-[9.5px] text-stone-600 font-medium leading-none mt-0.5">
                        {spot.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── 3. MAIN CONTENT LAYER ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 lg:space-y-16">
        
        {/* ── TOP EDITORIAL ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
          
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 pt-2">
            
            {/* Eyebrow Pill */}
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/15 text-[11px] font-extrabold text-[#8B1E1E] shadow-2xs backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>FRICTIONLESS END-TO-END</span>
            </div>

            {/* Complete, Expansive Display Headline */}
            <div className="space-y-2">
              <h2 
                className="hero-display text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.10] text-[#0F172A] m-0"
                style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.9), 0 2px 12px rgba(0, 0, 0, 0.05)' }}
              >
                We handle the hard part.{' '}
                <span className="text-[#8B1E1E]">You just save.</span>
              </h2>

              <p 
                className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-xl text-left"
                style={{ textShadow: '0 1px 1px rgba(255, 255, 255, 0.8)' }}
              >
                From precision roof assessment to certified installation and DISCOM net-metering approvals, SolarARK manages the entire journey end to end.
              </p>
            </div>

            {/* Floating Glassmorphic Trust Badge */}
            <div className="bg-white/92 backdrop-blur-md rounded-2xl border border-stone-200/90 p-3.5 sm:p-4 shadow-sm inline-flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-0.5 text-left">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] leading-snug">
                  Certified Installation Team
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  Safety. Quality. On-time.
                </p>
              </div>
            </div>

          </div>

          {/* Right Spacer for Clean Atmospheric Breathing Room */}
          <div className="lg:col-span-6 xl:col-span-6 hidden lg:block" />

        </div>

        {/* ── 4. SEAMLESS FLOATING INTERACTIVE JOURNEY BAR & CONTROLLER ── */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-[26px] sm:rounded-3xl border border-stone-200/80 p-5 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.06)] relative overflow-hidden text-slate-900">
          
          {/* Subtle Top Ambient Glow Accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#8B1E1E]/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            
            {/* 4 Connected Interactive Steps */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 relative">
              
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStep(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Step ${stage.id}: ${stage.label} - ${stage.tagline}`}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 relative flex flex-col justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E] ${
                      isActive
                        ? 'bg-[#FAF8F5] border border-stone-200/90 shadow-xs'
                        : 'hover:bg-stone-50/70 border border-transparent'
                    }`}
                  >
                    {/* Top Circle & Step ID */}
                    <div className="flex items-center gap-3 mb-2.5">
                      {isActive ? (
                        /* Elevated Glowing Active Orb in Brand Maroon */
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full btn-primary-maroon text-white flex flex-col items-center justify-center shrink-0 transform scale-105 transition-all">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-[10px] font-extrabold font-heading -mt-0.5">{stage.id}</span>
                        </div>
                      ) : (
                        /* Inactive Soft Circle Badge */
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center shrink-0 group-hover:bg-stone-200 group-hover:text-slate-800 transition-colors">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      )}

                      <div>
                        <span className={`text-[10.5px] font-extrabold font-heading block uppercase tracking-wider ${isActive ? 'text-[#8B1E1E]' : 'text-stone-400'}`}>
                          Step {stage.id}
                        </span>
                        <span className={`font-heading font-extrabold text-xs sm:text-sm tracking-tight block ${isActive ? 'text-[#8B1E1E]' : 'text-slate-800'}`}>
                          {stage.label}
                        </span>
                      </div>
                    </div>

                    {/* Concise One-Line Description */}
                    <p className={`text-xs leading-relaxed font-normal ${isActive ? 'text-slate-700 font-medium' : 'text-stone-500'}`}>
                      {stage.tagline}
                    </p>
                  </button>
                );
              })}

            </div>

            {/* Right Primary Action CTA */}
            <div className="lg:w-72 xl:w-80 flex flex-col items-stretch sm:items-center lg:items-end justify-center pt-4 lg:pt-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-stone-200/80 gap-2 shrink-0">
              <button
                onClick={onCtaClick}
                className="w-full btn-primary-maroon font-heading font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Takes 60 seconds • No obligation</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
