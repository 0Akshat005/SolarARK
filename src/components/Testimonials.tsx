/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/solarData';
import { Star, Play, Quote, CheckCircle2, X } from 'lucide-react';
import { formatINR } from '../utils/calculator';

export const Testimonials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>4.8★ Google Verified Customer Reviews</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Real Indian Homeowners. Real Monthly Power Savings.
          </h2>

          <p className="text-base text-slate-600">
            Hear directly from families who switched to SolarARK and cut their grid electricity expenses.
          </p>
        </div>

        {/* Carousel / Cards Grid (with mobile horizontal scroll peek) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="min-w-[85%] sm:min-w-0 snap-center bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 hover:border-[#8B1E1E]/40 shadow-sm hover:shadow-elevation-2 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Quantified Outcome Highlight Banner */}
                <div className="bg-emerald-950/90 text-white p-3.5 rounded-2xl border border-emerald-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-emerald-400 uppercase font-semibold">Bill Impact</div>
                    <div className="text-sm font-bold text-emerald-300 font-heading">
                      {formatINR(t.beforeBill)} → {formatINR(t.afterBill)} / mo
                    </div>
                  </div>

                  <span className="text-[10px] font-bold bg-[#10B981] text-slate-950 px-2 py-1 rounded-md">
                    -{Math.round(((t.beforeBill - t.afterBill) / t.beforeBill) * 100)}%
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 font-heading">{t.author}</div>
                  <div className="text-[11px] text-slate-500">{t.role} · {t.city}</div>
                </div>

                {t.verifiedBadge && (
                  <span className="w-7 h-7 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center" title="Verified SolarARK Customer">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
