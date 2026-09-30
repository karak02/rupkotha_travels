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
      bg: "bg-white",
      border: "border-[#0F3B27]/15 hover:border-[#0F3B27]/40",
      badgeBg: "bg-[#0F3B27]",
      badgeText: "text-[#92FF5F]",
      accent: "#FF7036",
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
      bg: "bg-[#F7F9F7]",
      border: "border-[#0F3B27]/15 hover:border-[#0F3B27]/40",
      badgeBg: "bg-[#FF7036]",
      badgeText: "text-white",
      accent: "#0F3B27",
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
      bg: "bg-[#F7F9F7]/40",
      border: "border-[#0F3B27]/15 hover:border-[#0F3B27]/40",
      badgeBg: "bg-[#0F3B27]",
      badgeText: "text-[#92FF5F]",
      accent: "#FF7036",
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
      bg: "bg-[#92FF5F]/40",
      border: "border-[#0F3B27]/15 hover:border-[#0F3B27]/40",
      badgeBg: "bg-[#0F3B27]",
      badgeText: "text-[#92FF5F]",
      accent: "#FF7036",
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
      bg: "bg-white",
      border: "border-[#0F3B27]/15 hover:border-[#0F3B27]/40",
      badgeBg: "bg-[#0F3B27]",
      badgeText: "text-[#92FF5F]",
      accent: "#FF7036",
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
      bg: "bg-[#0F3B27] text-white",
      border: "border-[#92FF5F]/30 hover:border-[#92FF5F]/60",
      badgeBg: "bg-[#92FF5F]",
      badgeText: "text-[#0F3B27]",
      accent: "#92FF5F",
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
      bg: "bg-white",
      border: "border-[#0F3B27]/15 hover:border-[#0F3B27]/40",
      badgeBg: "bg-[#0F3B27]",
      badgeText: "text-[#92FF5F]",
      accent: "#FF7036",
    },
  },
];

export default function AllPagesDirectorySection() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F3B27] text-[#92FF5F] text-[11px] font-black uppercase tracking-wider mb-2 shadow-md">
            <Sparkles className="w-3 h-3" />
            <span>Website Portals &amp; Guides</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-extrabold text-[#0F3B27] tracking-tight">
            Explore All Sections &amp; Guides
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#52796F] max-w-2xl font-normal">
            Detailed tour schedules, customized circuits, fleet specs, and transparent booking policies.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/tour-categories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3B27] hover:text-[#195237] transition-colors px-3.5 py-1.5 rounded-xl bg-white border border-[#0F3B27]/15 shadow-xs"
          >
            <span>View All 7 Portals</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF7036]" />
          </Link>
        </div>
      </div>

      {/* Grid of 3 Featured Pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {ALL_PAGES_SUMMARY.slice(0, 3).map((page, idx) => {
          const Icon = page.icon;
          const isDark = page.href === "/booking";

          return (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className={`rounded-2xl ${page.theme.bg} border ${page.theme.border} overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Image Preview with Badges */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? "from-[#0F3B27] via-[#0F3B27]/60 to-transparent"
                      : "from-[#0F3B27]/85 via-[#0F3B27]/30 to-transparent"
                  }`}
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full ${page.theme.badgeBg} ${page.theme.badgeText} text-[10px] font-black shadow-md`}
                  >
                    Page {page.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[#0F3B27] text-[11px] font-bold shadow-md">
                    {page.stats.value}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#92FF5F] block">
                    {page.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#92FF5F] transition-colors leading-snug">
                    {page.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <p
                    className={`text-[11px] font-semibold ${
                      isDark ? "text-[#92FF5F]" : "text-[#FF7036]"
                    } mb-1`}
                  >
                    {page.tagline}
                  </p>
                  <p
                    className={`text-xs ${
                      isDark ? "text-white/80" : "text-[#52796F]"
                    } leading-relaxed line-clamp-2`}
                  >
                    {page.description}
                  </p>
                </div>

                {/* Key Highlights Bullet points */}
                <div className="space-y-1 text-xs">
                  {page.highlights.slice(0, 2).map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className={`flex items-start gap-1.5 ${
                        isDark ? "text-white/90" : "text-[#0F3B27]"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isDark ? "text-[#92FF5F]" : "text-[#195237]"
                        }`}
                      />
                      <span className="line-clamp-1 text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Link Action */}
                <div className="pt-2 border-t border-[#0F3B27]/10">
                  <Link
                    href={page.href}
                    className={`w-full py-2 px-3.5 rounded-xl text-xs font-black flex items-center justify-between transition-all ${
                      isDark
                        ? "bg-[#92FF5F] text-[#0F3B27] hover:bg-[#92FF5F]"
                        : "bg-[#0F3B27] text-white hover:bg-[#195237]"
                    }`}
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
    </section>
  );
}
