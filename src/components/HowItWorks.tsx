/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Clock,
  Compass,
  Grid,
  Wrench,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to Step 04 (or 0)
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  const STEP_DURATION_MS = 6000;
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
      description:
        'Before recommending a system, our engineers conduct a 3D LiDAR laser scan of your rooftop to evaluate tilt angle, structural load capacity, and shadow profiles from trees or parapet walls.',
      proofLine: '±1mm LiDAR topography precision • 100% DISCOM feeder capacity verified',
      icon: Compass,
      image: '/images/process/stage-01-survey-rooftop.jpg',
      alt: 'SolarArk engineer conducting physical 3D LiDAR rooftop survey',
    },
    {
      id: '02',
      label: 'DESIGN',
      tagline: 'A system designed around your home.',
      description:
        'Your energy consumption and roof shape dictate the engineering. We generate a custom 3D CAD layout simulating seasonal azimuth angles, wind-load resistance, and guaranteed generation estimates.',
      proofLine: 'Custom string architecture • Elevated pergola structure clearance • Guaranteed kWh yield',
      icon: Grid,
      image: '/images/process/stage-02-cad-design.jpg',
      alt: 'SolarArk engineer workstation with custom 3D CAD solar layout blueprint',
    },
    {
      id: '03',
      label: 'INSTALL',
      tagline: 'Our team handles the work.',
      description:
        'Our in-house master installers mount the WindPro galvanized structure, run concealed conduits, and coordinate DISCOM net-metering and PM Surya Ghar subsidy filings end to end.',
      proofLine: 'WindPro 170 km/h structure • Tier-1 monocrystalline cells • Zero slab penetration',
      icon: Wrench,
      image: '/images/process/stage-03-install-wide.jpg',
      alt: 'Certified SolarArk technicians installing solar panels on residential rooftop',
    },
    {
      id: '04',
      label: 'COMMISSION',
      tagline: 'You start generating. You start saving.',
      description:
        'DISCOM net-meter is synchronized and certified. Switch on clean solar power, watch your electric meter spin backward, and track daily generation directly on the SolarArk companion app.',
      proofLine: 'Smart hybrid solar inverter • Bi-directional net meter • Real-time telemetry',
      icon: BarChart3,
      image: '/images/process/stage-04-commission-inverter.png',
      alt: 'SolarArk engineer commissioning smart hybrid solar inverter and digital net meter',
    },
  ];

  const currentStage = stages[activeStep];

  // Calculate percentage along the 4-node line for the progress track
  const baseStepPercent = (activeStep / 3) * 100;
  const stepIntervalPercent = (1 / 3) * 100;
  const currentLineProgress = Math.min(
    100,
    baseStepPercent + (progress / 100) * stepIntervalPercent
  );

  return (
    <section
      id="how-it-works"
      aria-label="Frictionless End-to-End Installation Process"
      className="relative bg-[#080D1A] pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 border-b border-stone-800/60 overflow-hidden text-white selection:bg-[#8B1E1E] selection:text-white"
    >
      {/* ── 1. CINEMATIC BACKGROUND PHOTOGRAPHY (PRIMARY VISUAL ELEMENT) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              activeStep === idx
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-[1.02] z-0'
            }`}
          >
            <img
              src={stage.image}
              alt={stage.alt}
              className="w-full h-full object-cover object-center opacity-95"
            />

            {/* Subtle soft edge blends */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A]/80 via-[#080D1A]/40 to-transparent pointer-events-none" />
          </div>
        ))}

        {/* ── 20-25% LIGHTER DIRECTIONAL GRADIENT SCRIM (Text readable, subject & sunlight fully preserved) ── */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 13, 26, 0.85) 0%, rgba(8, 13, 26, 0.68) 28%, rgba(8, 13, 26, 0.25) 50%, rgba(8, 13, 26, 0.04) 68%, transparent 82%)',
          }}
        />
        <div
          className="lg:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 13, 26, 0.88) 0%, rgba(8, 13, 26, 0.60) 45%, rgba(8, 13, 26, 0.90) 100%)',
          }}
        />

        {/* Subtle top & bottom bleeds */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#080D1A]/60 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080D1A]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* ── 2. FOREGROUND CONTENT & EDITORIAL HIERARCHY ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-12 flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
        
        {/* ── TOP EDITORIAL CONTENT BLOCK (UNBOXED & CLEAN) ── */}
        <div className="max-w-xl space-y-4 pt-1">
          
          {/* 1. Eyebrow */}
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] uppercase font-heading text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#C0392B] shadow-[0_0_8px_#C0392B]" />
            <span>FRICTIONLESS END-TO-END · STEP {currentStage.id} OF 04</span>
          </div>

          {/* 2. Main Headline */}
          <div className="space-y-1">
            <h2 
              className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.08] m-0"
              style={{ textShadow: '0 2px 24px rgba(0, 0, 0, 0.8)' }}
            >
              We handle the hard part.
            </h2>
            <h3 
              className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.08] m-0 text-white"
              style={{ textShadow: '0 2px 24px rgba(0, 0, 0, 0.8)' }}
            >
              You just <span className="text-[#E7D8B9]">save.</span>
            </h3>
          </div>

          {/* 3. One Concise Explanatory Paragraph (Clean, unboxed) */}
          <p 
            className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed m-0 max-w-lg"
            style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.8)' }}
          >
            {currentStage.description}
          </p>

          {/* 4. One Compact Technical / Proof Line */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#E7D8B9] pt-1">
            <ShieldCheck className="w-4 h-4 text-[#E7D8B9] shrink-0" />
            <span className="tracking-wide">{currentStage.proofLine}</span>
          </div>

        </div>

        {/* ── GENEROUS BREATHING ZONE: PHOTOGRAPH & SUBJECT BREATHE FREELY ── */}
        <div className="flex-1 min-h-[40px] lg:min-h-[80px]" />

        {/* ── 5. TRANSPARENT EDITORIAL JOURNEY NAVIGATION (NO CARDS / NO BOXES) ── */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="pt-6 border-t border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-8">
            
            {/* Left Column: 4 Connected Stages + Editorial Progress Spine */}
            <div className="flex-1 space-y-3.5">
              
              {/* 4 Transparent Steps Navigation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 items-start relative">
                {stages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isActive = activeStep === idx;

                  return (
                    <div key={stage.id} className="flex items-center">
                      <button
                        onClick={() => handleStepClick(idx)}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Step ${stage.id}: ${stage.label}`}
                        className="group flex-1 flex items-center gap-2.5 sm:gap-3 text-left p-1 rounded-xl cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E7D8B9] transition-all bg-transparent"
                      >
                        {/* Circular Step Node */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'bg-[#8B1E1E]/50 border-2 border-[#C0392B] text-white shadow-[0_0_16px_rgba(192,57,43,0.7)] scale-105'
                              : 'bg-black/30 border border-white/15 text-slate-400 group-hover:border-white/30 group-hover:text-white'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Stage Number, Label, Tagline */}
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[10px] sm:text-[11px] font-bold font-heading uppercase tracking-wider ${
                              isActive ? 'text-[#E7D8B9]' : 'text-slate-400'
                            }`}>
                              {stage.id}
                            </span>
                            <span className={`font-heading font-bold text-xs sm:text-[13px] tracking-wide block uppercase transition-colors ${
                              isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                            }`}>
                              {stage.label}
                            </span>
                          </div>

                          <p className={`text-[10px] sm:text-[11px] leading-snug font-normal m-0 ${
                            isActive ? 'text-slate-200 font-medium' : 'text-slate-400'
                          }`}>
                            {stage.tagline}
                          </p>
                        </div>
                      </button>

                      {/* Small Directional Chevron between stages on desktop */}
                      {idx < 3 && (
                        <ChevronRight className="w-3.5 h-3.5 text-white/20 shrink-0 hidden lg:block mx-1" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Continuous Connected Progress Track Spine */}
              <div className="relative pt-2 pb-1">
                {/* Background Track Line */}
                <div className="w-full h-0.5 bg-white/15 relative rounded-full">
                  {/* Glowing Active Track Fill */}
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#D96B3C] via-[#C0392B] to-[#E7D8B9] shadow-[0_0_8px_rgba(217,107,60,0.5)] transition-all duration-100 ease-linear rounded-full"
                    style={{ width: `${currentLineProgress}%` }}
                  />
                </div>

                {/* 4 Track Ring Nodes */}
                <div className="absolute inset-x-0 top-1 flex justify-between pointer-events-none px-1">
                  {[0, 1, 2, 3].map((sIdx) => {
                    const isPassed = activeStep >= sIdx;
                    const isCurrent = activeStep === sIdx;

                    return (
                      <div
                        key={sIdx}
                        className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 -translate-y-1/2 flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[#C0392B] border-[#E7D8B9] shadow-[0_0_10px_#C0392B] scale-125'
                            : isPassed
                            ? 'bg-[#D96B3C] border-white/40'
                            : 'bg-[#080D1A] border-white/20'
                        }`}
                      >
                        {isCurrent && (
                          <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: CTA Action */}
            <div className="shrink-0 lg:pl-6 space-y-2 text-left lg:text-right">
              <span className="text-xs text-slate-300 font-medium font-heading block">
                Ready to start saving?
              </span>

              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8B1E1E] to-[#A82424] hover:from-[#982522] hover:to-[#C0392B] text-white font-heading font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-black/40 border border-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center lg:justify-end gap-1.5 text-[11px] text-slate-400 font-normal">
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
