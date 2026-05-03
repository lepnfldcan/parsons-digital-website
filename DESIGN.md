# DESIGN.md — Parsons Digital
> Extracted from `Parsons Digital Website.html`. All values are exact. Use this as the single source of truth when configuring Tailwind or writing component styles.

---

## 1. Brand & Voice

Parsons Digital is a one-person freelance web design practice serving small businesses in the US and Canada. The visual identity is dark, minimal, and confident — a flat near-black background (`#1e2530`), a single cyan accent (`#0891b2`), and off-white type. There are no gradients on backgrounds, no decorative illustrations, and no emoji. Typography is set exclusively in Plus Jakarta Sans (all UI) and Syne (logo letters only). The brand voice is direct, first-person singular, and warm without being salesy: short sentences, no agency speak, one idea at a time. The tagline is *"Websites that work as hard as you do."*

---

## 2. Color Tokens

| Token name | Hex | Tailwind class (custom) | Semantic role |
|------------|-----|------------------------|---------------|
| `slate` | `#2b3240` | `bg-slate` / `text-slate` | Primary dark — nav bg, cards, marks |
| `slate2` | `#1e2530` | `bg-slate2` | Deepest dark — page background |
| `cyan` | `#0891b2` | `bg-cyan` / `text-cyan` | Primary accent — CTAs, slash, highlights, checkmarks |
| `cyan-hover` | `#0779a0` | `hover:bg-cyan-hover` | Hover state for primary button |
| `white` | `#f4f3f0` | `text-white-pd` | Off-white — all body text on dark |
| `mid` | `#7a8494` | `text-mid` | Secondary — labels, captions, muted text |
| `faint` | `rgba(244,243,240,0.08)` | `border-faint` | Borders and dividers on dark backgrounds |

### Alpha variants used (not tokenised — use inline or extend Tailwind)
| Usage | Value |
|-------|-------|
| Hero subtext | `rgba(244,243,240,0.55)` |
| Card description | `rgba(244,243,240,0.55)` |
| Card feature text | `rgba(244,243,240,0.65)` |
| Body copy (Why Me) | `rgba(244,243,240,0.55)` |
| Detail text | `rgba(244,243,240,0.4)` |
| Case body | `rgba(244,243,240,0.5)` |
| Step description | `rgba(244,243,240,0.45)` |
| Contact sub | `rgba(244,243,240,0.45)` |
| Footer right | `rgba(244,243,240,0.25)` |
| Scroll label | `rgba(244,243,240,0.25)` |
| Card hover bg | `rgba(244,243,240,0.05)` |
| Card default bg | `rgba(244,243,240,0.03)` |
| Nav ghost button border | `rgba(244,243,240,0.2)` |
| Card button border | `rgba(244,243,240,0.15)` |
| Card button text | `rgba(244,243,240,0.7)` |

### Tailwind `theme.extend.colors` config
```js
colors: {
  slate:  '#2b3240',
  slate2: '#1e2530',
  cyan:   { DEFAULT: '#0891b2', hover: '#0779a0' },
  'white-pd': '#f4f3f0',
  mid:    '#7a8494',
}
```

### Accent colors (pricing card top borders only)
| Card | Color | Value |
|------|-------|-------|
| Carrd (green) | Emerald/40 | `rgba(16,185,129,0.4)` |
| WordPress (blue) | Blue/40 | `rgba(59,130,246,0.4)` |
| Custom Build (gold) | Amber/40 | `rgba(245,158,11,0.4)` |

---

## 3. Typography

### Font families
```js
// tailwind.config.js
fontFamily: {
  sans: ['"Plus Jakarta Sans"', 'sans-serif'],  // everything
  mark: ['Syne', 'sans-serif'],                  // logo P and D letters only
}
```

### Google Fonts import (required in layout)
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

### Type scale

| Role | Size | Weight | Line height | Tracking | Tailwind classes |
|------|------|--------|-------------|----------|-----------------|
| Hero H1 | `clamp(48px, 7vw, 88px)` | 800 | 1.04 | -0.03em | `text-[clamp(48px,7vw,88px)] font-extrabold leading-[1.04] tracking-[-0.03em]` |
| Section heading | `clamp(32px, 4vw, 52px)` | 800 | 1.1 | -0.02em | `text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em]` |
| Contact heading | `clamp(36px, 5vw, 64px)` | 800 | 1.08 | -0.03em | `text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.08] tracking-[-0.03em]` |
| Why Me quote | `clamp(22px, 3vw, 32px)` | 700 | 1.3 | -0.01em | `text-[clamp(22px,3vw,32px)] font-bold leading-[1.3] tracking-[-0.01em]` |
| Card price | 40px | 800 | 1 | -0.02em | `text-[40px] font-extrabold leading-none tracking-[-0.02em]` |
| Stat number | 28px | 800 | — | -0.02em | `text-[28px] font-extrabold tracking-[-0.02em]` |
| Case study title | 28px | 800 | 1.2 | -0.02em | `text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em]` |
| Step title | 16px | 700 | — | -0.01em | `text-base font-bold tracking-[-0.01em]` |
| Hero subtext | 18px | 300 | 1.7 | — | `text-[18px] font-light leading-[1.7]` |
| Body (section sub) | 16px | 300 | 1.7 | — | `text-base font-light leading-[1.7]` |
| Why Me body | 15px | 300 | 1.8 | — | `text-[15px] font-light leading-[1.8]` |
| Card description | 13.5px | 400 | 1.65 | — | `text-[13.5px] leading-[1.65]` |
| Card feature | 13px | 400 | 1.4 | — | `text-[13px] leading-[1.4]` |
| Case body | 14px | 400 | 1.75 | — | `text-sm leading-[1.75]` |
| Step description | 13px | 400 | 1.65 | — | `text-[13px] leading-[1.65]` |
| Nav wordmark | 15px | 800 | — | -0.02em | `text-[15px] font-extrabold tracking-[-0.02em]` |
| Card tier label | 10px | 600 | — | 0.14em | `text-[10px] font-semibold tracking-[0.14em] uppercase` |
| Section label | 10px | 500 | — | 0.18em | `text-[10px] font-medium tracking-[0.18em] uppercase` |
| Hero eyebrow | 11px | 500 | — | 0.18em | `text-[11px] font-medium tracking-[0.18em] uppercase` |
| Card commitment | 12px | 400 | — | — | `text-xs` |
| Card timeline | 11px | 400 | — | 0.02em | `text-[11px] tracking-[0.02em]` |
| Stat label | 11px | 400 | 1.4 | — | `text-[11px] leading-[1.4]` |
| À la carte label | 13px | 600 | — | — | `text-[13px] font-semibold` |
| À la carte price | 12px | 400 | — | — | `text-xs` |
| Nav CTA | 13px | 600 | — | — | `text-[13px] font-semibold` |
| Button primary | 14px | 700 | — | 0.01em | `text-sm font-bold tracking-[0.01em]` |
| Button ghost | 14px | 500 | — | — | `text-sm font-medium` |
| Footer left | 13px | 800 | — | -0.02em | `text-[13px] font-extrabold tracking-[-0.02em]` |
| Footer right | 11px | 400 | — | 0.04em | `text-[11px] tracking-[0.04em]` |
| Scroll indicator | 11px | 400 | — | 0.12em | `text-[11px] tracking-[0.12em] uppercase` |

---

## 4. Spacing Scale

Values actually used in the layout:

| Value | px | Tailwind class |
|-------|----|----------------|
| 4px | 4 | `gap-1` / `p-1` |
| 6px | 6 | `gap-1.5` |
| 8px | 8 | `gap-2` / `p-2` |
| 10px | 10 | `gap-2.5` |
| 12px | 12 | `gap-3` / `p-3` |
| 14px | 14 | `gap-3.5` |
| 16px | 16 | `gap-4` / `p-4` |
| 20px | 20 | `gap-5` / `p-5` |
| 24px | 24 | `gap-6` / `p-6` |
| 28px | 28 | `gap-7` / `mb-7` |
| 32px | 32 | `gap-8` / `mb-8` |
| 36px | 36 | `mb-9` |
| 40px | 40 | `gap-10` / `p-10` |
| 48px | 48 | `mb-12` |
| 60px | 60 | `px-[60px]` (horizontal page padding) |
| 64px | 64 | `mb-16` |
| 80px | 80 | `gap-[80px]` (Why Me grid gap) |
| 120px | 120 | `py-[120px]` (section vertical padding) |
| 140px | 140 | `pt-[140px]` (hero top padding) |

---

## 5. Border Radius Scale

| Usage | Value | Tailwind class |
|-------|-------|----------------|
| PD mark (80px size) | 13px | `rounded-[13px]` |
| PD mark (40px size) | 7px | `rounded-[7px]` |
| Pricing cards | 12px | `rounded-xl` |
| Case study card | 16px | `rounded-2xl` |
| Buttons (primary, ghost-wa, card-btn) | 7px | `rounded-[7px]` |
| Nav CTA button | 6px | `rounded-md` |
| À la carte grid | 10px | `rounded-[10px]` |
| Maintenance strip | 10px | `rounded-[10px]` |
| Photo (Why Me) | 12px | `rounded-xl` |
| Photo accent box | 12px | `rounded-xl` |
| Case study stat cards | 8px | `rounded-lg` |
| Step dot | 50% | `rounded-full` |
| PD slash (mark) | 2px | `rounded-[2px]` |
| Service tags (case study) | 20px | `rounded-full` |

---

## 6. Shadow Scale

This design uses **no box-shadows** on the main dark site. Depth is created entirely through background opacity, border opacity, and border-color transitions on hover. The only exception is `backdrop-filter: blur(12px)` on the scrolled nav.

| Usage | Value |
|-------|-------|
| Scrolled nav blur | `backdrop-filter: blur(12px)` — `backdrop-blur-md` |
| All cards | No shadow — border only |
| Buttons | No shadow |

---

## 7. Component Patterns

### Primary Button `.btn-primary`
```
inline-flex items-center gap-2 bg-[#0891b2] text-white font-bold text-sm tracking-[0.01em] px-7 py-3.5 rounded-[7px] no-underline transition-[background,transform] duration-200 hover:bg-[#0779a0] hover:-translate-y-px
```

### Ghost Button `.btn-ghost`
```
inline-flex items-center gap-2 text-[rgba(244,243,240,0.6)] text-sm font-medium no-underline transition-colors duration-200 hover:text-[#f4f3f0]
```

### WhatsApp Button `.btn-wa`
```
inline-flex items-center gap-2 bg-[rgba(244,243,240,0.06)] text-[rgba(244,243,240,0.75)] font-semibold text-sm px-7 py-3.5 rounded-[7px] no-underline border border-[rgba(244,243,240,0.12)] transition-[border-color,color] duration-200 hover:border-[rgba(244,243,240,0.3)] hover:text-[#f4f3f0]
```

### Nav Ghost CTA `.nav-cta`
```
text-[13px] font-semibold text-[#f4f3f0] no-underline px-5 py-[9px] border border-[rgba(244,243,240,0.2)] rounded-md transition-[border-color,color] duration-200 hover:border-[#0891b2] hover:text-[#0891b2]
```

### Pricing Card `.pricing-card`
```
bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-xl p-8 flex flex-col relative overflow-hidden transition-[border-color,background] duration-200 hover:border-[rgba(8,145,178,0.3)] hover:bg-[rgba(244,243,240,0.05)]
```
Top border accent (via `::before` pseudo-element, 2px, transparent → cyan on hover). Per-card color overrides on the top border:
- Carrd: `border-t-2 border-[rgba(16,185,129,0.4)]`
- WordPress: `border-t-2 border-[rgba(59,130,246,0.4)]`
- Custom: `border-t-2 border-[rgba(245,158,11,0.4)]`

### Card Button `.card-btn`
```
block text-center py-[11px] rounded-[7px] font-semibold text-[13px] no-underline border border-[rgba(244,243,240,0.15)] text-[rgba(244,243,240,0.7)] transition-[border-color,color] duration-200 hover:border-[#0891b2] hover:text-[#0891b2]
```

### Section Divider `.divider`
```
w-full max-w-[1200px] mx-auto h-px bg-[rgba(244,243,240,0.08)]
```

### Section Label
```
text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a8494] mb-5 flex items-center gap-3
```
With `::after` pseudo: `flex-1 h-px bg-[rgba(244,243,240,0.08)] max-w-[60px]`

### PD Mark (40px nav size)
```html
<div class="w-10 h-10 bg-[#2b3240] rounded-[7px] flex items-center justify-center">
  <div class="flex items-center font-['Syne'] font-extrabold text-base text-[#f4f3f0] tracking-[-0.03em] gap-0.5 px-1">
    <span>P</span>
    <div class="w-0.5 h-[13px] bg-[#0891b2] rotate-[14deg] rounded-[2px]"></div>
    <span>D</span>
  </div>
</div>
```

---

## 8. Layout & Breakpoints

### Max-widths
| Context | Value |
|---------|-------|
| All sections | `max-w-[1200px] mx-auto` |
| Nav (full width) | `w-full` |
| Footer (full width) | `w-full` |

### Horizontal padding (gutter)
| Context | Value | Tailwind |
|---------|-------|---------|
| Nav | 60px each side | `px-[60px]` |
| All sections | 60px each side | `px-[60px]` |
| Footer | 60px each side | `px-[60px]` |
| Hero scroll indicator | 60px from left | `left-[60px]` |

### Vertical padding
| Context | Value | Tailwind |
|---------|-------|---------|
| All sections | 120px top + bottom | `py-[120px]` |
| Hero | 140px top, 100px bottom | `pt-[140px] pb-[100px]` |
| Footer | 32px top + bottom | `py-8` |

### Grid layouts
| Section | Grid | Gap |
|---------|------|-----|
| Services header | `grid-cols-2` | `gap-10` |
| Pricing cards | `grid-cols-3` | `gap-4` |
| À la carte | `grid-cols-4` | `gap-px` |
| Why Me | `grid-cols-[1fr_1.4fr]` | `gap-[80px]` |
| How It Works steps | `grid-cols-4` | `gap-0` |
| Case study card | `grid-cols-2` | `gap-[60px]` |

### Breakpoints
The current site is desktop-only HTML — no responsive breakpoints implemented yet. When migrating to Next.js, implement these:

| Breakpoint | Width | Recommended behavior |
|------------|-------|---------------------|
| `sm` | 640px | Stack pricing cards to 1-col, reduce px to 24px |
| `md` | 768px | Stack Why Me grid, stack case study grid |
| `lg` | 1024px | Full desktop layout kicks in |
| `xl` | 1280px | Max-width 1200px centers content |

---

## 9. Motion

### Scroll reveal (all `.reveal` elements)
```css
/* Initial state */
opacity: 0;
transform: translateY(24px);
transition: opacity 0.7s ease, transform 0.7s ease;

/* Triggered state (IntersectionObserver adds .visible) */
opacity: 1;
transform: none;
```
Stagger delays:
- `.reveal-delay-1` → `transition-delay: 0.1s`
- `.reveal-delay-2` → `transition-delay: 0.2s`
- `.reveal-delay-3` → `transition-delay: 0.3s`
- `.reveal-delay-4` → `transition-delay: 0.4s`

Observer threshold: `0.12` (fires when 12% of element is visible). One-shot — unobserves after firing.

In Tailwind / Framer Motion:
```tsx
// Use framer-motion with viewport once
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.12 }}
  transition={{ duration: 0.7, ease: 'easeOut', delay }}
/>
```

### Nav scroll transition
```css
transition: background 0.4s, padding 0.4s;
```
Fires at `scrollY > 60px`. Tailwind: `transition-[background,padding] duration-[400ms]`

### Button hover transitions
```css
transition: background 0.2s, transform 0.15s;   /* primary */
transition: color 0.2s;                           /* ghost */
transition: border-color 0.2s, color 0.2s;       /* nav CTA, card btn */
```
All hover lifts: `transform: translateY(-1px)` on `.btn-primary` only.

### Pricing card hover
```css
transition: border-color 0.2s, background 0.2s;
```
Top border `::before` pseudo also transitions: `transition: background 0.2s`
