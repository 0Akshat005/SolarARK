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
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onClaimEstimate }) => {
  const [pincode, setPincode] = useState<string>('560034'); // Default Bengaluru pincode
  const [monthlyBill, setMonthlyBill] = useState<number>(8500); // Default ₹8,500/mo
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
      className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#FAF9F6] border-b border-slate-200/70"
    >
      {/* 1. ATMOSPHERIC BACKGROUND PHOTOGRAPH & MULTI-LAYER WARM DISSOLVE LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Upper-right atmospheric presence on desktop using EXACT attached photograph */}
        <div className="absolute top-0 right-0 w-full md:w-[75%] lg:w-[65%] h-[320px] sm:h-[420px] lg:h-[580px]">
          <img
            src="/calculator-solar-home.jpg"
            alt="Warm Atmospheric Residential Solar Roof"
            className="w-full h-full object-cover object-[80%_30%] opacity-[0.38] sm:opacity-[0.48] transition-opacity duration-700"
          />
          
          {/* Multi-stop warm champagne & ivory dissolves to blend seamlessly into #FAF9F6 background (no boundaries) */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[68%] lg:w-[58%] bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-35% sm:via-45% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-full sm:h-[75%] lg:h-[55%] bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/90 via-40% to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF9F6] to-transparent" />
        </div>

        {/* Soft Ambient Warm Haze & Solar Glow */}
        <div className="absolute top-[3%] right-[10%] w-[38%] h-[280px] bg-amber-100/35 blur-[100px] rounded-full mix-blend-overlay" />
        <div className="absolute top-[6%] right-[2%] w-[28%] h-[280px] bg-amber-50/40 blur-[90px] rounded-full mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Heading — Compact & Proportional */}
        <div className="text-left max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
            Calculate Your Solar Savings <br className="hidden sm:inline" />
            &amp; Govt. Subsidy in <span className="text-[#1D5FE0]">Real Time</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
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
                <span className="w-5 h-5 rounded-full bg-[#1D5FE0] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight uppercase">Your Details</span>
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
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#1D5FE0] text-slate-900 text-sm font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/20 transition-all placeholder:text-slate-400"
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
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D5FE0] focus:outline-none"
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
                        className={`text-xs px-3 py-1.5 rounded-xl font-bold border transition-all duration-150 active:scale-95 ${
                          monthlyBill === preset
                            ? 'bg-[#1D5FE0] text-white border-[#1D5FE0] shadow-xs'
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
            <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex items-start gap-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">We never share your details.</span>
                <span className="text-slate-500 font-medium">Your information is 100% secure and used only for calculation.</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Step 2 — Results & Action (lg:col-span-7) ── */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-5">
            
            <div className="space-y-4">
              
              {/* Step 2 Header */}
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200/80">
                <span className="w-5 h-5 rounded-full bg-[#1D5FE0] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#1D5FE0] tracking-tight uppercase">Your Solar Savings Estimate</span>
              </div>

              {/* PRIORITY 1: Primary Savings Hero Callout */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
                <div className="space-y-0.5 z-10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    You save
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-emerald-600 tracking-tight transition-all duration-300">
                    {formatINR(results.monthlySavings)}
                    <span className="text-base sm:text-lg font-bold text-slate-500 tracking-normal ml-1">/ month</span>
                  </div>
                  <p className="text-xs font-bold text-emerald-800 pt-0.5">
                    That's {formatINR(annualSavings)} every year!
                  </p>
                </div>

                {/* Integrated Standalone Solar House Illustration */}
                <div className="hidden sm:block shrink-0 max-w-[110px] opacity-95">
                  <img
                    src="/solar-house-illustration.png"
                    alt="SolarARK Residential Solar Home"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* PRIORITY 2: Monthly Bill Transformation Component */}
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 items-center text-center sm:text-left">
                  
                  {/* Current Monthly Bill */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Current Monthly Bill</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#DC2626] font-heading block">
                      {formatINR(monthlyBill)}
                    </span>
                    <div className="w-full h-1.5 bg-[#DC2626] rounded-full mt-1" />
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden sm:flex items-center justify-center text-slate-400">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* With Solar */}
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">With Solar</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-600 font-heading block">
                      ~{formatINR(billWithSolar)}
                    </span>
                    <div className="w-full h-1.5 bg-emerald-500 rounded-full mt-1" />
                  </div>
                </div>

                {/* Net Benefit Banner */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-600">Net Monthly Benefit:</span>
                  <span className="font-black text-emerald-600">{formatINR(results.monthlySavings)} Every Month</span>
                </div>
              </div>

              {/* PRIORITY 3: Primary Conversion CTA (Immediately after primary result & bill comparison!) */}
              <div className="pt-1 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onClaimEstimate({ pincode, monthlyBill })}
                  className="w-full sm:flex-1 bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-sm sm:text-base font-bold py-3.5 px-5 rounded-2xl shadow-md shadow-[#1D5FE0]/20 hover:shadow-lg hover:shadow-[#1D5FE0]/25 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <span>Get My Free Savings Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Obligation. 100% Free.</span>
                </div>
              </div>

              {/* PRIORITY 4: Initially Visible Key System Metrics (ONLY 2 METRICS VISIBLE INITIALLY) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                
                {/* 1. Recommended System */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D5FE0] flex items-center justify-center shrink-0">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Recommended System</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">{results.systemSizeKw} kW Rooftop Solar Array</span>
                  </div>
                </div>

                {/* 2. Effective Investment */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <PiggyBank className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Effective Investment</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">{formatINR(results.effectiveNetCost)} After Subsidy</span>
                  </div>
                </div>

              </div>

              {/* PRIORITY 5: Progressive Disclosure ("See full savings breakdown v") */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowFullBreakdown(!showFullBreakdown)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1D5FE0] hover:text-[#1753C8] transition-colors focus:outline-none py-0.5 group"
                >
                  <span>See full savings breakdown</span>
                  {showFullBreakdown ? (
                    <ChevronUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                  )}
                </button>

                {showFullBreakdown && (
                  <div className="mt-2.5 p-3.5 bg-white rounded-2xl border border-slate-200/80 space-y-2 text-xs text-slate-600 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="font-medium flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-purple-600" /> PM Surya Ghar Subsidy
                      </span>
                      <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200/60">
                        {formatINR(results.subsidyAmount)} (Direct Bank Transfer)
                      </span>
                    </div>
                    
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="font-medium flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> Payback Period
                      </span>
                      <span className="font-bold text-slate-900">{results.paybackYears} Years On Investment</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="font-medium flex items-center gap-1.5">
                        <PiggyBank className="w-3.5 h-3.5 text-[#1D5FE0]" /> 25-Year Cumulative Savings
                      </span>
                      <span className="font-bold text-emerald-600">{formatINR(results.twentyFiveYearSavings)}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="font-medium flex items-center gap-1.5">
                        <Leaf className="w-3.5 h-3.5 text-teal-600" /> Environmental Impact
                      </span>
                      <span className="font-bold text-slate-900">
                        {results.co2OffsetTonnes} Tonnes CO₂/yr (~{results.treesEquivalent} Trees)
                      </span>
                    </div>

                    <div className="flex justify-between py-1">
                      <span className="font-medium">System Cost (Before Subsidy)</span>
                      <span className="font-bold text-slate-900">{formatINR(results.estimatedCostBeforeSubsidy)}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Disclaimer Footnote */}
        <div className="text-center text-[10px] sm:text-[11px] text-slate-400 max-w-3xl mx-auto leading-relaxed">
          * Calculations use 120 units/kW/month average Indian generation yield, DISCOM tariff benchmark ₹8.50/unit, and central PM Surya Ghar scheme subsidy rates capped at ₹78,000.
        </div>

      </div>
    </section>
  );
};
