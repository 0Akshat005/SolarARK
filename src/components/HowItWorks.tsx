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
  const CurrentIcon = currentStage.icon;

  return (
    <section
      id="how-it-works"
      className="relative bg-[#0A0F1D] py-14 sm:py-18 lg:py-20 border-b border-stone-800/60 overflow-hidden text-white selection:bg-[#8B1E1E] selection:text-white"
    >
      {/* ── 1. AMBIENT RADIAL WARMTH & GOLDEN SUNSET ILLUMINATION ── */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/10 via-[#8B1E1E]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

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
              className="w-full h-full object-cover object-center opacity-85"
            />

            {/* Subtle Right & Top Edge Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-transparent to-transparent pointer-events-none" />

            {/* Stage Hotspot Tooltip Badges (Floating on image) */}
            <div className="absolute inset-0 pointer-events-none hidden xl:block">
              {stage.hotspots.map((spot, sIdx) => (
                <div
                  key={sIdx}
                  className={`absolute ${spot.pos} animate-in fade-in zoom-in-95 duration-700`}
                >
                  <div className="bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-2xl px-3.5 py-2 shadow-lg shadow-black/30 inline-flex items-center gap-2.5">
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

        {/* ── Immersive Subtle Dark Scrim on Left Side (High contrast text clarity) ── */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(10, 15, 29, 0.92) 0%, rgba(10, 15, 29, 0.78) 36%, rgba(10, 15, 29, 0.42) 54%, rgba(10, 15, 29, 0.12) 68%, transparent 84%)',
          }}
        />
        <div
          className="lg:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 15, 29, 0.92) 0%, rgba(10, 15, 29, 0.75) 50%, rgba(10, 15, 29, 0.92) 100%)',
          }}
        />

        {/* Subtle Top & Bottom Blends */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0A0F1D]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0F1D]/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* ── 3. MAIN CONTENT LAYER ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8 lg:space-y-10">
        
        {/* ── TOP EDITORIAL ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 xl:col-span-6 space-y-4 pt-1">
            
            {/* Eyebrow Pill — High Contrast Glassmorphic Badge */}
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-sm text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>FRICTIONLESS END-TO-END · STEP {currentStage.id} OF 04</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-1">
              <h2 
                className="hero-display text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.10] m-0"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.8)' }}
              >
                We handle the hard part.
              </h2>
              <h3 
                className="hero-display text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.10] m-0 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #F8F8F5 0%, #E7D8B9 50%, #FFFDF7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: '#F5EDE0',
                }}
              >
                You just save.
              </h3>
            </div>

            {/* Dynamic Active Stage Feature Spotlight Card */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-white/20 p-4 sm:p-5 shadow-xl space-y-2">
              <div className="flex items-center gap-2.5 text-[#E7D8B9] text-xs font-bold font-heading tracking-wider uppercase">
                <CurrentIcon className="w-4 h-4 text-[#E7D8B9]" />
                <span>Stage {currentStage.id}: {currentStage.headline}</span>
              </div>
              <p 
                className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed m-0"
                style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)' }}
              >
                {currentStage.description}
              </p>
            </div>

            {/* Floating Glassmorphic Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-black/45 backdrop-blur-md rounded-xl border border-white/15 px-3.5 py-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-100/20 border border-amber-200/30 text-[#E7D8B9] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="text-left">
                <span className="font-heading font-bold text-xs text-white block">
                  Certified Installation Team
                </span>
                <span className="text-[11px] text-slate-300 font-medium block">
                  Safety. Quality. On-time.
                </span>
              </div>
            </div>

          </div>

          {/* Right Spacer for Clean Atmospheric Breathing Room */}
          <div className="lg:col-span-5 xl:col-span-6 hidden lg:block" />

        </div>

        {/* ── 4. INTEGRATED LUXURIOUS DARK-FROSTED JOURNEY DOCK ── */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-black/65 backdrop-blur-2xl rounded-3xl border border-white/20 p-4 sm:p-5 lg:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group/container"
        >
          {/* Subtle Top Accent Horizon Line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E7D8B9]/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            
            {/* 4 Connected Interactive Stage Cards */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 relative">
              
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStep === idx;
                const isCompleted = idx < activeStep;

                return (
                  <button
                    key={stage.id}
                    onClick={() => handleStepClick(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Step ${stage.id}: ${stage.label} - ${stage.tagline}`}
                    className={`text-left p-3 sm:p-3.5 rounded-2xl transition-all duration-300 relative flex flex-col justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7D8B9] overflow-hidden ${
                      isActive
                        ? 'bg-white/[0.14] border border-white/35 shadow-lg ring-1 ring-[#E7D8B9]/40'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10'
                    }`}
                  >
                    {/* Top Circle & Step ID */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? 'bg-gradient-to-br from-[#8B1E1E] to-[#C53030] text-white shadow-md shadow-[#8B1E1E]/50'
                          : 'bg-white/10 text-slate-300 group-hover:bg-white/15 group-hover:text-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <span className={`text-[9.5px] font-bold font-heading block uppercase tracking-widest ${
                          isActive ? 'text-[#E7D8B9]' : 'text-slate-400'
                        }`}>
                          Step {stage.id}
                        </span>
                        <span className="font-heading font-bold text-xs sm:text-sm tracking-tight text-white block">
                          {stage.label}
                        </span>
                      </div>
                    </div>

                    {/* Concise Tagline */}
                    <p className={`text-[11px] leading-snug font-normal mb-2.5 ${
                      isActive ? 'text-slate-100 font-medium' : 'text-slate-300'
                    }`}>
                      {stage.tagline}
                    </p>

                    {/* ── Progress Bar Track ── */}
                    <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-auto">
                      {isActive ? (
                        <div
                          className="h-full bg-gradient-to-r from-[#E7D8B9] to-[#C53030] rounded-full transition-all duration-75 ease-linear shadow-xs"
                          style={{ width: `${progress}%` }}
                        />
                      ) : (
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isCompleted ? 'bg-[#E7D8B9]/50 w-full' : 'w-0'
                          }`}
                        />
                      )}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Right Action CTA */}
            <div className="lg:w-64 xl:w-72 flex flex-col items-stretch justify-center pt-3 lg:pt-0 lg:pl-5 border-t lg:border-t-0 lg:border-l border-white/15 gap-2 shrink-0">
              <button
                onClick={onCtaClick}
                className="w-full btn-primary-maroon font-heading font-bold text-sm sm:text-base py-3 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Takes 60 seconds • 100% Free</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

