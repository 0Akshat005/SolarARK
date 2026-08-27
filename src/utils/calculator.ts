/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CalculatorInputs, CalculatorResults } from '../types';

/**
 * LATEST 2026 SOLAR CALCULATION ENGINE & BENCHMARKS (SolarARK India Model)
 * -----------------------------------------------------------------------
 * 1. DISCOM Tariff Slab Model (Maharashtra MSEDCL LT-I Residential & National Standards):
 *    - ≤ ₹1,500/mo (0–100 units): Effective tariff ~₹8.20/unit (includes wheeling, FAC & electricity duty).
 *    - ₹1,501–₹3,500/mo (101–300 units): Effective tariff ~₹10.80/unit.
 *    - ₹3,501–₹7,000/mo (301–500 units): Effective tariff ~₹12.80/unit.
 *    - ₹7,001–₹12,000/mo (500+ units): Effective tariff ~₹14.50/unit.
 *    - > ₹12,000/mo: Highest marginal tariff ~₹15.80/unit.
 *
 * 2. Solar Generation Yield (Maharashtra / Central India Solar Insolation):
 *    - 1 kWp Tier-1 N-Type TOPCon / Mono PERC array yields ~4.2 kWh (units) per day.
 *    - ~125 kWh (units) per month (~1,500 kWh/year at 80% Performance Ratio).
 *
 * 3. Official PM Surya Ghar: Muft Bijli Yojana Central Subsidy Matrix (MNRE 2024–2026):
 *    - 1 kW System: ₹30,000
 *    - 2 kW System: ₹60,000
 *    - 3 kW System: ₹78,000 (₹30,000 + ₹30,000 + ₹18,000)
 *    - > 3 kW to 10 kW: ₹78,000 (Maximum capped central subsidy for individual residential rooftop)
 *    - Non-integer capacities prorated: 1–2 kW (+₹30k/kW), 2–3 kW (+₹18k/kW).
 *
 * 4. 2026 Turnkey EPC Pricing Benchmark (Tier-1 Modules, Inverter, Elevated Structure, Net-Metering, 5-Yr Warranty):
 *    - 1 kW: ₹68,000 (Higher per-kW balance-of-system & inverter base cost)
 *    - 2 kW to < 4 kW: ~₹62,000/kW
 *    - 4 kW to < 6 kW: ~₹56,000/kW
 *    - 6 kW to < 10 kW: ~₹52,000/kW
 *    - ≥ 10 kW: ~₹48,000/kW
 *
 * 5. Minimum DISCOM Grid Charge (Fixed meter charge + minimum duty post net-metering):
 *    - Single-phase residential minimum charge ~₹115 - ₹125/month.
 *
 * 6. Environmental Impact (Central Electricity Authority Baseline):
 *    - 0.82 kg CO2 avoided per kWh of solar generated.
 *    - 1 mature tree absorbs ~20 kg CO2 per year.
 */

function getEffectiveTariff(monthlyBill: number): number {
  if (monthlyBill <= 1500) return 8.20;
  if (monthlyBill <= 3500) return 10.80;
  if (monthlyBill <= 7000) return 12.80;
  if (monthlyBill <= 12000) return 14.50;
  return 15.80;
}

export function calculateSolarSavings(inputs: CalculatorInputs): CalculatorResults {
  // Clamp bill to realistic domestic range (₹800 to ₹50,000)
  const bill = Math.max(800, Math.min(inputs.monthlyBill, 50000));
  const effectiveTariff = getEffectiveTariff(bill);
  
  // Real monthly units consumed based on slab tariff
  const monthlyUnits = bill / effectiveTariff;
  
  // Sizing to offset ~90-95% of monthly consumption (1 kW yields ~125 units/month)
  const targetUnits = monthlyUnits * 0.95;
  const rawSizeKw = targetUnits / 125;
  
  // Round to standard 0.5 kW increments (min 1.0 kW, capped at 12 kW for residential)
  let systemSizeKw = Math.max(1.0, Math.round(rawSizeKw * 2) / 2);
  if (systemSizeKw > 12) systemSizeKw = 12;

  // Real monthly generation (1 kW = 125 units in Maharashtra)
  const monthlyGenerationUnits = Math.round(systemSizeKw * 125);
  
  // DISCOM Net Metering Math:
  // Solar offsets units at the effective marginal tariff.
  // Mandatory MSEDCL minimum fixed meter charge remains payable: ~₹120/mo
  const minFixedCharge = 120;
  const potentialSavings = Math.round(monthlyGenerationUnits * effectiveTariff);
  const maxPossibleSavings = Math.max(0, bill - minFixedCharge);
  
  // Monthly savings cannot exceed bill minus fixed meter charge
  const monthlySavings = Math.min(potentialSavings, maxPossibleSavings);
  const annualSavings = monthlySavings * 12;

  // 25-Year Cumulative Savings considering historical 6.0% annual DISCOM tariff escalation
  let twentyFiveYearSavings = 0;
  let runningAnnualSavings = annualSavings;
  for (let year = 1; year <= 25; year++) {
    twentyFiveYearSavings += runningAnnualSavings;
    runningAnnualSavings *= 1.06; // 6% compound annual grid price escalation
  }
  twentyFiveYearSavings = Math.round(twentyFiveYearSavings);

  // Turnkey EPC Cost before Subsidy (2026 Tier-1 N-Type TOPCon Benchmark)
  let costPerKw = 62000;
  if (systemSizeKw === 1.0) {
    costPerKw = 68000;
  } else if (systemSizeKw < 4) {
    costPerKw = 62000;
  } else if (systemSizeKw < 6) {
    costPerKw = 56000;
  } else if (systemSizeKw < 10) {
    costPerKw = 52000;
  } else {
    costPerKw = 48000;
  }
  
  const estimatedCostBeforeSubsidy = Math.round(systemSizeKw * costPerKw);

  // Official PM Surya Ghar Muft Bijli Yojana Central Subsidy Matrix (2024-2026)
  let subsidyAmount = 0;
  if (systemSizeKw <= 1.0) {
    subsidyAmount = 30000;
  } else if (systemSizeKw <= 2.0) {
    subsidyAmount = 30000 + (systemSizeKw - 1.0) * 30000; // e.g. 2kW = 60,000
  } else if (systemSizeKw < 3.0) {
    subsidyAmount = 60000 + (systemSizeKw - 2.0) * 18000; // e.g. 2.5kW = 69,000
  } else {
    subsidyAmount = 78000; // Capped at ₹78,000 for 3 kW and above
  }
  subsidyAmount = Math.round(Math.min(subsidyAmount, 78000));

  // Effective Net Investment after Central Subsidy credited to consumer bank account
  const effectiveNetCost = Math.max(0, estimatedCostBeforeSubsidy - subsidyAmount);

  // Payback period in years
  const paybackYears = annualSavings > 0 
    ? Number((effectiveNetCost / annualSavings).toFixed(1))
    : 3.5;

  // Environmental Impact (CEA Baseline: 0.82 kg CO2/kWh; 20 kg CO2/tree/year)
  const annualGenerationUnits = monthlyGenerationUnits * 12;
  const annualCo2OffsetKg = annualGenerationUnits * 0.82;
  const co2OffsetTonnes = Number((annualCo2OffsetKg / 1000).toFixed(1));
  const treesEquivalent = Math.round(annualCo2OffsetKg / 20);

  return {
    systemSizeKw,
    monthlySavings,
    annualSavings,
    twentyFiveYearSavings,
    subsidyAmount,
    estimatedCostBeforeSubsidy,
    effectiveNetCost,
    paybackYears,
    treesEquivalent,
    co2OffsetTonnes,
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
