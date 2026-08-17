/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Wind, Wrench, Users, CheckCircle2 } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Financial Trust',
      badge: 'SunSure Guarantee™',
      subtitle: 'Deficit Generation Cash Back',
      description: 'We guarantee exact monthly electricity kWh yields in writing. If your panels underperform due to any system glitch, SolarARK reimburses the financial shortfall cash directly.',
      points: ['Guaranteed kWh yield commitment', 'Direct bank reimbursement for shortfalls', 'Zero fine print or hidden terms'],
      accentColor: 'text-amber-500 bg-amber-50 border-amber-200',
    },
    {
      icon: Wind,
      title: 'Structural Trust',
      badge: 'WindPro 170 km/h',
      subtitle: 'Cyclone-Rated & Zero Leakage',
      description: 'Engineered at top technical institutes to withstand 170 km/h coastal cyclone winds. Non-invasive chemical clamps protect roof slab integrity with zero water seepage.',
      points: ['80-micron Hot-Dip Galvanized steel', 'Zero roof slab penetration clamps', '25-Year Rust & Structural Warranty'],
      accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: Wrench,
      title: 'Service Trust',
      badge: '5-Yr Comprehensive AMC',
      subtitle: 'Proactive Cleaning & Maintenance',
      description: 'Includes 5 years of complimentary annual maintenance. Scheduled technician visits, automated water-spray cleaning attachments, and 24-hour rapid fault resolution.',
      points: ['Scheduled expert deep panel cleans', '24-hour on-site engineering dispatch', '5-Year zero-cost replacement warranty'],
      accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Users,
      title: 'Social Trust',
      badge: '15,000+ Roofs Solarized',
      subtitle: '4.8★ Google Verified Rating',
      description: 'Backed by over 15,000 happy home solar installations across 30+ Indian cities. Real homeowners, real verified power savings, and zero middlemen.',
      points: ['15,000+ verified Indian installations', '4.8★ rating on Google Reviews', 'Direct in-house team — no subcontractors'],
      accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-semibold">
            <Shield className="w-4 h-4" />
            <span>Built on Four Core Pillars of Excellence</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Indian Homeowners Trust SolarARK Over Generic Installers
          </h2>

          <p className="text-base text-slate-600">
            A 25-year rooftop solar investment requires long-term commitment. 
            We eliminate risk at every level — financial, structural, operational, and social.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 hover:border-[#8B1E1E]/40 shadow-sm hover:shadow-elevation-2 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${p.accentColor}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-heading">
                      {p.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#8B1E1E] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{p.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  {p.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
