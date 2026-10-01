"use client";

import Link from "next/link";
import { Train, Mountain, Trees, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { TOUR_CATEGORIES } from "@/data/rupkothaData";

export default function TourPillarsSection() {
  const icons = [Train, Mountain, Trees];
  const cardThemes = [
    {
      cardBg: "bg-[#0B192C] text-[#F8F9FA] border-[#F59E0B]/30",
      pillBg: "bg-[#F59E0B] text-[#0B192C]",
      subBg: "bg-[#081426] border-[#F59E0B]/20 text-white/90",
      btnBg: "bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] hover:from-amber-300 hover:to-amber-400",
    },
    {
      cardBg: "bg-[#FFFFFF] text-[#0B192C] border-[#0B192C]/10",
      pillBg: "bg-[#FEF3C7] text-[#0B192C] border border-[#F59E0B]/30",
      subBg: "bg-[#F8F9FA] border-[#0B192C]/10 text-[#0B192C]",
      btnBg: "bg-[#0B192C] text-[#F59E0B] hover:bg-[#1E3E62]",
    },
    {
      cardBg: "bg-[#F8F9FA] text-[#0B192C] border-[#0B192C]/15",
      pillBg: "bg-[#FF7036] text-white",
      subBg: "bg-white border-[#0B192C]/10 text-[#0B192C]",
      btnBg: "bg-[#0B192C] text-white hover:bg-[#1E3E62]",
    },
  ];

  return (
    <section className="py-8 sm:py-10 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B192C] text-[#F59E0B] text-[11px] font-black uppercase tracking-wider mb-2 shadow-md border border-[#F59E0B]/30">
            <span>Our 3 Core Categories</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
            Curated Expedition Formats
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#64748B] max-w-2xl font-normal">
            Pre-arranged train departures with full Bengali meal service, remote Himalayan passes, and wildlife safaris.
          </p>
        </div>

        <Link
          href="/tour-categories"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B192C] hover:text-[#F59E0B] transition-colors group self-start md:self-auto px-3.5 py-1.5 rounded-xl bg-white border border-[#0B192C]/15 shadow-xs"
        >
          <span>Explore All 3 Categories</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#FF7036]" />
        </Link>
      </div>

      {/* 3 Pillars Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {TOUR_CATEGORIES.map((cat, idx) => {
          const Icon = icons[idx];
          const theme = cardThemes[idx];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group border ${theme.cardBg}`}
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#F59E0B] border border-[#F59E0B]/30 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${theme.pillBg}`}>
                    Type 0{cat.type}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-extrabold mb-1">
                  {cat.title}
                </h3>
                <p className="text-[11px] font-bold mb-2.5 opacity-80">
                  {cat.tagline}
                </p>

                <p className="text-xs leading-relaxed mb-3 font-normal opacity-90 line-clamp-2">
                  {cat.description}
                </p>

                {/* Key Focus Box */}
                <div className={`p-2.5 rounded-xl border mb-2.5 ${theme.subBg}`}>
                  <div className="text-[10px] font-black uppercase tracking-wider mb-0.5 opacity-75">
                    Highlights:
                  </div>
                  <div className="text-[11px] font-semibold leading-relaxed line-clamp-1">
                    {cat.keyFocus}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="flex items-start gap-1.5 text-[11px] font-medium opacity-85">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#F59E0B]" />
                  <span className="line-clamp-1">
                    <strong>Ideal For:</strong> {cat.idealFor}
                  </span>
                </div>
              </div>

              {/* Bottom CTA Link */}
              <div className="mt-4 pt-3 border-t border-[#0B192C]/10 flex items-center justify-between">
                <span className="text-[11px] font-bold opacity-80">
                  {cat.packagesCount} Itineraries
                </span>
                <Link
                  href="/fixed-departures"
                  className={`inline-flex items-center gap-1 text-[11px] font-black px-3.5 py-1.5 rounded-full transition-all shadow-sm ${theme.btnBg}`}
                >
                  <span>View Tours</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
