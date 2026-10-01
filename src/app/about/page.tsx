"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Truck, Utensils, HeartHandshake, CheckCircle2, ArrowRight, Sparkles, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fleet = [
    { name: "Scorpio / Bolero", capacity: "6 to 7 Guests / Vehicle", desc: "Rugged 4x4 & MUV handling for high-altitude mountain passes & forest terrains." },
    { name: "Innova / Crysta / Xylo", capacity: "6 Guests / Vehicle", desc: "High-comfort executive cruising for long-distance heritage & coastal circuits." },
    { name: "13-Seater Tempo Traveller", capacity: "9 to 10 Guests", desc: "Spacious window-seat configuration for small family and group fixed departures." },
    { name: "17-Seater Tempo Traveller", capacity: "12 to 14 Guests", desc: "Escorted group touring with dedicated luggage carriers and extra legroom." },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Authorized Govt Tourism Agent",
      desc: "Officially recognized authorized agent for Eco Tour Odisha and Chhattisgarh Tourism, connecting you to certified eco-camps and tribal sanctuaries.",
      bg: "bg-white border-slate-200/80 text-[#0B192C]",
      iconBg: "bg-[#0B192C] text-amber-400",
    },
    {
      icon: Truck,
      title: "Dedicated Ground Fleet",
      desc: "Hand-picked reliable local fleets with veteran Himalayan & forest drivers experienced in navigating rugged terrains safely.",
      bg: "bg-white border-slate-200/80 text-[#0B192C]",
      iconBg: "bg-[#0B192C] text-amber-400",
    },
    {
      icon: Utensils,
      title: "Homely Bengali & Indian Meals",
      desc: "Daily bed tea, hearty breakfast, 2 full hot meals (veg & non-veg options), and evening high tea prepared with freshness and love.",
      bg: "bg-amber-500/10 border-amber-500/30 text-[#0B192C]",
      iconBg: "bg-amber-500 text-[#0B192C]",
    },
    {
      icon: HeartHandshake,
      title: "Station Porterage & Escorts",
      desc: "End-to-end assistance from Howrah, Sealdah, and Kolkata railway stations with dedicated luggage porters and Bengali tour managers.",
      bg: "bg-[#0B192C] text-white border-amber-500/30",
      iconBg: "bg-amber-400 text-[#0B192C]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0B192C] selection:bg-[#F59E0B] selection:text-[#0B192C]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 pb-16 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider mb-6 border border-amber-500/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Curated Experiential Journeys Since Inception</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0B192C] tracking-tight leading-[1.1]">
            About <span className="text-amber-500 underline decoration-amber-400 decoration-4">Rupkotha Travels</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Connecting conscious travelers from Bengal to the wildest peaks, mystical valleys, raw forest habitats, and pristine coasts of India, Bhutan, and Nepal.
          </p>
        </motion.div>
      </section>

      {/* Who We Are & Official Certifications Bento */}
      <section className="py-8 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Box in Soft White */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 uppercase tracking-wider mb-4 inline-block">
                Who We Are
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B192C] mb-6">
                Rooted in Bengal, Dedicated to the Open Road.
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#0B192C]">Rupkotha Travels (রূপকথা ট্রাভেলস)</strong> is an experiential tour and travel operator based out of West Bengal. We specialize in small-group fixed departures, bespoke high-altitude Himalayan road journeys, eco-wildlife explorations, and tropical island holidays.
                </p>
                <p>
                  We believe that travel is not just about ticking off checklist monuments; it is about early morning prayers in misty gompas, tracking royal Bengal tigers across core sal forests, sharing stories over hot chai by high glacial lakes, and experiencing vibrant tribal traditions firsthand.
                </p>
                <p>
                  Every tour departing from Kolkata is orchestrated with rigorous logistical precision: pre-reserved sleeper train seats, verified local hotel rooms, comfortable SUVs/Tempo Travellers, and our signature homely 4-meal daily catering.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-[#0B192C] font-bold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Small Group Ethics
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Transparent Pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Bengali Tour Managers
              </span>
            </div>
          </motion.div>

          {/* Official Affiliation Box in Midnight Obsidian */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl bg-[#0B192C] text-white border border-amber-500/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold mb-6 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-2">
                Government Accreditations
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Official Authorized Agent
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                We are proud to serve as the recognized, authorized booking and logistical agent for:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#0B111E] border border-amber-500/30 shadow-md">
                  <div className="font-bold text-sm text-amber-400 mb-1">
                    🌿 Eco Tour Odisha
                  </div>
                  <div className="text-xs text-slate-300">
                    Direct bookings for Debrigarh Nature Camp, Satkosia Sand Resort, Similipal, and Chilika eco-cottages.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B111E] border border-amber-500/30 shadow-md">
                  <div className="font-bold text-sm text-amber-400 mb-1">
                    🏛️ Chhattisgarh Tourism Board
                  </div>
                  <div className="text-xs text-slate-300">
                    Authorized representative for Bastar tribal circuits, Chitrakote & Tirathgarh waterfalls, and Kanger Valley.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 relative z-10">
              <Link
                href="/booking"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B192C] font-black text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
              >
                <span>Plan Your Next Journey</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Travel With Rupkotha 4 Pillars */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
            Why Travel With Us?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Four core commitments that define every single Rupkotha departure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-7 rounded-3xl border ${p.bg} flex flex-col justify-between shadow-md hover:shadow-xl transition-all`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${p.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-85 font-normal">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Fleet & Ground Logistics Section in Midnight Obsidian */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto mb-16">
        <div className="rounded-3xl bg-[#0B192C] text-white border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10 relative z-10">
            <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider mb-3 inline-block">
              Fleet Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Dedicated Ground Fleet
            </h2>
            <p className="mt-2 text-sm text-slate-300 font-normal">
              We never cut corners on vehicle safety or guest spacing. Every vehicle has verified permits, roof carriers, and experienced mountain/jungle drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {fleet.map((item) => (
              <div key={item.name} className="p-6 rounded-2xl bg-[#0B111E] border border-amber-500/20 flex flex-col justify-between shadow-lg hover:border-amber-500/40 transition-all">
                <div>
                  <div className="text-xs font-black text-amber-400 uppercase tracking-wider mb-1">
                    {item.capacity}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Voice & Authority Answer Block */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto mb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Rupkotha Travels Kolkata",
              "description":
                "Official credentials, agency history, fleet standards, and eco-tourism authorizations for Rupkotha Travels.",
              "url": "https://rupkothatravels.com/about",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rupkothatravels.com/" },
                  { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://rupkothatravels.com/about" },
                ],
              },
              "mainEntity": {
                "@type": "TravelAgency",
                "name": "Rupkotha Travels",
                "founder": {
                  "@type": "Person",
                  "name": "Tour Director Team",
                  "jobTitle": "Himalayan & Forest Expedition Leaders",
                },
                "knowsAbout": [
                  "Eco Tour Odisha",
                  "Chhattisgarh Tourism",
                  "Himalayan 4x4 Expeditions",
                  "Howrah Sealdah Fixed Group Departures",
                ],
              },
            }),
          }}
        />

        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-xl aeo-answer-block">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-600 border border-amber-500/30 uppercase tracking-wider mb-3 inline-block">
            Quick Agency Factsheet (AEO Summary)
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0B192C] mb-3">
            Who is Rupkotha Travels and What are Their Credentials?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal voice-answer-summary">
            Rupkotha Travels is an experiential tour company headquartered in Kolkata, West Bengal. They are an official authorized agent for Eco Tour Odisha and Chhattisgarh Tourism, providing confirmed Sleeper train seats from Howrah and Sealdah, dedicated MUV fleets, and 4-course daily Bengali and Indian meals on all fixed departures.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
