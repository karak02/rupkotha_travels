"use client";

import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Train,
  Hotel,
  Utensils,
  Download,
  Phone,
  MessageCircle,
  Sparkles,
  Calculator,
  AlertCircle,
} from "lucide-react";
import { TourPackage } from "./FeaturedPackages";

interface TourModalProps {
  packageData: TourPackage | null;
  onClose: () => void;
  onSuccessSubmit: (msg: string) => void;
}

export default function TourModal({
  packageData,
  onClose,
  onSuccessSubmit,
}: TourModalProps) {
  const [activeTab, setActiveTab] = useState<"itinerary" | "inclusions" | "pricing" | "book">("itinerary");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [adultCount, setAdultCount] = useState(2);
  const [extraCount, setExtraCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [addAcTrain, setAddAcTrain] = useState(false);
  const [addAcRoom, setAddAcRoom] = useState(false);
  const [addExclusiveCar, setAddExclusiveCar] = useState(false);
  const [departureDate, setDepartureDate] = useState(
    packageData?.allDates[0] || ""
  );
  const [submitting, setSubmitting] = useState(false);

  if (!packageData) return null;

  // Calculation based on PDF rates
  const twinCost = adultCount * packageData.twinRate;
  const extraCost = extraCount * packageData.extraRate;
  const childCost = childCount * (packageData.childRate || Math.round(packageData.twinRate * 0.65));
  const addOnsCost = (addAcTrain ? (adultCount + extraCount) * 2500 : 0) +
                     (addAcRoom ? (adultCount + extraCount) * 2000 : 0) +
                     (addExclusiveCar ? 12000 : 0);
  const subtotal = twinCost + extraCost + childCost + addOnsCost;
  const gstAmount = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gstAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccessSubmit(
        `Thank you ${name}! Your booking enquiry for ${packageData.title} (${departureDate}) for ${adultCount} adults (Est. Total ₹${grandTotal.toLocaleString("en-IN")}) has been confirmed. Our Kolkata Senior Tour Director will contact you at ${phone} shortly.`
      );
      onClose();
    }, 800);
  };

  const whatsAppText = `Hello Rupkotha Travels, I would like to book the following package:
- Package: ${packageData.title}
- Preferred Date: ${departureDate}
- Adults: ${adultCount} (Twin Sharing)
- Extra Persons: ${extraCount}
- Children: ${childCount}
- Estimated Total: ₹${grandTotal.toLocaleString("en-IN")} (incl. 5% GST)
Please confirm availability and booking formalities.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0B192C] border border-[#C5A880]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header Banner */}
        <div className="relative h-48 sm:h-56 w-full shrink-0">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/60 to-black/60" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#C5A880] border border-white/20 transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Info over banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs text-[#E0A96D] font-medium mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{packageData.countries}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {packageData.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/90 mt-2">
              <span className="flex items-center gap-1 text-[#C5A880] font-medium">
                <Clock className="w-3.5 h-3.5" /> {packageData.duration}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#E0A96D] font-medium">
                <Calendar className="w-3.5 h-3.5" /> Next DOJ: {packageData.nextDeparture}
              </span>
              <span>•</span>
              <span className="font-bold text-[#F5E6CA] text-sm">
                ₹{packageData.twinRate.toLocaleString("en-IN")} / Person (Twin Sharing)
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#060D17]/90 px-6 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab("itinerary")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
              activeTab === "itinerary"
                ? "border-[#C5A880] text-[#E0A96D]"
                : "border-transparent text-[#94A3B8] hover:text-white"
            }`}
          >
            Day-by-Day Itinerary
          </button>
          <button
            onClick={() => setActiveTab("inclusions")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
              activeTab === "inclusions"
                ? "border-[#C5A880] text-[#E0A96D]"
                : "border-transparent text-[#94A3B8] hover:text-white"
            }`}
          >
            Inclusions & Policy
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
              activeTab === "pricing"
                ? "border-[#C5A880] text-[#E0A96D]"
                : "border-transparent text-[#94A3B8] hover:text-white"
            }`}
          >
            Cost Estimator (with 5% GST)
          </button>
          <button
            onClick={() => setActiveTab("book")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
              activeTab === "book"
                ? "border-[#C5A880] text-[#E0A96D]"
                : "border-transparent text-[#94A3B8] hover:text-white"
            }`}
          >
            Instant Booking & Inquiry
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === "itinerary" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#060D17]/80 border border-[#C5A880]/30 text-xs">
                <span className="font-bold text-[#E0A96D] block mb-1">Covering Sightseeing Places:</span>
                <p className="text-white/80 leading-relaxed font-light">{packageData.coveringPlaces}</p>
                <span className="font-semibold text-[#C5A880] block mt-2">🏨 Night Stay Breakdown: {packageData.nightStay}</span>
              </div>

              <div className="space-y-3">
                {packageData.itinerary.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#060D17]/60 border border-white/10 hover:border-[#C5A880]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1E3E62] text-[#E0A96D] font-mono text-xs font-bold">
                        {item.day}
                      </span>
                      <h4 className="font-serif font-bold text-white text-base">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[#F8F9FA]/80 font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "inclusions" && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#E0A96D]" />
                  What is Included (From Official PDF Specs)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packageData.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060D17]/50 border border-white/10 text-xs sm:text-sm text-white/90"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060D17] border border-white/10 space-y-3">
                <h4 className="font-bold text-[#E0A96D] text-xs uppercase tracking-wider">
                  Cancellation Policy (Strictly as per PDF)
                </h4>
                <ul className="text-xs text-white/80 space-y-1.5 font-light">
                  <li>• Less than 60 days before journey: <strong>10% of the total price</strong></li>
                  <li>• Less than 45 days before journey: <strong>30% of the total price</strong></li>
                  <li>• Less than 30 days before journey: <strong>40% of the total price</strong></li>
                  <li>• Less than 15 days before journey: <strong>60% of the total price</strong></li>
                  <li>• Less than 07 days before journey: <strong>No refund will be made</strong></li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#1E3E62]/30 border border-[#C5A880]/30 space-y-2">
                <div className="flex items-center gap-2 text-[#E0A96D] text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>The Rupkotha Assurance</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Train tickets from Sealdah / Howrah in 3-Tier Sleeper Class, double/triple bedded rooms, 4 daily meals (bed tea, breakfast, two major meals & high tea with vegetarian/non-vegetarian Bengali dishes), dedicated escort & porter from start to finish.
                </p>
              </div>
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#060D17] border border-[#C5A880]/40 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-[#E0A96D] font-bold text-sm">
                    <Calculator className="w-4 h-4" />
                    <span>Transparent Cost Calculator (PDF Rates)</span>
                  </div>
                  <span className="text-xs text-[#94A3B8] font-mono">+ 5% Govt. GST</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Adults */}
                  <div className="flex flex-col gap-1.5 bg-[#0B192C] p-3 rounded-xl border border-white/10">
                    <label className="text-xs text-white font-medium">Adults (Twin Sharing)</label>
                    <span className="text-[11px] text-[#E0A96D] font-mono">₹{packageData.twinRate.toLocaleString("en-IN")} / head</span>
                    <div className="flex items-center gap-3 mt-1">
                      <button
                        type="button"
                        onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 font-bold"
                      >
                        -
                      </button>
                      <span className="font-mono font-bold text-white text-base">{adultCount}</span>
                      <button
                        type="button"
                        onClick={() => setAdultCount(adultCount + 1)}
                        className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Extra Person */}
                  <div className="flex flex-col gap-1.5 bg-[#0B192C] p-3 rounded-xl border border-white/10">
                    <label className="text-xs text-white font-medium">Extra Person (Triple)</label>
                    <span className="text-[11px] text-[#E0A96D] font-mono">₹{packageData.extraRate.toLocaleString("en-IN")} / head</span>
                    <div className="flex items-center gap-3 mt-1">
                      <button
                        type="button"
                        onClick={() => setExtraCount(Math.max(0, extraCount - 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 font-bold"
                      >
                        -
                      </button>
                      <span className="font-mono font-bold text-white text-base">{extraCount}</span>
                      <button
                        type="button"
                        onClick={() => setExtraCount(extraCount + 1)}
                        className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Child */}
                  <div className="flex flex-col gap-1.5 bg-[#0B192C] p-3 rounded-xl border border-white/10">
                    <label className="text-xs text-white font-medium">Child ({packageData.childAgeLimit || "Under 8 yrs"})</label>
                    <span className="text-[11px] text-[#E0A96D] font-mono">
                      ₹{(packageData.childRate || Math.round(packageData.twinRate * 0.65)).toLocaleString("en-IN")} / head
                    </span>
                    <div className="flex items-center gap-3 mt-1">
                      <button
                        type="button"
                        onClick={() => setChildCount(Math.max(0, childCount - 1))}
                        className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 font-bold"
                      >
                        -
                      </button>
                      <span className="font-mono font-bold text-white text-base">{childCount}</span>
                      <button
                        type="button"
                        onClick={() => setChildCount(childCount + 1)}
                        className="w-8 h-8 rounded-lg bg-white/10 text-white hover:bg-white/20 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Extra Service Options */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-xs font-semibold text-[#C5A880] block">Optional Upgrades from Page 5:</span>
                  <label className="flex items-center gap-2.5 text-xs text-white/90 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addAcTrain}
                      onChange={(e) => setAddAcTrain(e.target.checked)}
                      className="rounded accent-[#C5A880] w-4 h-4"
                    />
                    <span>Upgrade to 2AC / 3AC Train Ticket (+₹2,500 / person difference)</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs text-white/90 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addAcRoom}
                      onChange={(e) => setAddAcRoom(e.target.checked)}
                      className="rounded accent-[#C5A880] w-4 h-4"
                    />
                    <span>AC Room Upgrade (+₹2,000 / room difference)</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs text-white/90 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={addExclusiveCar}
                      onChange={(e) => setAddExclusiveCar(e.target.checked)}
                      className="rounded accent-[#C5A880] w-4 h-4"
                    />
                    <span>Exclusive Private SUV Car for Family (+₹12,000 lump-sum)</span>
                  </label>
                </div>

                {/* Calculation Summary */}
                <div className="p-4 rounded-xl bg-[#0B192C] border border-[#C5A880]/30 space-y-2 text-xs">
                  <div className="flex justify-between text-white/80">
                    <span>Base Tariff Subtotal:</span>
                    <span className="font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>GST (5%):</span>
                    <span className="font-mono">₹{gstAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm font-bold text-[#E0A96D]">
                    <span>Estimated Total Tour Cost:</span>
                    <span className="font-serif text-lg text-[#F5E6CA]">₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setActiveTab("book")}
                    className="flex-1 py-3 rounded-full text-xs font-bold text-[#0B192C] bg-gradient-to-r from-[#F5E6CA] via-[#C5A880] to-[#E0A96D]"
                  >
                    Proceed with this Quotation →
                  </button>
                  <a
                    href={`https://wa.me/919830012345?text=${encodeURIComponent(whatsAppText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-emerald-500/40"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "book" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-[#1E3E62]/30 border border-[#C5A880]/30 text-xs text-[#E0A96D] flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Selected: <strong>{packageData.title}</strong> — Est. Cost: <strong>₹{grandTotal.toLocaleString("en-IN")}</strong> (incl. GST)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourav Mukherjee"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Contact Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98300 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Email Address</label>
                  <input
                    type="email"
                    placeholder="sourav@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#C5A880]">Preferred Departure Date</label>
                  <select
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="bg-[#060D17] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    {packageData.allDates.map((date) => (
                      <option key={date} value={date} className="bg-[#060D17]">
                        {date}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:flex-1 py-3.5 rounded-full font-bold text-sm text-[#0B192C] bg-gradient-to-r from-[#F5E6CA] via-[#C5A880] to-[#E0A96D] hover:scale-102 active:scale-98 transition-all"
                >
                  {submitting ? "Sending Request..." : "Confirm Booking Inquiry"}
                </button>

                <a
                  href={`https://wa.me/919830012345?text=${encodeURIComponent(whatsAppText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-emerald-500/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#060D17] border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8] shrink-0">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#E0A96D]" />
            Official Booking Desk: Kolkata (Howrah / Sealdah Departures)
          </span>
          <button
            onClick={() => setActiveTab("book")}
            className="text-[#E0A96D] hover:underline font-semibold"
          >
            {activeTab !== "book" ? "Request Call Back →" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
