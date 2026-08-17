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
  useImage?: boolean;
}

export const SolarArkLogo: React.FC<SolarArkLogoProps> = ({
  variant = 'light',
  size = 'md',
  showText = true,
  className = '',
  useImage = false,
}) => {
  // Size mappings
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

  // Official Brand Sun & Roof Colors
  const sunColor = '#FFA500'; // Official Warm Sun Gold / Amber
  const roofColor = isDark ? '#FFA500' : '#E27D16'; // Golden Amber Roof Structure

  return (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {useImage ? (
        <img
          src="/images/solarlogo.png"
          alt="SolarArk Logo"
          className={`${iconSizes[size]} object-contain shrink-0 transition-transform duration-300 group-hover:scale-105`}
        />
      ) : (
        /* Official SVG Brand Mark: Sun rising over rooftop truss structure */
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        >
          {/* Radiant Sun Core */}
          <circle cx="16" cy="9.5" r="3.2" fill={sunColor} />

          {/* Radiating Sun Rays */}
          <path
            d="M16 3.5V5M10 5.8L11.2 7M22 5.8L20.8 7M7.5 10H9M24.5 10H23"
            stroke={sunColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Official Triangular Rooftop Truss Structure */}
          <path
            d="M4.5 23L16 11.5L27.5 23"
            stroke={roofColor}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Roof Baseline / Foundation Beam */}
          <path
            d="M3 26H29"
            stroke={roofColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Internal Structural Struts */}
          <path
            d="M16 12V26M10.5 17.5L8 26M21.5 17.5L24 26"
            stroke={roofColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* Official Wordmark: "Solar" + "Ark" in Gold/Amber */}
      {showText && (
        <span
          className={`font-heading font-extrabold ${textSizes[size]} tracking-tight leading-none transition-colors ${
            isDark ? 'text-white' : 'text-[#0B1730]'
          }`}
        >
          Solar<span className="text-[#FFA500]">Ark</span>
        </span>
      )}
    </div>
  );
};
