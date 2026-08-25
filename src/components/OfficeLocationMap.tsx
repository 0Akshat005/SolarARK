// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, Building2 } from "lucide-react";

export interface OfficeLocation {
  city: string;
  badge: string;
  address: string;
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

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(active.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="space-y-4">
      <div className="space-y-1.5 pb-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#8B1E1E] border border-red-100 font-heading">
          <Building2 className="w-3.5 h-3.5 text-[#8B1E1E]" />
          <span>Regional Footprint</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18] m-0">SolarArk Registered Offices</h2>
        <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0">Select a location below to view it live on the map.</p>
      </div>

      <div role="tablist" aria-label="Choose office location" className="bg-white border border-[#EBE6DF] rounded-2xl divide-y divide-[#EBE6DF] overflow-hidden shadow-[0_2px_8px_rgba(26,31,44,0.04)]">
        {offices.map((office, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={office.city}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all cursor-pointer border-l-[3px] ${isActive ? "border-l-[#8B1E1E] bg-red-50/50" : "border-l-transparent hover:bg-stone-50"}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-[#8B1E1E] text-white" : "bg-stone-100 text-stone-400"}`}>
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold font-heading truncate ${isActive ? "text-[#0B1730]" : "text-slate-700"}`}>{office.city}</span>
                  {isActive && (
                    <span className="text-[9px] font-semibold uppercase tracking-wider bg-white text-[#8B1E1E] px-2 py-0.5 rounded-full font-heading border border-[#8B1E1E20] shrink-0">{office.badge}</span>
                  )}
                </div>
                {isActive && (
                  <p className="text-[11px] text-stone-500 leading-snug mt-0.5 m-0 line-clamp-1">{office.address}</p>
                )}
              </div>
              {!isActive && (
                <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 shrink-0 font-heading">{office.badge.split(" ")[0]}</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative rounded-2xl overflow-hidden border border-[#EBE6DF] shadow-[0_2px_8px_rgba(26,31,44,0.04)]">
        <div key={activeIndex} className="animate-in fade-in duration-300">
          <iframe
            title={`Map showing ${active.city}`}
            src={embedSrc}
            width="100%"
            height="240"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Google Map location for ${active.city}`}
            className="w-full block"
          />
        </div>

        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-[#EBE6DF] rounded-xl p-3.5 shadow-[0_10px_28px_rgba(28,35,46,0.12)] flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-4 text-[11px] text-stone-600 min-w-0">
            <a href={`tel:${active.phone.replace(/\s+/g, "")}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors tabular-nums shrink-0">
              <Phone className="w-3 h-3 text-stone-400" />
              <span>{active.phone}</span>
            </a>
            <a href={`mailto:${active.email}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors truncate">
              <Mail className="w-3 h-3 text-stone-400 shrink-0" />
              <span className="truncate">{active.email}</span>
            </a>
          </div>
          <a href={active.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B1E1E] hover:underline cursor-pointer shrink-0">
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocationMap;
