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

  const filterCities = ['All', 'Amravati', 'Pune', 'Chh. Sambhajinagar', 'Wardha'];

  const filteredProjects = selectedCity === 'All'
    ? PROJECT_CASE_STUDIES
    : PROJECT_CASE_STUDIES.filter(p => p.city === selectedCity);

  return (
    <section id="projects" className="py-16 bg-[#FCFAF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Powering 5,000+ Happy Customers Across Maharashtra</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Explore Verified SolarArk Rooftop Projects
          </h2>

          <p className="text-base text-stone-600">
            See actual installation results, net monthly bill reduction, and structural engineering choices 
            from homeowners, housing societies, and businesses.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterCities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCity === city
                  ? 'bg-[#8B1E1E] text-white shadow-md shadow-[#8B1E1E]/25'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
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
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {proj.image && (
                <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                    <span className="text-xs font-bold font-heading flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-300" />
                      <span>{proj.city}, {proj.state}</span>
                    </span>
                    <span className="text-[10px] font-bold bg-[#8B1E1E] px-2.5 py-0.5 rounded-md text-white">
                      {proj.systemSizeKw} kW Array
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-4">
                  {/* Header Strip */}
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-xs font-bold text-stone-600 uppercase tracking-wider font-heading flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-500" /> {proj.city}, {proj.state}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-heading mt-0.5">
                        {proj.homeownerName}
                      </h3>
                    </div>

                    <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                      {proj.category || 'Solar Rooftop'}
                    </span>
                  </div>

                {/* Before vs After Bill Impact */}
                <div className="grid grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <div>
                    <span className="text-[11px] text-stone-500 font-medium">Monthly Bill Before</span>
                    <div className="text-base font-bold text-stone-400 line-through">
                      {formatINR(proj.monthlyBillBefore)}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-stone-500 font-medium">Monthly Bill After Solar</span>
                    <div className="text-xl font-bold text-emerald-600 font-heading">
                      {formatINR(proj.monthlyBillAfter)}
                    </div>
                  </div>
                </div>

                {/* Technical Meta Bullets */}
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{proj.roofType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                    <span>Setup in {proj.installationDays} Days</span>
                  </div>
                </div>
              </div>

              {/* Homeowner Verdict */}
              <p className="text-xs text-stone-600 italic bg-amber-50/50 p-3 rounded-xl border border-amber-100/60 leading-relaxed">
                "{proj.verdict}"
              </p>
            </div>

              <button
                onClick={onCtaClick}
                className="w-full mt-2 py-3 bg-stone-100 hover:bg-[#8B1E1E] text-stone-800 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Similar Proposal for My Roof</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
            Want to see solar installations near your locality?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
            Our local field engineers can arrange a neighbor site visit or share a localized generation report for your exact pincode.
          </p>
          <button
            onClick={onCtaClick}
            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Local Installation Report</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
