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
    <main className="min-h-screen bg-[#F8F9FA] text-[#0B192C] selection:bg-[#F59E0B] selection:text-[#0B192C]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B192C] text-[#F59E0B] text-xs font-black uppercase tracking-wider mb-6 shadow-md border border-[#F59E0B]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Tailored Individual & Private Family Circuits</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight">
          Customizable <span className="text-[#0B192C] underline decoration-[#F59E0B] decoration-4">Circuits</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-3xl mx-auto font-normal leading-relaxed">
          Flexible itineraries crafted for couples, private families, and bespoke adventure groups with dedicated private vehicles, luxury camp stays, and curated meal plans.
        </p>
      </section>

      {/* Region Switcher Tabs */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab("ladakh")}
            className={`p-5 rounded-3xl border flex items-center justify-center gap-3 transition-all duration-300 font-extrabold text-sm sm:text-base ${
              activeTab === "ladakh"
                ? "bg-[#0B192C] text-[#F59E0B] border-[#F59E0B] shadow-2xl scale-102"
                : "bg-white text-[#0B192C] border-[#0B192C]/15 hover:border-[#0B192C]/30"
            }`}
          >
            <Mountain className="w-5 h-5 text-[#F59E0B]" />
            <span>Ladakh Tailored Programs (LAD 01–08)</span>
          </button>

          <button
            onClick={() => setActiveTab("andaman")}
            className={`p-5 rounded-3xl border flex items-center justify-center gap-3 transition-all duration-300 font-extrabold text-sm sm:text-base ${
              activeTab === "andaman"
                ? "bg-[#0B192C] text-[#F59E0B] border-[#F59E0B] shadow-2xl scale-102"
                : "bg-white text-[#0B192C] border-[#0B192C]/15 hover:border-[#0B192C]/30"
            }`}
          >
            <Palmtree className="w-5 h-5 text-[#FF7036]" />
            <span>Andaman Aqua Paradise (AND 01–05)</span>
          </button>
        </div>
      </section>

      {/* Main Content Explorer */}
      <section className="py-10 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto mb-16">
        {activeTab === "ladakh" ? (
          <div className="space-y-10">
            {/* Ladakh Specs Bento Banner in Luxury Midnight Navy */}
            <div className="rounded-3xl bg-[#0B192C] text-white border border-[#F59E0B]/30 p-8 sm:p-10 shadow-2xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-[#F59E0B] text-[#0B192C] uppercase tracking-wider mb-3 inline-block">
                  Ladakh Private Circuit Standards
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Trans-Himalayan Tailored Expeditions
                </h2>
                <p className="text-xs sm:text-sm text-[#F8F9FA]/90 leading-relaxed font-normal">
                  All Ladakh tailored programs include double-bedded non-AC rooms / luxury Swiss camps on MAP plan (Daily Breakfast & Dinner), private SUV/Tempo fleet, inner-line permits, and Leh on-ground coordination.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#F59E0B]/20">
                  <div className="font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4" />
                    <span>Food & Stay Plan</span>
                  </div>
                  <p className="text-[#94A3B8]">
                    MAP Plan (Daily Breakfast & Dinner included). Premium stays in Leh, Pangong & Nubra.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#F59E0B]/20">
                  <div className="font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4" />
                    <span>Vehicles Provided</span>
                  </div>
                  <p className="text-[#94A3B8]">
                    Private Innova / Crysta / Xylo / Bolero or dedicated Tempo Traveller for private groups.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#F59E0B]/20">
                  <div className="font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Permits & Coordination</span>
                  </div>
                  <p className="text-[#94A3B8]">
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
                  className="p-7 rounded-3xl bg-white border border-[#0B192C]/10 flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all shadow-lg hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0B192C] text-[#F59E0B] border border-[#F59E0B]/30">
                        Code: {circuit.code}
                      </span>
                      <span className="text-xs font-bold text-[#0B192C]">
                        {circuit.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-3">
                      {circuit.duration} Circuit
                    </h3>

                    <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#0B192C]/10 mb-4">
                      <div className="text-[11px] font-black text-[#0B192C] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF7036]" />
                        <span>Night-Stay Routing:</span>
                      </div>
                      <p className="text-xs text-[#0B192C] leading-relaxed font-semibold">
                        {circuit.route}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0B192C]/10 flex items-center justify-between">
                    <span className="text-xs text-[#64748B] font-medium">
                      MAP Food Plan Included
                    </span>
                    <Link
                      href={`/booking?package=${encodeURIComponent("Custom Ladakh Circuit " + circuit.code)}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0B192C] hover:text-[#F59E0B] transition-colors"
                    >
                      <span>Request Custom Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Andaman Specs Bento Banner in Luxury Midnight Navy */}
            <div className="rounded-3xl bg-[#0B192C] text-white border border-[#F59E0B]/30 p-8 sm:p-10 shadow-2xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-[#F59E0B] text-[#0B192C] uppercase tracking-wider mb-3 inline-block">
                  Andaman Islands Private Holidays
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Aqua Paradise Coral Expeditions
                </h2>
                <p className="text-xs sm:text-sm text-[#F8F9FA]/90 leading-relaxed font-normal">
                  Curated tropical getaways with double-bedded AC rooms on CP (Breakfast) or MAP (Breakfast & Dinner) plans, AC private ferry tickets (Makruzz / Nautika), water sports assistance, and all monument entry fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#F59E0B]/20">
                  <div className="font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4" />
                    <span>CP / MAP Meal Options</span>
                  </div>
                  <p className="text-[#94A3B8]">
                    Deluxe AC beach resort stays in Port Blair, Havelock & Neil Island with daily breakfast.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#F59E0B]/20">
                  <div className="font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4" />
                    <span>AC Road & Ferry Fleet</span>
                  </div>
                  <p className="text-[#94A3B8]">
                    AC Innova / Scorpio on islands + Premium AC high-speed catamaran ferry tickets included.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0B192C] border border-[#F59E0B]/20">
                  <div className="font-bold text-[#F59E0B] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Activities & Entry</span>
                  </div>
                  <p className="text-[#94A3B8]">
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
                  className="p-7 rounded-3xl bg-white border border-[#0B192C]/10 flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all shadow-lg hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0B192C] text-[#F59E0B] border border-[#F59E0B]/30">
                        Code: {circuit.code}
                      </span>
                      <span className="text-xs font-bold text-[#0B192C]">
                        {circuit.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0B192C] mb-3">
                      {circuit.duration} Island Circuit
                    </h3>

                    <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#0B192C]/10 mb-4">
                      <div className="text-[11px] font-black text-[#0B192C] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF7036]" />
                        <span>Night-Stay Routing:</span>
                      </div>
                      <p className="text-xs text-[#0B192C] leading-relaxed font-semibold">
                        {circuit.route}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0B192C]/10 flex items-center justify-between">
                    <span className="text-xs text-[#64748B] font-medium">
                      AC Ferry & Resorts Included
                    </span>
                    <Link
                      href={`/booking?package=${encodeURIComponent("Custom Andaman Circuit " + circuit.code)}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0B192C] hover:text-[#F59E0B] transition-colors"
                    >
                      <span>Get Custom Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* AEO Voice Summary & Customizable Circuits Schema */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemPage",
              "name": "Customizable Circuits (Ladakh LAD 01–08 & Andaman AND 01–05) | Rupkotha Travels",
              "description":
                "Tailored private travel programs with dedicated vehicles, MAP meal plans, and customized high-altitude and tropical itineraries.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rupkothatravels.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Customizable Circuits", "item": "https://rupkothatravels.com/customizable-circuits" },
                ],
              },
            }),
          }}
        />

        <div className="rounded-3xl bg-[#060D17] text-white border border-amber-500/30 p-8 sm:p-10 shadow-xl aeo-answer-block">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider mb-3 inline-block">
            AEO Private Circuits Direct Answer
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-3">
            What customizable tour circuits does Rupkotha Travels provide?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal voice-answer-summary">
            Rupkotha Travels offers 8 bespoke Ladakh circuits (LAD 01–08) covering Pangong, Nubra, Turtuk, Hanle, and Siachen Base Camp with private SUVs and MAP meal plans, as well as 5 Andaman Island circuits (AND 01–05) covering Port Blair, Havelock, and Neil with luxury catamaran ferry transfers.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
