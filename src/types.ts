/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CalculatorInputs {
  pincode: string;
  monthlyBill: number; // in INR
}

export interface CalculatorResults {
  systemSizeKw: number;        // e.g. 3.2 kW
  monthlySavings: number;      // e.g. 4,200 INR
  annualSavings: number;       // e.g. 50,400 INR
  twentyFiveYearSavings: number; // cumulative e.g. 18,50,000 INR considering 6% tariff escalation
  subsidyAmount: number;       // PM Surya Ghar subsidy e.g. 78,000 INR
  estimatedCostBeforeSubsidy: number; // e.g. 1,95,000 INR
  effectiveNetCost: number;    // Cost - Subsidy e.g. 1,17,000 INR
  paybackYears: number;        // e.g. 2.3 years
  treesEquivalent: number;     // e.g. 142 trees planted equivalent per year
  co2OffsetTonnes: number;     // e.g. 3.8 tonnes CO2 per year
}

export interface SubsidyTier {
  systemSize: string;
  maxSubsidy: string;
  centralShare: string;
  stateBonus: string;
  typicalNetCost: string;
  idealFor: string;
}

export interface ProjectCaseStudy {
  id: string;
  homeownerName: string;
  city: string;
  state: string;
  systemSizeKw: number;
  monthlyBillBefore: number;
  monthlyBillAfter: number;
  roofType: string;
  installationDays: number;
  imageAlt: string;
  verdict: string;
  image?: string;
  category?: 'Residential' | 'Housing Society' | 'Commercial & Industrial';
  annualSavings?: number;
  subsidyReceived?: number;
  generationUnitsPerMonth?: number;
}

export interface InstallationVideoReel {
  id: string;
  title: string;
  category: string;
  location: string;
  videoUrl: string;
  description: string;
  duration?: string;
  tags: string[];
}

export interface GalleryAlbum {
  id: number | string;
  name: string;
  category: string;
  location: string;
  date?: string;
  coverImage: string;
  images: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  city: string;
  beforeBill: number;
  afterBill: number;
  rating: number;
  systemSizeKw: number;
  quote: string;
  videoUrl?: string;
  thumbnailAlt: string;
  verifiedBadge: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Product' | 'Financial' | 'Technical' | 'Process';
  question: string;
  answer: string;
}

export interface LeadFormData {
  pincode: string;
  monthlyBill: number;
  fullName: string;
  whatsappNumber: string;
  roofType: string;
  preferredSurveyTime: string;
}

export interface TechSpec {
  category: string;
  title: string;
  specifications: string[];
  description: string;
  badge: string;
}
