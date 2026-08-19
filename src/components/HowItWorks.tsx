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
  Check,
  Layers,
  Activity,
  Award
} from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  // Step 1 (01 SURVEY) starts the auto-advancing journey
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  const STEP_DURATION_MS = 5000;
  const TICK_INTERVAL_MS = 50;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
  }, []);

  // Automatic Smooth Flowing Timer
  useEffect(() => {
    if (isPaused || isReducedMotion) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_INTERVAL_MS / STEP_DURATION_MS) * 100;
        if (next >= 100) {
          setActiveStep((current) => (current + 1) % 4);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, isReducedMotion]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setProgress(0);
  };

  const stages = [
    {
      id: '01',
      label: 'SURVEY',
      tagline: 'We understand your roof first.',
      headline: '3D LiDAR Laser Shade & Structural Scan',
      description: 'Our certified engineers conduct a 3D LiDAR laser scan of your rooftop to evaluate tilt angle, structural strength, and shadow profiles from nearby trees or parapet walls.',
      icon: Compass,
      image: '/images/story-empty-rooftop.jpg',
      alt: 'Certified engineer conducting 3D shadow and roof survey',
      hotspots: [
        { label: '3D LiDAR Scan Active', desc: '±1mm rooftop topography precision', pos: 'top-16 left-12' },
        { label: 'DISCOM Feeder Checked', desc: '100% capacity pre-approved', pos: 'bottom-20 right-16' },
      ],
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
      hotspots: [
        { label: 'Optimized Azimuth & Tilt', desc: 'Maximizes winter & summer kWh yield', pos: 'top-20 right-20' },
        { label: 'Full Terrace Usability', desc: 'Elevated pergola structure clearance', pos: 'bottom-16 left-16' },
      ],
    },
    {
      id: '03',
      label: 'INSTALL',
      tagline: 'Our team handles the work.',
      headline: 'Turnkey Execution by Certified Master Installers',
      description: 'Our in-house master installers mount the WindPro galvanized structure, run concealed conduits, and coordinate DISCOM net-metering and PM Surya Ghar subsidy filings end to end.',
      icon: Wrench,
      image: '/images/process/stage-03-install-wide.jpg',
      alt: 'Certified SolarArk technicians installing solar panels on residential rooftop',
      hotspots: [
        { label: 'Tier-1 Monocrystalline Cells', desc: '22.8% high-efficiency modules', pos: 'top-14 right-24' },
        { label: 'WindPro 170 km/h Structure', desc: 'Galvanized zero slab penetration', pos: 'bottom-16 right-36' },
      ],
    },
    {
      id: '04',
      label: 'LIVE',
      tagline: 'You start generating. You start saving.',
      headline: 'Grid Synchronization & Live IoT Telemetry',
      description: 'DISCOM net-meter is synchronized. Switch on clean solar power, watch your electric meter spin backward, and track real-time savings live on the SolarArk companion app.',
      icon: BarChart3,
      image: '/images/earnwithus/earnwithus-hero-rooftop.jpg',
      alt: 'Operational residential rooftop solar array generating clean electricity',
      hotspots: [
        { label: 'Live IoT Telemetry Active', desc: 'Daily generation & savings telemetry', pos: 'top-16 right-16' },
        { label: '₹78,000 Subsidy Credited', desc: 'Direct to client bank account', pos: 'bottom-20 left-20' },
      ],
    },
  ];

  const currentStage = stages[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 border-b border-stone-200/60 overflow-hidden text-slate-900 selection:bg-[#8B1E1E] selection:text-white"
    >
      {/* ── 1. AMBIENT RADIAL WARMTH & GOLDEN SUNSET ILLUMINATION ── */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/8 via-[#8B1E1E]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-red-500/4 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── 2. SEAMLESS PHOTOREALISTIC STAGE BACKDROP WITH IMMERSIVE EDITORIAL SCRIM ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              activeStep === idx
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-[1.03] z-0'
            }`}
          >
            <img
              src={stage.image}
              alt={stage.alt}
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Right & Top Edge Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent pointer-events-none" />

            {/* Stage Hotspot Tooltip Badges (Floating on image) */}
            <div className="absolute inset-0 pointer-events-none hidden xl:block">
              {stage.hotspots.map((spot, sIdx) => (
                <div
                  key={sIdx}
                  className={`absolute ${spot.pos} animate-in fade-in zoom-in-95 duration-700`}
                >
                  <div className="bg-black/55 backdrop-blur-md border border-white/20 text-white rounded-2xl px-3.5 py-2 shadow-lg shadow-black/30 inline-flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-white font-heading leading-tight">
                        {spot.label}
                      </div>
                      <div className="text-[9.5px] text-slate-300 font-medium leading-none mt-0.5">
                        {spot.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── Immersive Subtle Dark Scrim on Left Side (Eliminates washout white fade, provides 100% text clarity) ── */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(10, 15, 29, 0.88) 0%, rgba(10, 15, 29, 0.74) 34%, rgba(10, 15, 29, 0.38) 54%, rgba(10, 15, 29, 0.10) 68%, transparent 82%)',
          }}
        />
        <div
          className="lg:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 15, 29, 0.88) 0%, rgba(10, 15, 29, 0.70) 50%, rgba(10, 15, 29, 0.90) 100%)',
          }}
        />

        {/* Subtle Top & Bottom Blends */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F6]/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF9F6]/40 to-transparent pointer-events-none z-10" />
      </div>

      {/* ── 3. MAIN CONTENT LAYER ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 lg:space-y-16">
        
        {/* ── TOP EDITORIAL ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
          
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 pt-2">
            
            {/* Eyebrow Pill — High Contrast Glassmorphic Badge */}
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-sm text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>FRICTIONLESS END-TO-END</span>
            </div>

            {/* Complete, Expansive Display Headline with Text Shadows */}
            <div className="space-y-1">
              <h2 
                className="hero-display text-3xl sm:text-4xl lg:text-[48px] text-white tracking-tight leading-[1.10] m-0"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.75)' }}
              >
                We handle the hard part.
              </h2>
              <h3 
                className="hero-display text-3xl sm:text-4xl lg:text-[48px] text-[#FF6B6B] tracking-tight leading-[1.10] m-0"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.75)' }}
              >
                You just save.
              </h3>
            </div>

            <p 
              className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-xl text-left"
              style={{ textShadow: '0 1px 12px rgba(0, 0, 0, 0.8)' }}
            >
              From precision roof assessment to certified installation and DISCOM net-metering approvals, SolarARK manages the entire journey end to end.
            </p>

            {/* Floating Glassmorphic Trust Badge */}
            <div className="bg-black/45 backdrop-blur-md rounded-2xl border border-white/20 p-3.5 sm:p-4 shadow-lg inline-flex items-center gap-3.5 text-white">
              <div className="w-11 h-11 rounded-xl bg-red-500/20 border border-red-500/30 text-[#FF6B6B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-0.5 text-left">
                <h4 className="font-heading font-bold text-sm sm:text-base text-white leading-snug">
                  Certified Installation Team
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Safety. Quality. On-time.
                </p>
              </div>
            </div>

          </div>

          {/* Right Spacer for Clean Atmospheric Breathing Room */}
          <div className="lg:col-span-6 xl:col-span-6 hidden lg:block" />

        </div>

        {/* ── 4. SEAMLESS FLOATING INTERACTIVE JOURNEY BAR & CONTROLLER ── */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-white/95 backdrop-blur-xl rounded-[26px] sm:rounded-3xl border border-stone-200/80 p-5 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.05)] relative overflow-hidden group/container"
        >
          
          {/* Subtle Top Ambient Glow Accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#8B1E1E]/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            
            {/* 4 Connected Interactive Steps with Flowing Progress Tracks */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 relative">
              
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStepClick(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Step ${stage.id}: ${stage.label} - ${stage.tagline}`}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 relative flex flex-col justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E] overflow-hidden ${
                      isActive
                        ? 'bg-[#FAF8F5] border border-stone-200/90 shadow-sm ring-1 ring-[#8B1E1E]/10'
                        : 'hover:bg-stone-50/70 border border-transparent'
                    }`}
                  >
                    {/* Top Circle & Step ID */}
                    <div className="flex items-center gap-3 mb-2.5">
                      {isActive ? (
                        /* Elevated Glowing Active Orb */
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#8B1E1E] to-[#6A1414] text-white flex flex-col items-center justify-center shadow-lg shadow-[#8B1E1E]/30 ring-4 ring-[#8B1E1E]/15 shrink-0 transform scale-105 transition-all">
                          <Icon className="w-5 h-5" />
                          <span className="text-[9.5px] font-extrabold font-heading -mt-0.5">{stage.id}</span>
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
                    <p className={`text-xs leading-relaxed font-normal mb-2 ${isActive ? 'text-slate-700 font-medium' : 'text-stone-500'}`}>
                      {stage.tagline}
                    </p>

                    {/* ── Flowing Animated Progress Bar (Apple / Tesla Carousel Style) ── */}
                    <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden mt-auto">
                      {isActive ? (
                        <div
                          className="h-full bg-gradient-to-r from-[#8B1E1E] to-[#E53E3E] rounded-full transition-all duration-75 ease-linear shadow-xs"
                          style={{ width: `${progress}%` }}
                        />
                      ) : (
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            idx < activeStep ? 'bg-[#8B1E1E]/25 w-full' : 'w-0'
                          }`}
                        />
                      )}
                    </div>
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
