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
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] relative selection:bg-[#92FF5F] selection:text-[#0F3B27]">
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

      {/* Featured Fixed Departures Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
              <span>Upcoming 2026–2027 Tours</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#0F3B27] tracking-tight">
              Featured Fixed Departures
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#52796F] max-w-2xl font-normal">
              Escorted small groups with sleeper train tickets from Howrah & Sealdah, verified accommodations, and daily 4-course meals.
            </p>
          </div>

          <Link
            href="/fixed-departures"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F3B27] hover:text-[#195237] transition-colors group self-start md:self-auto px-4 py-2 rounded-xl bg-white border border-[#0F3B27]/15 shadow-sm"
          >
            <span>View All 13 Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF7036]" />
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

                <div className="pt-3 border-t border-[#0F3B27]/10 space-y-1.5">
                  {tour.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#0F3B27]">
                      <Check className="w-3.5 h-3.5 text-[#0F3B27] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

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
      </section>

      {/* Why Choose Us: 6 Escorted Luxury Pillars (Go Everywhere Holidays Model) */}
      <WhyChooseUsGoEverywhere />

      {/* Multi-Page Directory & Summaries Dossier */}
      <AllPagesDirectorySection />

      {/* Customizable Circuits Teaser Bento in Move Green */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 mb-16">
        <div className="rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] text-xs font-black uppercase tracking-wider mb-4 inline-block">
                Bespoke Private Programs
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-white mb-4">
                Tailored Ladakh & Andaman Circuits
              </h2>
              <p className="text-sm sm:text-base text-[#F7F9F7] leading-relaxed font-normal mb-6">
                Looking for a private family holiday or customized high-altitude expedition? We curate custom road trips across Ladakh (LAD 01–08) and tropical coral breaks in the Andaman Islands (AND 01–05) with dedicated private vehicles and luxury camps.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/customizable-circuits"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#92FF5F] text-[#0F3B27] font-black text-xs uppercase tracking-wider hover:bg-[#7ce648] transition-all shadow-lg"
                >
                  <span>Explore Custom Circuits</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </Link>

                <Link
                  href="/policies"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F3B27] border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  <span>Check Inclusions & Policies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0F3B27] border border-white/10 space-y-4">
              <div className="text-xs font-bold text-[#92FF5F] uppercase tracking-wider">
                Direct Booking Desk
              </div>
              <div className="text-xs text-[#8BA89A] leading-relaxed">
                Authorized Booking Counter for <strong>Eco Tour Odisha</strong> & <strong>Chhattisgarh Tourism</strong>.
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://wa.me/919830012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#0F3B27] border border-[#92FF5F]/40 text-[#92FF5F] font-black text-xs flex items-center justify-center gap-2 hover:bg-[#92FF5F] hover:text-[#0F3B27] transition-all"
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
