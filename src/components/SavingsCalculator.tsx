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
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-stone-200/70"
    >
      {/* ── 1. WARM, REALISTIC RESIDENTIAL ROOFTOP BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Real solar installation visible on upper/middle right side */}
        <div className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[58%] h-full min-h-[580px]">
          <img
            src="/calculator-solar-home.jpg"
            alt="Warm Atmospheric Residential Solar Roof"
            className="w-full h-full object-cover object-[75%_35%] opacity-85 transition-opacity duration-700"
          />
          
          {/* Subtle dark cinematic vignette on top-right to enrich the sky & solar depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAF9F6]/90" />
          
          {/* Multi-stop warm champagne & ivory dissolves to blend seamlessly into #FAF9F6 on the left */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[52%] bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-35% sm:via-45% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F6] to-transparent" />
        </div>

        {/* Soft Ambient Warm Illumination */}
        <div className="absolute top-[5%] right-[12%] w-[35%] h-[300px] bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />
      </div>

      {/* ── 2. MAIN SECTION GRID: SPLIT COMPOSITION (PROBLEM ON LEFT + CALCULATOR ON RIGHT) ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ═══════════════════════════════════════════════════════════════
              LEFT SIDE: PROBLEM + UNDERSTANDING + ESCALATION TIMELINE
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 pt-2">
            
            {/* Eyebrow Pill */}
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/15 text-[#8B1E1E] text-[11px]">
              <TrendingUp className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>GRID TARIFF ESCALATION VS SOLAR STABILITY</span>
            </div>

            {/* Headline Hierarchy: Consequence first, then SolarARK solution */}
            <div className="space-y-1.5">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1730] tracking-tight leading-[1.12] m-0">
                Your electricity bill keeps going up.
              </h2>
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#8B1E1E] tracking-tight leading-[1.12] m-0">
                Your rooftop doesn’t have to.
              </h3>
            </div>

            {/* Supporting Human Copy */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed text-left">
              Grid electricity rates increase every year. A SolarARK rooftop installation locks your power generation cost at zero inflation for the next 25+ years.
            </p>

            {/* 3 Compact Proof Points with minimal line icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                  Lock costs for 25+ years
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                  Slash bills up to 90%
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 font-heading">
                  Clean energy for life
                </div>
              </div>
            </div>

            {/* ── Left-Side Comparison Visual: TODAY → 5 YEARS → 10 YEARS ── */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <span className="eyebrow text-[11px] text-slate-900">
                  Cost Trajectory Comparison
                </span>
                <span className="text-[10px] text-stone-500 font-medium">
                  Based on your {formatINR(monthlyBill)}/mo bill
                </span>
              </div>

              {/* 3 Step Timeline */}
              <div className="grid grid-cols-3 gap-2 text-center">
                {/* TODAY */}
                <div className="p-2.5 rounded-2xl bg-stone-50/80 border border-stone-200/70 space-y-2">
                  <span className="text-[10px] font-extrabold font-heading text-stone-500 uppercase tracking-wider block">
                    Today
                  </span>
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-md border border-rose-100">
                      {formatINR(monthlyBill)}
                    </div>
                    <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">
                      ~{formatINR(billWithSolar)}
                    </div>
                  </div>
                </div>

                {/* 5 YEARS */}
                <div className="p-2.5 rounded-2xl bg-stone-50/80 border border-stone-200/70 space-y-2">
                  <span className="text-[10px] font-extrabold font-heading text-stone-500 uppercase tracking-wider block">
                    5 Years
                  </span>
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-md border border-rose-100">
                      {formatINR(grid5Y)}
                    </div>
                    <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">
                      ~{formatINR(billWithSolar)}
                    </div>
                  </div>
                </div>

                {/* 10 YEARS */}
                <div className="p-2.5 rounded-2xl bg-stone-50/80 border border-stone-200/70 space-y-2">
                  <span className="text-[10px] font-extrabold font-heading text-stone-500 uppercase tracking-wider block">
                    10 Years
                  </span>
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-md border border-rose-100">
                      {formatINR(grid10Y)}
                    </div>
                    <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">
                      ~{formatINR(billWithSolar)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend Strip */}
              <div className="flex items-center justify-between text-[11px] px-1 text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 shrink-0" />
                  <span>Grid Electricity (Rising)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                  <span className="font-bold text-emerald-800">SolarARK (Stable)</span>
                </div>
              </div>

              {/* Concluding Psychological Note */}
              <p className="text-xs text-stone-500 font-medium italic text-center pt-1 border-t border-stone-100 m-0">
                The longer you stay on the grid, the more you keep paying.
              </p>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT SIDE: THE FOCAL CALCULATOR INTERACTION CARD
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-white rounded-3xl sm:rounded-[32px] border border-stone-200/90 shadow-xl shadow-slate-900/5 p-6 sm:p-8 lg:p-9 space-y-6">
              
              {/* ── STEP 1: YOUR DETAILS ── */}
              <div className="space-y-4">
                
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-stone-100">
                  <span className="w-6 h-6 rounded-full bg-[#8B1E1E] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span className="eyebrow text-xs sm:text-sm text-slate-900">Your Details</span>
                </div>

                {/* 6-Digit Pincode Field */}
                <div className="space-y-1.5">
                  <label htmlFor="pincode-input" className="block text-xs font-bold text-slate-700">
                    Enter your 6-digit pincode
                  </label>
                  <div className="relative">
                    <input
                      id="pincode-input"
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      placeholder="e.g. 560034"
                      className="w-full bg-stone-50 border border-stone-200 focus:border-[#8B1E1E] text-slate-900 text-sm font-semibold px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all placeholder:text-stone-400"
                    />
                    {isValidPincode ? (
                      <span className="absolute right-3 top-2.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Serviceable
                      </span>
                    ) : (
                      pincode.length > 0 && (
                        <span className="absolute right-3 top-3 text-[11px] font-medium text-stone-400">
                          {6 - pincode.length} digits left
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Average Monthly Electricity Bill Slider */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="bill-slider" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span>Average monthly electricity bill</span>
                      <Info className="w-3.5 h-3.5 text-stone-400" />
                    </label>
                  </div>

                  {/* Big Live Amount Display */}
                  <div className="flex items-baseline gap-2">
                    <span className="stat-figure text-3xl sm:text-4xl text-slate-900">
                      {formatINR(monthlyBill)}
                    </span>
                    <span className="text-xs font-semibold text-stone-500">/ month</span>
                  </div>

                  {/* Range Slider */}
                  <div className="space-y-1.5 px-0.5">
                    <input
                      id="bill-slider"
                      type="range"
                      min={1000}
                      max={35000}
                      step={500}
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#8B1E1E] focus:outline-none"
                      aria-label="Monthly electricity bill range slider"
                    />

                    <div className="flex justify-between text-[10.5px] font-semibold text-stone-400 font-heading">
                      <span>₹1,000</span>
                      <span>₹7,500</span>
                      <span>₹15,000</span>
                      <span>₹25,000+</span>
                    </div>
                  </div>

                  {/* Quick Select Bill Presets */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                      Quick select
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {quickPresets.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setMonthlyBill(preset)}
                          className={`text-xs px-3.5 py-1.5 rounded-xl font-bold border transition-all duration-150 active:scale-95 cursor-pointer ${
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

              </div>

              {/* ── STEP 2: YOUR SOLAR SAVINGS ESTIMATE ── */}
              <div className="space-y-5 pt-2 border-t border-stone-100">
                
                <div className="flex items-center gap-2.5 pb-1">
                  <span className="w-6 h-6 rounded-full bg-[#8B1E1E] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="eyebrow text-xs sm:text-sm text-slate-900">Your Solar Savings Estimate</span>
                </div>

                {/* Hero Savings Result Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-emerald-50/40 to-white border border-emerald-200/90 relative overflow-hidden flex items-center justify-between shadow-xs">
                  <div className="space-y-1 z-10">
                    <span className="eyebrow text-[11px] text-emerald-800">
                      You Save
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="stat-figure text-3xl sm:text-4xl lg:text-[40px] text-emerald-700">
                        {formatINR(results.monthlySavings)}
                      </span>
                      <span className="text-sm font-bold text-emerald-600">/ month</span>
                    </div>
                    <p className="text-xs font-semibold text-emerald-900/80 pt-0.5">
                      That's {formatINR(annualSavings)} every year back in your pocket!
                    </p>
                  </div>

                  {/* Decorative House with Solar Roof Badge */}
                  <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center shrink-0 p-2">
                    <img
                      src="/images/calculator-badge-house.png"
                      alt="Solar House"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Compact Comparison: Current Monthly Bill vs With Solar */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="grid grid-cols-2 gap-3 items-center">
                    
                    {/* Current Bill */}
                    <div className="p-3 rounded-xl bg-white border border-stone-200/80 space-y-1 shadow-2xs">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                        Current Monthly Bill
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-rose-700 font-heading block">
                        {formatINR(monthlyBill)}
                      </span>
                      <div className="w-full h-1.5 bg-rose-500 rounded-full mt-1.5" />
                    </div>

                    {/* With Solar */}
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1 shadow-2xs">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                        With Solar
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-emerald-800 font-heading block">
                        ~{formatINR(billWithSolar)}
                      </span>
                      <div className="w-full h-1.5 bg-emerald-500 rounded-full mt-1.5" />
                    </div>

                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-700 font-medium px-1">
                    <span>Net Monthly Benefit:</span>
                    <span className="font-extrabold text-emerald-700 font-heading">
                      +{formatINR(results.monthlySavings)} / Month
                    </span>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onClaimEstimate({ pincode, monthlyBill })}
                    className="w-full btn-primary-maroon font-heading font-bold text-base py-4 rounded-2xl flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Get My Free Savings Estimate</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 font-medium text-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>No Obligation · 100% Free · Personalized 3D Site Survey</span>
                  </div>
                </div>

                {/* Secondary Specifications Cards */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Recommended System</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                      {results.systemSizeKw} kW Rooftop Solar Array
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-0.5">
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Effective Investment</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                      {formatINR(results.effectiveCost)} After Subsidy
                    </div>
                  </div>
                </div>

                {/* Expandable Breakdown Drawer Trigger */}
                <div className="pt-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setShowFullBreakdown(!showFullBreakdown)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1E1E] hover:underline cursor-pointer"
                  >
                    <span>{showFullBreakdown ? 'Hide full financial breakdown' : 'See full savings breakdown'}</span>
                    {showFullBreakdown ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Expanded Breakdown Card */}
                  {showFullBreakdown && (
                    <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs animate-in fade-in duration-300">
                      <div className="grid grid-cols-2 gap-2 pb-2 border-b border-stone-200/60">
                        <div>
                          <span className="text-stone-500 block">Gross System Cost:</span>
                          <span className="font-bold text-slate-900">{formatINR(results.estimatedCost)}</span>
                        </div>
                        <div>
                          <span className="text-emerald-700 block">PM Surya Ghar Subsidy:</span>
                          <span className="font-bold text-emerald-700">-{formatINR(results.centralSubsidy)}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pb-2 border-b border-stone-200/60">
                        <div>
                          <span className="text-stone-500 block">Daily Generation:</span>
                          <span className="font-bold text-slate-900">~{results.dailyGenerationUnits} kWh / day</span>
                        </div>
                        <div>
                          <span className="text-stone-500 block">Payback Period:</span>
                          <span className="font-bold text-slate-900">{results.paybackYears.toFixed(1)} Years</span>
                        </div>
                      </div>

                      <div className="pt-1 flex items-center justify-between text-slate-700">
                        <span className="font-semibold">25-Year Cumulative Savings:</span>
                        <span className="font-extrabold text-[#8B1E1E] text-sm font-heading">{formatINR(results.lifetimeSavings)}</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM TRUST TREATMENT (COMPACT & QUIET) ── */}
        <div className="pt-4 border-t border-stone-200/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-stone-600 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#8B1E1E]" />
              <span>Trusted by families & businesses</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-stone-600 text-xs font-semibold">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Tier-1 High Efficiency Cells</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-stone-600 text-xs font-semibold">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Expert In-House Installation</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-stone-600 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#8B1E1E]" />
              <span>25-Year Performance Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
