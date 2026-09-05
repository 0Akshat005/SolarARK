/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
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
      headline: 'Residential | Amravati',
      sub: 'Bungalow rooftop saving ₹68,000/year with ₹78,000 PM Surya Ghar subsidy.',
      image: '/images/projects/featured-residential.jpg',
    },
    {
      id: 'comm-sambhajinagar',
      capacity: '100 kW',
      type: 'Commercial',
      location: 'Sambhajinagar',
      headline: 'Commercial | Sambhajinagar',
      sub: 'Multi-speciality medical campus slashing daylight operational energy costs by 75%.',
      image: '/images/projects/featured-commercial.jpg',
    },
    {
      id: 'ind-wardha',
      capacity: '250 kW',
      type: 'Industrial',
      location: 'Wardha',
      headline: 'Industrial | Wardha',
      sub: 'Manufacturing plant operating machinery on high-efficiency bifacial solar arrays.',
      image: '/images/projects/featured-industrial.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10 sm:space-y-12">
        
        {/* ── HEADER ROW ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
                Featured Projects
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.08]">
              Real spaces.<br />
              <span className="text-[#8B1E1E]">Real impact.</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/projects')}
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 bg-white hover:border-[#8B1E1E]/50 hover:bg-[#8B1E1E]/[0.04] text-slate-800 hover:text-[#8B1E1E] text-xs sm:text-sm font-heading font-semibold transition-all duration-200 cursor-pointer shadow-2xs self-start sm:self-end"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* ── 3 PROJECT PROOF CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('/projects')}
              className="group relative rounded-xl overflow-hidden bg-white border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Contained Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={`${item.capacity} solar installation in ${item.location}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Capacity Stat Badge */}
                <div className="absolute bottom-3 left-3 z-10 text-white space-y-0.5">
                  <div className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-none">
                    {item.capacity}
                  </div>
                  <div className="text-xs text-stone-200 font-medium">
                    {item.headline}
                  </div>
                </div>

                {/* Circular Action Button */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#8B1E1E] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Description Snippet */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed">
                  {item.sub}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span className="font-mono text-[11px] text-stone-600">Location: {item.location}</span>
                  <span className="font-heading font-semibold text-[#8B1E1E] group-hover:underline">Case study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
