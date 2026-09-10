/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 5: OUR FOOTPRINT — Statewide Presence & Authority
 * Directly mirrors the inspiration layout:
 * - 3-Part Architecture:
 *   1. Left: Headline ("More clean energy. A brighter Maharashtra.") & narrative.
 *   2. Center: Clean vector map of Maharashtra with interactive city pins.
 *   3. Right: Atmospheric landscape photograph (Maharashtra sunset hills).
 * - Sharp architectural borders (rounded-none), on-brand warm neutrals and hairline borders.
 */

import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';

interface CityPin {
  id: string;
  name: string;
  count: string;
  capacity: string;
  dot: { cx: number; cy: number };
  label: { x: number; y: number; anchor: 'start' | 'end' | 'middle' };
}

const MAHARASHTRA_PATH =
  'M 48.0,128.2 L 45.7,124.8 L 41.2,127.1 L 37.9,121.5 L 31.8,119.8 L 27.3,110.9 ' +
  'L 27.3,103.0 L 23.9,98.6 L 18.4,76.2 L 16.1,75.1 L 17.2,68.4 L 15.0,65.1 ' +
  'L 18.4,57.2 L 21.1,56.7 L 25.6,58.9 L 28.4,57.2 L 27.3,51.7 L 33.4,51.1 ' +
  'L 35.1,49.4 L 34.0,41.6 L 36.2,39.4 L 30.6,36.0 L 30.6,32.7 L 40.7,26.0 ' +
  'L 34.0,23.7 L 34.0,19.3 L 31.8,20.4 L 32.3,16.5 L 33.4,17.6 L 40.1,13.1 ' +
  'L 48.0,12.0 L 50.7,13.7 L 49.6,15.9 L 53.0,18.1 L 50.7,19.3 L 53.5,22.1 ' +
  'L 60.2,23.2 L 62.5,27.6 L 68.1,26.5 L 71.4,29.9 L 75.9,29.9 L 78.1,32.1 ' +
  'L 85.9,32.1 L 89.3,33.2 L 90.4,36.6 L 91.5,32.1 L 96.5,32.7 L 92.1,27.1 ' +
  'L 94.3,26.0 L 93.2,24.8 L 94.3,22.6 L 96.0,23.2 L 97.1,20.9 L 102.1,22.6 ' +
  'L 106.0,29.9 L 106.6,27.1 L 114.4,21.5 L 112.2,18.1 L 115.0,17.6 L 122.2,20.4 ' +
  'L 122.2,22.6 L 125.6,26.0 L 125.6,30.4 L 127.3,31.0 L 127.8,23.7 L 133.4,20.4 ' +
  'L 131.2,19.3 L 131.7,16.5 L 136.8,18.1 L 137.9,21.5 L 136.2,23.2 L 159.7,23.2 ' +
  'L 166.4,20.9 L 168.0,22.6 L 168.6,29.9 L 171.9,28.8 L 173.6,27.1 L 173.1,25.4 ' +
  'L 175.3,26.5 L 180.9,25.4 L 188.7,29.9 L 192.0,29.9 L 192.0,27.6 L 194.3,29.9 ' +
  'L 197.6,29.9 L 201.0,26.5 L 203.2,26.5 L 206.6,29.9 L 211.0,29.9 L 212.7,33.8 ' +
  'L 218.3,38.2 L 218.3,40.5 L 213.8,43.8 L 214.9,46.1 L 213.8,51.7 L 217.2,57.2 ' +
  'L 217.2,63.9 L 214.9,67.3 L 217.2,76.2 L 211.6,82.9 L 216.1,86.3 L 216.1,91.9 ' +
  'L 217.7,93.5 L 221.1,93.5 L 225.0,97.5 L 225.0,100.8 L 222.2,104.7 L 213.8,104.2 ' +
  'L 207.1,115.3 L 208.2,120.9 L 203.2,125.9 L 199.9,127.1 L 197.1,125.4 L 198.2,119.8 ' +
  'L 194.8,116.4 L 194.8,112.0 L 198.2,104.2 L 194.3,99.1 L 192.0,99.1 L 188.7,95.8 ' +
  'L 184.2,98.0 L 182.0,96.9 L 173.1,98.0 L 171.9,96.9 L 167.5,99.1 L 164.1,94.7 ' +
  'L 155.2,90.2 L 148.5,90.2 L 146.8,91.9 L 147.9,94.1 L 146.8,100.8 L 142.3,109.7 ' +
  'L 140.7,109.2 L 136.8,112.0 L 137.9,122.0 L 135.1,124.8 L 128.4,121.5 L 127.3,122.6 ' +
  'L 118.9,114.2 L 118.9,110.9 L 116.1,109.2 L 109.4,115.9 L 101.6,110.3 L 94.9,109.2 ' +
  'L 94.3,114.2 L 87.0,121.5 L 83.7,121.5 L 81.5,118.1 L 72.5,118.1 L 69.2,114.8 ' +
  'L 65.8,114.8 L 62.5,110.3 L 58.0,113.6 L 53.5,112.5 L 50.7,114.2 L 53.0,120.9 Z';

const CITY_PINS: CityPin[] = [
  {
    id: 'amravati',
    name: 'Amravati (HQ)',
    count: '1,250+',
    capacity: '8.5 MW',
    dot: { cx: 135, cy: 36 },
    label: { x: 142, y: 34, anchor: 'start' },
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    count: '1,650+',
    capacity: '12.0 MW',
    dot: { cx: 165, cy: 42 },
    label: { x: 172, y: 44, anchor: 'start' },
  },
  {
    id: 'wardha',
    name: 'Wardha',
    count: '750+',
    capacity: '5.2 MW',
    dot: { cx: 138, cy: 68 },
    label: { x: 145, y: 70, anchor: 'start' },
  },
  {
    id: 'akola',
    name: 'Akola',
    count: '650+',
    capacity: '4.8 MW',
    dot: { cx: 108, cy: 52 },
    label: { x: 98, y: 48, anchor: 'end' },
  },
  {
    id: 'sambhajinagar',
    name: 'Sambhajinagar',
    count: '1,100+',
    capacity: '7.5 MW',
    dot: { cx: 82, cy: 94 },
    label: { x: 74, y: 96, anchor: 'end' },
  },
  {
    id: 'pune',
    name: 'Pune',
    count: '1,400+',
    capacity: '9.8 MW',
    dot: { cx: 48, cy: 88 },
    label: { x: 42, y: 86, anchor: 'end' },
  },
];

interface ProjectsFootprintProps {
  onCtaClick?: () => void;
}

export const ProjectsFootprint: React.FC<ProjectsFootprintProps> = ({ onCtaClick }) => {
  const [activeCityId, setActiveCityId] = useState<string>('amravati');
  const activeCity = CITY_PINS.find((c) => c.id === activeCityId) || CITY_PINS[0];

  return (
    <section className="w-full bg-[#F7F5F0] py-12 sm:py-16 border-b border-[#E6E3DD]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Footprint Container — 3-Column Architectural Band */}
        <div className="bg-white rounded-none border border-[#E6E3DD] shadow-2xs overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#E6E3DD]">
            
            {/* ── COL 1 (4 cols): Narrative & Authority ── */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#7A211D]">
                    OUR FOOTPRINT
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight leading-tight m-0">
                    More clean energy. <br className="hidden sm:inline" />
                    <span className="text-[#151817]">A brighter Maharashtra.</span>
                  </h2>
                </div>

                <p className="text-xs sm:text-sm font-body font-normal text-[#6C6C68] leading-relaxed m-0">
                  Headquartered in Amravati with specialized engineering hubs in Nagpur, Wardha, Akola, Pune, and Chh. Sambhajinagar. Over 5,000+ certified solar systems delivering reliable power across Maharashtra.
                </p>
              </div>

              {/* Active District Quick Card */}
              <div className="bg-[#F7F5F0] p-4 rounded-none border border-[#E6E3DD] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-body font-medium text-[#151817] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7A211D]" />
                    {activeCity.name}
                  </span>
                  <span className="text-[11px] text-[#6C6C68] font-body">Active Hub</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#E6E3DD]">
                  <div>
                    <span className="text-[10px] uppercase font-body font-medium text-[#6C6C68] block">
                      Installations
                    </span>
                    <span className="font-heading text-base font-semibold text-[#151817]">
                      {activeCity.count}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-body font-medium text-[#6C6C68] block">
                      Capacity
                    </span>
                    <span className="font-heading text-base font-semibold text-[#7A211D]">
                      {activeCity.capacity}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── COL 2 (4 cols): Vector Maharashtra Map ── */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col items-center justify-center bg-[#F7F5F0] relative min-h-[300px]">
              <div className="w-full max-w-[340px] aspect-[4/3] relative flex items-center justify-center">
                <svg
                  viewBox="0 0 240 140"
                  className="w-full h-full select-none"
                  aria-label="Vector Map of Maharashtra SolarARK Footprint"
                >
                  {/* Maharashtra State Outline */}
                  <path
                    d={MAHARASHTRA_PATH}
                    className="fill-stone-100 stroke-stone-300 stroke-[1.2]"
                  />

                  {/* Interactive City Pins */}
                  {CITY_PINS.map((city) => {
                    const isSelected = city.id === activeCityId;
                    return (
                      <g
                        key={city.id}
                        className="cursor-pointer"
                        onClick={() => setActiveCityId(city.id)}
                      >
                        {/* Outer Glow Ring */}
                        {isSelected && (
                          <circle
                            cx={city.dot.cx}
                            cy={city.dot.cy}
                            r="6"
                            className="fill-[#7A211D]/20 stroke-[#7A211D] stroke-[0.75] animate-pulse"
                          />
                        )}

                        {/* Center Dot */}
                        <circle
                          cx={city.dot.cx}
                          cy={city.dot.cy}
                          r={isSelected ? '3.5' : '2.5'}
                          className={isSelected ? 'fill-[#7A211D] stroke-white stroke-[1]' : 'fill-stone-600 hover:fill-[#7A211D]'}
                        />

                        {/* Label */}
                        <text
                          x={city.label.x}
                          y={city.label.y}
                          textAnchor={city.label.anchor}
                          className={`text-[5.5px] font-body select-none ${
                            isSelected ? 'fill-[#151817] font-semibold' : 'fill-[#6C6C68] hover:fill-[#151817]'
                          }`}
                        >
                          {city.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="text-[10px] font-body text-[#6C6C68] mt-2 text-center">
                Tap city pin to view local capacity
              </div>
            </div>

            {/* ── COL 3 (4 cols): Scenic Maharashtra Sunset Hills Photo ── */}
            <div className="lg:col-span-4 relative min-h-[280px] lg:min-h-full overflow-hidden bg-stone-900">
              <img
                src="/images/projects/maharashtra-sunset-hills.jpg"
                alt="Western Ghats and Maharashtra sunset over solar landscape"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block">
                  REGIONAL IMPACT
                </span>
                <p className="text-sm font-sans font-semibold text-white leading-snug m-0">
                  Powering Vidarbha and Maharashtra’s solar future with engineering precision.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
