/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CalculatorInputs, CalculatorResults } from '../types';

/**
 * FORMULA ASSUMPTIONS & CALCULATION MODEL (SolarARK India Model)
 * -------------------------------------------------------------
 * 1. Average Tariff: ₹8.50 per kWh (unit) for Indian residential DISCOMs.
 * 2. Solar Generation Yield: 1 kW solar panel produces ~120 kWh (units) per month (4 units/day).
 * 3. System Cost Benchmark: ~₹62,000 per kW (includes Tier-1 N-Type TOPCon panels, inverter, high-wind mounting structure, net meter engineering, 5-yr AMC).
 * 4. PM Surya Ghar Muft Bijli Yojana Subsidy Matrix (Govt of India):
 *    - Up to 1 kW: ₹30,000
 *    - 2 kW: ₹60,000
 *    - 3 kW and above: ₹78,000 (Maximum capped central subsidy)
 * 5. Electricity Tariff Escalation: Assumed conservative 6.0% annual DISCOM rate increase over 25 years.
 * 6. Environmental equivalence: 1 kWh generated offsets ~0.82 kg CO2. 1 tree absorbs ~20 kg CO2/year.
 */

export function calculateSolarSavings(inputs: CalculatorInputs): CalculatorResults {
  const bill = Math.max(800, Math.min( inputs.monthlyBill, 50000));
  const avgTariffPerUnit = 8.5; // ₹ per unit
  
  // Units consumed per month
  const monthlyUnits = bill / avgTariffPerUnit;
  
  // Standard solar sizing: Offset ~90% of monthly bill
  // 1 kW yields 120 units/month. Size = monthlyUnits / 120
  let exactSizeKw = monthlyUnits / 120;
  
  // Round system size to nearest 0.5 kW (minimum 1.0 kW)
  let systemSizeKw = Math.max(1.0, Math.round(exactSizeKw * 2) / 2);
  if (systemSizeKw > 15) systemSizeKw = 15; // cap for standard residential

  // Monthly generation in kWh
  const monthlyGenerationUnits = systemSizeKw * 120;
  
  // Estimated monthly savings in INR (up to bill amount)
  const monthlySavings = Math.round(Math.min(bill * 0.92, monthlyGenerationUnits * avgTariffPerUnit));
  const annualSavings = monthlySavings * 12;

  // Compute 25-Year Cumulative Savings considering 6% annual tariff escalation
  let twentyFiveYearSavings = 0;
  let currentAnnualSavings = annualSavings;
  for (let year = 1; year <= 25; year++) {
    twentyFiveYearSavings += currentAnnualSavings;
    currentAnnualSavings *= 1.06; // 6% annual grid tariff increase
  }
  twentyFiveYearSavings = Math.round(twentyFiveYearSavings);

  // Estimated Cost before Subsidy (~62,000 per kW with volume discounts)
  let costPerKw = 62000;
  if (systemSizeKw >= 5) costPerKw = 57000;
  if (systemSizeKw >= 10) costPerKw = 52000;
  
  const estimatedCostBeforeSubsidy = Math.round(systemSizeKw * costPerKw);

  // PM Surya Ghar Subsidy Math
  let subsidyAmount = 0;
  if (systemSizeKw < 2) {
    subsidyAmount = 30000 * systemSizeKw; // ₹30k for 1kW
  } else if (systemSizeKw < 3) {
    subsidyAmount = 30000 + (systemSizeKw - 1) * 30000; // ₹60k for 2kW
  } else {
    subsidyAmount = 78000; // Capped at ₹78k for 3kW and above
  }
  subsidyAmount = Math.min(subsidyAmount, 78000);

  const effectiveNetCost = Math.max(0, estimatedCostBeforeSubsidy - subsidyAmount);

  // Payback period in years
  const paybackYears = Number((effectiveNetCost / annualSavings).toFixed(1));

  // Environmental Impact
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
