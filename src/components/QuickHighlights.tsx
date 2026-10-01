"use client";

import React from "react";
import { Train, UtensilsCrossed, Mountain, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { TravelCard } from "@/components/ui/card-7";

export default function QuickHighlights() {
  const assuranceCards = [
    {
      id: "assurance-rail",
      title: "Confirmed Train Berths",
      location: "Howrah & Sealdah Hubs",
      overview:
        "Guaranteed sleeper and 3AC tickets with dedicated station porters and escorted Bengali tour guides.",
      tag: "Rail Transit",
      imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Comfortable train journey through scenic Indian landscape",
      logo: <Train className="h-4.5 w-4.5 text-[#F59E0B]" />,
    },
    {
      id: "assurance-meals",
      title: "Homely Bengali Feasts",
      location: "4 Fresh Meals Daily",
      overview:
        "Authentic morning tea, breakfast, and 2 hot 4-course meals (Fish, Chicken & Pure Veg) included.",
      tag: "Authentic Dining",
      imageUrl:
        "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Freshly served traditional Bengali feast and dining",
      logo: <UtensilsCrossed className="h-4.5 w-4.5 text-[#F59E0B]" />,
    },
    {
      id: "assurance-fleet",
      title: "Himalayan 4x4 Fleets",
      location: "High-Altitude Safety",
      overview:
        "Sanitized Scorpio & Innova vehicles with certified mountain drivers and emergency oxygen kits.",
      tag: "Fleet & Safety",
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Rugged 4x4 vehicle traveling through high mountain pass",
      logo: <Mountain className="h-4.5 w-4.5 text-[#F59E0B]" />,
    },
    {
      id: "assurance-govt",
      title: "Govt Authorized Agent",
      location: "Odisha & Chhattisgarh",
      overview:
        "Authorized booking partner for Eco Tour Odisha & CG Tourism with instant permit clearances.",
      tag: "100% Verified",
      imageUrl:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Protected natural wildlife park and eco tourism sanctuary",
      logo: <ShieldCheck className="h-4.5 w-4.5 text-[#F59E0B]" />,
    },
  ];

  return (
    <section className="relative z-20 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B192C] text-[#F59E0B] border border-[#F59E0B]/30 text-[11px] font-black uppercase tracking-wider mb-2.5 shadow-md"
        >
          <Sparkles className="w-3 h-3 text-[#F59E0B]" />
          <span>The Rupkotha Assurance</span>
        </motion.div>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-[#0B192C] tracking-tight leading-tight">
          Travel With Total Peace of Mind
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] leading-relaxed font-normal max-w-2xl mx-auto">
          All-inclusive small group escorted tours from Kolkata with confirmed train berths, 4 homely meals daily, and certified local guides.
        </p>
      </div>

      {/* 4-Column Assurance Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
        {assuranceCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="w-full flex justify-center"
          >
            <TravelCard
              imageUrl={card.imageUrl}
              imageAlt={card.imageAlt}
              logo={card.logo}
              title={card.title}
              location={card.location}
              overview={card.overview}
              tag={card.tag}
              className="h-[250px] sm:h-[260px]"
            />
          </motion.div>
        ))}
      </div>

      {/* Assurance Trust Strip */}
      <div className="mt-6 p-3.5 sm:p-4 rounded-2xl bg-[#0B192C] text-white flex flex-wrap items-center justify-around gap-3 border border-[#F59E0B]/30 shadow-xl text-[11px] font-semibold">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
          <span>Confirmed Sleeper / 3AC Berths</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
          <span>Daily 4 Homely Bengali &amp; Indian Meals</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
          <span>Authorized Eco Tour Odisha Agent</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
          <span>Zero Hidden Ground Charges</span>
        </div>
      </div>
    </section>
  );
}