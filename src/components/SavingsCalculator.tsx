/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CalculatorInputs, CalculatorResults } from '../types';
import { calculateSolarSavings, formatINR } from '../utils/calculator';
import { Calculator, Zap, ShieldCheck, TreePine, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SavingsCalculatorProps {
  onClaimEstimate: (data: { pincode: string; monthlyBill: number }) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onClaimEstimate }) => {
  const [pincode, setPincode] = useState<string>('560034'); // Default Bengaluru pincode
  const [monthlyBill, setMonthlyBill] = useState<number>(8500); // Default ₹8,500/mo

  const results: CalculatorResults = useMemo(() => {
    return calculateSolarSavings({ pincode, monthlyBill });
  }, [pincode, monthlyBill]);

  const isValidPincode = pincode.length === 6 && /^\d+$/.test(pincode);

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D5FE0] text-xs font-semibold">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Engine</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Solar Savings & Govt. Subsidy in Real Time
          </h2>

          <p className="text-base text-slate-600">
            Slide your average monthly electricity bill to see your custom recommended system size, 
            PM Surya Ghar central subsidy eligibility, and 25-year return on investment.
          </p>
        </div>

        {/* Main Calculator Card Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B1730] text-white p-6 sm:p-10 rounded-3xl shadow-elevation-3 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-[#FFB020] uppercase tracking-wider font-heading">
                  Step 1: Your Energy Profile
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-1">Input Your Monthly Power Bill</h3>
              </div>

              {/* Pincode Field */}
              <div className="space-y-2">
                <label htmlFor="pincode-input" className="block text-xs font-semibold text-slate-300">
                  Enter Your 6-Digit Pincode
                </label>
                <div className="relative">
                  <input
                    id="pincode-input"
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 560034"
                    className="w-full bg-slate-800/90 border border-slate-700 focus:border-[#1D5FE0] text-white text-base font-medium px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/50 transition-all"
                  />
                  {isValidPincode && (
                    <span className="absolute right-3 top-3 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Serviceable
                    </span>
                  )}
                </div>
              </div>

              {/* Monthly Bill Range Slider */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="bill-slider" className="text-xs font-semibold text-slate-300">
                    Average Monthly Bill (₹)
                  </label>
                  <span className="text-2xl font-extrabold font-heading text-[#FFB020]">
                    {formatINR(monthlyBill)} <span className="text-xs text-slate-400 font-normal">/ month</span>
                  </span>
                </div>

                <input
                  id="bill-slider"
                  type="range"
                  min={1200}
                  max={35000}
                  step={500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#1D5FE0]"
                  aria-label="Monthly electricity bill range slider"
                />

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹1,200/mo</span>
                  <span>₹15,000/mo</span>
                  <span>₹35,000+/mo</span>
                </div>
              </div>

              {/* Quick Select Preset Buttons */}
              <div className="space-y-2">
                <span className="text-[11px] font-medium text-slate-400">Popular Quick Presets:</span>
                <div className="flex flex-wrap gap-2">
                  {[3000, 6000, 10000, 18000].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setMonthlyBill(preset)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        monthlyBill === preset
                          ? 'bg-[#1D5FE0] text-white border-[#1D5FE0] font-bold'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      {formatINR(preset)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Formula Documentation Disclaimer */}
            <div className="text-[11px] text-slate-400 bg-slate-800/50 p-3 rounded-xl border border-slate-800 leading-relaxed">
              *Calculated using 120 units/kW/month average Indian yield, DISCOM tariff benchmark ₹8.50/unit, and central PM Surya Ghar scheme subsidy rates capped at ₹78,000.
            </div>
          </div>

          {/* Right Column: Real-Time Computed Outputs */}
          <div className="lg:col-span-7 bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Recommended System Architecture
                  </span>
                  <div className="text-2xl font-extrabold font-heading text-white flex items-center gap-2 mt-1">
                    <span>{results.systemSizeKw} kW Rooftop Array</span>
                    <span className="text-xs font-normal text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/80">
                      ~90% Bill Offset
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400">Payback Horizon</span>
                  <div className="text-lg font-bold text-[#FFB020]">{results.paybackYears} Years</div>
                </div>
              </div>

              {/* Output Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Monthly Savings */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 font-medium">Est. Monthly Savings</span>
                  <div className="text-2xl font-extrabold text-[#10B981] font-heading mt-1">
                    {formatINR(results.monthlySavings)} <span className="text-xs text-slate-400 font-normal">/ mo</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Reduces current bill down to ~{formatINR(monthlyBill - results.monthlySavings)}</p>
                </div>

                {/* PM Surya Ghar Subsidy */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 font-medium">PM Surya Ghar Subsidy</span>
                  <div className="text-2xl font-extrabold text-[#1D5FE0] font-heading mt-1">
                    {formatINR(results.subsidyAmount)}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Direct DISCOM/Bank account transfer</p>
                </div>

                {/* Net Effective Cost */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 font-medium">Effective Net Investment</span>
                  <div className="text-xl font-bold text-white font-heading mt-1">
                    {formatINR(results.effectiveNetCost)}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Full System Cost: <span className="line-through">{formatINR(results.estimatedCostBeforeSubsidy)}</span>
                  </p>
                </div>

                {/* 25-Year Cumulative Savings */}
                <div className="bg-gradient-to-br from-[#1D5FE0]/20 to-[#0F2E6E]/40 p-4 rounded-xl border border-[#1D5FE0]/40">
                  <span className="text-xs text-sky-300 font-semibold">25-Yr Lifetime Savings</span>
                  <div className="text-2xl font-extrabold text-[#FFB020] font-heading mt-1">
                    {formatINR(results.twentyFiveYearSavings)}
                  </div>
                  <p className="text-[11px] text-sky-200 mt-1">Includes 6% annual grid tariff inflation</p>
                </div>

              </div>

              {/* Environmental Impact Pill Strip */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-[#10B981]" />
                  <span>Equivalent to <strong>{results.treesEquivalent} Trees</strong> planted / year</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span>Offsets <strong>{results.co2OffsetTonnes} Tonnes</strong> CO₂ / year</span>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <button
                onClick={() => onClaimEstimate({ pincode, monthlyBill })}
                className="w-full bg-[#1D5FE0] hover:bg-[#0F2E6E] text-white text-base font-bold py-4 rounded-xl shadow-lg shadow-[#1D5FE0]/30 hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
              >
                <span>Get My Free Savings Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
