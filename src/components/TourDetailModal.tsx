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
          className="fixed inset-0 bg-[#0F3B27]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#F7F9F7] text-[#0F3B27] border border-[#0F3B27]/20 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0F3B27] text-white hover:bg-[#92FF5F] hover:text-[#0F3B27] transition-colors shadow-lg"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27] via-[#0F3B27]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] text-xs font-black uppercase tracking-wider">
                  {tour.type}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FF7036] text-white text-xs font-bold">
                  Type 0{tour.categoryType}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                {tour.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-[#F7F9F7] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#92FF5F]" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF7036]" />
                  DOJ: {tour.doj}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            {/* Tariff Grid in Move Green */}
            <div className="p-5 rounded-2xl bg-[#0F3B27] text-white border border-[#92FF5F]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-md">
              <div>
                <div className="text-xs text-[#F7F9F7] font-medium">Twin Sharing Rate</div>
                <div className="text-2xl font-black text-[#92FF5F] font-serif">
                  ₹{tour.twinRate.toLocaleString("en-IN")}/-
                </div>
                <div className="text-[11px] text-[#8BA89A]">Per Person + 5% GST</div>
              </div>
              <div>
                <div className="text-xs text-[#F7F9F7] font-medium">Extra Person Rate</div>
                <div className="text-xl font-bold text-white font-serif">
                  ₹{tour.extraRate.toLocaleString("en-IN")}/-
                </div>
                <div className="text-[11px] text-[#8BA89A]">In Same Room</div>
              </div>
              {tour.childRate ? (
                <div>
                  <div className="text-xs text-[#F7F9F7] font-medium">Child Tariff ({tour.childAgeLimit})</div>
                  <div className="text-xl font-bold text-[#FF7036] font-serif">
                    ₹{tour.childRate.toLocaleString("en-IN")}/-
                  </div>
                  <div className="text-[11px] text-[#8BA89A]">Special Child Fare</div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-[#F7F9F7] font-medium">Departure Hubs</div>
                  <div className="text-sm font-bold text-[#92FF5F] mt-1">
                    Howrah / Sealdah / Kolkata
                  </div>
                  <div className="text-[11px] text-[#8BA89A]">Rail & Fleet Included</div>
                </div>
              )}
            </div>

            {/* Night Stay Breakup */}
            <div>
              <h4 className="text-xs font-black text-[#0F3B27] uppercase tracking-wider mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF7036]" />
                <span>Night Stay Itinerary</span>
              </h4>
              <p className="p-4 rounded-2xl bg-white border border-[#0F3B27]/10 text-[#0F3B27] text-xs sm:text-sm font-semibold shadow-sm">
                {tour.nightStay}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-black text-[#0F3B27] uppercase tracking-wider mb-3">
                Key Sightseeing & Tour Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#0F3B27] bg-[#F7F9F7]/50 p-3 rounded-2xl border border-[#0F3B27]/10 font-medium">
                    <Check className="w-4 h-4 text-[#0F3B27] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Extensions if available */}
            {tour.optional && tour.optional.length > 0 && (
              <div>
                <h4 className="text-xs font-black text-[#FF7036] uppercase tracking-wider mb-2">
                  Optional Excursions (Extra Direct Cost)
                </h4>
                <div className="p-3.5 rounded-2xl bg-[#FF7036]/10 border border-[#FF7036]/30 text-xs text-[#0F3B27] font-semibold">
                  {tour.optional.join(" • ")}
                </div>
              </div>
            )}

            {/* Standard Inclusions */}
            <div className="p-5 rounded-2xl bg-white border border-[#0F3B27]/10 shadow-sm">
              <h4 className="text-xs font-black text-[#0F3B27] uppercase tracking-wider mb-3">
                Standard Package Inclusions:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#52796F] font-semibold">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#0F3B27]" />
                  <span>3-Tier Sleeper Rail Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#0F3B27]" />
                  <span>Bed Tea, 4 Meals & High Tea</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0F3B27]" />
                  <span>Station Porterage & Tour Escort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-[#0F3B27]/10 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#52796F] font-semibold">
              Departure Date: <strong className="text-[#0F3B27]">{tour.doj}</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/booking?package=${encodeURIComponent(tour.title)}`}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#92FF5F] text-[#0F3B27] font-black text-sm hover:bg-[#7ce648] transition-all shadow-lg border border-[#0F3B27]/20"
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
