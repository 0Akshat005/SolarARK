/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Sparkles, Sun, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const HomeRoofVisualizer: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [viewMode, setViewMode] = useState<'before' | 'after'>('after');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-semibold">
            <Eye className="w-4 h-4" />
            <span>Visual Roof Architecture Preview</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            See How Rooftop Solar Transforms Your Home
          </h2>

          <p className="text-base text-slate-600">
            Concerned about rooftop aesthetics or usable terrace space? 
            SolarARK engineered structures preserve full terrace walkways while upgrading your home value.
          </p>
        </div>

        {/* Interactive Before / After Toggle Viewer */}
        <div className="bg-slate-900 p-6 sm:p-10 rounded-3xl text-white shadow-elevation-3 space-y-8">
          
          {/* Toggle Control Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setViewMode('before')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'before'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Traditional Grid Roof (Before)
            </button>

            <button
              onClick={() => setViewMode('after')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'after'
                  ? 'bg-[#8B1E1E] text-white shadow-md shadow-[#8B1E1E]/40 ring-2 ring-red-400'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>SolarARK 3D Rooftop (After)</span>
            </button>
          </div>

          {/* Roof Visualizer Display Box */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-6">
            
            {/* SVG Visual Model */}
            <svg
              viewBox="0 0 700 450"
              className="w-full h-auto max-h-[380px] transition-all duration-500"
              aria-label="Roof visualizer comparison graphic"
            >
              <defs>
                <linearGradient id="visSky" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={viewMode === 'after' ? '#2A0E0E' : '#1E293B'} />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
                <linearGradient id="visSolarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B1E1E" />
                  <stop offset="100%" stopColor="#5E1212" />
                </linearGradient>
              </defs>

              {/* Sky Backdrop */}
              <rect width="700" height="450" fill="url(#visSky)" />

              {/* Sun in Sky */}
              <circle cx="580" cy="90" r="40" fill="#FFB020" opacity={viewMode === 'after' ? '0.9' : '0.4'} />

              {/* House Main Slab */}
              <path d="M 150 220 L 350 320 L 550 220 L 350 120 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
              <path d="M 150 220 L 350 320 L 350 400 L 150 300 Z" fill="#1E293B" />
              <path d="M 350 320 L 550 220 L 550 300 L 350 400 Z" fill="#0F172A" />

              {/* BEFORE STATE: Traditional Water Tanks, Clutter, Disconnected Wires */}
              {viewMode === 'before' && (
                <g>
                  {/* Heavy Black Water Tank */}
                  <cylinder x="320" y="160" r="25" fill="#1E293B" />
                  <rect x="310" y="150" width="35" height="40" rx="4" fill="#020617" stroke="#475569" />
                  <text x="316" y="175" fill="#94A3B8" fontSize="9" fontWeight="bold">TIDE</text>

                  {/* Messy Wire Lines */}
                  <line x1="180" y1="210" x2="310" y2="170" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="345" y1="170" x2="500" y2="210" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Text Badge */}
                  <rect x="220" y="240" width="180" height="30" rx="6" fill="#7F1D1D" />
                  <text x="230" y="260" fill="#FECDD3" fontSize="12" fontWeight="bold">
                    High Monthly Bills: ₹8,500/mo
                  </text>
                </g>
              )}

              {/* AFTER STATE: Clean Elevated SolarARK Pergola Structure */}
              {viewMode === 'after' && (
                <g>
                  {/* Galvanized Elevated Pillars */}
                  <line x1="220" y1="200" x2="220" y2="140" stroke="#94A3B8" strokeWidth="4" />
                  <line x1="480" y1="200" x2="480" y2="140" stroke="#94A3B8" strokeWidth="4" />

                  {/* Solar Array Grid */}
                  <polygon points="200,140 350,200 500,140 350,80" fill="url(#visSolarGrad)" stroke="#8B1E1E" strokeWidth="2" />

                  {/* Individual Solar Panel Grids */}
                  <line x1="275" y1="110" x2="425" y2="170" stroke="#A82424" strokeWidth="1.5" />
                  <line x1="250" y1="160" x2="400" y2="100" stroke="#A82424" strokeWidth="1.5" />

                  {/* Energy Flow Glow */}
                  <circle cx="350" cy="140" r="6" fill="#FFB020" className="animate-ping" />

                  {/* Text Badge */}
                  <rect x="200" y="240" width="220" height="32" rx="6" fill="#065F46" />
                  <text x="210" y="261" fill="#A7F3D0" fontSize="13" fontWeight="bold">
                    Clean Power: ₹0 Net Bill | 5.2 kW
                  </text>
                </g>
              )}
            </svg>

            {/* Floating Comparison Legend Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="text-slate-200">
                  {viewMode === 'after'
                    ? 'SolarARK Elevated Pergola preserves 100% roof floor space for seating & gardening.'
                    : 'Unorganized rooftops lose energy value and face compounding electricity rate hikes.'}
                </span>
              </div>

              <button
                onClick={onCtaClick}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Request 3D Design</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
