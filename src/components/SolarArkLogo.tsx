/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SolarArkLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  useImage?: boolean;
}

export const SolarArkLogo: React.FC<SolarArkLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
  useImage = false,
}) => {
  const isDark = variant === 'dark';

  // Typography scale configurations
  const sizeStyles = {
    sm: {
      brand: 'text-xl sm:text-2xl tracking-tight',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.06em] mt-0.5',
      imgHeight: 'h-7',
    },
    md: {
      brand: 'text-[26px] sm:text-[30px] lg:text-[34px] tracking-tight',
      tagline: 'text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.07em] mt-0.5 sm:mt-1',
      imgHeight: 'h-9 sm:h-10 lg:h-11',
    },
    lg: {
      brand: 'text-3xl sm:text-4xl lg:text-[42px] tracking-tight',
      tagline: 'text-xs sm:text-sm tracking-[0.08em] mt-1',
      imgHeight: 'h-12 sm:h-14',
    },
    xl: {
      brand: 'text-4xl sm:text-5xl lg:text-[54px] tracking-tight',
      tagline: 'text-sm sm:text-base tracking-[0.08em] mt-1.5',
      imgHeight: 'h-16 sm:h-20',
    },
  };

  const currentSize = sizeStyles[size];

  if (useImage) {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <img
          src="/images/solarark-brand-logo.png"
          alt="SolarARK - assured renewable komfort"
          className={`${currentSize.imgHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col select-none leading-none group ${className}`}>
      {/* ── Exact Official Brand Typography: Solar + ARK in Pure Brand Maroon ── */}
      <div className={`font-heading font-medium ${currentSize.brand} leading-none flex items-baseline`}>
        <span
          className={`transition-colors duration-200 ${
            isDark ? 'text-white' : 'text-[#741616]'
          }`}
          style={{ fontWeight: 450 }}
        >
          Solar
        </span>
        <span
          className={`font-bold uppercase tracking-tight transition-colors duration-200 ${
            isDark ? 'text-[#C53030]' : 'text-[#8B1E1E]'
          }`}
          style={{ fontWeight: 800 }}
        >
          ARK
        </span>
      </div>

      {/* ── Official Brand Tagline: assured renewable komfort ── */}
      {showTagline && (
        <span
          className={`font-sans font-normal ${currentSize.tagline} leading-none transition-colors duration-200 ${
            isDark ? 'text-stone-300' : 'text-[#8B1E1E]/90'
          }`}
          style={{ letterSpacing: '0.06em' }}
        >
          assured renewable komfort
        </span>
      )}
    </div>
  );
};
