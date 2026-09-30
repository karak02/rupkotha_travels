---
version: alpha
name: Rupkotha Travels
description: Ultra-luxury global travel curation fusing cinematic modern exploration with Bengali heritage warmth.
colors:
  primary: "#0B192C"
  secondary: "#1E3E62"
  tertiary: "#C5A880"
  neutral: "#F8F9FA"
  surface: "#060D17"
  accent: "#E0A96D"
  muted: "#64748B"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.full}"
    padding: 14px
  card-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-light:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
  hero-overlay:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
  badge-muted:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: 8px
---

## Overview

Rupkotha Travels is an ultra-luxury bespoke travel agency crafting cinematic, all-inclusive journeys across Europe, Scandinavia, Asia, and heritage destinations worldwide. The visual identity bridges journalistic travel documentary aesthetics, cinematic video scrubbing, and Bengali heritage warmth.

## Colors

- **Primary (#0B192C):** Midnight Navy canvas for depth, authority, and editorial gravitas.
- **Secondary (#1E3E62):** Deep Sapphire Blue for secondary cards, navigation accents, and structural layers.
- **Tertiary (#C5A880):** Brushed Royal Sand Gold for interactive buttons, active indicators, and luxury badges.
- **Neutral (#F8F9FA):** Warm Pearl Alabaster for crisp typography on dark canvases and editorial card backgrounds.
- **Surface (#060D17):** Obsidian Deep Black for video backdrop overlays and contrast borders.
- **Accent (#E0A96D):** Warm Sunlit Gold for hover states, price tags, and micro-accents.
- **Muted (#64748B):** Slate Grey for metadata, travel durations, and secondary captions.

## Typography

- **Display & Headings (Playfair Display):** High-character editorial serif conveying timeless journey romance, heritage authority, and cinematic prestige.
- **Body & Interface (Plus Jakarta Sans / Inter):** Modern, geometric, ultra-legible humanist sans for dense itinerary details, pricing tables, filter bars, and interactive travel tools.

## Layout

- **Grid:** 12-column responsive layout with max-width `1440px` and adaptive margins.
- **Spacing Scale:** Generous vertical rhythm (`xs: 4px`, `sm: 8px`, `md: 16px`, `lg: 24px`, `xl: 32px`, `2xl: 64px`, `section: 96px`).
- **5-Beat Pinned Video Hero:** Edge-to-edge pinned full-screen viewport (`100vw`, `100vh`) driven by a 5-beat scroll journey scrubbing across the globe.

## Elevation & Depth

- **Hairline Borders:** `1px solid rgba(197, 168, 128, 0.2)` (brushed gold hairlines) to delineate luxury cards without heavy drop-shadows.
- **Dark Glassmorphism:** `rgba(11, 25, 44, 0.75)` with `backdrop-blur-md` for floating navigation bars, booking filter pills, and pinned HUD counters.
- **Gradients:** Subtle directional fades (`linear-gradient(to top, #060D17 0%, transparent 60%)`) over video canvas to ensure 100% WCAG text legibility.

## Shapes

- **Buttons & Pills:** Pill-shaped (`rounded.full`) for effortless luxury touchpoints and navigation tabs.
- **Cards & Media Frames:** Subtle softness (`rounded.lg: 16px`) framing high-resolution travel photography and itinerary modals.

## Components

- `button-primary`: Main booking/enquiry call-to-action in brushed gold with deep navy typography.
- `button-primary-hover`: Interactive hover state transitioning to warm sunlit gold.
- `button-secondary`: Deep sapphire action button for secondary explorations and itinerary downloads.
- `card-dark`: Obsidian floating card for featured packages, flight/hotel inclusions, and itinerary breakdowns.
- `card-light`: Ivory editorial card for customer testimonials, Kolkata travel lounge info, and travel journal entries.
- `hero-overlay`: Gradient veil over the 5-beat scrub video guaranteeing WCAG text contrast.

## Do's and Don'ts

- **Do** maintain strict 60/25/15 color discipline (60% Deep Midnight/Ivory, 25% Sapphire/Card Surface, 15% Gold Accents).
- **Do** keep typography readable with high-contrast scrims over the background video.
- **Do** showcase genuine tour inclusions (meals, visa assistance, 5-star stays, dedicated tour leaders) clearly.
- **Don't** use neon, chaotic saturated colors, or heavy box shadows.
- **Don't** clutter the 5-beat video scroll container with abrupt popups or unconstrained layout shifts.
