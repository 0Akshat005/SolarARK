/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * FeaturedProjects — Editorial Project Panels
 * Strictly matched to reference mockup media_1788615637835.jpg:
 * - Desktop: 4-column horizontal layout:
 *   Col 1: Eyebrow "FEATURED PROJECTS", Headline "Real spaces. Real impact.", Outline Pill button "View All Projects →"
 *   Cols 2, 3, 4: 3 rectangular project image panels (6 kW Residential Amravati, 100 kW Commercial Sambhajinagar, 250 kW Industrial Wardha)
 *   with system size figure + location directly overlaid in the lower scrim and circular outline arrow button in bottom right.
 * - Zero separate text boxes underneath. Clean, uncluttered, and photographic.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

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
      image: '/images/projects/featured-residential.jpg',
    },
    {
      id: 'comm-sambhajinagar',
      capacity: '100 kW',
      type: 'Commercial',
      location: 'Sambhajinagar',
      image: '/images/projects/featured-commercial.jpg',
    },
    {
      id: 'ind-wardha',
      capacity: '250 kW',
      type: 'Industrial',
      location: 'Wardha',
      image: '/images/projects/featured-industrial.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-8 sm:py-10 lg:py-12 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* ── 4-COLUMN HORIZONTAL GRID (Faithful to Reference) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Column 1: Header Block (3 cols on desktop) */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4 py-1">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                  FEATURED PROJECTS
                </span>
                <span className="w-8 h-px bg-stone-300" />
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.08]">
                Real spaces.<br />
                <span className="text-[#8B1E1E]">Real impact.</span>
              </h2>
            </div>

            <div>
              <button
                onClick={() => onNavigate('/projects')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 text-xs font-heading font-semibold transition-all duration-200 cursor-pointer bg-transparent"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Columns 2, 3, 4: 3 Rectangular Project Panels (3 cols each on desktop) */}
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('/projects')}
              className="md:col-span-3 group relative h-[260px] sm:h-[280px] lg:h-[300px] rounded-xl overflow-hidden cursor-pointer flex flex-col justify-end p-5 sm:p-6 border border-stone-300/70 bg-stone-950 shadow-sm"
            >
              {/* Project Image */}
              <img
                src={item.image}
                alt={`${item.capacity} ${item.type} in ${item.location}`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Bottom Information: Capacity + Location/Type on Left, Circular Outline Arrow on Right */}
              <div className="relative z-10 flex items-end justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight leading-none block">
                    {item.capacity}
                  </span>
                  <span className="text-xs text-stone-200/90 font-medium block">
                    {item.type} | {item.location}
                  </span>
                </div>

                {/* Circular Outline Arrow Button (Matching Reference) */}
                <div className="w-8 h-8 rounded-full border border-white/70 group-hover:border-white group-hover:bg-white/15 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
