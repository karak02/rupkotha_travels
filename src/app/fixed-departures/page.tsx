"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourDetailModal from "@/components/TourDetailModal";
import { FIXED_DEPARTURES, TourPackage } from "@/data/rupkothaData";
import { Search, Calendar, Clock, MapPin, Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FixedDeparturesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | "all">("all");
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const filteredTours = FIXED_DEPARTURES.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.nightStay.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "all" || tour.categoryType === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0B192C] selection:bg-[#F59E0B] selection:text-[#0B192C]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider mb-6 border border-amber-500/30 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>2026–2027 Confirmed Small-Group Departures</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight">
          Fixed Departure <span className="text-amber-500 underline decoration-amber-400 decoration-4">Tour Packages</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Escorted group journeys with pre-booked sleeper train tickets from Howrah & Sealdah, dedicated MUV / Tempo fleets, 4-course daily meals, and station luggage porters included.
        </p>
      </section>

      {/* Filter and Search Bar Bento */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === "all"
                  ? "bg-[#0B192C] text-amber-400 shadow-md"
                  : "bg-[#F8F9FA] text-[#0B192C] hover:bg-slate-200"
              }`}
            >
              All Packages ({FIXED_DEPARTURES.length})
            </button>
            <button
              onClick={() => setSelectedCategory(1)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === 1
                  ? "bg-[#0B192C] text-amber-400 shadow-md"
                  : "bg-[#F8F9FA] text-[#0B192C] hover:bg-slate-200"
              }`}
            >
              Type 1: Heritage & Cultural
            </button>
            <button
              onClick={() => setSelectedCategory(2)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === 2
                  ? "bg-[#0B192C] text-amber-400 shadow-md"
                  : "bg-[#F8F9FA] text-[#0B192C] hover:bg-slate-200"
              }`}
            >
              Type 2: High-Altitude
            </button>
            <button
              onClick={() => setSelectedCategory(3)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === 3
                  ? "bg-[#0B192C] text-amber-400 shadow-md"
                  : "bg-[#F8F9FA] text-[#0B192C] hover:bg-slate-200"
              }`}
            >
              Type 3: Wildlife & Coastal
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tours, regions, dates..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-slate-200 text-xs text-[#0B192C] placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-10 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden flex flex-col justify-between shadow-xl hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Banner */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/95 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0B192C] text-[11px] font-black text-amber-300 border border-amber-500/30 shadow-md">
                    Type 0{tour.categoryType}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] text-xs font-black shadow-md">
                    ₹{tour.twinRate.toLocaleString("en-IN")}/-
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-0.5">
                    {tour.type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug truncate">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Meta details */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-[#0B192C] font-bold">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-600 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>DOJ: {tour.doj}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{tour.nightStay}</span>
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {tour.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#0B192C]">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-black text-[#0B192C] hover:bg-[#0B192C] hover:text-amber-400 transition-colors"
                  >
                    View Details
                  </button>

                  <Link
                    href={`/booking?package=${encodeURIComponent(tour.title)}`}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B192C] text-xs font-black text-center transition-all shadow-md"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-slate-500">No tour packages match your search filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#0B192C] text-amber-400 font-black text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* AEO Voice Summary & Package Schema */}
      <section className="py-8 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto mb-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Fixed Departure Tour Packages 2026–2027",
              "description":
                "Curated small-group fixed departures departing from Howrah and Sealdah with confirmed train tickets, verified hotels, and 4-course homely meals.",
              "numberOfItems": FIXED_DEPARTURES.length,
              "itemListElement": FIXED_DEPARTURES.map((tour, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "item": {
                  "@type": "TouristTrip",
                  "name": tour.title,
                  "description": `${tour.duration} escorted trip to ${tour.coveringPlaces || tour.nightStay}.`,
                  "offers": {
                    "@type": "Offer",
                    "price": tour.twinRate,
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                  },
                },
              })),
            }),
          }}
        />

        <div className="rounded-3xl bg-[#060D17] text-white border border-amber-500/30 p-8 sm:p-10 shadow-xl aeo-answer-block">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider mb-3 inline-block">
            Quick Answer Box (AEO)
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-3">
            What is Included in Rupkotha Travels Fixed Departure Tours from Kolkata?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal voice-answer-summary">
            Every fixed departure from Rupkotha Travels includes confirmed Sleeper train tickets from Howrah or Sealdah, verified accommodation on twin/triple sharing, 4 fresh meals daily (bed tea, breakfast, lunch, evening tea & dinner), dedicated SUVs or Tempo Travellers, station luggage porterage, and an experienced Bengali tour escort.
          </p>
        </div>
      </section>

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
      />

      <Footer />
    </main>
  );
}
