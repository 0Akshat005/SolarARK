/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const MetricsRibbon: React.FC = () => {
  const metrics = [
    {
      value: '500+',
      label: 'Projects Completed',
      sub: 'Homes, offices & industrial sites',
    },
    {
      value: '10+ MW',
      label: 'Clean Energy Installed',
      sub: 'Powering Maharashtra rooftops',
    },
    {
      value: '4 Hubs',
      label: 'Cities Across Maharashtra',
      sub: 'Amravati • Sambhajinagar • Wardha • Akola',
    },
    {
      value: '₹78,000',
      label: 'PM Surya Ghar Subsidy',
      sub: 'Direct DBT bank transfer authorized',
    },
  ];

  return (
    <section className="w-full bg-white border-b border-stone-200/80 py-6 sm:py-8 lg:py-9">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-0 items-center">
          
          {/* 4 Primary Key Performance Metrics */}
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center space-y-1 ${
                idx < 3 ? 'lg:pr-6 lg:border-r lg:border-stone-200' : 'lg:px-6'
              } ${idx > 0 && idx < 3 ? 'lg:pl-6' : ''}`}
            >
              <div className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight leading-none">
                {item.value}
              </div>
              <div className="font-heading text-xs sm:text-[13px] font-semibold text-stone-700 tracking-normal">
                {item.label}
              </div>
              <div className="text-[11px] text-stone-600 hidden sm:block font-normal">
                {item.sub}
              </div>
            </div>
          ))}

          {/* Right Editorial Motto */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex items-center justify-start lg:justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-100 lg:pl-6">
            <div className="text-left lg:text-right">
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600 leading-snug block">
                — Building a cleaner tomorrow
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
