/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SolarArkLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const SolarArkLogo: React.FC<SolarArkLogoProps> = ({
  variant = 'light',
  size = 'md',
  showText = true,
  className = '',
}) => {
  // Size mappings for standalone SVG icon
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl lg:text-2xl',
    lg: 'text-2xl lg:text-3xl',
  };

  const isDark = variant === 'dark';

  // Dynamic colors based on background variant
  const primaryStroke = isDark ? '#60A5FA' : '#1D5FE0';
  const secondaryStroke = isDark ? '#93C5FD' : '#3B82F6';
  const sunGold = '#FFB020';

  return (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Pure Adaptive SVG Mark — No box/background container */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        {/* Glowing Sun Core */}
        <circle cx="16" cy="10" r="3.5" fill={sunGold} />

        {/* Sun Rays */}
        <path
          d="M16 3.5V5M16 15V16.5M9.5 10H11M21 10H22.5M11.4 5.4L12.45 6.45M19.55 13.55L20.6 14.6M20.6 5.4L19.55 6.45M12.45 13.55L11.4 14.6"
          stroke={sunGold}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Sleek Rooftop Ark (Angled Roof Canopy) */}
        <path
          d="M4 22L16 13L28 22"
          stroke={primaryStroke}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Roof Baseline Base */}
        <path
          d="M7.5 25.5H24.5"
          stroke={secondaryStroke}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Solar Panel Grid Accents */}
        <path
          d="M11.5 18.5L9.5 25.5M16 15.5V25.5M20.5 18.5L22.5 25.5"
          stroke={primaryStroke}
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Brand Name Typography */}
      {showText && (
        <span
          className={`font-heading font-extrabold ${textSizes[size]} tracking-tight leading-none transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Solar<span className="text-[#1D5FE0]">ARK</span>
        </span>
      )}
    </div>
  );
};
