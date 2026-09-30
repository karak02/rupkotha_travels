"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Compass, SlidersHorizontal, Sparkles } from "lucide-react";

interface TripPlannerProps {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  selectedMonth: string;
  onSelectMonth: (month: string) => void;
  selectedStyle: string;
  onSelectStyle: (style: string) => void;
  totalMatches: number;
}

export default function TripPlannerSearch({
  selectedRegion,
  onSelectRegion,
  selectedMonth,
  onSelectMonth,
  selectedStyle,
  onSelectStyle,
  totalMatches,
}: TripPlannerProps) {
  const regions = [
    "All Destinations",
    "Wildlife & Tiger Safaris",
    "Himalayan & High Altitude",
    "Heritage & Culture",
    "North East & Tribal",
    "Coastal & Islands",
  ];

  const months = [
    "All Departure Months",
    "Aug - Sep 2026 (Ladakh & Zanskar)",
    "Oct - Nov 2026 (Spiti, Arunachal, Sandakphu)",
    "Dec 2026 (Tadoba, Rajasthan, MP, Sundarban)",
    "Jan - Feb 2027 (Winter Forest & Beach)",
    "Year-Round Custom Departures",
  ];

  const styles = [
    "All Travel Styles",
    "Escorted Train Tours (Kolkata to Kolkata)",
    "4x4 High-Altitude SUV Expeditions",
    "Open Gypsy Wildlife Safaris",
    "Tribal & Heritage Immersion",
    "Island & Beach Getaways",
  ];

  return (
    <section id="planner" className="relative z-30 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0B192C]/95 backdrop-blur-xl border border-[#C5A880]/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A96D] tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brochure Explorer & Date Filter</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Explore Our 2026-2027 Fixed Departures
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#94A3B8]">Matching Brochure Tours:</span>
            <span className="px-3 py-1 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#E0A96D] font-mono font-bold text-sm">
              {totalMatches} Active Tours
            </span>
          </div>
        </div>

        {/* 3 Interactive Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {/* Destination dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#C5A880] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>Destination Category</span>
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => onSelectRegion(e.target.value)}
              aria-label="Filter by destination region"
              className="w-full bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
            >
              {regions.map((r) => (
                <option key={r} value={r} className="bg-[#060D17] text-white">
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Departure Month */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#C5A880] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>Departure Month / Season</span>
            </label>
            <select
              value={selectedMonth}
              onChange={(e) => onSelectMonth(e.target.value)}
              aria-label="Filter by departure month"
              className="w-full bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
            >
              {months.map((m) => (
                <option key={m} value={m} className="bg-[#060D17] text-white">
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Style */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#C5A880] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#E0A96D]" />
              <span>Tour Expedition Format</span>
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => onSelectStyle(e.target.value)}
              aria-label="Filter by travel format"
              className="w-full bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors"
            >
              {styles.map((s) => (
                <option key={s} value={s} className="bg-[#060D17] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Quick Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-5 mt-4 border-t border-white/5">
          <span className="text-xs text-[#94A3B8] flex items-center gap-1 mr-2">
            <SlidersHorizontal className="w-3 h-3" /> Quick Regions:
          </span>
          {[
            "Wildlife & Tiger Safaris",
            "Himalayan & High Altitude",
            "Heritage & Culture",
            "North East & Tribal",
            "Coastal & Islands",
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectRegion(tag)}
              className={`text-xs px-3 py-1 rounded-full transition-all ${
                selectedRegion === tag
                  ? "bg-[#C5A880] text-[#0B192C] font-semibold"
                  : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
          {(selectedRegion !== "All Destinations" ||
            selectedMonth !== "All Departure Months" ||
            selectedStyle !== "All Travel Styles") && (
            <button
              onClick={() => {
                onSelectRegion("All Destinations");
                onSelectMonth("All Departure Months");
                onSelectStyle("All Travel Styles");
              }}
              className="text-xs text-[#E0A96D] hover:underline ml-auto"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
