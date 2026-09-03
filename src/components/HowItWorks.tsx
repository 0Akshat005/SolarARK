/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onCtaClick?: () => void;
  onNavigate?: (path: string) => void;
}

interface StageConfig {
  id: string;
  label: string;
  headlineLines: string[];
  headlineAccent: string;
  paragraph: string;
  technicalItems: string[];
  image: string;
  imagePosition: string;
  alt: string;
}

const stages: StageConfig[] = [
  {
    id: '01',
    label: 'SURVEY',
    headlineLines: ['First, we understand'],
    headlineAccent: 'your roof.',
    paragraph:
      'Before we recommend a system, we study your roof, orientation, shading and available space.',
    technicalItems: ['3D LIDAR', 'SHADE ANALYSIS', 'STRUCTURAL AUDIT', 'ORIENTATION'],
    image: '/images/process/stage-01-survey-rooftop.jpg',
    imagePosition: 'object-[52%_center] sm:object-center',
    alt: 'SolarARK engineer conducting physical 3D LiDAR rooftop survey on residential terrace',
  },
  {
    id: '02',
    label: 'DESIGN',
    headlineLines: ['Then we design around'],
    headlineAccent: 'what we found.',
    paragraph:
      'Your roof, energy use and future requirements shape the system we design — not a standard package pulled from a template.',
    technicalItems: ['SITE DATA', 'ENERGY USE', 'CAD LAYOUT', 'YIELD FORECAST'],
    image: '/images/process/stage-02-cad-design.jpg',
    imagePosition: 'object-[65%_center] sm:object-center',
    alt: 'SolarARK design engineer reviewing custom 3D CAD solar layout and string architecture',
  },
  {
    id: '03',
    label: 'INSTALL',
    headlineLines: ['Now we build'],
    headlineAccent: 'it right.',
    paragraph:
      'Our installation team turns the design into a finished system, with careful mounting, wiring and on-site execution.',
    technicalItems: ['MOUNTING', 'WIRING', 'TIER-1 MODULES', 'ON-SITE EXECUTION'],
    image: '/images/process/stage-03-install-wide.jpg',
    imagePosition: 'object-[75%_center] sm:object-center',
    alt: 'SolarARK technicians installing solar panels with safety gear on residential rooftop',
  },
  {
    id: '04',
    label: 'COMMISSION',
    headlineLines: ['Your system is', 'ready.', 'Now let it'],
    headlineAccent: 'work.',
    paragraph:
      "Once installation is complete, we connect the system, verify performance and ensure it's ready for everyday use — reliably.",
    technicalItems: ['GRID CONNECTED', 'SYSTEM LIVE', 'NET-METERING'],
    image: '/images/process/stage-04-commission-inverter.png',
    imagePosition: 'object-[65%_center] sm:object-center',
    alt: 'SolarARK technician commissioning smart hybrid solar inverter inside residence',
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick, onNavigate }) => {
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

  const handleProjectsRedirect = () => {
    if (onNavigate) {
      onNavigate('/projects');
    } else if (onCtaClick) {
      onCtaClick();
    }
  };

  const currentStage = stages[activeStep];

  return (
    <section
      id="how-it-works"
      aria-label="SolarARK 4-Step Cinematic End-to-End Journey"
      className="relative bg-[#080D1A] min-h-[680px] sm:min-h-[740px] lg:min-h-[800px] border-b border-stone-800/60 overflow-hidden text-white flex flex-col justify-between select-none"
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
              className={`w-full h-full object-cover ${stage.imagePosition} opacity-95`}
            />
          </div>
        ))}

        {/* Soft Scrim: Desktop (90deg) vs Mobile (180deg vertical) */}
        <div
          className="hidden md:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 13, 26, 0.95) 0%, rgba(8, 13, 26, 0.85) 32%, rgba(8, 13, 26, 0.50) 52%, rgba(8, 13, 26, 0.15) 70%, transparent 100%)',
          }}
        />
        <div
          className="md:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 13, 26, 0.92) 0%, rgba(8, 13, 26, 0.55) 35%, rgba(8, 13, 26, 0.30) 55%, rgba(8, 13, 26, 0.94) 100%)',
          }}
        />

        {/* Minimal top and bottom subtle edge fades */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080D1A]/60 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080D1A]/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* ── 2. FOREGROUND EDITORIAL CONTENT (PER DESIGN REFERENCE) ── */}
      <div className="relative z-20 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 w-full pt-16 sm:pt-20 lg:pt-22">
        <div className="max-w-xl space-y-4 sm:space-y-5 text-left">
          
          {/* 1. EYEBROW WITH RED RING NODE & ACCENT LINE */}
          <div>
            <div className="flex items-center gap-2.5 text-white/90 text-xs sm:text-[13px] font-semibold tracking-[0.20em] uppercase font-heading">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#D9483B] shrink-0" />
              <span>STEP {currentStage.id} OF 04 · {currentStage.label}</span>
            </div>
            {/* Red Accent Underline below Eyebrow */}
            <div className="w-12 sm:w-14 h-[1.5px] bg-[#D9483B] mt-2" />
          </div>

          {/* 2. HEADLINE (DOMINANT ELEMENT WITH WARM GOLD ACCENT PUNCHWORD) */}
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold text-white tracking-tight leading-[1.08] m-0"
            style={{ textShadow: '0 2px 24px rgba(0, 0, 0, 0.95)' }}
          >
            {currentStage.id === '04' ? (
              <>
                Your system is <br />
                ready. <br />
                Now let it <span className="text-[#E5A93C]">work.</span>
              </>
            ) : (
              <>
                {currentStage.headlineLines.map((line, lIdx) => (
                  <React.Fragment key={lIdx}>
                    {line} <br />
                  </React.Fragment>
                ))}
                <span className="text-[#E5A93C]">{currentStage.headlineAccent}</span>
              </>
            )}
          </h2>

          {/* 3. PARAGRAPH (SITS CLEARLY BELOW HEADLINE) */}
          <p
            className="text-slate-200/90 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-lg font-normal m-0"
            style={{ textShadow: '0 1px 12px rgba(0, 0, 0, 0.95)' }}
          >
            {currentStage.paragraph}
          </p>

          {/* 4. TECHNICAL LINE WITH CHECKMARK ICONS */}
          <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-slate-300 font-heading">
            {currentStage.technicalItems.map((item, tIdx) => (
              <React.Fragment key={tIdx}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C] shrink-0 stroke-[2]" />
                  <span>{item}</span>
                </div>
                {tIdx < currentStage.technicalItems.length - 1 && (
                  <span className="text-slate-500 font-bold select-none">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 5. PROJECT CTA (DISTINCT ACTION BELOW TECHNICAL LINE) */}
          <div className="pt-4 sm:pt-5">
            <button
              onClick={handleProjectsRedirect}
              className="group inline-flex items-center gap-3.5 sm:gap-4 text-left cursor-pointer focus:outline-none transition-all py-1 max-w-xl"
              aria-label="See SolarARK in the Real World - Explore completed solar installations across Maharashtra"
            >
              {/* Circular Red Outlined Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D9483B] bg-black/40 backdrop-blur-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-red-400 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(217,72,59,0.4)]">
                <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Text Content */}
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2 font-heading text-xs sm:text-[13px] font-bold tracking-wider text-white uppercase">
                  <span>SEE SOLARARK IN THE REAL WORLD</span>
                  <span className="text-[#D9483B] text-xs sm:text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-snug">
                  Explore completed solar installations across Maharashtra.
                </p>

                <div className="pt-1">
                  <div className="w-12 sm:w-14 h-[2px] bg-[#D9483B] rounded-full transition-all duration-300 group-hover:w-18 group-hover:bg-red-400" />
                </div>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* ── 3. BOTTOM JOURNEY / NAVIGATION (ANCHORED NEAR LOWER PORTION) ── */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative z-20 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 w-full pb-8 sm:pb-10 lg:pb-12 pt-10 sm:pt-14 space-y-3 sm:space-y-3.5"
      >
        
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
                className="group flex flex-col items-start text-left cursor-pointer focus:outline-none transition-all py-1 min-w-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                  <span
                    className={`text-[10px] sm:text-xs font-bold font-heading uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'text-[#D9483B]'
                        : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {stage.id}
                  </span>
                  <span
                    className={`font-heading font-bold text-[10px] sm:text-sm tracking-wide uppercase transition-colors ${
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

        {/* Continuous Progress Spine with Circular Nodes (matching reference design) */}
        <div className="relative flex items-center pt-1">
          
          {/* Background Base Track */}
          <div className="absolute inset-x-0 h-[1.5px] bg-white/20 rounded-full" />

          {/* Active Continuous Fill Line */}
          <div
            className="absolute left-0 h-[2px] bg-gradient-to-r from-[#D96B3C] to-[#D9483B] rounded-full shadow-[0_0_8px_#D9483B] transition-all duration-75 ease-linear"
            style={{
              width: `${Math.min(100, Math.max(0, ((activeStep + progress / 100) / 3.9) * 100))}%`,
            }}
          />

          {/* 4 Circular Stepper Nodes */}
          <div className="relative w-full grid grid-cols-4 items-center">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <div key={stage.id} className="flex items-center">
                  <button
                    onClick={() => handleStepClick(idx)}
                    aria-label={`Go to Step ${stage.id}`}
                    className={`cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center p-0 focus:outline-none ${
                      isActive
                        ? 'w-3.5 h-3.5 bg-[#080D1A] border-2 border-[#D9483B] shadow-[0_0_12px_#D9483B] scale-110'
                        : isPassed
                        ? 'w-2.5 h-2.5 bg-white border-2 border-[#D9483B]'
                        : 'w-2.5 h-2.5 bg-[#080D1A] border-2 border-slate-400 hover:border-white'
                    }`}
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
