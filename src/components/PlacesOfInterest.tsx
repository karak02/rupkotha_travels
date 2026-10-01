"use client";

import { useState } from "react";
import { Compass, Trees, Mountain, Landmark, Waves, MapPin, Sparkles, ArrowRight } from "lucide-react";

export default function PlacesOfInterest({
  onOpenEnquiry,
}: {
  onOpenEnquiry: (topic?: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const destinations = [
    {
      category: "wildlife",
      icon: Trees,
      title: "Wildlife & Tiger Reserves",
      subtitle: "22+ Sanctuaries Covered",
      places: "Tadoba Andhari • Kaziranga • Pench • Bandhavgarh • Kanha • Ranthambore • Jaldapara • Gorumara • Buxa • Jim Corbett • Manas • Debrigarh • Satkosia • Simlipal",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "himalayas",
      icon: Mountain,
      title: "North Bengal & Sikkim",
      subtitle: "Himalayan Wonderland",
      places: "Darjeeling • Kalimpong • Lava • Rishop • Singalila • Gangtok • Pelling • Ravangla • Lachung • Lachen • Gurudongmar Lake • Yumthang Valley • Zuluk Silk Route",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "himalayas",
      icon: Mountain,
      title: "Garhwal & Kumaon",
      subtitle: "Abode of Gods & Glaciers",
      places: "Char Dham (Kedarnath, Badrinath, Yamunotri, Gangotri) • Auli Ski Slopes • Chopta Tungnath • Nainital • Binsar • Munsiyari • Kausani • Ranikhet",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "tribal",
      icon: Landmark,
      title: "North East & Meghalaya",
      subtitle: "Living Roots & Clouds",
      places: "Cherrapunji • Dawki Umngot River • Mawlynnong Living Root Bridge • Tawang • Bomdila • Majuli River Island • Hornbill Kisama • Ziro Valley",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "heritage",
      icon: Landmark,
      title: "South Bengal & Odisha",
      subtitle: "Culture, Terracotta & Coasts",
      places: "Purulia Ayodhya Hills • Bishnupur Terracotta Temples • Mukutmanipur • Shantiniketan • Sundarban Delta • Puri Jagannath • Chilika Lake • Konark Sun Temple",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "custom",
      icon: Compass,
      title: "Bhutan & Nepal",
      subtitle: "Kingdoms in the Clouds",
      places: "Thimphu • Paro Tiger's Nest • Punakha Dzong • Phobjikha Valley • Kathmandu Durbar Square • Pokhara Lake • Chitwan Jungle Safari • Nagarkot Sunrise",
      image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? destinations
      : destinations.filter((d) => d.category === activeCategory);

  return (
    <section className="py-20 bg-[#0B192C] border-b border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A96D] tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brochure Pages 7-10 • Custom Sector Index</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Places of Interest & Bespoke Circuits
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl font-light">
              Beyond our fixed departures, we craft tailor-made private tours, honeymoon journeys, and corporate retreats across all premier Indian & neighboring destinations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Sectors" },
              { id: "wildlife", label: "Wildlife" },
              { id: "himalayas", label: "Himalayas" },
              { id: "tribal", label: "North East" },
              { id: "heritage", label: "Heritage" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#C5A880] text-[#0B192C] font-semibold shadow-md"
                    : "bg-[#0B192C] text-[#94A3B8] hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#0B192C]/70 border border-[#C5A880]/20 rounded-2xl overflow-hidden hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0B192C]/80 backdrop-blur-sm border border-white/10 text-[10px] text-[#E0A96D] font-mono uppercase">
                    {item.subtitle}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors mb-2 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#E0A96D]" />
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-light leading-relaxed mb-4">
                      {item.places}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(item.title)}
                    className="pt-3 border-t border-white/10 text-xs font-semibold text-[#E0A96D] hover:text-white flex items-center justify-between group/btn transition-colors"
                  >
                    <span>Request Custom Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
