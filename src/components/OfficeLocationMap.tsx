// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
import { MapPin, ExternalLink, ChevronDown, Navigation } from "lucide-react";

export interface OfficeLocation {
  id?: string;
  type?: string;
  city: string;
  badge: string;
  address: string;
  latitude?: number;
  longitude?: number;
  phone: string;
  email: string;
  mapUrl: string;
  dot?: { cx: number; cy: number };
  label?: { x: number; y: number; anchor: 'start' | 'end' };
}

interface OfficeLocationMapProps {
  offices?: OfficeLocation[];
  defaultActiveIndex?: number;
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

const DEFAULT_OFFICES: OfficeLocation[] = [
  {
    id: 'amravati',
    city: 'Amravati (HQ)',
    type: 'Head Office & Engineering Center',
    badge: 'Central HQ',
    address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.916927,77.749208',
    dot: { cx: 135, cy: 36 },
    label: { x: 144, y: 39, anchor: 'start' },
  },
  {
    id: 'sambhajinagar',
    city: 'Sambhajinagar',
    type: 'Marathwada Regional Office',
    badge: 'Marathwada Hub',
    address: 'Near Saptapadi Mangal Karyalaya Road, H.No. 49R.-29, Baliram Patil School Road, Chh. Sambhajinagar',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=19.896246,75.358003',
    dot: { cx: 82, cy: 94 },
    label: { x: 74, y: 96, anchor: 'end' },
  },
  {
    id: 'wardha',
    city: 'Wardha',
    type: 'Vidarbha Regional Branch',
    badge: 'Vidarbha Hub',
    address: 'C/o Kishore Surkar, Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arts College Road, Arvi Naka, Wardha',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.754335,78.601618',
    dot: { cx: 138, cy: 68 },
    label: { x: 147, y: 71, anchor: 'start' },
  },
  {
    id: 'akola',
    city: 'Akola',
    type: 'Regional Operations Center',
    badge: 'Operations Hub',
    address: 'Regional Operations & Engineering Service Desk, Akola, Maharashtra',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.705900,77.021900',
    dot: { cx: 108, cy: 52 },
    label: { x: 116, y: 55, anchor: 'start' },
  },
];

export const OfficeLocationMap: React.FC<OfficeLocationMapProps> = ({
  offices = DEFAULT_OFFICES,
  defaultActiveIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section aria-label="Office Locations Map" className="bg-white border border-[#EBE6DF] rounded-[20px] p-5 sm:p-7 xl:p-8 shadow-[0_10px_28px_rgba(28,35,46,0.07)] space-y-6">
      {/* Header Block */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-xs font-semibold text-stone-700 font-heading shadow-2xs">
          <Navigation className="w-3.5 h-3.5 text-stone-600" />
          <span>Regional Footprint &amp; Presence</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-stone-900 tracking-tight leading-[1.18] m-0">
          SolarArk Presence in Maharashtra
        </h2>
        <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0">
          Select a regional office to inspect its address, direct engineer contact, and geographic location.
        </p>
      </div>

      {/* Grid: Map + List Side-by-Side Pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Location List with Inline Details (6 cols) */}
        <div className="lg:col-span-6 space-y-3" role="tablist" aria-label="Office locations list">
          {offices.map((office, idx) => {
            const isActive = idx === activeIndex;
            const isHovered = idx === hoveredIndex;

            return (
              <div
                key={office.city}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-2xl transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#FAF9F6] border-stone-300 shadow-sm'
                    : isHovered
                    ? 'bg-stone-50/80 border-stone-200'
                    : 'bg-white border-stone-200/70 hover:border-stone-200'
                }`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A211D]/30 rounded-2xl min-h-[44px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#7A211D] text-white shadow-xs'
                          : isHovered
                          ? 'bg-red-100 text-[#7A211D]'
                          : 'bg-stone-100 text-stone-500 group-hover:text-[#7A211D]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm tracking-tight transition-colors ${
                            isActive
                              ? 'font-bold text-stone-950'
                              : 'font-semibold text-stone-800 group-hover:text-stone-950'
                          }`}
                        >
                          {office.city}
                        </span>
                        <span
                          className={`text-[9px] font-medium uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border transition-colors font-body ${
                            isActive
                              ? 'bg-red-50 text-[#7A211D] border-red-200/80'
                              : 'bg-stone-100 text-stone-600 border-[#E6E3DD]'
                          }`}
                        >
                          {office.badge}
                        </span>
                      </div>
                      {office.type && (
                        <p className="text-[11px] text-stone-500 font-normal m-0 truncate mt-0.5 font-body">
                          {office.type}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 pl-2">
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                        isActive ? 'rotate-180 text-[#7A211D]' : 'group-hover:text-stone-600'
                      }`}
                    />
                  </div>
                </button>

                {/* Inline Expanded Address & Contact Details */}
                {isActive && (
                  <div className="px-4 pb-3.5 pt-1 space-y-2.5 text-xs border-t border-[#E6E3DD] mt-0.5 font-body">
                    <div className="flex items-start gap-2 text-stone-600 leading-relaxed pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#7A211D] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1.5 border-t border-[#E6E3DD]/70">
                      <div className="flex items-center gap-3 text-stone-600 font-mono text-[11px]">
                        <a
                          href={`tel:${office.phone.replace(/\s+/g, '')}`}
                          className="font-medium text-stone-800 hover:text-[#7A211D] transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-[#7A211D] hover:underline"
                      >
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Scaled Vector Map Graphic with Pins (6 cols) */}
        <div className="lg:col-span-6 bg-[#FAF9F6] border border-stone-200/80 rounded-2xl p-4 flex flex-col items-center justify-center relative min-h-[280px]">
          <div className="relative w-full max-w-[360px] aspect-[240/145] select-none">
            <svg
              viewBox="0 0 240 145"
              className="w-full h-full filter drop-shadow-xs"
              aria-label="Interactive Map of Maharashtra"
            >
              {/* Silhouette Path */}
              <path
                d={MAHARASHTRA_PATH}
                className="fill-[#E8E2D8] stroke-[#D5CEBF] transition-colors"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* Pins corresponding to offices */}
              {offices.map((office, idx) => {
                if (!office.dot) return null;
                const isSelected = idx === activeIndex;
                const isHovered = idx === hoveredIndex;
                const isHighlighted = isSelected || isHovered;

                return (
                  <g
                    key={office.city}
                    className="cursor-pointer transition-transform"
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${office.city}`}
                  >
                    <circle cx={office.dot.cx} cy={office.dot.cy} r="14" className="fill-transparent" />

                    {isHighlighted && (
                      <circle
                        cx={office.dot.cx}
                        cy={office.dot.cy}
                        r="9"
                        className="fill-[#7A211D]/25 animate-ping origin-center"
                      />
                    )}

                    <circle
                      cx={office.dot.cx}
                      cy={office.dot.cy}
                      r={isHighlighted ? '4.8' : '3.6'}
                      className={`${
                        isHighlighted ? 'fill-[#7A211D]' : 'fill-[#7A211D]/85'
                      } stroke-white transition-all`}
                      strokeWidth={isHighlighted ? '1.6' : '1.2'}
                    />

                    {office.label && (
                      <text
                        x={office.label.x}
                        y={office.label.y}
                        textAnchor={office.label.anchor}
                        className={`font-sans transition-all select-none pointer-events-none ${
                          isHighlighted
                            ? 'font-medium text-[9px] fill-[#7A211D]'
                            : 'font-normal text-[8px] fill-stone-800'
                        }`}
                      >
                        {office.city.replace(' (HQ)', '')}
                      </text>
                    )}
                  </g>
                );
              })}

              <text
                x="48"
                y="138"
                className="font-sans text-[7.5px] tracking-[0.24em] fill-stone-400 font-bold uppercase select-none pointer-events-none"
              >
                MAHARASHTRA
              </text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfficeLocationMap;
