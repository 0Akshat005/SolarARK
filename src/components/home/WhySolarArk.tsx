/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Play, 
  X, 
  Compass, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

interface WhySolarArkProps {
  onNavigate: (path: string) => void;
}

export const WhySolarArk: React.FC<WhySolarArkProps> = ({ onNavigate }) => {
  const [approachModalOpen, setApproachModalOpen] = useState(false);

  const pillars = [
    {
      icon: Compass,
      title: 'Site Intelligence',
      description: 'Understanding your space and energy needs with 3D drone mapping, shadow analysis, and load audits.',
    },
    {
      icon: Cpu,
      title: 'System Design',
      description: 'Tailored solutions for maximum performance with Tier-1 bifacial panels and optimized inverter stringing.',
    },
    {
      icon: Wrench,
      title: 'Professional Execution',
      description: 'Safe, efficient and reliable installation by certified in-house EPC technicians with zero roof leaks.',
    },
    {
      icon: ShieldCheck,
      title: 'Continued Support',
      description: 'A partner beyond commissioning with 25-year SunSure performance warranty and active IoT telemetry.',
    },
  ];

  return (
    <>
      <section className="w-full bg-[#FAF9F6] border-b border-stone-200/80 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* ── LEFT DARK BLOCK: BRAND STORY & SUNSET ENGINEER VISUAL ── */}
            <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] overflow-hidden flex flex-col justify-end p-6 sm:p-8 lg:p-10 bg-[#0A1220]">
              
              {/* Background Authentic Photo */}
              <img
                src="/images/revamp/engineer-solar-sunset.jpg"
                alt="SolarARK engineer on rooftop solar installation at sunset"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-transform duration-700 hover:scale-102"
              />

              {/* Gradient Overlays for High Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              {/* Foreground Story Content */}
              <div className="relative z-10 space-y-4 max-w-md">
                
                {/* Brand Monogram Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono">
                  <span>SolarARK Engineering</span>
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.08]">
                  More than panels<br />
                  on a roof.
                </h3>

                <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed">
                  Engineered for performance. Built for what comes next.
                </p>

                {/* Our Approach Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setApproachModalOpen(true)}
                    className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-heading font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </span>
                    <span>Our Approach</span>
                  </button>
                </div>

              </div>

            </div>

            {/* ── RIGHT LIGHT BLOCK: 2x2 CAPABILITY MATRIX ── */}
            <div className="lg:col-span-6 bg-[#FAF9F6] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center space-y-6 sm:space-y-7">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
                    Why Solar ARK
                  </span>
                  <span className="w-8 h-px bg-stone-300" />
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.10]">
                  A smarter<br />
                  <span className="text-[#8B1E1E]">way to energy.</span>
                </h2>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="space-y-3">
                      {/* Icon badge in rounded square */}
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#8B1E1E] flex items-center justify-center">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Exploration Link */}
              <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">
                  ISO-certified turnkey engineering standards
                </span>

                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#8B1E1E] hover:text-[#741616] cursor-pointer group"
                >
                  <span>Read company philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── OUR APPROACH VIDEO MODAL ── */}
      {approachModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setApproachModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 space-y-4 text-white">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-amber-400">
                SolarARK Engineering Philosophy
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
                Precision engineering that protects your roof.
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                SolarARK was established with a singular focus: delivering residential and commercial solar rooftops that stand the test of time. From drone LiDAR surveys to certified electrical technicians, we handle every stage in-house — securing net metering approvals, direct bank subsidies, and 25-year performance monitoring.
              </p>
              
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    setApproachModalOpen(false);
                    onNavigate('/about');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#8B1E1E] hover:bg-[#741616] text-white text-xs sm:text-sm font-heading font-semibold transition-colors cursor-pointer"
                >
                  Explore Full Story & Team →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
