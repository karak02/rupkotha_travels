"use client";

import { Star, Quote, Sparkles, CheckCircle2, Award } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Dr. Anirban & Madhumita Sengupta",
      location: "Alipore, Kolkata",
      tour: "Scandinavian Northern Lights & Lapland",
      rating: 5,
      date: "February 2026",
      text: "Our stay in the glass igloo under the dancing Northern Lights was pure magic. What impressed us most was our tour director Subrata da — he took care of my elderly mother with so much warmth and patience. Hot Bengali meals in the Arctic were unbelievable!",
    },
    {
      name: "Sarmistha & Pradip Bose",
      location: "Salt Lake Sector II, Kolkata",
      tour: "Europe Grand Royale (15 Days)",
      rating: 5,
      date: "May 2026",
      text: "Everything promised in the itinerary was delivered to the dot. Jungfraujoch was breathtaking, and staying in central Paris and Interlaken meant we could stroll out after dinner safely. Zero hidden costs, exceptional hospitality.",
    },
    {
      name: "Debabrata & Ananya Roy",
      location: "Ballygunge Place, Kolkata",
      tour: "Imperial Silk Route & Samarkand",
      rating: 5,
      date: "April 2026",
      text: "Uzbekistan was a revelation. The high-speed train, Registan square night light show, and the plav masterclass were flawlessly organized. Rupkotha Travels made visa and airport handling feel effortless.",
    },
  ];

  return (
    <section id="reviews" className="py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A96D] tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Traveler Stories & Accolades</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Memories Cherished Forever
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl font-light">
            Read authentic experiences from Kolkata families, couples, and solo voyagers who explored the world with Rupkotha Travels.
          </p>
        </div>

        {/* Rating Monogram Badge */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B192C] border border-[#C5A880]/30 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5A880] to-[#E0A96D] flex items-center justify-center font-bold text-xl text-[#0B192C]">
            4.9
          </div>
          <div>
            <div className="flex items-center gap-1 text-[#E0A96D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#94A3B8] mt-0.5 block">
              Based on 1,420+ Verified Google Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-[#0B192C]/80 border border-white/10 hover:border-[#C5A880]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#E0A96D]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#C5A880]/30" />
              </div>

              <p className="text-sm text-[#F8F9FA]/90 font-light leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-white text-base">
                  {rev.name}
                </h4>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
              <p className="text-xs text-[#94A3B8]">{rev.location}</p>
              <div className="mt-2 text-[11px] font-medium text-[#E0A96D] bg-[#1E3E62]/40 px-2.5 py-1 rounded-md inline-block border border-[#C5A880]/20">
                {rev.tour} • {rev.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Trust Strip */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0B192C] border border-white/10 text-center">
        <div className="p-3">
          <span className="font-serif text-2xl font-bold text-[#E0A96D]">18+</span>
          <p className="text-xs text-[#94A3B8] mt-1">Years of Luxury Curation</p>
        </div>
        <div className="p-3">
          <span className="font-serif text-2xl font-bold text-[#E0A96D]">12,500+</span>
          <p className="text-xs text-[#94A3B8] mt-1">Delighted Explorers</p>
        </div>
        <div className="p-3">
          <span className="font-serif text-2xl font-bold text-[#E0A96D]">42+</span>
          <p className="text-xs text-[#94A3B8] mt-1">Global Destinations</p>
        </div>
        <div className="p-3">
          <span className="font-serif text-2xl font-bold text-[#E0A96D]">100%</span>
          <p className="text-xs text-[#94A3B8] mt-1">Kolkata Visa Support</p>
        </div>
      </div>
    </section>
  );
}
