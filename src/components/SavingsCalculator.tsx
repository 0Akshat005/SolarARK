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
  PiggyBank, 
  Award, 
  TrendingUp 
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

  // Calculate bill with solar
  const billWithSolar = Math.max(0, monthlyBill - results.monthlySavings);
  const annualSavings = results.monthlySavings * 12;

  const quickPresets = [3000, 6000, 8500, 12000, 18000];

  return (
    <section 
      id="calculator" 
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 bg-[#FAF9F6] border-b border-slate-200/70"
    >
      {/* ── 1. IMMERSIVE ATMOSPHERIC BACKGROUND WITH CINEMATIC DISSOLVE ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Upper-right atmospheric presence with rich photographic presence */}
        <div className="absolute top-0 right-0 w-full md:w-[75%] lg:w-[62%] h-[380px] sm:h-[480px] lg:h-[640px]">
          <img
            src="/calculator-solar-home.jpg"
            alt="Warm Atmospheric Residential Solar Roof"
            className="w-full h-full object-cover object-[75%_35%] opacity-85 transition-opacity duration-700"
          />
          
          {/* Subtle dark cinematic vignette on top-right to enrich the sky & solar depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAF9F6]/90" />
          
          {/* Multi-stop warm champagne & ivory dissolves to blend seamlessly into #FAF9F6 on the left */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-35% sm:via-45% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-full sm:h-[70%] lg:h-[45%] bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 via-35% to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F6] to-transparent" />
        </div>

        {/* Soft Ambient Warm Sunset Glow */}
        <div className="absolute top-[5%] right-[12%] w-[35%] h-[300px] bg-amber-500/15 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute top-[8%] right-[2%] w-[25%] h-[260px] bg-orange-400/15 blur-[80px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Heading — Compact & Proportional */}
        <div className="text-left max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
            Calculate Your Solar Savings <br className="hidden sm:inline" />
            &amp; Govt. Subsidy in <span className="text-[#8B1E1E]">Real Time</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl text-left">
            See how much you can save with rooftop solar, PM Surya Ghar subsidy, and 25-year returns.
          </p>
        </div>

        {/* Main Calculator Shell — Compact, Balanced 2-Column Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden p-5 sm:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ── LEFT COLUMN: Step 1 — Inputs (lg:col-span-5) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Step 1 Header */}
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <span className="w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="eyebrow text-xs sm:text-sm text-slate-900">Your Details</span>
              </div>

              {/* Pincode Field */}
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
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#8B1E1E] text-slate-900 text-sm font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all placeholder:text-slate-400"
                  />
                  {isValidPincode ? (
                    <span className="absolute right-2.5 top-2 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Serviceable
                    </span>
                  ) : (
                    pincode.length > 0 && (
                      <span className="absolute right-3 top-2.5 text-[11px] font-medium text-slate-400">
                        {6 - pincode.length} digits left
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Monthly Electricity Bill Field */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="bill-slider" className="block text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>Average monthly electricity bill</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </label>
                </div>

                {/* Big ₹ Amount Display */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                    {formatINR(monthlyBill)}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">/ month</span>
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
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#8B1E1E] focus:outline-none"
                    aria-label="Monthly electricity bill range slider"
                  />

                  <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                    <span>₹1,000</span>
                    <span>₹7,500</span>
                    <span>₹15,000</span>
                    <span>₹25,000+</span>
                  </div>
                </div>

                {/* Quick Select Presets */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick select</span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickPresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setMonthlyBill(preset)}
                        className={`text-xs px-3 py-1.5 rounded-xl font-bold border transition-all duration-150 active:scale-95 cursor-pointer ${
                          monthlyBill === preset
                            ? 'btn-primary-maroon text-white border-transparent shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {formatINR(preset)}{preset >= 18000 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Privacy & Reassurance Box */}
            <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100/80 flex items-start gap-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">We never share your details.</span>
                <span className="text-slate-500 font-medium text-left">Your information is 100% secure and used only for calculation.</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Step 2 — Results & Action (lg:col-span-7) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
            <div className="space-y-5">
              
              {/* Step 2 Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="eyebrow text-xs sm:text-sm text-slate-900">Your Solar Savings Estimate</span>
                </div>
              </div>

              {/* High-Impact Hero Savings Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-emerald-50/30 to-white border border-emerald-100 relative overflow-hidden flex items-center justify-between shadow-xs">
                <div className="space-y-1 z-10">
                  <span className="eyebrow text-[11px] text-emerald-800">
                    You Save
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="stat-figure text-3xl sm:text-4xl text-emerald-700">
                      {formatINR(results.monthlySavings)}
                    </span>
                    <span className="text-sm font-bold text-emerald-600">/ month</span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-900/80 pt-0.5">
                    That's {formatINR(annualSavings)} every year!
                  </p>
                </div>

                {/* Decorative House with Solar Roof Icon Badge */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/90 border border-emerald-100 shadow-sm flex items-center justify-center shrink-0 p-2">
                  <img
                    src="/images/calculator-badge-house.png"
                    alt="Solar House"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <Sun className="w-8 h-8 text-amber-500 hidden" />
                </div>

                {/* Soft ambient background blur */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Before & After Comparison Cards */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="grid grid-cols-2 gap-3 items-center">
                  
                  {/* Current Bill */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Current Monthly Bill</span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 font-heading block">
                      {formatINR(monthlyBill)}
                    </span>
                    <div className="w-full h-1 bg-red-400 rounded-full mt-1.5" />
                  </div>

                  {/* With Solar */}
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1 shadow-2xs">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">With Solar</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-800 font-heading block">
                      ~{formatINR(billWithSolar)}
                    </span>
                    <div className="w-full h-1 bg-emerald-500 rounded-full mt-1.5" />
                  </div>

                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 font-medium px-1">
                  <span>Net Monthly Benefit:</span>
                  <span className="font-extrabold text-emerald-700">+{formatINR(results.monthlySavings)} Every Month</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => onClaimEstimate({ pincode, monthlyBill })}
                  className="w-full btn-primary-maroon font-heading font-bold text-sm sm:text-base py-4 rounded-2xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get My Free Savings Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No Obligation. 100% Free. Personalized 3D Site Survey.</span>
                </div>
              </div>

              {/* Technical Specifications Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-0.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Recommended System</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    {results.systemSizeKw} kW Rooftop Solar Array
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-0.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Effective Investment</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    {formatINR(results.effectiveCost)} After Subsidy
                  </div>
                </div>
              </div>

              {/* Expandable Breakdown Drawer Trigger */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowFullBreakdown(!showFullBreakdown)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#8B1E1E] hover:underline cursor-pointer"
                >
                  <span>{showFullBreakdown ? 'Hide full financial breakdown' : 'See full savings breakdown'}</span>
                  {showFullBreakdown ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Expanded Detailed Breakdown Card */}
                {showFullBreakdown && (
                  <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs animate-in fade-in duration-300">
                    <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200/60">
                      <div>
                        <span className="text-slate-500 block">Gross System Cost:</span>
                        <span className="font-bold text-slate-900">{formatINR(results.estimatedCost)}</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 block">Govt. PM Surya Ghar Subsidy:</span>
                        <span className="font-bold text-emerald-700">-{formatINR(results.centralSubsidy)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200/60">
                      <div>
                        <span className="text-slate-500 block">Estimated Daily Units:</span>
                        <span className="font-bold text-slate-900">~{results.dailyGenerationUnits} kWh / day</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Payback Period:</span>
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
    </section>
  );
};
