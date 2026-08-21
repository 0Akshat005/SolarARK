/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, Zap, TrendingUp, Bell, ShieldCheck, ArrowRight } from 'lucide-react';

export const AppExperience: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState<'generation' | 'savings' | 'maintenance'>('generation');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-semibold">
            <Smartphone className="w-4 h-4" />
            <span>24/7 Mobile Companion App</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Track Every Watt & Rupee Saved in Real Time
          </h2>

          <p className="text-base text-slate-600">
            The SolarARK Mobile App connects directly to your rooftop inverter. Monitor daily generation curves, 
            track net-meter grid export units, and request zero-cost panel cleaning.
          </p>
        </div>

        {/* App Showcase Layout */}
        <div className="bg-slate-900 p-8 sm:p-12 rounded-3xl text-white shadow-elevation-3 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FFB020] uppercase tracking-wider font-heading">
                Smart Solar Telemetry
              </span>
              <h3 className="text-2xl font-bold font-heading text-white">
                Total Control from Your Pocket
              </h3>
            </div>

            {/* Tab Controls */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setActiveTab('generation')}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  activeTab === 'generation'
                    ? 'bg-[#8B1E1E] border-[#8B1E1E] text-white shadow-lg'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#FFB020]" />
                  <div>
                    <div className="text-sm font-bold font-heading">Live Solar Generation Graphs</div>
                    <div className="text-xs text-slate-200">Hour-by-hour power output curves</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('savings')}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  activeTab === 'savings'
                    ? 'bg-[#8B1E1E] border-[#8B1E1E] text-white shadow-lg'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#10B981]" />
                  <div>
                    <div className="text-sm font-bold font-heading">DISCOM Net-Meter Credit Audit</div>
                    <div className="text-xs text-slate-200">Exported grid units vs bill deductions</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('maintenance')}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  activeTab === 'maintenance'
                    ? 'bg-[#8B1E1E] border-[#8B1E1E] text-white shadow-lg'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-bold font-heading">Proactive Maintenance Alerts</div>
                    <div className="text-xs text-slate-200">Automatic dust alerts & technician booking</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-6 py-3 rounded-xl transition-all"
              >
                Get App Access with Free Survey
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Smartphone UI Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px] bg-slate-950 p-4 rounded-[40px] border-4 border-slate-700 shadow-2xl space-y-4">
              
              {/* Phone Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto" />

              {/* App Display Screen Content */}
              <div className="bg-slate-900 rounded-[28px] p-5 space-y-5 border border-slate-800 text-white min-h-[380px]">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-400">SolarARK Home</span>
                    <div className="text-xs font-bold text-white">Baner Villa System (5.0 kW)</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                </div>

                {activeTab === 'generation' && (
                  <div className="space-y-4">
                    <div className="bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 text-center">
                      <span className="text-[10px] text-slate-400">Current Power Yield</span>
                      <div className="text-3xl font-bold text-[#FFB020] font-heading mt-0.5">4.85 kW</div>
                      <span className="text-[10px] text-emerald-400 font-medium">Peak Solar Sun Hours</span>
                    </div>

                    <div className="bg-slate-800/50 p-3 rounded-xl text-xs space-y-2">
                      <div className="flex justify-between text-slate-300">
                        <span>Today Total:</span>
                        <strong className="text-white">22.4 kWh</strong>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Month to Date:</span>
                        <strong className="text-emerald-400">620 kWh</strong>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'savings' && (
                  <div className="space-y-4">
                    <div className="bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 text-center">
                      <span className="text-[10px] text-slate-400">Est. Bill Deduction</span>
                      <div className="text-3xl font-bold text-[#10B981] font-heading mt-0.5">₹5,270</div>
                      <span className="text-[10px] text-slate-300 font-medium">Net Meter Credits Active</span>
                    </div>

                    <div className="bg-slate-800/50 p-3 rounded-xl text-xs space-y-2">
                      <div className="flex justify-between text-slate-300">
                        <span>Exported to Grid:</span>
                        <strong className="text-white">180 Units</strong>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Imported from Grid:</span>
                        <strong className="text-white">12 Units</strong>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'maintenance' && (
                  <div className="space-y-4">
                    <div className="bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 text-center">
                      <span className="text-[10px] text-slate-400">Panel Cleaning Status</span>
                      <div className="text-xl font-bold text-white font-heading mt-0.5">98% Cleanliness</div>
                      <span className="text-[10px] text-amber-400 font-medium">Next Wash: In 8 Days</span>
                    </div>

                    <button className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] text-white text-xs font-bold py-2.5 rounded-xl">
                      Book Free AMC Wash
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
