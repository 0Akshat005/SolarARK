/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECT_CASE_STUDIES } from '../data/solarData';
import { MapPin, Zap, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { formatINR } from '../utils/calculator';

export const ProjectsGrid: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const filterCities = ['All', 'Bengaluru', 'Pune', 'Ahmedabad', 'Chennai'];

  const filteredProjects = selectedCity === 'All'
    ? PROJECT_CASE_STUDIES
    : PROJECT_CASE_STUDIES.filter(p => p.city === selectedCity);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D5FE0] text-xs font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Real Homes across 30+ Indian Cities</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Verified SolarARK Rooftop Case Studies
          </h2>

          <p className="text-base text-slate-600">
            See actual installation results, net monthly bill reduction, and structural choices 
            from homeowners near your neighborhood.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterCities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCity === city
                  ? 'bg-[#1D5FE0] text-white shadow-md shadow-[#1D5FE0]/25'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-elevation-1 hover:shadow-elevation-2 transition-all p-6 sm:p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {proj.city}, {proj.state}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                      {proj.homeownerName}’s Residence
                    </h3>
                  </div>

                  <span className="text-xs font-extrabold text-[#FFB020] bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                    {proj.systemSizeKw} kW Array
                  </span>
                </div>

                {/* Before vs After Bill Impact */}
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium">Monthly Bill Before</span>
                    <div className="text-base font-bold text-slate-500 line-through">
                      {formatINR(proj.monthlyBillBefore)}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-500 font-medium">Monthly Bill After Solar</span>
                    <div className="text-xl font-extrabold text-[#10B981] font-heading">
                      {formatINR(proj.monthlyBillAfter)}
                    </div>
                  </div>
                </div>

                {/* Technical Meta Bullets */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400">Roof Type:</span> <br />
                    <strong className="text-slate-800">{proj.roofType}</strong>
                  </div>

                  <div>
                    <span className="text-slate-400">Install Time:</span> <br />
                    <strong className="text-slate-800">{proj.installationDays} Days</strong>
                  </div>
                </div>

                {/* Verdict Quote */}
                <blockquote className="text-xs text-slate-700 italic bg-blue-50/60 p-3.5 rounded-xl border-l-4 border-[#1D5FE0]">
                  "{proj.verdict}"
                </blockquote>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Verified Installation
                </span>

                <button
                  onClick={onCtaClick}
                  className="text-xs font-bold text-[#1D5FE0] hover:text-[#0F2E6E] flex items-center gap-1 transition-colors"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
