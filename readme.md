# Synopsys SDV eBook Design System

A sub-brand design system for the Synopsys **"Engineering the Software-Defined Vehicle (SDV)"** eBook. It lives under the Synopsys corporate brand (Roboto, signature purple, clean diagram rules) but carries its own approved look: **"Cinematic Automotive + Virtual Innovation"** — dramatic automotive photography, luminous digital overlays, deep purples/blues, and neon accents.

**Sources provided** (in `uploads/`):
- `SVD eBook - Look & Feel Moodboard.pptx` — client-approved Concept 3 v2 moodboard (extracted to `assets/imagery/` and `assets/reference/`)
- `SDV Solution Overview - reimagine this.png` — the client diagram to reimagine (copy at `assets/sdv-overview-original.png`)
- `synopsys-brand-identity-guide.pdf` — corporate brand guide, Mar 2024 (text extract: `uploads/brand-guide-text.md`)
- Company site: https://www.synopsys.com

## CONTENT FUNDAMENTALS

- **Tone:** confident, forward-looking, benefit-led. Big claims stated plainly: "The next generation of vehicles will be defined by software."
- **Voice:** "we" for Synopsys + industry; direct address sparingly ("Let's engineer a cleaner, smarter, more connected tomorrow—together").
- **Headlines:** sentence case, short, often split across a light-weight opening and a bold/gradient payoff ("Reimagining **Mobility**"). Em-dashes used for expansion, not semicolons.
- **Microlabels:** ALL-CAPS with wide tracking ("CHAPTER 1", "DATA INSIGHT", "THE OPPORTUNITY") — they open nearly every layout.
- **Stats as copy:** oversized numbers carry the argument ("3.5× FASTER INNOVATION CYCLES", "$1T+ future in motion", "70% reduction in physical prototypes").
- **Cadence:** triads everywhere — "Better vehicles. Delivered faster. Kept better." / "High-fidelity · Scalable · Open · Cloud-ready".
- **No emoji.** No exclamation marks. Text ≥18pt in decks per corporate guide.

## VISUAL FOUNDATIONS

- **Color:** dark cinematic ink pages (`--ink-0…4`, deep violet-navy) as the default ground; white editorial pages as the counterpoint (max 2 background colors per piece). Corporate Synopsys Purple `#5A2A82` anchors light/print surfaces; **Light Purple `#7E45AF` (`--violet`) is the primary purple on dark grounds** (corporate `#5A2A82` loses contrast on ink). Supporting accents: iris `#9D7BFF`, Synopsys Blue `#0081FE`, magenta `#C84FF0`, soft gold `#FFC94D` (dark grounds; use `--gold-on-light` `#FDB71A` on white). Corporate secondary colors (blue/teal/lime/forest/gold/orange/red) are for charts/data only.
- **Gradients:** the signature `--grad-neon` (violet→blue→cyan) for rules, arrows, stat fills, and ring borders; `--grad-brand` for CTAs and icon tiles; `--grad-gold` sparingly. Gold `#FFC94D` is the lifecycle/loop accent in diagrams (OTA updates + field data). Corporate guide bans gradients only in *diagram fills* — here they live in accents, never body surfaces.
- **Type:** Roboto only (corporate primary; Arial fallback). Light 300 for big headlines with Bold/Black payoff words in solid white (no gradient fills on headline copy); Black 900 for stats; Roboto Mono for telemetry/data microcopy. Eyebrows: 11px, 500, .32em tracking, uppercase.
- **Backgrounds:** full-bleed cinematic photography (gold highways, neon cities, wireframe cars) with **protection gradients** — text always sits on the darkened side; never text on busy imagery. Radial violet glows lift dark pages.
- **Borders/cards:** 12–16px radii, 1px hairline violet borders (`--line`), deep soft shadows; featured cards get a 3px neon top rule or a 2px gradient ring. Light pages: white cards, `--line-light` hairlines, soft purple-tinted shadow.
- **Iconography-in-layout:** icons sit in rounded tiles (gradient, outline, or cyan) or thin circles on light pages.
- **Motifs:** short 40×2px gradient rule above eyebrows; glowing "data stream" lines with node dots; dotted orbit rings; mono telemetry captions (`sim_time 00:04:12`).
- **Animation:** restrained — fades and slow pulses (`--dur` 220ms, `--ease-out`); hover = brightness lift; press = 0.97 scale. No bounces.
- **Imagery color:** cool violet/blue night scenes warmed by gold orange; never grayscale, never warm-only.
- **Diagrams:** dark ground, one glowing core, quiet input rows, gradient-tile outcome rows, neon connector arrows (see `components/diagram/` and `diagrams/`).

## ICONOGRAPHY

- Corporate spec: custom 100×100 line icons, **2px main stroke**, ≤3 colors; primary Light Purple, secondary Teal, accent Orange; supporting text Dark Gray.
- **No icon binaries were provided**, so the system uses **Lucide** (2px stroke — closest CDN match), copied as SVGs into `assets/icons/` (26 glyphs: cpu, camera, circuit-board, code, monitor, brain-circuit, clipboard-check, gauge, shield-check, trending-up, car, cloud-upload, lock, settings, radio-tower, route, scan-eye, refresh-cw, zap, layers, globe, database, arrow-right, wifi, box, play). **Substitution — flagged; replace with Synopsys custom icons if available.**
- Render via the `Icon` component (inlined SVG, tinted via `currentColor` with any token color). On the eBook's dark pages icons tint iris/cyan/gold; on light pages Light Purple/Teal per corporate spec. No emoji, no unicode-as-icon.
- **Logo:** official artwork in `assets/logo/` — `synopsys-white.svg` (dark grounds), `synopsys-color.svg` (preferred on white), `synopsys-black.svg` (limited repro), plus `synopsys-tagline-*.svg` lockups ("Our Technology, Your Innovation™"). Never modify, outline, or recolor; keep clear space ≥ the "s" x-height; ≥85px wide.

## Components

`components/core/`: **Icon**, **Eyebrow**, **Button**, **Chip**, **Stat**, **IconTile**, **Panel** — each with a dark card and a light-surface (`tone="light"`) card
`components/diagram/`: **DiagramNode**, **FlowArrow** — dark + reversed-on-white cards

Intentional additions (no component source was provided; all are authored from the moodboard + brand guide): Icon (glyph wrapper for the copied Lucide set); the rest are the eBook's recurring layout primitives.

## Index

- `styles.css` → `tokens/` (colors, typography, spacing, effects, fonts)
- `assets/imagery/` — moodboard hero photography + wireframe car render · `assets/logo/` — official logo SVGs · `assets/icons/` — Lucide SVGs · `assets/reference/` — moodboard boards · `assets/sdv-overview-original.png` — diagram to reimagine
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (core + diagram) with cards
- `diagrams/` — **three approved SDV Solution Overview pages** (1920×1080, with final client copy “Engineering Complexity Is Growing Exponentially”): A cinematic flow, B signal path, C3 orbit + lifecycle loop (v2 layout per client feedback — copy rail left, enlarged orbit, curved ring labels, gold lifecycle loop)
- `templates/sdv-canvas/` — editable working canvas for the C3 diagram
- `slides/` — sample eBook pages: cover, chapter opener, data spread, quote spread
- `exports/` — client deliverables: brand-guide PDF source (`SDV eBook Brand Guide.html`), diagram print doc, hi-res PNGs (`exports/print/`), Illustrator SVGs, PPTX
- `SKILL.md` — agent skill entry point

## Caveats

- Roboto/Roboto Mono served from Google Fonts (real brand font, no binaries provided).
- Lucide icon substitution flagged above (client's custom icon set pending).
- The `.pptx` embedded fonts (`uploads/moodboard_media/*.fntdata`) are Poppins subsets used only for the moodboard's own annotations — Poppins is NOT part of this system.
