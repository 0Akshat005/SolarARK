/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface BuiltInMaharashtraProps {
  onNavigate: (path: string) => void;
}

export const BuiltInMaharashtra: React.FC<BuiltInMaharashtraProps> = ({ onNavigate }) => {
  const [activeCity, setActiveCity] = useState<string>('amravati');

  const cities = [
    {
      id: 'amravati',
      name: 'Amravati',
      role: 'Headquarters',
      sub: 'Mira Sadan, Krushnarpan Colony',
      image: '/images/revamp/city-amravati.jpg',
      stat: '250+ Rooftops',
    },
    {
      id: 'sambhajinagar',
      name: 'Sambhajinagar',
      role: 'Commercial Hub',
      sub: 'Jalna Road & CIDCO',
      image: '/images/revamp/city-sambhajinagar.jpg',
      stat: '120+ Systems',
    },
    {
      id: 'wardha',
      name: 'Wardha',
      role: 'Regional Operations',
      sub: 'Sevagram & Industrial Area',
      image: '/images/revamp/city-wardha.jpg',
      stat: '85+ Installations',
    },
    {
      id: 'akola',
      name: 'Akola',
      role: 'Agro & Industrial',
      sub: 'MIDC Phase II & Suburbs',
      image: '/images/revamp/city-akola.jpg',
      stat: '90+ Installations',
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-8 sm:py-10 lg:py-12 border-b border-stone-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6 sm:space-y-8">
        
        {/* ── SECTION TITLE ── */}
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
              Built in Maharashtra
            </span>
            <span className="w-8 h-px bg-stone-300" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.10]">
            Powering local progress.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
            Headquartered in Amravati with deep engineering roots across Vidarbha and Marathwada.
          </p>
        </div>

        {/* ── ROW: VECTOR MAP + 4 CITY CARDS + RIGHT BANNER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
          
          {/* 1. Interactive Maharashtra Map Silhouette (col-span-3) */}
          <div className="lg:col-span-3 rounded-xl bg-white border border-stone-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                Network Footprint
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900">
                4 Active Hubs
              </h4>
            </div>

            {/* Stylized Vector Map of Maharashtra with City Pins */}
            <div className="relative w-full aspect-square my-4 bg-stone-50/80 rounded-lg p-2 border border-stone-100 flex items-center justify-center">
              <svg
                viewBox="0 0 200 180"
                className="w-full h-full text-stone-200 fill-current"
              >
                {/* Abstract Maharashtra outline shape */}
                <path d="M 25,60 C 35,45 60,35 90,30 C 130,25 165,35 185,55 C 195,68 190,95 180,115 C 170,135 140,155 105,160 C 70,165 40,140 25,115 C 15,95 18,75 25,60 Z" />
              </svg>

              {/* Pins on Map */}
              {/* Amravati (HQ) */}
              <button
                onClick={() => setActiveCity('amravati')}
                className={`absolute top-[32%] right-[32%] flex items-center gap-1 group cursor-pointer ${
                  activeCity === 'amravati' ? 'scale-110' : 'opacity-80'
                }`}
                title="Amravati (Headquarters)"
              >
                <span className="w-3 h-3 rounded-full bg-[#8B1E1E] ring-4 ring-[#8B1E1E]/20 animate-pulse" />
                <span className="text-[10px] font-heading font-bold text-slate-900 bg-white/90 px-1 py-0.5 rounded shadow-2xs">
                  Amravati
                </span>
              </button>

              {/* Sambhajinagar */}
              <button
                onClick={() => setActiveCity('sambhajinagar')}
                className={`absolute top-[48%] left-[30%] flex items-center gap-1 group cursor-pointer ${
                  activeCity === 'sambhajinagar' ? 'scale-110' : 'opacity-80'
                }`}
                title="Sambhajinagar"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-amber-500/20" />
                <span className="text-[9px] font-heading font-semibold text-slate-700 bg-white/90 px-1 py-0.2 rounded shadow-2xs">
                  Sambhajinagar
                </span>
              </button>

              {/* Wardha */}
              <button
                onClick={() => setActiveCity('wardha')}
                className={`absolute top-[48%] right-[24%] flex items-center gap-1 group cursor-pointer ${
                  activeCity === 'wardha' ? 'scale-110' : 'opacity-80'
                }`}
                title="Wardha"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-amber-500/20" />
                <span className="text-[9px] font-heading font-semibold text-slate-700 bg-white/90 px-1 py-0.2 rounded shadow-2xs">
                  Wardha
                </span>
              </button>

              {/* Akola */}
              <button
                onClick={() => setActiveCity('akola')}
                className={`absolute top-[42%] left-[45%] flex items-center gap-1 group cursor-pointer ${
                  activeCity === 'akola' ? 'scale-110' : 'opacity-80'
                }`}
                title="Akola"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-amber-500/20" />
                <span className="text-[9px] font-heading font-semibold text-slate-700 bg-white/90 px-1 py-0.2 rounded shadow-2xs">
                  Akola
                </span>
              </button>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8B1E1E]" />
                HQ: Amravati 444605
              </span>
              <button
                onClick={() => onNavigate('/contact')}
                className="font-heading font-bold text-[#8B1E1E] hover:underline"
              >
                Offices →
              </button>
            </div>
          </div>

          {/* 2. 4 City Landmark Cards (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {cities.map((city) => {
              const isSelected = activeCity === city.id;
              return (
                <div
                  key={city.id}
                  onClick={() => setActiveCity(city.id)}
                  className={`group relative rounded-xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer flex flex-col ${
                    isSelected
                      ? 'ring-2 ring-[#8B1E1E] border-transparent shadow-md'
                      : 'border-stone-200/80 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-2 left-2 z-10">
                      <span className="font-heading font-bold text-xs sm:text-sm text-white tracking-tight leading-none drop-shadow-sm">
                        {city.name}
                      </span>
                    </div>
                  </div>

                  {/* Info below */}
                  <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between space-y-1">
                    <div className="text-[11px] font-heading font-semibold text-slate-800 truncate">
                      {city.role}
                    </div>
                    <div className="text-[10px] text-stone-500 truncate">
                      {city.stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Right Vertical Typographic Callout (col-span-2) */}
          <div className="lg:col-span-2 rounded-xl bg-white border border-stone-200/80 p-5 flex flex-col justify-between items-start shadow-2xs group hover:border-[#8B1E1E]/40 transition-colors">
            <div className="space-y-1 text-slate-900">
              <div className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-stone-600">
                Cleaner
              </div>
              <div className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-stone-600">
                Stronger
              </div>
              <div className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-stone-600">
                Brighter
              </div>
              <div className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#8B1E1E] pt-1">
                Maharashtra
              </div>
            </div>

            <div className="pt-6 w-full flex items-center justify-between">
              <button
                onClick={() => onNavigate('/contact')}
                className="w-10 h-10 rounded-full border border-stone-300 group-hover:border-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                title="Connect with local team"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
