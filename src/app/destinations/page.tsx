"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DESTINATIONS_DIRECTORY } from "@/data/rupkothaData";
import { Mountain, Trees, Compass, MapPin, Search, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DestinationsPage() {
  const [selectedZone, setSelectedZone] = useState<"all" | "zone1" | "zone2" | "zone3">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const zone1 = DESTINATIONS_DIRECTORY.zone1;
  const zone2 = DESTINATIONS_DIRECTORY.zone2;
  const zone3 = DESTINATIONS_DIRECTORY.zone3;

  const filteredZone1 = zone1.items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredZone2 = zone2.sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sec.parks.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredZone3 = zone3.regions.filter((reg) =>
    reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reg.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] selection:bg-[#92FF5F] selection:text-[#0F3B27]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>India, Bhutan & Nepal Directory</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0F3B27] tracking-tight">
          Destinations & <span className="text-[#0F3B27] underline decoration-[#92FF5F] decoration-4">Locations</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#52796F] max-w-3xl mx-auto font-normal leading-relaxed">
          Explore our complete geographic footprint spanning alpine peaks, tiger territories, sacred river confluences, and tropical archipelagoes.
        </p>
      </section>

      {/* Filter and Search Bar Bento */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#0F3B27]/15 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedZone("all")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedZone === "all"
                  ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              All 3 Zones
            </button>
            <button
              onClick={() => setSelectedZone("zone1")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedZone === "zone1"
                  ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              Zone 1: Alpine Peaks & Passes
            </button>
            <button
              onClick={() => setSelectedZone("zone2")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedZone === "zone2"
                  ? "bg-[#0F3B27] text-[#FF7036] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              Zone 2: Wildlife Reserves
            </button>
            <button
              onClick={() => setSelectedZone("zone3")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all ${
                selectedZone === "zone3"
                  ? "bg-[#0F3B27] text-[#92FF5F] shadow-md"
                  : "bg-[#F7F9F7] text-[#0F3B27] hover:bg-[#0F3B27]/10"
              }`}
            >
              Zone 3: Heritage & Coasts
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#52796F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mountains, parks, cities..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
            />
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 mb-16">
        {/* Zone 1: High Peaks, Alpine Lakes & Passes */}
        {(selectedZone === "all" || selectedZone === "zone1") && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#0F3B27] text-[#92FF5F] flex items-center justify-center font-bold">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F3B27]">
                  {zone1.title}
                </h2>
                <p className="text-xs text-[#52796F] font-medium">{zone1.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredZone1.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.05 }}
                  className="rounded-3xl bg-white border border-[#0F3B27]/15 overflow-hidden flex flex-col justify-between shadow-xl hover:border-[#0F3B27]/40 transition-all group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#92FF5F] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-[#52796F] leading-relaxed font-normal mb-4">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-[#0F3B27]/10 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#0F3B27]">
                        High-Altitude Circuits
                      </span>
                      <Link
                        href="/fixed-departures"
                        className="inline-flex items-center gap-1 text-xs font-black text-[#0F3B27] hover:text-[#195237]"
                      >
                        <span>View Tours</span>
                        <ArrowRight className="w-3 h-3 text-[#FF7036]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Zone 2: National Parks & Wildlife */}
        {(selectedZone === "all" || selectedZone === "zone2") && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#0F3B27] text-[#FF7036] flex items-center justify-center font-bold">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F3B27]">
                  {zone2.title}
                </h2>
                <p className="text-xs text-[#52796F] font-medium">{zone2.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredZone2.map((sec, idx) => (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-7 rounded-3xl bg-white border border-[#0F3B27]/15 flex flex-col justify-between hover:border-[#0F3B27]/40 transition-all shadow-lg"
                >
                  <div>
                    <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#0F3B27] text-[#FF7036] uppercase tracking-wider mb-3 inline-block">
                      {sec.title}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0F3B27] mb-2">
                      Protected Sanctuaries & Habitats
                    </h3>
                    <p className="text-xs text-[#52796F] leading-relaxed font-normal mb-4">
                      {sec.parks}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0F3B27]/10 flex items-center justify-between">
                    <span className="text-xs text-[#0F3B27] font-bold">
                      Official Safari Permitted
                    </span>
                    <Link
                      href="/fixed-departures"
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0F3B27] hover:text-[#195237]"
                    >
                      <span>Safari Packages</span>
                      <ArrowRight className="w-3 h-3 text-[#FF7036]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Zone 3: Heritage, Coasts & Lakes */}
        {(selectedZone === "all" || selectedZone === "zone3") && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#0F3B27] text-[#92FF5F] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F3B27]">
                  {zone3.title}
                </h2>
                <p className="text-xs text-[#52796F] font-medium">{zone3.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredZone3.map((reg, idx) => (
                <motion.div
                  key={reg.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.05 }}
                  className="p-7 rounded-3xl bg-white border border-[#0F3B27]/15 flex flex-col justify-between hover:border-[#0F3B27]/40 transition-all shadow-lg"
                >
                  <div>
                    <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#0F3B27] text-[#92FF5F] uppercase tracking-wider mb-3 inline-block">
                      {reg.name}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0F3B27] mb-2">
                      Key Highlights & Heritage Spots
                    </h3>
                    <p className="text-xs text-[#52796F] leading-relaxed font-normal mb-4">
                      {reg.details}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0F3B27]/10 flex items-center justify-between">
                    <span className="text-xs text-[#0F3B27] font-bold">
                      Train & Fleet Included
                    </span>
                    <Link
                      href="/fixed-departures"
                      className="inline-flex items-center gap-1 text-xs font-black text-[#0F3B27] hover:text-[#195237]"
                    >
                      <span>Explore Tours</span>
                      <ArrowRight className="w-3 h-3 text-[#FF7036]" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
