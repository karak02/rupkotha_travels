"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Calendar, Clock, MapPin, Check, Train, Utensils, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TourPackage } from "@/data/rupkothaData";

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
}

export default function TourDetailModal({ tour, onClose }: TourDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (tour) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [tour, onClose]);

  if (!tour) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060D17]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#F8F9FA] text-[#0B192C] border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#060D17] text-white hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header with Image */}
          <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden">
            <img
              src={tour.image}
              alt={tour.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                  {tour.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0B192C] text-amber-300 border border-amber-500/30 text-xs font-bold">
                  Type 0{tour.categoryType}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                {tour.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-200 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  DOJ: {tour.doj}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            {/* Tariff Grid in Midnight Obsidian */}
            <div className="p-5 rounded-2xl bg-[#060D17] text-white border border-amber-500/30 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-xl">
              <div>
                <div className="text-xs text-slate-300 font-medium">Twin Sharing Rate</div>
                <div className="text-2xl font-black text-amber-400 font-serif">
                  ₹{tour.twinRate.toLocaleString("en-IN")}/-
                </div>
                <div className="text-[11px] text-slate-400">Per Person + 5% GST</div>
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium">Extra Person Rate</div>
                <div className="text-xl font-bold text-white font-serif">
                  ₹{tour.extraRate.toLocaleString("en-IN")}/-
                </div>
                <div className="text-[11px] text-slate-400">In Same Room</div>
              </div>
              {tour.childRate ? (
                <div>
                  <div className="text-xs text-slate-300 font-medium">Child Tariff ({tour.childAgeLimit})</div>
                  <div className="text-xl font-bold text-amber-300 font-serif">
                    ₹{tour.childRate.toLocaleString("en-IN")}/-
                  </div>
                  <div className="text-[11px] text-slate-400">Special Child Fare</div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-slate-300 font-medium">Departure Hubs</div>
                  <div className="text-sm font-bold text-amber-300 mt-1">
                    Howrah / Sealdah / Kolkata
                  </div>
                  <div className="text-[11px] text-slate-400">Rail & Fleet Included</div>
                </div>
              )}
            </div>

            {/* Night Stay Breakup */}
            <div>
              <h4 className="text-xs font-black text-[#0B192C] uppercase tracking-wider mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Night Stay Itinerary</span>
              </h4>
              <p className="p-4 rounded-2xl bg-white border border-slate-200 text-[#0B192C] text-xs sm:text-sm font-semibold shadow-sm">
                {tour.nightStay}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-black text-[#0B192C] uppercase tracking-wider mb-3">
                Key Sightseeing & Tour Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#0B192C] bg-white p-3 rounded-2xl border border-slate-200 font-medium shadow-xs">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Extensions if available */}
            {tour.optional && tour.optional.length > 0 && (
              <div>
                <h4 className="text-xs font-black text-amber-600 uppercase tracking-wider mb-2">
                  Optional Excursions (Extra Direct Cost)
                </h4>
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-[#0B192C] font-semibold">
                  {tour.optional.join(" • ")}
                </div>
              </div>
            )}

            {/* Standard Inclusions */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h4 className="text-xs font-black text-[#0B192C] uppercase tracking-wider mb-3">
                Standard Package Inclusions:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-amber-500" />
                  <span>3-Tier Sleeper Rail Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-500" />
                  <span>Bed Tea, 4 Meals & High Tea</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span>Station Porterage & Tour Escort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-semibold">
              Departure Date: <strong className="text-[#0B192C]">{tour.doj}</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/booking?package=${encodeURIComponent(tour.title)}`}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
              >
                <span>Book This Departure</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
