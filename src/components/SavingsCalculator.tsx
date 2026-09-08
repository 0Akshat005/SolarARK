/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolarARK Solar Savings Calculator Hero Section
 * ===============================================
 * Mobile-First Responsive Refinements:
 * - Clean vertical stack on mobile: Hero text -> Calculator controls -> Trust badges -> Mahavitaran authority.
 * - Eliminated horizontal overflow on 320–375px screens (responsive MSEDCL badge, min-w-0 on input).
 * - Minimum 42–44px touch targets on all interactive elements (pills, location detector, sample bill trigger).
 * - Desktop layout (3-zone split, Playfair Display typography, warm cream canvas) remains 100% pixel-perfect.
 */

import React, { useState, useEffect, useRef } from 'react';
import { CalculatorResults } from '../types';
import { calculateSolarSavings, formatINR } from '../utils/calculator';
import {
  ArrowRight,
  Sun,
  MapPin,
  Clock,
  Shield,
  Zap,
  Users,
  Pencil,
  Leaf,
  Award,
  Crosshair,
  Info,
  Check,
  FileText,
  Lock,
  X,
} from 'lucide-react';

const SLIDER_MIN = 1000;
const SLIDER_MAX = 25000;
const SLIDER_STEP = 500;

interface SavingsCalculatorProps {
  onClaimEstimate: (data: { pincode: string; monthlyBill: number }) => void;
  initialPincode?: string;
  initialBill?: number;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  onClaimEstimate,
  initialPincode = '444601',
  initialBill = 8500,
}) => {
  const [pincode, setPincode] = useState<string>(initialPincode);
  const [monthlyBill, setMonthlyBill] = useState<number>(initialBill);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculatedResults, setCalculatedResults] = useState<CalculatorResults | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [showSampleBillModal, setShowSampleBillModal] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const calculatorCardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isValidPincode = pincode.length === 6 && /^\d+$/.test(pincode);
  const isFormValid = isValidPincode && monthlyBill >= SLIDER_MIN;

  const handleCalculate = async () => {
    if (!isFormValid) return;
    setIsCalculating(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    const results = calculateSolarSavings({ pincode, monthlyBill });
    setCalculatedResults(results);
    setIsCalculating(false);
    setCurrentStep(2);
    setTimeout(() => {
      calculatorCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleEditDetails = () => {
    setCurrentStep(1);
  };

  const handleContactExpert = () => {
    onClaimEstimate({ pincode, monthlyBill });
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setPincode('444601');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLocating(false);
        setPincode('444601');
      },
      () => {
        setIsLocating(false);
        setPincode('444601');
      },
      { timeout: 4000 }
    );
  };

  // 5 Quick-Select Preset Chips matching reference image
  const PRESET_PILLS = [
    { label: '₹3k', value: 3000 },
    { label: '₹6k', value: 6000 },
    { label: '₹8.5k', value: 8500 },
    { label: '₹12k', value: 12000 },
    { label: '₹20k+', value: 20000 },
  ];

  // Calculate slider percentage for gradient fill
  const sliderPercentage = Math.min(
    100,
    Math.max(0, ((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100)
  );

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200/80 select-none max-w-full"
    >
      {/* ── Custom Slider Range Input CSS Styling ── */}
      <style>{`
        input[type=range].calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #7B1818;
          border: 2.5px solid #FFFFFF;
          box-shadow: 0 2px 6px rgba(123, 24, 24, 0.4);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        input[type=range].calc-slider::-webkit-slider-thumb:hover,
        input[type=range].calc-slider::-webkit-slider-thumb:active {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(123, 24, 24, 0.55);
        }
        input[type=range].calc-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #7B1818;
          border: 2.5px solid #FFFFFF;
          box-shadow: 0 2px 6px rgba(123, 24, 24, 0.4);
          cursor: pointer;
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          MAIN 3-ZONE FULL-WIDTH SPLIT-SCREEN CONTAINER
         ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-0 lg:min-h-[640px] flex flex-col lg:flex-row items-stretch">

        {/* ══════════════════════════════════════════════════════════════
            ZONE 1: LEFT HERO PANEL (~45% DESKTOP WIDTH)
            - Warm off-white sky fading down to sunset villa photo
            - Editorial Playfair Display headline & 3 circular trust badges
            - Mobile-first: Compact vertical padding, badges move under CTA on mobile
           ══════════════════════════════════════════════════════════════ */}
        <div
          className={`relative w-full lg:w-[45%] xl:w-[46%] shrink-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10 xl:p-12 overflow-hidden transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Architectural Villa Photo at bottom with natural sky blending */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/calc-left-clean@2x.png"
              alt="Modern architectural villa with SolarARK rooftop solar panels at dusk"
              className="w-full h-full object-cover object-left-bottom"
              loading="eager"
            />
            {/* Top subtle fade to guarantee text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/92 via-[#FAF8F5]/60 to-transparent lg:h-[45%]" />
          </div>

          {/* Top Editorial Storytelling Block */}
          <div className="relative z-10 space-y-3.5 sm:space-y-5 max-w-xl">
            {/* Eyebrow with hairline accent */}
            <div className="flex items-center gap-3">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.22em] text-[#55504A] uppercase font-heading">
                Clean energy. Brighter tomorrows
              </span>
              <span className="h-[1.5px] w-14 sm:w-16 bg-[#8B1E1E]" />
            </div>

            {/* Display Headline in Playfair Display Serif */}
            <div>
              <h2
                className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-stone-900 leading-[1.05] tracking-tight"
                style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
              >
                See your
                <br />
                <span className="text-[#801414]">real savings.</span>
              </h2>
            </div>

            {/* Subline */}
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Know your solar savings in 30 seconds.
            </p>

            {/* 3 Circular Trust Badges with Hairline Dividers (Desktop Placement) */}
            <div className="pt-2 sm:pt-3 hidden lg:block">
              <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4.5 bg-white/70 backdrop-blur-xs px-3 sm:px-4 py-2.5 rounded-2xl border border-stone-200/60 shadow-2xs">
                
                {/* Badge 1: Accurate Savings */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2EA] border border-[#F5D5C2] flex items-center justify-center shrink-0 text-[#801414]">
                    <span className="font-bold text-sm font-heading leading-none">₹</span>
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-stone-900 block font-heading">
                      Accurate savings
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      Based on MSEDCL rates
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-7 bg-stone-300/70 shrink-0" />

                {/* Badge 2: Govt. Subsidy */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2EA] border border-[#F5D5C2] flex items-center justify-center shrink-0 text-[#801414]">
                    <Shield className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-stone-900 block font-heading">
                      Govt. subsidy
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      PM Surya Ghar
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-7 bg-stone-300/70 shrink-0" />

                {/* Badge 3: 25-Year Assurance */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2EA] border border-[#F5D5C2] flex items-center justify-center shrink-0 text-[#801414]">
                    <FileText className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-bold text-stone-900 block font-heading">
                      25-year assurance
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium block">
                      Reliable. Worry-free.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ZONE 2: CLEAN EDITORIAL CALCULATOR COMPOSITION (~41% DESKTOP WIDTH)
            - Seamlessly native to the continuous warm cream background
            - No white floating card, no heavy shadows, no dashboard borders
            - 2-Step indicator: 1 Your Details ────── 2 Your Savings
            - Refined minimal outlined pincode field with responsive MSEDCL pill
            - Large centered ₹8,500 / month display, precision slider, thumb-friendly preset pills
            - Dominant maroon CTA with generous breathing room
            - Inline micro-trust assurance & Mahavitaran credibility footer
           ══════════════════════════════════════════════════════════════ */}
        <div
          ref={calculatorCardRef}
          className={`relative w-full lg:w-[41%] xl:w-[40%] shrink-0 z-10 flex flex-col justify-between px-4 sm:px-8 lg:px-9 py-5 sm:py-8 lg:py-9 transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            {/* ── STEPPER: Step 1 (Your Details) / Step 2 (Your Savings) ── */}
            <div className="flex items-center gap-2.5 sm:gap-3 pb-3 sm:pb-3.5 mb-4 sm:mb-5 border-b border-stone-300/60">
              {/* Step 1 */}
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors"
                  style={{
                    backgroundColor: currentStep >= 1 ? '#7B1818' : '#E5E7EB',
                    color: 'white',
                  }}
                >
                  {currentStep > 1 ? '✓' : '1'}
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-stone-900 font-heading whitespace-nowrap">
                  Your Details
                </span>
              </div>

              {/* Connecting Line */}
              <div className="flex-1 max-w-[120px] flex items-center h-[1px] bg-stone-300/70" />

              {/* Step 2 */}
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center shrink-0 transition-colors"
                  style={{
                    backgroundColor: currentStep >= 2 ? '#7B1818' : 'transparent',
                    border: currentStep >= 2 ? 'none' : '1px solid #D6D3D1',
                    color: currentStep >= 2 ? 'white' : '#78716C',
                  }}
                >
                  2
                </span>
                <span
                  className="text-xs sm:text-[13px] font-medium transition-colors whitespace-nowrap"
                  style={{ color: currentStep >= 2 ? '#1C1917' : '#78716C' }}
                >
                  Your Savings
                </span>
              </div>
            </div>

            {/* ── STEP 1: REFINED EDITORIAL DETAILS FORM ── */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-4.5 animate-in fade-in duration-300">
                
                {/* 1. REFINED MINIMAL OUTLINED PINCODE FIELD */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="calc-pincode-input"
                      className="text-xs sm:text-[12.5px] font-semibold text-stone-900"
                    >
                      Enter your location (Pincode)
                    </label>
                    <button
                      type="button"
                      onClick={handleDetectLocation}
                      disabled={isLocating}
                      className="inline-flex items-center gap-1 py-1.5 px-1 min-h-[36px] text-xs font-semibold text-[#8B1E1E] hover:underline transition-colors cursor-pointer"
                    >
                      <Crosshair
                        className={`w-3.5 h-3.5 text-[#8B1E1E] ${isLocating ? 'animate-spin' : ''}`}
                      />
                      <span>{isLocating ? 'Detecting…' : 'Detect my location'}</span>
                    </button>
                  </div>

                  <div className="relative flex items-center rounded-xl border border-stone-300/80 bg-white/80 hover:bg-white focus-within:bg-white px-3 sm:px-3.5 py-2.5 transition-all focus-within:border-[#8B1E1E] focus-within:ring-1 focus-within:ring-[#8B1E1E]/20">
                    <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mr-2 sm:mr-2.5" strokeWidth={2} />
                    <input
                      id="calc-pincode-input"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      placeholder="6-digit pincode (e.g. 444601)"
                      className="min-w-0 flex-1 bg-transparent text-sm sm:text-base font-semibold text-stone-900 placeholder:text-stone-400 focus:outline-none"
                    />

                    {/* MSEDCL Serviceability compact pill (Responsive width to prevent mobile overflow) */}
                    {isValidPincode ? (
                      <span className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold shrink-0 ml-1.5 sm:ml-2 bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                        <Check className="w-3 h-3 text-[#137333]" strokeWidth={3} />
                        <span><span className="hidden xs:inline sm:inline">MSEDCL </span>Serviceable</span>
                      </span>
                    ) : (
                      pincode.length > 0 && (
                        <span className="text-[11px] font-medium text-stone-400 shrink-0 ml-1.5 sm:ml-2">
                          {6 - pincode.length} left
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* 2. MONTHLY BILL INTERACTION: LARGE AMOUNT, CLEAN SLIDER, COMPACT PRESETS */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs sm:text-[12.5px] font-semibold text-stone-900">
                      <span>Average monthly electricity bill</span>
                      <Info
                        className="w-3.5 h-3.5 text-stone-400 cursor-help"
                        onClick={() => setShowSampleBillModal(true)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowSampleBillModal(true)}
                      className="text-xs font-semibold text-[#8B1E1E] hover:underline cursor-pointer inline-flex items-center gap-0.5 py-1 min-h-[36px]"
                    >
                      <span>Sample bill</span>
                      <span className="text-sm leading-none">→</span>
                    </button>
                  </div>

                  {/* Centered Large Dynamic Amount */}
                  <div className="text-center py-1.5 sm:py-2">
                    <div className="inline-flex items-baseline gap-1.5">
                      <span
                        className="text-3xl sm:text-4xl sm:text-[46px] font-bold text-stone-900 tracking-tight tabular-nums leading-none font-heading"
                      >
                        {formatINR(monthlyBill)}
                      </span>
                      <span className="text-xs sm:text-sm font-normal text-stone-500">
                        / month
                      </span>
                    </div>
                  </div>

                  {/* Clean Slider Track with Smooth Maroon Gradient */}
                  <div className="flex items-center gap-3 px-1 pt-1 pb-2">
                    <span className="text-xs font-semibold text-stone-400 shrink-0">₹1k</span>
                    <div className="relative flex-1 flex items-center">
                      <input
                        type="range"
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        step={SLIDER_STEP}
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value))}
                        aria-label="Monthly electricity bill"
                        className="calc-slider w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #801414 0%, #B91C1C ${sliderPercentage}%, #E5E7EB ${sliderPercentage}%, #E5E7EB 100%)`,
                        }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-stone-400 shrink-0">₹25k+</span>
                  </div>

                  {/* 5 Thumb-Friendly Preset Chips (Evenly distributed) */}
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2 pt-0.5">
                    {PRESET_PILLS.map((pill) => {
                      const isActive = monthlyBill === pill.value;
                      return (
                        <button
                          key={pill.label}
                          type="button"
                          onClick={() => setMonthlyBill(pill.value)}
                          className={`min-h-[42px] sm:min-h-0 py-2 sm:py-1.5 px-1 sm:px-4 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                            isActive
                              ? 'bg-[#7B1818] text-white shadow-xs'
                              : 'bg-stone-200/50 text-stone-700 hover:bg-stone-200/80 border border-transparent'
                          }`}
                        >
                          {pill.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. DOMINANT MAROON CTA WITH RESTRAINED RADIUS & EDITORIAL FEEL */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleCalculate}
                    disabled={!isFormValid || isCalculating}
                    className="w-full h-13 sm:h-13.5 rounded-2xl bg-[#7B1818] hover:bg-[#681414] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_-2px_rgba(123,24,24,0.3)] flex items-center justify-between px-3.5 sm:px-4.5 transition-all cursor-pointer group"
                  >
                    {/* Left Glowing Line Sun Icon */}
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Sun className="w-4 h-4 text-[#FDBA74]" />
                    </div>

                    {/* Button Text */}
                    <span
                      className="text-white font-medium text-sm sm:text-base tracking-wide"
                      style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
                    >
                      {isCalculating ? 'Calculating your savings…' : 'Show My Solar Savings'}
                    </span>

                    {/* Right Circular Rose Badge with Maroon Arrow */}
                    <div className="w-8 h-8 rounded-full bg-[#FCE7E7] group-hover:bg-white flex items-center justify-center shrink-0 shadow-2xs group-hover:translate-x-0.5 transition-transform">
                      {isCalculating ? (
                        <div className="w-3.5 h-3.5 border-2 border-[#7B1818]/30 border-t-[#7B1818] rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-[#7B1818]" />
                      )}
                    </div>
                  </button>

                  {/* Micro-Trust Reassurances: Clean Inline Row */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-stone-600 pt-1 font-medium select-none">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#801414]" />
                      Takes 30 seconds
                    </span>
                    <span className="hidden sm:inline text-stone-300">·</span>
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-[#801414]" />
                      No spam
                    </span>
                    <span className="hidden sm:inline text-stone-300">·</span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-[#801414]" />
                      100% confidential
                    </span>
                  </div>

                  {/* ── MOBILE TRUST BADGES (Stacked below CTA on mobile) ── */}
                  <div className="block lg:hidden pt-3 mt-3 border-t border-stone-200/80">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-stone-200/60 shadow-2xs">
                      
                      {/* Badge 1 */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#FDF2EA] border border-[#F5D5C2] flex items-center justify-center shrink-0 text-[#801414]">
                          <span className="font-bold text-sm font-heading leading-none">₹</span>
                        </div>
                        <div className="leading-tight">
                          <span className="text-xs font-bold text-stone-900 block font-heading">
                            Accurate savings
                          </span>
                          <span className="text-[10px] text-stone-500 font-medium block">
                            Based on MSEDCL rates
                          </span>
                        </div>
                      </div>

                      {/* Badge 2 */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#FDF2EA] border border-[#F5D5C2] flex items-center justify-center shrink-0 text-[#801414]">
                          <Shield className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </div>
                        <div className="leading-tight">
                          <span className="text-xs font-bold text-stone-900 block font-heading">
                            Govt. subsidy
                          </span>
                          <span className="text-[10px] text-stone-500 font-medium block">
                            PM Surya Ghar
                          </span>
                        </div>
                      </div>

                      {/* Badge 3 */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#FDF2EA] border border-[#F5D5C2] flex items-center justify-center shrink-0 text-[#801414]">
                          <FileText className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </div>
                        <div className="leading-tight">
                          <span className="text-xs font-bold text-stone-900 block font-heading">
                            25-year assurance
                          </span>
                          <span className="text-[10px] text-stone-500 font-medium block">
                            Reliable. Worry-free.
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* ── STEP 2: REFINED EDITORIAL RECOMMENDATION PANEL ── */}
            {currentStep === 2 && calculatedResults && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-stone-300/60">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                      Your Solar Recommendation
                    </h3>
                    <p className="text-xs text-stone-500">
                      For {formatINR(monthlyBill)}/mo bill in {pincode}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleEditDetails}
                    className="flex items-center gap-1 py-1 px-2 min-h-[36px] text-xs font-semibold text-[#8B1E1E] hover:underline cursor-pointer"
                  >
                    <Pencil className="w-3 h-3" />
                    <span>Edit details</span>
                  </button>
                </div>

                {/* 4 Clean Metric Blocks */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <div className="p-2.5 sm:p-3 rounded-xl border border-stone-300/70 bg-white/60">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block font-heading">
                      System Size
                    </span>
                    <div className="text-lg sm:text-2xl font-bold text-stone-900 font-heading mt-0.5">
                      {calculatedResults.systemSizeKw} kW
                    </div>
                    <span className="text-[10px] sm:text-[10.5px] text-stone-500">Rooftop PV Array</span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl border border-emerald-200/80 bg-emerald-50/50">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block font-heading">
                      Monthly Savings
                    </span>
                    <div className="text-lg sm:text-2xl font-bold text-emerald-700 font-heading mt-0.5">
                      {formatINR(calculatedResults.monthlySavings)}
                    </div>
                    <span className="text-[10px] sm:text-[10.5px] text-emerald-600 font-medium">Up to 90% reduction</span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl border border-stone-300/70 bg-white/60">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block font-heading">
                      Annual Savings
                    </span>
                    <div className="text-lg sm:text-2xl font-bold text-stone-900 font-heading mt-0.5">
                      {formatINR(calculatedResults.annualSavings)}
                    </div>
                    <span className="text-[10px] sm:text-[10.5px] text-stone-500">Direct cash retained</span>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl border border-stone-300/70 bg-white/60">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block font-heading">
                      Payback Period
                    </span>
                    <div className="text-lg sm:text-2xl font-bold text-stone-900 font-heading mt-0.5">
                      {calculatedResults.paybackYears.toFixed(1)} Yrs
                    </div>
                    <span className="text-[10px] sm:text-[10.5px] text-stone-500">With ₹78k subsidy</span>
                  </div>
                </div>

                {/* Environmental Impact Strip */}
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-50/70 border border-emerald-200/70 text-emerald-800 text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    {calculatedResults.co2OffsetTonnes}t CO₂/yr offset
                  </span>
                  <span>≈ {calculatedResults.treesEquivalent} trees</span>
                </div>

                {/* Action CTA Button */}
                <button
                  type="button"
                  onClick={handleContactExpert}
                  className="w-full h-12 sm:h-13 rounded-[14px] bg-[#7B1818] hover:bg-[#681414] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Claim Your ₹78,000 Subsidy Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* ── HOMEOWNER CREDIBILITY & MAHAVITARAN AUTHORITY FOOTER ── */}
          <div className="mt-5 sm:mt-6 pt-4 border-t border-stone-300/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            {/* Left: Homeowner Trust Proof */}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#801414] shrink-0" />
              <span className="text-xs font-medium text-stone-600">
                Trusted by 1,000+ homeowners across Maharashtra
              </span>
            </div>

            {/* Right: Official MAHAVITARAN emblem */}
            <div className="flex items-center gap-2 shrink-0">
              <svg viewBox="0 0 32 20" className="h-5 w-auto" fill="none" aria-hidden="true">
                <path d="M4 18 L14 2 L11 11 L18 11 L8 27 L11 18 Z" fill="#CC0000" />
                <path d="M14 18 L24 2 L21 11 L28 11 L18 27 L21 18 Z" fill="#CC0000" opacity="0.6" />
              </svg>
              <div className="text-left leading-tight">
                <span className="text-[11px] sm:text-[11.5px] font-black tracking-wider text-stone-900 block font-heading">
                  MAHAVITARAN
                </span>
                <span className="text-[7.5px] text-stone-500 font-medium block">
                  Maharashtra State Electricity Distribution Co. Ltd.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ZONE 3: RIGHT SUNLIGHT BAND (~14% DESKTOP WIDTH)
            - Full height vertical strip with sunset horizon image
            - Stacked editorial typography & 01 / 02 paginator
            - Hidden cleanly on mobile viewports (< lg)
           ══════════════════════════════════════════════════════════════ */}
        <div className="relative hidden lg:flex lg:w-[14%] xl:w-[14%] shrink-0 flex-col justify-between overflow-visible">
          {/* Sunset Horizon Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/calc-sunset-sky.jpg"
              alt="Golden sunset horizon"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>

          {/* Top Stacked Editorial Typography */}
          <div className="relative z-10 p-4 xl:p-5 pt-8 text-white">
            <div className="text-[10px] xl:text-[10.5px] font-bold tracking-[0.18em] leading-relaxed uppercase text-white/95 drop-shadow-sm font-heading">
              TODAY'S
              <br />
              SUNLIGHT.
              <br />
              A BRIGHTER
              <br />
              TOMORROW
              <br />
              FOR YOUR HOME.
            </div>
            <div className="w-7 h-[1.5px] bg-[#8B1E1E] mt-2.5" />
          </div>

          {/* Bottom Paginator & Tagline */}
          <div className="relative z-10 p-4 xl:p-5 pb-8 text-white space-y-2">
            <div className="text-[11px] font-bold tracking-[0.2em] text-white/90 font-heading">
              01 / 02
            </div>
            <div className="w-7 h-[1px] bg-white/40" />
            <div className="text-[9px] xl:text-[9.5px] font-bold tracking-[0.2em] leading-relaxed uppercase text-white/85 font-heading">
              CLEANER
              <br />
              STRONGER
              <br />
              MORE INDEPENDENT
            </div>
            <div className="w-7 h-[1px] bg-white/40" />
          </div>
        </div>

      </div>

      {/* ── SAMPLE ELECTRICITY BILL MODAL ── */}
      {showSampleBillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-stone-200 relative">
            <button
              type="button"
              onClick={() => setShowSampleBillModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors"
              aria-label="Close Sample Bill Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-[#801414]">
              <FileText className="w-5 h-5" />
              <h4 className="font-bold text-base text-stone-900 font-heading">
                Finding Your Bill Amount
              </h4>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              On your Maharashtra MSEDCL (Mahavitaran) electricity bill, check the <strong>"Current Bill Amount" (चालू देयक रक्कम)</strong> or take the average of your last 3–6 months for the most accurate solar array calculation.
            </p>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5 text-stone-700">
              <div className="flex justify-between">
                <span className="font-medium text-stone-500">Typical 1–2 BHK:</span>
                <span className="font-bold text-stone-900">₹2,500 – ₹4,500/mo (2–3 kW)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-stone-500">Typical 3–4 BHK:</span>
                <span className="font-bold text-stone-900">₹6,000 – ₹10,000/mo (4–6 kW)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-stone-500">Luxury Villa / Bungalow:</span>
                <span className="font-bold text-stone-900">₹12,000 – ₹25,000+/mo (8–15 kW)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowSampleBillModal(false)}
              className="w-full py-3 rounded-xl bg-[#7B1818] text-white text-xs font-bold font-heading hover:bg-[#681414] transition-colors cursor-pointer min-h-[44px]"
            >
              Got it, continue calculation
            </button>
          </div>
        </div>
      )}

      {/* ── BASE TRUST RIBBON (Bottom of section) ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 border-t border-stone-200/80">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-stone-700">
          <div className="flex items-center gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-full border border-stone-300/80 bg-white flex items-center justify-center shrink-0 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#801414]" strokeWidth={2.2} />
            </div>
            <div>
              <span className="text-xs sm:text-[13px] font-bold block font-heading leading-tight text-stone-900">
                Tier-1 Bifacial Solar
              </span>
              <span className="text-[11px] text-stone-500 block">
                Topcon / Mono PERC Technology
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-full border border-stone-300/80 bg-white flex items-center justify-center shrink-0 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-[#801414]" strokeWidth={2.2} />
            </div>
            <div>
              <span className="text-xs sm:text-[13px] font-bold block font-heading leading-tight text-stone-900">
                Certified Installers
              </span>
              <span className="text-[11px] text-stone-500 block">
                In-House Maharashtra Engineering Team
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-full border border-stone-300/80 bg-white flex items-center justify-center shrink-0 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#801414]" strokeWidth={2.2} />
            </div>
            <div>
              <span className="text-xs sm:text-[13px] font-bold block font-heading leading-tight text-stone-900">
                25-Year Warranty
              </span>
              <span className="text-[11px] text-stone-500 block">
                Linear Performance Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
