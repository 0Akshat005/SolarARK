/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface SolutionsScaleProps {
  onNavigate: (path: string) => void;
}

export const SolutionsScale: React.FC<SolutionsScaleProps> = ({ onNavigate }) => {
  const solutions = [
    {
      id: 'residential',
      title: 'Residential Solar',
      headline: 'For a more independent home',
      description: 'Zero-down EMI options, ₹78,000 direct PM Surya Ghar subsidy, and up to 90% bill reduction for villas and bungalows.',
      image: '/images/services/homes.jpg',
      badge: '3 kW – 10 kW',
      path: '/services',
    },
    {
      id: 'commercial',
      title: 'Commercial Solar',
      headline: 'For growing businesses',
      description: 'High-yield rooftop solar designed for offices, hospitals, and educational institutions to slash peak commercial tariffs.',
      image: '/images/services/commercial.png',
      badge: '10 kW – 100 kW',
      path: '/services',
    },
    {
      id: 'industrial',
      title: 'Industrial Solar',
      headline: 'For a stronger, sustainable future',
      description: 'High-capacity systems engineered for manufacturing plants, cold storage, and warehouses with accelerated depreciation benefits.',
      image: '/images/services/industrials.jpg',
      badge: '100 kW – 1 MW+',
      path: '/services',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12 sm:space-y-16">
        
        {/* ── TOP ASYMMETRIC HEADER ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* Left: Eyebrow + Big Headline */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
                Our Solutions
              </span>
              <span className="w-8 h-px bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.08]">
              Solar for<br />
              <span className="text-[#8B1E1E]">every scale.</span>
            </h2>
          </div>

          {/* Center: Explanation & Explore Button */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              From homes to industries, we design solar solutions that make energy simpler, smarter and more sustainable.
            </p>

            <button
              onClick={() => onNavigate('/services')}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 bg-white hover:border-[#8B1E1E]/50 hover:bg-[#8B1E1E]/[0.04] text-slate-800 hover:text-[#8B1E1E] text-xs sm:text-sm font-heading font-semibold transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right: Poetic Tile matching inspiration */}
          <div className="lg:col-span-3">
            <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden bg-stone-900 shadow-md border border-stone-200/60 p-4 flex flex-col justify-end">
              <img
                src="/images/solar-villa-sunset.jpg"
                alt="Sunlight over solar installation"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 text-white space-y-0.5">
                <p className="font-heading font-bold text-sm sm:text-base tracking-tight leading-snug">
                  Same sun.
                </p>
                <p className="text-xs text-amber-200/90 font-medium">
                  A brighter tomorrow.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3 CONTAINED EDITORIAL CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.path)}
              className="group relative rounded-xl overflow-hidden bg-white border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image with 16:10 contained aspect ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Capacity Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-mono font-medium text-white">
                    {item.badge}
                  </span>
                </div>

                {/* Overlaid Title on Image bottom */}
                <div className="absolute bottom-3 left-3 right-12 z-10 text-white">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-medium">
                    {item.headline}
                  </p>
                </div>

                {/* Circular Arrow Button on bottom right */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#8B1E1E] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed">
                  {item.description}
                </p>
                
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-heading font-semibold text-[#8B1E1E]">
                  <span>Learn more & specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
