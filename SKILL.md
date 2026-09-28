---
name: synopsys-sdv-design
description: Use this skill to generate well-branded interfaces and assets for the Synopsys SDV eBook sub-brand (cinematic automotive + virtual innovation style under the Synopsys corporate brand), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill first — it holds the content fundamentals, visual foundations, iconography rules, and file index. Then explore:
- `tokens/` + `styles.css` — all colors, type, spacing, effects as CSS custom properties (dark `--ink-*` ground is the default; light-surface tokens exist too)
- `components/` — React primitives (JSX) with usage notes in each `.prompt.md`
- `assets/` — official Synopsys logos, Lucide icon SVGs, moodboard photography
- `diagrams/` and `slides/` — finished reference pages showing the system in use; match their patterns
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
