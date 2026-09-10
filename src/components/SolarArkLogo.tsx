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
  priority?: boolean;
}

export const SolarArkLogo: React.FC<SolarArkLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
  useImage = true,
  priority = false,
}) => {
  const isDark = variant === 'dark';

  // Typography scale configurations
  const sizeStyles = {
    sm: {
      brand: 'text-xl sm:text-2xl tracking-tight',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.06em] mt-0.5',
      imgHeight: 'h-7 sm:h-8',
    },
    md: {
      brand: 'text-[26px] sm:text-[30px] lg:text-[34px] tracking-tight',
      tagline: 'text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.07em] mt-0.5 sm:mt-1',
      imgHeight: 'h-8 sm:h-9 lg:h-10 xl:h-[42px]',
    },
    lg: {
      brand: 'text-3xl sm:text-4xl lg:text-[42px] tracking-tight',
      tagline: 'text-xs sm:text-sm tracking-[0.08em] mt-1',
      imgHeight: 'h-11 sm:h-12 lg:h-14',
    },
    xl: {
      brand: 'text-4xl sm:text-5xl lg:text-[54px] tracking-tight',
      tagline: 'text-sm sm:text-base tracking-[0.08em] mt-1.5',
      imgHeight: 'h-14 sm:h-16 lg:h-20',
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;
  const webpSrc = isDark
    ? '/images/solarark-brand-logo-dark.webp'
    : '/images/solarark-brand-logo.webp';
  const pngSrc = isDark
    ? '/images/solarark-brand-logo-dark.png'
    : '/images/solarark-brand-logo.png';

  if (useImage) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={pngSrc}
            alt="SolarARK - assured renewable komfort"
            width={400}
            height={126}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className={`${currentSize.imgHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]`}
          />
        </picture>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col select-none leading-none group ${className}`}>
      {/* ── Exact Official Brand Typography: Solar + ARK in Pure Brand Maroon ── */}
      <div className={`font-heading font-medium ${currentSize.brand} leading-none flex items-baseline`}>
        <span
          className={`transition-colors duration-200 ${
            isDark ? 'text-white' : 'text-[#7A211D]'
          }`}
          style={{ fontWeight: 450 }}
        >
          Solar
        </span>
        <span
          className={`font-bold uppercase tracking-tight transition-colors duration-200 ${
            isDark ? 'text-[#C53030]' : 'text-[#7A211D]'
          }`}
          style={{ fontWeight: 800 }}
        >
          ARK
        </span>
      </div>

      {/* ── Official Brand Tagline: assured renewable komfort ── */}
      {showTagline && (
        <span
          className={`font-sans ${currentSize.tagline} leading-none transition-colors duration-200 ${
            isDark ? 'text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]' : 'text-[#7A211D]/90 font-normal'
          }`}
          style={{ letterSpacing: '0.07em' }}
        >
          assured renewable komfort
        </span>
      )}
    </div>
  );
};
