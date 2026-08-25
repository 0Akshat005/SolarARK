// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, Building2, Navigation } from "lucide-react";

export interface OfficeLocation {
  type?: string;
  city: string;
  badge: string;
  address: string;
  latitude?: number;
  longitude?: number;
  phone: string;
  email: string;
  mapUrl: string;
}

interface OfficeLocationMapProps {
  offices: OfficeLocation[];
  defaultActiveIndex?: number;
}

export const OfficeLocationMap: React.FC<OfficeLocationMapProps> = ({
  offices,
  defaultActiveIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const active = offices[activeIndex];

  // Geocoded Coordinate Query for Google Maps Embed centering exactly on the office
  const embedSrc = active.latitude && active.longitude
    ? `https://maps.google.com/maps?q=${active.latitude},${active.longitude}&hl=en&z=16&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(active.address)}&hl=en&z=16&output=embed`;

  return (
    <section aria-label="Office Locations Map" className="bg-white border border-[#EBE6DF] rounded-[20px] p-5 sm:p-7 xl:p-8 shadow-[0_10px_28px_rgba(28,35,46,0.07)] space-y-4 sm:space-y-5 h-full flex flex-col justify-between">
      {/* Header Block */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#8B1E1E] border border-red-100 font-heading">
          <Navigation className="w-3.5 h-3.5 text-[#8B1E1E]" />
          <span>Regional Footprint &amp; Map</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18] m-0">SolarArk Registered Offices</h2>
        <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0">Select a regional center to view its address, engineering service desk &amp; live map.</p>
      </div>

      {/* Resilient Office Selector Row — Single line on desktop, scroll rail on mobile */}
      <div 
        className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar pb-0.5 pt-0.5" 
        role="tablist" 
        aria-label="Choose office location"
      >
        {offices.map((office, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={office.city}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl text-[10.5px] sm:text-[11px] xl:text-xs font-semibold tracking-tight whitespace-nowrap shrink-0 border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none ${
                isActive
                  ? "bg-[#8B1E1E] text-white border-[#8B1E1E] shadow-sm"
                  : "bg-white text-slate-700 border-stone-200 hover:border-[#8B1E1E40] hover:text-[#8B1E1E]"
              }`}
            >
              <Building2 className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isActive ? "text-white" : "text-stone-400"}`} />
              <span>{office.city}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Map with High-Precision SolarARK Maroon Marker Pin */}
      <div className="relative rounded-2xl overflow-hidden border border-[#EBE6DF] shadow-[0_2px_8px_rgba(26,31,44,0.04)] flex-1 min-h-[380px]">
        {/* Google Map Frame */}
        <div key={activeIndex} className="animate-in fade-in duration-300 h-full">
          <iframe
            title={`Map showing ${active.city}`}
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Google Map location for ${active.city}`}
            className="w-full h-full block"
          />
        </div>

        {/* ── Exact Geolocation Maroon Pin Anchor at (50%, 50%) dead center of the Map ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10 flex flex-col items-center animate-in zoom-in duration-300">
          {/* Location Badge Pill */}
          <div className="bg-slate-900/90 text-white text-[10px] font-bold font-heading px-2.5 py-1 rounded-full shadow-lg border border-white/20 whitespace-nowrap mb-1.5 backdrop-blur-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] animate-ping" />
            <span>SolarArk {active.city.split(' ')[0]}</span>
          </div>

          {/* Premium 3D Maroon Marker Icon */}
          <div className="relative flex items-center justify-center">
            {/* Ground Radar Pulse */}
            <span className="absolute -bottom-1 w-7 h-7 rounded-full bg-[#8B1E1E]/40 animate-ping" />
            <span className="absolute -bottom-0.5 w-4 h-2 rounded-full bg-[#540D0D]/70 blur-[1px]" />
            
            {/* Custom SVG Maroon Teardrop Marker */}
            <svg
              className="w-9 h-11 drop-shadow-[0_8px_16px_rgba(139,30,30,0.65)]"
              viewBox="0 0 36 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="solararkMaroonPin" x1="18" y1="0" x2="18" y2="44" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#A82424" />
                  <stop offset="50%" stopColor="#8B1E1E" />
                  <stop offset="100%" stopColor="#540D0D" />
                </linearGradient>
              </defs>
              <path
                d="M18 0C8.05887 0 0 8.05887 0 18C0 28.5 15.75 42.4 17.2 43.66C17.66 44.06 18.34 44.06 18.8 43.66C20.25 42.4 36 28.5 36 18C36 8.05887 27.9411 0 18 0Z"
                fill="url(#solararkMaroonPin)"
                stroke="#FFFFFF"
                strokeWidth="1.75"
              />
              {/* Inner Solar Shield Rings */}
              <circle cx="18" cy="18" r="7.5" fill="#FFFFFF" />
              <circle cx="18" cy="18" r="5.5" fill="#8B1E1E" />
              <circle cx="18" cy="18" r="2.75" fill="#FFB020" />
            </svg>
          </div>
        </div>

        {/* Floating Glassmorphic Office Details Card */}
        <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-[300px] bg-white/95 backdrop-blur-sm border border-[#EBE6DF] rounded-2xl p-4 shadow-[0_10px_28px_rgba(28,35,46,0.12)] space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 font-heading m-0">{active.city}</h3>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full font-heading border border-[#8B1E1E20] shrink-0">{active.badge}</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
            <MapPin className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
            <span>{active.address}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 pt-1 border-t border-stone-100">
            <a href={`tel:${active.phone.replace(/\s+/g, "")}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors tabular-nums focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded">
              <Phone className="w-3 h-3 text-stone-400" />
              <span>{active.phone}</span>
            </a>
            <a href={`mailto:${active.email}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded">
              <Mail className="w-3 h-3 text-stone-400" />
              <span>{active.email}</span>
            </a>
          </div>
          <a href={active.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B1E1E] hover:underline cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded">
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocationMap;
