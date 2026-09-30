"use client";

import Link from "next/link";
import { Compass, Phone, MessageCircle, MapPin, ShieldCheck, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F7F9F7] border-t border-[#0F3B27]/15 text-[#0F3B27] relative z-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Grid in Soft White & Move Green */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0F3B27]/10">
          {/* Col 1 & 2: Brand & Affiliations */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5 group">
              <img
                src="/logo.png?v=2"
                alt="Rupkotha Travels"
                className="h-14 sm:h-16 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
            </Link>

            <p className="text-sm text-[#52796F] leading-relaxed mb-6 font-normal max-w-sm">
              Premier experiential tour operator based out of West Bengal, curating small-group fixed departures, high-altitude Himalayan road journeys, eco-forest safaris, and coastal getaways.
            </p>

            {/* Official Certification Card in Move Green */}
            <div className="p-5 rounded-2xl bg-[#0F3B27] text-white border border-[#92FF5F]/30 max-w-sm shadow-md">
              <div className="flex items-center gap-2 text-[#92FF5F] font-black text-xs mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Official Authorized Representative</span>
              </div>
              <p className="text-xs text-[#F7F9F7] font-medium leading-relaxed">
                Authorized Booking Agent for <strong className="text-white">Eco Tour Odisha</strong> & <strong className="text-white">Chhattisgarh Tourism</strong>.
              </p>
            </div>
          </div>

          {/* Col 3: Tour Categories */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#0F3B27] mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F3B27]" />
              <span>3 Tour Formats</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#52796F] font-semibold">
              <li>
                <Link href="/tour-categories" className="hover:text-[#0F3B27] transition-colors">
                  Type 1: Fixed Departures & Heritage
                </Link>
              </li>
              <li>
                <Link href="/tour-categories" className="hover:text-[#0F3B27] transition-colors">
                  Type 2: High-Altitude Expeditions
                </Link>
              </li>
              <li>
                <Link href="/tour-categories" className="hover:text-[#0F3B27] transition-colors">
                  Type 3: Eco-Forest & Coastal Waters
                </Link>
              </li>
              <li>
                <Link href="/customizable-circuits" className="hover:text-[#0F3B27] transition-colors">
                  Custom Ladakh (LAD 01–08)
                </Link>
              </li>
              <li>
                <Link href="/customizable-circuits" className="hover:text-[#0F3B27] transition-colors">
                  Andaman Aqua Paradise (AND 01–05)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#0F3B27] mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7036]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#52796F] font-semibold">
              <li>
                <Link href="/fixed-departures" className="hover:text-[#0F3B27] transition-colors">
                  13 Fixed Departure Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#0F3B27] transition-colors">
                  Destinations Directory (3 Zones)
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-[#0F3B27] transition-colors">
                  Inclusions & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0F3B27] transition-colors">
                  About Our Fleet & Ground Care
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-[#0F3B27] transition-colors text-[#0F3B27] font-black">
                  Online Booking Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Desk */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#0F3B27] mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#92FF5F] border border-[#0F3B27]" />
              <span>Direct Booking Desk</span>
            </h4>
            <div className="space-y-3 text-xs text-[#52796F] font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0F3B27] shrink-0 mt-0.5" />
                <span>Departures from Howrah, Sealdah & Kolkata Railway Stations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0F3B27] shrink-0" />
                <a href="tel:+919830012345" className="hover:text-[#0F3B27] font-bold">
                  +91 98300 12345
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#0F3B27] shrink-0" />
                <a
                  href="https://wa.me/919830012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F3B27] font-bold"
                >
                  WhatsApp Concierge
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#0F3B27] font-bold">
                <strong>Hours:</strong> Mon – Sat: 10:00 AM – 7:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52796F]">
          <div className="font-medium">
            © {new Date().getFullYear()} Rupkotha Travels (রূপকথা ট্রাভেলস). All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0F3B27]/15 hover:border-[#0F3B27] text-xs font-bold text-[#0F3B27] transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0F3B27]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
