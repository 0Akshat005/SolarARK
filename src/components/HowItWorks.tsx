/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface HowItWorksProps {
  onCtaClick?: () => void;
}

const stages = [
  {
    id: '01',
    label: 'SURVEY',
    headlineLine1: 'First, we understand',
    headlineLine2: 'your roof.',
    paragraph:
      'Before we recommend a system, we study your roof, orientation, shading and available space.',
    technicalRail: '3D LiDAR  ·  SHADE  ·  STRUCTURE  ·  ORIENTATION',
    image: '/images/process/stage-01-survey-rooftop.jpg',
    alt: 'SolarARK engineer conducting physical 3D LiDAR rooftop survey on residential terrace',
  },
  {
    id: '02',
    label: 'DESIGN',
    headlineLine1: 'Then we design around',
    headlineLine2: 'what we found.',
    paragraph:
      'Your roof, energy use and future requirements shape the system we design — not a standard package pulled from a template.',
    technicalRail: 'SITE DATA  ·  ENERGY USE  ·  CAD LAYOUT  ·  YIELD FORECAST',
    image: '/images/process/stage-02-cad-design.jpg',
    alt: 'SolarARK design engineer reviewing custom 3D CAD solar layout and string architecture',
  },
  {
    id: '03',
    label: 'INSTALL',
    headlineLine1: 'Now we build',
    headlineLine2: 'it right.',
    paragraph:
      'Our installation team turns the design into a finished system, with careful mounting, wiring and on-site execution.',
    technicalRail: 'MOUNTING  ·  WIRING  ·  TIER-1 MODULES  ·  ON-SITE EXECUTION',
    image: '/images/process/stage-03-install-wide.jpg',
    alt: 'SolarARK technicians installing solar panels with safety gear on residential rooftop',
  },
  {
    id: '04',
    label: 'COMMISSION',
    headlineLine1: 'Your system is ready.',
    headlineLine2: 'Now let it work.',
    paragraph:
      'Once installation is complete, we connect the system, verify operation and make sure everything is ready for everyday use.',
    technicalRail: 'GRID CONNECTED  ·  SYSTEM LIVE  ·  NET-METERING  ·  TELEMETRY ACTIVE',
    image: '/images/process/stage-04-commission-inverter.png',
    alt: 'SolarARK technician commissioning smart hybrid solar inverter inside residence',
  },
] as const;

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  const STEP_DURATION_MS = 6500;
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

  const currentStage = stages[activeStep];

  return (
    <section
      id="how-it-works"
      aria-label="SolarARK 4-Step Cinematic End-to-End Journey"
      className="relative bg-[#080D1A] min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] border-b border-stone-800/60 overflow-hidden text-white flex flex-col justify-between select-none"
    >
      {/* ── 1. REAL PHOTOGRAPHY WITH SOFT CINEMATIC GRADIENT ── */}
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
              className="w-full h-full object-cover object-right sm:object-center opacity-95"
            />
          </div>
        ))}

        {/* Soft, Transparent Scrim: ~55-60% Left -> ~25% Center -> ~8-10% Right */}
        <div
          className="hidden md:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 13, 26, 0.65) 0%, rgba(8, 13, 26, 0.50) 36%, rgba(8, 13, 26, 0.22) 58%, rgba(8, 13, 26, 0.06) 78%, transparent 100%)',
          }}
        />
        <div
          className="md:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 13, 26, 0.75) 0%, rgba(8, 13, 26, 0.50) 45%, rgba(8, 13, 26, 0.85) 100%)',
          }}
        />

        {/* Minimal top and bottom subtle fades */}
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#080D1A]/50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080D1A]/70 to-transparent pointer-events-none z-10" />
      </div>

      {/* ── 2. FOREGROUND EDITORIAL CONTENT (LEFT ~40%) ── */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-14 sm:pt-18 lg:pt-22">
        <div className="max-w-xl space-y-4">
          
          {/* Minimal Eyebrow */}
          <div className="text-[#E7D8B9] text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase font-heading">
            STEP {currentStage.id} OF 04 · {currentStage.label}
          </div>

          {/* 2-Line Headline */}
          <h2
            className="font-heading text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.02] m-0"
            style={{ textShadow: '0 2px 24px rgba(0, 0, 0, 0.9)' }}
          >
            {currentStage.headlineLine1} <br />
            {currentStage.headlineLine2}
          </h2>

          {/* Concise Supporting Explanation */}
          <p
            className="text-slate-100 text-sm sm:text-base lg:text-[17.5px] leading-relaxed max-w-lg font-normal pt-1 m-0"
            style={{ textShadow: '0 1px 12px rgba(0, 0, 0, 0.9)' }}
          >
            {currentStage.paragraph}
          </p>

        </div>
      </div>

      {/* ── 3. BOTTOM TECHNICAL RAIL & EDITORIAL PROGRESS SPAN ── */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative z-20 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full pb-10 sm:pb-12 space-y-6 pt-12"
      >
        
        {/* Unobtrusive Technical Annotation Rail */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-slate-300/80 font-heading">
          {currentStage.technicalRail}
        </div>

        {/* 4-Stage Transparent Editorial Progress Line */}
        <div className="space-y-3">
          
          {/* Stage Labels Row */}
          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={stage.id}
                  onClick={() => handleStepClick(idx)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Step ${stage.id}: ${stage.label}`}
                  className="group flex flex-col items-start text-left cursor-pointer focus:outline-none transition-all py-1"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span
                      className={`text-[10px] sm:text-xs font-bold font-heading uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-[#C0392B]'
                          : isPassed
                          ? 'text-slate-300'
                          : 'text-slate-400/80 group-hover:text-slate-200'
                      }`}
                    >
                      {stage.id}
                    </span>
                    <span
                      className={`font-heading font-bold text-xs sm:text-sm tracking-wide uppercase transition-colors ${
                        isActive
                          ? 'text-white'
                          : isPassed
                          ? 'text-slate-200'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Continuous 1px Progress Rail Spine */}
          <div className="grid grid-cols-4 gap-2 sm:gap-6 items-center">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <div key={stage.id} className="relative h-1 flex items-center">
                  {/* Base Track */}
                  <div className="w-full h-[1.5px] bg-white/20 rounded-full overflow-hidden">
                    {/* Active Gradient Fill */}
                    {isActive ? (
                      <div
                        className="h-full bg-gradient-to-r from-[#D96B3C] to-[#C0392B] rounded-full shadow-[0_0_8px_#C0392B] transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    ) : isPassed ? (
                      <div className="h-full bg-white/60 w-full" />
                    ) : null}
                  </div>

                  {/* Active Terminal Node */}
                  {isActive && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C0392B] border border-white shadow-[0_0_10px_#C0392B]"
                      style={{ left: `calc(${progress}% - 4px)` }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
