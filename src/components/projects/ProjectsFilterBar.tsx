/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 3: PROJECT GRID WITH FILTERS — Filter Bar
 * Pareto 80/20 Note: Focus on the vital 4 core categories (All, Residential, Commercial, Industrial)
 * with a refined underline tab pattern rather than distracting, bulky filled buttons.
 */

import React from 'react';
import { Search, X, MapPin } from 'lucide-react';

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
}) => {
  const tabs: ProjectCategoryTab[] = ['All', 'Residential', 'Commercial', 'Industrial'];

  return (
    <div className="w-full space-y-4 mb-8">
      
      {/* Upper Row: Clean Underline Tabs + Live Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-4 border-b border-stone-200/90 pb-1">
        
        {/* Underline Category Tabs (No heavy filled pills) */}
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none touch-pan-x" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(tab)}
                className={`relative pb-3 text-sm sm:text-base font-heading font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isActive ? 'text-[#8B1E1E]' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                <span>{tab === 'All' ? 'All Projects' : tab}</span>
                <span
                  className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-[#8B1E1E]/10 text-[#8B1E1E]'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {counts[tab] || 0}
                </span>

                {/* Subtle active underline indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#8B1E1E] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Minimalist Search Box */}
        <div className="relative min-w-[220px] sm:w-64 pb-2 md:pb-1">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search city, system kW..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-stone-100/80 hover:bg-stone-100 focus:bg-white border border-stone-200/80 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#8B1E1E] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

      </div>

      {/* Secondary District Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none touch-pan-x py-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 font-heading shrink-0 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-[#8B1E1E]" /> Hub:
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {cities.map((city) => {
            const isCityActive = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => onCityChange(city)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isCityActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>

        {(selectedCity !== 'All' || searchQuery !== '') && (
          <button
            onClick={() => {
              onCityChange('All');
              onSearchChange('');
            }}
            className="ml-auto text-xs font-semibold text-[#8B1E1E] hover:underline whitespace-nowrap cursor-pointer shrink-0"
          >
            Reset Filters
          </button>
        )}
      </div>

    </div>
  );
};
