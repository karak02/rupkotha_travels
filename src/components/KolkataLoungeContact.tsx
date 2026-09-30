"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface ContactProps {
  onSuccessSubmit: (msg: string) => void;
}

export default function KolkataLoungeContact({ onSuccessSubmit }: ContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Europe & Alps");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccessSubmit(
        `Thank you ${name}! Your bespoke itinerary request for ${destination} has been received. Our Kolkata Travel Designer will prepare a customized proposal and contact you at ${phone}.`
      );
      setName("");
      setPhone("");
      setNotes("");
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#060D17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office & Lounge Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A96D] tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit Our Private Travel Lounge</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Plan Over Darjeeling First-Flush Tea
              </h2>
              <p className="text-[#94A3B8] text-sm mt-3 font-light leading-relaxed">
                Step into our Kolkata lounges for unhurried, personalized itinerary curation. Our senior travel designers and visa counselors will map out every detail of your dream vacation.
              </p>
            </div>

            {/* Location Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#0B192C] border border-[#C5A880]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#E0A96D] font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Flagship Lounge – Salt Lake City</span>
                </div>
                <p className="text-xs text-[#F8F9FA]/80 leading-relaxed font-light">
                  Infinity Benchmark, 12th Floor, Plot G1, Block EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal 700091
                </p>
                <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A880]" /> Mon–Sat: 10:00 AM – 7:30 PM
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#E0A96D] font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>South Kolkata Heritage Studio</span>
                </div>
                <p className="text-xs text-[#F8F9FA]/80 leading-relaxed font-light">
                  Southern Avenue (Near Lake Stadium), Kolkata 700029
                </p>
                <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A880]" /> Mon–Sun: 11:00 AM – 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919830012345"
                className="flex-1 p-3.5 rounded-xl bg-[#1E3E62]/40 border border-[#C5A880]/30 text-white hover:bg-[#1E3E62] transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-[#E0A96D]" />
                <span>+91 98300 12345</span>
              </a>

              <a
                href="https://wa.me/919830012345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 rounded-xl bg-emerald-800/40 border border-emerald-500/30 text-white hover:bg-emerald-700/60 transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp VIP Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Trip Request Form */}
          <div className="lg:col-span-7 bg-[#0B192C] border border-[#C5A880]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Request A Customized Itinerary
              </h3>
              <p className="text-xs text-[#94A3B8] font-light">
                Tell us your dream destinations, preferred dates, and travel pace — our team will craft a bespoke proposal with exact transparent costing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Joydeep Ghosh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98300 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Dream Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Europe & Swiss Alps">Europe & Swiss Alps</option>
                    <option value="Scandinavia & Northern Lights">Scandinavia & Northern Lights</option>
                    <option value="Silk Route & Central Asia">Silk Route & Central Asia</option>
                    <option value="Japan Cherry Blossom">Japan Cherry Blossom</option>
                    <option value="Royal Rajasthan Heritage">Royal Rajasthan Heritage</option>
                    <option value="Exotic Bali & Komodo">Exotic Bali & Komodo</option>
                    <option value="Custom Multi-Country Expedition">Custom Multi-Country Expedition</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Party Size</label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Couple (2 Travelers)">Couple (2 Travelers)</option>
                    <option value="Family (3-5 Travelers)">Family (3-5 Travelers)</option>
                    <option value="Private Group (6+ Travelers)">Private Group (6+ Travelers)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#C5A880]">Special Preferences / Dates / Requirements</label>
                <textarea
                  rows={3}
                  placeholder="e.g. We are celebrating our 25th anniversary in Switzerland, prefer vegetarian meals and direct flights from Kolkata..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full font-bold text-sm text-[#0B192C] bg-gradient-to-r from-[#F5E6CA] via-[#C5A880] to-[#E0A96D] hover:scale-101 active:scale-99 transition-all shadow-xl shadow-[#C5A880]/20 flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Sending Request..." : "Request Bespoke Itinerary & Quote"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
