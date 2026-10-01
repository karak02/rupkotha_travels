"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import EcoTourismBannerStrip from "@/components/EcoTourismBannerStrip";
import VideoHeroScroller from "@/components/VideoHeroScroller";
import QuickHighlights from "@/components/QuickHighlights";
import BrandAmbassadorSection from "@/components/BrandAmbassadorSection";
import MountainExploreShowcase from "@/components/MountainExploreShowcase";
import CulturalExpeditionScroller from "@/components/CulturalExpeditionScroller";
import TourPillarsSection from "@/components/TourPillarsSection";
import WhyChooseUsGoEverywhere from "@/components/WhyChooseUsGoEverywhere";
import AllPagesDirectorySection from "@/components/AllPagesDirectorySection";
import TourDetailModal from "@/components/TourDetailModal";
import Footer from "@/components/Footer";
import { FIXED_DEPARTURES, TourPackage } from "@/data/rupkothaData";
import { Calendar, Clock, MapPin, Check, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  // Top featured 3 packages for the home page showcase
  const featuredTours = FIXED_DEPARTURES.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0B192C] relative selection:bg-[#F59E0B] selection:text-[#060D17]">
      {/* Navigation */}
      <Navbar />

      {/* Cinematic Video Hero Scroller with Parallax and 3 Fullscreen Scenes */}
      <VideoHeroScroller />

      {/* Cinematic Nature & Eco-Tourism Transition Banner */}
      <EcoTourismBannerStrip />

      {/* 4 Quick Value Highlights */}
      <QuickHighlights />

      {/* Brand Ambassador & Kolkata Lounge Trust Endorsement (Go Everywhere Inspired) */}
      <BrandAmbassadorSection />

      {/* Monumental Mountain Parallax & "EXPLORE" Showcase (Dribbble/Pinterest Inspired) */}
      <MountainExploreShowcase />

      {/* Interactive Cultural Odyssey & Topographic Map Scroller */}
      <CulturalExpeditionScroller />

      {/* 3 Core Tour Categories Bento Section */}
      <TourPillarsSection />

      {/* Featured Fixed Departures Grid with Midnight Obsidian Map Background */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#060D17] text-[#F8F9FA] overflow-hidden">
        {/* Topographic Contour Texture Overlay in Warm Amber */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px), radial-gradient(#FEF3C7 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D17] via-transparent to-[#060D17] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Upcoming 2026–2027 Tours</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Fixed Departures
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
                Escorted small groups with sleeper train tickets from Howrah & Sealdah, verified accommodations, and daily 4-course meals.
              </p>
            </div>

            <Link
              href="/fixed-departures"
              className="inline-flex items-center gap-2 text-xs font-black text-amber-400 hover:text-amber-300 transition-all group self-start md:self-auto px-5 py-2.5 rounded-full bg-[#0B111E] border border-amber-500/30 hover:border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
            >
              <span>View All 13 Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, idx) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="rounded-3xl bg-[#0B111E]/95 backdrop-blur-xl border border-amber-500/25 overflow-hidden flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:border-amber-400/60 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 group"
              >
                {/* Image Banner */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#060D17]/90 text-[11px] font-black text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-md">
                      Type 0{tour.categoryType}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
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
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-200 font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-300 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>DOJ: {tour.doj}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{tour.nightStay}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    {tour.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedTour(tour)}
                      className="flex-1 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      View Details
                    </button>

                    <Link
                      href={`/booking?package=${encodeURIComponent(tour.title)}`}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black text-center transition-all shadow-[0_4px_15px_rgba(245,158,11,0.3)]"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us: 6 Escorted Luxury Pillars (Go Everywhere Holidays Model) */}
      <WhyChooseUsGoEverywhere />

      {/* Multi-Page Directory & Summaries Dossier */}
      <AllPagesDirectorySection />

      {/* Customizable Circuits Teaser Bento in Midnight Obsidian & Royal Gold */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 mb-16">
        <div className="rounded-3xl bg-[#060D17] text-white border border-amber-500/30 p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Subtle gold decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-black uppercase tracking-wider mb-4 inline-block">
                Bespoke Private Programs
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-white mb-4">
                Tailored Ladakh & Andaman Circuits
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                Looking for a private family holiday or customized high-altitude expedition? We curate custom road trips across Ladakh (LAD 01–08) and tropical coral breaks in the Andaman Islands (AND 01–05) with dedicated private vehicles and luxury camps.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/customizable-circuits"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
                >
                  <span>Explore Custom Circuits</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </Link>

                <Link
                  href="/policies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B111E] border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-amber-400/50 transition-all"
                >
                  <span>Check Inclusions & Policies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0B111E] border border-amber-500/25 space-y-4 shadow-xl">
              <div className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct Booking Desk</span>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                Authorized Booking Counter for <strong className="text-amber-200">Eco Tour Odisha</strong> & <strong className="text-amber-200">Chhattisgarh Tourism</strong>.
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://wa.me/919830012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_4px_15px_rgba(245,158,11,0.25)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
