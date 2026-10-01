"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  LayoutGrid,
  List,
  Maximize2,
  X,
  Layers,
  Cpu,
  Sparkles,
  Compass,
  Sliders,
  Terminal,
  Activity,
  CheckCircle2,
  ChevronRight,
  Eye,
  Box,
} from "lucide-react";

export interface DesignToken {
  id: string;
  title: string;
  category: string;
  metric: string;
  unit?: string;
  codeSnippet: string;
  cadSpec: string;
  description: string;
  status: "OPTIMIZED" | "VERIFIED" | "ACTIVE" | "PRODUCTION";
  details: {
    label: string;
    value: string;
  }[];
  tag: string;
}

const DESIGN_TOKENS: DesignToken[] = [
  {
    id: "bezel-frame-geometry",
    title: "Bezel Frame Geometry",
    category: "Geometry / Specs",
    metric: "48.5 mm",
    unit: "CAD Diameter",
    codeSnippet: "radius: 48.5mm | bevel: 12.4° | octagonal-cut",
    cadSpec: "ISO-22810 / Rugged Core Housing / Impact Shield",
    description:
      "Precision-machined octagonal bezel frame engineered from reinforced carbon-resin matrix. Provides high shock dissipation and structural rigidity across extreme expedition altitudes.",
    status: "PRODUCTION",
    tag: "GEO-01",
    details: [
      { label: "Material Composition", value: "Carbon Core Guard + Stainless Rim" },
      { label: "Impact Rating", value: "20 Bar / 200M Water & G-Force Proof" },
      { label: "Tolerance Threshold", value: "±0.005 mm CNC Micro-Tolerance" },
      { label: "Finish Treatment", value: "Diamond-Like Carbon (DLC) Matte" },
    ],
  },
  {
    id: "resin-band-texture",
    title: "Resin Band Material",
    category: "Materials & Textures",
    metric: "Matte Black",
    unit: "Durometer 75A",
    codeSnippet: "texture: micro-hex-grip | flexibility: 280% | bio-resin",
    cadSpec: "Bio-Mass Fluoroelastomer / Anti-Allergic Strap",
    description:
      "Sweat-resistant, high-tensile fluoroelastomer strap with laser-etched micro-hexagon internal drainage channels, ensuring all-day wrist ergonomics under heavy Himalayan and monsoon expeditions.",
    status: "VERIFIED",
    tag: "MAT-04",
    details: [
      { label: "Tensile Strength", value: "18.5 MPa Break Threshold" },
      { label: "Thermal Range", value: "-30°C to +85°C Operating Temp" },
      { label: "Clasp Mechanism", value: "Dual-Pin Titanium Tang Buckle" },
      { label: "Surface Texture", value: "Micro-Knurled Anti-Slip Coating" },
    ],
  },
  {
    id: "dial-typography-system",
    title: "Dial Typography",
    category: "Type Scale / UI",
    metric: "SF Pro Mono",
    unit: "Optical Scale",
    codeSnippet: "family: Monospace-Spec | tracking: +0.08em | tabular-nums",
    cadSpec: "High-Legibility Tactical Scale / Dual Luminescence",
    description:
      "Custom high-contrast monospace typographic system crafted for instantaneous split-second readability in low-light temple ghats, night flights, and alpine ascents.",
    status: "OPTIMIZED",
    tag: "TYP-02",
    details: [
      { label: "Display Ratio", value: "10:1 Monumental Contrast Ladder" },
      { label: "Anti-Aliasing", value: "Subpixel Rendering / Crisp Edge Vector" },
      { label: "Glyph Kerning", value: "Strict Tabular Monospace Alignment" },
      { label: "Dynamic Sizing", value: "Responsive clamp(12px, 1.5vw, 16px)" },
    ],
  },
  {
    id: "led-backlight-unit",
    title: "LED Backlight Unit",
    category: "Lighting / FX",
    metric: "3500 K",
    unit: "Warm Amber Glow",
    codeSnippet: "lumens: 180 lm | afterglow: 3.0s | phosphor: super-il",
    cadSpec: "High-Efficiency Neon Phosphor / Smart Auto-Light",
    description:
      "Ultra-efficient micro-LED illumination array with gradual phosphor fade-out curve, tuned to warm 3500K spectral temperature to prevent nighttime night-vision disruption.",
    status: "ACTIVE",
    tag: "LGT-08",
    details: [
      { label: "Illumination Type", value: "High-Luminance Micro-SMD Array" },
      { label: "Power Draw", value: "0.012W Peak / Low Energy Curve" },
      { label: "Sensor Activation", value: "Tilt Gyroscope 40° Auto-Engage" },
      { label: "Color Index (CRI)", value: "94+ True Color Rendering" },
    ],
  },
  {
    id: "altitude-telemetry-sensor",
    title: "Barometric Altimeter",
    category: "Sensors / Telemetry",
    metric: "18,380 FT",
    unit: "MEMS Sensor",
    codeSnippet: "sample-rate: 100Hz | accuracy: ±1m | sea-level-sync",
    cadSpec: "Triple-Sensor Barometer / Thermo-Compensated",
    description:
      "Solid-state atmospheric pressure and altitude calculation engine calibrated specifically for high Himalayan passes like Khardung La and Chang La in Ladakh.",
    status: "PRODUCTION",
    tag: "SNS-03",
    details: [
      { label: "Sensor Architecture", value: "MEMS Piezoresistive Diaphragm" },
      { label: "Elevation Range", value: "-700M to 10,000M ASL" },
      { label: "Trend Logging", value: "24-Hour Automatic Pressure Graph" },
      { label: "Storm Alarm", value: "Sudden Barometric Drop Alert System" },
    ],
  },
  {
    id: "solar-recharge-mesh",
    title: "Tough Solar Array",
    category: "Power / Endurance",
    metric: "100% Infinite",
    unit: "Photovoltaic Mesh",
    codeSnippet: "cell-efficiency: 24.2% | storage: 9-month reserve",
    cadSpec: "Transparent Solar Glass Substrate / Low-Light Harvest",
    description:
      "Integrated micro-gap shadow-dispersing solar crystal array positioned beneath the dial markings, generating continuous operating current even from dim indoor lighting.",
    status: "VERIFIED",
    tag: "PWR-05",
    details: [
      { label: "Energy Harvest", value: "Operates from Fluorescent & Sunlight" },
      { label: "Backup Reserve", value: "270 Days Operating in Total Darkness" },
      { label: "Power Save Mode", value: "Deep Sleep Auto-Trigger at 22:00" },
      { label: "Cell Lifecycle", value: "15+ Years Degradation-Free Lithium" },
    ],
  },
  {
    id: "magnetic-damper-core",
    title: "Magnetic Dampening",
    category: "Internal Mechanics",
    metric: "4,800 A/m",
    unit: "Magnetic Resistance",
    codeSnippet: "iso-764: class-1 | shielding: mu-metal enclosure",
    cadSpec: "Pure Iron Flux Enclosure / Zero Needle Deviation",
    description:
      "Ferromagnetic shield cage isolating sensitive quartz and digital microcontroller circuitry against external electromagnetic interference from vehicles and aircraft.",
    status: "OPTIMIZED",
    tag: "MEC-07",
    details: [
      { label: "Shielding Material", value: "Mu-Metal High Permeability Alloy" },
      { label: "Standard Rating", value: "JIS Class 1 / ISO 764 Magnetic Shield" },
      { label: "Gear Train Damping", value: "Silicon-Injected Fluid Dampers" },
      { label: "Weight Surcharge", value: "Under 1.4 Grams Total Mass" },
    ],
  },
  {
    id: "sapphire-crystal-lens",
    title: "Anti-Reflective Sapphire",
    category: "Optics / Lens",
    metric: "9 Mohs",
    unit: "Hardness Index",
    codeSnippet: "coating: 7-layer AR | scratch-proof | clarity: 99.8%",
    cadSpec: "Single-Crystal Synthetic Corundum / Chamfered Edge",
    description:
      "Ultra-hard synthetic sapphire crystal disc with internal dual-layer anti-reflective coating, eliminating glare across blinding desert sands and reflective Himalayan snowfields.",
    status: "PRODUCTION",
    tag: "OPT-09",
    details: [
      { label: "Surface Hardness", value: "Mohs Scale 9 (Diamond Sub-Level)" },
      { label: "Coating Type", value: "Multi-Spectrum Anti-Reflective (AR)" },
      { label: "Bevel Profile", value: "0.4mm Diamond-Polished Facet" },
      { label: "Hydrophobic Layer", value: "Oleophobic Fingerprint & Water Bead" },
    ],
  },
];

export default function DesignSystemLayoutAnimation() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedToken, setSelectedToken] = useState<DesignToken | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Geometry / Specs",
    "Materials & Textures",
    "Type Scale / UI",
    "Lighting / FX",
    "Sensors / Telemetry",
    "Power / Endurance",
  ];

  const filteredTokens = DESIGN_TOKENS.filter((t) =>
    selectedCategory === "ALL" ? true : t.category === selectedCategory
  );

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedToken(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative w-full py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#020617] text-[#F8FAFC] border-t border-b border-slate-800/80 overflow-hidden select-none">
      {/* CAD Blueprint High-Tech Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 242, 254, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 242, 254, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#92FF5F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(0,242,254,0.15)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>DESIGN SYSTEM LAYOUT ANIMATION ENGINE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
              Interactive Design System Showcase
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-normal leading-relaxed">
              Experience dynamic spring-physics layout projection, <code className="text-cyan-400 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">layoutId</code> modal morphing, and fluid 4-column grid vs. 1-column list state switching.
            </p>
          </div>

          {/* View Mode Controls & Status Indicator */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-[#0B192C] shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Switch to 4-Column Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span>GRID VIEW</span>
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  viewMode === "list"
                    ? "bg-cyan-500 text-[#0B192C] shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Switch to 1-Column List View"
              >
                <List className="w-4 h-4" />
                <span>LIST VIEW</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(0,242,254,0.2)]"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Animated Token Cards Container */}
        <LayoutGroup>
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
            }}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                : "flex flex-col gap-3.5"
            }
          >
            {filteredTokens.map((token) => (
              <motion.div
                key={token.id}
                layout
                layoutId={`card-container-${token.id}`}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedToken(token)}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className={`group relative rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,242,254,0.15)] transition-colors duration-300 cursor-pointer overflow-hidden flex ${
                  viewMode === "grid"
                    ? "flex-col justify-between p-6 min-h-[260px]"
                    : "flex-col sm:flex-row sm:items-center justify-between p-5 gap-4"
                }`}
              >
                {/* Corner High-Tech CAD Markings */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-800 group-hover:border-cyan-400/60 transition-colors pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-800 group-hover:border-cyan-400/60 transition-colors pointer-events-none" />

                {/* Top / Left Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <motion.span
                      layoutId={`card-tag-${token.id}`}
                      className="px-2.5 py-0.5 rounded bg-[#0B192C] border border-slate-800 text-[10px] font-mono font-bold text-cyan-400"
                    >
                      {token.tag}
                    </motion.span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      {token.status}
                    </span>
                  </div>

                  <div>
                    <motion.span
                      layoutId={`card-category-${token.id}`}
                      className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1"
                    >
                      {token.category}
                    </motion.span>
                    <motion.h3
                      layoutId={`card-title-${token.id}`}
                      className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug"
                    >
                      {token.title}
                    </motion.h3>
                  </div>

                  {viewMode === "list" && (
                    <p className="text-xs text-slate-400 line-clamp-1 max-w-xl">
                      {token.description}
                    </p>
                  )}
                </div>

                {/* Bottom / Right Metric Indicator */}
                <div
                  className={`flex ${
                    viewMode === "grid"
                      ? "items-end justify-between pt-4 border-t border-slate-800/80 mt-4"
                      : "items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800/80"
                  }`}
                >
                  <div>
                    <motion.div
                      layoutId={`card-metric-${token.id}`}
                      className="text-2xl font-mono font-black text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    >
                      {token.metric}
                    </motion.div>
                    {token.unit && (
                      <span className="text-[10px] font-mono text-slate-500 block">
                        {token.unit}
                      </span>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-[#0B192C] border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>

        {/* Modal / Card Expansion using Shared layoutId Morphing */}
        <AnimatePresence>
          {selectedToken && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-text">
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedToken(null)}
                className="absolute inset-0 bg-[#0B192C]/80 backdrop-blur-xl"
              />

              {/* Centered Expanded Morphing Modal Container */}
              <motion.div
                layoutId={`card-container-${selectedToken.id}`}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,242,254,0.25)] overflow-hidden z-10"
              >
                {/* CAD Grid Overlay inside Modal */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(0, 242, 254, 0.2) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 242, 254, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedToken(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-[#0B192C] border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      layoutId={`card-tag-${selectedToken.id}`}
                      className="px-3 py-1 rounded-lg bg-[#0B192C] border border-cyan-500/40 text-xs font-mono font-bold text-cyan-400 shadow-md"
                    >
                      {selectedToken.tag}
                    </motion.span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                      STATUS: {selectedToken.status}
                    </span>
                  </div>

                  <div>
                    <motion.span
                      layoutId={`card-category-${selectedToken.id}`}
                      className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1"
                    >
                      {selectedToken.category}
                    </motion.span>
                    <motion.h3
                      layoutId={`card-title-${selectedToken.id}`}
                      className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
                    >
                      {selectedToken.title}
                    </motion.h3>
                  </div>

                  {/* Highlight Metric Banner */}
                  <div className="p-5 rounded-2xl bg-[#0B192C]/90 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">
                        CALIBRATED VALUE / TOKEN METRIC
                      </span>
                      <motion.div
                        layoutId={`card-metric-${selectedToken.id}`}
                        className="text-3xl sm:text-4xl font-mono font-black text-cyan-400"
                      >
                        {selectedToken.metric}
                      </motion.div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-slate-400 block">
                        SPEC CLASSIFICATION
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-white font-semibold">
                        {selectedToken.cadSpec}
                      </span>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {selectedToken.description}
                  </p>

                  {/* Code Snippet Box */}
                  <div className="p-3.5 rounded-xl bg-[#0B192C] border border-slate-800 text-xs font-mono text-cyan-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <code>{selectedToken.codeSnippet}</code>
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono">
                      TOKEN PARAMS
                    </span>
                  </div>

                  {/* Micro Specs List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedToken.details.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#0B192C]/50 border border-slate-800/80"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          {item.label}
                        </span>
                        <span className="text-xs font-mono text-white font-semibold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500">
                      Press <kbd className="px-1.5 py-0.5 bg-[#0B192C] border border-slate-800 rounded text-cyan-400">ESC</kbd> or click outside to dismiss
                    </span>
                    <button
                      onClick={() => setSelectedToken(null)}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#0B192C] text-xs font-mono font-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                    >
                      CLOSE SPEC
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
