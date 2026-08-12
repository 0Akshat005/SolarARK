/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ProjectCaseStudy, SubsidyTier, TechSpec, Testimonial } from '../types';

export const CITIES_LIST = [
  { name: 'Bengaluru', state: 'Karnataka', sunHours: '5.2 hrs/day', installations: '3,800+' },
  { name: 'Delhi NCR', state: 'Delhi & NCR', sunHours: '5.5 hrs/day', installations: '4,200+' },
  { name: 'Pune', state: 'Maharashtra', sunHours: '5.4 hrs/day', installations: '2,600+' },
  { name: 'Hyderabad', state: 'Telangana', sunHours: '5.6 hrs/day', installations: '2,100+' },
  { name: 'Mumbai', state: 'Maharashtra', sunHours: '5.1 hrs/day', installations: '1,900+' },
  { name: 'Ahmedabad', state: 'Gujarat', sunHours: '5.8 hrs/day', installations: '3,100+' },
  { name: 'Jaipur', state: 'Rajasthan', sunHours: '5.9 hrs/day', installations: '1,400+' },
  { name: 'Chennai', state: 'Tamil Nadu', sunHours: '5.5 hrs/day', installations: '1,800+' },
];

export const SUBSIDY_TIERS: SubsidyTier[] = [
  {
    systemSize: '1 kW System',
    maxSubsidy: '₹30,000',
    centralShare: '₹30,000',
    stateBonus: 'Varies by state',
    typicalNetCost: '₹32,000 – ₹35,000',
    idealFor: 'Small homes (1 BHK / 2 BHK), 1 AC + fans & lights',
  },
  {
    systemSize: '2 kW System',
    maxSubsidy: '₹60,000',
    centralShare: '₹60,000',
    stateBonus: 'State tops up in select regions',
    typicalNetCost: '₹64,000 – ₹68,000',
    idealFor: 'Medium homes (2-3 BHK), 2 ACs + refrigerator & TV',
  },
  {
    systemSize: '3 kW System (Recommended)',
    maxSubsidy: '₹78,000',
    centralShare: '₹78,000 (Max Cap)',
    stateBonus: 'State DISCOM direct credit',
    typicalNetCost: '₹1,08,000 – ₹1,15,000',
    idealFor: 'Large homes (3-4 BHK), 3-4 ACs + water heater & EV charger',
  },
  {
    systemSize: '5 kW & Above',
    maxSubsidy: '₹78,000',
    centralShare: '₹78,000',
    stateBonus: 'Commercial tax depreciation benefits available',
    typicalNetCost: '₹2,10,000 – ₹2,35,000',
    idealFor: 'Independent villas, duplexes, heavy AC usage & heat pumps',
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    homeownerName: 'Dr. Rajesh Sharma',
    city: 'Bengaluru',
    state: 'Karnataka',
    systemSizeKw: 5.0,
    monthlyBillBefore: 12500,
    monthlyBillAfter: 1100,
    roofType: 'Concrete Terrace (RCC)',
    installationDays: 2,
    imageAlt: '5kW solar rooftop installation in HSR Layout Bengaluru',
    verdict: 'Cut 91% of monthly power costs. Installed in 48 hours without any structural damage.',
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
    homeownerName: 'Suresh Patel',
    city: 'Ahmedabad',
    state: 'Gujarat',
    systemSizeKw: 4.0,
    monthlyBillBefore: 10400,
    monthlyBillAfter: 800,
    roofType: 'Flat RCC Roof with Elevated Pergola Design',
    installationDays: 2,
    imageAlt: '4kW solar rooftop pergola in Satellite Ahmedabad',
    verdict: 'Elevated structure preserved full terrace garden usable space. Zero generation deficit in 14 months.',
  },
  {
    id: 'proj-4',
    homeownerName: 'Meenakshi & Sundaram',
    city: 'Chennai',
    state: 'Tamil Nadu',
    systemSizeKw: 6.0,
    monthlyBillBefore: 16800,
    monthlyBillAfter: 1450,
    roofType: 'Coastal Wind-Pro 170 km/h Galvanized Structure',
    installationDays: 3,
    imageAlt: '6kW solar rooftop in ECR Chennai',
    verdict: 'Survived two coastal cyclone storms with zero panel vibration or corrosion.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Rohan Deshmukh',
    role: 'IT Director & Homeowner',
    city: 'Pune, MH',
    beforeBill: 14500,
    afterBill: 1100,
    rating: 5,
    systemSizeKw: 5.0,
    quote: 'Our summer electricity bill used to cross ₹14,000 every single month running 3 ACs. With SolarARK, our net bill was ₹1,100 last month! The 3D roof preview looked identical to what was installed on day 2.',
    thumbnailAlt: 'Rohan Deshmukh on his rooftop in Baner',
    verifiedBadge: true,
  },
  {
    id: 'test-2',
    author: 'Priya & Ramesh Iyer',
    role: 'Retired Government Officers',
    city: 'Bengaluru, KA',
    beforeBill: 7800,
    afterBill: 620,
    rating: 5,
    systemSizeKw: 3.2,
    quote: 'We were worried about paperwork for the PM Surya Ghar government subsidy. SolarARK handled the entire net-metering application and DISCOM approval. The ₹78,000 subsidy credited right to our account.',
    thumbnailAlt: 'Priya Iyer showing live generation stats on SolarARK mobile app',
    verifiedBadge: true,
  },
  {
    id: 'test-3',
    author: 'Capt. Arvind Narang',
    role: 'Commercial Pilot',
    city: 'Gurugram, HR',
    beforeBill: 22000,
    afterBill: 1900,
    rating: 5,
    systemSizeKw: 8.0,
    quote: 'The WindPro 170 km/h mounting structure is what sold me. We had intense pre-monsoon squalls in NCR, and while local neighborhood solar structures shook, our SolarARK array was rock solid.',
    thumbnailAlt: 'Capt Narang beside his 8kW solar array',
    verifiedBadge: true,
  },
  {
    id: 'test-4',
    author: 'Smita & Jayesh Mehta',
    role: 'Business Owners',
    city: 'Ahmedabad, GJ',
    beforeBill: 11200,
    afterBill: 850,
    rating: 5,
    systemSizeKw: 4.0,
    quote: 'The SunSure Promise generation guarantee gives complete peace of mind. We receive monthly performance audits on the app. Best home upgrade investment we have made in 15 years.',
    thumbnailAlt: 'Smita Mehta on solar rooftop in Satellite',
    verifiedBadge: true,
  },
];

export const TECH_SPECS: TechSpec[] = [
  {
    category: 'Solar Panels',
    title: 'Tier-1 N-Type TOPCon Bifacial Panels',
    badge: '22.8% Module Efficiency',
    description: 'Ultra-high efficiency German-engineered cell technology that generates power from both top and rear reflected sunlight.',
    specifications: [
      '22.8% Maximum Module Conversion Efficiency',
      'Lower temperature coefficient (-0.30%/°C) for Indian summers',
      'PID/LID Resistant cell encapsulation',
      '30-Year Linear Power Output Performance Warranty',
    ],
  },
  {
    category: 'Solar Inverters',
    title: 'Smart Hybrid & On-Grid Dual MPPT Inverters',
    badge: '98.6% Conversion Efficiency',
    description: 'High-speed maximum power point tracking with built-in Wi-Fi, anti-islanding protection, and lightning surge arrestors.',
    specifications: [
      'Dual MPPT channels for dual-roof orientations',
      'Built-in Type II AC/DC Surge Protection Devices (SPD)',
      'IP66 Weatherproof outdoor enclosure rating',
      '10-Year Comprehensive Inverter Replacement Warranty',
    ],
  },
  {
    category: 'Mounting Structure',
    title: 'WindPro™ Hot-Dip Galvanized High-Wind Structure',
    badge: 'Tested for 170 km/h Winds',
    description: 'IIT-tested structural engineering with zero-roof penetration clamps and hot-dip 80-micron zinc coating for zero rust.',
    specifications: [
      'Engineered for 170 km/h cyclone wind rating',
      '80-micron Hot-Dip Galvanized Iron (HDGI) coating',
      'Zero-penetration clamps for tin/metal roofs',
      '25-Year Corrosion-Free Structural Guarantee',
    ],
  },
  {
    category: 'Safety & Monitoring',
    title: 'DC Rapid Shutdown & Real-Time Cloud Telemetry',
    badge: '24/7 Remote Diagnostics',
    description: 'Automatic string-level fault monitoring with instant DISCOM net-meter synchronization and smartphone cloud control.',
    specifications: [
      'String-level current & voltage arc detection',
      'Cellular / Wi-Fi dual telemetry backup',
      'Automatic grid isolation within 10 milliseconds',
      'Mobile App push alerts for cleaning & maintenance',
    ],
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Product',
    question: 'How much space on my roof is required for a 3 kW solar system?',
    answer: 'A standard 3 kW residential solar system requires approximately 200 to 250 sq. ft. of shade-free rooftop space. Our engineers conduct a precision 3D shade analysis to maximize generation even if you have water tanks or chimneys.',
  },
  {
    id: 'faq-2',
    category: 'Product',
    question: 'Will solar panels damage my rooftop or cause water leakage during monsoons?',
    answer: 'No. SolarARK uses zero-penetration chemical anchoring and non-invasive clamp structures tested at IIT labs. We do not puncture roof slabs. Rainwater flows naturally underneath without pooling.',
  },
  {
    id: 'faq-3',
    category: 'Financial',
    question: 'How does the PM Surya Ghar government subsidy process work?',
    answer: 'Under the PM Surya Ghar Muft Bijli Yojana, eligible homes get up to ₹78,000 central subsidy for 3kW systems. SolarARK handles the entire portal registration, DISCOM net-metering approval, and inspector sign-off. The subsidy amount is credited directly to your registered bank account by the government.',
  },
  {
    id: 'faq-4',
    category: 'Financial',
    question: 'What financing or zero-down EMI options are available?',
    answer: 'We partner with nationalized and private banks (SBI, HDFC, ICICI, Canara Bank) to offer solar home loans starting at 7.0% per annum. Zero-down EMI plans let you pay for solar using the money you save on electricity bills.',
  },
  {
    id: 'faq-5',
    category: 'Financial',
    question: 'What is the SunSure Promise™ generation guarantee?',
    answer: 'SunSure Promise™ guarantees that your installed system will meet or exceed its committed monthly kWh yield. If generation falls short due to any equipment or installation flaw, SolarARK reimburses the shortfall cash directly to your bank account.',
  },
  {
    id: 'faq-6',
    category: 'Technical',
    question: 'What happens to solar generation during cloudy or monsoon days?',
    answer: 'N-Type TOPCon solar panels are engineered for diffuse light absorption and continue generating 25%–40% power even under overcast or cloudy skies. Your grid net-metering credits carry over year-round to balance monsoon dips.',
  },
  {
    id: 'faq-7',
    category: 'Technical',
    question: 'Does a grid-tied solar system supply power during a power outage?',
    answer: 'Standard grid-tied inverters automatically isolate for safety during power grid cuts (anti-islanding). If you experience frequent power cuts, SolarARK offers hybrid smart battery storage systems that keep critical loads (lights, fans, Wi-Fi) running 24/7.',
  },
  {
    id: 'faq-8',
    category: 'Technical',
    question: 'How frequently do solar panels need cleaning and maintenance?',
    answer: 'In Indian conditions, dusting panels every 15–20 days maintains peak light capture. SolarARK systems include integrated water spray attachments and a 5-Year Annual Maintenance Contract (AMC) with scheduled expert deep cleans.',
  },
  {
    id: 'faq-9',
    category: 'Process',
    question: 'How long does the installation process take from survey to power-on?',
    answer: 'Physical panel mounting takes just 1 to 2 days on your roof. DISCOM net-metering inspection and subsidy approval typically take 15 to 25 days depending on your local electricity board. SolarARK handles 100% of the paperwork.',
  },
  {
    id: 'faq-10',
    category: 'Process',
    question: 'How do I track my daily electricity generation and financial savings?',
    answer: 'You get access to the SolarARK Mobile App (iOS & Android) which displays real-time generation graphs, net-metering grid export units, lifetime CO2 offsets, and proactive maintenance notifications.',
  },
];

export const PRESS_LOGOS = [
  { name: 'Economic Times', text: 'ET TECH' },
  { name: 'Forbes India', text: 'FORBES' },
  { name: 'Fortune India', text: 'FORTUNE' },
  { name: 'Business Today', text: 'BUSINESS TODAY' },
  { name: 'The Hindu', text: 'THE HINDU' },
];

export const CERTIFICATIONS = [
  { badge: 'ISO 9001:2015', label: 'Quality Management Certified' },
  { badge: 'MNRE Empanelled', label: 'Govt. Approved Solar Installer' },
  { badge: '170 km/h Wind-Pro', label: 'IIT Structural Wind Rating' },
  { badge: '25-Yr SunSure™', label: 'Performance Guaranteed' },
];
