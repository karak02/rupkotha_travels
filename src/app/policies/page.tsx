"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CANCELLATION_POLICY } from "@/data/rupkothaData";
import { Check, X, Train, ShieldAlert, Sparkles, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PoliciesPage() {
  const [calcAmount, setCalcAmount] = useState<number>(30000);
  const [calcDays, setCalcDays] = useState<number>(50);

  const getDeduction = (days: number) => {
    if (days >= 60) return { pct: 0.1, label: "10% of total package price" };
    if (days >= 45) return { pct: 0.3, label: "30% of total package price" };
    if (days >= 30) return { pct: 0.4, label: "40% of total package price" };
    if (days >= 15) return { pct: 0.6, label: "60% of total package price" };
    return { pct: 1.0, label: "100% (No refund made)" };
  };

  const deductionInfo = getDeduction(calcDays);
  const deductionAmount = Math.round(calcAmount * deductionInfo.pct);
  const refundAmount = Math.max(0, calcAmount - deductionAmount);

  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] selection:bg-[#92FF5F] selection:text-[#0F3B27]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Travel Terms</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0F3B27] tracking-tight">
          Package Policies & <span className="text-[#0F3B27] underline decoration-[#92FF5F] decoration-4">Inclusions</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#52796F] max-w-3xl mx-auto font-normal leading-relaxed">
          Clear, upfront clarity on what is covered, optional upgrades available, and transparent tiered cancellation charges.
        </p>
      </section>

      {/* Inclusions vs Exclusions Bento Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* What Is Included in Soft White */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border border-[#0F3B27]/15 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0F3B27] text-[#92FF5F] flex items-center justify-center font-bold">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#0F3B27]">
                    What Is Included In Fixed Packages
                  </h2>
                  <span className="text-xs text-[#0F3B27] font-bold">
                    Standard in all Howrah / Sealdah group tours
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10">
                  <div className="font-bold text-[#0F3B27] mb-1 flex items-center gap-2">
                    <Train className="w-4 h-4 text-[#0F3B27]" />
                    <span>Train Tickets</span>
                  </div>
                  <p className="text-[#52796F] leading-relaxed">
                    Non-AC 3-Tier Sleeper or Non-AC Chair Car train journey from and back to Sealdah / Howrah / Kolkata stations (except Ladakh, Zanskar, and Hornbill tours).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10">
                  <div className="font-bold text-[#0F3B27] mb-1">
                    🚙 Dedicated Ground Fleet
                  </div>
                  <p className="text-[#52796F] leading-relaxed">
                    MUV (Scorpio / Innova / Sumo / Bolero: 6-7 guests) or Tempo Traveller (13s: 9-10 guests, 17s: 12-14 guests) with verified mountain/forest drivers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10">
                  <div className="font-bold text-[#0F3B27] mb-1">
                    🏨 Accommodation
                  </div>
                  <p className="text-[#52796F] leading-relaxed">
                    Double-bedded or Triple-bedded (subject to availability) Non-AC rooms or safari tents with attached modern washrooms.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10">
                  <div className="font-bold text-[#0F3B27] mb-1">
                    🍲 Wholesome 4-Meal Plan
                  </div>
                  <p className="text-[#52796F] leading-relaxed">
                    Daily bed tea, breakfast, two full major meals (lunch & dinner with veg & non-veg options), and evening high tea (excluding train transit hours). Pure veg available on advance notice.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10">
                  <div className="font-bold text-[#0F3B27] mb-1">
                    🧳 Station-to-Station Porters & Escorts
                  </div>
                  <p className="text-[#52796F] leading-relaxed">
                    Dedicated luggage porter service from start station to end station + experienced Bengali Tour Manager accompanying the group.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Is Excluded in Move Green */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0F3B27] text-white border border-[#FF7036]/30 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7036] text-white flex items-center justify-center font-bold">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    What Is Excluded
                  </h2>
                  <span className="text-xs text-[#FF7036] font-bold">
                    Direct personal expenses & special permits
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-white mb-1">
                    ✈️ Non-Train Flights / Remote Rail
                  </div>
                  <p className="text-[#8BA89A] leading-relaxed">
                    Train / flight tickets for Ladakh, Hornbill Festival, and Zanskar expeditions (guests arrive directly at Srinagar/Dimapur).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-white mb-1">
                    🥤 Additional Food & Beverages
                  </div>
                  <p className="text-[#8BA89A] leading-relaxed">
                    Packaged mineral drinking water, cold drinks, alcoholic beverages, extra snacks, and tea/coffee outside scheduled meal timings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-white mb-1">
                    🎟️ Monument & Activity Tickets
                  </div>
                  <p className="text-[#8BA89A] leading-relaxed">
                    Monument entry fees, camera/video permits, local guide charges, pony rides, ropeway tickets, boat charges, and adventure sports.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-white mb-1">
                    💊 Medical & Personal Laundry
                  </div>
                  <p className="text-[#8BA89A] leading-relaxed">
                    Personal telephone bills, laundry services, doctor consultation fees, and individual medical emergency requirements.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-white mb-1">
                    🚕 Optional Excursions & 5% GST
                  </div>
                  <p className="text-[#8BA89A] leading-relaxed">
                    Vehicle hire for personal sightseeing outside the fixed schedule, and applicable 5% Goods and Services Tax (GST).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Upgrades & Add-ons Bento */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-[#0F3B27]/15 p-8 sm:p-10 mb-16 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0F3B27] text-[#92FF5F] uppercase tracking-wider mb-3 inline-block">
              Tailored Comfort
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F3B27] mb-2">
              Custom Upgrades & Add-ons
            </h2>
            <p className="text-xs sm:text-sm text-[#52796F] font-normal">
              Enhance any fixed departure package with flexible custom upgrades arranged seamlessly by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-bold text-[#0F3B27] text-sm mb-2">
                  🚆 Train & Flight Upgrades
                </div>
                <p className="text-[#52796F] leading-relaxed">
                  Upgrade to 3-Tier AC or 2-Tier AC sleeper train berths or direct flights by paying only the actual difference amount.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-bold text-[#0F3B27] text-sm mb-2">
                  🚗 Exclusive Vehicle
                </div>
                <p className="text-[#52796F] leading-relaxed">
                  Private family vehicle (Innova / Scorpio) arranged exclusively for your party throughout the tour on request.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-bold text-[#0F3B27] text-sm mb-2">
                  ❄️ AC Room Upgrades
                </div>
                <p className="text-[#52796F] leading-relaxed">
                  AC hotel rooms arranged in plains and coastal circuits wherever available at reasonable supplemental charges.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-bold text-[#0F3B27] text-sm mb-2">
                  🛏️ Single Occupancy
                </div>
                <p className="text-[#52796F] leading-relaxed">
                  Single person occupying a dedicated double-bedded room arranged at supplemental single room tariff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Charges Table & Interactive Estimator */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table in Soft White */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#0F3B27]/15 p-8 shadow-xl">
            <h2 className="font-serif text-2xl font-bold text-[#0F3B27] mb-2 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-[#FF7036]" />
              <span>Cancellation Charges Matrix</span>
            </h2>
            <p className="text-xs text-[#52796F] mb-6">
              Standard deduction fees applicable based on the date written cancellation notice is received.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#0F3B27]/15 text-[#0F3B27]">
                    <th className="py-3 px-4 font-black">Cancellation Notice Received</th>
                    <th className="py-3 px-4 font-black">Applicable Deduction Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0F3B27]/10">
                  {CANCELLATION_POLICY.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F9F7]">
                      <td className="py-3 px-4 text-[#0F3B27] font-semibold">{row.timeframe}</td>
                      <td className="py-3 px-4 text-[#FF7036] font-black">{row.deduction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Calculator Bento in Move Green */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/30 p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black text-[#92FF5F] uppercase tracking-wider mb-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Interactive Policy Calculator</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                Estimate Refund & Deduction
              </h3>

              {/* Package Price Slider */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-white mb-1.5 font-medium">
                  <span>Package Tariff:</span>
                  <span className="font-black text-[#92FF5F]">₹{calcAmount.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={60000}
                  step={1000}
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full accent-[#92FF5F]"
                />
              </div>

              {/* Days Notice Slider */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white mb-1.5 font-medium">
                  <span>Days Before Departure:</span>
                  <span className="font-black text-[#FF7036]">{calcDays} Days</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={75}
                  value={calcDays}
                  onChange={(e) => setCalcDays(Number(e.target.value))}
                  className="w-full accent-[#FF7036]"
                />
              </div>

              {/* Output Display */}
              <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/10 space-y-3 text-xs">
                <div className="flex justify-between items-center text-[#8BA89A]">
                  <span>Policy Slab:</span>
                  <span className="text-white font-semibold">{deductionInfo.label}</span>
                </div>
                <div className="flex justify-between items-center text-[#FF7036] font-bold">
                  <span>Deduction Amount:</span>
                  <span>₹{deductionAmount.toLocaleString("en-IN")}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm font-black text-[#92FF5F]">
                  <span>Estimated Refund:</span>
                  <span>₹{refundAmount.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/booking"
                className="w-full py-3.5 rounded-2xl bg-[#92FF5F] text-[#0F3B27] font-black text-xs uppercase tracking-wider text-center block hover:bg-[#7ce648] transition-colors shadow-md"
              >
                Proceed to Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
