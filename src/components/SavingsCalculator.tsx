/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolarARK Compressed & Strategic Solar Savings Calculator
 * ========================================================
 * Redesigned using the Pareto Principle (80/20 Rule) & Structured Rectangular Architecture:
 * - 100% visible at a glance without scrolling on standard laptop/desktop screens.
 * - Value display integrated directly inside the optical dome of the Arc Slider.
 * - 5 instant 1-tap bill bracket preset chips (₹3k, ₹6k, ₹8.5k, ₹12k, ₹20k+).
 * - Compact location bar with real-time MSEDCL serviceability feedback.
 * - Architectural framed villa window with docked privacy shield & trust bullets.
 * - High-conversion primary CTA button with micro trust reassurances.
 * - Full 2-step flow powered by Maharashtra MSEDCL tariff calculation engine.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CalculatorResults } from '../types';
import { calculateSolarSavings, formatINR } from '../utils/calculator';
import {
  CheckCircle2,
  ArrowRight,
  Sun,
  ShieldCheck,
  MapPin,
  Clock,
  Shield,
  Zap,
  Users,
  Pencil,
  Leaf,
  Award,
} from 'lucide-react';

/* ── DESIGN TOKENS ── */
const COLORS = {
  bgCream: '#F7F4EF',
  cardBg: '#FFFFFF',
  deepNavy: '#0A1424',
  footerNavy: '#07101E',
  terracotta: '#D8542F',
  successGreen: '#2F9E58',
  textMuted: '#6E6761',
  textHeading: '#121824',
  trackBg: '#EFECE6',
};

const SLIDER_MIN = 1000;
const SLIDER_MAX = 25000;
const SLIDER_STEP = 500;

interface SavingsCalculatorProps {
  onClaimEstimate: (data: { pincode: string; monthlyBill: number }) => void;
  initialPincode?: string;
  initialBill?: number;
}

/* ══════════════════════════════════════════════════════════════
   PIECEWISE MAPPING FOR COMPACT ARC SLIDER
   --------------------------------------------------------------
   - 0%   -> ₹1,000   (angle PI = 180 deg, left origin)
   - 25%  -> ₹5,000   (angle 0.75 PI = 135 deg, left incline)
   - 50%  -> ₹10,000  (angle 0.50 PI = 90 deg, EXACT APEX)
   - 75%  -> ₹15,000  (angle 0.25 PI = 45 deg, right decline)
   - 100% -> ₹25,000+ (angle 0.00 PI = 0 deg, right end)
   ══════════════════════════════════════════════════════════════ */
const SEGMENTS = [
  { valStart: 1000, valEnd: 5000, progStart: 0.0, progEnd: 0.25 },
  { valStart: 5000, valEnd: 10000, progStart: 0.25, progEnd: 0.5 },
  { valStart: 10000, valEnd: 15000, progStart: 0.5, progEnd: 0.75 },
  { valStart: 15000, valEnd: 25000, progStart: 0.75, progEnd: 1.0 },
];

function valueToProgress(val: number): number {
  const clamped = Math.max(SLIDER_MIN, Math.min(SLIDER_MAX, val));
  for (const seg of SEGMENTS) {
    if (clamped <= seg.valEnd) {
      const segT = (clamped - seg.valStart) / (seg.valEnd - seg.valStart);
      return seg.progStart + segT * (seg.progEnd - seg.progStart);
    }
  }
  return 1.0;
}

function progressToValue(progress: number): number {
  const clamped = Math.max(0, Math.min(1, progress));
  for (const seg of SEGMENTS) {
    if (clamped <= seg.progEnd) {
      const segT = (clamped - seg.progStart) / (seg.progEnd - seg.progStart);
      const raw = seg.valStart + segT * (seg.valEnd - seg.valStart);
      return Math.round(raw / SLIDER_STEP) * SLIDER_STEP;
    }
  }
  return SLIDER_MAX;
}

/* ══════════════════════════════════════════════════════════════
   COMPONENT: COMPACT SVG ARC SLIDER WITH DOME-INTEGRATED VALUE
   ══════════════════════════════════════════════════════════════ */
interface CompactArcSliderProps {
  value: number;
  onChange: (val: number) => void;
}

const CompactArcSlider: React.FC<CompactArcSliderProps> = ({ value, onChange }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);

  // Compact proportional arch geometry
  const cx = 240;
  const cy = 160;
  const rx = 195;
  const ry = 130;

  const progressToAngle = useCallback((p: number) => {
    return Math.PI - p * Math.PI;
  }, []);

  const angleToProgress = useCallback((angle: number) => {
    const clamped = Math.max(0, Math.min(Math.PI, angle));
    return (Math.PI - clamped) / Math.PI;
  }, []);

  const getPoint = useCallback(
    (angle: number) => ({
      x: cx + rx * Math.cos(angle),
      y: cy - ry * Math.sin(angle),
    }),
    [cx, cy, rx, ry]
  );

  const currentProg = valueToProgress(value);
  const currentAngle = progressToAngle(currentProg);
  const thumbPos = getPoint(currentAngle);

  // Background full arch
  const bgPath = `M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 1 ${cx + rx} ${cy}`;

  // Active colored track
  const activePath = `M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 1 ${thumbPos.x} ${thumbPos.y}`;

  // Milestone ticks
  const milestones = [
    { label: '₹1k', prog: 0.0, offset: { x: -14, y: -14 } },
    { label: '₹5k', prog: 0.25, offset: { x: -16, y: -16 } },
    { label: '₹10k', prog: 0.5, offset: { x: 0, y: -18 } },
    { label: '₹15k', prog: 0.75, offset: { x: 16, y: -16 } },
    { label: '₹25k+', prog: 1.0, offset: { x: 18, y: -14 } },
  ];

  const handlePointer = useCallback(
    (e: React.PointerEvent | PointerEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const svgX = (clientX / rect.width) * 480;
      const svgY = (clientY / rect.height) * 175;

      const dx = (svgX - cx) / rx;
      const dy = (cy - svgY) / ry;

      let angle = Math.atan2(dy, dx);
      if (angle < 0) angle = 0;
      if (angle > Math.PI) angle = Math.PI;

      const prog = angleToProgress(angle);
      onChange(progressToValue(prog));
    },
    [cx, cy, rx, ry, angleToProgress, onChange]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    handlePointer(e);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) handlePointer(e);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative select-none w-full max-w-[460px] mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 480 175"
        className="w-full h-auto cursor-pointer overflow-visible"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{ touchAction: 'none' }}
      >
        <defs>
          <linearGradient id="compactArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9421E" />
            <stop offset="50%" stopColor="#E05A36" />
            <stop offset="100%" stopColor="#F27752" />
          </linearGradient>

          <filter id="compactThumbGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#E05A36" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 1. Background full track */}
        <path
          d={bgPath}
          fill="none"
          stroke={COLORS.trackBg}
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* 2. Milestone tick dots */}
        {milestones.map((m) => {
          const angle = progressToAngle(m.prog);
          const pt = getPoint(angle);
          return (
            <circle
              key={m.label}
              cx={pt.x}
              cy={pt.y}
              r="3"
              fill="#D0CBC2"
            />
          );
        })}

        {/* 3. Active colored track */}
        <path
          d={activePath}
          fill="none"
          stroke="url(#compactArcGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* 4. Milestone labels */}
        {milestones.map((m) => {
          const angle = progressToAngle(m.prog);
          const pt = getPoint(angle);
          const lx = pt.x + m.offset.x;
          const ly = pt.y + m.offset.y;
          return (
            <text
              key={`label-${m.label}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bold fill-[#7A746E] select-none text-[11px]"
              style={{ fontFamily: 'var(--font-heading, "Space Grotesk")' }}
            >
              {m.label}
            </text>
          );
        })}

        {/* 5. Scrubber Thumb with `< >` arrows */}
        <g
          transform={`translate(${thumbPos.x}, ${thumbPos.y})`}
          filter="url(#compactThumbGlow)"
          className="cursor-grab active:cursor-grabbing"
        >
          <circle r="13" fill="#E05A36" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle r="6" fill="#F0724D" opacity="0.5" />
          <path
            d="M -4 -0.5 L -1.5 -2.5 M -4 -0.5 L -1.5 1.5 M 4 -0.5 L 1.5 -2.5 M 4 -0.5 L 1.5 1.5"
            stroke="#FFFFFF"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      {/* 6. Optical Dome Display: INR Value centered directly inside the arc */}
      <div className="absolute inset-x-0 bottom-1 flex flex-col items-center justify-center pointer-events-none select-none">
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading text-4xl sm:text-[44px] font-bold tracking-tight text-[#0A1424] tabular-nums leading-none">
            {formatINR(value)}
          </span>
          <span className="text-xs sm:text-sm font-medium text-stone-500 leading-none">
            /month
          </span>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT: SAVINGS CALCULATOR (COMPRESSED RECTANGULAR)
   ══════════════════════════════════════════════════════════════ */
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
    await new Promise((resolve) => setTimeout(resolve, 500));
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

  // 5 Pareto Quick-Select Bracket Pills
  const PRESET_PILLS = [
    { label: '₹3k', value: 3000 },
    { label: '₹6k', value: 6000 },
    { label: '₹8.5k', value: 8500 },
    { label: '₹12k', value: 12000 },
    { label: '₹20k+', value: 20000 },
  ];

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12 border-b border-stone-200/80"
      style={{ backgroundColor: COLORS.bgCream }}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-[20%] left-[15%] w-[500px] h-[400px] rounded-full blur-[130px] opacity-30"
          style={{ backgroundColor: '#FCD9B1' }}
        />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ══════════════════════════════════════════════════════════════
              LEFT PANEL: STRUCTURED STORYTELLING & FRAMED VILLA WINDOW
             ══════════════════════════════════════════════════════════════ */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8E2D8] bg-[#FDFCF9] shadow-2xs w-fit">
              <Sun className="w-3.5 h-3.5 text-[#D8542F]" />
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-widest text-[#5E5750] uppercase font-heading">
                Smart Today. Secure Forever.
              </span>
            </div>

            {/* Editorial Serif Headline */}
            <div className="space-y-0.5">
              <h2
                className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#121824] leading-[1.08] tracking-tight"
                style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
              >
                Predictable power.
                <br />
                Lasting savings.
              </h2>
              <div className="relative pt-0.5 inline-block">
                <h3
                  className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-[1.08] tracking-tight text-[#D8542F] italic"
                  style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
                >
                  It starts with you.
                </h3>
                <svg
                  viewBox="0 0 220 18"
                  className="w-44 sm:w-52 h-2.5 text-[#D8542F] mt-0.5 opacity-90"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M 6 12 C 60 18, 140 16, 212 4" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Concise Value Copy */}
            <p className="text-xs sm:text-sm text-[#6E6761] leading-relaxed max-w-md font-sans">
              Enter your location and average electricity bill to reveal your custom rooftop capacity, monthly savings, and PM Surya Ghar government subsidy in seconds.
            </p>

            {/* Framed Architectural Villa Window */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-stone-300/70 shadow-md bg-stone-900 group">
              <img
                src="/images/calculator-villa-blended.png"
                alt="Modern villa with SolarARK rooftop solar panels at sunset"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              {/* Floating Energy Zap Badge */}
              <div className="absolute top-3 right-3 z-20">
                <div className="w-8 h-8 rounded-full bg-white/95 border border-[#E05A36]/40 shadow-sm flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#D8542F]" fill="#D8542F" />
                </div>
              </div>

              {/* Docked Security & Regional Badge */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-white">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[10.5px] font-medium text-white/90">
                    100% Data Private · MSEDCL Aligned
                  </span>
                </div>
                <span className="text-[9.5px] font-bold text-amber-300 font-heading">
                  Vidarbha Hub
                </span>
              </div>
            </div>

            {/* 3 Compact Trust Bullets */}
            <div className="grid grid-cols-3 gap-2 pt-0.5">
              <div className="flex items-center gap-1.5 text-[11px] text-stone-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero roof leaks</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-stone-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>₹78k subsidy</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-stone-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>25-yr warranty</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT PANEL: COMPACT HIGH-CONVERSION CALCULATOR CARD
             ══════════════════════════════════════════════════════════════ */}
          <div
            ref={calculatorCardRef}
            className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out relative z-10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="rounded-2xl sm:rounded-3xl border border-[#EAE5DE] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_20px_60px_-15px_rgba(20,25,35,0.09)]">

              {/* ── STEP HEADER ── */}
              <div className="flex items-center gap-3 pb-3.5 mb-4 border-b border-[#F0ECE5]">
                {/* Step 1 Pill */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors shadow-2xs"
                    style={{
                      backgroundColor: currentStep >= 1 ? COLORS.terracotta : '#E8E4DF',
                      color: 'white',
                    }}
                  >
                    {currentStep > 1 ? '✓' : '1'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#121824] font-heading">
                    Your Details
                  </span>
                </div>

                {/* Progress Line */}
                <div className="flex-1 flex items-center h-0.5">
                  <div
                    className="h-full rounded-l-full transition-all duration-500"
                    style={{
                      width: currentStep >= 2 ? '100%' : '50%',
                      backgroundColor: COLORS.terracotta,
                    }}
                  />
                  <div
                    className="h-full flex-1 border-b border-dashed border-stone-300 transition-all duration-500"
                    style={{ display: currentStep >= 2 ? 'none' : 'block' }}
                  />
                </div>

                {/* Step 2 Pill */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: currentStep >= 2 ? COLORS.terracotta : '#FFFFFF',
                      border: currentStep >= 2 ? 'none' : '1px solid #D5D0C8',
                      color: currentStep >= 2 ? 'white' : '#8D939D',
                    }}
                  >
                    2
                  </span>
                  <span
                    className="text-xs sm:text-sm font-medium transition-colors"
                    style={{ color: currentStep >= 2 ? '#121824' : '#8D939D' }}
                  >
                    Your Recommendation
                  </span>
                </div>
              </div>

              {/* ── STEP 1: COMPACT INTERACTIVE DETAILS FORM ── */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  
                  {/* 1. COMPACT LOCATION PINCODE BAR */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#121824] font-heading">
                      <span>Enter Your Location</span>
                      <span className="text-stone-400 font-normal lowercase">pincode</span>
                    </div>

                    <div className="relative flex items-center rounded-xl border border-[#DED8CE] bg-stone-50/50 hover:bg-white px-3.5 py-2.5 shadow-2xs transition-all focus-within:border-[#D8542F] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#D8542F]/15">
                      <MapPin className="w-4 h-4 text-[#8A847C] shrink-0 mr-2.5" strokeWidth={1.75} />
                      <input
                        id="calc-pincode"
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                        placeholder="Enter 6-digit pincode (e.g. 444601)"
                        className="flex-1 bg-transparent text-sm font-semibold text-[#121824] placeholder:text-stone-400 focus:outline-none"
                      />

                      {/* Serviceability badge */}
                      {isValidPincode ? (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold shrink-0 ml-2 bg-[#2F9E58]/10 text-[#2F9E58] border border-[#2F9E58]/30">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9E58]" />
                          <span>{/^(40|41|42|43|44)/.test(pincode) ? 'MSEDCL Serviceable' : 'Serviceable'}</span>
                        </span>
                      ) : (
                        pincode.length > 0 && (
                          <span className="text-[11px] font-medium text-stone-400 shrink-0 ml-2">
                            {6 - pincode.length} digits left
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* 2. COMPACT MONTHLY BILL SLIDER WITH DOME GAUGE */}
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="text-center text-xs font-bold uppercase tracking-wider text-[#121824] font-heading">
                      What's your average monthly electricity bill?
                    </h3>

                    {/* Desktop/Tablet Compact Arc Slider */}
                    <div className="hidden sm:block">
                      <CompactArcSlider
                        value={monthlyBill}
                        onChange={setMonthlyBill}
                      />
                    </div>

                    {/* Mobile Touch Slider fallback */}
                    <div className="block sm:hidden space-y-2 pt-1 pb-1">
                      <div className="text-center">
                        <span className="font-heading text-4xl font-bold tracking-tight text-[#0A1424]">
                          {formatINR(monthlyBill)}
                        </span>
                        <span className="text-xs font-medium text-stone-500 ml-1">/month</span>
                      </div>
                      <input
                        type="range"
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        step={SLIDER_STEP}
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value))}
                        className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-[#D8542F]"
                        style={{
                          background: `linear-gradient(to right, #D8542F ${((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%, #E8E4DF ${((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%)`,
                        }}
                      />
                    </div>

                    {/* 5 Instant Pareto Quick-Select Bracket Pills */}
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-1">
                      {PRESET_PILLS.map((pill) => (
                        <button
                          key={pill.label}
                          type="button"
                          onClick={() => setMonthlyBill(pill.value)}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            monthlyBill === pill.value
                              ? 'bg-[#0A1424] text-white shadow-xs'
                              : 'bg-stone-100 hover:bg-stone-200/80 text-stone-600 hover:text-stone-900 border border-stone-200/60'
                          }`}
                        >
                          {pill.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. PRIMARY CTA BUTTON & CONFIDENCE MICRO-COPY */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={handleCalculate}
                      disabled={!isFormValid || isCalculating}
                      className="w-full h-13 sm:h-14 rounded-full bg-[#0A1424] hover:bg-[#121E33] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_12px_28px_-6px_rgba(10,20,36,0.35)] flex items-center justify-between px-3 sm:px-4 transition-all cursor-pointer group"
                    >
                      {/* Left Sun Icon with Glowing Ring */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-500/25 to-orange-500/35 border border-amber-400/40 flex items-center justify-center shrink-0">
                        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9E42]" />
                      </div>

                      {/* Button Text */}
                      <span className="text-white font-bold text-sm sm:text-base tracking-wide font-heading">
                        {isCalculating ? 'Calculating your savings…' : 'Calculate My Solar Savings'}
                      </span>

                      {/* Right Coral Arrow */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D8542F] group-hover:bg-[#E2613B] flex items-center justify-center shrink-0 shadow-sm group-hover:translate-x-0.5 transition-transform">
                        {isCalculating ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </button>

                    {/* Confidence Proof Under CTA */}
                    <div className="flex items-center justify-center gap-3 sm:gap-5 text-[11px] text-[#7A746E] pt-1 font-medium select-none">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#8C867E]" />
                        Takes 30 seconds
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#D8542F]" />
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3 text-[#8C867E]" />
                        100% No obligation
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#D8542F]" />
                      <span>Direct MSEDCL Rates</span>
                    </div>
                  </div>

                </div>
              )}

              {/* ── STEP 2: SOLAR RECOMMENDATION RESULTS PANEL ── */}
              {currentStep === 2 && calculatedResults && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#121824] font-heading">
                        Your Solar Recommendation
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Based on {formatINR(monthlyBill)}/month bill in pincode {pincode}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleEditDetails}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#D8542F] hover:text-[#B84220] px-3 py-1.5 rounded-lg border border-[#D8542F]/30 hover:bg-[#D8542F]/5 transition-colors cursor-pointer"
                    >
                      <Pencil className="w-3 h-3" />
                      <span>Edit details</span>
                    </button>
                  </div>

                  {/* 4 Metric Cards Grid */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {/* Recommended System */}
                    <div className="p-3.5 sm:p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Zap className="w-3.5 h-3.5 text-[#D8542F]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-heading">
                          System Size
                        </span>
                      </div>
                      <div className="font-heading text-xl sm:text-2xl font-bold text-[#121824] tabular-nums">
                        {calculatedResults.systemSizeKw} kW
                      </div>
                      <span className="text-[11px] text-stone-500 mt-0.5 block">
                        Rooftop PV Array
                      </span>
                    </div>

                    {/* Monthly Savings */}
                    <div className="p-3.5 sm:p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 shadow-2xs">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Sun className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-heading">
                          Monthly Savings
                        </span>
                      </div>
                      <div className="font-heading text-xl sm:text-2xl font-bold text-emerald-700 tabular-nums">
                        {formatINR(calculatedResults.monthlySavings)}
                      </div>
                      <span className="text-[11px] text-emerald-600 mt-0.5 block">
                        Up to 90% reduction
                      </span>
                    </div>

                    {/* Annual Savings */}
                    <div className="p-3.5 sm:p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Award className="w-3.5 h-3.5 text-[#D8542F]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-heading">
                          Annual Savings
                        </span>
                      </div>
                      <div className="font-heading text-xl sm:text-2xl font-bold text-[#121824] tabular-nums">
                        {formatINR(calculatedResults.annualSavings)}
                      </div>
                      <span className="text-[11px] text-stone-500 mt-0.5 block">
                        Direct cash kept / year
                      </span>
                    </div>

                    {/* Payback Period */}
                    <div className="p-3.5 sm:p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock className="w-3.5 h-3.5 text-[#D8542F]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-heading">
                          Payback Period
                        </span>
                      </div>
                      <div className="font-heading text-xl sm:text-2xl font-bold text-[#121824] tabular-nums">
                        {calculatedResults.paybackYears.toFixed(1)} Yrs
                      </div>
                      <span className="text-[11px] text-stone-500 mt-0.5 block">
                        With {formatINR(calculatedResults.subsidyAmount)} subsidy
                      </span>
                    </div>
                  </div>

                  {/* Environmental Impact Banner */}
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-emerald-50/60 border border-emerald-200/70 text-emerald-800 text-[11px] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      {calculatedResults.co2OffsetTonnes} tonnes CO₂/yr avoided
                    </span>
                    <span>≈ {calculatedResults.treesEquivalent} trees planted</span>
                  </div>

                  {/* 2 Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleContactExpert}
                      className="flex-1 h-12 rounded-full bg-[#D8542F] hover:bg-[#E2613B] active:scale-[0.99] text-white font-bold text-sm font-heading shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Talk to a Solar Expert</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleContactExpert}
                      className="flex-1 h-12 rounded-full border border-stone-300 hover:bg-stone-50 active:scale-[0.99] text-[#121824] font-bold text-sm font-heading flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Get Detailed 3D Quote</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ── COMPACT BASE TRUST RIBBON ── */}
        <div className="mt-8 pt-5 border-t border-stone-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-stone-700">
            {/* Item 1 */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-full border border-stone-300/80 bg-white/80 flex items-center justify-center shrink-0 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#D8542F]" strokeWidth={2} />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] font-bold block font-heading leading-tight text-[#121824]">
                  Tier-1
                </span>
                <span className="text-[11px] text-stone-500 block">
                  High Efficiency Cells
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-stone-300/60" />

            {/* Item 2 */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-full border border-stone-300/80 bg-white/80 flex items-center justify-center shrink-0 shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#D8542F]" strokeWidth={2} />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] font-bold block font-heading leading-tight text-[#121824]">
                  Expert Team
                </span>
                <span className="text-[11px] text-stone-500 block">
                  In-House Certified Installation
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-stone-300/60" />

            {/* Item 3 */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-full border border-stone-300/80 bg-white/80 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D8542F]" strokeWidth={2} />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] font-bold block font-heading leading-tight text-[#121824]">
                  25-Year
                </span>
                <span className="text-[11px] text-stone-500 block">
                  Linear Performance Warranty
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
