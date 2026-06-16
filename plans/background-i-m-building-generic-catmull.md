# Interactive GitHub Projects Portfolio — Implementation Plan

## Context

The user is building a modern, interactive portfolio website to showcase their GitHub
projects. It needs a prominent hero with a brief intro, a horizontal top navigation bar,
and a clean **responsive grid** of project cards — where **each card has a unique looping
animation matched to that project's theme**. Three Figma frames were imported as aesthetic
references (Nael freelance portfolio, Den.Cool studio motion interface, Container
balloon-game). The aesthetic goal is editorial: bold typography, a minimal studio feel,
and intentional dark sections — **but not a fully dark site**.

An earlier attempt was interrupted mid-build (it had reset `App.tsx` to empty and was
partway through an `OrbitAnimation`). We are redoing it cleanly.

### Decisions confirmed with the user
- **Data**: curated static project data (realistic mock GitHub repos). No backend →
  **PureFrontend**, no Supabase.
- **Imports**: fresh, responsive build using the frames as aesthetic inspiration, **plus
  embed one frame as a real interactive feature** → the Den.Cool **Container** balloon-game.
- **Animations**: keep all **six** themed per-card animations (orbit, wave, particles,
  morph, pulse, grid).
- **Ground**: **light editorial base with dark accent sections** (not full dark).

### On "creating skills"
No new harness skills are needed. The existing make skills (`aesthetic-stance`,
`design-imports`, `image-attachments`) plus installed libraries (`motion`, native canvas,
`lucide-react`) cover everything. Custom drawing uses the HTML canvas directly — **not
`konva`**, which is unsupported here.

## Current state (verified)
- `src/app/App.tsx` — empty skeleton (centered empty div). Needs full build.
- `src/styles/theme.css` — currently **dark-first** (`--background: #0c0c0c`), accent
  `#ffd600`. Has `.dark` block + `@theme inline` mappings. **Must be re-grounded to light.**
- `src/styles/fonts.css` — Roboto + Space Grotesk via Google CDN.
- `src/app/components/` — full Radix UI kit + `figma/ImageWithFallback.tsx` available.
- `src/imports/Container/index.tsx` (+ `svg-jo9pvbv51d.ts`) — the frame to embed.
- `package.json` — `motion`, `lucide-react`, `canvas-confetti` already installed. No
  `@make-kits` package exists in this project.

## Theme & fonts (do first)

### `src/styles/theme.css` (edit in place — preserve `.dark` + `@theme inline`)
Re-ground `:root` to a **warm light editorial** palette:
- `--background` warm off-white (≈ `#f4f1ea`), `--foreground` near-black (`#0c0c0c`).
- `--card` slightly lighter/paper white; `--accent` keep yellow `#ffd600`.
- Add tokens for the **dark band** sections used selectively (hero band / interactive
  feature): a dark surface (`#0c0c0c`) + its light foreground, exposed as utility-friendly
  values. Keep `--border` as a low-opacity hairline.
- Ensure body text meets AA contrast on the light ground.

### `src/styles/fonts.css` (imports only, at top of file)
Editorial pairing, resolved through the **Figma fonts catalog** where available with Google
fallback (per `fonts-wiring` guidance; do not hard-code an unavailable face):
- **Display/headings**: Satoshi (referenced by the imports; via Fontshare/Figma catalog).
- **Body**: Roboto (already present, readable).
- **Mono** for repo metadata/tags/labels: a structural mono (e.g. Space Mono / JetBrains
  Mono). Obscure `di` / `hkgros` are only used inside the imported frame's own markup —
  no need to globally wire them.

> Note: do not add Tailwind `text-*`/`font-*` size/weight utilities unless changing those
> deliberately — type defaults live in `theme.css` base layer.

## Component architecture (all new under `src/app/components/`)

- `data/projects.ts` — curated array of ~6–8 projects. Each: `id`, `name`, `description`,
  `language`, `stars`, `forks`, `topics[]`, `repoUrl`, `liveUrl?`, and
  `animation: 'orbit' | 'wave' | 'particles' | 'morph' | 'pulse' | 'grid'`. Realistic
  names/numbers (no lorem ipsum).
- `TopNav.tsx` — sticky horizontal top bar; anchor links (Work / About / Playground /
  Contact) with smooth scroll; accent hover/active states.
- `Hero.tsx` — prominent intro: name, one-line role, short bio, primary CTA. Bold display
  type; asymmetric/editorial composition.
- `ProjectGrid.tsx` — responsive CSS Grid (`auto-fit`/`minmax`), collapses to 1 col under
  ~1000px. Maps `projects` → `ProjectCard`.
- `ProjectCard.tsx` — renders repo metadata (mono labels, `lucide-react` star/fork/git
  icons), topics as chips, links, and an animation canvas region driven by
  `animation` type. Subtle hover lift/border-accent micro-interaction.
- `animations/` — six components sharing one contract `({ active }: { active: boolean })`:
  `OrbitAnimation`, `WaveAnimation`, `ParticlesAnimation`, `MorphAnimation`,
  `PulseAnimation`, `GridAnimation`. Canvas-based (or `motion/react` SVG for morph/pulse).
  A small `useCanvasLoop` hook handles `requestAnimationFrame`, DPR scaling, and cleanup.
  - **Perf/accessibility**: `IntersectionObserver` to run only on-screen cards; respect
    `prefers-reduced-motion` (render a static frame when set).
- `InteractiveFeature.tsx` — a "Playground" section that **embeds the imported Container
  frame** per `design-imports` rules: `import Container from "../../imports/Container"` and
  render it inside a **responsive, scaled, bounded wrapper** (the frame is fixed-width, so
  contain it with `max-w`, `overflow-hidden`, and a transform-scale wrapper) on a dark band
  for contrast. Do not edit files in `imports/`.
- `About.tsx` — short editorial bio / skills row.
- `Footer.tsx` — contact links (GitHub, email, etc.).

### `src/app/App.tsx`
Default export assembling: `TopNav` → `Hero` → `ProjectGrid` (Work) → `About` →
`InteractiveFeature` (Playground) → `Footer`. Section `id`s wired to nav anchors. One
intentional dark band (hero or playground) so the page reads light-with-dark-sections.

## Notable risks / decisions
- Embedded Container frame is fixed-width and carries its own studio styling → contain &
  scale it; treat it as a self-styled feature island, don't force it onto theme tokens.
- Six canvas loops on one page → gate with `IntersectionObserver` + reduced-motion to keep
  it smooth.

## Verification
1. App auto-reloads in the Figma Make preview (dev server already running — do **not** run
   `vite build` / `npm run dev`).
2. Visually confirm in the preview surface: hero + horizontal nav, project grid, each card
   shows its distinct animation, and nav anchors smooth-scroll to sections.
3. Resize to ~1000px and narrower: grid collapses to single column, nav adapts, embedded
   frame stays contained (no horizontal overflow).
4. Confirm the embedded Den.Cool Container interaction renders and is interactive.
5. Toggle OS reduced-motion: animations fall back to static frames.
6. Spot-check AA contrast of body text on the light ground.
