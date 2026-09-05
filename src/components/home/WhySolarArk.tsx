/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * WhySolarArk — Strong Full-Width Editorial Image/Information Split
 * Strictly adheres to revamp.md & reference mockup media_1788615637835.jpg:
 * - NO card wrappers on either side.
 * - Left panel: Large photographic composition extending cleanly to the left viewport edge.
 * - Right panel: Clean editorial information field extending to the right viewport edge,
 *   with 2x2 capability matrix featuring soft outline icons.
 */

import React, { useState } from 'react';
import { 
  Play, 
  X, 
  Compass, 
  Cpu, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';

interface WhySolarArkProps {
  onNavigate?: (path: string) => void;
}

export const WhySolarArk: React.FC<WhySolarArkProps> = () => {
  const [approachModalOpen, setApproachModalOpen] = useState(false);

  const pillars = [
    {
      icon: Compass,
      title: 'Site intelligence',
      description: 'Understanding your space and energy needs.',
    },
    {
      icon: Cpu,
      title: 'System Design',
      description: 'Tailored solutions for maximum performance.',
    },
    {
      icon: Wrench,
      title: 'Professional Execution',
      description: 'Safe, efficient and reliable installation.',
    },
    {
      icon: ShieldCheck,
      title: 'Continued Support',
      description: 'A partner beyond commissioning.',
    },
  ];

  return (
    <>
      <section className="w-full bg-[#FAF9F6] border-b border-stone-200/80 overflow-hidden">
        
        {/* ── FULL-WIDTH ASYMMETRIC IMAGE + INFORMATION SPLIT (NO Cards) ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[560px]">
          
          {/* ── LEFT PANEL: EXTENDS DIRECTLY TO LEFT VIEWPORT EDGE (6 COLS) ── */}
          <div className="lg:col-span-6 relative min-h-[420px] sm:min-h-[480px] lg:min-h-full overflow-hidden flex flex-col justify-end p-8 sm:p-12 lg:p-14 xl:p-16 2xl:pl-24 bg-[#0A1220]">
            
            {/* Authentic Rooftop Photo */}
            <img
              src="/images/revamp/engineer-solar-sunset.jpg"
              alt="SolarARK certified engineer inspecting rooftop solar array at golden hour"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
              loading="eager"
            />

            {/* Editorial Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden lg:block" />

            {/* Left Foreground Content */}
            <div className="relative z-10 space-y-4 max-w-md">
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.08]">
                More than<br />
                panels on a roof.
              </h3>

              <p className="text-xs sm:text-sm text-stone-200 font-normal leading-relaxed">
                Engineered for performance.<br />
                Built for what comes next.
              </p>

              {/* Our Approach Video/Modal Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => setApproachModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-heading font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                  <span>Our Approach</span>
                </button>
              </div>
            </div>

          </div>

          {/* ── RIGHT PANEL: EXTENDS TO RIGHT VIEWPORT EDGE WITH CLEAN EDITORIAL FIELD (6 COLS) ── */}
          <div className="lg:col-span-6 bg-[#FAF9F6] p-8 sm:p-12 lg:p-14 xl:p-16 2xl:pr-24 flex flex-col justify-center space-y-8 lg:space-y-10">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                  WHY SOLAR ARK
                </span>
                <span className="w-8 h-px bg-stone-300" />
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.08]">
                A smarter<br />
                <span className="text-[#8B1E1E]">way to energy.</span>
              </h2>
            </div>

            {/* 2x2 Structured Capabilities with Soft Outline Icons (Faithful to Reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-7 sm:gap-y-8">
              {pillars.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 group"
                  >
                    {/* Circular/Rounded Outline Icon Container */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-red-200/80 bg-red-50/50 flex items-center justify-center shrink-0 transition-colors group-hover:border-[#8B1E1E]/40 group-hover:bg-red-100/60">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B1E1E]" strokeWidth={1.75} />
                    </div>

                    {/* Text beside Icon */}
                    <div className="space-y-1">
                      <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 font-normal leading-relaxed max-w-[220px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Video Modal */}
      {approachModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setApproachModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900">
              <span className="font-heading font-bold text-white text-base">
                SolarARK Engineering Standards & Philosophy
              </span>
              <button
                onClick={() => setApproachModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src="/videos/drone-solar-shot.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
