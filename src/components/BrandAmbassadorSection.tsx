"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Award, CheckCircle, ArrowRight, Phone, Building2, MapPin, Compass } from "lucide-react";
import Link from "next/link";

export default function BrandAmbassadorSection() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
      <div className="rounded-3xl border border-amber-500/40 p-5 sm:p-8 lg:p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative overflow-hidden bg-[#060D17]">
        {/* Photorealistic Generated Scenic Background - High Visibility */}
        <img
          src="/images/bengal_premier_travel_bg.jpg"
          alt="The Premier Escorted Travel Agency of Bengal"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] saturate-[1.1] pointer-events-none transition-transform duration-1000 hover:scale-105"
        />

        {/* Cinematic Soft Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D17]/85 via-[#060D17]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/80 via-transparent to-black/25 pointer-events-none" />

        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left: Govt Authorization & Brand Trust Card (Frosted Glass) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-[#060D17]/85 backdrop-blur-md border border-amber-500/35 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                      GOVT AUTHORIZED
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                      Official Tourism Partner
                    </h4>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#0B111E]/90 border border-amber-500/25 text-left">
                  <div className="flex items-center gap-2 text-amber-300 font-bold mb-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Eco Tour Odisha</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Authorized Booking Counter &amp; Forest Camp Fleets</p>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0B111E]/90 border border-amber-500/25 text-left">
                  <div className="flex items-center gap-2 text-amber-300 font-bold mb-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Chhattisgarh Tourism</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Certified Heritage &amp; Bastar Tribal Circuit Partner</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-amber-300">
                <span>10+ Years in Kolkata</span>
                <span className="font-bold text-white uppercase tracking-wider">100% Escorted</span>
              </div>
            </div>
          </div>

          {/* Right: Heritage Travel Philosophy & Trust Guarantees (Frosted Glass Panel) */}
          <div className="lg:col-span-8 p-5 sm:p-7 rounded-3xl bg-[#060D17]/80 backdrop-blur-md border border-white/15 shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>The Premier Escorted Travel Agency of Bengal</span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug drop-shadow-md">
              &ldquo;Travel should be as warm as returning home, yet as thrilling as a new discovery.&rdquo;
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal drop-shadow-sm">
              For over a decade, Rupkotha Travels has set the benchmark for leisurely exploration across India. From confirmed sleeper train and flight berths departing directly from Howrah and Sealdah to freshly prepared Bengali meals and experienced tour directors, every departure is managed with unmatched dedication.
            </p>

            {/* 3 Core Trust Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-[#0B111E]/90 border border-amber-500/20 shadow-md">
                <CheckCircle className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs font-bold text-white block">Sleeper Berths Included</span>
                <span className="text-[11px] text-slate-300">Howrah &amp; Sealdah departures</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#0B111E]/90 border border-amber-500/20 shadow-md">
                <CheckCircle className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs font-bold text-white block">Daily 4-Course Meals</span>
                <span className="text-[11px] text-slate-300">Homely hot Veg &amp; Non-Veg</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#0B111E]/90 border border-amber-500/20 shadow-md">
                <CheckCircle className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-xs font-bold text-white block">Kolkata Tour Directors</span>
                <span className="text-[11px] text-slate-300">End-to-end station escort</span>
              </div>
            </div>

            {/* CTA and Call Desk */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/fixed-departures"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] group"
              >
                <span>Explore 2026–2027 Tours</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919830012345"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#060D17] hover:bg-[#0B111E] border border-amber-500/30 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Lounge: +91 98300 12345</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
