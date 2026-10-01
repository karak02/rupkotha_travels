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
    <main className="min-h-screen bg-[#F8F9FA] text-[#0B192C] selection:bg-[#F59E0B] selection:text-[#0B192C]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B192C] text-[#F59E0B] text-xs font-black uppercase tracking-wider mb-6 shadow-md border border-[#F59E0B]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>3 Distinct Travel Philosophies</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight">
          Our Tour <span className="text-[#0B192C] underline decoration-[#F59E0B] decoration-4">Categories</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto font-normal leading-relaxed">
          From escorted royal heritage circuits with sleeper train transit to rugged trans-Himalayan road odysseys and certified eco-wildlife game drives.
        </p>
      </section>

      {/* Category Tab Switcher Bento */}
      <section className="py-8 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
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
                    ? "bg-[#0B192C] text-white border-[#F59E0B] shadow-2xl scale-102"
                    : "bg-white text-[#0B192C] border-[#0B192C]/15 hover:border-[#0B192C]/30 hover:bg-[#F8F9FA]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${
                      isSelected ? "bg-[#F59E0B] text-[#0B192C]" : "bg-[#0B192C] text-[#F59E0B]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                      isSelected ? "bg-[#F59E0B] text-[#0B192C]" : "bg-[#0B192C]/10 text-[#0B192C]"
                    }`}
                  >
                    Type 0{cat.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-1">
                    {cat.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 ${isSelected ? "text-[#F8F9FA]" : "text-[#64748B]"}`}>
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
            className="rounded-3xl bg-white border border-[#0B192C]/15 p-8 sm:p-12 mb-16 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider bg-[#0B192C] text-[#F59E0B]"
                  >
                    Type 0{activeCategory.type} Overview
                  </span>
                  <span className="text-xs font-bold text-[#64748B]">
                    {matchingPackages.length} Fixed Departures In This Category
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#0B192C] mb-4">
                  {activeCategory.title}
                </h2>
                <p className="text-base text-[#64748B] leading-relaxed font-normal mb-6">
                  {activeCategory.description}
                </p>

                <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#0B192C]/10 space-y-4">
                  <div>
                    <span className="text-[11px] font-black text-[#0B192C] uppercase tracking-wider block mb-1">
                      Key Focus Circuits & Destinations:
                    </span>
                    <p className="text-xs sm:text-sm text-[#0B192C] leading-relaxed font-semibold">
                      {activeCategory.keyFocus}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#0B192C]/10 flex items-start gap-2 text-xs text-[#64748B]">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#0B192C]">Ideal Traveler Profile:</strong> {activeCategory.idealFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Card in Midnight Navy */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0B192C] text-white border border-[#F59E0B]/30 flex flex-col justify-between shadow-lg">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    Ready to Book This Style?
                  </h4>
                  <p className="text-xs text-[#F8F9FA] leading-relaxed mb-6 font-normal">
                    Our tour directors and station porters ensure your journey is seamless from Howrah / Sealdah.
                  </p>
                </div>
                <Link
                  href={`/booking`}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] font-black text-center text-xs uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-colors shadow-md"
                >
                  Inquire For Type 0{activeCategory.type}
                </Link>
              </div>
            </div>

            {/* List of Matching Packages */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#0B192C]">
                  Available Fixed Packages ({matchingPackages.length})
                </h3>
                <Link
                  href="/fixed-departures"
                  className="text-xs font-bold text-[#0B192C] hover:underline flex items-center gap-1"
                >
                  <span>View All 13 Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF7036]" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="rounded-2xl bg-[#F8F9FA] border border-[#0B192C]/10 overflow-hidden flex flex-col justify-between group hover:border-[#F59E0B]/40 transition-all shadow-md"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B192C] text-[11px] font-black text-[#F59E0B] border border-[#F59E0B]/30 shadow-md">
                        ₹{pkg.twinRate.toLocaleString("en-IN")}
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase font-bold text-[#F59E0B] block">
                          {pkg.type}
                        </span>
                        <h4 className="font-serif text-base font-bold text-white truncate">
                          {pkg.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-[#64748B] mb-2 font-semibold">
                          <Clock className="w-3 h-3 text-[#F59E0B]" />
                          <span>{pkg.duration}</span>
                          <span>•</span>
                          <Calendar className="w-3 h-3 text-[#FF7036]" />
                          <span className="truncate">{pkg.doj}</span>
                        </div>
                        <p className="text-xs text-[#64748B] line-clamp-2 mb-4 font-normal">
                          {pkg.nightStay}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#0B192C]/10 flex items-center justify-between">
                        <span className="text-[11px] text-[#0B192C] font-bold">
                          Twin Sharing
                        </span>
                        <Link
                          href={`/fixed-departures`}
                          className="inline-flex items-center gap-1 text-xs font-black text-[#0B192C] hover:text-[#F59E0B] transition-colors"
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

      {/* AEO Voice Summary & Categories Schema */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto mb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Tour Categories & Travel Styles | Rupkotha Travels",
              "description":
                "Detailed breakdown of 3 distinct tour categories: Fixed Heritage Departures with train transit, High-Altitude Himalayan 4x4 Expeditions, and Certified Eco-Forest Safaris.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rupkothatravels.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Tour Categories", "item": "https://rupkothatravels.com/tour-categories" },
                ],
              },
            }),
          }}
        />

        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-xl aeo-answer-block">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-600 border border-amber-500/30 uppercase tracking-wider mb-3 inline-block">
            AEO Categories Direct Answer
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B192C] mb-3">
            What are the 3 main tour categories operated by Rupkotha Travels?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal voice-answer-summary">
            Rupkotha Travels divides its itineraries into Type 1: Fixed Group Departures & Cultural Heritage (with sleeper train transit and 4 daily meals), Type 2: High-Altitude Himalayan Expeditions (featuring 4x4 vehicles and oxygen setups), and Type 3: Eco-Forest Safaris & Coastal Getaways (authorized eco-tours and tiger safaris).
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
