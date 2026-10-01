"use client";

import { Users, Train, UtensilsCrossed, ShieldCheck, Sparkles, HeartHandshake, Check, FileCheck, ArrowRight } from "lucide-react";

export default function TravelPillars() {
  const pillars = [
    {
      num: "[ I ]",
      icon: Users,
      title: "Dedicated Bengali Tour Escorts",
      subtitle: "From Howrah / Sealdah Station to Every Destination",
      description:
        "Every group departure is personally accompanied by our veteran Bengali tour directors right from Kolkata railway station or airport. They manage check-ins, safari permits, timing, and local coordination with care and warmth.",
      bullets: [
        "Accompanied throughout from Kolkata to Kolkata",
        "24/7 on-ground emergency and medical assistance",
        "Deep local knowledge, storytelling, and language bridge",
      ],
    },
    {
      num: "[ II ]",
      icon: Train,
      title: "Confirmed Rail, MUV & 4x4 Fleet",
      subtitle: "Comfortable Sleeper / AC Rail & Dedicated Mountain Vehicles",
      description:
        "All tour tariffs include train tickets from Kolkata in Sleeper Class with optional upgrades to 3A/2A or flights. On the ground, we deploy high-ground-clearance MUVs (Innova / Scorpio / Bolero) and 4x4 Gypsies for safaris.",
      bullets: [
        "Confirmed rail tickets from Sealdah, Howrah & Kolkata Station",
        "Dedicated mountain-ready MUVs & Tempo Travellers",
        "All parking, toll taxes, interstate permits & driver charges covered",
      ],
    },
    {
      num: "[ III ]",
      icon: UtensilsCrossed,
      title: "4-Course Homely Bengali Meals",
      subtitle: "Bed Tea, Breakfast, Lunch, High Tea & Dinner",
      description:
        "Enjoy hygienic, hot, freshly prepared meals throughout your tour. Our meal plan covers morning bed tea, hearty breakfast, two major meals (lunch and dinner with authentic Bengali fish/chicken & pure vegetarian recipes), and evening tea with snacks.",
      bullets: [
        "Daily Bed Tea, Breakfast, Lunch, Evening Snacks & Dinner",
        "Authentic Bengali culinary arrangements & pure veg / Jain options",
        "Special local feasts (fresh fish, coastal seafood, mountain delicacies)",
      ],
    },
    {
      num: "[ IV ]",
      icon: ShieldCheck,
      title: "Full Porterage & Transparent Policy",
      subtitle: "Luggage Portage Included & Clear 5-Tier Cancellation Terms",
      description:
        "Travel completely carefree without hauling heavy luggage — our dedicated porter service handles your bags from train berths to hotel rooms and back. We maintain 100% transparent pricing with clear published cancellation terms.",
      bullets: [
        "Complete luggage porterage service from Kolkata to Kolkata",
        "Published 5-tier transparent cancellation & refund framework",
        "Zero hidden surcharges — everything stated up front in brochure",
      ],
    },
  ];

  return (
    <section id="why-rupkotha" className="py-20 bg-[#0B192C]/50 border-y border-[#C5A880]/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0A96D] tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Rupkotha Promise (Brochure Page 5)</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Why Kolkata Families Trust Rupkotha Travels
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-3 font-light leading-relaxed">
            From the high snow-clad passes of Ladakh to the tiger creeks of Tadoba and Sundarban, we orchestrate seamless journeys with authentic Bengali care.
          </p>
        </div>

        {/* 4 Pillars Monolith Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0B192C]/80 border border-[#C5A880]/25 hover:border-[#C5A880]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A880]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1E3E62]/60 border border-[#C5A880]/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#E0A96D]" />
                    </div>
                    <span className="font-serif text-lg font-bold text-[#C5A880]/60">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {p.title}
                  </h3>
                  <h4 className="text-xs uppercase font-semibold tracking-wider text-[#E0A96D] mb-4">
                    {p.subtitle}
                  </h4>

                  <p className="text-sm text-[#F8F9FA]/80 font-light leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {p.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#E0A96D] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cancellation Policy & Brochure Guarantee Monolith */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#0B192C] border border-[#C5A880]/30">
            <h4 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#E0A96D]" />
              Official Cancellation & Refund Policy
            </h4>
            <p className="text-xs text-[#94A3B8] mb-4">
              Published according to Rupkotha Travels standard booking regulations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/85">
              <div className="p-2.5 rounded-lg bg-[#0B192C] border border-white/5">
                <span className="text-[#E0A96D] font-bold block">Less than 60 Days:</span>
                10% of total package cost
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B192C] border border-white/5">
                <span className="text-[#E0A96D] font-bold block">Less than 45 Days:</span>
                30% of total package cost
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B192C] border border-white/5">
                <span className="text-[#E0A96D] font-bold block">Less than 30 Days:</span>
                40% of total package cost
              </div>
              <div className="p-2.5 rounded-lg bg-[#0B192C] border border-white/5">
                <span className="text-[#E0A96D] font-bold block">Less than 15 Days:</span>
                60% of total package cost
              </div>
              <div className="sm:col-span-2 p-2.5 rounded-lg bg-[#0B192C] border border-rose-500/20 text-rose-300">
                <span className="font-bold block">Less than 07 Days:</span>
                No refund will be made under any circumstances.
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1E3E62]/40 to-[#0B192C] border border-[#C5A880]/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/20 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-[#E0A96D]" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Need a Custom Family / Corporate Tour?
              </h4>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                We organize tailored private itineraries for North Bengal, Sikkim, Bhutan, Ladakh, Kashmir, Andaman & Wildlife Safaris with private vehicles and dedicated escorts.
              </p>
            </div>
            <a
              href="https://wa.me/919830012345?text=Hello%20Rupkotha%20Travels,%20I%20would%20like%20to%20request%20a%20custom%20tour%20itinerary."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 rounded-full text-xs font-semibold bg-[#C5A880] text-[#0B192C] hover:bg-[#E0A96D] transition-colors flex items-center justify-center gap-2"
            >
              <span>Custom Tour Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
