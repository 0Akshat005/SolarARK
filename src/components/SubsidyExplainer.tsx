/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SUBSIDY_TIERS } from '../data/solarData';
import { Landmark, CheckCircle, Info, ArrowRight } from 'lucide-react';

export const SubsidyExplainer: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
            <Landmark className="w-4 h-4 text-[#10B981]" />
            <span>PM Surya Ghar Muft Bijli Yojana Official Subsidy</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Government Subsidy Tiers & Direct Bank Credit
          </h2>

          <p className="text-base text-slate-600">
            The Government of India provides central financial assistance directly to residential homeowners. 
            SolarARK handles 100% of the portal registration, DISCOM inspection, and subsidy claim.
          </p>
        </div>

        {/* Real Semantic HTML Table for Subsidy Breakdown */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-elevation-1 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-900 text-white font-heading text-xs uppercase tracking-wider">
                  <th scope="col" className="p-4 sm:p-5 font-semibold">System Capacity</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-[#FFB020]">Central Govt Subsidy</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold">Typical Net Investment</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold">Ideal Home Usage</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {SUBSIDY_TIERS.map((tier, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-blue-50/50 transition-colors ${
                      idx === 2 ? 'bg-amber-50/40 font-semibold' : ''
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-semibold text-slate-900 flex items-center gap-2">
                      <span>{tier.systemSize}</span>
                      {idx === 2 && (
                        <span className="text-[10px] font-semibold text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </td>

                    <td className="p-4 sm:p-5 font-bold text-[#10B981] text-base">
                      {tier.maxSubsidy}
                    </td>

                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      {tier.typicalNetCost}
                    </td>

                    <td className="p-4 sm:p-5 text-slate-600 text-xs">
                      {tier.idealFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-100/80 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#8B1E1E] flex-shrink-0" />
              <span>
                Subsidy applies directly to individual residential houses with valid DISCOM electricity meters.
              </span>
            </div>

            <button
              onClick={onCtaClick}
              className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Check My Subsidy Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Eligibility Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-heading">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              <span>1. Valid Residential Meter</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Must have an active residential DISCOM electricity connection registered in the homeowner's name.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-heading">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              <span>2. Suitable Unshaded Roof</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Minimum ~200 sq. ft. shade-free concrete RCC slab, sheet, or tiled roof with structural integrity.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-heading">
              <CheckCircle className="w-4 h-4 text-[#10B981]" />
              <span>3. Bank Account Linkage</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aadhaar-linked bank account for direct DBT central subsidy credit within 30 days of net-metering.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
