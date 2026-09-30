"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { LucideIcon } from "lucide-react";

export interface CardItem {
  id?: string;
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
  badge?: string;
  tagline?: string;
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export type CardFanItem = CardItem;

interface CardFanCarouselProps {
  cards: CardItem[];
}

const MAX_VISIBLE = 7;
const HALF = 3;

// Compact, elegant fan positions with tight offsets and small scale multipliers
const FAN_POSITIONS = [
  { rot: -16, scale: 0.75, x: -16, y: 3.2, zIndex: 2 },
  { rot: -10, scale: 0.82, x: -10, y: 1.6, zIndex: 4 },
  { rot: -5,  scale: 0.90, x: -5,  y: 0.5, zIndex: 6 },
  { rot: 0,   scale: 0.98, x: 0,   y: 0.0, zIndex: 25 },
  { rot: 5,   scale: 0.90, x: 5,   y: 0.5, zIndex: 6 },
  { rot: 10,  scale: 0.82, x: 10,  y: 1.6, zIndex: 4 },
  { rot: 16,  scale: 0.75, x: 16,  y: 3.2, zIndex: 2 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 13 * 16;       // 208px
  else if (width < 640) idealPx = 15 * 16;  // 240px
  else if (width < 768) idealPx = 17 * 16;  // 272px
  else if (width < 1024) idealPx = 19 * 16; // 304px
  else idealPx = 21 * 16;                    // 336px

  if (typeof window === "undefined") return 1;
  const available = window.innerHeight * 0.55;
  if (available >= idealPx) return 1;
  return Math.max(0.55, available / idealPx);
}

function getSlotConfig(slot: number) {
  if (slot >= 0 && slot < FAN_POSITIONS.length) {
    return FAN_POSITIONS[slot];
  }
  const center = HALF;
  const distance = (slot - center) / center;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 16,
    scale: 0.98 - 0.23 * absDistance,
    x: distance * 16,
    y: absDistance * absDistance * 3.2,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-[#0F3B27]/20 dark:border-white/10 bg-white/95 dark:bg-white/10 backdrop-blur-[16px] text-[#0F3B27] dark:text-white/90 cursor-pointer shrink-0 z-30 outline-none shadow-[0_6px_20px_rgba(15,59,39,0.12)] hover:border-[#0F3B27]/50 hover:bg-[#0F3B27] hover:text-[#92FF5F] active:scale-90 transition-all duration-300 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:border before:border-[#0F3B27]/[0.05] before:pointer-events-none";

export default function CardFanCarousel({ cards }: CardFanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = cards.length;
  const needsPagination = totalCards > 1;
  const [centerIndex, setCenterIndex] = useState(0);

  // Map each card index to its slot index (0..6) relative to centerIndex
  const getVisibleMap = useCallback((center: number) => {
    const map = new Map<number, number>();
    if (!totalCards) return map;

    for (let slot = 0; slot < MAX_VISIBLE; slot++) {
      const offset = slot - HALF;
      const cardIdx = ((center + offset) % totalCards + totalCards) % totalCards;
      map.set(cardIdx, slot);
    }
    return map;
  }, [totalCards]);

  const cycle = useCallback((direction: "left" | "right") => {
    if (isAnimating.current || !needsPagination) return;
    isAnimating.current = true;
    directionRef.current = direction;
    setCenterIndex(prev =>
      direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
    );
  }, [totalCards, needsPagination]);

  const goToCard = useCallback((targetIndex: number) => {
    if (isAnimating.current || targetIndex === centerIndex) return;
    isAnimating.current = true;
    directionRef.current = targetIndex > centerIndex ? "right" : "left";
    setCenterIndex(targetIndex);
  }, [centerIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      completedCount++;
      if (completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = getSlotConfig(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
        };

        // Ensure proper stacking order so center card is always on top
        card.style.zIndex = String(zIndex);

        if (isFirstMount) {
          gsap.fromTo(
            card,
            { x: 0, y: `${5 * hMult}rem`, rotation: 0, scale: 0.8, opacity: 0 },
            {
              ...target,
              duration: 0.7,
              ease: "power2.out",
              delay: 0.04 + slot * 0.03,
              onComplete: onCardDone,
            }
          );
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 36 : -36;
          gsap.set(card, {
            x: `${enterX}rem`,
            y: `${y * hMult}rem`,
            rotation: direction === "right" ? 24 : -24,
            scale: 0.6,
            opacity: 0,
          });
          gsap.to(card, {
            ...target,
            duration: 0.55,
            ease: "power2.out",
            onComplete: onCardDone,
          });
        } else {
          gsap.to(card, {
            ...target,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: onCardDone,
          });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -36 : 36;
        gsap.to(card, {
          x: `${exitX}rem`,
          opacity: 0,
          scale: 0.5,
          rotation: direction === "right" ? -24 : 24,
          duration: 0.35,
          ease: "power2.in",
          zIndex: 0,
        });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Interactive Hover Spreading
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: NodeJS.Timeout | null = null;
    const centerSlot = HALF;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = getSlotConfig(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 1.8 * hM;
            targetScale *= 1.06;
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength = 5.5 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
              targetRot -= 2.5 / (distance + 1);
            } else {
              targetX += pushStrength * mult;
              targetRot += 2.5 / (distance + 1);
            }

            if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot) targetY -= 0.8 * hM;
            if (slot === 0 && hoveredSlot > centerSlot) targetY -= 0.8 * hM;
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.45,
          delay,
          ease: "elastic.out(1,.75)",
          overwrite: "auto",
        });
        el.style.zIndex = String(base.zIndex);
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
        if (activeSlot !== slot) { activeSlot = slot; updateHoverLayout(slot); }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => { activeSlot = null; updateHoverLayout(null); }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => { if (!isAnimating.current) updateHoverLayout(activeSlot); };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap]);

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg className="relative z-[2] w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <section className="flex flex-col items-center w-full py-2 lg:py-4 px-3 sm:px-6 relative z-20 overflow-visible">
      <div className="flex items-center justify-center w-full max-w-[80rem]">
        <div ref={containerRef} className="fan-layout relative flex items-center justify-center w-full h-[14rem] sm:h-[16.5rem] md:h-[18.5rem] lg:h-[20.5rem]">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isCenter = index === centerIndex;

            const cardContent = (
              <div
                className={`relative w-full h-full overflow-hidden rounded-[inherit] transition-all duration-300 ${
                  isCenter ? "ring-3 ring-[#92FF5F] shadow-[0_20px_40px_-10px_rgba(15,59,39,0.5)]" : ""
                }`}
              >
                <img
                  src={card.imgUrl}
                  loading="lazy"
                  alt={card.alt || card.title || `Card ${index}`}
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082015]/95 via-[#0F3B27]/45 to-black/20 z-20 pointer-events-none" />

                {/* Optional Rich Content Layer */}
                {(card.title || card.badge || card.tagline) && (
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-3 sm:p-3.5 text-white pointer-events-none">
                    <div className="flex items-center justify-between gap-1">
                      {card.badge && (
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8.5px] sm:text-[9.5px] font-black tracking-wider uppercase backdrop-blur-md border shadow-xs ${
                          isCenter
                            ? "bg-[#92FF5F] text-[#0F3B27] border-[#92FF5F]"
                            : "bg-[#0F3B27]/90 text-[#92FF5F] border-[#92FF5F]/30"
                        }`}>
                          {Icon && <Icon className="w-2.5 h-2.5" />}
                          {card.badge}
                        </span>
                      )}
                      {card.tagline && (
                        <span className="text-[8.5px] sm:text-[9px] font-bold text-white/90 tracking-wide uppercase">
                          {card.tagline}
                        </span>
                      )}
                    </div>

                    <div>
                      {card.title && (
                        <h3 className="font-serif text-[11px] sm:text-xs md:text-sm font-bold text-white leading-snug drop-shadow-md mb-0.5 line-clamp-1">
                          {card.title}
                        </h3>
                      )}
                      {card.subtitle && (
                        <p className="text-[9.5px] sm:text-[10.5px] text-white/80 line-clamp-2 leading-relaxed font-normal">
                          {card.subtitle}
                        </p>
                      )}
                      {isCenter && (
                        <div className="mt-1 pt-1 border-t border-white/20 flex items-center justify-between text-[8.5px] font-mono text-[#92FF5F]">
                          <span>Standard #0{index + 1}</span>
                          <span className="font-bold text-white uppercase tracking-wider">Active</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );

            return card.linkUrl && isCenter ? (
              <a
                key={card.id || index}
                href={card.linkUrl}
                target={card.linkUrl.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="fan-card absolute inset-0 m-auto w-[125px] h-[175px] sm:w-[145px] sm:h-[200px] md:w-[165px] md:h-[230px] lg:w-[185px] lg:h-[255px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-white/90 bg-[#0F3B27] select-none block"
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={card.id || index}
                onClick={() => goToCard(index)}
                className="fan-card absolute inset-0 m-auto w-[125px] h-[175px] sm:w-[145px] sm:h-[200px] md:w-[165px] md:h-[230px] lg:w-[185px] lg:h-[255px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-white/90 bg-[#0F3B27] select-none block"
                title={`Click to view Standard #${index + 1}`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>

      {needsPagination && (
        <div className="flex items-center justify-center gap-3 mt-4 md:mt-6 z-30">
          <button className={`${ARROW_CLASSES} w-9 h-9 md:w-10 md:h-10`} onClick={() => cycle("left")} aria-label="Previous standard">
            {chevron("left")}
          </button>
          <div className="flex items-center gap-1.5">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goToCard(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === centerIndex
                    ? "w-5 h-2 bg-[#0F3B27] dark:bg-[#92FF5F]"
                    : "w-2 h-2 bg-[#0F3B27]/25 dark:bg-white/25 hover:bg-[#0F3B27]/50"
                }`}
              />
            ))}
          </div>
          <button className={`${ARROW_CLASSES} w-9 h-9 md:w-10 md:h-10`} onClick={() => cycle("right")} aria-label="Next standard">
            {chevron("right")}
          </button>
        </div>
      )}
    </section>
  );
}
