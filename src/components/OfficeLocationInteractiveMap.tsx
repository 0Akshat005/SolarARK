/**
 * @license SPDX-License-Identifier: Apache-2.0
 * OfficeLocationInteractiveMap — Genuine, Rectangular Google Map
 * Renders an authentic Google Map with real geographic tiles, roads, and terrain.
 * Strictly no SVG illustrations, fake maps, or decorative chrome.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { MapPin } from 'lucide-react';
import {
  SOLARARK_OFFICES,
  OfficeLocation,
  MAHARASHTRA_CENTER,
  MAHARASHTRA_DEFAULT_ZOOM,
} from '../data/officeLocations';

interface OfficeLocationInteractiveMapProps {
  selectedOfficeId?: string;
  onSelectOffice: (officeId: string) => void;
  className?: string;
}

/**
 * Controller hook component to synchronize camera pan and fit bounds.
 */
const MapCameraController: React.FC<{
  selectedOffice: OfficeLocation | undefined;
  offices: OfficeLocation[];
}> = ({ selectedOffice, offices }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (selectedOffice) {
      map.panTo(selectedOffice.coordinates);
      const currentZoom = map.getZoom() || 7;
      if (currentZoom < 11) {
        map.setZoom(12);
      }
    } else {
      // Fit bounds to show all 4 offices without excessive empty space
      const bounds = new google.maps.LatLngBounds();
      offices.forEach((off) => bounds.extend(off.coordinates));
      map.fitBounds(bounds, 40);
    }
  }, [map, selectedOffice, offices]);

  return null;
};

export const OfficeLocationInteractiveMap: React.FC<OfficeLocationInteractiveMapProps> = ({
  selectedOfficeId = 'amravati',
  onSelectOffice,
  className = '',
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || 'DEMO_MAP_ID';

  const selectedOffice = useMemo(
    () => SOLARARK_OFFICES.find((off) => off.id === selectedOfficeId) || SOLARARK_OFFICES[0],
    [selectedOfficeId]
  );

  const [hoveredOfficeId, setHoveredOfficeId] = useState<string | null>(null);

  return (
    <div
      aria-label="Google Map of SolarArk Office Locations"
      className={`relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-[4px] border border-[#E6E3DD] bg-[#F7F5F0] shadow-xs ${className}`}
    >
      {apiKey ? (
        /* Live Google Maps JS API with Advanced Markers */
        <APIProvider apiKey={apiKey} libraries={['marker']}>
          <Map
            mapId={mapId}
            defaultCenter={MAHARASHTRA_CENTER}
            defaultZoom={MAHARASHTRA_DEFAULT_ZOOM}
            gestureHandling="cooperative"
            disableDefaultUI={false}
            zoomControl={true}
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={true}
            internalUsageAttributionIds={['gmp_git_agentskills_v1']}
            className="w-full h-full"
          >
            <MapCameraController selectedOffice={selectedOffice} offices={SOLARARK_OFFICES} />

            {SOLARARK_OFFICES.map((office) => {
              const isSelected = selectedOfficeId === office.id;
              const isHovered = hoveredOfficeId === office.id;

              return (
                <AdvancedMarker
                  key={office.id}
                  position={office.coordinates}
                  title={`${office.name} - ${office.address}`}
                  zIndex={isSelected ? 50 : isHovered ? 40 : 10}
                  onClick={() => onSelectOffice(office.id)}
                  onMouseEnter={() => setHoveredOfficeId(office.id)}
                  onMouseLeave={() => setHoveredOfficeId(null)}
                >
                  <div className="relative flex flex-col items-center cursor-pointer group select-none">
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-transform duration-200 ${
                        isSelected
                          ? 'w-9 h-9 bg-[#7A211D] text-white shadow-md scale-110 ring-4 ring-[#7A211D]/30'
                          : isHovered
                          ? 'w-8 h-8 bg-[#7A211D] text-white shadow-sm scale-105'
                          : 'w-7 h-7 bg-white text-[#7A211D] border border-[#7A211D]/50 shadow-2xs'
                      }`}
                    >
                      <MapPin className={`w-4 h-4 ${isSelected ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
                    </div>

                    <div
                      className={`mt-1 px-2 py-0.5 rounded-[3px] border text-[10px] whitespace-nowrap transition-all font-body font-medium shadow-2xs ${
                        isSelected
                          ? 'bg-[#151817] text-white border-[#151817]'
                          : 'bg-white/95 text-stone-800 border-[#E6E3DD] group-hover:border-stone-400'
                      }`}
                    >
                      <span>{office.city}</span>
                      {office.isHQ && <span className="text-[#B24635] ml-1 font-bold">HQ</span>}
                    </div>
                  </div>
                </AdvancedMarker>
              );
            })}
          </Map>
        </APIProvider>
      ) : (
        /* Authentic Google Maps Live Geographic Embed */
        <iframe
          title="Google Map showing SolarArk Office Locations in Maharashtra"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            selectedOffice
              ? `${selectedOffice.name}, ${selectedOffice.address}`
              : 'Amravati, Maharashtra, India'
          )}&t=m&z=12&output=embed`}
          className="w-full h-full border-0 block"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default OfficeLocationInteractiveMap;
