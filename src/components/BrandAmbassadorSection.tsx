"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Quote, Award, CheckCircle, ArrowRight, Play, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function BrandAmbassadorSection() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
      <div className="rounded-3xl bg-gradient-to-br from-[#0F3B27] via-[#0F3B27] to-[#0F3B27] border border-[#92FF5F]/30 p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
        {/* Background Subtle Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#92FF5F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7036]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left: Ambassador Portrait & Credentials */}
          <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative w-44 h-52 sm:w-52 sm:h-60 rounded-2xl overflow-hidden border-2 border-[#92FF5F]/40 shadow-[0_12px_30px_rgba(0,0,0,0.5)] group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Travel Icon & Brand Ambassador"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#92FF5F] block mb-0.5">
                  TRAVEL ICON &amp; AMBASSADOR
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                  Shouvik Sen
                </h4>
                <p className="text-[11px] text-[#F7F9F7] leading-tight mt-0.5">
                  Acclaimed Bengali Explorer
                </p>
              </div>
            </div>

            {/* Google Rating Trust Badge */}
            <div className="mt-3.5 flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#0F3B27]/90 border border-white/10 shadow-md">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[11px] font-mono font-bold text-white">
                4.9 / 5.0 (1,450+ Reviews)
              </span>
            </div>
          </div>

          {/* Right: Endorsement Quote & Value Proposition */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] text-[11px] font-black uppercase tracking-wider shadow-md">
              <Award className="w-3 h-3" />
              <span>The Premier Travel Agency of Bengal</span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
              &ldquo;Travel should be as warm as returning home, yet as thrilling as a new discovery.&rdquo;
            </h2>

            <p className="text-xs sm:text-sm text-[#F7F9F7] leading-relaxed font-normal">
              &ldquo;For over a decade, Rupkotha Travels has set the benchmark for escorted holidays. From confirmed train and flight berths from Kolkata to hot home-style meals and respectful tour directors, every detail is orchestrated with care.&rdquo;
            </p>

            {/* 3 Core Trust Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 rounded-xl bg-[#0F3B27]/60 border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#92FF5F] mb-1" />
                <span className="text-[11px] font-bold text-white block">Sleeper Berths Included</span>
                <span className="text-[10px] text-white/60">Howrah &amp; Sealdah</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0F3B27]/60 border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF7036] mb-1" />
                <span className="text-[11px] font-bold text-white block">Daily 4-Course Meals</span>
                <span className="text-[10px] text-white/60">Homely Veg &amp; Non-Veg</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0F3B27]/60 border border-white/10">
                <CheckCircle className="w-3.5 h-3.5 text-[#92FF5F] mb-1" />
                <span className="text-[11px] font-bold text-white block">Kolkata Tour Managers</span>
                <span className="text-[10px] text-white/60">End-to-end guidance</span>
              </div>
            </div>

            {/* CTA and Call Desk */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/fixed-departures"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#92FF5F] text-[#0F3B27] font-black text-xs uppercase tracking-wider hover:bg-[#92FF5F] transition-all shadow-[0_0_20px_rgba(146,255,95,0.3)] group"
              >
                <span>Explore 2026–2027 Tours</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919830012345"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3 h-3 text-[#FF7036]" />
                <span>Call Lounge: +91 98300 12345</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
