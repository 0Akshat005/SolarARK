/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  Compass,
  Grid,
  Wrench,
  BarChart3,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  // Step 3 (03 INSTALL) is the default active state as specified in prompt & reference
  const [activeStep, setActiveStep] = useState<number>(2);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
  }, []);

  const stages = [
    {
      id: '01',
      label: 'SURVEY',
      tagline: 'We understand your roof first.',
      headline: '3D LiDAR Laser Shade & Slab Analysis',
      description: 'Our certified engineers conduct a 3D LiDAR laser scan of your rooftop to evaluate tilt angle, structural strength, and shadow profiles from nearby trees or parapet walls.',
      icon: Compass,
      image: '/images/story-empty-rooftop.jpg',
      alt: 'Certified engineer conducting 3D shadow and roof survey',
      badgeTop: '📐 3D LiDAR Laser Shade Scan',
      badgeBottom: '✓ Feeder Capacity Checked • DISCOM Approved',
    },
    {
      id: '02',
      label: 'DESIGN',
      tagline: 'A system designed around your home.',
      headline: 'Custom 3D CAD Blueprint & Shadow Simulation',
      description: 'We generate an exact 3D CAD layout simulation showing module placement, wind-load calculations, and guaranteed generation estimates before you invest.',
      icon: Grid,
      image: '/images/process/stage-02-cad-design.jpg',
      alt: 'Custom 3D CAD solar layout and string architecture',
      badgeTop: '☀️ Optimized Tilt & Shadow Simulation',
      badgeBottom: '🏢 100% Terrace Usability Preserved',
    },
    {
      id: '03',
      label: 'INSTALL',
      tagline: 'Our team handles the work.',
      headline: 'Turnkey 48-Hour Installation by Certified Master Installers',
      description: 'Our in-house master installers mount the WindPro galvanized structure, run concealed conduits, and coordinate DISCOM net-metering and PM Surya Ghar subsidy filings end to end.',
      icon: Wrench,
      image: '/images/process/stage-03-install-wide.jpg',
      alt: 'Certified SolarArk technicians installing solar panels on residential rooftop',
      badgeTop: '⚡ Monocrystalline Tier-1 Solar Panels',
      badgeBottom: '🛡️ WindPro 170 km/h Elevated GI Structure',
    },
    {
      id: '04',
      label: 'LIVE',
      tagline: 'You start generating. You start saving.',
      headline: 'Grid Synchronization, Zero Bills & Live IoT Telemetry',
      description: 'DISCOM net-meter is synchronized. Switch on clean solar power, watch your electric meter spin backward, and track real-time savings live on the SolarArk companion app.',
      icon: BarChart3,
      image: '/images/earnwithus/earnwithus-hero-rooftop.jpg',
      alt: 'Operational residential rooftop solar array generating clean electricity',
      badgeTop: '📊 Real-Time IoT Telemetry Active',
      badgeBottom: '💰 PM Surya Ghar ₹78,000 Subsidy Credited',
    },
  ];

  const currentStage = stages[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F9F6F1] to-[#F5F2EC] py-16 sm:py-20 border-b border-stone-200/80 overflow-hidden text-slate-900 selection:bg-[#8B1E1E] selection:text-white"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8 lg:space-y-10">
        
        {/* ── 1. COMPREHENSIVE FULL-WIDTH EDITORIAL HEADER (NO AWKWARD CUTOFFS) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          
          <div className="space-y-3 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E1E] uppercase tracking-wider font-heading">
              <CheckCircle2 className="w-4 h-4 text-[#8B1E1E]" />
              <span>FRICTIONLESS END-TO-END</span>
            </div>

            {/* Complete One-Line Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.12] text-[#0F172A] font-heading m-0">
              We handle the hard part. <span className="text-[#8B1E1E]">You just save.</span>
            </h2>

            {/* Expansive One-Line Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From roof assessment to installation and approvals, SolarARK manages the journey end to end.
            </p>
          </div>

          {/* Certified Team Trust Badge */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200/80 p-3.5 sm:p-4 shadow-sm inline-flex items-center gap-3.5 shrink-0 self-start lg:self-auto">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] leading-snug">
                Certified Installation Team
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                Safety. Quality. On-time.
              </p>
            </div>
          </div>

        </div>

        {/* ── 2. CINEMATIC INTERACTIVE STAGE SHOWCASE CANVAS ── */}
        <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-xl bg-slate-900 min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          
          {/* Background Cross-Fading Stage Visuals */}
          {stages.map((stage, idx) => (
            <img
              key={stage.id}
              src={stage.image}
              alt={stage.alt}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
                activeStep === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}

          {/* Cinematic Lighting & Contrast Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none z-10 hidden sm:block" />

          {/* ── Stage Top Micro-Bar ── */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold font-heading tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>STAGE {currentStage.id}: {currentStage.label}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-sm">
              <span>{currentStage.badgeTop}</span>
            </div>
          </div>

          {/* ── Stage Bottom Overlaid Narrative Card ── */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            
            <div className="lg:col-span-8 space-y-2 max-w-2xl">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                {currentStage.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl font-normal drop-shadow-sm">
                {currentStage.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/25 text-xs font-semibold text-white inline-flex items-center gap-2 shadow-sm">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentStage.badgeBottom}</span>
              </div>
            </div>

          </div>

        </div>

        {/* ── 3. BOTTOM HORIZONTAL INTERACTIVE JOURNEY CONTROLLER BAR & CTA ── */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-stone-200/80 p-5 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            
            {/* 4 Interactive Connected Steps */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
              
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
                    className={`text-left p-3 sm:p-4 rounded-2xl transition-all duration-300 relative flex flex-col justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E] ${
                      isActive
                        ? 'bg-[#FAF8F5] border border-stone-200/80 shadow-xs'
                        : 'hover:bg-stone-50/80'
                    }`}
                  >
                    {/* Top Circle & Step ID */}
                    <div className="flex items-center gap-3 mb-2.5">
                      {isActive ? (
                        /* Elevated Active Circle Badge */
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#8B1E1E] text-white flex flex-col items-center justify-center shadow-md shadow-[#8B1E1E]/30 shrink-0 transform scale-105 transition-all">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-[10px] font-bold font-heading -mt-0.5">{stage.id}</span>
                        </div>
                      ) : (
                        /* Inactive Soft Circle Badge */
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center shrink-0 group-hover:bg-stone-200 transition-colors">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-stone-500 group-hover:text-slate-800" />
                        </div>
                      )}

                      <div>
                        <span className={`text-[11px] font-bold font-heading block ${isActive ? 'text-[#8B1E1E]' : 'text-stone-400'}`}>
                          {stage.id}
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
                className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
