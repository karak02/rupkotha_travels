"use client";

import {
  ShieldCheck,
  Utensils,
  Users,
  Building2,
  Headphones,
  Award,
  Sparkles,
  Mountain,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import CardFanCarousel, { CardFanItem } from "@/components/ui/card-fan-carousel";

export default function WhyChooseUsGoEverywhere() {
  const standards: CardFanItem[] = [
    {
      id: "std-01",
      badge: "Kolkata Escorts",
      tagline: "Personalized Care",
      title: "Expert Bengali Tour Directors",
      subtitle: "Veteran multilingual directors manage luggage, berths, stays, and meals with genuine warmth.",
      icon: Users,
      imgUrl: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "std-02",
      badge: "100% Meal Care",
      tagline: "Homely Dining",
      title: "Daily Bengali & Indian Feasts",
      subtitle: "Hot bed tea, breakfast, and 4 multi-course meals prepared by traveling Kolkata chefs.",
      icon: Utensils,
      imgUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "std-03",
      badge: "Verified Stays",
      tagline: "Handpicked Luxury",
      title: "Heritage Palaces & 4★/5★ Stays",
      subtitle: "Zero substandard transit hotels. Relax in royal palaces, mountain chalets, and luxury tea estates.",
      icon: Building2,
      imgUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "std-04",
      badge: "Govt Partner",
      tagline: "Official Bonded",
      title: "Authorized Tourism Agent",
      subtitle: "Official authorized partner for Eco Tour Odisha & Chhattisgarh with verified train/flight quotas.",
      icon: ShieldCheck,
      imgUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "std-05",
      badge: "Zero Cancellations",
      tagline: "Guaranteed Dates",
      title: "100% Locked Departures",
      subtitle: "Confirmed railway berths & flights from Howrah/Sealdah with no surprise date rollbacks.",
      icon: Clock,
      imgUrl: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "std-06",
      badge: "High Passes",
      tagline: "Safety First",
      title: "Dedicated 4x4 Mountain Fleets",
      subtitle: "Oxygen cylinders, medical kits, and expert hill drivers across Spiti, Ladakh, and Zanskar.",
      icon: Mountain,
      imgUrl: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "std-07",
      badge: "24/7 Desk",
      tagline: "Round The Clock",
      title: "Personal Concierge & Assistance",
      subtitle: "Wheelchair assistance, visa support, and family coordination from our Kolkata lounge.",
      icon: Headphones,
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-3 shadow-md">
          <Award className="w-3.5 h-3.5" />
          <span>Why Choose Rupkotha Travels</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#0F3B27] tracking-tight">
          The Gold Standard of Escorted Holidays
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#52796F] font-normal leading-relaxed">
          Inspired by Bengal’s grand tradition of leisurely exploration, our 7 verified standards guarantee zero hidden charges, premium accommodations, and personalized family care.
        </p>
      </div>

      {/* 3D Fan Carousel Canvas */}
      <CardFanCarousel cards={standards} />

      {/* Bottom Action Footer */}
      <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-[#144D34] transition-all shadow-lg"
        >
          <span>Learn Our Escorted Story</span>
          <ArrowRight className="w-4 h-4 text-[#FF7036]" />
        </Link>
        <Link
          href="/fixed-departures"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0F3B27] text-xs sm:text-sm font-bold border border-[#0F3B27]/20 hover:bg-[#F7F9F7] transition-all shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-[#FF7036]" />
          <span>View 13 Fixed Departures</span>
        </Link>
      </div>
    </section>
  );
}
