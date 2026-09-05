/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * FeaturedProjects — Editorial Project Panels
 * Rebuilt strictly to adhere to revamp.md:
 * - NO generic white rounded cards with bulky containers.
 * - Large rectangular project imagery as dominant visual element.
 * - Concise project metadata, strong system-size figures, location/application.
 * - Clean editorial typography separated by spacing and thin dividers instead of card borders.
 */

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onNavigate: (path: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate }) => {
  const projects = [
    {
      id: 'res-amravati',
      capacity: '6 kW',
      type: 'Residential',
      location: 'Amravati',
      title: 'Bungalow Rooftop Landmark',
      metrics: '₹68,000/yr savings · ₹78,000 PM Surya Ghar subsidy',
      sub: 'Custom elevated pergola structure with Tier-1 bifacial panels preserving 100% rooftop living area.',
      image: '/images/projects/featured-residential.jpg',
    },
    {
      id: 'comm-sambhajinagar',
      capacity: '100 kW',
      type: 'Commercial',
      location: 'Sambhajinagar',
      title: 'Medical Campus Array',
      metrics: '75% daylight cost offset · Net-metered MSEDCL sync',
      sub: 'Rooftop solar installation across diagnostic and inpatient wings delivering uninterrupted peak hospital power.',
      image: '/images/projects/featured-commercial.jpg',
    },
    {
      id: 'ind-wardha',
      capacity: '250 kW',
      type: 'Industrial',
      location: 'Wardha',
      title: 'Industrial Manufacturing Plant',
      metrics: 'Accelerated depreciation · Megawatt scalable',
      sub: 'High-capacity solar system mounted on standing seam metal sheds, powering continuous production equipment.',
      image: '/images/projects/featured-industrial.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-8 sm:py-10 lg:py-12 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6 sm:space-y-8">
        
        {/* ── EDITORIAL HEADER ROW ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-600">
                FEATURED PROJECTS
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.08]">
              Real spaces.{' '}
              <span className="text-[#8B1E1E]">Real impact.</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/projects')}
            className="group shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-semibold text-[#8B1E1E] hover:text-[#701616] transition-colors cursor-pointer self-start sm:self-end pb-0.5"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* ── 3 EDITORIAL PROJECT PANELS (NO White Card Containers) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('/projects')}
              className="group flex flex-col space-y-3 cursor-pointer"
            >
              {/* 1. Dominant Rectangular Project Image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-stone-900 shadow-sm border border-stone-200/80">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.capacity} in ${item.location}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Location & Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono font-medium text-white shadow-2xs">
                    {item.location} · {item.type}
                  </span>
                </div>

                {/* Bottom System Size Figure + Action */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                  <div>
                    <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight leading-none block drop-shadow-sm">
                      {item.capacity}
                    </span>
                    <span className="text-[11px] text-stone-300 font-medium block mt-0.5">
                      Rooftop Grid-Tied System
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#8B1E1E] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* 2. Clean Editorial Typographic Information (Directly on page background, NO Card) */}
              <div className="space-y-1 pt-1">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-[#8B1E1E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {item.metrics}
                </p>
                <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed pt-0.5">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
