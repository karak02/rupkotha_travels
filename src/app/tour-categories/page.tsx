"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOUR_CATEGORIES, FIXED_DEPARTURES } from "@/data/rupkothaData";
import { Train, Mountain, Trees, ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TourCategoriesPage() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const icons = [Train, Mountain, Trees];

  const activeCategory = TOUR_CATEGORIES.find((c) => c.type === activeTab) || TOUR_CATEGORIES[0];
  const matchingPackages = FIXED_DEPARTURES.filter((p) => p.categoryType === activeTab);

  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] selection:bg-[#92FF5F] selection:text-[#0F3B27]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>3 Distinct Travel Philosophies</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0F3B27] tracking-tight">
          Our Tour <span className="text-[#0F3B27] underline decoration-[#92FF5F] decoration-4">Categories</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#52796F] max-w-2xl mx-auto font-normal leading-relaxed">
          From escorted royal heritage circuits with sleeper train transit to rugged trans-Himalayan road odysseys and certified eco-wildlife game drives.
        </p>
      </section>

      {/* Category Tab Switcher Bento */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TOUR_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx];
            const isSelected = activeTab === cat.type;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.type)}
                className={`p-7 rounded-3xl text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between border shadow-lg ${
                  isSelected
                    ? "bg-[#0F3B27] text-white border-[#92FF5F] shadow-2xl scale-102"
                    : "bg-white text-[#0F3B27] border-[#0F3B27]/15 hover:border-[#0F3B27]/30 hover:bg-[#F7F9F7]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                      isSelected ? "bg-[#92FF5F] text-[#0F3B27]" : "bg-[#0F3B27] text-[#92FF5F]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                      isSelected ? "bg-[#92FF5F] text-[#0F3B27]" : "bg-[#0F3B27]/10 text-[#0F3B27]"
                    }`}
                  >
                    Type 0{cat.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-1">
                    {cat.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 ${isSelected ? "text-[#F7F9F7]" : "text-[#52796F]"}`}>
                    {cat.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Deep Dive Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white border border-[#0F3B27]/15 p-8 sm:p-12 mb-16 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider bg-[#0F3B27] text-[#92FF5F]"
                  >
                    Type 0{activeCategory.type} Overview
                  </span>
                  <span className="text-xs font-bold text-[#52796F]">
                    {matchingPackages.length} Fixed Departures In This Category
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#0F3B27] mb-4">
                  {activeCategory.title}
                </h2>
                <p className="text-base text-[#52796F] leading-relaxed font-normal mb-6">
                  {activeCategory.description}
                </p>

                <div className="p-6 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 space-y-4">
                  <div>
                    <span className="text-[11px] font-black text-[#0F3B27] uppercase tracking-wider block mb-1">
                      Key Focus Circuits & Destinations:
                    </span>
                    <p className="text-xs sm:text-sm text-[#0F3B27] leading-relaxed font-semibold">
                      {activeCategory.keyFocus}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#0F3B27]/10 flex items-start gap-2 text-xs text-[#52796F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F3B27] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#0F3B27]">Ideal Traveler Profile:</strong> {activeCategory.idealFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Card in Move Green */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0F3B27] text-white border border-[#92FF5F]/30 flex flex-col justify-between shadow-lg">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    Ready to Book This Style?
                  </h4>
                  <p className="text-xs text-[#F7F9F7] leading-relaxed mb-6 font-normal">
                    Our tour directors and station porters ensure your journey is seamless from Howrah / Sealdah.
                  </p>
                </div>
                <Link
                  href={`/booking`}
                  className="w-full py-3.5 rounded-xl bg-[#92FF5F] text-[#0F3B27] font-black text-center text-xs uppercase tracking-wider hover:bg-[#7ce648] transition-colors shadow-md"
                >
                  Inquire For Type 0{activeCategory.type}
                </Link>
              </div>
            </div>

            {/* List of Matching Packages */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#0F3B27]">
                  Available Fixed Packages ({matchingPackages.length})
                </h3>
                <Link
                  href="/fixed-departures"
                  className="text-xs font-bold text-[#0F3B27] hover:underline flex items-center gap-1"
                >
                  <span>View All 13 Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF7036]" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/10 overflow-hidden flex flex-col justify-between group hover:border-[#0F3B27]/30 transition-all shadow-md"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27]/90 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0F3B27] text-[11px] font-black text-[#92FF5F] border border-[#92FF5F]/30 shadow-md">
                        ₹{pkg.twinRate.toLocaleString("en-IN")}
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase font-bold text-[#92FF5F] block">
                          {pkg.type}
                        </span>
                        <h4 className="font-serif text-base font-bold text-white truncate">
                          {pkg.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-[#52796F] mb-2 font-semibold">
                          <Clock className="w-3 h-3 text-[#0F3B27]" />
                          <span>{pkg.duration}</span>
                          <span>•</span>
                          <Calendar className="w-3 h-3 text-[#FF7036]" />
                          <span className="truncate">{pkg.doj}</span>
                        </div>
                        <p className="text-xs text-[#52796F] line-clamp-2 mb-4 font-normal">
                          {pkg.nightStay}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#0F3B27]/10 flex items-center justify-between">
                        <span className="text-[11px] text-[#0F3B27] font-bold">
                          Twin Sharing
                        </span>
                        <Link
                          href={`/fixed-departures`}
                          className="inline-flex items-center gap-1 text-xs font-black text-[#0F3B27] hover:text-[#195237] transition-colors"
                        >
                          <span>Full Details</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FF7036]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
