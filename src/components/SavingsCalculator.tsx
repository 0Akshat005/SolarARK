/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CalculatorResults } from '../types';
import { calculateSolarSavings, formatINR } from '../utils/calculator';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Sun, 
  ShieldCheck, 
  Info, 
  Leaf, 
  TrendingDown, 
  TrendingUp, 
  Lock, 
  Award,
  Zap,
  Check
} from 'lucide-react';

interface SavingsCalculatorProps {
  onClaimEstimate: (data: { pincode: string; monthlyBill: number }) => void;
  initialPincode?: string;
  initialBill?: number;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ 
  onClaimEstimate,
  initialPincode = '560034',
  initialBill = 8500 
}) => {
  const [pincode, setPincode] = useState<string>(initialPincode);
  const [monthlyBill, setMonthlyBill] = useState<number>(initialBill);
  const [showFullBreakdown, setShowFullBreakdown] = useState<boolean>(false);

  // ── Scroll-triggered entrance animation state ──
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const results: CalculatorResults = useMemo(() => {
    return calculateSolarSavings({ pincode, monthlyBill });
  }, [pincode, monthlyBill]);

  const isValidPincode = pincode.length === 6 && /^\d+$/.test(pincode);

  // Bill with solar (~10% residual grid charge)
  const billWithSolar = Math.max(0, monthlyBill - results.monthlySavings);
  const annualSavings = results.monthlySavings * 12;

  // 6% annual tariff hike escalation simulation for 5Y and 10Y
  const grid5Y = Math.round(monthlyBill * Math.pow(1.06, 5));
  const grid10Y = Math.round(monthlyBill * Math.pow(1.06, 10));

  // Derived daily generation (system kW Ã— 4 peak sun hours)
  const dailyGeneration = (results.systemSizeKw * 4).toFixed(1);

  const quickPresets = [3000, 6000, 8500, 12000, 18000];

  // Comparison bar widths (animated proportional bars)
  const solarBarPercent = Math.max(5, Math.round((billWithSolar / monthlyBill) * 100));

  return (
    <section 
      ref={sectionRef}
      id="calculator" 
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14 bg-[#0A0F1D] border-b border-stone-800/50"
    >
      {/* ── 1. PHOTOREALISTIC SOLAR ROOFTOP BACKDROP WITH SUBTLE LEFT SCRIM ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Full, natural residential solar rooftop image (clearly visible without being removed or blacked out) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/calculator-solar-home.jpg"
            alt="Real Residential Rooftop Solar Installation"
            className="w-full h-full object-cover object-[75%_35%] opacity-90 transition-opacity duration-700"
          />

          {/* Subtle top & right edge vignette for natural cinematic polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
        </div>

        {/* ── Calibrated Subtle Left Dark Scrim (Provides 100% crisp text readability without washing out or blacking out the image) ── */}
        <div
          className="hidden lg:block absolute inset-0 z-1"
          style={{
            background:
              'linear-gradient(90deg, rgba(10, 15, 29, 0.90) 0%, rgba(10, 15, 29, 0.76) 34%, rgba(10, 15, 29, 0.38) 52%, rgba(10, 15, 29, 0.10) 68%, transparent 82%)',
          }}
        />
        <div
          className="lg:hidden absolute inset-0 z-1"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 15, 29, 0.92) 0%, rgba(10, 15, 29, 0.72) 50%, rgba(10, 15, 29, 0.88) 100%)',
          }}
        />

        {/* Soft Warm Solar Horizon Glow */}
        <div className="absolute top-[8%] right-[10%] w-[38%] h-[280px] bg-amber-500/10 blur-[90px] rounded-full" />
      </div>

      {/* ── 2. MAIN SECTION GRID: BALANCED & SCREEN-FITTED ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6 lg:space-y-7">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ═══════════════════════════════════════════════════════════════
              LEFT SIDE: PROBLEM + UNDERSTANDING + ESCALATION TIMELINE
             ═══════════════════════════════════════════════════════════════ */}
          <div className={`lg:col-span-4 xl:col-span-4 space-y-4 pt-1 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Eyebrow Pill — Glassmorphic High-Contrast Badge */}
            <div className="eyebrow inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xs text-[10.5px]">
              <TrendingUp className="w-3 h-3 text-[#FF6B6B]" />
              <span>GRID TARIFF ESCALATION VS SOLAR STABILITY</span>
            </div>

            {/* Headline Hierarchy: Consequence first, then SolarARK solution */}
            <div className="space-y-0.5">
              <h2 
                className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-[1.15] m-0"
                style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.8)' }}
              >
                Your electricity bill keeps going up.
              </h2>
              <h3 
                className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#FF6B6B] tracking-tight leading-[1.15] m-0"
                style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.8)' }}
              >
                Your rooftop doesn’t have to.
              </h3>
            </div>

            {/* Supporting Concise Human Copy */}
            <p 
              className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed text-left m-0 max-w-lg"
              style={{ textShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
            >
              Grid tariffs rise 5–8% every year in Maharashtra. A SolarARK installation locks your power generation cost at zero inflation for 25+ years.
            </p>

            {/* 3 Compact Proof Points in a Sleek Glassmorphic Badge Row */}
            <div className={`flex flex-wrap gap-1.5 pt-0.5 transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B6B]" /> Lock costs 25+ yrs
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-2xs">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" /> Slash bills up to 90%
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-2xs">
                <Sun className="w-3.5 h-3.5 text-amber-400" /> Clean energy for life
              </span>
            </div>

            {/* â”€â”€ Cost Trajectory: TODAY â†’ 5 YEARS â†’ 10 YEARS â”€â”€ */}
            <div className={`p-3.5 sm:p-4 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 shadow-lg space-y-2.5 transition-all duration-700 delay-[400ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="eyebrow text-[10px] text-white/90">
                  Cost Trajectory Comparison
                </span>
                <span className="text-[9.5px] text-slate-400 font-medium">
                  {formatINR(monthlyBill)}/mo bill
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 space-y-1">
                  <span className="text-[9px] font-extrabold font-heading text-slate-400 uppercase tracking-wider block">Today</span>
                  <div className="text-[10.5px] font-bold text-rose-400 bg-rose-500/15 px-1 py-0.5 rounded border border-rose-500/20">
                    {formatINR(monthlyBill)}
                  </div>
                  <div className="text-[10.5px] font-bold text-emerald-400 bg-emerald-500/15 px-1 py-0.5 rounded border border-emerald-500/20">
                    ~{formatINR(billWithSolar)}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 space-y-1">
                  <span className="text-[9px] font-extrabold font-heading text-slate-400 uppercase tracking-wider block">5 Years</span>
                  <div className="text-[10.5px] font-bold text-rose-400 bg-rose-500/15 px-1 py-0.5 rounded border border-rose-500/20">
                    {formatINR(grid5Y)}
                  </div>
                  <div className="text-[10.5px] font-bold text-emerald-400 bg-emerald-500/15 px-1 py-0.5 rounded border border-emerald-500/20">
                    ~{formatINR(billWithSolar)}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 space-y-1">
                  <span className="text-[9px] font-extrabold font-heading text-slate-400 uppercase tracking-wider block">10 Years</span>
                  <div className="text-[10.5px] font-bold text-rose-400 bg-rose-500/15 px-1 py-0.5 rounded border border-rose-500/20">
                    {formatINR(grid10Y)}
                  </div>
                  <div className="text-[10.5px] font-bold text-emerald-400 bg-emerald-500/15 px-1 py-0.5 rounded border border-emerald-500/20">
                    ~{formatINR(billWithSolar)}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] px-0.5 text-slate-400">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  <span>Grid (Rising)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-bold text-emerald-400">SolarARK (Fixed)</span>
                </div>
              </div>

              <p className="text-[10.5px] text-slate-500 font-medium italic text-center pt-1 border-t border-white/10 m-0">
                The longer you stay on the grid, the more you keep paying.
              </p>
            </div>

          </div>

          {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
              RIGHT SIDE: STREAMLINED 2-COLUMN CALCULATOR CARD
             â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
          <div className={`lg:col-span-8 xl:col-span-8 transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xl shadow-black/20 p-5 sm:p-6 lg:p-7">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* â”€â”€ LEFT HALF: STEP 1 INPUTS (md:col-span-5) â”€â”€ */}
                <div className="md:col-span-5 space-y-4">
                  
                  <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                    <span className="w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">1</span>
                    <span className="eyebrow text-xs text-slate-900">Your Details</span>
                  </div>

                  {/* Pincode Field */}
                  <div className="space-y-1">
                    <label htmlFor="pincode-input" className="block text-[11px] font-bold text-slate-700">
                      Enter 6-digit pincode
                    </label>
                    <div className="relative">
                      <input
                        id="pincode-input"
                        type="text"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                        placeholder="e.g. 560034"
                        className="w-full bg-stone-50 border border-stone-200 focus:border-[#8B1E1E] text-slate-900 text-xs font-semibold px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all placeholder:text-stone-400"
                      />
                      {isValidPincode ? (
                        <span className="absolute right-2 top-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1 animate-in fade-in zoom-in-95 duration-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Serviceable
                        </span>
                      ) : (
                        pincode.length > 0 && (
                          <span className="absolute right-2.5 top-2.5 text-[10px] font-medium text-stone-400">
                            {6 - pincode.length} left
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Monthly Bill Slider */}
                  <div className="space-y-2 pt-0.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="bill-slider" className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                        <span>Monthly electricity bill</span>
                        <Info className="w-3 h-3 text-stone-400" />
                      </label>
                    </div>

                    <div className="flex items-baseline gap-1.5">
                      <span className="stat-figure text-2xl sm:text-3xl text-slate-900 transition-all duration-200">
                        {formatINR(monthlyBill)}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500">/ month</span>
                    </div>

                    <div className="space-y-1 px-0.5">
                      <input
                        id="bill-slider"
                        type="range"
                        min={1000}
                        max={35000}
                        step={500}
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value))}
                        className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#8B1E1E] focus:outline-none"
                        aria-label="Monthly electricity bill range slider"
                      />
                      <div className="flex justify-between text-[9.5px] font-semibold text-stone-400 font-heading">
                        <span>â‚¹1k</span>
                        <span>â‚¹7.5k</span>
                        <span>â‚¹15k</span>
                        <span>â‚¹25k+</span>
                      </div>
                    </div>

                    {/* Quick Select */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider block">Quick select</span>
                      <div className="flex flex-wrap gap-1.5">
                        {quickPresets.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setMonthlyBill(preset)}
                            className={`text-[11px] px-2.5 py-1 rounded-lg font-bold border transition-all duration-200 active:scale-95 cursor-pointer ${
                              monthlyBill === preset
                                ? 'btn-primary-maroon text-white border-transparent shadow-sm scale-[1.02]'
                                : 'bg-stone-50 text-slate-700 border-stone-200 hover:border-stone-300 hover:bg-stone-100 hover:scale-[1.02]'
                            }`}
                          >
                            {formatINR(preset)}{preset >= 18000 ? '+' : ''}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Privacy Box */}
                  <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100/80 flex items-center gap-2 text-[10.5px] text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0" />
                    <span>Your details are 100% secure & private.</span>
                  </div>

                </div>

                {/* â”€â”€ RIGHT HALF: STEP 2 SAVINGS & CTA (md:col-span-7) â”€â”€ */}
                <div className="md:col-span-7 space-y-3.5 md:border-l md:border-stone-100 md:pl-6">
                  
                  <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                    <span className="w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">2</span>
                    <span className="eyebrow text-xs text-slate-900">Your Solar Savings Estimate</span>
                  </div>

                  {/* Hero Savings Result Card */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-emerald-50/40 to-white border border-emerald-200/90 relative overflow-hidden flex items-center justify-between shadow-xs">
                    <div className="space-y-0.5 z-10">
                      <span className="eyebrow text-[10.5px] text-emerald-800">You Save</span>
                      <div className="flex items-baseline gap-1">
                        <span className="stat-figure text-2xl sm:text-3xl text-emerald-700 transition-all duration-300">
                          {formatINR(results.monthlySavings)}
                        </span>
                        <span className="text-xs font-bold text-emerald-600">/ month</span>
                      </div>
                      <p className="text-[11px] font-semibold text-emerald-900/80 m-0">
                        That's {formatINR(annualSavings)} every year back in your pocket!
                      </p>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-white border border-emerald-100 shadow-xs flex items-center justify-center shrink-0 p-1.5">
                      <Sun className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none" />
                  </div>

                  {/* Comparison: Current Bill vs With Solar â€” animated bars */}
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <div className="p-2 rounded-lg bg-white border border-stone-200/80 shadow-2xs">
                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider block">Current Bill</span>
                        <span className="text-xs sm:text-sm font-extrabold text-rose-700 font-heading block">
                          {formatINR(monthlyBill)}
                        </span>
                        <div className="w-full h-1.5 bg-stone-100 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full transition-all duration-500 ease-out w-full" />
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-200/80 shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider block">With Solar</span>
                        <span className="text-xs sm:text-sm font-extrabold text-emerald-800 font-heading block">
                          ~{formatINR(billWithSolar)}
                        </span>
                        <div className="w-full h-1.5 bg-emerald-100 rounded-full mt-1 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500 ease-out" 
                            style={{ width: `${solarBarPercent}%` }} 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-700 font-medium px-0.5">
                      <span>Net Monthly Benefit:</span>
                      <span className="font-extrabold text-emerald-700 font-heading">
                        +{formatINR(results.monthlySavings)} / Month
                      </span>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <div className="space-y-1.5 pt-0.5">
                    <button
                      type="button"
                      onClick={() => onClaimEstimate({ pincode, monthlyBill })}
                      className="w-full btn-primary-maroon font-heading font-bold text-sm sm:text-base py-3 px-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>Get My Free Savings Estimate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-stone-500 font-medium text-center">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>No Obligation Â· 100% Free Â· 3D Site Survey</span>
                    </div>
                  </div>

                  {/* Secondary Specs */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px]">
                      <span className="text-stone-400 text-[9px] uppercase font-bold block">Recommended System</span>
                      <span className="font-bold text-slate-800 font-heading">{results.systemSizeKw} kW Rooftop</span>
                    </div>
                    <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px]">
                      <span className="text-stone-400 text-[9px] uppercase font-bold block">Effective Investment</span>
                      <span className="font-bold text-slate-800 font-heading">{formatINR(results.effectiveNetCost)} Net</span>
                    </div>
                  </div>

                  {/* Expandable Breakdown */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowFullBreakdown(!showFullBreakdown)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B1E1E] hover:underline cursor-pointer transition-colors"
                    >
                      <span>{showFullBreakdown ? 'Hide financial breakdown' : 'See full breakdown'}</span>
                      {showFullBreakdown ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {showFullBreakdown && (
                      <div className="mt-2 p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-[11px] animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="grid grid-cols-2 gap-2 pb-1.5 border-b border-stone-200/60">
                          <div>
                            <span className="text-stone-500 block">Gross Cost:</span>
                            <span className="font-bold text-slate-900">{formatINR(results.estimatedCostBeforeSubsidy)}</span>
                          </div>
                          <div>
                            <span className="text-emerald-700 block">Subsidy:</span>
                            <span className="font-bold text-emerald-700">-{formatINR(results.subsidyAmount)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pb-1.5 border-b border-stone-200/60">
                          <div>
                            <span className="text-stone-500 block">Daily Units:</span>
                            <span className="font-bold text-slate-900">~{dailyGeneration} kWh</span>
                          </div>
                          <div>
                            <span className="text-stone-500 block">Payback:</span>
                            <span className="font-bold text-slate-900">{results.paybackYears.toFixed(1)} Yrs</span>
                          </div>
                        </div>

                        <div className="pt-0.5 flex items-center justify-between text-slate-700">
                          <span className="font-semibold">25-Yr Savings:</span>
                          <span className="font-extrabold text-[#8B1E1E] text-xs font-heading">{formatINR(results.twentyFiveYearSavings)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* â”€â”€ 3. BOTTOM TRUST STRIP â”€â”€ */}
        <div className={`pt-3 border-t border-white/10 transition-all duration-700 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>Trusted by families & businesses</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Tier-1 High Efficiency Cells</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-semibold">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Expert In-House Installation</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>25-Year Performance Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

