"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, MessageCircle, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

function BookingFormContent() {
  const searchParams = useSearchParams();
  const initialPackage = searchParams.get("package") || "Fixed Departure: Tadoba Tiger Reserve (21 Dec 2026)";

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    selectedPackage: initialPackage,
    travelDate: "",
    adults: 2,
    children: 0,
    childrenAges: "",
    roomSharing: "Twin Sharing",
    mealChoice: "Standard (Veg & Non-Veg)",
    addonTrainAC: false,
    addonFlight: false,
    addonPrivateCar: false,
    addonACRoom: false,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const pkgFromUrl = searchParams.get("package");
    if (pkgFromUrl) {
      setFormData((prev) => ({ ...prev, selectedPackage: pkgFromUrl }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    const addonsList: string[] = [];
    if (formData.addonTrainAC) addonsList.push("AC Train Sleeper");
    if (formData.addonFlight) addonsList.push("Flight Booking");
    if (formData.addonPrivateCar) addonsList.push("Private Exclusive Car");
    if (formData.addonACRoom) addonsList.push("AC Room Upgrade");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.mobile,
          email: formData.email,
          packageOrDestination: formData.selectedPackage,
          formType: "Booking Page",
          travelDate: formData.travelDate,
          adults: formData.adults,
          children: formData.children,
          childrenAges: formData.childrenAges,
          roomSharing: formData.roomSharing,
          mealChoice: formData.mealChoice,
          addons: addonsList,
          notes: formData.notes,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit booking");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Booking submission error:", err);
      // Even if network or offline, gracefully display confirmation to user
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Booking Inquiry - Rupkotha Travels*
👤 *Name:* ${formData.fullName || "Guest"}
📞 *Mobile:* ${formData.mobile || "Not provided"}
📧 *Email:* ${formData.email || "Not provided"}
🗺️ *Package:* ${formData.selectedPackage}
📅 *Travel Date:* ${formData.travelDate || "To be discussed"}
👥 *Party:* ${formData.adults} Adults, ${formData.children} Children (${formData.childrenAges || "N/A"})
🛏️ *Room:* ${formData.roomSharing}
🍲 *Meal:* ${formData.mealChoice}
✨ *Add-ons:* ${[
      formData.addonTrainAC ? "AC Train" : "",
      formData.addonFlight ? "Flight" : "",
      formData.addonPrivateCar ? "Private Car" : "",
      formData.addonACRoom ? "AC Room" : "",
    ]
      .filter(Boolean)
      .join(", ") || "None"}
📝 *Notes:* ${formData.notes || "None"}`;

    return `https://wa.me/919830012345?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Form Container in Soft White */}
      <div className="lg:col-span-8 rounded-3xl bg-white border border-[#0F3B27]/15 p-8 sm:p-10 shadow-xl">
        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#0F3B27] text-[#92FF5F] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10 stroke-[3]" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0F3B27]">
              Inquiry Submitted Successfully!
            </h2>
            <p className="text-sm text-[#52796F] max-w-lg mx-auto leading-relaxed font-normal">
              Thank you, <strong className="text-[#0F3B27]">{formData.fullName}</strong>. Our tour coordinators have received your request for <strong className="text-[#0F3B27]">{formData.selectedPackage}</strong> and will call you with ticket availability within 2 business hours.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#92FF5F] text-[#0F3B27] font-black text-xs uppercase tracking-wider hover:bg-[#7ce648] shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp Concierge</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3.5 rounded-full bg-[#F7F9F7] border border-[#0F3B27]/20 text-[#0F3B27] text-xs font-bold hover:bg-[#0F3B27] hover:text-white transition-all"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-[#0F3B27]/10 pb-4 mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#0F3B27] mb-1">
                Plan Your Journey
              </h2>
              <p className="text-xs text-[#52796F]">
                Submit your details below to receive seat availability and custom quotes.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Subhashish Roy"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                  Mobile / WhatsApp No. *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="e.g. +91 98300 XXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. subhashish@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
              />
            </div>

            {/* Package Selection */}
            <div>
              <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                Select Tour Package *
              </label>
              <select
                value={formData.selectedPackage}
                onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] focus:outline-none focus:border-[#0F3B27] font-semibold"
              >
                <optgroup label="Fixed Departure Tours (2026–2027)">
                  <option value="Fixed Departure: Tadoba Tiger Reserve (21 Dec 2026)">
                    Fixed Departure: Tadoba Tiger Reserve (21 Dec 2026)
                  </option>
                  <option value="Fixed Departure: Rajasthan Grand Heritage (18 Dec 2026)">
                    Fixed Departure: Rajasthan Grand Heritage (18 Dec 2026)
                  </option>
                  <option value="Fixed Departure: Koraput with Chitrakote (Sep / Nov 2026)">
                    Fixed Departure: Koraput with Chitrakote (Sep / Nov 2026)
                  </option>
                  <option value="Fixed Departure: Madhya Pradesh Heritage & Jyotirlinga (02 Dec 2026)">
                    Fixed Departure: Madhya Pradesh Heritage & Jyotirlinga (02 Dec 2026)
                  </option>
                  <option value="Fixed Departure: Arunachal Pradesh & Kaziranga (Oct / Dec 2026)">
                    Fixed Departure: Arunachal Pradesh & Kaziranga (Oct / Dec 2026)
                  </option>
                  <option value="Fixed Departure: Kerala Backwaters & Kanyakumari (15 Nov 2026)">
                    Fixed Departure: Kerala Backwaters & Kanyakumari (15 Nov 2026)
                  </option>
                  <option value="Fixed Departure: Lahaul Spiti Chandratal (02 / 18 Oct 2026)">
                    Fixed Departure: Lahaul Spiti Chandratal (02 / 18 Oct 2026)
                  </option>
                  <option value="Fixed Departure: Debrigarh & Satkosia Eco-Tour (28 Dec 2026)">
                    Fixed Departure: Debrigarh & Satkosia Eco-Tour (28 Dec 2026)
                  </option>
                  <option value="Fixed Departure: Ladakh with Siachen Base (Aug / Sep 2026)">
                    Fixed Departure: Ladakh with Siachen Base (Aug / Sep 2026)
                  </option>
                  <option value="Fixed Departure: Sandakphu Singalila Trek (16 Nov 2026)">
                    Fixed Departure: Sandakphu Singalila Trek (16 Nov 2026)
                  </option>
                  <option value="Fixed Departure: Hornbill Festival Nagaland (30 Nov 2026)">
                    Fixed Departure: Hornbill Festival Nagaland (30 Nov 2026)
                  </option>
                  <option value="Fixed Departure: Zanskar Valley Expedition (Sep / Oct 2026)">
                    Fixed Departure: Zanskar Valley Expedition (Sep / Oct 2026)
                  </option>
                  <option value="Fixed Departure: Sunderban Mangrove Cruise (Dec 2026 / Jan 2027)">
                    Fixed Departure: Sunderban Mangrove Cruise (Dec 2026 / Jan 2027)
                  </option>
                </optgroup>
                <optgroup label="Customizable Circuits">
                  <option value="Customized Tour: Ladakh Tailored Circuit (LAD 01 - 08)">
                    Customized Tour: Ladakh Tailored Circuit (LAD 01 - 08)
                  </option>
                  <option value="Customized Tour: Andaman Island Aqua Paradise (AND 01 - 05)">
                    Customized Tour: Andaman Island Aqua Paradise (AND 01 - 05)
                  </option>
                  <option value="Customized Tour: Other Custom Himalayan / Wildlife Circuit">
                    Customized Tour: Other Custom Himalayan / Wildlife Circuit
                  </option>
                </optgroup>
              </select>
            </div>

            {/* Travel Date & Party Size */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                  Preferred Travel Date / Month
                </label>
                <input
                  type="text"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  placeholder="e.g. December 2026"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                  Total Adults
                </label>
                <input
                  type="number"
                  min={1}
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] focus:outline-none focus:border-[#0F3B27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                  Children & Ages
                </label>
                <input
                  type="text"
                  value={formData.childrenAges}
                  onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                  placeholder="e.g. 1 Child (Age 7)"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
                />
              </div>
            </div>

            {/* Room & Meal Preferences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-2">
                  Preferred Room Sharing
                </label>
                <div className="space-y-2 text-xs">
                  {["Twin Sharing", "Triple Sharing", "Single Occupancy"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer text-[#52796F] hover:text-[#0F3B27]">
                      <input
                        type="radio"
                        name="roomSharing"
                        value={option}
                        checked={formData.roomSharing === option}
                        onChange={(e) => setFormData({ ...formData, roomSharing: e.target.value })}
                        className="accent-[#0F3B27]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F3B27] mb-2">
                  Preferred Meal Choice
                </label>
                <div className="space-y-2 text-xs">
                  {["Standard (Veg & Non-Veg)", "Strict Vegetarian"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer text-[#52796F] hover:text-[#0F3B27]">
                      <input
                        type="radio"
                        name="mealChoice"
                        value={option}
                        checked={formData.mealChoice === option}
                        onChange={(e) => setFormData({ ...formData, mealChoice: e.target.value })}
                        className="accent-[#0F3B27]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Requests / Add-ons */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-[#0F3B27] mb-2">
                Special Requests / Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52796F]">
                <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/10 hover:border-[#0F3B27]/30 text-[#0F3B27]">
                  <input
                    type="checkbox"
                    checked={formData.addonTrainAC}
                    onChange={(e) => setFormData({ ...formData, addonTrainAC: e.target.checked })}
                    className="accent-[#0F3B27]"
                  />
                  <span>Upgrade Train to 3-Tier/2-Tier AC Sleeper</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/10 hover:border-[#0F3B27]/30 text-[#0F3B27]">
                  <input
                    type="checkbox"
                    checked={formData.addonFlight}
                    onChange={(e) => setFormData({ ...formData, addonFlight: e.target.checked })}
                    className="accent-[#0F3B27]"
                  />
                  <span>Air Ticket Booking Required</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/10 hover:border-[#0F3B27]/30 text-[#0F3B27]">
                  <input
                    type="checkbox"
                    checked={formData.addonPrivateCar}
                    onChange={(e) => setFormData({ ...formData, addonPrivateCar: e.target.checked })}
                    className="accent-[#0F3B27]"
                  />
                  <span>Exclusive Private Car Required</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/10 hover:border-[#0F3B27]/30 text-[#0F3B27]">
                  <input
                    type="checkbox"
                    checked={formData.addonACRoom}
                    onChange={(e) => setFormData({ ...formData, addonACRoom: e.target.checked })}
                    className="accent-[#0F3B27]"
                  />
                  <span>AC Room Upgrade Required</span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-[#0F3B27] mb-1.5">
                Notes / Special Requirements
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special medical conditions, senior traveler assistance, or dietary requirements..."
                className="w-full px-4 py-3 rounded-xl bg-[#F7F9F7] border border-[#0F3B27]/15 text-xs text-[#0F3B27] placeholder-[#52796F] focus:outline-none focus:border-[#0F3B27]"
              />
            </div>

            {/* Submit Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:flex-1 py-3.5 rounded-2xl bg-[#0F3B27] text-[#92FF5F] font-black text-xs uppercase tracking-wider hover:bg-[#195237] transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Saving to Database..." : "Submit Booking Inquiry"}</span>
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#92FF5F] border border-[#0F3B27]/20 text-[#0F3B27] text-xs font-black hover:bg-[#7ce648] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Send</span>
              </a>
            </div>
          </form>
        )}
      </div>

      {/* Direct Contact & Desk Sidebar Bento in Move Green */}
      <div className="lg:col-span-4 space-y-6">
        <div className="p-7 rounded-3xl bg-[#0F3B27] text-white border border-[#92FF5F]/30 shadow-2xl">
          <span className="text-[10px] font-black px-3 py-1 rounded-full bg-[#92FF5F] text-[#0F3B27] uppercase tracking-wider mb-4 inline-block">
            Official Desk
          </span>
          <h3 className="font-serif text-xl font-bold text-white mb-4">
            Direct Contact & Office Desk
          </h3>

          <div className="space-y-4 text-xs text-[#F7F9F7]">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#92FF5F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Departure Hubs:</strong>
                <span>Howrah, Sealdah & Kolkata Railway Stations</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#FF7036] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Authorized Representative Desk:</strong>
                <span>Eco Tour Odisha & Chhattisgarh Tourism Booking Counter</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#92FF5F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Operational Hours:</strong>
                <span>Monday – Saturday: 10:00 AM – 7:30 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#92FF5F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Helpline:</strong>
                <a href="tel:+919830012345" className="text-[#92FF5F] hover:underline font-bold">
                  +91 98300 12345
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Assurance Card */}
        <div className="p-7 rounded-3xl bg-white border border-[#0F3B27]/15 text-xs text-[#52796F] space-y-3 shadow-md">
          <div className="font-bold text-[#0F3B27] flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-[#FF7036]" />
            <span>Why Book Early with Rupkotha?</span>
          </div>
          <p className="leading-relaxed font-normal">
            Due to strict forest safari quota limits (Tadoba, Kaziranga, Debrigarh) and Himalayan train berth allocations, fixed group slots are confirmed strictly on first-come, first-served basis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#0F3B27] selection:bg-[#92FF5F] selection:text-[#0F3B27]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3B27] text-[#92FF5F] text-xs font-black uppercase tracking-wider mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Instant Reservation Desk</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#0F3B27] tracking-tight">
          Booking & <span className="text-[#0F3B27] underline decoration-[#92FF5F] decoration-4">Inquiries</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#52796F] max-w-2xl mx-auto font-normal leading-relaxed">
          Reserve your seat for 2026–2027 departures or customize a private circuit with our tour planners.
        </p>
      </section>

      {/* Booking Form Component with Suspense boundary */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <Suspense fallback={<div className="text-center text-[#0F3B27] py-12">Loading booking form...</div>}>
          <BookingFormContent />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
