/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolarARK — Solar Savings Results Component
 * ------------------------------------------
 * Clean, trustworthy results UI that feels human-designed and aligned with
 * the existing calculator, without copying the competitor reference.
 */

import React from 'react';
import { CalculatorResults } from '../types';
import {
  Sun,
  Ruler,
  AlertTriangle,
  IndianRupee,
  ShieldCheck,
  Star,
  Leaf,
  TreePine,
  Route,
} from 'lucide-react';

export interface SavingsResultsProps {
  /**
   * Core calculator outputs
   */
  results: CalculatorResults;

  /**
   * Roof area in sq. ft. (optional, calculated separately)
   */
  roofAreaSqft?: number;

  /**
   * Whether the user likely has insufficient roof area
   */
  hasInsufficientRoof?: boolean;

  /**
   * Callback for when the user clicks the "Talk to an expert" CTA
   */
  onTalkToExpert?: () => void;

  /**
   * Callback for when the user wants help with limited roof area
   */
  onRoofHelpClick?: () => void;

  /**
   * Optional pincode + monthly bill copy for context line
   */
  pincode?: string;
  monthlyBill?: number;
}

const formatINRCompact = (value: number): string => {
  if (!Number.isFinite(value)) return '—';

  // Use Indian numbering style for readability
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (value: number): string => {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 1,
  }).format(value);
};

export const SavingsResults: React.FC<SavingsResultsProps> = ({
  results,
  roofAreaSqft,
  hasInsufficientRoof,
  onTalkToExpert,
  onRoofHelpClick,
  pincode,
  monthlyBill,
}) => {
  const { systemSizeKw } = results;

  // Simple roof area hint if not provided externally
  const computedRoofArea = roofAreaSqft ?? systemSizeKw * 90; // ~90 sq. ft. per kW, typical Indian rooftop

  const contextLine = pincode && monthlyBill
    ? `Based on ${formatINRCompact(monthlyBill)}/month bill in pincode ${pincode}`
    : undefined;

  return (
    <section
      aria-label="Solar savings results"
      className="mt-8 sm:mt-10 lg:mt-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header with subtle context and trust badge */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="eyebrow text-[11px] text-slate-500">Your Solar Savings Snapshot</p>
            <h2 className="hero-display text-xl sm:text-2xl lg:text-[26px] text-slate-900 mt-1">
              Clear numbers. Long-term confidence.
            </h2>
            {contextLine && (
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{contextLine}</p>
            )}
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass-panel shadow-elevation-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-900">
                25-year performance assurance*
              </span>
              <span className="text-[10px] text-slate-500 flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400" />
                <span>Backed by SolarARK installation standards</span>
              </span>
            </div>
          </div>
        </header>

        {/* Main card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Required System Size card */}
          <article className="glass-panel rounded-2xl p-4 sm:p-5 shadow-elevation-2 flex flex-col gap-3">
            <header className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Sun className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="eyebrow text-[10px] text-slate-500">Required System Size</p>
                  <p className="text-xs text-slate-500">To comfortably offset your current usage</p>
                </div>
              </div>
            </header>

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-baseline gap-1">
                <span className="stat-figure text-2xl sm:text-3xl text-slate-900">
                  {formatNumber(systemSizeKw)}
                </span>
                <span className="text-xs sm:text-sm text-slate-500">kW rooftop solar</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center">
                    <Ruler className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-700">Approx. roof area</p>
                    <p className="stat-figure text-sm text-slate-900">
                      {formatNumber(computedRoofArea)} sq. ft.
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      Final design may vary with roof shape and panel layout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-700">Less roof space?</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      We can explore higher-efficiency modules or staggered deployment.
                    </p>
                    {hasInsufficientRoof && (
                      <button
                        type="button"
                        onClick={onRoofHelpClick}
                        className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-brand-maroon hover:underline"
                      >
                        <span>Ask an engineer to review your roof</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Your Solar Savings card */}
          <article className="glass-panel rounded-2xl p-4 sm:p-5 shadow-elevation-2 flex flex-col gap-3">
            <header className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <IndianRupee className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="eyebrow text-[10px] text-slate-500">Your Solar Savings</p>
                  <p className="text-xs text-slate-500">Indicative, based on current tariff and usage</p>
                </div>
              </div>
            </header>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <p className="text-[11px] font-semibold text-slate-700">Monthly*</p>
                <p className="stat-figure text-lg sm:text-xl text-emerald-700 mt-1">
                  {formatINRCompact(results.monthlySavings)}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">Typical bill reduction after installation.</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-700">Yearly*</p>
                <p className="stat-figure text-lg sm:text-xl text-slate-900 mt-1">
                  {formatINRCompact(results.annualSavings)}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">Direct cashflow benefit every year.</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-700">25-year outlook*</p>
                <p className="stat-figure text-lg sm:text-xl text-slate-900 mt-1">
                  {formatINRCompact(results.twentyFiveYearSavings)}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Includes tariff escalation and typical system performance.
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-slate-600">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>SolarARK installation quality guarantee</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-50 text-slate-700">
                  <Star className="w-3 h-3 text-amber-400" />
                  <span>Designed for long-term Rooftop Solar performance</span>
                </span>
              </div>

              {onTalkToExpert && (
                <button
                  type="button"
                  onClick={onTalkToExpert}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm btn-primary-maroon"
                >
                  <span className="btn-label">Discuss detailed quote & financing options</span>
                </button>
              )}
            </div>

            <p className="text-[10px] text-slate-500 mt-2">
              *Savings shown are indicative and assume consistent consumption, typical irradiance for your region,
              and standard rooftop installation. Final proposal will include a detailed generation and payback study.
            </p>
          </article>

          {/* Environmental Impact card */}
          <article className="glass-panel rounded-2xl p-4 sm:p-5 shadow-elevation-2 flex flex-col gap-3">
            <header className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="eyebrow text-[10px] text-slate-500">Environmental Impact</p>
                  <p className="text-xs text-slate-500">Annual benefits of your solar setup</p>
                </div>
              </div>
            </header>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <p className="text-[11px] font-semibold text-slate-700">CO₂ mitigated</p>
                <p className="stat-figure text-lg sm:text-xl text-slate-900 mt-1">
                  {formatNumber(results.co2OffsetTonnes * 1000)} kg
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Compared to conventional grid electricity.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-700">Trees planted</p>
                <p className="stat-figure text-lg sm:text-xl text-slate-900 mt-1">
                  {formatNumber(results.treesEquivalent)}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Equivalent full-grown trees absorbing the same CO₂.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-700">Distance equivalent</p>
                <p className="stat-figure text-lg sm:text-xl text-slate-900 mt-1 flex items-baseline gap-1">
                  <Route className="w-4 h-4 text-slate-500" />
                  <span>{formatNumber(results.co2OffsetTonnes * 6000)} kms</span>
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Approximate petrol car kilometres avoided in a year.
                </p>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 mt-2">
              Environmental equivalents are based on widely used conversion benchmarks and are meant to help you
              visualise impact; they are not official carbon credits.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
