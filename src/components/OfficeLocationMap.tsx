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

      {/* Active Office Address Details Strip (Unobstructed & Clean) */}
      <div className="bg-[#FAF9F6] border border-[#EBE6DF] rounded-xl p-3.5 sm:p-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading m-0">{active.city}</h3>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full font-heading border border-[#8B1E1E20] shrink-0">{active.badge}</span>
          </div>
          <a 
            href={active.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B1E1E] hover:underline cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded shrink-0"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
          <MapPin className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
          <span>{active.address}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 pt-1.5 border-t border-stone-200/60">
          <a href={`tel:${active.phone.replace(/\s+/g, "")}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1.5 transition-colors tabular-nums focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded">
            <Phone className="w-3 h-3 text-stone-400" />
            <span>{active.phone}</span>
          </a>
          <a href={`mailto:${active.email}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded">
            <Mail className="w-3 h-3 text-stone-400" />
            <span>{active.email}</span>
          </a>
        </div>
      </div>

      {/* Unobstructed, Full-Visibility Interactive Google Map Container */}
      <div className="relative rounded-2xl overflow-hidden border border-[#EBE6DF] shadow-[0_2px_8px_rgba(26,31,44,0.04)] flex-1 min-h-[340px] sm:min-h-[360px]">
        {offices.map((office, idx) => {
          const isCurrent = idx === activeIndex;
          const embedUrl = office.latitude && office.longitude
            ? `https://maps.google.com/maps?q=${office.latitude},${office.longitude}&hl=en&z=16&output=embed`
            : `https://maps.google.com/maps?q=${encodeURIComponent(office.address)}&hl=en&z=16&output=embed`;

          return (
            <div 
              key={office.city} 
              className={`w-full h-full absolute inset-0 transition-opacity duration-300 ${
                isCurrent ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <iframe
                title={`Map showing ${office.city}`}
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label={`Google Map location for ${office.city}`}
                className="w-full h-full block"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfficeLocationMap;
