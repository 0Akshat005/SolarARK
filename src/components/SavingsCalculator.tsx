/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
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

  const quickPresets = [3000, 6000, 8500, 12000, 18000];

  return (
    <section 
      id="calculator" 
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] border-b border-stone-200/70"
    >
      {/* ── 1. WARM, REALISTIC RESIDENTIAL ROOFTOP BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Real solar installation visible on upper/middle right side */}
        <div className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[58%] h-full min-h-[480px]">
          <img
            src="/calculator-solar-home.jpg"
            alt="Warm Atmospheric Residential Solar Roof"
            className="w-full h-full object-cover object-[75%_35%] opacity-80 transition-opacity duration-700"
          />
          
          {/* Subtle dark cinematic vignette on top-right to enrich the sky & solar depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAF9F6]/90" />
          
          {/* Multi-stop warm champagne & ivory dissolves to blend seamlessly into #FAF9F6 on the left */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[52%] bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-35% sm:via-45% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#FAF9F6] to-transparent" />
        </div>

        {/* Soft Ambient Warm Illumination */}
        <div className="absolute top-[5%] right-[12%] w-[35%] h-[240px] bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />
      </div>

      {/* ── 2. MAIN SECTION GRID: BALANCED & SCREEN-FITTED ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6 lg:space-y-7">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ═══════════════════════════════════════════════════════════════
              LEFT SIDE: PUNCHY PROBLEM + UNDERSTANDING + ESCALATION TIMELINE
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4 pt-1">
            
            {/* Eyebrow Pill */}
            <div className="eyebrow inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/15 text-[#8B1E1E] text-[10.5px]">
              <TrendingUp className="w-3 h-3 text-[#8B1E1E]" />
              <span>GRID TARIFF ESCALATION VS SOLAR STABILITY</span>
            </div>

            {/* Headline Hierarchy: Compact, punchy & high-contrast */}
            <div className="space-y-0.5">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0B1730] tracking-tight leading-[1.15] m-0">
                Your electricity bill keeps going up.
              </h2>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#8B1E1E] tracking-tight leading-[1.15] m-0">
                Your rooftop doesn’t have to.
              </h3>
            </div>

            {/* Supporting Concise Human Copy */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed text-left m-0">
              Grid tariffs rise 5–8% every year in Maharashtra. A SolarARK installation locks your power cost at zero inflation for 25+ years.
            </p>

            {/* 3 Compact Proof Points in a Sleek Row/Wrap */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 border border-stone-200/80 text-[11px] font-bold text-slate-800 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E1E]" /> Lock costs 25+ yrs
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 border border-stone-200/80 text-[11px] font-bold text-slate-800 shadow-2xs">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-700" /> Slash bills up to 90%
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 border border-stone-200/80 text-[11px] font-bold text-slate-800 shadow-2xs">
                <Sun className="w-3.5 h-3.5 text-amber-600" /> Clean energy for life
              </span>
            </div>

            {/* ── Left-Side Comparison Visual: TODAY → 5 YEARS → 10 YEARS ── */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-1.5">
                <span className="eyebrow text-[10px] text-slate-900">
                  Cost Trajectory Comparison
                </span>
                <span className="text-[9.5px] text-stone-500 font-medium">
                  {formatINR(monthlyBill)}/mo bill
                </span>
              </div>

              {/* 3 Step Timeline */}
              <div className="grid grid-cols-3 gap-1.5 text-center">
                {/* TODAY */}
                <div className="p-2 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1">
                  <span className="text-[9px] font-extrabold font-heading text-stone-500 uppercase tracking-wider block">
                    Today
                  </span>
                  <div className="text-[10.5px] font-bold text-rose-700 bg-rose-50 px-1 py-0.5 rounded border border-rose-100">
                    {formatINR(monthlyBill)}
                  </div>
                  <div className="text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">
                    ~{formatINR(billWithSolar)}
                  </div>
                </div>

                {/* 5 YEARS */}
                <div className="p-2 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1">
                  <span className="text-[9px] font-extrabold font-heading text-stone-500 uppercase tracking-wider block">
                    5 Years
                  </span>
                  <div className="text-[10.5px] font-bold text-rose-700 bg-rose-50 px-1 py-0.5 rounded border border-rose-100">
                    {formatINR(grid5Y)}
                  </div>
                  <div className="text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">
                    ~{formatINR(billWithSolar)}
                  </div>
                </div>

                {/* 10 YEARS */}
                <div className="p-2 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1">
                  <span className="text-[9px] font-extrabold font-heading text-stone-500 uppercase tracking-wider block">
                    10 Years
                  </span>
                  <div className="text-[10.5px] font-bold text-rose-700 bg-rose-50 px-1 py-0.5 rounded border border-rose-100">
                    {formatINR(grid10Y)}
                  </div>
                  <div className="text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">
                    ~{formatINR(billWithSolar)}
                  </div>
                </div>
              </div>

              {/* Legend Strip */}
              <div className="flex items-center justify-between text-[10px] px-0.5 text-slate-600">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                  <span>Grid (Rising)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span className="font-bold text-emerald-800">SolarARK (Fixed)</span>
                </div>
              </div>

              {/* Concluding Psychological Note */}
              <p className="text-[10.5px] text-stone-500 font-medium italic text-center pt-1 border-t border-stone-100 m-0">
                The longer you stay on the grid, the more you keep paying.
              </p>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT SIDE: STREAMLINED 2-COLUMN CALCULATOR CARD
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl shadow-slate-900/5 p-5 sm:p-6 lg:p-7">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* ── LEFT HALF OF CARD: STEP 1 INPUTS (md:col-span-5) ── */}
                <div className="md:col-span-5 space-y-4">
                  
                  <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                    <span className="w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">
                      1
                    </span>
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
                        className="w-full bg-stone-50 border border-stone-200 focus:border-[#8B1E1E] text-slate-900 text-xs font-semibold px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all placeholder:text-stone-400"
                      />
                      {isValidPincode ? (
                        <span className="absolute right-2 top-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Serviceable
                        </span>
                      ) : (
                        pincode.length > 0 && (
                          <span className="absolute right-2.5 top-2 text-[10px] font-medium text-stone-400">
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

                    {/* Live Amount Display */}
                    <div className="flex items-baseline gap-1.5">
                      <span className="stat-figure text-2xl sm:text-3xl text-slate-900">
                        {formatINR(monthlyBill)}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500">/ month</span>
                    </div>

                    {/* Range Slider */}
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
                        <span>₹1k</span>
                        <span>₹7.5k</span>
                        <span>₹15k</span>
                        <span>₹25k+</span>
                      </div>
                    </div>

                    {/* Quick Select Bill Presets */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[9.5px] font-bold text-stone-400 uppercase tracking-wider block">
                        Quick select
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {quickPresets.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setMonthlyBill(preset)}
                            className={`text-[11px] px-2.5 py-1 rounded-lg font-bold border transition-all duration-150 active:scale-95 cursor-pointer ${
                              monthlyBill === preset
                                ? 'btn-primary-maroon text-white border-transparent shadow-xs'
                                : 'bg-stone-50 text-slate-700 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
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

                {/* ── RIGHT HALF OF CARD: STEP 2 SAVINGS & CTA (md:col-span-7) ── */}
                <div className="md:col-span-7 space-y-3.5 md:border-l md:border-stone-100 md:pl-6">
                  
                  <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                    <span className="w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[11px] font-extrabold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span className="eyebrow text-xs text-slate-900">Your Solar Savings Estimate</span>
                  </div>

                  {/* Hero Savings Result Card */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-emerald-50/40 to-white border border-emerald-200/90 relative overflow-hidden flex items-center justify-between shadow-xs">
                    <div className="space-y-0.5 z-10">
                      <span className="eyebrow text-[10.5px] text-emerald-800">
                        You Save
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="stat-figure text-2xl sm:text-3xl text-emerald-700">
                          {formatINR(results.monthlySavings)}
                        </span>
                        <span className="text-xs font-bold text-emerald-600">/ month</span>
                      </div>
                      <p className="text-[11px] font-semibold text-emerald-900/80 m-0">
                        That's {formatINR(annualSavings)} every year back in your pocket!
                      </p>
                    </div>

                    <div className="relative z-10 w-12 h-12 rounded-xl bg-white border border-emerald-100 shadow-xs flex items-center justify-center shrink-0 p-1.5">
                      <img
                        src="/images/calculator-badge-house.png"
                        alt="Solar House"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Compact Comparison: Current Bill vs With Solar */}
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <div className="p-2 rounded-lg bg-white border border-stone-200/80 shadow-2xs">
                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider block">Current Bill</span>
                        <span className="text-xs sm:text-sm font-extrabold text-rose-700 font-heading block">
                          {formatINR(monthlyBill)}
                        </span>
                        <div className="w-full h-1 bg-rose-500 rounded-full mt-1" />
                      </div>

                      <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-200/80 shadow-2xs">
                        <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider block">With Solar</span>
                        <span className="text-xs sm:text-sm font-extrabold text-emerald-800 font-heading block">
                          ~{formatINR(billWithSolar)}
                        </span>
                        <div className="w-full h-1 bg-emerald-500 rounded-full mt-1" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-700 font-medium px-0.5">
                      <span>Net Monthly Benefit:</span>
                      <span className="font-extrabold text-emerald-700 font-heading">
                        +{formatINR(results.monthlySavings)} / Month
                      </span>
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="space-y-1.5 pt-0.5">
                    <button
                      type="button"
                      onClick={() => onClaimEstimate({ pincode, monthlyBill })}
                      className="w-full btn-primary-maroon font-heading font-bold text-sm sm:text-base py-3 px-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Get My Free Savings Estimate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-stone-500 font-medium text-center">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>No Obligation · 100% Free · 3D Site Survey</span>
                    </div>
                  </div>

                  {/* Secondary Specs Row */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px]">
                      <span className="text-stone-400 text-[9px] uppercase font-bold block">Recommended System</span>
                      <span className="font-bold text-slate-800 font-heading">{results.systemSizeKw} kW Rooftop</span>
                    </div>
                    <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px]">
                      <span className="text-stone-400 text-[9px] uppercase font-bold block">Effective Investment</span>
                      <span className="font-bold text-slate-800 font-heading">{formatINR(results.effectiveCost)} Net</span>
                    </div>
                  </div>

                  {/* Expandable Breakdown Drawer Trigger */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowFullBreakdown(!showFullBreakdown)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B1E1E] hover:underline cursor-pointer"
                    >
                      <span>{showFullBreakdown ? 'Hide financial breakdown' : 'See full breakdown'}</span>
                      {showFullBreakdown ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {showFullBreakdown && (
                      <div className="mt-2 p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-[11px] animate-in fade-in duration-200">
                        <div className="grid grid-cols-2 gap-2 pb-1.5 border-b border-stone-200/60">
                          <div>
                            <span className="text-stone-500 block">Gross Cost:</span>
                            <span className="font-bold text-slate-900">{formatINR(results.estimatedCost)}</span>
                          </div>
                          <div>
                            <span className="text-emerald-700 block">Subsidy:</span>
                            <span className="font-bold text-emerald-700">-{formatINR(results.centralSubsidy)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pb-1.5 border-b border-stone-200/60">
                          <div>
                            <span className="text-stone-500 block">Daily Units:</span>
                            <span className="font-bold text-slate-900">~{results.dailyGenerationUnits} kWh</span>
                          </div>
                          <div>
                            <span className="text-stone-500 block">Payback:</span>
                            <span className="font-bold text-slate-900">{results.paybackYears.toFixed(1)} Yrs</span>
                          </div>
                        </div>

                        <div className="pt-0.5 flex items-center justify-between text-slate-700">
                          <span className="font-semibold">25-Yr Savings:</span>
                          <span className="font-extrabold text-[#8B1E1E] text-xs font-heading">{formatINR(results.lifetimeSavings)}</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM TRUST TREATMENT (COMPACT & QUIET) ── */}
        <div className="pt-3 border-t border-stone-200/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            <div className="flex items-center justify-center gap-1.5 text-stone-600 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>Trusted by families & businesses</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-stone-600 text-[11px] font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Tier-1 High Efficiency Cells</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-stone-600 text-[11px] font-semibold">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Expert In-House Installation</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-stone-600 text-[11px] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>25-Year Performance Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
