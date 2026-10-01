"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  Compass,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mountain,
  Palmtree,
} from "lucide-react";

interface HeroScene {
  id: string;
  badge: string;
  badgeIcon: any;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  align: "left" | "right";
  statLabel: string;
  statValue: string;
}

const HERO_SCENES: HeroScene[] = [
  {
    id: "scene-01",
    badge: "রূপকথা ট্রাভেলস • Curated Escorted Holidays",
    badgeIcon: Sparkles,
    titlePrefix: "Discover Wild Peaks &",
    titleHighlight: "Sacred Waters",
    titleSuffix: "from Kolkata",
    subtitle:
      "All-inclusive small group journeys from Howrah & Sealdah with confirmed train berths, verified stays, and 4 daily homely meals.",
    primaryCtaText: "Explore 13 Fixed Departures",
    primaryCtaHref: "/fixed-departures",
    secondaryCtaText: "Plan Custom Journey",
    secondaryCtaHref: "/customizable-circuits",
    align: "left",
    statLabel: "Confirmed Berths",
    statValue: "Howrah / Sealdah",
  },
  {
    id: "scene-02",
    badge: "The Trans-Himalayan Frontier • 4x4 Circuits",
    badgeIcon: Mountain,
    titlePrefix: "Ancient Monasteries &",
    titleHighlight: "High Mountain Passes",
    titleSuffix: "in Ladakh & Spiti",
    subtitle:
      "Conquer Khardung La (18,380 FT) and high passes with dedicated 4x4 fleets and certified oxygen & medical escorts.",
    primaryCtaText: "View Himalayan Expeditions",
    primaryCtaHref: "/tour-categories",
    secondaryCtaText: "Customizable Circuits",
    secondaryCtaHref: "/customizable-circuits",
    align: "right",
    statLabel: "Highest Pass",
    statValue: "18,380 FT ASL",
  },
  {
    id: "scene-03",
    badge: "Royal Heritage & Coastal Sanctuaries",
    badgeIcon: Palmtree,
    titlePrefix: "Imperial Havelis &",
    titleHighlight: "Serene Backwaters",
    titleSuffix: "Across India",
    subtitle:
      "Experience royal Rajasthan palaces, sacred Varanasi ghats, and relaxing Kerala luxury houseboat retreats.",
    primaryCtaText: "Explore All Destinations",
    primaryCtaHref: "/destinations",
    secondaryCtaText: "Book Your Journey",
    secondaryCtaHref: "/booking",
    align: "left",
    statLabel: "Govt Partner",
    statValue: "Odisha & CG",
  },
];

export default function VideoHeroScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
      const currentScroll = -rect.top;

      if (totalScrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      targetProgressRef.current = progress;
    };

    // Smooth physics loop for scroll-driven video scrubbing and scene choreography
    const animate = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.12;
      const progress = currentProgressRef.current;
      setScrollProgress(progress);

      // Determine active scene
      let sceneIdx = 0;
      if (progress > 0.64) {
        sceneIdx = 2;
      } else if (progress > 0.31) {
        sceneIdx = 1;
      }
      setActiveSceneIndex(sceneIdx);

      // Scroll-driven video frame scrubbing (Instantaneous & jitter-free via Intra-keyframe encoding)
      if (video && video.duration && !isNaN(video.duration) && video.readyState >= 2) {
        const targetTime = Math.min(video.duration - 0.05, Math.max(0, progress * video.duration));
        if (Math.abs(video.currentTime - targetTime) > 0.015) {
          video.currentTime = targetTime;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Compute staggered LEFT -> RIGHT -> LEFT animations
  const getSceneParallax = (index: number) => {
    const p = scrollProgress;

    if (index === 0) {
      // Scene 01 (LEFT): Active 0.0 -> 0.28, exits to left & top
      const opacity = p <= 0.20 ? 1 : Math.max(0, 1 - (p - 0.20) / 0.12);
      const translateX = -(p / 0.32) * 80;
      const translateY = -(p / 0.32) * 40;
      const scale = 1 - (p / 0.32) * 0.03;
      const pointerEvents = opacity > 0.15 ? "auto" : "none";
      return { opacity, transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`, pointerEvents };
    } else if (index === 1) {
      // Scene 02 (RIGHT): Enters from right (0.24 -> 0.36), locks (0.36 -> 0.58), exits to right (0.58 -> 0.70)
      let opacity = 0;
      let translateX = 0;
      let translateY = 0;

      if (p < 0.36) {
        opacity = Math.max(0, (p - 0.24) / 0.12);
        translateX = (1 - opacity) * 80;
        translateY = (1 - opacity) * 30;
      } else if (p <= 0.58) {
        opacity = 1;
        translateX = (p - 0.47) * -20;
        translateY = (p - 0.47) * 20;
      } else {
        opacity = Math.max(0, 1 - (p - 0.58) / 0.12);
        translateX = ((p - 0.58) / 0.12) * 80;
        translateY = -((p - 0.58) / 0.12) * 40;
      }

      const scale = 0.97 + (1 - Math.min(1, Math.abs(p - 0.47) * 3.5)) * 0.03;
      const pointerEvents = opacity > 0.15 ? "auto" : "none";
      return { opacity, transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`, pointerEvents };
    } else {
      // Scene 03 (LEFT): Enters from left (0.58 -> 0.72), stays locked
      const opacity = p <= 0.58 ? 0 : Math.min(1, (p - 0.58) / 0.14);
      const translateX = (1 - opacity) * -80;
      const translateY = (1 - opacity) * 40;
      const scale = 0.96 + Math.min(0.04, Math.max(0, (p - 0.58) * 0.15));
      const pointerEvents = opacity > 0.15 ? "auto" : "none";
      return { opacity, transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`, pointerEvents };
    }
  };

  // Video Frame on-scroll dynamic animations
  const videoFrameScale = 0.95 + scrollProgress * 0.05;
  const videoFrameRadius = Math.max(0, 24 - scrollProgress * 24);
  const videoZoom = 1.0 + scrollProgress * 0.08;
  const videoPanX = (scrollProgress - 0.5) * 30;

  const scrollToScene = (idx: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
    const targets = [0.05, 0.48, 0.92];
    const targetScroll = containerRef.current.offsetTop + targets[idx] * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div
      id="hero-journey"
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#061B12]"
    >
      {/* Sticky Full-Viewport Parallax Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden select-none flex flex-col justify-between p-2 sm:p-4">
        {/* Animated Video Frame (Scroll-driven video scrubbing) */}
        <div
          style={{
            borderRadius: `${videoFrameRadius}px`,
            transform: `scale(${videoFrameScale})`,
            transition: "border-radius 0.2s ease-out, transform 0.1s ease-out",
          }}
          className="absolute inset-2 sm:inset-4 z-0 overflow-hidden border border-[#92FF5F]/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"
        >
          <video
            ref={videoRef}
            src="/videos/hero_journey.mp4"
            playsInline
            muted
            preload="auto"
            style={{
              transform: `translate3d(${videoPanX}px, 0, 0) scale(${videoZoom})`,
              willChange: "transform",
            }}
            className="w-full h-full object-cover origin-center brightness-90 contrast-105"
          />

          {/* Luxury Directional Lighting & Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B192C]/85 via-[#0B192C]/40 to-[#081426]/95" />
          
          {/* Dynamic Side Shadows matching text alignment */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeSceneIndex === 1
                ? "bg-gradient-to-l from-[#0B192C]/90 via-transparent to-transparent"
                : "bg-gradient-to-r from-[#0B192C]/90 via-transparent to-transparent"
            }`}
          />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#081426] via-[#0B192C]/80 to-transparent z-10" />
        </div>

        {/* Top HUD: Government Auth Partner + Scene Switcher */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-20 sm:pt-24 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B192C]/90 border border-[#F59E0B]/35 text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="hidden xs:inline">Govt Authorized Partner</span>
              <span className="xs:hidden">Auth Partner</span>
            </span>
          </div>

          {/* Interactive Scene Segment Indicators */}
          <div className="flex items-center gap-3 bg-[#0B192C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
            <div className="flex items-center gap-1.5 text-xs font-mono text-white/90">
              <span className="text-[#F59E0B] font-bold">
                0{activeSceneIndex + 1}
              </span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">03</span>
            </div>

            <div className="flex items-center gap-1.5 pl-2 border-l border-white/15">
              {HERO_SCENES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToScene(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeSceneIndex
                      ? "w-7 bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]"
                      : idx < activeSceneIndex
                      ? "w-3 bg-[#F59E0B]/50 hover:bg-[#F59E0B]/80"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Jump to scene ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Center Stage: Staggered Dynamic Left -> Right -> Left Layout with Comfortable Eye-Level Margins */}
        <div className="relative z-20 flex-1 flex items-center px-6 sm:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full my-auto">
          {HERO_SCENES.map((scene, idx) => {
            const parallax = getSceneParallax(idx);
            const IconComponent = scene.badgeIcon;
            const isLeft = scene.align === "left";

            return (
              <div
                key={scene.id}
                style={{
                  opacity: parallax.opacity,
                  transform: parallax.transform,
                  pointerEvents: parallax.pointerEvents as any,
                  transition: "opacity 0.15s ease-out, transform 0.15s ease-out",
                }}
                className={`absolute inset-x-6 sm:inset-x-12 lg:inset-x-16 xl:inset-x-20 flex flex-col justify-center max-w-2xl ${
                  isLeft
                    ? "items-start text-left mr-auto"
                    : "items-end text-right ml-auto"
                } space-y-4 sm:space-y-5`}
              >
                {/* 1. Scene Pill Badge */}
                <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F59E0B]/35 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                    <IconComponent className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span className="text-white">{scene.badge}</span>
                  </span>
                </div>

                {/* 2. Bold Headline (Pure White with Crisp Readability) */}
                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {scene.titlePrefix}{" "}
                  <span className="text-white underline decoration-[#F59E0B] decoration-4 underline-offset-4">
                    {scene.titleHighlight}
                  </span>{" "}
                  {scene.titleSuffix && <span className="text-white">{scene.titleSuffix}</span>}
                </h1>

                {/* 3. Concise Subtitle (Pure High-Contrast White) */}
                <p
                  className={`text-sm sm:text-base md:text-lg text-white/95 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
                    isLeft ? "max-w-xl" : "max-w-xl text-right"
                  }`}
                >
                  {scene.subtitle}
                </p>

                {/* 4. Telemetry Tag + Action CTA Buttons */}
                <div
                  className={`flex flex-wrap items-center gap-3 pt-2 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {isLeft ? (
                    <>
                      <Link
                        href={scene.primaryCtaHref}
                        className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] font-black text-xs sm:text-sm uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 border border-white/20 group"
                      >
                        <span>{scene.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4 stroke-[3] text-[#0B192C] group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={scene.secondaryCtaHref}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all backdrop-blur-md shadow-lg"
                      >
                        <Compass className="w-4 h-4 text-[#F59E0B]" />
                        <span className="text-white">{scene.secondaryCtaText}</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href={scene.secondaryCtaHref}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all backdrop-blur-md shadow-lg"
                      >
                        <Compass className="w-4 h-4 text-[#F59E0B]" />
                        <span className="text-white">{scene.secondaryCtaText}</span>
                      </Link>

                      <Link
                        href={scene.primaryCtaHref}
                        className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B192C] font-black text-xs sm:text-sm uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 border border-white/20 group"
                      >
                        <span>{scene.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4 stroke-[3] text-[#0B192C] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom HUD: Subtle Scroll Down Indicator */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 pb-4 sm:pb-6 border-t border-white/10 pt-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/70 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
            <span>
              {activeSceneIndex === 0
                ? "Scene 01 (Left) • Scroll to advance video"
                : activeSceneIndex === 1
                ? "Scene 02 (Right) • Scroll to advance video"
                : "Scene 03 (Left) • Scroll to advance video"}
            </span>
          </div>

          <button
            onClick={() => {
              const nextScene = (activeSceneIndex + 1) % 3;
              scrollToScene(nextScene);
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#F59E0B] hover:text-white transition-colors"
          >
            <span>Jump to 0{activeSceneIndex === 2 ? 1 : activeSceneIndex + 2}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
