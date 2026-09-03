/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Premium Solar Savings Calculator — Redesigned Section
 * ======================================================
 * Split-panel layout inspired by the revampsection.md specification.
 * Preserves the existing calculation engine (src/utils/calculator.ts)
 * and the same props interface for zero-breaking-change App.tsx integration.
 */

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
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
  Award,
  Pencil,
  Leaf,
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════════
   DESIGN TOKENS (from revampsection.md spec)
   ══════════════════════════════════════════════════════════════ */
const TOKENS = {
  bgCream: '#F8F4EF',
  cardSurface: '#FFFDFC',
  deepNavy: '#07162B',
  solarCoral: '#E9532D',
  coralGlow: 'rgba(233, 83, 45, 0.18)',
  successGreen: '#2F9E58',
  mutedText: '#68707A',
  border: 'rgba(7, 22, 43, 0.12)',
} as const;

/* ══════════════════════════════════════════════════════════════
   SLIDER CONFIGURATION
   ══════════════════════════════════════════════════════════════ */
const SLIDER_MIN = 1000;
const SLIDER_MAX = 25000;
const SLIDER_STEP = 500;

const ARC_TICKS = [
  { value: 1000, label: '₹1k' },
  { value: 5000, label: '₹5k' },
  { value: 10000, label: '₹10k' },
  { value: 15000, label: '₹15k' },
  { value: 25000, label: '₹25k+' },
];

/* ══════════════════════════════════════════════════════════════
   PROPS INTERFACE (unchanged from original for App.tsx compat)
   ══════════════════════════════════════════════════════════════ */
interface SavingsCalculatorProps {
  onClaimEstimate: (data: { pincode: string; monthlyBill: number }) => void;
  initialPincode?: string;
  initialBill?: number;
}

/* ══════════════════════════════════════════════════════════════
   COMPONENT: SVG ARC SLIDER (Desktop)
   ══════════════════════════════════════════════════════════════ */
interface ArcSliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  ticks: typeof ARC_TICKS;
}

const ArcSlider: React.FC<ArcSliderProps> = ({ value, min, max, step, onChange, ticks }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);

  // Arc geometry: semicircle from left to right
  const cx = 200, cy = 190, r = 160;
  const startAngle = Math.PI; // left
  const endAngle = 0;        // right

  const valueToAngle = useCallback((v: number) => {
    const t = (v - min) / (max - min);
    return startAngle + t * (endAngle - startAngle);
  }, [min, max]);

  const angleToValue = useCallback((angle: number) => {
    const t = (angle - startAngle) / (endAngle - startAngle);
    const raw = min + t * (max - min);
    return Math.round(Math.max(min, Math.min(max, raw)) / step) * step;
  }, [min, max, step]);

  const pointOnArc = useCallback((angle: number) => ({
    x: cx + r * Math.cos(angle),
    y: cy - r * Math.sin(angle),
  }), []);

  const currentAngle = valueToAngle(value);
  const thumbPos = pointOnArc(currentAngle);

  // Build the filled arc path from start to current
  const arcPath = () => {
    const start = pointOnArc(startAngle);
    const end = thumbPos;
    const largeArc = (startAngle - currentAngle) > Math.PI ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  };

  // Full arc background path
  const fullArcPath = () => {
    const start = pointOnArc(startAngle);
    const end = pointOnArc(endAngle);
    return `M ${start.x} ${start.y} A ${r} ${r} 0 0 1 ${end.x} ${end.y}`;
  };

  const handlePointerEvent = useCallback((e: React.PointerEvent | PointerEvent) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Scale to SVG coordinate space
    const svgX = (x / rect.width) * 400;
    const svgY = (y / rect.height) * 220;
    const dx = svgX - cx;
    const dy = cy - svgY;
    let angle = Math.atan2(dy, dx);
    if (angle < 0) angle = 0;
    if (angle > Math.PI) angle = Math.PI;
    onChange(angleToValue(angle));
  }, [angleToValue, onChange]);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    handlePointerEvent(e);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) handlePointerEvent(e);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative select-none" aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 400 220"
        className="w-full max-w-[420px] mx-auto cursor-pointer"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{ touchAction: 'none' }}
      >
        {/* Background arc track */}
        <path
          d={fullArcPath()}
          fill="none"
          stroke="#E8E4DF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Filled arc (active portion) */}
        <path
          d={arcPath()}
          fill="none"
          stroke={TOKENS.solarCoral}
          strokeWidth="6"
          strokeLinecap="round"
          className="drop-shadow-sm"
        />
        {/* Warm glow behind filled arc */}
        <path
          d={arcPath()}
          fill="none"
          stroke={TOKENS.solarCoral}
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.12"
        />

        {/* Tick labels */}
        {ticks.map((tick) => {
          const angle = valueToAngle(tick.value);
          const labelPos = pointOnArc(angle);
          // Offset labels outward
          const labelOffset = {
            x: cx + (r + 28) * Math.cos(angle),
            y: cy - (r + 28) * Math.sin(angle),
          };
          return (
            <g key={tick.value}>
              {/* Small tick dot on arc */}
              <circle cx={labelPos.x} cy={labelPos.y} r="3" fill="#C4BFB8" />
              {/* Label text */}
              <text
                x={labelOffset.x}
                y={labelOffset.y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-stone-500"
                style={{ fontSize: '11px', fontWeight: 600, fontFamily: 'var(--font-heading)' }}
              >
                {tick.label}
              </text>
            </g>
          );
        })}

        {/* Thumb circle */}
        <circle
          cx={thumbPos.x}
          cy={thumbPos.y}
          r="14"
          fill="white"
          stroke={TOKENS.solarCoral}
          strokeWidth="3"
          className="drop-shadow-md cursor-grab active:cursor-grabbing"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(233, 83, 45, 0.3))' }}
        />
        {/* Inner sun icon on thumb */}
        <circle
          cx={thumbPos.x}
          cy={thumbPos.y}
          r="5"
          fill={TOKENS.solarCoral}
        />
      </svg>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   COMPONENT: DECORATIVE WAVE
   ══════════════════════════════════════════════════════════════ */
const DecorativeWave: React.FC = () => (
  <svg viewBox="0 0 400 30" className="w-full max-w-[400px] mx-auto opacity-30 h-5" preserveAspectRatio="none">
    <path
      d="M0 15 Q50 5, 100 15 T200 15 T300 15 T400 15"
      fill="none"
      stroke={TOKENS.solarCoral}
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <path
      d="M0 20 Q50 10, 100 20 T200 20 T300 20 T400 20"
      fill="none"
      stroke={TOKENS.solarCoral}
      strokeWidth="1"
      opacity="0.5"
      strokeDasharray="2 4"
    />
  </svg>
);

/* ══════════════════════════════════════════════════════════════
   COMPONENT: CALCULATOR HERO IMAGE PLACEHOLDER
   ══════════════════════════════════════════════════════════════ */
const CalculatorHeroImage: React.FC = () => (
  <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-[220px] sm:h-[260px] lg:h-[280px] bg-gradient-to-br from-amber-100/60 via-orange-50/40 to-stone-200/50 border border-stone-200/60 shadow-inner">
    {/*
     * ┌─────────────────────────────────────────────────┐
     * │  FUTURE IMAGE SOURCE                            │
     * │                                                 │
     * │  Replace the gradient placeholder below with:   │
     * │  <img                                           │
     * │    src="/images/calculator-hero.jpg"             │
     * │    alt="Modern home with SolarARK rooftop solar" │
     * │    className="w-full h-full object-cover"        │
     * │  />                                             │
     * │                                                 │
     * │  Recommended: Warm sunset residential photo     │
     * │  with visible solar panels on the rooftop.      │
     * └─────────────────────────────────────────────────┘
     */}

    {/* Placeholder decorative solar abstract */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Abstract house shape */}
        <svg viewBox="0 0 120 100" className="w-24 h-20 opacity-20">
          <polygon points="60,10 10,50 110,50" fill="#D4A574" />
          <rect x="20" y="50" width="80" height="40" fill="#C4A882" rx="2" />
          {/* Solar panel grid */}
          <rect x="30" y="20" width="25" height="15" fill="#5B7B8A" rx="1" opacity="0.7" />
          <rect x="60" y="20" width="25" height="15" fill="#5B7B8A" rx="1" opacity="0.7" />
          <line x1="42" y1="20" x2="42" y2="35" stroke="#7BA0B2" strokeWidth="0.5" />
          <line x1="72" y1="20" x2="72" y2="35" stroke="#7BA0B2" strokeWidth="0.5" />
        </svg>
        {/* Sun glow */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-300/30 rounded-full blur-lg" />
      </div>
    </div>

    {/* Warm bottom gradient fade */}
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-amber-50/80 to-transparent" />
  </div>
);

/* ══════════════════════════════════════════════════════════════
   COMPONENT: STEP PROGRESS HEADER
   ══════════════════════════════════════════════════════════════ */
interface ProgressHeaderProps {
  currentStep: 1 | 2;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ currentStep }) => (
  <div className="flex items-center gap-3 sm:gap-4 pb-5 mb-5 border-b" style={{ borderColor: TOKENS.border }}>
    {/* Step 1 */}
    <div className="flex items-center gap-2">
      <span
        className="w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors duration-300"
        style={{
          backgroundColor: TOKENS.solarCoral,
          color: 'white',
        }}
      >
        {currentStep > 1 ? '✓' : '1'}
      </span>
      <span className="text-xs sm:text-sm font-bold" style={{ color: TOKENS.deepNavy }}>
        Your Details
      </span>
    </div>

    {/* Progress line */}
    <div className="flex-1 h-0.5 rounded-full bg-stone-200 relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
        style={{
          width: currentStep >= 2 ? '100%' : '0%',
          backgroundColor: TOKENS.solarCoral,
        }}
      />
    </div>

    {/* Step 2 */}
    <div className="flex items-center gap-2">
      <span
        className="w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors duration-300"
        style={{
          backgroundColor: currentStep >= 2 ? TOKENS.solarCoral : '#E8E4DF',
          color: currentStep >= 2 ? 'white' : '#999',
        }}
      >
        2
      </span>
      <span
        className="text-xs sm:text-sm font-semibold transition-colors duration-300"
        style={{ color: currentStep >= 2 ? TOKENS.deepNavy : '#999' }}
      >
        Your Solar Recommendation
      </span>
    </div>
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
  // ── State ──
  const [pincode, setPincode] = useState<string>(initialPincode);
  const [monthlyBill, setMonthlyBill] = useState<number>(initialBill);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculatedResults, setCalculatedResults] = useState<CalculatorResults | null>(null);

  // ── Refs ──
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const calculatorCardRef = useRef<HTMLDivElement>(null);

  // ── Scroll-triggered entrance ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isValidPincode = pincode.length === 6 && /^\d+$/.test(pincode);
  const isFormValid = isValidPincode && monthlyBill >= SLIDER_MIN;

  // ── Handlers ──
  const handleCalculate = async () => {
    if (!isFormValid) return;
    setIsCalculating(true);
    // Simulate brief calculation delay for UX polish
    await new Promise((resolve) => setTimeout(resolve, 800));
    const results = calculateSolarSavings({ pincode, monthlyBill });
    setCalculatedResults(results);
    setIsCalculating(false);
    setCurrentStep(2);
    // Smooth scroll to keep results visible
    setTimeout(() => {
      calculatorCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleEditDetails = () => {
    setCurrentStep(1);
    // Preserve pincode and monthlyBill — they remain in state
  };

  const handleGetQuote = () => {
    onClaimEstimate({ pincode, monthlyBill });
  };

  // Detect reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  const transitionClass = prefersReducedMotion
    ? ''
    : 'transition-all duration-700 ease-out';

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="relative overflow-hidden"
      style={{ backgroundColor: TOKENS.bgCream }}
    >
      {/* ── SUBTLE DECORATIVE ELEMENTS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm solar glow top-right */}
        <div
          className="absolute top-[5%] right-[8%] w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ backgroundColor: TOKENS.coralGlow }}
        />
        {/* Faint orbital decorative ring */}
        <svg className="absolute top-[15%] left-[25%] w-[300px] h-[300px] opacity-[0.04]" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="140" fill="none" stroke={TOKENS.deepNavy} strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="150" cy="150" r="100" fill="none" stroke={TOKENS.deepNavy} strokeWidth="0.5" strokeDasharray="2 8" />
        </svg>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">

        {/* ═══ SPLIT PANEL GRID ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ════════════════════════════════════════════════════════
              A. LEFT: BRAND / STORYTELLING PANEL (~5 cols = ~42%)
             ════════════════════════════════════════════════════════ */}
          <div
            className={`lg:col-span-5 space-y-6 lg:space-y-8 ${transitionClass} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Sun badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-200/80 bg-amber-50/60 shadow-sm">
              <Sun className="w-4 h-4 text-amber-600" />
              <span
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
              >
                Smart Today. Secure Forever.
              </span>
            </div>

            {/* Premium editorial headline */}
            <div className="space-y-1">
              <h2
                className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]"
                style={{ color: TOKENS.deepNavy }}
              >
                Predictable power.
                <br />
                Lasting savings.
              </h2>
              <p
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] tracking-tight"
                style={{
                  color: TOKENS.solarCoral,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontStyle: 'italic',
                }}
              >
                It starts with you.
              </p>
            </div>

            {/* Supporting paragraph */}
            <p
              className="text-sm sm:text-base leading-relaxed max-w-md"
              style={{ color: TOKENS.mutedText }}
            >
              Share a couple of details and we'll reveal your ideal solar system, estimated savings, and long-term benefits.
            </p>

            {/* Hero image placeholder with frosted security overlay */}
            <div className="relative hidden sm:block">
              <CalculatorHeroImage />

              {/* Frosted security card overlaying the image */}
              <div
                className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-56 px-4 py-3 rounded-xl border border-white/40 flex items-center gap-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${TOKENS.successGreen}15` }}
                >
                  <ShieldCheck className="w-5 h-5" style={{ color: TOKENS.successGreen }} />
                </div>
                <div>
                  <span className="text-xs font-bold block" style={{ color: TOKENS.deepNavy }}>
                    Your data is 100% secure
                  </span>
                  <span className="text-[10px] font-medium" style={{ color: TOKENS.mutedText }}>
                    Private. Protected. Never shared.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              B. RIGHT: INTERACTIVE CALCULATOR CARD (~7 cols = ~58%)
             ════════════════════════════════════════════════════════ */}
          <div
            ref={calculatorCardRef}
            className={`lg:col-span-7 ${transitionClass} delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div
              className="rounded-[28px] sm:rounded-[36px] border shadow-2xl p-5 sm:p-7 lg:p-9"
              style={{
                backgroundColor: TOKENS.cardSurface,
                borderColor: TOKENS.border,
                boxShadow: '0 25px 60px -12px rgba(7, 22, 43, 0.12), 0 8px 24px -8px rgba(7, 22, 43, 0.08)',
              }}
            >
              {/* Step Progress */}
              <ProgressHeader currentStep={currentStep} />

              {/* ── STEP 1: INPUT FORM ── */}
              {currentStep === 1 && (
                <div className={prefersReducedMotion ? '' : 'animate-in fade-in duration-500'}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCalculate();
                    }}
                    className="space-y-6 sm:space-y-7"
                  >
                    {/* PINCODE SECTION */}
                    <fieldset className="space-y-2.5">
                      <legend
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                      >
                        Enter Your Location
                      </legend>

                      <div
                        className="relative flex items-center border rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 transition-all duration-200 focus-within:ring-2"
                        style={{
                          borderColor: TOKENS.border,
                          backgroundColor: 'white',
                        }}
                      >
                        <MapPin className="w-5 h-5 shrink-0 mr-3" style={{ color: TOKENS.mutedText }} />
                        <input
                          id="pincode-input"
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                          placeholder="Enter 6-digit pincode"
                          className="flex-1 bg-transparent text-sm sm:text-base font-medium placeholder:text-stone-400 focus:outline-none"
                          style={{ color: TOKENS.deepNavy }}
                          aria-label="Enter your 6-digit pincode"
                          autoComplete="postal-code"
                        />

                        {/* Serviceability badge */}
                        {isValidPincode ? (
                          <span
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 ml-2"
                            style={{
                              backgroundColor: `${TOKENS.successGreen}12`,
                              color: TOKENS.successGreen,
                              border: `1px solid ${TOKENS.successGreen}30`,
                            }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {/^(40|41|42|43|44)/.test(pincode) ? 'MSEDCL Serviceable' : 'Serviceable'}
                          </span>
                        ) : (
                          pincode.length > 0 && (
                            <span className="text-[11px] font-medium shrink-0 ml-2" style={{ color: '#AAA' }}>
                              {6 - pincode.length} digits left
                            </span>
                          )
                        )}
                      </div>
                    </fieldset>

                    {/* BILL SELECTOR SECTION */}
                    <fieldset className="space-y-3">
                      <legend
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                      >
                        What's your average monthly electricity bill?
                      </legend>

                      {/* ── Desktop: Arc Slider ── */}
                      <div className="hidden sm:block">
                        <ArcSlider
                          value={monthlyBill}
                          min={SLIDER_MIN}
                          max={SLIDER_MAX}
                          step={SLIDER_STEP}
                          onChange={setMonthlyBill}
                          ticks={ARC_TICKS}
                        />
                      </div>

                      {/* ── Mobile: Horizontal Slider ── */}
                      <div className="block sm:hidden space-y-1 pt-1">
                        <input
                          type="range"
                          min={SLIDER_MIN}
                          max={SLIDER_MAX}
                          step={SLIDER_STEP}
                          value={monthlyBill}
                          onChange={(e) => setMonthlyBill(Number(e.target.value))}
                          className="w-full h-2.5 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, ${TOKENS.solarCoral} ${((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%, #E8E4DF ${((monthlyBill - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%)`,
                          }}
                          aria-label="Monthly electricity bill amount"
                        />
                        <div className="flex justify-between text-[10px] font-semibold px-0.5" style={{ color: TOKENS.mutedText, fontFamily: 'var(--font-heading)' }}>
                          {ARC_TICKS.map((t) => (
                            <span key={t.value}>{t.label}</span>
                          ))}
                        </div>
                      </div>

                      {/* Central amount display */}
                      <div className="text-center space-y-1 py-1">
                        <div className="flex items-baseline justify-center gap-1.5">
                          <span
                            className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight"
                            style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                          >
                            {formatINR(monthlyBill)}
                          </span>
                          <span className="text-sm font-medium" style={{ color: TOKENS.mutedText }}>
                            /month
                          </span>
                        </div>
                      </div>

                      {/* Decorative wave */}
                      <div className="hidden sm:block">
                        <DecorativeWave />
                      </div>

                      {/* Accessible hidden range for screen readers */}
                      <label htmlFor="bill-range-a11y" className="sr-only">
                        Monthly electricity bill slider
                      </label>
                      <input
                        id="bill-range-a11y"
                        type="range"
                        min={SLIDER_MIN}
                        max={SLIDER_MAX}
                        step={SLIDER_STEP}
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value))}
                        className="sr-only"
                        aria-label={`Monthly electricity bill: ${formatINR(monthlyBill)}`}
                        aria-valuemin={SLIDER_MIN}
                        aria-valuemax={SLIDER_MAX}
                        aria-valuenow={monthlyBill}
                        aria-valuetext={`${formatINR(monthlyBill)} per month`}
                      />
                    </fieldset>

                    {/* PRIMARY CTA */}
                    <div className="space-y-3 pt-1">
                      <button
                        type="submit"
                        disabled={!isFormValid || isCalculating}
                        className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full text-white text-sm sm:text-base font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group"
                        style={{
                          backgroundColor: isFormValid ? TOKENS.deepNavy : '#B0B5BC',
                          fontFamily: 'var(--font-heading)',
                        }}
                        aria-label="Calculate my solar savings"
                      >
                        {/* Left sun icon */}
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: TOKENS.coralGlow }}
                        >
                          <Sun className="w-5 h-5" style={{ color: TOKENS.solarCoral }} />
                        </span>

                        <span>
                          {isCalculating ? 'Calculating your savings…' : 'Calculate My Solar Savings'}
                        </span>

                        {/* Right arrow icon */}
                        {!isCalculating && (
                          <span
                            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform"
                            style={{ backgroundColor: TOKENS.solarCoral }}
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </span>
                        )}

                        {/* Loading spinner */}
                        {isCalculating && (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        )}
                      </button>

                      {/* Trust indicators */}
                      <div className="flex items-center justify-center gap-4 sm:gap-6 text-[11px] font-medium" style={{ color: TOKENS.mutedText }}>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          Takes less than 30 seconds
                        </span>
                        <span className="w-0.5 h-3 bg-stone-300 rounded-full" />
                        <span className="flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5" />
                          No obligation
                        </span>
                      </div>

                      {/* Handwritten-style note (desktop only) */}
                      <div className="hidden lg:flex items-center justify-end gap-2 pr-4 pt-1">
                        <span
                          className="text-[12px] font-medium italic"
                          style={{
                            color: TOKENS.mutedText,
                            fontFamily: 'Georgia, "Times New Roman", serif',
                          }}
                        >
                          Get your personalized savings estimate
                        </span>
                        {/* Curved arrow pointing left toward CTA */}
                        <svg width="28" height="20" viewBox="0 0 28 20" className="rotate-[200deg] opacity-40">
                          <path d="M2 18 C8 6, 18 2, 26 8" fill="none" stroke={TOKENS.mutedText} strokeWidth="1.5" strokeLinecap="round" />
                          <polygon points="24,4 26,8 22,8" fill={TOKENS.mutedText} />
                        </svg>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* ── STEP 2: RESULTS PANEL ── */}
              {currentStep === 2 && calculatedResults && (
                <div className={prefersReducedMotion ? '' : 'animate-in fade-in slide-in-from-bottom-4 duration-500'}>
                  <div className="space-y-6">
                    {/* Results header */}
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-lg sm:text-xl font-bold"
                        style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                      >
                        Your Solar Recommendation
                      </h3>
                      <button
                        type="button"
                        onClick={handleEditDetails}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors hover:bg-stone-50 cursor-pointer"
                        style={{ color: TOKENS.mutedText, borderColor: TOKENS.border }}
                      >
                        <Pencil className="w-3 h-3" />
                        Edit details
                      </button>
                    </div>

                    {/* Based on summary */}
                    <p className="text-xs font-medium" style={{ color: TOKENS.mutedText }}>
                      Based on {formatINR(monthlyBill)}/month electricity bill in pincode {pincode}
                    </p>

                    {/* Result cards grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {/* System Size */}
                      <div
                        className="p-4 sm:p-5 rounded-2xl border"
                        style={{ borderColor: TOKENS.border, backgroundColor: 'white' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4" style={{ color: TOKENS.solarCoral }} />
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: TOKENS.mutedText, fontFamily: 'var(--font-heading)' }}>
                            System Size
                          </span>
                        </div>
                        <span
                          className="text-2xl sm:text-3xl font-bold tabular-nums"
                          style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                        >
                          {calculatedResults.systemSizeKw} kW
                        </span>
                        <span className="text-xs block mt-0.5" style={{ color: TOKENS.mutedText }}>
                          Rooftop Solar Array
                        </span>
                      </div>

                      {/* Monthly Savings */}
                      <div
                        className="p-4 sm:p-5 rounded-2xl border"
                        style={{ borderColor: `${TOKENS.successGreen}30`, backgroundColor: `${TOKENS.successGreen}08` }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Sun className="w-4 h-4" style={{ color: TOKENS.successGreen }} />
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: TOKENS.successGreen, fontFamily: 'var(--font-heading)' }}>
                            Monthly Savings
                          </span>
                        </div>
                        <span
                          className="text-2xl sm:text-3xl font-bold tabular-nums"
                          style={{ color: TOKENS.successGreen, fontFamily: 'var(--font-heading)' }}
                        >
                          {formatINR(calculatedResults.monthlySavings)}
                        </span>
                        <span className="text-xs block mt-0.5" style={{ color: TOKENS.mutedText }}>
                          Estimated bill reduction
                        </span>
                      </div>

                      {/* Annual Savings */}
                      <div
                        className="p-4 sm:p-5 rounded-2xl border"
                        style={{ borderColor: TOKENS.border, backgroundColor: 'white' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4" style={{ color: TOKENS.solarCoral }} />
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: TOKENS.mutedText, fontFamily: 'var(--font-heading)' }}>
                            Annual Savings
                          </span>
                        </div>
                        <span
                          className="text-2xl sm:text-3xl font-bold tabular-nums"
                          style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                        >
                          {formatINR(calculatedResults.annualSavings)}
                        </span>
                        <span className="text-xs block mt-0.5" style={{ color: TOKENS.mutedText }}>
                          Per year estimated
                        </span>
                      </div>

                      {/* Payback Period */}
                      <div
                        className="p-4 sm:p-5 rounded-2xl border"
                        style={{ borderColor: TOKENS.border, backgroundColor: 'white' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4" style={{ color: TOKENS.solarCoral }} />
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: TOKENS.mutedText, fontFamily: 'var(--font-heading)' }}>
                            Payback Period
                          </span>
                        </div>
                        <span
                          className="text-2xl sm:text-3xl font-bold tabular-nums"
                          style={{ color: TOKENS.deepNavy, fontFamily: 'var(--font-heading)' }}
                        >
                          {calculatedResults.paybackYears.toFixed(1)} Yrs
                        </span>
                        <span className="text-xs block mt-0.5" style={{ color: TOKENS.mutedText }}>
                          After subsidy of {formatINR(calculatedResults.subsidyAmount)}
                        </span>
                      </div>
                    </div>

                    {/* Environmental impact strip */}
                    <div
                      className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-3 px-4 rounded-xl border"
                      style={{ borderColor: `${TOKENS.successGreen}20`, backgroundColor: `${TOKENS.successGreen}06` }}
                    >
                      <span className="flex items-center gap-2 text-xs font-semibold" style={{ color: TOKENS.successGreen }}>
                        <Leaf className="w-4 h-4" />
                        {calculatedResults.co2OffsetTonnes} tonnes CO₂/year avoided
                      </span>
                      <span className="hidden sm:block w-px h-4" style={{ backgroundColor: `${TOKENS.successGreen}30` }} />
                      <span className="text-xs font-semibold" style={{ color: TOKENS.successGreen }}>
                        ≈ {calculatedResults.treesEquivalent} trees planted equivalent
                      </span>
                    </div>

                    {/* Indicative disclaimer */}
                    <p className="text-[10px] text-center italic" style={{ color: '#AAA' }}>
                      * Estimates are indicative. Actual output varies by roof orientation, shading, tariff slab, and approvals.
                    </p>

                    {/* Secondary CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleGetQuote}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                        style={{ backgroundColor: TOKENS.solarCoral, fontFamily: 'var(--font-heading)' }}
                      >
                        <span>Talk to a Solar Expert</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleGetQuote}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold border transition-all duration-200 hover:bg-stone-50 cursor-pointer"
                        style={{
                          color: TOKENS.deepNavy,
                          borderColor: TOKENS.border,
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        Get Detailed Quote
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          C. BOTTOM DEEP NAVY TRUST STRIP
         ════════════════════════════════════════════════════════ */}
      <div
        className={`${transitionClass} delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ backgroundColor: TOKENS.deepNavy }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 lg:gap-16">
            {[
              { icon: Zap, title: 'Tier-1', subtitle: 'High Efficiency Cells' },
              { icon: Award, title: 'Expert', subtitle: 'In-House Installation' },
              { icon: ShieldCheck, title: '25-Year', subtitle: 'Performance Guarantee' },
            ].map((item, i) => (
              <React.Fragment key={item.title}>
                {i > 0 && (
                  <div className="hidden sm:block w-px h-8 bg-white/15 rounded-full" />
                )}
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-white/60 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </span>
                    <span className="text-xs text-white/50 font-medium">{item.subtitle}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
