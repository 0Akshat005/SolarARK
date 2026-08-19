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

      {/* ── 2. SEAMLESS PHOTOREALISTIC STAGE BACKDROP (ORGANIC BORDERLESS BLEED) ── */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[72%] xl:w-[68%] pointer-events-none z-0 overflow-hidden">
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
              activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={stage.image}
              alt={stage.alt}
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, transparent 26%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.7) 54%, black 72%), linear-gradient(to bottom, black 75%, rgba(0,0,0,0.6) 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 26%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.7) 54%, black 72%), linear-gradient(to bottom, black 75%, rgba(0,0,0,0.6) 88%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in'
              }}
            />

            {/* Subtle Restrained Photographic Vignette Layer */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(ellipse at 78% 48%, transparent 48%, rgba(15, 23, 42, 0.16) 100%)',
              }}
            />

            {/* Stage Hotspot Tooltip Badges (Floating on image) */}
            <div className="absolute inset-0 pointer-events-none hidden xl:block z-20">
              {stage.hotspots.map((spot, sIdx) => (
                <div
                  key={sIdx}
                  className={`absolute ${spot.pos} animate-in fade-in zoom-in-95 duration-500`}
                >
                  <div className="bg-white/95 backdrop-blur-md border border-stone-200/90 rounded-2xl px-3.5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] inline-flex items-center gap-2.5">
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

        {/* Soft Organic Atmospheric Dissolves & Clean Reading Zone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 28% via-[#FAF9F6]/40 48% to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent 40% to-transparent pointer-events-none z-20" />
      </div>

      {/* ── 3. MAIN CONTENT LAYER ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 lg:space-y-16">
        
        {/* ── TOP EDITORIAL ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
          
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 pt-2">
            
            {/* Eyebrow Pill */}
            <div className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/15 text-[11px] text-[#8B1E1E]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>FRICTIONLESS END-TO-END</span>
            </div>

            {/* Complete, Expansive Display Headline */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.10] text-[#0F172A] font-heading m-0">
                We handle the hard part.{' '}
                <span className="text-[#8B1E1E]">You just save.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl text-left">
                From precision roof assessment to certified installation and DISCOM net-metering approvals, SolarARK manages the entire journey end to end.
              </p>
            </div>

            {/* Floating Glassmorphic Trust Badge */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200/90 p-3.5 sm:p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] inline-flex items-center gap-3.5">
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
        <div className="bg-white/95 backdrop-blur-xl rounded-[26px] sm:rounded-3xl border border-stone-200/80 p-5 sm:p-7 shadow-[0_16px_48px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
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
                        /* Elevated Glowing Active Orb */
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8B1E1E] to-[#6A1414] text-white flex flex-col items-center justify-center shadow-lg shadow-[#8B1E1E]/30 ring-4 ring-[#8B1E1E]/15 shrink-0 transform scale-105 transition-all">
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
