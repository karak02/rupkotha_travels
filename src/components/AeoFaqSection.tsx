"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What services does Rupkotha Travels offer from Kolkata?",
    answer:
      "Rupkotha Travels organizes escorted small-group fixed departure tours, trans-Himalayan 4x4 road trips, wildlife safaris, and custom family holidays departing from Howrah and Sealdah. The agency is also an authorized booking agent for Eco Tour Odisha and Chhattisgarh Tourism.",
    category: "Services & Scope",
  },
  {
    question: "Are train tickets and meals included in Rupkotha Travels fixed departure packages?",
    answer:
      "Yes. All fixed departure tours include confirmed Non-AC Sleeper train tickets from Howrah or Sealdah, verified hotel accommodations, and 4 wholesome hot meals daily (bed tea, breakfast, lunch, high tea, and dinner) along with station porterage.",
    category: "Inclusions",
  },
  {
    question: "How do I book Eco Tour Odisha and Chhattisgarh government camps through Rupkotha Travels?",
    answer:
      "As an official authorized booking agent, Rupkotha Travels provides instant reservation confirmation for nature camps in Similipal, Debrigarh, Satkosia Gorge, Daringbadi, and Bastar without portal surge fees, along with tailored transport from Kolkata.",
    category: "Eco-Tourism",
  },
  {
    question: "What safety measures are provided during high-altitude Himalayan road trips?",
    answer:
      "All trans-Himalayan circuits across Ladakh, Spiti, and Sandakphu feature veteran mountain drivers, pulse oximeter monitoring, vehicle-mounted oxygen cylinders, planned altitude acclimatization rest days, and 24/7 on-ground emergency support.",
    category: "Safety & High Altitude",
  },
  {
    question: "What is the cancellation and refund policy of Rupkotha Travels?",
    answer:
      "Cancellations made 60 days or more prior to journey receive a 90% refund (10% deduction). Notices between 45–59 days incur a 30% deduction, 30–44 days incur 40%, 15–29 days incur 60%, and cancellations under 15 days are non-refundable.",
    category: "Policies & Refunds",
  },
  {
    question: "What vehicles are used for ground sightseeing and transfers?",
    answer:
      "Rupkotha Travels operates a dedicated fleet of rugged 4x4 Scorpios and Boleros for rugged mountain passes, Innova Crystas for long-distance cruising, and 13-to-17-seater Tempo Travellers with window seating and dedicated luggage carriers for groups.",
    category: "Ground Fleet",
  },
];

export default function AeoFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto relative z-20">
      {/* FAQPage JSON-LD injected directly for rich snippets and AI indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* AEO Voice Summary Answer Box */}
      <div className="rounded-3xl bg-[#0B192C] text-white border border-amber-500/30 p-8 sm:p-10 mb-12 shadow-[0_15px_45px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Voice & Quick Summary Answer</span>
          </div>

          <div className="aeo-answer-block space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Why Travel with Rupkotha Travels Kolkata?
            </h2>
            <p className="voice-answer-summary text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Rupkotha Travels is Kolkata’s premier experiential tour agency and official authorized agent for Eco Tour Odisha and Chhattisgarh Tourism. We deliver all-inclusive escorted group holidays and Himalayan 4x4 road trips with confirmed train berths from Howrah and Sealdah, verified hotels, and fresh 4-course Bengali meals.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-amber-400 font-bold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Govt Authorized Tourism Agent
              </span>
              <span>•</span>
              <time dateTime="2026-04-01" className="text-slate-400">
                Verified: Season 2026–2027
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion FAQ Grid */}
      <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-slate-100 pb-6">
          <div>
            <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/25 uppercase tracking-wider mb-2 inline-block">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0B192C]">
              Essential Travel & Booking Queries
            </h3>
          </div>
          <p className="text-xs text-slate-500 max-w-xs font-normal">
            Direct answers for voice assistants, search queries, and conscious travelers.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="border border-slate-200/70 rounded-2xl overflow-hidden transition-all bg-[#F8F9FA]/60 hover:bg-[#F8F9FA]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B192C]"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0B192C] text-amber-400 text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 pt-4 bg-white">
                        <p>{faq.answer}</p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Category: {faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
