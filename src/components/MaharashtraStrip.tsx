/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * MaharashtraStrip — Pixel-precise editorial strip showcasing SolarARK's
 * deep regional footprint across Maharashtra.
 *
 * Faithfully matches media_1788611868461.png:
 * 1. Left text block: Eyebrow "BUILT IN / MAHARASHTRA", hairline rule, display "Powering / local progress."
 * 2. Center map: Scaled vector silhouette of Maharashtra in light stone (#E5E5E2) directly on #FAF9F6,
 *    with location markers & labels for Amravati, Akola, Wardha, and Sambhajinagar.
 * 3. Right photo strip: 4 equal-width square tiles with captions for each city.
 * 4. Far-right CTA: Vertical divider line, 4-line stacked text (CLEANER / STRONGER / BRIGHTER / MAHARASHTRA),
 *    and circular maroon arrow button.
 */

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export interface MaharashtraStripProps {
  onNavigate?: (path: string) => void;
  onCtaClick?: () => void;
  className?: string;
}

interface CityHub {
  id: string;
  name: string;
  image: string;
  dot: { cx: number; cy: number };
  label: { x: number; y: number; anchor: 'start' | 'end' };
}

const CITIES: CityHub[] = [
  {
    id: 'amravati',
    name: 'Amravati',
    image: '/images/revamp/city-amravati.jpg',
    dot: { cx: 135, cy: 36 },
    label: { x: 144, y: 39, anchor: 'start' },
  },
  {
    id: 'sambhajinagar',
    name: 'Sambhajinagar',
    image: '/images/revamp/city-sambhajinagar.jpg',
    dot: { cx: 82, cy: 94 },
    label: { x: 91, y: 97, anchor: 'start' },
  },
  {
    id: 'wardha',
    name: 'Wardha',
    image: '/images/revamp/city-wardha.jpg',
    dot: { cx: 138, cy: 68 },
    label: { x: 147, y: 71, anchor: 'start' },
  },
  {
    id: 'akola',
    name: 'Akola',
    image: '/images/revamp/city-akola.jpg',
    dot: { cx: 108, cy: 52 },
    label: { x: 70, y: 44, anchor: 'start' },
  },
];

// Vector silhouette path extracted and smoothed from authentic Maharashtra geometry
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

export const MaharashtraStrip: React.FC<MaharashtraStripProps> = ({
  onNavigate,
  onCtaClick,
  className = '',
}) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (onNavigate) {
      onNavigate('/contact');
    }
  };

  return (
    <section
      aria-label="Built in Maharashtra"
      className={`w-full bg-[#FAF9F6] py-8 sm:py-10 lg:py-12 border-b border-stone-200/80 ${className}`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ── SINGLE CONTINUOUS HORIZONTAL ROW (lg+) ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-5 xl:gap-8">

          {/* 1. LEFT TEXT BLOCK */}
          <div className="w-full lg:w-auto lg:shrink-0 max-w-xs sm:max-w-sm flex flex-col justify-center">
            <div className="space-y-0.5">
              <span className="block font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
                BUILT IN
              </span>
              <span className="block font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
                MAHARASHTRA
              </span>
            </div>

            <div className="w-9 h-[1.5px] bg-stone-300 my-3 sm:my-3.5" />

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-[#0B1730] tracking-tight leading-[1.08]">
              Powering
              <br />
              local progress.
            </h2>
          </div>

          {/* 2. CENTER MAP SILHOUETTE & MARKERS */}
          <div className="w-full sm:w-[320px] lg:w-[260px] xl:w-[290px] shrink-0 flex items-center justify-center">
            <div className="relative w-full aspect-[240/150] select-none">
              <svg
                viewBox="0 0 240 150"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Base Maharashtra Outline in Light Stone */}
                <path
                  d={MAHARASHTRA_PATH}
                  fill="#E5E5E2"
                  stroke="#D8D8D4"
                  strokeWidth="0.75"
                />

                {/* Subtle Internal District Division Traces */}
                <path
                  d="M 46,36 Q 44,70 42,95 T 38,125"
                  fill="none"
                  stroke="#FAF9F6"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />
                <path
                  d="M 95,32 Q 92,60 100,85 Q 106,105 110,128"
                  fill="none"
                  stroke="#FAF9F6"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />
                <path
                  d="M 125,26 Q 120,55 130,78 Q 140,95 155,108"
                  fill="none"
                  stroke="#FAF9F6"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />
                <path
                  d="M 160,34 Q 170,62 178,85"
                  fill="none"
                  stroke="#FAF9F6"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />
                <path
                  d="M 45,72 Q 85,76 122,70"
                  fill="none"
                  stroke="#FAF9F6"
                  strokeWidth="0.85"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />

                {/* Interactive / Static City Markers & Crisp Typography Labels */}
                {CITIES.map((city) => {
                  const isHovered = hoveredCity === city.id;
                  return (
                    <g
                      key={city.id}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoveredCity(city.id)}
                      onMouseLeave={() => setHoveredCity(null)}
                      onClick={() => onNavigate?.('/contact')}
                    >
                      {/* Pulse halo on hover */}
                      {isHovered && (
                        <circle
                          cx={city.dot.cx}
                          cy={city.dot.cy}
                          r="7"
                          fill="#8B1E1E"
                          fillOpacity="0.25"
                          className="animate-ping"
                        />
                      )}

                      {/* Location Marker Dot */}
                      <circle
                        cx={city.dot.cx}
                        cy={city.dot.cy}
                        r={isHovered ? 4.5 : 3.5}
                        fill="#8B1E1E"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                        className="transition-all duration-200"
                      />

                      {/* City Text Label */}
                      <text
                        x={city.label.x}
                        y={city.label.y}
                        textAnchor={city.label.anchor}
                        className={`text-[9.5px] font-sans transition-colors duration-200 ${
                          isHovered
                            ? 'font-bold fill-[#8B1E1E]'
                            : 'font-medium fill-stone-700'
                        }`}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* 3. RIGHT PHOTO STRIP (4 Square Tiles in One Aligned Row) */}
          <div className="w-full lg:flex-1 max-w-2xl xl:max-w-none">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4 items-start">
              {CITIES.map((city) => {
                const isHovered = hoveredCity === city.id;
                return (
                  <div
                    key={city.id}
                    className="flex flex-col group cursor-pointer"
                    onMouseEnter={() => setHoveredCity(city.id)}
                    onMouseLeave={() => setHoveredCity(null)}
                    onClick={() => onNavigate?.('/contact')}
                  >
                    {/* Square Image Tile */}
                    <div
                      className={`relative aspect-square w-full overflow-hidden rounded-[3px] bg-stone-200 transition-all duration-300 ${
                        isHovered
                          ? 'ring-2 ring-[#8B1E1E] shadow-sm'
                          : 'ring-1 ring-stone-200/80 hover:ring-stone-300'
                      }`}
                    >
                      <img
                        src={city.image}
                        alt={`${city.name} Landmark`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />
                    </div>

                    {/* Small crisp caption beneath each image */}
                    <span
                      className={`text-[11px] sm:text-xs text-left pt-1.5 transition-colors duration-200 ${
                        isHovered
                          ? 'font-bold text-[#8B1E1E]'
                          : 'font-medium text-stone-700'
                      }`}
                    >
                      {city.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. FAR-RIGHT CTA (Vertical Divider + Stacked Text + Circular Maroon Button) */}
          <div className="w-full lg:w-auto shrink-0 flex items-center justify-between lg:justify-start gap-4 xl:gap-6 lg:pl-3 xl:pl-4 lg:border-l lg:border-stone-300/80">
            {/* Stacked Vertical Text */}
            <div className="space-y-0.5 text-left select-none">
              <span className="block font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">
                CLEANER
              </span>
              <span className="block font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">
                STRONGER
              </span>
              <span className="block font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">
                BRIGHTER
              </span>
              <span className="block font-heading text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">
                MAHARASHTRA
              </span>
            </div>

            {/* Circular Maroon Arrow Button */}
            <button
              onClick={handleCta}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#8B1E1E] text-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group shadow-2xs shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
              aria-label="Connect with SolarARK in Maharashtra"
            >
              <ArrowRight
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
