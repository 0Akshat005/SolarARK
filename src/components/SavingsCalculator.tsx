/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SolarARK Premium Solar Savings Calculator
 * ==========================================
 * Exact pixel-level recreation matching the approved reference design:
 * - Playfair Display editorial serif typography
 * - Integrated luxury architectural villa at golden hour
 * - Floating glowing lightning badge + arched connection line
 * - Frosted glass card ("Your data is 100% secure")
 * - Piecewise non-linear Arc Slider with ₹10k at exact apex
 * - Topographic energy wave beneath ₹8,500/month display
 * - High-conversion CTA with glowing sun badge & coral arrow
 * - Handwritten "Get your personalized savings estimate" note with curved pointer
 * - Dual-layer fluid organic wave overlapping the bottom of the card
 * - Fully accessible & interactive 2-step flow powered by MSEDCL calculation engine
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
  waveBackNavy: '#131F33',
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
   PIECEWISE MAPPING FOR ARC SLIDER
   --------------------------------------------------------------
   In the design reference:
   - 0%   -> ₹1,000   (angle PI = 180 deg, left origin)
   - 25%  -> ₹5,000   (angle 0.75 PI = 135 deg, left incline)
   - 50%  -> ₹10,000  (angle 0.50 PI = 90 deg, EXACT APEX)
   - 75%  -> ₹15,000  (angle 0.25 PI = 45 deg, right decline)
   - 100% -> ₹25,000+ (angle 0.00 PI = 0 deg, right end)
   ══════════════════════════════════════════════════════════════ */
const SEGMENTS = [
  { valStart: 1000, valEnd: 5000, progStart: 0.0, progEnd: 0.25 },
  { valStart: 5000, valEnd: 10000, progStart: 0.25, progEnd: 0.50 },
  { valStart: 10000, valEnd: 15000, progStart: 0.50, progEnd: 0.75 },
  { valStart: 15000, valEnd: 25000, progStart: 0.75, progEnd: 1.00 },
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
   COMPONENT: CUSTOM SVG ARC SLIDER
   ══════════════════════════════════════════════════════════════ */
interface ArcSliderProps {
  value: number;
  onChange: (val: number) => void;
}

const ArcSlider: React.FC<ArcSliderProps> = ({ value, onChange }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);

  // Gentle wide arch geometry
  const cx = 270;
  const cy = 230;
  const rx = 230;
  const ry = 190;

  // Convert progress (0 to 1) to angle (PI to 0)
  const progressToAngle = useCallback((p: number) => {
    return Math.PI - p * Math.PI;
  }, []);

  const angleToProgress = useCallback((angle: number) => {
    const clamped = Math.max(0, Math.min(Math.PI, angle));
    return (Math.PI - clamped) / Math.PI;
  }, []);

  const getPoint = useCallback((angle: number) => ({
    x: cx + rx * Math.cos(angle),
    y: cy - ry * Math.sin(angle),
  }), [cx, cy, rx, ry]);

  const currentProg = valueToProgress(value);
  const currentAngle = progressToAngle(currentProg);
  const thumbPos = getPoint(currentAngle);

  // Background track (full arch from PI to 0)
  const bgPath = `M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 1 ${cx + rx} ${cy}`;

  // Active colored track (from PI to currentAngle)
  const activePath = `M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 1 ${thumbPos.x} ${thumbPos.y}`;

  // The 5 key milestones
  const milestones = [
    { label: '₹1k', prog: 0.00, offset: { x: -16, y: -16 } },
    { label: '₹5k', prog: 0.25, offset: { x: -20, y: -20 } },
    { label: '₹10k', prog: 0.50, offset: { x: 0, y: -22 } },
    { label: '₹15k', prog: 0.75, offset: { x: 20, y: -20 } },
    { label: '₹25k+', prog: 1.00, offset: { x: 20, y: -16 } },
  ];

  const handlePointer = useCallback((e: React.PointerEvent | PointerEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const svgX = (clientX / rect.width) * 540;
    const svgY = (clientY / rect.height) * 230;

    const dx = (svgX - cx) / rx;
    const dy = (cy - svgY) / ry;

    let angle = Math.atan2(dy, dx);
    if (angle < 0) angle = 0;
    if (angle > Math.PI) angle = Math.PI;

    const prog = angleToProgress(angle);
    onChange(progressToValue(prog));
  }, [cx, cy, rx, ry, angleToProgress, onChange]);

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
    <div className="relative select-none w-full max-w-[540px] mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 540 230"
        className="w-full h-auto cursor-pointer overflow-visible"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{ touchAction: 'none' }}
      >
        <defs>
          <linearGradient id="arcActiveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9421E" />
            <stop offset="50%" stopColor="#E05A36" />
            <stop offset="100%" stopColor="#F27752" />
          </linearGradient>

          <filter id="thumbGlowFilter" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#E05A36" floodOpacity="0.45" />
          </filter>
          <filter id="arcGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
          </filter>
        </defs>

        {/* 1. Background full track */}
        <path
          d={bgPath}
          fill="none"
          stroke={COLORS.trackBg}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* 2. Milestone dots on background track */}
        {milestones.map((m) => {
          const angle = progressToAngle(m.prog);
          const pt = getPoint(angle);
          return (
            <circle
              key={m.label}
              cx={pt.x}
              cy={pt.y}
              r="3.5"
              fill="#D0CBC2"
            />
          );
        })}

        {/* 3. Soft glow behind active track */}
        <path
          d={activePath}
          fill="none"
          stroke="#E05A36"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.22"
          filter="url(#arcGlowFilter)"
        />

        {/* 4. Active colored track */}
        <path
          d={activePath}
          fill="none"
          stroke="url(#arcActiveGrad)"
          strokeWidth="7.5"
          strokeLinecap="round"
        />

        {/* 5. Milestone labels */}
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
              className="font-bold fill-[#6E6761] select-none text-[12px]"
              style={{ fontFamily: 'var(--font-heading, "Space Grotesk")' }}
            >
              {m.label}
            </text>
          );
        })}

        {/* 6. Scrubber Thumb with `< >` arrows */}
        <g
          transform={`translate(${thumbPos.x}, ${thumbPos.y})`}
          filter="url(#thumbGlowFilter)"
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Main orange thumb button */}
          <circle r="14.5" fill="#E05A36" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Subtle inner highlight */}
          <circle r="7.5" fill="#F0724D" opacity="0.5" />
          {/* Horizontal slider arrows glyph `< >` */}
          <path
            d="M -4.5 -0.5 L -2 -3 M -4.5 -0.5 L -2 2 M 4.5 -0.5 L 2 -3 M 4.5 -0.5 L 2 2"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   COMPONENT: TOPOGRAPHIC DOTTED ENERGY WAVE
   ══════════════════════════════════════════════════════════════ */
const TopographicEnergyWave: React.FC = () => (
  <div className="w-full max-w-[480px] mx-auto overflow-hidden pointer-events-none py-1 select-none">
    <svg viewBox="0 0 480 34" className="w-full h-7 opacity-40">
      <defs>
        <linearGradient id="waveDotGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E05A36" stopOpacity="0.05" />
          <stop offset="25%" stopColor="#E05A36" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#E05A36" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E05A36" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M 10 16 C 80 4, 160 28, 240 14 C 320 0, 400 24, 470 12"
        fill="none"
        stroke="url(#waveDotGrad)"
        strokeWidth="1.8"
        strokeDasharray="2 6"
      />
      <path
        d="M 10 20 C 90 8, 170 32, 250 18 C 330 4, 410 28, 470 16"
        fill="none"
        stroke="url(#waveDotGrad)"
        strokeWidth="1.4"
        strokeDasharray="1.5 5"
        opacity="0.8"
      />
      <path
        d="M 10 24 C 100 12, 180 36, 260 22 C 340 8, 420 32, 470 20"
        fill="none"
        stroke="url(#waveDotGrad)"
        strokeWidth="1.2"
        strokeDasharray="2 7"
        opacity="0.6"
      />
      <path
        d="M 10 12 C 70 0, 150 24, 230 10 C 310 -4, 390 18, 470 8"
        fill="none"
        stroke="url(#waveDotGrad)"
        strokeWidth="1"
        strokeDasharray="1 5"
        opacity="0.5"
      />
    </svg>
  </div>
);

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT: SAVINGS CALCULATOR
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isValidPincode = pincode.length === 6 && /^\d+$/.test(pincode);
  const isFormValid = isValidPincode && monthlyBill >= SLIDER_MIN;

  const handleCalculate = async () => {
    if (!isFormValid) return;
    setIsCalculating(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
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

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16"
      style={{ backgroundColor: COLORS.bgCream }}
    >
      {/* ── BACKGROUND AMBIENCE: WARM GOLDEN HAZE & BIRD SILHOUETTES ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft golden glow in center-left radiating towards card */}
        <div
          className="absolute top-[20%] left-[18%] w-[600px] h-[500px] rounded-full blur-[150px] opacity-35"
          style={{ backgroundColor: '#FCD9B1' }}
        />
        {/* 3 Bird silhouettes in sky */}
        <svg
          className="absolute top-[25%] left-[26%] w-16 h-8 opacity-25"
          viewBox="0 0 80 40"
          fill="none"
          stroke="#3D3328"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M 5 20 Q 15 10, 25 18 Q 35 10, 45 20" />
          <path d="M 40 10 Q 48 2, 56 9 Q 64 2, 72 10" transform="scale(0.7) translate(20, -5)" />
          <path d="M 20 30 Q 28 24, 36 29 Q 44 24, 52 30" transform="scale(0.6) translate(10, 5)" />
        </svg>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ══════════════════════════════════════════════════════════════
              LEFT SIDE: BRAND STORYTELLING & LUXURY VILLA ARTWORK
             ══════════════════════════════════════════════════════════════ */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-5">
              {/* SolarARK Logo with Fine Sunburst Mark */}
              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <span className="font-heading font-bold text-2xl sm:text-[28px] tracking-tight text-[#121824]">
                    Solar<span className="text-[#121824]">ARK</span>
                  </span>
                  <svg
                    className="absolute -top-3 right-0 w-8 h-5 text-[#D8542F]"
                    viewBox="0 0 32 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="16" y1="18" x2="16" y2="6" />
                    <line x1="16" y1="18" x2="8" y2="8" />
                    <line x1="16" y1="18" x2="24" y2="8" />
                    <line x1="16" y1="18" x2="3" y2="14" />
                    <line x1="16" y1="18" x2="29" y2="14" />
                  </svg>
                </div>
              </div>

              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E2D8] bg-[#FDFCF9] shadow-2xs">
                <Sun className="w-3.5 h-3.5 text-[#D8542F]" />
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-widest text-[#5E5750] uppercase font-heading">
                  Smart Today. Secure Forever.
                </span>
              </div>

              {/* Editorial High-Contrast Serif Headline */}
              <div className="space-y-0.5 pt-1">
                <h2
                  className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-[#121824] leading-[1.08] tracking-tight"
                  style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
                >
                  Predictable power.
                </h2>
                <h2
                  className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-[#121824] leading-[1.08] tracking-tight"
                  style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
                >
                  Lasting savings.
                </h2>
                <div className="relative pt-0.5 inline-block">
                  <h3
                    className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.08] tracking-tight text-[#D8542F] italic"
                    style={{ fontFamily: 'var(--font-serif, "Playfair Display", Georgia, serif)' }}
                  >
                    It starts with you.
                  </h3>
                  {/* Fine curved terracotta underline swoosh */}
                  <svg
                    viewBox="0 0 220 18"
                    className="w-48 sm:w-56 h-3 text-[#D8542F] mt-1 -ml-1 opacity-90"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M 6 12 C 60 18, 140 16, 212 4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#6E6761] max-w-md font-sans">
                Share a couple of details and we'll reveal your ideal solar system, savings and long-term benefits.
              </p>
            </div>

            {/* ── SEAMLESS ARTWORK (NO BOX, NO BORDER) ── */}
            <div className="relative mt-2 sm:mt-4 -ml-4 sm:-ml-6 lg:-ml-8 z-10">
              {/* Luxury House Image with Rooftop Solar at Golden Hour - Blended into Canvas */}
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/calculator-villa-blended.png"
                  alt="Modern villa with SolarARK rooftop solar panels at sunset"
                  className="w-full h-auto object-contain pointer-events-none select-none"
                />

                {/* Floating Glowing Lightning Badge ⚡ */}
                <div className="absolute top-[8%] right-[16%] sm:right-[20%] z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#E05A36]/35 blur-md animate-pulse" />
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E05A36]/40 shadow-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#D8542F]" fill="#D8542F" />
                    </div>
                  </div>
                </div>

                {/* Dotted Arched Connection Line */}
                <svg
                  className="absolute -top-6 right-[18%] sm:right-[22%] w-36 h-24 pointer-events-none z-10 opacity-70"
                  viewBox="0 0 140 90"
                  fill="none"
                >
                  <path
                    d="M 120 70 C 110 30, 60 10, 10 20"
                    stroke="#D8542F"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="10" cy="20" r="3" fill="#D8542F" />
                </svg>

                {/* Frosted Glass Security Badge Card */}
                <div
                  className="absolute bottom-6 right-4 sm:right-8 z-20 px-4 py-3 rounded-2xl border border-white/60 shadow-xl flex items-center gap-3"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${COLORS.successGreen}15` }}
                  >
                    <ShieldCheck className="w-5 h-5" style={{ color: COLORS.successGreen }} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-stone-500 block leading-tight font-medium">
                      Your data is
                    </span>
                    <span className="text-xs sm:text-sm font-bold block text-slate-900 leading-tight font-heading">
                      100% secure
                    </span>
                    <span className="text-[9.5px] text-stone-400 block leading-tight">
                      Private. Protected. Never shared.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT SIDE: ELEVATED CARD WITH ARC SLIDER & 2-STEP FLOW
             ══════════════════════════════════════════════════════════════ */}
          <div
            ref={calculatorCardRef}
            className={`lg:col-span-7 transition-all duration-700 delay-150 ease-out relative z-10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div
              className="rounded-[36px] sm:rounded-[42px] border border-[#EAE5DE] bg-white p-6 sm:p-9 lg:p-10 shadow-[0_30px_90px_-20px_rgba(20,25,35,0.12)]"
            >
              {/* ── STEP PROGRESS HEADER ── */}
              <div className="flex items-center gap-3 sm:gap-4 pb-5 mb-6 border-b border-[#F0ECE5]">
                {/* Step 1 Pill */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors shadow-2xs"
                    style={{
                      backgroundColor: currentStep >= 1 ? COLORS.terracotta : '#E8E4DF',
                      color: 'white',
                    }}
                  >
                    {currentStep > 1 ? '✓' : '1'}
                  </span>
                  <span className="text-sm font-bold text-[#121824] font-heading">
                    Your Details
                  </span>
                </div>

                {/* Progress line with solid half and dashed second half */}
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
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-7 h-7 rounded-full text-xs font-medium flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: currentStep >= 2 ? COLORS.terracotta : '#FFFFFF',
                      border: currentStep >= 2 ? 'none' : '1px solid #D5D0C8',
                      color: currentStep >= 2 ? 'white' : '#8D939D',
                    }}
                  >
                    2
                  </span>
                  <span
                    className="text-sm font-medium transition-colors"
                    style={{ color: currentStep >= 2 ? '#121824' : '#8D939D' }}
                  >
                    Your Solar Recommendation
                  </span>
                </div>
              </div>

              {/* ── STEP 1: INTERACTIVE DETAILS FORM ── */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-400">
                  {/* 1. LOCATION PINCODE FIELD */}
                  <div className="space-y-2">
                    <label
                      htmlFor="calc-pincode"
                      className="block text-xs font-bold uppercase tracking-wider text-[#121824] font-heading"
                    >
                      Enter Your Location
                    </label>
                    <div className="relative flex items-center rounded-2xl border border-[#DED8CE] bg-white px-4 py-3.5 shadow-2xs transition-all focus-within:border-[#D8542F] focus-within:ring-2 focus-within:ring-[#D8542F]/15">
                      <MapPin className="w-5 h-5 text-[#8A847C] shrink-0 mr-3" strokeWidth={1.75} />
                      <input
                        id="calc-pincode"
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                        placeholder="Enter 6-digit pincode"
                        className="flex-1 bg-transparent text-sm sm:text-base font-semibold text-[#121824] placeholder:text-stone-400 focus:outline-none"
                      />
                      {/* Serviceability badge */}
                      {isValidPincode ? (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 ml-2 bg-[#2F9E58]/10 text-[#2F9E58] border border-[#2F9E58]/30">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9E58]" />
                          <span>{/^(40|41|42|43|44)/.test(pincode) ? 'MSEDCL Serviceable' : 'Serviceable'}</span>
                        </span>
                      ) : (
                        pincode.length > 0 && (
                          <span className="text-xs font-medium text-stone-400 shrink-0 ml-2">
                            {6 - pincode.length} digits left
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* 2. MONTHLY ELECTRICITY BILL SELECTOR */}
                  <div className="space-y-3 pt-1">
                    <h3 className="text-center text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#121824] font-heading">
                      What's your average monthly electricity bill?
                    </h3>

                    {/* Desktop Arc Slider */}
                    <div className="hidden sm:block pt-1">
                      <ArcSlider
                        value={monthlyBill}
                        onChange={setMonthlyBill}
                      />
                    </div>

                    {/* Mobile Touch Slider */}
                    <div className="block sm:hidden space-y-2 pt-1">
                      <input
                        type="range"
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        step={SLIDER_STEP}
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value))}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-[#D8542F]"
                        style={{
                          background: `linear-gradient(to right, #D8542F ${((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%, #E8E4DF ${((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%)`,
                        }}
                      />
                      <div className="flex justify-between text-[11px] font-bold text-stone-400 px-1 font-heading">
                        <span>₹1k</span>
                        <span>₹5k</span>
                        <span>₹10k</span>
                        <span>₹15k</span>
                        <span>₹25k+</span>
                      </div>
                    </div>

                    {/* Center INR Display */}
                    <div className="text-center space-y-0.5 pt-0.5">
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-[#0A1424] tabular-nums">
                          {formatINR(monthlyBill)}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-stone-500">
                          /month
                        </span>
                      </div>
                    </div>

                    {/* Topographic Dotted Energy Wave */}
                    <TopographicEnergyWave />
                  </div>

                  {/* 3. PRIMARY CTA BUTTON & ANNOTATIONS */}
                  <div className="space-y-3 pt-1">
                    <div className="relative max-w-[500px] mx-auto">
                      {/* Deep Navy High-Conversion CTA Pill */}
                      <button
                        type="button"
                        onClick={handleCalculate}
                        disabled={!isFormValid || isCalculating}
                        className="w-full h-16 rounded-full bg-[#0A1424] hover:bg-[#121E33] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_14px_34px_-8px_rgba(10,20,36,0.38)] flex items-center justify-between px-3 sm:px-4 transition-all cursor-pointer group"
                      >
                        {/* Left Sun Icon with Glowing Halo */}
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500/25 to-orange-500/35 border border-amber-400/40 flex items-center justify-center shrink-0">
                          <Sun className="w-5 h-5 text-[#FF9E42] drop-shadow-sm" />
                        </div>

                        {/* Button Text */}
                        <span className="text-white font-bold text-base sm:text-lg tracking-wide font-heading">
                          {isCalculating ? 'Calculating your savings…' : 'Calculate My Solar Savings'}
                        </span>

                        {/* Right Coral Arrow Circle */}
                        <div className="w-11 h-11 rounded-full bg-[#D8542F] group-hover:bg-[#E2613B] flex items-center justify-center shrink-0 shadow-md group-hover:translate-x-1 transition-transform">
                          {isCalculating ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <ArrowRight className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </button>

                      {/* Handwritten Annotation to the right of the button */}
                      <div className="hidden xl:flex flex-col items-start absolute -right-28 top-2 pointer-events-none select-none">
                        <span
                          className="text-[17px] text-[#6E6761] leading-tight text-left"
                          style={{ fontFamily: 'var(--font-handwriting, "Caveat", cursive)' }}
                        >
                          Get your
                          <br />
                          personalized
                          <br />
                          savings estimate
                        </span>
                        {/* Curved arrow pointing down-left toward button */}
                        <svg
                          width="36"
                          height="22"
                          viewBox="0 0 36 22"
                          fill="none"
                          stroke="#7D7770"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className="mt-1 -ml-1 opacity-75"
                        >
                          <path d="M 30 2 C 22 2, 8 6, 4 16" />
                          <polyline points="10,14 4,16 8,20" />
                        </svg>
                      </div>
                    </div>

                    {/* Trust Proof Below CTA */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-[#7A746E] pt-2 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#8C867E]" />
                        Takes less than 30 seconds
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8542F]" />
                      <span className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#8C867E]" />
                        No obligation
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2: SOLAR RECOMMENDATION RESULTS PANEL ── */}
              {currentStep === 2 && calculatedResults && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-400">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#121824] font-heading">
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
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {/* System Size */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-stone-200/90 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Zap className="w-4 h-4 text-[#D8542F]" />
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-stone-500 font-heading">
                          Recommended System
                        </span>
                      </div>
                      <div className="font-heading text-2xl sm:text-3xl font-bold text-[#121824] tabular-nums">
                        {calculatedResults.systemSizeKw} kW
                      </div>
                      <span className="text-xs text-stone-500 mt-0.5 block">
                        Rooftop Solar Array
                      </span>
                    </div>

                    {/* Monthly Savings */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sun className="w-4 h-4 text-emerald-600" />
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-700 font-heading">
                          Monthly Savings
                        </span>
                      </div>
                      <div className="font-heading text-2xl sm:text-3xl font-bold text-emerald-700 tabular-nums">
                        {formatINR(calculatedResults.monthlySavings)}
                      </div>
                      <span className="text-xs text-emerald-600 mt-0.5 block">
                        Up to 90% Bill Reduction
                      </span>
                    </div>

                    {/* Annual Savings */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-stone-200/90 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Award className="w-4 h-4 text-[#D8542F]" />
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-stone-500 font-heading">
                          Annual Savings
                        </span>
                      </div>
                      <div className="font-heading text-2xl sm:text-3xl font-bold text-[#121824] tabular-nums">
                        {formatINR(calculatedResults.annualSavings)}
                      </div>
                      <span className="text-xs text-stone-500 mt-0.5 block">
                        Direct Cash Kept Every Year
                      </span>
                    </div>

                    {/* Payback Period */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-stone-200/90 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Clock className="w-4 h-4 text-[#D8542F]" />
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-stone-500 font-heading">
                          Payback Period
                        </span>
                      </div>
                      <div className="font-heading text-2xl sm:text-3xl font-bold text-[#121824] tabular-nums">
                        {calculatedResults.paybackYears.toFixed(1)} Yrs
                      </div>
                      <span className="text-xs text-stone-500 mt-0.5 block">
                        With {formatINR(calculatedResults.subsidyAmount)} Subsidy
                      </span>
                    </div>
                  </div>

                  {/* Environmental Impact Banner */}
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-4 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-emerald-800 text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Leaf className="w-4 h-4 text-emerald-600" />
                      {calculatedResults.co2OffsetTonnes} tonnes CO₂/yr avoided
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    <span>
                      ≈ {calculatedResults.treesEquivalent} mature trees planted equivalent
                    </span>
                  </div>

                  {/* 2 Conversion Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleContactExpert}
                      className="flex-1 h-14 rounded-full bg-[#D8542F] hover:bg-[#E2613B] active:scale-[0.99] text-white font-bold text-sm sm:text-base font-heading shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Talk to a Solar Expert</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleContactExpert}
                      className="flex-1 h-14 rounded-full border border-stone-300 hover:bg-stone-50 active:scale-[0.99] text-[#121824] font-bold text-sm sm:text-base font-heading flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Get Detailed 3D Quote</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM TRUST STRIP WITH DUAL-LAYER FLUID WAVE
         ══════════════════════════════════════════════════════════════ */}
      <div className="relative -mt-8 sm:-mt-12 lg:-mt-16 z-0">
        {/* Layer 1: Back Wave (lighter navy/slate) */}
        <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-none z-0">
          <svg
            viewBox="0 0 1440 85"
            preserveAspectRatio="none"
            className="w-full h-14 sm:h-20"
          >
            <path
              d="M 0 45 C 260 70, 520 20, 780 48 C 1040 75, 1260 25, 1440 50 L 1440 85 L 0 85 Z"
              fill={COLORS.waveBackNavy}
            />
          </svg>
        </div>

        {/* Layer 2: Front Wave (deep midnight navy) */}
        <div className="relative z-10 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 75"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-18"
          >
            <path
              d="M 0 30 C 320 60, 640 10, 960 40 C 1200 65, 1340 20, 1440 32 L 1440 75 L 0 75 Z"
              fill={COLORS.footerNavy}
            />
          </svg>
        </div>

        {/* Navy Trust Content Bar */}
        <div
          className="relative z-10 pb-8 sm:pb-10 pt-1"
          style={{ backgroundColor: COLORS.footerNavy }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 border-t border-white/10 pt-6">
              
              {/* Trust Item 1: Tier-1 */}
              <div className="flex items-center gap-3.5 sm:justify-start w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-white/80" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-[15px] block font-heading leading-tight">
                    Tier-1
                  </span>
                  <span className="text-white/60 text-xs font-medium block mt-0.5">
                    High Efficiency Cells
                  </span>
                </div>
              </div>

              {/* Divider on desktop */}
              <div className="hidden sm:block w-px h-8 bg-white/10" />

              {/* Trust Item 2: Expert */}
              <div className="flex items-center gap-3.5 sm:justify-start w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-white/80" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-[15px] block font-heading leading-tight">
                    Expert
                  </span>
                  <span className="text-white/60 text-xs font-medium block mt-0.5">
                    In-House Installation
                  </span>
                </div>
              </div>

              {/* Divider on desktop */}
              <div className="hidden sm:block w-px h-8 bg-white/10" />

              {/* Trust Item 3: 25-Year */}
              <div className="flex items-center gap-3.5 sm:justify-start w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white/80" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-white font-bold text-sm sm:text-[15px] block font-heading leading-tight">
                    25-Year
                  </span>
                  <span className="text-white/60 text-xs font-medium block mt-0.5">
                    Performance Guarantee
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
