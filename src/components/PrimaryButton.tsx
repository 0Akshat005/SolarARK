/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface PrimaryButtonProps {
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  title?: string;
  'aria-label'?: string;
  id?: string;
}

/**
 * PrimaryButton - Strict implementation of the executive reference design
 * Features:
 * - Deep, velvety oxblood / burgundy radial gradient
 * - Ultra-fine luminous crimson perimeter stroke
 * - Ambient warm-red halo & back-bloom
 * - Minimalist right arrow with smooth glide on hover
 * - Zero AI gloss, zero heavy badges, pure luxury feel
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  as = 'button',
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  onClick,
  size = 'md',
  showArrow = true,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  title,
  'aria-label': ariaLabel,
  id,
}) => {
  // Size-specific padding and typography
  const sizeClasses = {
    sm: 'text-[13px] px-5 py-2 sm:py-2.5 gap-2',
    md: 'text-xs sm:text-sm px-6 py-3 sm:py-3.5 gap-2.5',
    lg: 'text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 gap-3',
  }[size];

  const arrowSizeClass = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-4.5 h-4.5',
  }[size];

  const baseClasses = [
    'group relative inline-flex items-center justify-center font-heading font-semibold rounded-full',
    'text-[#F8F8F8] tracking-wide antialiased select-none',
    'transition-all duration-300 ease-out cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none disabled:shadow-none',
    'btn-primary-reference',
    sizeClasses,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-105">
          {icon}
        </span>
      )}
      <span className="truncate">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-105">
          {icon}
        </span>
      )}
      {!icon && showArrow && (
        <ArrowRight
          className={`${arrowSizeClass} shrink-0 stroke-[1.75] transition-transform duration-300 ease-out group-hover:translate-x-1.5`}
        />
      )}
    </>
  );

  if (as === 'a' || href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        onClick={onClick}
        className={baseClasses}
        title={title}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
      title={title}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
