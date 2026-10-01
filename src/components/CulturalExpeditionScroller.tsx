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
      accent: "#F59E0B",
      bgGlow: "rgba(245, 158, 11, 0.15)",
      badgeBg: "#0B192C",
      badgeText: "#F59E0B",
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
      accent: "#E0A96D",
      bgGlow: "rgba(224, 169, 109, 0.18)",
      badgeBg: "#0B192C",
      badgeText: "#E0A96D",
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
      accent: "#F59E0B",
      bgGlow: "rgba(245, 158, 11, 0.2)",
      badgeBg: "#0B192C",
      badgeText: "#F59E0B",
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
      accent: "#C5A880",
      bgGlow: "rgba(197, 168, 128, 0.2)",
      badgeBg: "#0B192C",
      badgeText: "#C5A880",
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
      accent: "#E0A96D",
      bgGlow: "rgba(224, 169, 109, 0.2)",
      badgeBg: "#0B192C",
      badgeText: "#E0A96D",
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
      className="relative w-full bg-[#0B192C] text-[#F8F9FA] h-[450vh]"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        {/* Background Atmospheric Layer with Smooth Transition */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStop.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center filter blur-xl"
              style={{ backgroundImage: `url(${activeStop.heroImage})` }}
            />
          </AnimatePresence>

          {/* Topographic Contour Texture Overlay in Warm Amber */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px), radial-gradient(#E0A96D 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-[#0B192C]/85" />
        </div>

        {/* Top Header Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-center justify-between border-b border-amber-500/15">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0B111E] border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Compass className="w-4 h-4 animate-[spin_18s_linear_infinite]" />
            </div>
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 block">
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
                  ? "bg-amber-400 text-[#0B192C] border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  : "bg-[#0B111E]/90 text-white/80 border-white/15 hover:border-amber-400/50"
              }`}
              title="Toggle Generative Ambient Tanpura & Temple Soundscape"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#0B192C]" />
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 bg-[#0B192C] h-full animate-[bounce_0.8s_ease-in-out_infinite]" />
                    <span className="w-0.5 bg-[#0B192C] h-2/3 animate-[bounce_0.6s_ease-in-out_infinite]" />
                    <span className="w-0.5 bg-[#0B192C] h-4/5 animate-[bounce_1s_ease-in-out_infinite]" />
                  </div>
                  <span className="text-[10px] font-black">Soundscape Active</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10px]">Play Audio</span>
                </>
              )}
            </button>

            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-amber-400/90">
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
                      ? "w-6 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                      : idx < activeStepIndex
                      ? "w-2.5 bg-amber-400/40"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Jump to ${stop.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Split: Left Interactive Topographic Map, Right Editorial Story Dossier */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center py-2 sm:py-3 overflow-hidden">
          {/* LEFT: Dynamic Topographic Interactive Map View (5 Cols) */}
          <div className="lg:col-span-5 hidden md:flex flex-col justify-center h-full relative">
            <div className="p-4 sm:p-5 rounded-3xl bg-[#0B111E]/95 backdrop-blur-xl border border-amber-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.12)]">
              {/* Map Coordinates & Header Badge */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-amber-500/20 text-[11px] font-mono">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{activeStop.coordinates}</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/10 text-amber-200 text-[10px] uppercase font-bold tracking-wider">
                  <Mountain className="w-3 h-3 text-amber-400" />
                  <span>ALT: {activeStop.altitude}</span>
                </div>
              </div>

              {/* 3D Realistic Geographic Relief Map HUD Canvas */}
              <div className="relative w-full aspect-[360/380] max-h-[300px] sm:max-h-[340px] mx-auto rounded-2xl overflow-hidden border border-amber-500/20 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] bg-[#040810]">
                {/* Photorealistic 3D Relief Terrain Background */}
                <img
                  src="/images/india_3d_relief_map.jpg"
                  alt="3D Relief Map of The Great Heritage Circuit of India"
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.1] transition-transform duration-700 hover:scale-105"
                />

                {/* Tactical Atmospheric Vignette & Radar Grid Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-[#0B111E]/40 pointer-events-none" />
                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#0B111E]/80 pointer-events-none" />

                {/* SVG Route Trajectory & Animated Radar Layer */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id="laser-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#F59E0B" floodOpacity="0.9" />
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FBBF24" floodOpacity="0.6" />
                    </filter>
                  </defs>

                  {/* Faint Dashed Route Circuit Path */}
                  <path
                    d={EXPEDITION_STOPS.map((s, idx) => `${idx === 0 ? "M" : "L"} ${s.mapX} ${s.mapY}`).join(" ")}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    strokeOpacity="0.45"
                  />

                  {/* Active Animated Traversed Circuit Laser Line */}
                  <motion.path
                    d={EXPEDITION_STOPS.slice(0, activeStepIndex + 1)
                      .map((s, idx) => `${idx === 0 ? "M" : "L"} ${s.mapX} ${s.mapY}`)
                      .join(" ")}
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    filter="url(#laser-glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </svg>

                {/* Interactive Animated Big Waypoint Points (Framer Motion) */}
                {EXPEDITION_STOPS.map((stop, index) => {
                  const isActive = index === activeStepIndex;
                  const isVisited = index < activeStepIndex;

                  return (
                    <motion.div
                      key={stop.id}
                      onClick={() => {
                        if (!containerRef.current) return;
                        const totalScrollable =
                          containerRef.current.scrollHeight - window.innerHeight;
                        const targetScroll =
                          containerRef.current.offsetTop +
                          (index / (EXPEDITION_STOPS.length - 1)) * totalScrollable;
                        window.scrollTo({ top: targetScroll, behavior: "smooth" });
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                      style={{
                        left: `${stop.mapX}%`,
                        top: `${stop.mapY}%`,
                      }}
                      initial={false}
                      animate={{
                        scale: isActive ? 1.35 : 1,
                        y: isActive ? -6 : 0,
                        zIndex: isActive ? 40 : 20,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    >
                      {/* Active Multi-Ring Expanding Pulsing Radar Glow */}
                      {isActive && (
                        <div className="absolute inset-0 -m-4 flex items-center justify-center pointer-events-none">
                          <span className="absolute w-10 h-10 rounded-full bg-amber-400/30 animate-ping" />
                          <span className="absolute w-7 h-7 rounded-full bg-amber-500/40 animate-pulse" />
                          <span className="absolute w-4 h-4 rounded-full bg-amber-300/60 shadow-[0_0_15px_#F59E0B]" />
                        </div>
                      )}

                      {/* Waypoint Marker Pin Badge */}
                      <div className="relative flex flex-col items-center">
                        {/* Prominent Floating Label Pill */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.08 : 0.95,
                            boxShadow: isActive
                              ? "0 0 20px rgba(245, 158, 11, 0.7)"
                              : "0 2px 8px rgba(0,0,0,0.5)",
                          }}
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wide border whitespace-nowrap transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-[#0B192C] border-amber-200 shadow-lg scale-105"
                              : isVisited
                              ? "bg-[#0B111E]/90 text-amber-300 border-amber-500/40 opacity-90"
                              : "bg-[#0B111E]/80 text-white/80 border-white/20 opacity-75 group-hover:opacity-100"
                          }`}
                        >
                          <MapPin
                            className={`w-2.5 h-2.5 ${
                              isActive
                                ? "text-[#0B192C] animate-bounce"
                                : isVisited
                                ? "text-amber-400"
                                : "text-white/60"
                            }`}
                          />
                          <span>{stop.title.split("&")[0].trim()}</span>
                        </motion.div>

                        {/* Anchor Pin Needle & Core Node */}
                        <div className="relative flex flex-col items-center">
                          <div
                            className={`w-0.5 h-2 transition-colors ${
                              isActive
                                ? "bg-amber-400 shadow-[0_0_8px_#FBBF24]"
                                : isVisited
                                ? "bg-amber-400/60"
                                : "bg-white/40"
                            }`}
                          />
                          <div
                            className={`rounded-full transition-all duration-300 ${
                              isActive
                                ? "w-3.5 h-3.5 bg-amber-300 border-2 border-[#0B192C] shadow-[0_0_12px_#F59E0B]"
                                : isVisited
                                ? "w-2.5 h-2.5 bg-amber-400 border border-slate-900"
                                : "w-2 h-2 bg-white/70 border border-slate-900"
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Decorative Compass Rose (Bottom Right of 3D Map) */}
                <div className="absolute bottom-2.5 right-2.5 pointer-events-none opacity-80 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full border border-amber-500/40 bg-[#0B192C]/70 backdrop-blur-md flex items-center justify-center text-amber-400 shadow-md">
                    <Compass className="w-5 h-5 animate-[spin_24s_linear_infinite]" />
                  </div>
                  <span className="text-[7.5px] font-mono font-bold text-amber-300/80 mt-0.5">3D HUD</span>
                </div>
              </div>

              {/* Live Expedition Telemetry Footer (Cultural Pillar) */}
              <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 text-amber-400">
                  <div className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shadow-xs">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="font-bold text-amber-300">Cultural Pillar:</span>
                </div>
                <motion.span
                  key={activeStop.culturalPillar}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-semibold text-white truncate max-w-[210px] text-right"
                >
                  {activeStop.culturalPillar}
                </motion.span>
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
                className="space-y-2.5 sm:space-y-3.5"
              >
                {/* Milestone Region Pill & Number */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-[#0B192C] text-[10px] font-black tracking-wider uppercase shadow-[0_0_15px_rgba(245,158,11,0.35)]">
                    Stop {activeStop.number} of 05
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
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
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-amber-100/90">
                    {activeStop.tagline}
                  </p>
                </div>

                {/* Hero Showcase Frame with Badge Overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[21/9] max-h-36 sm:max-h-40 w-full border border-amber-500/20 shadow-2xl group">
                  <img
                    src={activeStop.heroImage}
                    alt={activeStop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between">
                    <div className="text-[11px] text-white/90 max-w-md">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 block">
                        Local Heritage Gastronomy
                      </span>
                      <p className="line-clamp-1 italic text-white/80">
                        {activeStop.culinaryTradition}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-[#0B192C]/80 backdrop-blur-md text-amber-200 text-[10px] font-mono border border-amber-500/30">
                      {activeStop.altitude}
                    </span>
                  </div>
                </div>

                {/* Journalistic Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[#F8F9FA]/85 font-normal leading-relaxed line-clamp-2">
                  {activeStop.narrative}
                </p>

                {/* 3 Bespoke Heritage Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeStop.heritageHighlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-2.5 rounded-xl bg-[#0B111E]/80 border border-amber-500/20 hover:border-amber-400/50 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold mb-1 border border-amber-500/30">
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] text-xs font-black hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] group"
                  >
                    <span>Explore This Curated Circuit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Customize Royal Itinerary</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Scroll Indicator Helper */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 pb-2 flex items-center justify-between text-[11px] text-white/50 border-t border-amber-500/15 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#F59E0B]" />
            <span>Scroll down to navigate through India&apos;s cultural stops</span>
          </div>
          <div className="font-mono text-amber-200/80">
            {Math.round(scrollProgress * 100)}% Odyssey Traversed
          </div>
        </div>
      </div>
    </section>
  );
}
