"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Trees, Sparkles, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EcoTourismBannerStrip() {
  return (
    <div className="relative z-30 bg-[#0F3B27] border-b border-[#0F3B27] overflow-hidden">
      {/* Background Cinematic Eco-Tourism Image with Subtle Dark Green Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
          alt="Odisha and Chhattisgarh Eco Tourism"
          className="w-full h-full object-cover opacity-20 filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3B27] via-[#0F3B27]/90 to-[#0F3B27]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Trust Statement */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-xl bg-[#0F3B27] border border-[#92FF5F]/30 flex items-center justify-center text-[#92FF5F] shrink-0 shadow-sm">
            <Trees className="w-4 h-4 text-[#92FF5F]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#92FF5F]">
                OFFICIAL ECO-TOURISM PARTNER
              </span>
              <span className="text-[10px] text-white/50 hidden sm:inline">•</span>
              <span className="text-[11px] text-[#F7F9F7] font-medium hidden sm:inline">
                Satkosia Gorge • Debrigarh • Bastar Eco Camps • Chitrakote
              </span>
            </div>
            <p className="text-xs text-white/90 font-medium leading-tight">
              Direct Booking Agent for <strong className="text-[#92FF5F]">Eco Tour Odisha</strong> & <strong className="text-white">Chhattisgarh Tourism</strong>
            </p>
          </div>
        </div>

        {/* Right Action Pill */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/destinations?zone=zone2"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F3B27] border border-[#92FF5F]/30 text-[#F7F9F7] hover:text-white hover:border-[#92FF5F]/60 text-xs font-semibold transition-all shadow-sm group"
          >
            <span>Explore Eco Sanctuaries</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#92FF5F] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
