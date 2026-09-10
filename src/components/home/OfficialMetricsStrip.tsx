/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * OfficialMetricsStrip — Sleek, High-Precision Architectural Counter Strip
 * Exactly matching the design reference screenshot:
 * - Proper compact sizing (text-xl sm:text-2xl lg:text-[26px] font-bold).
 * - Smooth viewport-triggered counting animation (preventing static appearance).
 * - Clean structured title-case labels:
 *   1. 100+ | Projects Completed
 *   2. 10+ MW | Clean Energy Installed
 *   3. 4 | Cities Across Maharashtra
 *   4. 100+ | Happy Customers
 * - Pure white background (#FFFFFF) with subtle hairline dividers and right accent mark.
 */

import React, { useRef, useState, useEffect } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  inView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 1600,
  inView,
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCurrentValue(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(easeOut * target);

      setCurrentValue(val);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      {currentValue.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

export const OfficialMetricsStrip: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="official-metrics"
      aria-label="SolarARK Official Verified Performance Metrics"
      className="w-full bg-white border-y border-stone-200/80 py-4 sm:py-5 lg:py-6 scroll-mt-20 relative z-10 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* ── DESKTOP & TABLET LAYOUT: 4 Clean Columns + Right Accent Divider ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-4 gap-x-0 items-center">
          
          {/* Col 1: 100+ Projects Completed */}
          <div className="col-span-1 lg:col-span-3 flex flex-col justify-center px-3 sm:px-5 lg:px-6 first:pl-0 sm:first:pl-2 border-r border-stone-200/80">
            <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-stone-900 tracking-tight leading-none">
              <AnimatedCounter target={100} suffix="+" inView={inView} duration={1600} />
            </div>
            <div className="font-sans text-[11.5px] sm:text-xs lg:text-[13px] text-stone-600 font-normal leading-tight mt-1.5">
              Projects Completed
            </div>
          </div>

          {/* Col 2: 10+ MW Clean Energy Installed */}
          <div className="col-span-1 lg:col-span-3 flex flex-col justify-center px-3 sm:px-5 lg:px-6 md:border-r md:border-stone-200/80">
            <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-stone-900 tracking-tight leading-none">
              <AnimatedCounter target={10} suffix="+ MW" inView={inView} duration={1400} />
            </div>
            <div className="font-sans text-[11.5px] sm:text-xs lg:text-[13px] text-stone-600 font-normal leading-tight mt-1.5">
              Clean Energy Installed
            </div>
          </div>

          {/* Col 3: 4 Cities Across Maharashtra */}
          <div className="col-span-1 lg:col-span-3 flex flex-col justify-center px-3 sm:px-5 lg:px-6 pt-3 md:pt-0 border-t md:border-t-0 border-stone-100 md:border-t-transparent border-r border-stone-200/80">
            <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-stone-900 tracking-tight leading-none">
              <AnimatedCounter target={4} suffix="" inView={inView} duration={1000} />
            </div>
            <div className="font-sans text-[11.5px] sm:text-xs lg:text-[13px] text-stone-600 font-normal leading-tight mt-1.5">
              Cities Across Maharashtra
            </div>
          </div>

          {/* Col 4: 100+ Happy Customers */}
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-center px-3 sm:px-5 lg:px-6 pt-3 md:pt-0 border-t md:border-t-0 border-stone-100 md:border-t-transparent lg:border-r lg:border-stone-200/80">
            <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-stone-900 tracking-tight leading-none">
              <AnimatedCounter target={100} suffix="+" inView={inView} duration={1600} />
            </div>
            <div className="font-sans text-[11.5px] sm:text-xs lg:text-[13px] text-stone-600 font-normal leading-tight mt-1.5">
              Happy Customers
            </div>
          </div>

          {/* Col 5: Right Subtle Accent Line Matching Reference Screenshot */}
          <div className="col-span-1 hidden lg:flex items-center justify-end pl-6 select-none">
            <span className="w-10 xl:w-14 h-[1.5px] bg-stone-300 rounded-full block" />
          </div>

        </div>

      </div>
    </section>
  );
};
