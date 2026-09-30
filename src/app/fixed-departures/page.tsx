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
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] selection:bg-[#92FF5F] selection:text-[#0F3B27]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>2026–2027 Confirmed Small-Group Departures</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0F3B27] tracking-tight">
          Fixed Departure <span className="text-[#0F3B27] underline decoration-[#92FF5F] decoration-4">Tour Packages</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#52796F] max-w-3xl mx-auto font-normal leading-relaxed">
          Escorted group journeys with pre-booked sleeper train tickets from Howrah & Sealdah, dedicated MUV / Tempo fleets, 4-course daily meals, and station luggage porters included.
        </p>
      </section>

      {/* Filter and Search Bar Bento */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#0F3B27]/15 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === "all"
                  ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              All Packages ({FIXED_DEPARTURES.length})
            </button>
            <button
              onClick={() => setSelectedCategory(1)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === 1
                  ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              Type 1: Heritage & Cultural
            </button>
            <button
              onClick={() => setSelectedCategory(2)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === 2
                  ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              Type 2: High-Altitude
            </button>
            <button
              onClick={() => setSelectedCategory(3)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedCategory === 3
                  ? "bg-[#0F3B27] text-[#FF7036] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              Type 3: Wildlife & Coastal
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#52796F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tours, regions, dates..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
            />
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="rounded-3xl bg-white border border-[#0F3B27]/15 overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#0F3B27]/40 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Banner */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27]/95 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#0F3B27] text-[11px] font-black text-[#92FF5F] border border-[#92FF5F]/30 shadow-md">
                    Type 0{tour.categoryType}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] text-xs font-black shadow-md">
                    ₹{tour.twinRate.toLocaleString("en-IN")}/-
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#92FF5F] block mb-0.5">
                    {tour.type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#92FF5F] transition-colors leading-snug truncate">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Meta details */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#0F3B27] font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#0F3B27]" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FF7036] font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>DOJ: {tour.doj}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#52796F]">
                    <MapPin className="w-3.5 h-3.5 text-[#0F3B27] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{tour.nightStay}</span>
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="pt-3 border-t border-[#0F3B27]/10 space-y-1.5">
                  {tour.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#0F3B27]">
                      <Check className="w-3.5 h-3.5 text-[#0F3B27] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 border-t border-[#0F3B27]/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="flex-1 py-2.5 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/20 text-xs font-black text-[#0F3B27] hover:bg-[#0F3B27] hover:text-[#92FF5F] transition-colors"
                  >
                    View Details
                  </button>

                  <Link
                    href={`/booking?package=${encodeURIComponent(tour.title)}`}
                    className="flex-1 py-2.5 rounded-xl bg-[#92FF5F] text-[#0F3B27] text-xs font-black text-center hover:bg-[#7ce648] transition-colors shadow-md"
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
            <p className="text-lg text-[#52796F]">No tour packages match your search filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#0F3B27] text-[#92FF5F] font-black text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
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
