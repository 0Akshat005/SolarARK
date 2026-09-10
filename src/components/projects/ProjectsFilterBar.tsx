/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 3: PROJECT ARCHIVE — Architectural Filter Bar
 * Direct reflection of inspiration layout:
 * Left: Underline category tabs (All, Residential, Commercial, Industrial)
 * Right: "View All Projects →" link
 */

import React from 'react';
import { ArrowRight, Search, X } from 'lucide-react';

export type ProjectCategoryTab = 'All' | 'Residential' | 'Commercial' | 'Industrial';

interface ProjectsFilterBarProps {
  activeTab: ProjectCategoryTab;
  onTabChange: (tab: ProjectCategoryTab) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cities: string[];
  counts: Record<ProjectCategoryTab, number>;
  onViewAllClick?: () => void;
}

export const ProjectsFilterBar: React.FC<ProjectsFilterBarProps> = ({
  activeTab,
  onTabChange,
  selectedCity,
  onCityChange,
  searchQuery,
  onSearchChange,
  cities,
  counts,
  onViewAllClick,
}) => {
  const tabs: ProjectCategoryTab[] = ['All', 'Residential', 'Commercial', 'Industrial'];

  return (
    <div className="w-full space-y-4 mb-8">
      {/* Upper Row: Clean Underline Tabs + "View All Projects →" */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E6E3DD] pb-0">
        
        {/* Category Tabs with Underline */}
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none touch-pan-x w-full sm:w-auto" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(tab)}
                className={`relative pb-3 text-sm sm:text-base font-body font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive ? 'text-[#151817] font-semibold' : 'text-[#6C6C68] hover:text-[#151817]'
                }`}
              >
                <span>{tab}</span>
                {counts[tab] !== undefined && (
                  <span className="text-[11px] text-[#6C6C68] font-normal">
                    ({counts[tab]})
                  </span>
                )}

                {/* Maroon active underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7A211D]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side: Search or "View All Projects →" */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end pb-3">
          {/* Compact Architectural Search */}
          <div className="relative w-44 sm:w-52">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search city or kW..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-7 py-1 rounded-none bg-stone-50 hover:bg-white focus:bg-white border border-[#E6E3DD] text-xs text-[#151817] placeholder:text-stone-400 focus:outline-none focus:border-[#7A211D] font-body transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <button
            onClick={() => {
              onTabChange('All');
              onCityChange('All');
              onSearchChange('');
              if (onViewAllClick) onViewAllClick();
            }}
            className="text-xs font-body font-medium text-[#7A211D] hover:text-[#962B26] flex items-center gap-1 whitespace-nowrap cursor-pointer transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* District quick filter bar */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none touch-pan-x py-0.5">
        <span className="text-[10px] uppercase font-medium tracking-wider text-[#6C6C68] font-body shrink-0">
          Location:
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {cities.map((city) => {
            const isCityActive = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => onCityChange(city)}
                className={`px-2.5 py-0.5 text-xs font-body font-medium rounded-none transition-colors cursor-pointer whitespace-nowrap border ${
                  isCityActive
                    ? 'bg-[#151817] text-white border-[#151817]'
                    : 'bg-white text-[#6C6C68] border-[#E6E3DD] hover:border-[#151817]'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>

        {(selectedCity !== 'All' || searchQuery !== '' || activeTab !== 'All') && (
          <button
            onClick={() => {
              onTabChange('All');
              onCityChange('All');
              onSearchChange('');
            }}
            className="ml-auto text-xs font-body font-normal text-[#6C6C68] hover:text-[#7A211D] underline cursor-pointer shrink-0"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
