"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Compass, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenEnquiry?: (packageTitle?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour Categories", href: "/tour-categories" },
    { name: "Fixed Departures", href: "/fixed-departures", badge: "13 Tours" },
    { name: "Custom Circuits", href: "/customizable-circuits" },
    { name: "Destinations", href: "/destinations" },
    { name: "Policies", href: "/policies" },
  ];

  return (
    <>
      {/* Top Announcement Bar - Clean, Single-Line Deep Forest Green */}
      <div className="bg-[#0F3B27] text-[#F7F9F7] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-[#0F3B27] relative z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 whitespace-nowrap overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0F3B27] border border-[#92FF5F]/30 text-[#92FF5F] font-bold text-[10px] sm:text-[11px] uppercase tracking-wide">
              <ShieldCheck className="w-3 h-3 text-[#92FF5F]" />
              Official Agent
            </span>
            <span className="text-white/90 font-normal hidden md:inline text-[11px] sm:text-xs">
              Authorized Partner for{" "}
              <strong className="text-[#92FF5F] font-semibold">Eco Tour Odisha</strong>{" "}
              &{" "}
              <strong className="text-white font-semibold">Chhattisgarh Tourism</strong>
            </span>
            <span className="text-[#52796F] hidden xl:inline text-[11px]">
              • Howrah, Sealdah & Kolkata
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 font-medium shrink-0 ml-auto text-[11px] sm:text-xs">
            <a
              href="tel:+919830012345"
              className="flex items-center gap-1 text-[#F7F9F7] hover:text-[#92FF5F] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#92FF5F]" />
              <span className="hidden sm:inline font-mono">+91 98300 12345</span>
              <span className="sm:hidden font-mono">Call</span>
            </a>
            <span className="text-[#0F3B27]">|</span>
            <a
              href="https://wa.me/919830012345?text=Hello%20Rupkotha%20Travels,%20I%20would%20like%20to%20inquire%20about%20upcoming%20nature%20and%20eco-tourism%20tours."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#92FF5F] hover:text-white transition-colors font-semibold"
            >
              <MessageCircle className="w-3 h-3 fill-[#92FF5F]/20" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Warm Ivory (#F7F9F7) with Decreased Text & 1-Line Flow */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F9F7]/95 backdrop-blur-md py-2.5 border-b border-[#0F3B27]/10 shadow-[0_4px_16px_-4px_rgba(15,59,39,0.06)]"
            : "bg-[#F7F9F7] py-3 border-b border-[#0F3B27]/8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <img
              src="/logo.png?v=2"
              alt="Rupkotha Travels"
              className="h-10 sm:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links - Decreased text size, strictly single-line from lg up */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-[13px] font-semibold text-[#0F3B27] whitespace-nowrap">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 px-2 xl:px-2.5 rounded-lg transition-all duration-150 flex items-center gap-1 xl:gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "text-[#0F3B27] font-bold bg-[#F7F9F7] shadow-xs"
                      : "text-[#0F3B27]/85 hover:text-[#0F3B27] hover:bg-[#F7F9F7]/60"
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Refined Integrated Badge */}
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#FF7036] text-white font-mono font-bold tracking-tight shadow-xs leading-none">
                      {link.badge}
                    </span>
                  )}

                  {/* Subtle Dark-Green Bottom Accent for Active State */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBottomAccent"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#0F3B27] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Focal Primary CTA: Book Journey ↗ */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/booking"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold text-[#0F3B27] bg-[#92FF5F] hover:bg-[#7ce648] hover:shadow-[0_4px_14px_rgba(146,255,95,0.35)] hover:scale-102 active:scale-98 transition-all border border-[#0F3B27]/15 shadow-xs whitespace-nowrap group"
            >
              <span>Book Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#0F3B27] text-white hover:bg-[#0F3B27] transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#92FF5F]" />
              ) : (
                <Menu className="w-5 h-5 text-[#92FF5F]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#F7F9F7] border-b border-[#0F3B27]/15 px-4 pt-3 pb-5 space-y-1.5 sticky top-[57px] z-30 shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#F7F9F7] text-[#0F3B27] border-l-4 border-[#0F3B27]"
                      : "text-[#0F3B27] hover:bg-[#F7F9F7]/50"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF7036] text-white font-mono font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-1.5 border-t border-[#0F3B27]/10">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-[#92FF5F] text-[#0F3B27] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Book Journey</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
