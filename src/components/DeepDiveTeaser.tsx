/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Smartphone, Building2, Star, HelpCircle, ArrowRight } from 'lucide-react';

interface DeepDiveTeaserProps {
  onNavigate: (path: string) => void;
}

export const DeepDiveTeaser: React.FC<DeepDiveTeaserProps> = ({ onNavigate }) => {
  const hubs = [
    {
      icon: Cpu,
      title: 'Technology & Hardware',
      desc: 'Tier-1 monocrystalline panels, micro-inverters, and 25-year performance warranties.',
      linkText: 'Explore Technology',
      path: '/technology',
      badge: 'Hardware Tier-1',
    },
    {
      icon: Building2,
      title: 'Completed Projects',
      desc: 'Explore real residential rooftop solar installations across 15+ Indian cities.',
      linkText: 'View Projects',
      path: '/projects',
      badge: '15+ Cities',
    },
    {
      icon: Star,
      title: 'Homeowner Reviews',
      desc: 'Read verified testimonials and electricity bill savings stories from Indian homeowners.',
      linkText: 'Read Reviews',
      path: '/reviews',
      badge: '4.9★ Rating',
    },
    {
      icon: Smartphone,
      title: 'App Experience',
      desc: 'Track daily power generation, grid net-metering, and battery metrics in real time.',
      linkText: 'Explore App',
      path: '/app',
      badge: 'Live Analytics',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1D5FE0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-[#1D5FE0] tracking-widest uppercase font-heading block mb-2">
              Deep-Dive Exploration
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Explore SolarARK Engineering &amp; Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Dive deeper into our technology standards, verified customer case studies, smart app monitoring, and detailed FAQs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(hub.path)}
                className="group bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-[#1D5FE0]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-[#1D5FE0]/10 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#1D5FE0]/20 border border-[#1D5FE0]/30 flex items-center justify-center text-[#1D5FE0]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-700/50 px-2.5 py-1 rounded-full border border-slate-600/40">
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#1D5FE0] transition-colors">
                    {hub.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between text-xs font-semibold text-[#1D5FE0] group-hover:text-white transition-colors">
                  <span>{hub.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Link Bar */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have questions about subsidies, net-metering, or setup?</div>
              <div className="text-xs text-slate-400">Read our full categorized Knowledge Base &amp; FAQ section.</div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('/faq')}
            className="text-xs sm:text-sm font-bold text-white bg-slate-700 hover:bg-slate-600 px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shrink-0"
          >
            <span>View Full FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
