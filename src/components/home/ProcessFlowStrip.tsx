/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Ruler, FileCheck2, Hammer, Zap } from 'lucide-react';

export const ProcessFlowStrip: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Survey & Shade Analysis',
      desc: 'Drone LiDAR mapping and roof load audit to calculate your exact solar yield.',
      icon: Ruler,
    },
    {
      num: '02',
      title: 'Engineering & DISCOM Filings',
      desc: 'Custom CAD blueprints, single-line diagrams, and direct PM Surya Ghar subsidy application.',
      icon: FileCheck2,
    },
    {
      num: '03',
      title: 'Precision EPC Installation',
      desc: 'Certified technicians install Tier-1 modules with anodized aluminum rails and zero roof leaks.',
      icon: Hammer,
    },
    {
      num: '04',
      title: 'Net Metering & Telemetry',
      desc: 'Bi-directional MSEDCL meter commissioning and live smartphone generation telemetry.',
      icon: Zap,
    },
  ];

  return (
    <section className="w-full bg-white border-b border-stone-200/80 py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
                How It Works
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A transparent four-step journey.
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-sm">
            Zero guesswork. From paperwork to power generation, we manage everything end-to-end.
          </p>
        </div>

        {/* 4 Steps Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-5 rounded-xl bg-[#FAF9F6] border border-stone-200/70 flex flex-col justify-between space-y-4 shadow-2xs group hover:border-stone-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#8B1E1E]">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#8B1E1E] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
