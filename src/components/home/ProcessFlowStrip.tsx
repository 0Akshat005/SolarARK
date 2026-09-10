/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * ProcessFlowStrip — Procedural Architectural Linear Rail
 * Rebuilt strictly to adhere to revamp.md:
 * - NO floating rounded cards or repetitive boxes.
 * - Clean open procedural columns separated by thin 1px vertical hairline dividers.
 * - Open, architectural, restrained, and engineered.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessFlowStripProps {
  onCtaClick?: () => void;
}

export const ProcessFlowStrip: React.FC<ProcessFlowStripProps> = ({ onCtaClick }) => {
  const steps = [
    {
      num: '01',
      title: 'Survey & Shade Analysis',
      desc: '3D drone LiDAR mapping and structural roof load audits to calculate exact solar yield and irradiance.',
    },
    {
      num: '02',
      title: 'Engineering & DISCOM Filings',
      desc: 'Custom CAD electrical schematics, single-line diagrams, and direct PM Surya Ghar subsidy processing.',
    },
    {
      num: '03',
      title: 'Precision EPC Installation',
      desc: 'Certified in-house technicians install Tier-1 modules with anodized aluminum racking and zero roof leaks.',
    },
    {
      num: '04',
      title: 'Net-Metering & Telemetry',
      desc: 'Bi-directional MSEDCL meter commissioning and live 24/7 smartphone generation monitoring.',
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] border-b border-[#E6E3DD] py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6 sm:space-y-8">
        
        {/* ── EDITORIAL HEADER ROW ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-body text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-stone-600">
                HOW IT WORKS
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#151817] tracking-tight leading-[1.08]">
              A transparent{' '}
              <span className="word-accent-subtle">four-step journey.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-sm font-body">
            Zero guesswork. From initial feasibility analysis to DISCOM net-metering handover, we handle the entire process turnkey.
          </p>
        </div>

        {/* ── 4 PROCEDURAL COLUMNS SEPARATED BY 1px VERTICAL DIVIDERS (NO Cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#E6E3DD] pt-2 sm:pt-0">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`py-5 sm:py-6 sm:px-5 lg:px-6 flex flex-col justify-between group ${
                idx !== 0 ? 'sm:border-l border-[#E6E3DD]' : 'sm:pl-0'
              } ${idx === 2 ? 'sm:border-t-0 sm:border-l' : ''}`}
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-medium text-[#7A211D] block">
                  {step.num}
                </span>

                <h3 className="font-heading text-base sm:text-[17px] font-medium text-[#151817] tracking-tight leading-snug group-hover:text-[#7A211D] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed pt-1 font-body">
                  {step.desc}
                </p>
              </div>

              {/* Structural Accent Mark */}
              <div className="w-6 h-[2px] bg-stone-300 group-hover:bg-[#7A211D] transition-all duration-300 mt-5" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
