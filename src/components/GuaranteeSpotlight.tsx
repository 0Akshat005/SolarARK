/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Zap, Award, Clock, ArrowRight, DollarSign } from 'lucide-react';

export const GuaranteeSpotlight: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section id="guarantee" className="py-20 bg-gradient-to-br from-[#120808] via-[#2A0E0E] to-[#120808] text-white relative overflow-hidden">
      {/* Background Accent Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B1E1E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-[#FFB020] text-xs font-bold border border-amber-400/30">
            <ShieldCheck className="w-4 h-4 text-[#FFB020]" />
            <span>Brand-Owned Performance Protection</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The SunSure Promise™ Guarantee
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Most installers hand over panels and disappear. SolarARK backs your investment with a legally binding 
            generation performance guarantee — if your system underproduces, we pay you cash for the difference.
          </p>
        </div>

        {/* 2x2 Feature-Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Feature 1: Deficit Cashback */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-700/80 hover:border-[#FFB020]/60 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-[#FFB020] flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#FFB020] uppercase tracking-wider font-heading">
                01. Financial Protection
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                Generation Shortfall Cash Reimbursement
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              We commit to an exact annual solar unit output in your purchase contract. If hardware failure or installation error causes generation to fall below target, SolarARK reimburses the shortfall directly into your bank account.
            </p>
          </div>

          {/* Feature 2: 25-Year Linear Output */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-700/80 hover:border-amber-500/60 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-heading">
                02. Cell Warranty
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                25-Year Linear Module Efficiency Guarantee
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Tier-1 N-Type TOPCon panels guaranteed to retain at least 87.4% of original rated power output at Year 25, outperforming standard Mono PERC degradation rates by over 12%.
            </p>
          </div>

          {/* Feature 3: 170 km/h Cyclone Structure */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-700/80 hover:border-emerald-500/60 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                03. Structural Integrity
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                170 km/h WindPro™ Structural Protection
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              IIT-tested hot-dip galvanized mounting structures engineered to withstand severe monsoon storms and coastal cyclones up to 170 km/h wind speeds with zero structural fatigue.
            </p>
          </div>

          {/* Feature 4: 24-Hr Service SLA */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-700/80 hover:border-purple-500/60 transition-all space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider font-heading">
                04. Rapid Maintenance SLA
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                24-Hour On-Site Technician Dispatch
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Automated AI app telemetry alerts our regional service hubs to any string voltage drop. Certified engineers are dispatched within 24 hours to rectify inverter or cabling issues at zero cost.
            </p>
          </div>

        </div>

        {/* Guarantee Call to Action */}
        <div className="bg-slate-900/90 p-8 rounded-3xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-lg font-bold font-heading text-white">
              Ready for Zero-Risk Solar Power?
            </div>
            <p className="text-xs text-slate-300">
              Get an official SunSure Promise™ generation quote for your roof location.
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Get My Free Savings Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
