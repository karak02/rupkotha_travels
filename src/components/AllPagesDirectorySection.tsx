"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Calendar,
  Sparkles,
  MapPin,
  ShieldCheck,
  Send,
  FileText,
  ArrowRight,
  Layers,
  Users,
  Trees,
  CheckCircle2,
} from "lucide-react";

interface PageSummaryCard {
  href: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Compass;
  stats: { label: string; value: string };
  highlights: string[];
  image: string;
  theme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
}

const ALL_PAGES_SUMMARY: PageSummaryCard[] = [
  {
    href: "/fixed-departures",
    number: "01",
    category: "Small Group Expeditions",
    title: "Fixed Departures 2026–2027",
    tagline: "Escorted Journeys with Confirmed Sleeper Train Berths",
    description:
      "13 meticulously curated small group departures departing directly from Howrah & Sealdah. Includes all meals, verified accommodations, local sightseeing transport, and veteran Bengali tour managers.",
    icon: Calendar,
    stats: { label: "Verified Packages", value: "13 Departures" },
    highlights: [
      "Sleeper train tickets included from Kolkata",
      "Daily 4-course authentic Bengali & Indian meals",
      "Small intimate batches (12–16 guests)",
    ],
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/25 hover:border-amber-400/60",
      badgeBg: "bg-[#060D17]",
      badgeText: "text-amber-400",
      accent: "#F59E0B",
    },
  },
  {
    href: "/customizable-circuits",
    number: "02",
    category: "Private Bespoke Travel",
    title: "Customizable Circuits",
    tagline: "Tailor-Made Private Itineraries for Families & Explorers",
    description:
      "Design your dream itinerary with complete date flexibility, private dedicated vehicles (Innova / Scorpio), customized meal plans, and handpicked boutique stays tailored to your pace.",
    icon: Compass,
    stats: { label: "Flexible Routes", value: "Custom Dates" },
    highlights: [
      "Private dedicated vehicle with chauffeur",
      "Curated boutique stays & heritage palaces",
      "Flexible pace with customized meal preferences",
    ],
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/25 hover:border-amber-400/60",
      badgeBg: "bg-amber-500/20",
      badgeText: "text-amber-300",
      accent: "#F59E0B",
    },
  },
  {
    href: "/tour-categories",
    number: "03",
    category: "Travel Styles & Formats",
    title: "Tour Categories & Pillars",
    tagline: "Explore Our Three Signature Travel Methodologies",
    description:
      "A structured overview of Rupkotha's three pillars: Type 01 (Fixed Escorted Group Departures), Type 02 (Tailor-Made Private Circuits), and Type 03 (Eco-Camp & Forest Sanctuaries).",
    icon: Layers,
    stats: { label: "Core Formats", value: "3 Travel Pillars" },
    highlights: [
      "Type 01: Escorted Small Group Fixed Departures",
      "Type 02: Private Tailor-Made Circuits",
      "Type 03: Eco-Camps & Tiger Reserves",
    ],
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/25 hover:border-amber-400/60",
      badgeBg: "bg-[#060D17]",
      badgeText: "text-amber-400",
      accent: "#F59E0B",
    },
  },
  {
    href: "/destinations",
    number: "04",
    category: "Geographic Footprint",
    title: "Destinations Directory",
    tagline: "Comprehensive 3-Zone Geographic Footprint",
    description:
      "Filter and discover all regions covered across Zone 1 (High Altitude Mountains & Borderlands), Zone 2 (Wildlife Reserves & Eco-Camps), and Zone 3 (Heritage Plains, Rivers & Coasts).",
    icon: MapPin,
    stats: { label: "Regional Zones", value: "3 Major Zones" },
    highlights: [
      "Zone 1: Ladakh, Kashmir, Sikkim, Bhutan & Nepal",
      "Zone 2: Eco-Odisha, Bastar, Kanha & Sundarbans",
      "Zone 3: Rajasthan, Kerala, Varanasi & Meghalaya",
    ],
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/25 hover:border-amber-400/60",
      badgeBg: "bg-[#060D17]",
      badgeText: "text-amber-400",
      accent: "#F59E0B",
    },
  },
  {
    href: "/about",
    number: "05",
    category: "Company & Philosophy",
    title: "About Rupkotha Travels",
    tagline: "Govt Authorized Agency, Ground Fleets & Heritage Care",
    description:
      "Learn about our authorization with Eco Tour Odisha and Chhattisgarh Tourism, our fleet logistics (Scorpio, Crysta, Tempo Travellers), our homely Bengali meal philosophy, and Kolkata lounge support.",
    icon: ShieldCheck,
    stats: { label: "Credentials", value: "Govt Authorized" },
    highlights: [
      "Authorized Agent for Eco Tour Odisha & Chhattisgarh",
      "Dedicated 4x4 & executive MUV fleet",
      "Homely hot Bengali & Indian meal assurance",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/25 hover:border-amber-400/60",
      badgeBg: "bg-[#060D17]",
      badgeText: "text-amber-400",
      accent: "#F59E0B",
    },
  },
  {
    href: "/booking",
    number: "06",
    category: "Reservation & Concierge",
    title: "Booking & Trip Planner",
    tagline: "Instant Booking Inquiries & Custom Route Planning",
    description:
      "Request a customized itinerary, submit booking inquiries with seat count and departure preferences, or connect directly with our Kolkata travel desk on WhatsApp and phone.",
    icon: Send,
    stats: { label: "Desk Support", value: "24/7 Concierge" },
    highlights: [
      "Interactive 2-minute trip planner tool",
      "Instant WhatsApp & Call booking support",
      "Clear payment milestones & booking confirmation",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/40 hover:border-amber-400",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      accent: "#F59E0B",
    },
  },
  {
    href: "/policies",
    number: "07",
    category: "Transparency & Care",
    title: "Policies & Terms of Service",
    tagline: "Transparent Cancellation, Luggage & Safety Guidelines",
    description:
      "Read our detailed terms covering cancellation slabs, train berth allocations, meal inclusion policies, infant/child discounts, and high-altitude health precautions.",
    icon: FileText,
    stats: { label: "Transparency", value: "100% Verified Terms" },
    highlights: [
      "Standard cancellation & refund timelines",
      "Railway berth & porterage policies",
      "Medical & high-altitude advisory guidelines",
    ],
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    theme: {
      bg: "bg-[#0B111E]/95",
      border: "border-amber-500/25 hover:border-amber-400/60",
      badgeBg: "bg-[#060D17]",
      badgeText: "text-amber-400",
      accent: "#F59E0B",
    },
  },
];

export default function AllPagesDirectorySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#060D17] text-[#F8F9FA] overflow-hidden">
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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Website Portals &amp; Guides</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore All Sections &amp; Guides
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl font-normal">
              Detailed tour schedules, customized circuits, fleet specs, and transparent booking policies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/tour-categories"
              className="inline-flex items-center gap-2 text-xs font-black text-amber-400 hover:text-amber-300 transition-all px-5 py-2.5 rounded-full bg-[#0B111E] border border-amber-500/30 hover:border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
            >
              <span>View All 7 Portals</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>

        {/* Grid of 3 Featured Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ALL_PAGES_SUMMARY.slice(0, 3).map((page, idx) => {
            return (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className={`rounded-3xl ${page.theme.bg} backdrop-blur-xl border ${page.theme.border} overflow-hidden flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 group`}
              >
                {/* Image Preview with Badges */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-[#0B111E]/40 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full ${page.theme.badgeBg} ${page.theme.badgeText} text-[10px] font-black border border-amber-500/30 shadow-md`}
                    >
                      Page {page.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#060D17]/85 backdrop-blur-md text-amber-300 text-[11px] font-black border border-white/10 shadow-md">
                      {page.stats.value}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 block mb-0.5">
                      {page.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {page.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs font-bold text-amber-400 mb-1.5">
                      {page.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {page.description}
                    </p>
                  </div>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-1.5 text-xs pt-3 border-t border-white/10">
                    {page.highlights.slice(0, 2).map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-1.5 text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400" />
                        <span className="line-clamp-1 text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Link Action */}
                  <div className="pt-3 border-t border-white/10">
                    <Link
                      href={page.href}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-between transition-all bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_4px_15px_rgba(245,158,11,0.25)]"
                    >
                      <span>Open {page.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
