/**
 * @license SPDX-License-Identifier: Apache-2.0
 * Single Source of Truth for SolarArk Office Locations in Maharashtra
 * Grounded in official SolarArk data and verified cartographic coordinates.
 */

export interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  type: string;
  badge: string;
  isHQ?: boolean;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  directionsUrl: string;
  mapSearchUrl: string;
  mapUrl: string;
  /** SVG coordinates for the Maharashtra vector silhouette */
  dot: {
    cx: number;
    cy: number;
  };
  label: {
    x: number;
    y: number;
    anchor: 'start' | 'end' | 'middle';
  };
}

export const SOLARARK_OFFICES: OfficeLocation[] = [
  {
    id: 'amravati',
    name: 'Amravati (HQ)',
    city: 'Amravati',
    type: 'Head Office & Engineering Center',
    badge: 'Central HQ',
    isHQ: true,
    // Note: Official SolarArk address strictly verified as 27 A (not 72A).
    address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605, India',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    coordinates: {
      lat: 20.916927,
      lng: 77.749208,
    },
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605, India'
    )}`,
    mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=20.916927,77.749208',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.916927,77.749208',
    dot: { cx: 135, cy: 36 },
    label: { x: 144, y: 38, anchor: 'start' },
  },
  {
    id: 'akola',
    name: 'Akola',
    city: 'Akola',
    type: 'Regional Operations Center',
    badge: 'Operations Hub',
    address: 'JMD Market, Shop No. 30, Civil Line Road, Akola, Maharashtra, India',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    coordinates: {
      lat: 20.705900,
      lng: 77.021900,
    },
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      'JMD Market, Shop No. 30, Civil Line Road, Akola, Maharashtra, India'
    )}`,
    mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=20.705900,77.021900',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.705900,77.021900',
    dot: { cx: 108, cy: 52 },
    label: { x: 99, y: 54, anchor: 'end' },
  },
  {
    id: 'wardha',
    name: 'Wardha',
    city: 'Wardha',
    type: 'Vidarbha Regional Branch',
    badge: 'Vidarbha Hub',
    address: 'C/o Kishore Surkar, Infront of Amit Tailors, Near Dr. Mehre Clinic, Near Arts College Road, Arvi Naka, Wardha, Maharashtra, India',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    coordinates: {
      lat: 20.754335,
      lng: 78.601618,
    },
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      'C/o Kishore Surkar, Infront of Amit Tailors, Near Dr. Mehre Clinic, Near Arts College Road, Arvi Naka, Wardha, Maharashtra, India'
    )}`,
    mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=20.754335,78.601618',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.754335,78.601618',
    dot: { cx: 148, cy: 62 },
    label: { x: 157, y: 64, anchor: 'start' },
  },
  {
    id: 'sambhajinagar',
    name: 'Sambhajinagar',
    city: 'Sambhajinagar',
    type: 'Marathwada Regional Office',
    badge: 'Marathwada Hub',
    address: 'Near Saptapadi Mangal Karyalaya Road, H. No. 49R-29, Baliram Patil School Road, Chhatrapati Sambhajinagar, Maharashtra, India',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    coordinates: {
      lat: 19.896246,
      lng: 75.358003,
    },
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      'Near Saptapadi Mangal Karyalaya Road, H. No. 49R-29, Baliram Patil School Road, Chhatrapati Sambhajinagar, Maharashtra, India'
    )}`,
    mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=19.896246,75.358003',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=19.896246,75.358003',
    dot: { cx: 82, cy: 92 },
    label: { x: 91, y: 94, anchor: 'start' },
  },
];

/** Default center covering Maharashtra region for initial view */
export const MAHARASHTRA_CENTER = {
  lat: 20.45,
  lng: 77.10,
};

export const MAHARASHTRA_DEFAULT_ZOOM = 7;

export const MAHARASHTRA_PATH =
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

