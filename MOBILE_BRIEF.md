# Parsons Digital — Mobile Breakpoints Brief
> Paste this entire document to Claude Design as your first message.
> Do not summarise it. Do not paraphrase it. Paste it whole.

---

## What You Are Building

Responsive breakpoints for a production Next.js 14 (App Router) + Tailwind CSS + TypeScript marketing website that is currently **desktop-only**. The desktop layout is complete and must not be changed. Your job is to make it work on mobile and tablet without touching anything above `md:` (768px).

The live site is at **parsonsdigital.com**. The GitHub repo is at **github.com/lepnfldcan/parsons-digital-website**.

---

## The One Rule That Overrides Everything

**Never touch desktop layouts. Ever.**

Use two completely separate layout trees inside each section — one for mobile, one for desktop:

```tsx
{/* MOBILE ONLY — md and below */}
<div className="md:hidden px-6 py-[80px]">
  {/* mobile layout here */}
</div>

{/* DESKTOP ONLY — never touch this */}
<div className="hidden md:flex [original desktop classes]">
  {/* original desktop layout — untouched */}
</div>
```

Section-level wrappers (`<section>`, background colors, IDs) stay shared. Only the inner layout div splits.

---

## Design Tokens — Parsons Digital

These are non-negotiable. Do not introduce any new colors, fonts, or values.

```
Background:     #1e2530  (page bg — never changes)
Primary dark:   #2b3240  (nav mark bg)
Accent:         #0891b2  (cyan — ONE accent color only)
Off-white:      #f4f3f0  (all text)
Muted:          #7a8494  (labels, captions)

Font:           Plus Jakarta Sans — weights 300, 400, 500, 600, 700, 800
Logo font:      Syne 800 — ONLY for the P and D inside the PD mark

No gradients on backgrounds.
No shadows on cards.
No second accent color.
No emoji.
```

---

## Breakpoints

| Breakpoint | Width     | Tailwind prefix |
|------------|-----------|-----------------|
| Desktop    | 1024px+   | `lg:` (current layout) |
| Tablet     | 768px–1023px | `md:` |
| Mobile     | 0–767px   | base (no prefix) |

The current site was built at desktop only. Mobile = base styles (no prefix). Desktop = `md:` prefix to override mobile.

**Horizontal padding rule:**
- Mobile: `px-5` (20px)
- Tablet: `px-10` (40px)
- Desktop: `px-[60px]` (current — do not change)

**Section vertical padding rule:**
- Mobile: `py-[80px]`
- Desktop: `py-[120px]` (current — do not change)

---

## Section by Section

### NAV

Desktop: fixed, `px-[60px] py-6`, mark + wordmark left, CTA button right. Keep as-is.

Mobile: same fixed nav but simplified.
- Reduce horizontal padding: `px-5`
- Keep: PD mark (40px) + wordmark text
- Keep: "Get in Touch" CTA button — but make it smaller: `px-3 py-2 text-[12px]`
- Remove the gap between mark and wordmark if needed to fit
- No hamburger menu — this is a single-page site, all sections are anchor links

The 40px PD mark in the nav is built with exact inline styles. **Do not use Tailwind classes on the mark itself** — it uses pixel-precise dimensions that don't land on Tailwind's 4px grid.

---

### HERO

Desktop: `min-h-screen px-[60px] pt-[140px] pb-[100px]`, left-aligned content, max-width content block.

Mobile layout:
- Padding: `pt-[120px] pb-[80px] px-5`
- Content: left-aligned (do not center — it's a statement, not a poster)
- H1: `clamp(38px, 10vw, 56px)` — smaller clamp range on mobile
- Subtext: `text-[16px]` (was 18px)
- Buttons: stack vertically, `flex-col gap-3`, both full width (`w-full`)
- Scroll indicator: hide on mobile (`md:flex hidden`)
- Grid background and glow: keep as-is (they're absolute positioned, fine on mobile)

---

### SERVICES

Desktop: 2-col header grid, 3-col pricing grid, 4-col à la carte, all at `px-[60px]`.

Mobile layout:

**Header:**
- Stack to single column
- SectionLabel + h2 on top
- Subtext paragraph below, full width

**Pricing cards:**
- `grid-cols-3` → `grid-cols-1` on mobile
- Cards are already Client Components with hover state — leave that logic alone
- Each card full width, same internal layout

**Maintenance strip:**
- Stack to column: text block on top, "Add On" button below, centered

**À la carte grid:**
- `grid-cols-4` → `grid-cols-2` on mobile
- The border trick (gap:1px + colored bg) works at any column count — keep it

---

### WHY ME

Desktop: `grid-cols-[1fr_1.4fr] gap-[80px]`, photo left, content right.

Mobile layout:
- Stack to single column
- Content (label, quote, body, stats) goes **first**
- Photo goes **below** the content
- Photo: keep `aspect-[3/4]`, but full width — remove the accent box (`absolute -bottom-5 -right-5`) on mobile, it overflows in single column
- Stats row: `flex-wrap` with `gap-6`, or stack to 3-col grid at `grid-cols-3`
- Quote font: `clamp(20px, 5vw, 28px)` on mobile

RevealWrapper is already wired — leave it. It works on mobile.

---

### HOW IT WORKS

Desktop: `grid-cols-4 gap-0`, horizontal connecting line across the top.

Mobile layout:
- `grid-cols-1` — steps stack vertically
- Hide the connecting line (`hidden md:block`) — a horizontal line makes no sense vertically
- Each step: `flex flex-row gap-4` — number/dot on the left, title+desc on the right
- Number: stays cyan, `text-[11px] font-extrabold tracking-[0.06em]`
- Add a vertical connector between steps: `absolute left-[10px] top-[24px] bottom-0 w-px bg-[rgba(8,145,178,0.15)]` on the step container

---

### CASE STUDY

Desktop: `grid-cols-2 gap-[60px] p-[60px]`, content left, preview right.

Mobile layout:
- Single column, stacked
- Reduce card padding: `p-6` on mobile (was `p-[60px]`)
- Content column first, preview/stats second
- The `aspect-[16/10]` preview box: keep it, full width
- Stat boxes: `grid-cols-2 gap-3` — stays the same
- Top gradient line: keep as-is

---

### CONTACT CTA

Desktop: `text-center py-[120px] px-[60px]`.

Mobile layout:
- Already centered — minimal changes needed
- Padding: `py-[80px] px-5`
- Heading: `clamp(28px, 8vw, 48px)` on mobile
- Buttons: stack to `flex-col gap-3`, both `w-full`

---

### FOOTER

Desktop: `px-[60px] py-8 flex items-center justify-between` — wordmark left, contact info right.

Mobile layout:
- Stack: `flex-col items-center gap-3 text-center`
- Wordmark centered
- Contact info centered, may need to break into multiple lines

---

## RevealWrapper — Leave It Alone

The scroll reveal is already implemented and works on mobile. `IntersectionObserver` at `threshold: 0.12`, `opacity 0.7s ease`, `translateY(24px)` → `translateY(0)`. Don't touch it.

---

## PricingCard — Leave It Alone

The PricingCard component is a Client Component with `useState` hover effects and exact inline styles. The hover system (border-top accent → cyan on hover, ambient glow) is built precisely. Don't refactor it — just let it reflow at full width on mobile.

---

## What NOT To Do

- Do not add a hamburger/drawer menu — single-page site, not needed
- Do not center the hero content on mobile — keep it left-aligned
- Do not add new accent colors or gradients
- Do not remove the scroll reveal
- Do not change any desktop styles — only add mobile overrides
- Do not use Tailwind classes on the PD mark — it uses inline styles for a reason
- Do not add transitions or animations beyond what already exists

---

## File Locations

```
app/
  layout.tsx        ← fonts, body bg
  page.tsx          ← section order + dividers
  globals.css       ← Tailwind base + @theme

components/
  layout/
    Nav.tsx         ← Client Component, scroll detection
    Footer.tsx
  sections/
    Hero.tsx
    Services.tsx    ← imports PricingCard
    WhyMe.tsx
    HowItWorks.tsx
    CaseStudy.tsx
    Contact.tsx
  ui/
    PDMark.tsx      ← inline styles only, all sizes
    PricingCard.tsx ← Client Component, hover state
    RevealWrapper.tsx ← Client Component, IntersectionObserver
    SectionLabel.tsx
    ButtonPrimary.tsx
    ButtonGhost.tsx

lib/
  contact.ts
  pricing.ts
  steps.ts
```

---

## Verification Checklist

Before saying you are done, check every item:

- [ ] Desktop layout is **identical** to before — zero regressions
- [ ] Mobile tested at 375px and 390px viewport width
- [ ] Tablet tested at 768px
- [ ] No horizontal scroll at any viewport width
- [ ] Hero buttons stack vertically and are full width on mobile
- [ ] Pricing cards are single column on mobile
- [ ] Why Me photo appears below content on mobile
- [ ] How It Works steps stack vertically, connecting line hidden
- [ ] Case Study card padding reduced, columns stacked
- [ ] Footer stacked and centered on mobile
- [ ] Scroll reveal still fires on mobile
- [ ] PD mark in nav still renders correctly at all sizes
- [ ] No new colors, fonts, or values introduced
