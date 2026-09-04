/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQ_LIST } from '../data/solarData';
import { HelpCircle, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

export const FAQSection: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Product', 'Financial', 'Technical', 'Process'];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We Have Transparent Answers.</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about system sizing, government subsidy claims, roof safety, and warranty terms.
          </p>
        </div>

        {/* Search Bar & Category Pills */}
        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. subsidy, space, monsoon, EMI)..."
              className="w-full bg-white border border-slate-300 focus:border-[#8B1E1E] text-slate-900 text-sm font-medium pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/40 shadow-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenFaqId(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#8B1E1E] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Single-Open List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found. Ask our team directly via free survey.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E] rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-50 text-[#8B1E1E] border border-red-100 uppercase">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-slate-900 font-heading">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#8B1E1E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-semibold text-slate-900 font-heading">
              Have a specific question about your roof or DISCOM board?
            </div>
            <div className="text-xs text-slate-500">
              Our solar engineering experts provide zero-obligation advice.
            </div>
          </div>

          <PrimaryButton
            onClick={onCtaClick}
            size="sm"
            className="whitespace-nowrap shrink-0"
          >
            Ask an Expert
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
};
