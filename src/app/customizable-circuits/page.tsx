"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CUSTOM_CIRCUITS_LADAKH, CUSTOM_CIRCUITS_ANDAMAN } from "@/data/rupkothaData";
import { Mountain, Palmtree, ArrowRight, ShieldCheck, Car, Utensils, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomizableCircuitsPage() {
  const [activeTab, setActiveTab] = useState<"ladakh" | "andaman">("ladakh");

  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] selection:bg-[#92FF5F] selection:text-[#0F3B27]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Individual & Private Family Circuits</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0F3B27] tracking-tight">
          Customizable <span className="text-[#0F3B27] underline decoration-[#92FF5F] decoration-4">Circuits</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#52796F] max-w-3xl mx-auto font-normal leading-relaxed">
          Flexible itineraries crafted for couples, private families, and bespoke adventure groups with dedicated private vehicles, luxury camp stays, and curated meal plans.
        </p>
      </section>

      {/* Region Switcher Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab("ladakh")}
            className={`p-5 rounded-3xl border flex items-center justify-center gap-3 transition-all duration-300 font-extrabold text-sm sm:text-base ${
              activeTab === "ladakh"
                ? "bg-[#0F3B27] text-[#92FF5F] border-[#92FF5F] shadow-2xl scale-102"
                : "bg-white text-[#0F3B27] border-[#0F3B27]/15 hover:border-[#0F3B27]/30"
            }`}
          >
            <Mountain className="w-5 h-5 text-[#92FF5F]" />
            <span>Ladakh Tailored Programs (LAD 01–08)</span>
          </button>

          <button
            onClick={() => setActiveTab("andaman")}
            className={`p-5 rounded-3xl border flex items-center justify-center gap-3 transition-all duration-300 font-extrabold text-sm sm:text-base ${
              activeTab === "andaman"
                ? "bg-[#0F3B27] text-[#92FF5F] border-[#92FF5F] shadow-2xl scale-102"
                : "bg-white text-[#0F3B27] border-[#0F3B27]/15 hover:border-[#0F3B27]/30"
            }`}
          >
            <Palmtree className="w-5 h-5 text-[#FF7036]" />
            <span>Andaman Aqua Paradise (AND 01–05)</span>
          </button>
        </div>
      </section>

      {/* Main Content Explorer */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        {activeTab === "ladakh" ? (
          <div className="space-y-10">
            {/* Ladakh Specs Bento Banner in Move Green */}
            <div className="rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 p-8 sm:p-10 shadow-2xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] uppercase tracking-wider mb-3 inline-block">
                  Ladakh Private Circuit Standards
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Trans-Himalayan Tailored Expeditions
                </h2>
                <p className="text-xs sm:text-sm text-[#F7F9F7] leading-relaxed font-normal">
                  All Ladakh tailored programs include double-bedded non-AC rooms / luxury Swiss camps on MAP plan (Daily Breakfast & Dinner), private SUV/Tempo fleet, inner-line permits, and Leh on-ground coordination.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-[#92FF5F] mb-1 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4" />
                    <span>Food & Stay Plan</span>
                  </div>
                  <p className="text-[#8BA89A]">
                    MAP Plan (Daily Breakfast & Dinner included). Premium stays in Leh, Pangong & Nubra.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-[#92FF5F] mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4" />
                    <span>Vehicles Provided</span>
                  </div>
                  <p className="text-[#8BA89A]">
                    Private Innova / Crysta / Xylo / Bolero or dedicated Tempo Traveller for private groups.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-[#92FF5F] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Permits & Coordination</span>
                  </div>
                  <p className="text-[#8BA89A]">
                    Inner Line Permits (Pangong, Nubra, Hanle, Tsomoriri, Siachen Base) & airport transfers.
                  </p>
                </div>
              </div>
            </div>

            {/* Ladakh Itineraries List in Soft White */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CUSTOM_CIRCUITS_LADAKH.map((circuit, idx) => (
                <motion.div
                  key={circuit.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-7 rounded-3xl bg-white border border-[#0F3B27]/15 flex flex-col justify-between hover:border-[#0F3B27]/40 transition-all shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0F3B27] text-[#92FF5F]">
                        Code: {circuit.code}
                      </span>
                      <span className="text-xs font-bold text-[#0F3B27]">
                        {circuit.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0F3B27] mb-3">
                      {circuit.duration} Circuit
                    </h3>

                    <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 mb-4">
                      <div className="text-[11px] font-black text-[#0F3B27] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF7036]" />
                        <span>Night-Stay Routing:</span>
                      </div>
                      <p className="text-xs text-[#0F3B27] leading-relaxed font-semibold">
                        {circuit.route}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0F3B27]/10 flex items-center justify-between">
                    <span className="text-xs text-[#52796F] font-medium">
                      MAP Food Plan Included
                    </span>
                    <Link
                      href={`/booking?package=${encodeURIComponent("Custom Ladakh Circuit " + circuit.code)}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0F3B27] hover:text-[#195237]"
                    >
                      <span>Request Custom Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF7036]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Andaman Specs Bento Banner in Move Green */}
            <div className="rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 p-8 sm:p-10 shadow-2xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] uppercase tracking-wider mb-3 inline-block">
                  Andaman Islands Private Holidays
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Aqua Paradise Coral Expeditions
                </h2>
                <p className="text-xs sm:text-sm text-[#F7F9F7] leading-relaxed font-normal">
                  Curated tropical getaways with double-bedded AC rooms on CP (Breakfast) or MAP (Breakfast & Dinner) plans, AC private ferry tickets (Makruzz / Nautika), water sports assistance, and all monument entry fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-[#92FF5F] mb-1 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4" />
                    <span>CP / MAP Meal Options</span>
                  </div>
                  <p className="text-[#8BA89A]">
                    Deluxe AC beach resort stays in Port Blair, Havelock & Neil Island with daily breakfast.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-[#92FF5F] mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4" />
                    <span>AC Road & Ferry Fleet</span>
                  </div>
                  <p className="text-[#8BA89A]">
                    AC Innova / Scorpio on islands + Premium AC high-speed catamaran ferry tickets included.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F3B27] border border-white/5">
                  <div className="font-bold text-[#92FF5F] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Activities & Entry</span>
                  </div>
                  <p className="text-[#8BA89A]">
                    Cellular Jail Light & Sound, Radhanagar Beach, Elephant Beach boat, Scuba & Snorkel coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Andaman Itineraries List in Soft White */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CUSTOM_CIRCUITS_ANDAMAN.map((circuit, idx) => (
                <motion.div
                  key={circuit.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-7 rounded-3xl bg-white border border-[#0F3B27]/15 flex flex-col justify-between hover:border-[#0F3B27]/40 transition-all shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0F3B27] text-[#92FF5F]">
                        Code: {circuit.code}
                      </span>
                      <span className="text-xs font-bold text-[#0F3B27]">
                        {circuit.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0F3B27] mb-3">
                      {circuit.duration} Island Circuit
                    </h3>

                    <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 mb-4">
                      <div className="text-[11px] font-black text-[#0F3B27] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF7036]" />
                        <span>Night-Stay Routing:</span>
                      </div>
                      <p className="text-xs text-[#0F3B27] leading-relaxed font-semibold">
                        {circuit.route}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0F3B27]/10 flex items-center justify-between">
                    <span className="text-xs text-[#52796F] font-medium">
                      AC Ferry & Resorts Included
                    </span>
                    <Link
                      href={`/booking?package=${encodeURIComponent("Custom Andaman Circuit " + circuit.code)}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0F3B27] hover:text-[#195237]"
                    >
                      <span>Get Custom Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF7036]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
