"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  Mountain,
  Sun,
  Waves,
  Feather,
  Flame,
  Calendar,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";

interface ExpeditionStop {
  id: string;
  number: string;
  region: string;
  title: string;
  tagline: string;
  coordinates: string;
  altitude: string;
  culturalPillar: string;
  icon: typeof Mountain;
  heroImage: string;
  audioToneFreq: number;
  palette: {
    accent: string;
    bgGlow: string;
    badgeBg: string;
    badgeText: string;
  };
  narrative: string;
  heritageHighlights: string[];
  culinaryTradition: string;
  bestSeason: string;
  mapX: number; // Percentage on map (0-100)
  mapY: number; // Percentage on map (0-100)
}

const EXPEDITION_STOPS: ExpeditionStop[] = [
  {
    id: "ladakh",
    number: "01",
    region: "The Trans-Himalayan Crown",
    title: "Ladakh & Nubra Valley",
    tagline: "Monasteries, High Passes & Starlit Silence",
    coordinates: "34.1526° N, 77.5771° E",
    altitude: "11,500 – 18,380 FT",
    culturalPillar: "Ancient Mahayana Monastic Rituals",
    icon: Mountain,
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1600&auto=format&fit=crop",
    audioToneFreq: 108.0,
    palette: {
      accent: "#92FF5F",
      bgGlow: "rgba(146, 255, 95, 0.15)",
      badgeBg: "#0F3B27",
      badgeText: "#92FF5F",
    },
    narrative:
      "Cross the world's highest motorable passes where fluttering prayer flags whisper centuries-old chants. Experience morning butter-lamp ceremonies at Thiksey Monastery, camp beneath the crystal Milky Way at Pangong Tso, and traverse the cold desert sand dunes of Hunder on double-humped Bactrian camels.",
    heritageHighlights: [
      "Private dawn chanting audience with Lamas at Thiksey Gompa",
      "Silk Route stargazing camp in Nubra Valley",
      "Chamba statue contemplation at Diskit cliffside sanctuary",
    ],
    culinaryTradition: "Slow-brewed Gur-Gur butter tea with roasted barley Tsampa & apricot preserves",
    bestSeason: "May — October",
    mapX: 38,
    mapY: 13,
  },
  {
    id: "rajasthan",
    number: "02",
    region: "The Royal Rajputana Realm",
    title: "Jaipur & Udaipur",
    tagline: "Amber Bastions, Mirror Palaces & Regal Pageantry",
    coordinates: "26.9124° N, 75.7873° E",
    altitude: "1,414 FT",
    culturalPillar: "Living Rajput Royal Court Traditions",
    icon: Sun,
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    audioToneFreq: 146.83,
    palette: {
      accent: "#FF7036",
      bgGlow: "rgba(255, 112, 54, 0.18)",
      badgeBg: "#FF7036",
      badgeText: "#FFFFFF",
    },
    narrative:
      "Step into living fairy tales of royalty. From the carved pink sandstone jalis of Hawa Mahal to sunset boat journeys across Lake Pichola reflecting Udaipur's City Palace, every courtyard carries the timeless melody of sarangi players, royal polo heritage, and bespoke block-print master artisans.",
    heritageHighlights: [
      "Exclusive private access to Udaipur Royal Palace family chambers",
      "Twilight Sarangi & Kathak performance at Bagore Ki Haveli",
      "Heritage walking trail through Jaipur's gemstone & blue pottery guild",
    ],
    culinaryTradition: "Slow-fired Dal Baati Churma with Gatte Ki Sabzi and saffron-infused Ghevar",
    bestSeason: "October — March",
    mapX: 28,
    mapY: 34,
  },
  {
    id: "varanasi",
    number: "03",
    region: "The Spiritual Heart of Kashi",
    title: "Varanasi Ghats & Sarnath",
    tagline: "The Sacred Ganga, Eternal Flame & Ancient Chants",
    coordinates: "25.3176° N, 82.9739° E",
    altitude: "262 FT",
    culturalPillar: "5,000 Years of Living Vedic Philosophy",
    icon: Flame,
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    audioToneFreq: 130.81,
    palette: {
      accent: "#E0A96D",
      bgGlow: "rgba(224, 169, 109, 0.2)",
      badgeBg: "#92FF5F",
      badgeText: "#E0A96D",
    },
    narrative:
      "Varanasi is where eternity pauses. Drift on a wooden Bajra as dawn breaks in amber light across 84 stone ghats. In the evening, witness the sensory grandeur of the Maha Ganga Aarti at Dashashwamedh, and explore the tranquil Deer Park in Sarnath where Buddha delivered his first discourse.",
    heritageHighlights: [
      "Front-row private wooden boat for Dashashwamedh Evening Maha Aarti",
      "Heritage atelier tour with 4th-generation Kashi Zari silk weavers",
      "Dawn meditation and classical sitar session on Assi Ghat",
    ],
    culinaryTradition: "Clay-pot Banarasi Malaiyo, piping hot Kachori Jalebi & paan curated by connoisseurs",
    bestSeason: "November — March",
    mapX: 58,
    mapY: 37,
  },
  {
    id: "meghalaya",
    number: "04",
    region: "The Abode of Clouds",
    title: "Meghalaya & Living Root Bridges",
    tagline: "Bio-Engineered Canopies & Emerald Waterfalls",
    coordinates: "25.2702° N, 91.7323° E",
    altitude: "4,200 FT",
    culturalPillar: "Indigenous Khasi Bio-Architecture & Sacred Forests",
    icon: Feather,
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600&auto=format&fit=crop",
    audioToneFreq: 174.61,
    narrative:
      "Descend into mystical rainforest valleys where indigenous Khasi elders weave aerial Ficus Elastica roots into living bridges spanning raging rivers. Trek past the plunging turquoise waters of Nohkalikai Falls and walk through Mawphlang Sacred Forest guarded by ancient folklore.",
    heritageHighlights: [
      "Guided trek to the Double Decker Living Root Bridge of Nongriat",
      "Sacred forest botanical walk led by Khasi tribal custodians",
      "Crystal waters boating experience on the Umngot River in Dawki",
    ],
    culinaryTradition: "Jadoh rice simmered with wild black sesame, smoked pork & bamboo shoot pickle",
    bestSeason: "September — April",
    palette: {
      accent: "#92FF5F",
      bgGlow: "rgba(146, 255, 95, 0.2)",
      badgeBg: "#0F3B27",
      badgeText: "#92FF5F",
    },
    mapX: 84,
    mapY: 38,
  },
  {
    id: "kerala",
    number: "05",
    region: "God's Own Coastal Sanctuary",
    title: "Kerala Backwaters & Munnar",
    tagline: "Teak Houseboats, Cardamom Mist & Kathakali Lore",
    coordinates: "09.4981° N, 76.3388° E",
    altitude: "Sea Level to 5,200 FT",
    culturalPillar: "Ayurvedic Wellness & Coastal Maritime Heritage",
    icon: Waves,
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    audioToneFreq: 110.0,
    palette: {
      accent: "#92FF5F",
      bgGlow: "rgba(191, 242, 240, 0.2)",
      badgeBg: "#0F3B27",
      badgeText: "#92FF5F",
    },
    narrative:
      "Glide on handcrafted luxury Kettuvallam houseboats through serene palm-fringed canals of Alleppey. Ascend the emerald rolling tea carpets of Munnar, inhale the aroma of private cardamom plantations, and witness the hypnotic trance of Kathakali and Kalaripayattu martial arts.",
    heritageHighlights: [
      "Bespoke solar-hybrid teak houseboat private charter on Vembanad Lake",
      "Masterclass in ancient Kalaripayattu martial arts & temple architecture",
      "Estate-to-cup orthodox tea tasting inside historic British plantations",
    ],
    culinaryTradition: "Karimeen Pollichathu wrapped in banana leaf, Appam with coconut stew & fresh toddy vinegar",
    bestSeason: "September — March",
    mapX: 36,
    mapY: 84,
  },
];

export default function CulturalExpeditionScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Web Audio API Ambient Soundscape Engine Ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  // Generative Tanpura / ambient drone synth
  const startSoundscape = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Cleanup old oscillators
      oscNodesRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      oscNodesRef.current = [];

      // Master gain
      if (!masterGainRef.current) {
        const master = ctx.createGain();
        master.gain.setValueAtTime(0, ctx.currentTime);
        master.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.2);
        master.connect(ctx.destination);
        masterGainRef.current = master;
      } else {
        masterGainRef.current.gain.linearRampToValueAtTime(
          0.08,
          ctx.currentTime + 0.8
        );
      }

      const baseFreq = EXPEDITION_STOPS[activeStepIndex].audioToneFreq;
      const harmonics = [
        baseFreq,
        baseFreq * 1.5,
        baseFreq * 2.0,
        baseFreq * 0.5,
      ];

      harmonics.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const toneGain = ctx.createGain();

        osc.type = idx === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const gVal = idx === 0 ? 0.05 : idx === 1 ? 0.03 : 0.015;
        toneGain.gain.setValueAtTime(gVal, ctx.currentTime);

        // Gentle breathing modulation via LFO
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.2, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        osc.connect(toneGain);
        if (masterGainRef.current) {
          toneGain.connect(masterGainRef.current);
        }

        osc.start();
        oscNodesRef.current.push(osc);
      });

      setIsAudioPlaying(true);
    } catch (err) {
      console.warn("Audio initialization notice:", err);
    }
  }, [activeStepIndex]);

  const stopSoundscape = useCallback(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.linearRampToValueAtTime(
        0.0001,
        ctx.currentTime + 0.5
      );
      setTimeout(() => {
        setIsAudioPlaying(false);
      }, 500);
    } else {
      setIsAudioPlaying(false);
    }
  }, []);

  const toggleSound = () => {
    if (isAudioPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  // Update drone frequencies smoothly when destination changes while sound is ON
  useEffect(() => {
    if (isAudioPlaying && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      const baseFreq = EXPEDITION_STOPS[activeStepIndex].audioToneFreq;
      const harmonics = [
        baseFreq,
        baseFreq * 1.5,
        baseFreq * 2.0,
        baseFreq * 0.5,
      ];

      oscNodesRef.current.forEach((osc, idx) => {
        if (harmonics[idx]) {
          osc.frequency.exponentialRampToValueAtTime(
            harmonics[idx],
            ctx.currentTime + 1.2
          );
        }
      });
    }
  }, [activeStepIndex, isAudioPlaying]);

  // Clean up Web Audio nodes on unmount
  useEffect(() => {
    return () => {
      try {
        oscNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
        }
      } catch {}
    };
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable =
        containerRef.current.scrollHeight - window.innerHeight;
      const currentScroll = -rect.top;

      if (totalScrollable <= 0) return;
      const rawProgress = Math.max(
        0,
        Math.min(1, currentScroll / totalScrollable)
      );
      setScrollProgress(rawProgress);

      const segmentCount = EXPEDITION_STOPS.length;
      const step = Math.min(
        segmentCount - 1,
        Math.floor(rawProgress * segmentCount)
      );
      setActiveStepIndex(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStop = EXPEDITION_STOPS[activeStepIndex];

  // Compute SVG route coordinates dynamically
  const svgPathPoints = EXPEDITION_STOPS.map(
    (stop) => `${stop.mapX * 3.6},${stop.mapY * 4.2}`
  ).join(" L ");

  return (
    <section
      id="cultural-expeditions"
      ref={containerRef}
      className="relative w-full bg-[#0F3B27] text-[#F7F9F7] h-[450vh]"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        {/* Background Atmospheric Layer with Smooth Transition */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStop.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.22, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center filter blur-xl"
              style={{ backgroundImage: `url(${activeStop.heroImage})` }}
            />
          </AnimatePresence>

          {/* Topographic Contour Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(#92FF5F 1px, transparent 1px), radial-gradient(#FF7036 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27] via-transparent to-[#0F3B27]/80" />
        </div>

        {/* Top Header Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0F3B27] border border-[#92FF5F]/30 flex items-center justify-center text-[#92FF5F] shadow-lg">
              <Compass className="w-4 h-4 animate-[spin_18s_linear_infinite]" />
            </div>
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#92FF5F] block">
                Scroll-Driven Cultural Odyssey
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-none">
                The Great Heritage Circuit of India
              </h3>
            </div>
          </div>

          {/* Ambient Soundscape & HUD Controls */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Ambient Soundscape Toggle with Equalizer Wave */}
            <button
              onClick={toggleSound}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold transition-all border shadow-lg ${
                isAudioPlaying
                  ? "bg-[#92FF5F] text-[#0F3B27] border-[#92FF5F]"
                  : "bg-[#0F3B27]/90 text-white/80 border-white/15 hover:border-[#92FF5F]/40"
              }`}
              title="Toggle Generative Ambient Tanpura & Temple Soundscape"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#0F3B27]" />
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 bg-[#0F3B27] h-full animate-[bounce_0.8s_ease-in-out_infinite]" />
                    <span className="w-0.5 bg-[#0F3B27] h-2/3 animate-[bounce_0.6s_ease-in-out_infinite]" />
                    <span className="w-0.5 bg-[#0F3B27] h-4/5 animate-[bounce_1s_ease-in-out_infinite]" />
                  </div>
                  <span className="text-[10px] font-black">Soundscape Active</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#FF7036]" />
                  <span className="text-[10px]">Play Audio</span>
                </>
              )}
            </button>

            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-[#92FF5F]/80">
              <span className="text-white font-bold">CHAPTER {activeStop.number}</span>
              <span className="text-white/30">/</span>
              <span>05</span>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-1.5">
              {EXPEDITION_STOPS.map((stop, idx) => (
                <button
                  key={stop.id}
                  onClick={() => {
                    if (!containerRef.current) return;
                    const totalScrollable =
                      containerRef.current.scrollHeight - window.innerHeight;
                    const targetScroll =
                      containerRef.current.offsetTop +
                      (idx / (EXPEDITION_STOPS.length - 1)) * totalScrollable;
                    window.scrollTo({ top: targetScroll, behavior: "smooth" });
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeStepIndex
                      ? "w-6 bg-[#92FF5F]"
                      : idx < activeStepIndex
                      ? "w-2.5 bg-[#92FF5F]/40"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Jump to ${stop.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Split: Left Interactive Topographic Map, Right Editorial Story Dossier */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center py-2 sm:py-3 overflow-hidden">
          {/* LEFT: Dynamic Topographic Interactive Map View (5 Cols) */}
          <div className="lg:col-span-5 hidden md:flex flex-col justify-center h-full relative">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0F3B27]/85 backdrop-blur-md border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Map Coordinates & Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#92FF5F]">
                  <MapPin className="w-3 h-3" />
                  <span>{activeStop.coordinates}</span>
                </div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider">
                  Alt: {activeStop.altitude}
                </div>
              </div>

              {/* Vector Authentic Geographic Silhouette of India Map */}
              <div className="relative w-full aspect-[360/390] max-h-[270px] mx-auto flex items-center justify-center">
                <svg
                  viewBox="0 0 360 420"
                  className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="hub-pulse-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#92FF5F" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0F3B27" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Grid Latitude/Longitude Lines */}
                  <g opacity="0.1" stroke="#92FF5F" strokeWidth="0.5" strokeDasharray="3 3">
                    <line x1="40" y1="50" x2="320" y2="50" />
                    <line x1="40" y1="150" x2="320" y2="150" />
                    <line x1="40" y1="260" x2="320" y2="260" />
                    <line x1="100" y1="30" x2="100" y2="390" />
                    <line x1="180" y1="30" x2="180" y2="390" />
                    <line x1="260" y1="30" x2="260" y2="390" />
                  </g>

                  {/* AUTHENTIC GEOGRAPHIC OUTLINE OF INDIA */}
                  <path
                    d="M 148 24
                       C 155 18, 168 18, 175 28
                       C 182 38, 185 52, 178 68
                       C 172 80, 155 86, 142 88
                       C 125 90, 102 108, 88 132
                       C 75 152, 62 170, 70 188
                       C 78 198, 92 192, 98 184
                       C 104 175, 114 178, 116 190
                       C 118 202, 102 215, 110 226
                       C 118 238, 112 270, 118 298
                       C 122 328, 128 360, 142 390
                       C 146 398, 152 398, 156 390
                       C 166 368, 182 325, 204 280
                       C 218 250, 235 235, 252 216
                       C 260 206, 268 208, 264 192
                       C 258 170, 258 152, 266 138
                       C 274 125, 298 108, 328 112
                       C 342 125, 338 152, 322 168
                       C 305 180, 282 176, 272 158
                       C 262 145, 248 142, 240 140
                       C 215 118, 192 92, 178 62
                       C 168 42, 158 28, 148 24 Z"
                    fill="#92FF5F"
                    stroke="#92FF5F"
                    strokeWidth="1.6"
                    strokeOpacity="0.45"
                    className="transition-all duration-700 hover:fill-[#1a5e40]"
                  />

                  {/* Internal Regional Geography Lines */}
                  <path
                    d="M 132 50 Q 155 65 174 60
                       M 116 190 Q 150 195 185 210
                       M 185 210 Q 220 225 252 216
                       M 266 138 Q 285 145 315 130"
                    stroke="#92FF5F"
                    strokeWidth="0.8"
                    strokeOpacity="0.25"
                    strokeDasharray="3 3"
                    fill="none"
                  />

                  {/* Islands (Andaman & Nicobar + Lakshadweep) */}
                  <g fill="#92FF5F" opacity="0.5">
                    <ellipse cx="318" cy="285" rx="2" ry="5" />
                    <ellipse cx="321" cy="305" rx="2" ry="4" />
                    <ellipse cx="324" cy="328" rx="2.5" ry="6" />
                    <ellipse cx="326" cy="350" rx="2" ry="3.5" />
                    <ellipse cx="94" cy="325" rx="2" ry="3.5" />
                    <ellipse cx="96" cy="345" rx="2" ry="3" />
                  </g>

                  {/* The Waypoint Connection Route Path */}
                  <path
                    d={`M ${svgPathPoints}`}
                    fill="none"
                    stroke="#92FF5F"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    className="transition-all duration-500"
                  />

                  {/* Active Segment Solid Draw Line */}
                  <path
                    d={`M ${EXPEDITION_STOPS.slice(0, activeStepIndex + 1)
                      .map((s) => `${s.mapX * 3.6},${s.mapY * 4.2}`)
                      .join(" L ")}`}
                    fill="none"
                    stroke="#92FF5F"
                    strokeWidth="3.5"
                    className="transition-all duration-500"
                  />

                  {/* Central Kolkata Hub Anchor */}
                  <g>
                    <circle cx="252" cy="202" r="3.5" fill="#FF7036" stroke="#FFFFFF" strokeWidth="1" />
                    <text
                      x="258"
                      y="200"
                      fill="#FFD8C9"
                      fontSize="7.5"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      Kolkata
                    </text>
                  </g>

                  {/* Waypoint Markers */}
                  {EXPEDITION_STOPS.map((stop, index) => {
                    const cx = stop.mapX * 3.6;
                    const cy = stop.mapY * 4.2;
                    const isActive = index === activeStepIndex;
                    const isVisited = index < activeStepIndex;

                    return (
                      <g key={stop.id} className="cursor-pointer">
                        {/* Pulsing Beacon for Active Stop */}
                        {isActive && (
                          <>
                            <circle
                              cx={cx}
                              cy={cy}
                              r="15"
                              fill="#92FF5F"
                              fillOpacity="0.25"
                              className="animate-ping origin-center"
                            />
                            <circle
                              cx={cx}
                              cy={cy}
                              r="9"
                              fill="#FF7036"
                              fillOpacity="0.35"
                            />
                          </>
                        )}

                        {/* Core Dot */}
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isActive ? "6.5" : isVisited ? "5" : "4"}
                          fill={
                            isActive
                              ? "#92FF5F"
                              : isVisited
                              ? "#92FF5F"
                              : "rgba(255,255,255,0.45)"
                          }
                          stroke="#0F3B27"
                          strokeWidth="2"
                        />

                        {/* Label */}
                        <text
                          x={cx > 200 ? cx - 8 : cx + 10}
                          y={cy + 3.5}
                          textAnchor={cx > 200 ? "end" : "start"}
                          fill={isActive ? "#92FF5F" : "rgba(255,255,255,0.75)"}
                          fontSize={isActive ? "10" : "8.5"}
                          fontFamily="sans-serif"
                          fontWeight={isActive ? "bold" : "normal"}
                        >
                          {stop.title.split("&")[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Live Expedition Telemetry Pill */}
              <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-[#F7F9F7]">
                  <Sparkles className="w-3 h-3 text-[#92FF5F]" />
                  <span>Cultural Pillar:</span>
                </div>
                <span className="font-semibold text-white truncate max-w-[180px]">
                  {activeStop.culturalPillar}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: High-End Cinematic Editorial Dossier (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStop.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2 sm:space-y-3"
              >
                {/* Milestone Region Pill & Number */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#92FF5F] text-[#0F3B27] text-[10px] font-black tracking-wider uppercase shadow-md">
                    Stop {activeStop.number} of 05
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7036]">
                    {activeStop.region}
                  </span>
                  <span className="text-[11px] text-white/50 font-mono hidden sm:inline">
                    • Best Season: {activeStop.bestSeason}
                  </span>
                </div>

                {/* Monumental Headline */}
                <div>
                  <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.05]">
                    {activeStop.title}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#F7F9F7]/90">
                    {activeStop.tagline}
                  </p>
                </div>

                {/* Hero Showcase Frame with Badge Overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-36 sm:max-h-40 w-full border border-white/15 shadow-xl group">
                  <img
                    src={activeStop.heroImage}
                    alt={activeStop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B27] via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between">
                    <div className="text-[11px] text-white/90 max-w-md">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#92FF5F] block">
                        Local Heritage Gastronomy
                      </span>
                      <p className="line-clamp-1 italic text-white/80">
                        {activeStop.culinaryTradition}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-[#0F3B27]/80 backdrop-blur-md text-white text-[10px] font-mono border border-white/20">
                      {activeStop.altitude}
                    </span>
                  </div>
                </div>

                {/* Journalistic Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[#F7F9F7]/85 font-normal leading-relaxed line-clamp-2">
                  {activeStop.narrative}
                </p>

                {/* 3 Bespoke Heritage Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeStop.heritageHighlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-2 rounded-xl bg-[#0F3B27]/60 border border-white/10 hover:border-[#92FF5F]/40 transition-colors"
                    >
                      <div className="w-4 h-4 rounded-md bg-[#92FF5F]/20 text-[#92FF5F] flex items-center justify-center text-[10px] font-bold mb-1">
                        0{hIdx + 1}
                      </div>
                      <p className="text-[11px] text-white/90 leading-snug font-medium line-clamp-2">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Call to Action Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-0.5">
                  <Link
                    href="/destinations"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#92FF5F] text-[#0F3B27] text-xs font-black hover:bg-[#92FF5F] transition-all shadow-md group"
                  >
                    <span>Explore This Curated Circuit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#FF7036]" />
                    <span>Customize Royal Itinerary</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Scroll Indicator Helper */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-2 flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#92FF5F] animate-pulse" />
            <span>Scroll down to navigate through India&apos;s cultural stops</span>
          </div>
          <div className="font-mono text-white/70">
            {Math.round(scrollProgress * 100)}% Odyssey Traversed
          </div>
        </div>
      </div>
    </section>
  );
}
