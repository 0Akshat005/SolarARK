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
      brand: 'text-xl tracking-tight',
      tagline: 'text-[9px] tracking-[0.06em] mt-0.5',
      imgHeight: 'h-6',
    },
    md: {
      brand: 'text-2xl sm:text-[26px] tracking-tight',
      tagline: 'text-[10px] sm:text-[11px] tracking-[0.07em] mt-0.5',
      imgHeight: 'h-8 sm:h-9',
    },
    lg: {
      brand: 'text-3xl sm:text-4xl tracking-tight',
      tagline: 'text-xs sm:text-sm tracking-[0.08em] mt-1',
      imgHeight: 'h-11 sm:h-12',
    },
    xl: {
      brand: 'text-4xl sm:text-5xl tracking-tight',
      tagline: 'text-sm sm:text-base tracking-[0.08em] mt-1.5',
      imgHeight: 'h-14 sm:h-16',
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
          className={`font-black uppercase tracking-tight transition-colors duration-200 ${
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
