// SPDX-License-Identifier: Apache-2.0
import React, { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, Building2, Navigation } from "lucide-react";

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
    <section aria-label="Office Locations Map" className="bg-white border border-[#EBE6DF] rounded-[20px] p-4 sm:p-6 shadow-[0_10px_28px_rgba(28,35,46,0.07)] space-y-5">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#8B1E1E] border border-red-100 font-heading">
          <Navigation className="w-3.5 h-3.5 text-[#8B1E1E]" />
          <span>Find Us on the Map</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18] m-0">Visit Our Nearest Office</h2>
        <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0">Select a location to view its exact address and directions on the map.</p>
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose office location">
        {offices.map((office, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={office.city}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold font-heading border transition-all cursor-pointer ${isActive ? "bg-[#8B1E1E] text-white border-[#8B1E1E] shadow-sm" : "bg-white text-slate-700 border-stone-300 hover:border-[#8B1E1E40] hover:text-[#8B1E1E]"}`}
            >
              <Building2 className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-stone-400"}`} />
              {office.city}
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
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Google Map location for ${active.city}`}
            className="w-full block"
          />
        </div>

        <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-[320px] bg-white/95 backdrop-blur-sm border border-[#EBE6DF] rounded-2xl p-4 shadow-[0_10px_28px_rgba(28,35,46,0.12)] space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 font-heading m-0">{active.city}</h3>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full font-heading border border-[#8B1E1E20] shrink-0">{active.badge}</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
            <MapPin className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
            <span>{active.address}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 pt-1 border-t border-stone-100">
            <a href={`tel:${active.phone.replace(/\s+/g, "")}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors tabular-nums">
              <Phone className="w-3 h-3 text-stone-400" />
              <span>{active.phone}</span>
            </a>
            <a href={`mailto:${active.email}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-stone-400" />
              <span>{active.email}</span>
            </a>
          </div>
          <a href={active.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B1E1E] hover:underline cursor-pointer">
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {offices.map((office, idx) =>
          idx === activeIndex ? null : (
            <button
              key={office.city}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-50 border border-stone-200 text-[11px] font-medium text-stone-600 hover:border-[#8B1E1E40] hover:text-[#8B1E1E] transition-all cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-stone-400" />
              {office.city}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default OfficeLocationMap;
