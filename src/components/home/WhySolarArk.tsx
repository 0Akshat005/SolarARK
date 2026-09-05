/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * WhySolarArk — Strong 2-Part Editorial Composition
 * Rebuilt strictly to adhere to revamp.md:
 * - 2-part composition: Large rectangular photographic panel + clean typographic information field.
 * - Supporting capabilities in a structured 2x2 arrangement with thin architectural dividers.
 * - NO floating cards. Calm, engineered, and premium.
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
      num: '01',
      icon: Compass,
      title: 'Site Intelligence',
      description: 'Understanding your space and energy profile with 3D drone LiDAR mapping, high-resolution shadow analysis, and electrical load audits.',
    },
    {
      num: '02',
      icon: Cpu,
      title: 'System Design',
      description: 'Custom CAD blueprints and string optimization engineered with Tier-1 bifacial modules and smart hybrid inverters.',
    },
    {
      num: '03',
      icon: Wrench,
      title: 'Professional Execution',
      description: 'Safe, certified EPC installation using structural anodized aluminum framing, weatherproof conduits, and zero roof penetrations.',
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Continued Support',
      description: 'Long-term partnership with 25-year linear performance warranty, MSEDCL net-metering liaison, and live IoT telemetry.',
    },
  ];

  return (
    <>
      <section className="w-full bg-[#FAF9F6] border-b border-stone-200/80 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px] lg:min-h-[560px]">
            
            {/* ── LEFT PANEL: LARGE RECTANGULAR PHOTOGRAPHIC PANEL (6 COLS) ── */}
            <div className="lg:col-span-6 relative min-h-[400px] sm:min-h-[460px] lg:min-h-full overflow-hidden flex flex-col justify-end p-7 sm:p-10 lg:p-12 bg-[#0A1220]">
              
              {/* Authentic High-Res Rooftop Photo */}
              <img
                src="/images/revamp/engineer-solar-sunset.jpg"
                alt="SolarARK certified engineer inspecting rooftop solar array at golden hour"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                loading="eager"
              />

              {/* Editorial Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden lg:block" />

              {/* Left Foreground Content */}
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono">
                  <span>SolarARK Engineering</span>
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.08]">
                  More than panels<br />
                  on a roof.
                </h3>

                <p className="text-xs sm:text-sm text-stone-200 font-normal leading-relaxed">
                  Every rooftop is unique. We combine precision spatial engineering, strict Tier-1 component selection, and seamless DISCOM grid integration for measurable lifelong returns.
                </p>

                {/* Our Approach Video/Modal Trigger */}
                <div className="pt-2">
                  <button
                    onClick={() => setApproachModalOpen(true)}
                    className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-heading font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </span>
                    <span>Our Engineering Standards</span>
                  </button>
                </div>
              </div>

            </div>

            {/* ── RIGHT PANEL: CLEAN TYPOGRAPHIC INFORMATION FIELD (6 COLS) ── */}
            <div className="lg:col-span-6 bg-[#FAF9F6] p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between space-y-6 sm:space-y-8">
              
              {/* Header */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-600">
                    WHY SOLAR ARK
                  </span>
                  <span className="w-8 h-px bg-stone-300" />
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.08]">
                  A smarter{' '}
                  <span className="text-[#8B1E1E]">way to energy.</span>
                </h2>
              </div>

              {/* 2x2 Structured Architectural Matrix with Thin Hairline Dividers (NO Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-stone-300/80">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  const isRightCol = idx % 2 === 1;
                  const isBottomRow = idx >= 2;

                  return (
                    <div
                      key={item.num}
                      className={`py-5 sm:py-6 flex flex-col justify-between space-y-2.5 ${
                        isRightCol ? 'sm:pl-6 sm:border-l border-stone-300/80' : 'sm:pr-6'
                      } ${isBottomRow ? 'border-t border-stone-300/80' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#8B1E1E]">
                          {item.num}
                        </span>
                        <Icon className="w-4 h-4 text-stone-500" strokeWidth={1.75} />
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-heading text-base sm:text-[17px] font-bold text-slate-900 tracking-tight">
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
              <div className="pt-4 border-t border-stone-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-stone-500 font-medium">
                  ISO-certified turnkey engineering standards
                </span>

                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[#8B1E1E] hover:text-[#741616] cursor-pointer group"
                >
                  <span>Read company philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── APPROACH MODAL ── */}
      {approachModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setApproachModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="font-mono text-xs text-[#8B1E1E] uppercase tracking-wider font-semibold">
                  Engineering Standards
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  How SolarARK Engineers Every Rooftop
                </h3>
              </div>
              <button
                onClick={() => setApproachModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <p>
                SolarArk is an ISO-certified engineering and renewable energy EPC firm headquartered in Maharashtra. We deliver tailored rooftop solar installations for residential villas, housing societies, commercial campuses, and industrial plants.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="font-heading font-bold text-slate-900 text-sm">Tier-1 Components</div>
                  <div className="text-xs text-stone-500 mt-0.5">Bifacial mono PERC/TOPCon modules with 25-yr linear output warranty.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="font-heading font-bold text-slate-900 text-sm">Turnkey Approvals</div>
                  <div className="text-xs text-stone-500 mt-0.5">Direct PM Surya Ghar subsidy filing & MSEDCL bi-directional meter setup.</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-100">
              <button
                onClick={() => {
                  setApproachModalOpen(false);
                  onNavigate('/about');
                }}
                className="px-5 py-2 rounded-full bg-[#8B1E1E] text-white text-xs font-heading font-semibold hover:bg-[#741616] transition-colors cursor-pointer"
              >
                Explore Full About Story
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
