/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Compass,
  Grid,
  Wrench,
  BarChart3,
  Trees,
  Layers,
  Maximize2,
  Cpu,
  BarChart2,
  Wind,
  Zap,
  Users,
  Activity,
  Wifi,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface HowItWorksProps {
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
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
      headline: '3D LIDAR LASER SHADE & STRUCTURAL SCAN',
      description:
        'Our certified engineers conduct a 3D LiDAR laser scan of your rooftop to evaluate tilt angle, structural strength, and shadow profiles from nearby trees or parapet walls.',
      icon: Compass,
      image: '/images/process/stage-01-survey-rooftop.jpg',
      alt: 'Certified SolarARK engineer conducting physical 3D LiDAR rooftop survey during golden hour',
      specs: [
        {
          icon: Compass,
          title: '3D LiDAR Scan',
          subtitle: '±1mm precision',
        },
        {
          icon: Trees,
          title: 'Shade Analysis',
          subtitle: 'Tree & obstruction',
        },
        {
          icon: Layers,
          title: 'Structural Check',
          subtitle: 'Strength validated',
        },
        {
          icon: Maximize2,
          title: 'Tilt & Orientation',
          subtitle: 'Max efficiency',
        },
      ],
    },
    {
      id: '02',
      label: 'DESIGN',
      tagline: 'A system designed around your home.',
      headline: 'CUSTOM 3D CAD BLUEPRINT & SHADOW SIMULATION',
      description:
        'We generate an exact 3D CAD layout simulation showing module placement, wind-load calculations, and guaranteed generation estimates before you invest.',
      icon: Grid,
      image: '/images/process/stage-02-cad-design.jpg',
      alt: 'Custom 3D CAD solar layout and string architecture on engineer workstation',
      specs: [
        {
          icon: Cpu,
          title: '3D CAD Blueprint',
          subtitle: 'String architecture',
        },
        {
          icon: BarChart2,
          title: 'Yield Simulation',
          subtitle: 'Seasonal kWh forecast',
        },
        {
          icon: Wind,
          title: 'WindPro Sizing',
          subtitle: '170 km/h rating',
        },
        {
          icon: Maximize2,
          title: 'Terrace Usability',
          subtitle: 'Zero slab penetration',
        },
      ],
    },
    {
      id: '03',
      label: 'INSTALL',
      tagline: 'Our team handles the work.',
      headline: 'TURNKEY EXECUTION BY CERTIFIED MASTER INSTALLERS',
      description:
        'Our in-house master installers mount the WindPro galvanized structure, run concealed conduits, and coordinate DISCOM net-metering and PM Surya Ghar subsidy filings end to end.',
      icon: Wrench,
      image: '/images/process/stage-03-install-wide.jpg',
      alt: 'Certified SolarArk technicians installing solar panels on residential rooftop at sunset',
      specs: [
        {
          icon: Wrench,
          title: 'WindPro Structure',
          subtitle: 'Galvanized steel',
        },
        {
          icon: Zap,
          title: 'Concealed Conduits',
          subtitle: 'UV-resistant piping',
        },
        {
          icon: Grid,
          title: 'Tier-1 Modules',
          subtitle: '22.8% cell efficiency',
        },
        {
          icon: Users,
          title: 'Master Installers',
          subtitle: 'In-house certified crew',
        },
      ],
    },
    {
      id: '04',
      label: 'COMMISSION',
      tagline: 'You start generating. You start saving.',
      headline: 'GRID SYNCHRONIZATION & REAL-TIME TELEMETRY',
      description:
        'DISCOM net-meter is synchronized. Switch on clean solar power, watch your electric meter spin backward, and track daily generation directly on the SolarArk companion app.',
      icon: BarChart3,
      image: '/images/process/stage-04-commission-inverter.png',
      alt: 'SolarArk engineer commissioning smart hybrid solar inverter and digital net meter',
      specs: [
        {
          icon: Activity,
          title: 'Grid Sync Active',
          subtitle: 'DISCOM net-metering',
        },
        {
          icon: Wifi,
          title: 'IoT Telemetry',
          subtitle: 'SolarArk mobile app',
        },
        {
          icon: CheckCircle2,
          title: 'PM Surya Ghar',
          subtitle: '₹78,000 subsidy credited',
        },
        {
          icon: Sparkles,
          title: 'System Live',
          subtitle: '100% operational',
        },
      ],
    },
  ];

  const currentStage = stages[activeStep];
  const CurrentIcon = currentStage.icon;

  return (
    <section
      id="how-it-works"
      aria-label="Frictionless End-to-End Installation Process"
      className="relative bg-[#080D1A] pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 border-b border-stone-800/60 overflow-hidden text-white selection:bg-[#8B1E1E] selection:text-white"
    >
      {/* ── 1. CINEMATIC BACKGROUND PHOTOGRAPHY WITH SEAMLESS EDITORIAL GRADIENT ── */}
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
              className="w-full h-full object-cover object-center opacity-90"
            />

            {/* Subtle natural vignetting */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A] via-[#080D1A]/70 to-transparent pointer-events-none" />
          </div>
        ))}

        {/* ── Seamless Left-Side Editorial Scrim for 100% Typography Clarity ── */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(8, 13, 26, 0.95) 0%, rgba(8, 13, 26, 0.86) 34%, rgba(8, 13, 26, 0.45) 54%, rgba(8, 13, 26, 0.08) 70%, transparent 84%)',
          }}
        />
        <div
          className="lg:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 13, 26, 0.95) 0%, rgba(8, 13, 26, 0.82) 50%, rgba(8, 13, 26, 0.95) 100%)',
          }}
        />

        {/* Top and Bottom soft bleeds */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080D1A] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080D1A] to-transparent pointer-events-none z-10" />
      </div>

      {/* ── 2. FOREGROUND CONTENT & NAVIGATION SYSTEM ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-6 lg:px-12 flex flex-col justify-between min-h-[600px] lg:min-h-[660px]">
        
        {/* ── TOP EDITORIAL ROW ── */}
        <div className="max-w-2xl space-y-4 pt-1">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white shadow-xs text-xs">
            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#C0392B] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#C0392B]" />
            </span>
            <span className="font-heading tracking-wider uppercase text-[11.5px] text-slate-200">
              FRICTIONLESS END-TO-END · STEP {currentStage.id} OF 04
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1">
            <h2 
              className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.08] m-0"
              style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)' }}
            >
              We handle the <br className="hidden sm:inline" />
              hard part.
            </h2>
            <h3 
              className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.08] m-0 text-white"
              style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)' }}
            >
              You just <span className="text-[#E7D8B9]">save.</span>
            </h3>
          </div>

          {/* Red Accent Divider Bar */}
          <div className="w-12 h-0.5 bg-[#982522] rounded-full my-2.5" />

          {/* Stage Headline & Description (Clean, unboxed editorial format per reference) */}
          <div className="space-y-2 pt-1 max-w-xl">
            <div className="flex items-center gap-2.5 text-[#E7D8B9] text-xs sm:text-[13px] font-bold font-heading tracking-wider uppercase">
              <CurrentIcon className="w-4 h-4 text-[#E7D8B9] shrink-0" />
              <span>STAGE {currentStage.id}: {currentStage.headline}</span>
            </div>
            <p 
              className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed m-0"
              style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)' }}
            >
              {currentStage.description}
            </p>
          </div>

          {/* Minimalist Certified Installation Team Badge */}
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/15 px-4 py-2 text-white mt-1 shadow-md">
            <div className="w-7 h-7 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-200" />
            </div>
            <div className="text-left">
              <span className="font-heading font-bold text-xs text-white block leading-tight">
                Certified Installation Team
              </span>
              <span className="text-[11px] text-slate-300 font-normal block leading-tight mt-0.5">
                Safety. Quality. On-time.
              </span>
            </div>
          </div>

        </div>

        {/* ── 3. TECHNICAL MICRO-SPECS STRIP (MIDDLE ROW) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 my-8 max-w-3xl">
          {currentStage.specs.map((spec, sIdx) => {
            const SpecIcon = spec.icon;
            return (
              <div
                key={sIdx}
                className="flex items-center gap-2.5 bg-black/35 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-2.5 transition-all duration-300 hover:border-white/25"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-slate-300">
                  <SpecIcon className="w-4 h-4 text-[#E7D8B9]" />
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-xs text-white truncate leading-tight">
                    {spec.title}
                  </div>
                  <div className="text-[10.5px] text-slate-400 truncate leading-tight mt-0.5">
                    {spec.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4. BOTTOM CINEMATIC JOURNEY STEPPER (INTEGRATED EDITORIAL DOCK) ── */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="pt-6 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-0 items-start relative">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStep === idx;

              return (
                <div 
                  key={stage.id} 
                  className={`relative flex flex-col justify-between p-2 sm:p-2.5 lg:px-4 ${
                    idx < 3 ? 'lg:border-r lg:border-white/10' : ''
                  }`}
                >
                  <button
                    onClick={() => handleStepClick(idx)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Step ${stage.id}: ${stage.label}`}
                    className="group w-full flex items-start gap-3 text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E7D8B9] transition-all"
                  >
                    {/* Circular Step Icon */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#8B1E1E]/40 border-2 border-[#C0392B] text-white shadow-[0_0_18px_rgba(192,57,43,0.6)] scale-105'
                          : 'bg-black/40 border border-white/15 text-slate-300 group-hover:border-white/30 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Stage Number, Label, Tagline */}
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] sm:text-[11px] font-bold font-heading uppercase tracking-wider text-[#C0392B]">
                          {stage.id}
                        </span>
                        <span className="font-heading font-bold text-xs sm:text-[13px] tracking-wide text-white block uppercase">
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

                  {/* Active Step Progress Indicator Underline with Glowing Terminal Dot */}
                  <div className="mt-3 relative h-1 w-full bg-white/10 rounded-full overflow-visible">
                    {isActive && (
                      <div
                        className="h-full bg-gradient-to-r from-[#D96B3C] to-[#C0392B] rounded-full shadow-[0_0_10px_#C0392B] transition-all duration-75 ease-linear relative flex items-center justify-end"
                        style={{ width: `${progress}%` }}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B] border-2 border-white shadow-[0_0_8px_#C0392B] translate-x-1/2" />
                      </div>
                    )}
                    {!isActive && idx < activeStep && (
                      <div className="h-full bg-[#D96B3C]/50 w-full rounded-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
