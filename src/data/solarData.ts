/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ProjectCaseStudy, SubsidyTier, TechSpec, Testimonial } from '../types';

export const CITIES_LIST = [
  { name: 'Amravati', state: 'Maharashtra', sunHours: '5.8 hrs/day', installations: '1,400+' },
  { name: 'Chh. Sambhajinagar', state: 'Maharashtra', sunHours: '5.7 hrs/day', installations: '1,200+' },
  { name: 'Pune', state: 'Maharashtra', sunHours: '5.5 hrs/day', installations: '1,100+' },
  { name: 'Wardha', state: 'Maharashtra', sunHours: '5.9 hrs/day', installations: '650+' },
  { name: 'Akola', state: 'Maharashtra', sunHours: '5.8 hrs/day', installations: '550+' },
  { name: 'Nagpur', state: 'Maharashtra', sunHours: '5.7 hrs/day', installations: '850+' },
];

export const SUBSIDY_TIERS: SubsidyTier[] = [
  {
    systemSize: '1 kW System',
    maxSubsidy: '₹30,000',
    centralShare: '₹30,000',
    stateBonus: 'State DISCOM credit',
    typicalNetCost: '₹32,000 – ₹35,000',
    idealFor: 'Small homes (1 BHK / 2 BHK), 1 AC + fans & lights',
  },
  {
    systemSize: '2 kW System',
    maxSubsidy: '₹60,000',
    centralShare: '₹60,000',
    stateBonus: 'MSEDCL net-metering',
    typicalNetCost: '₹64,000 – ₹68,000',
    idealFor: 'Medium homes (2-3 BHK), 2 ACs + refrigerator & TV',
  },
  {
    systemSize: '3 kW System (Recommended)',
    maxSubsidy: '₹78,000',
    centralShare: '₹78,000 (Max Cap)',
    stateBonus: 'Direct PM Surya Ghar Bank Credit',
    typicalNetCost: '₹1,08,000 – ₹1,15,000',
    idealFor: 'Large homes (3-4 BHK), 3-4 ACs + water heater & EV charger',
  },
  {
    systemSize: '5 kW & Above / Commercial',
    maxSubsidy: '₹78,000',
    centralShare: '₹78,000',
    stateBonus: 'Commercial 40% accelerated tax depreciation',
    typicalNetCost: '₹2,10,000 – ₹2,35,000',
    idealFor: 'Independent villas, duplexes, factories & housing societies',
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    homeownerName: 'Sunil & Pratibha Deshmukh',
    city: 'Amravati',
    state: 'Maharashtra',
    systemSizeKw: 5.0,
    monthlyBillBefore: 11800,
    monthlyBillAfter: 950,
    roofType: 'Concrete Terrace (RCC Elevated)',
    installationDays: 2,
    imageAlt: '5kW solar rooftop installation in Krushnarpan Colony Amravati',
    verdict: 'Reduced monthly power bill by 92%. The elevated structure kept the terrace completely usable.',
  },
  {
    id: 'proj-2',
    homeownerName: 'Ananya & Vikram Kulkarni',
    city: 'Pune',
    state: 'Maharashtra',
    systemSizeKw: 3.3,
    monthlyBillBefore: 8200,
    monthlyBillAfter: 650,
    roofType: 'Tiled Slope Roof with WindPro Mounts',
    installationDays: 1,
    imageAlt: '3.3kW rooftop solar panels on villa in Baner Pune',
    verdict: 'Claimed ₹78,000 PM Surya Ghar subsidy directly to bank account within 22 days.',
  },
  {
    id: 'proj-3',
    homeownerName: 'Sanjay Shinde (Shivaji Housing Society)',
    city: 'Chh. Sambhajinagar',
    state: 'Maharashtra',
    systemSizeKw: 15.0,
    monthlyBillBefore: 38400,
    monthlyBillAfter: 3200,
    roofType: 'High-Rise Apartment Parapet Elevated Array',
    installationDays: 4,
    imageAlt: '15kW common area solar system for apartment society in Aurangabad',
    verdict: 'Common area lift and pump power costs dropped by over 90%, reducing society maintenance charges.',
  },
  {
    id: 'proj-4',
    homeownerName: 'Kishore Surkar',
    city: 'Wardha',
    state: 'Maharashtra',
    systemSizeKw: 4.2,
    monthlyBillBefore: 9600,
    monthlyBillAfter: 720,
    roofType: 'Flat RCC Terrace with Zero-Leak Mounts',
    installationDays: 2,
    imageAlt: '4.2kW residential solar rooftop installation in Arvi Naka Wardha',
    verdict: 'Seamless net-metering synchronization with MSEDCL. Generates steady surplus power all year round.',
  },
];

export const TECH_SPECS: TechSpec[] = [
  {
    category: 'Solar PV Modules',
    title: 'N-Type TOPCon Mono Half-Cut Panels (580Wp)',
    description: 'Higher efficiency (22.8%) with up to 25% rear-side reflected sunlight gain for maximum cloudy yield.',
    badge: 'Tier-1 Certified',
    specifications: [
      '580Wp N-Type TOPCon Cell Architecture',
      '22.8% Module Efficiency',
      'Dual-Glass Bifacial Generation',
      'Anti-PID & Low Light Performance',
    ],
  },
  {
    category: 'Inverter Technology',
    title: 'Smart Hybrid Grid-Tie Inverters (98.6% Efficiency)',
    description: 'Dual MPPT trackers with built-in Wi-Fi IoT telemetry and zero grid export throttling.',
    badge: '98.6% European Efficiency',
    specifications: [
      'Dual Independent MPPT Trackers',
      'Integrated Wi-Fi / 4G Telemetry Logger',
      'Pure Sine Wave Output with IP65 Enclosure',
      'Remote OTA Firmware Diagnostics',
    ],
  },
  {
    category: 'Mounting Structure',
    title: 'Hot-Dip Galvanized & Anodized Elevated Frames',
    description: 'Corrosion-proof 80-micron zinc coating tested for 160 km/h wind speeds, preserving terrace walking space.',
    badge: '160 km/h Wind Tested',
    specifications: [
      '80-Micron Hot-Dip Galvanization',
      'Zero Terrace Waterproofing Penetration',
      'Elevated 6-8 Ft Clearance Options',
      'Stainless Steel Grade 304 Fasteners',
    ],
  },
  {
    category: 'Safety & Protection',
    title: 'Dual Surge Protection (SPD) & Chemical Earthing',
    description: 'Independent copper-bonded chemical earthing pits with lightning arrestors protecting home appliances.',
    badge: '< 2 Ohm Earth Resistance',
    specifications: [
      'Dual Type-II Surge Protection Devices (SPD)',
      'Independent Chemical Copper-Bonded Earthing',
      'Dedicated Class-A Lightning Arrestor',
      'Automatic DC & AC Isolation Disconnects',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Rajesh & Meera Patil',
    role: 'Homeowner',
    city: 'Amravati, Maharashtra',
    beforeBill: 12000,
    afterBill: 950,
    rating: 5,
    systemSizeKw: 5.2,
    quote:
      'SolarArk made the entire transition effortless. Our electricity bill went from ₹12,000 down to under ₹1,000 every month, and the PM Surya Ghar subsidy was credited directly to our account without running after DISCOM officials.',
    thumbnailAlt: 'Patil family at their solar rooftop bungalow in Amravati',
    verifiedBadge: true,
  },
  {
    id: 'test-2',
    author: 'Advocate Nitin Gaikwad',
    role: 'Villa Owner',
    city: 'Chh. Sambhajinagar, Maharashtra',
    beforeBill: 8500,
    afterBill: 680,
    rating: 5,
    systemSizeKw: 3.3,
    quote:
      'The engineering quality and terrace elevated structure exceeded my expectations. Even in heavy monsoon winds, the structure is rock solid, and generation tracking on mobile is super accurate.',
    thumbnailAlt: 'Advocate Gaikwad beside his rooftop solar array in Aurangabad',
    verifiedBadge: true,
  },
  {
    id: 'test-3',
    author: 'Dr. Pravin Joshi',
    role: 'Clinic & Residence',
    city: 'Pune, Maharashtra',
    beforeBill: 16500,
    afterBill: 1200,
    rating: 5,
    systemSizeKw: 6.0,
    quote:
      'From 3D shadow analysis to net-meter commissioning, the SolarArk team took care of everything. Outstanding customer support and genuine equipment.',
    thumbnailAlt: 'Dr. Joshi residence solar installation in Pune',
    verifiedBadge: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Financial',
    question: 'How much subsidy do I get under PM Surya Ghar Muft Bijli Yojana?',
    answer:
      'Under the PM Surya Ghar National Scheme, homeowners get ₹30,000 for a 1 kW system, ₹60,000 for 2 kW, and a maximum central subsidy of ₹78,000 for 3 kW and higher residential capacity. SolarArk handles 100% of the portal filing and document verification for direct bank credit.',
  },
  {
    id: 'faq-2',
    category: 'Process',
    question: 'How long does the entire solar installation and net-metering process take?',
    answer:
      'Physical rooftop installation is completed within 1 to 2 days by certified technicians. Net-metering inspection and bi-directional meter commissioning with MSEDCL / state DISCOM typically takes 10 to 20 working days depending on local subdivision schedules.',
  },
  {
    id: 'faq-3',
    category: 'Product',
    question: 'Will solar panels damage my terrace waterproofing or usable roof space?',
    answer:
      'No. SolarArk uses specialized elevated galvanized mounting structures that elevate panels 6 to 8 feet above the terrace floor. This preserves full usable walking space underneath while avoiding drilling into roof waterproofing membranes.',
  },
  {
    id: 'faq-4',
    category: 'Technical',
    question: 'What happens on cloudy or rainy monsoon days?',
    answer:
      'Solar panels generate power using diffused daylight even during overcast weather. While generation is 25% to 40% of peak sunny yield, your net-metered grid connection supplies seamless electricity automatically whenever needed.',
  },
  {
    id: 'faq-5',
    category: 'Technical',
    question: 'How do I track my daily electricity generation and savings?',
    answer:
      'Every SolarArk system includes a smart IoT Wi-Fi data logger integrated with our mobile telemetry portal, giving you real-time visibility into daily unit generation, grid exports, and lifetime bill savings.',
  },
];

export const FAQ_LIST = FAQS;

