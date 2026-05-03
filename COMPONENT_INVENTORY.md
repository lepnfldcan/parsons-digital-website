# COMPONENT_INVENTORY.md — Parsons Digital
> Maps every named section of `Parsons Digital Website.html` to its Next.js component equivalent.
> All Tailwind class strings reflect the exact CSS in the source HTML.

---

## 1. Nav (Header)

**File path:** `components/layout/Nav.tsx`
**Type:** Client Component
**Why client:** Needs `useState` + `useEffect` to track `scrollY > 60` and toggle the scrolled background class.

**Root element classes:**
```
fixed top-0 left-0 right-0 z-[100] px-[60px] py-6 flex items-center justify-between bg-transparent transition-[background,padding] duration-[400ms]
```
Scrolled state (add via class toggle):
```
bg-[rgba(30,37,48,0.95)] backdrop-blur-md !py-4 border-b border-[rgba(244,243,240,0.08)]
```

**Children / sub-components:**
- `<PDMark />` — 40px icon mark (see DESIGN.md §7). Pure presentational, inline in Nav.
- `<NavWordmark />` — "Parsons/Digital" text lockup. Inline in Nav.
- `<a href="#contact">` — "Get in Touch" ghost CTA button.

**Mobile behavior:** Not yet implemented. On mobile: collapse to hamburger or keep single CTA only.

**State variations:**
- Default: transparent background, `py-6`
- Scrolled (`scrollY > 60`): `bg-[rgba(30,37,48,0.95)]` + blur + border-bottom + `py-4`
- CTA hover: `border-[#0891b2] text-[#0891b2]`

**Dynamic data:** None — all static.

---

## 2. Hero

**File path:** `components/sections/Hero.tsx`
**Type:** Server Component
**Why server:** Fully static — no interactivity, no state. All content is hardcoded copy.

**Root element classes:**
```
min-h-screen flex flex-col justify-center px-[60px] pt-[140px] pb-[100px] relative overflow-hidden bg-[#1e2530]
```

**Children / sub-components:**
- `<HeroBg />` — absolute-positioned div with two radial gradient overlays (cyan glow). Inline presentational.
- `<HeroGrid />` — absolute-positioned div with 80×80px grid pattern background. Inline presentational.
- Eyebrow label — `text-[11px] font-medium tracking-[0.18em] uppercase text-[#0891b2]` with left line `::before`
- `<h1>` — `clamp(48px,7vw,88px)` extrabold, `<em>` for "hard" in cyan
- Subtext `<p>` — 18px light, `rgba(244,243,240,0.55)`
- `<HeroActions />` — flex row: `<ButtonPrimary>` + `<ButtonGhost>`
- Scroll indicator — absolute bottom-left, `left-[60px] bottom-10`

**Mobile behavior:** Stack vertically, reduce padding to `px-6 pt-24 pb-16`, H1 drops to `clamp(36px,8vw,48px)`.

**State variations:** None — fully static.

**Dynamic data:** None.

---

## 3. Services (Pricing)

**File path:** `components/sections/Services.tsx`
**Type:** Server Component
**Why server:** Fully static pricing data. No interactivity needed.

**Root element classes:**
```
py-[120px] px-[60px] max-w-[1200px] mx-auto
```

**Children / sub-components:**
- `<ServicesHeader />` — 2-col grid: section label + heading left, subtext right
- `<PricingGrid />` — 3-col grid of `<PricingCard />`
  - `<PricingCard variant="carrd|wordpress|custom" />` — each card has tier, price, commitment, desc, feature list, timeline, CTA button. Top border color variant via prop.
- `<MaintenanceStrip />` — dashed border row with label + "Add On" button
- `<AlaCarteGrid />` — section label + 4-col grid of 8 items

**PricingCard sub-structure:**
```
bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-xl p-8 flex flex-col relative overflow-hidden
```
- Card tier: `text-[10px] font-semibold tracking-[0.14em] uppercase text-[#7a8494]`
- Price: `text-[40px] font-extrabold tracking-[-0.02em] text-[#f4f3f0] leading-none`
- Commitment: `text-xs text-[#7a8494]`
- Description: `text-[13.5px] text-[rgba(244,243,240,0.55)] leading-[1.65] border-b border-[rgba(244,243,240,0.08)]`
- Feature list: `flex flex-col gap-2.5` with cyan SVG checkmark per item
- Timeline: `text-[11px] text-[#7a8494] tracking-[0.02em]`
- CTA: card-btn pattern (see DESIGN.md §7)

**Mobile behavior:** Stack pricing cards to single column. À la carte drops to 2-col.

**State variations:**
- Card default → hover: border becomes `rgba(8,145,178,0.3)`, bg lightens, top `::before` turns cyan
- Card button hover: border + text turn cyan

**Dynamic data:** Pricing data can be extracted to a `lib/pricing.ts` constants file.

---

## 4. WhyMe

**File path:** `components/sections/WhyMe.tsx`
**Type:** Server Component
**Why server:** Static content + static image. No interactivity.

**Root element classes:**
```
py-[120px] px-[60px] max-w-[1200px] mx-auto
```

**Children / sub-components:**
- `<WhyMePhotoCol />` — `relative` wrapper:
  - `<Image>` — `aspect-[3/4] object-cover object-[center_15%] rounded-xl w-full` — source: `/public/liam.jpg`
  - Accent box — `absolute bottom-[-20px] right-[-20px] w-[120px] h-[120px] border-2 border-[rgba(8,145,178,0.3)] rounded-xl pointer-events-none`
- `<WhyMeContent />`:
  - Section label
  - Quote — `clamp(22px,3vw,32px) font-bold` with `<em>` in cyan for "I'm one person"
  - Body copy — `text-[15px] font-light text-[rgba(244,243,240,0.55)] leading-[1.8]`
  - Detail / email link — `text-[13px] text-[rgba(244,243,240,0.4)]`
  - `<WhyMeStats />` — flex row of 3 stats, separated by top border

**WhyMeStats structure:**
Each stat: number (`text-[28px] font-extrabold tracking-[-0.02em]`) with `<span>` suffix in cyan, label below in `text-[11px] text-[#7a8494]`.

**Mobile behavior:** Stack grid to single column, photo first.

**State variations:** Scroll reveal on photo col and content items with stagger.

**Dynamic data:** Stats values (`6–12hr`, `100%`, `Forever.`) can be extracted to constants. Photo path: `/public/liam.jpg`.

---

## 5. HowItWorks

**File path:** `components/sections/HowItWorks.tsx`
**Type:** Server Component
**Why server:** Fully static — 4 hardcoded steps, no interactivity.

**Root element classes:**
```
py-[120px] px-[60px] max-w-[1200px] mx-auto
```

**Children / sub-components:**
- Section label + heading
- `<StepsGrid />` — `grid grid-cols-4 gap-0 mt-[60px] relative`
  - Connecting line: `::before` pseudo — `absolute top-[20px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(8,145,178,0.3)] to-transparent`
  - 4× `<Step />` — each has step number (with cyan dot `::before`), title, description

**Step structure:**
```
px-6 relative
```
- Number: `text-[11px] font-extrabold text-[#0891b2] tracking-[0.06em] mb-5 flex items-center gap-2` with `::before` 10px cyan circle
- Title: `text-base font-bold text-[#f4f3f0] tracking-[-0.01em] mb-2.5`
- Desc: `text-[13px] text-[rgba(244,243,240,0.45)] leading-[1.65]`

**Mobile behavior:** Stack steps to 2×2 grid or single column. Hide connecting line on mobile.

**State variations:** Scroll reveal with stagger delays on each step.

**Dynamic data:** Steps array can be extracted to constants:
```ts
const steps = [
  { num: '01', title: 'Drop me a message', desc: '...' },
  ...
]
```

---

## 6. CaseStudy

**File path:** `components/sections/CaseStudy.tsx`
**Type:** Server Component
**Why server:** Fully static content — hardcoded case study for Luminary IHC.

**Root element classes:**
```
py-[120px] px-[60px] max-w-[1200px] mx-auto
```

**Children / sub-components:**
- Section label + heading
- `<CaseStudyCard />`:
  ```
  bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-2xl p-[60px] grid grid-cols-2 gap-[60px] items-center relative overflow-hidden
  ```
  Top gradient rule: `::before` — `absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0891b2] to-transparent`

**Left column:**
- Eyebrow: `text-[10px] font-semibold tracking-[0.16em] uppercase text-[#0891b2]`
- Title: `text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2]`
- Body paragraphs: `text-sm text-[rgba(244,243,240,0.5)] leading-[1.75]`
- Service tags: flex-wrap row of pill badges
- Blockquote: left border `border-l-2 border-[#0891b2] pl-5`
- External link with arrow SVG

**Right column:**
- Site preview placeholder: `aspect-[16/10] bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-[10px]`
- 2-col stats grid: 2× small stat cards (`bg-[rgba(244,243,240,0.03)] border rounded-lg p-4`)

**Mobile behavior:** Stack to single column. Reduce padding.

**State variations:** Scroll reveal on the card. External links open in `target="_blank"`.

**Dynamic data:** All static. Could be extracted to a `lib/caseStudies.ts` if more are added.

---

## 7. ContactCTA

**File path:** `components/sections/ContactCTA.tsx`
**Type:** Server Component
**Why server:** Static content + mailto/wa.me href links. No form state needed.

**Root element classes:**
```
py-[120px] px-[60px] max-w-[1200px] mx-auto text-center
```

**Children / sub-components:**
- Section label: centered — `justify-content: center`
- `<h2>` heading: `clamp(36px,5vw,64px) font-extrabold tracking-[-0.03em] leading-[1.08] max-w-[700px] mx-auto`
- Subtext `<p>`: `text-base font-light text-[rgba(244,243,240,0.45)] max-w-[420px] mx-auto leading-[1.7]`
- `<ContactActions />` — `flex items-center justify-center gap-4 flex-wrap`:
  - `<ButtonPrimary href="mailto:liam@liamparsonsdigital.com">` with email SVG icon
  - `<ButtonWA href="https://wa.me/525545402582">` with WhatsApp SVG icon

**Mobile behavior:** Buttons stack to column on small screens.

**State variations:** Scroll reveal with stagger on heading, subtext, buttons.

**Dynamic data:** Email and WhatsApp links — extract to `lib/contact.ts` constants:
```ts
export const CONTACT = {
  email: 'liam@liamparsonsdigital.com',
  whatsapp: 'https://wa.me/525545402582',
}
```

---

## 8. Footer

**File path:** `components/layout/Footer.tsx`
**Type:** Server Component
**Why server:** Fully static — no interactivity.

**Root element classes:**
```
border-t border-[rgba(244,243,240,0.08)] px-[60px] py-8 flex items-center justify-between w-full
```

**Children / sub-components:**
- Left: wordmark — `text-[13px] font-extrabold tracking-[-0.02em] flex items-baseline`
  - "Parsons" — `text-[#f4f3f0]`
  - "/" — `text-[#0891b2] mx-0.5`
  - "Digital" — `font-light text-[#f4f3f0]`
- Right: contact string — `text-[11px] text-[rgba(244,243,240,0.25)] tracking-[0.04em]`

**Mobile behavior:** Stack to column, center both elements.

**State variations:** None.

**Dynamic data:** Contact string can reference `CONTACT` constants.

---

## 9. PDMark (shared component)

**File path:** `components/ui/PDMark.tsx`
**Type:** Server Component
**Why server:** Pure presentational — renders the P/slash/D badge. No state.

**Props:**
```ts
interface PDMarkProps {
  size?: 28 | 40 | 56 | 80   // default: 40
  bg?: 'dark' | 'darker'      // 'dark' = #3d4555, 'darker' = #2b3240
}
```

**Render (40px / nav default):**
```tsx
<div className="w-10 h-10 bg-[#2b3240] rounded-[7px] flex items-center justify-center flex-shrink-0">
  <div className="flex items-center font-['Syne'] font-extrabold text-base text-[#f4f3f0] tracking-[-0.03em] gap-0.5 px-1">
    <span>P</span>
    <div className="w-0.5 h-[13px] bg-[#0891b2] rotate-[14deg] rounded-[2px] flex-shrink-0" />
    <span>D</span>
  </div>
</div>
```

Scale the font-size, slash dimensions, and border-radius proportionally for other sizes. See `logos/Parsons Digital Logo Pack.html` for all size variants.

**State variations:** None.

**Dynamic data:** None.

---

## Suggested File Structure

```
app/
  layout.tsx          ← loads fonts, sets bg-[#1e2530], renders <Nav> + <Footer>
  page.tsx            ← assembles all section components in order

components/
  layout/
    Nav.tsx           ← Client Component (scroll state)
    Footer.tsx        ← Server Component
  sections/
    Hero.tsx          ← Server Component
    Services.tsx      ← Server Component
    WhyMe.tsx         ← Server Component
    HowItWorks.tsx    ← Server Component
    CaseStudy.tsx     ← Server Component
    ContactCTA.tsx    ← Server Component
  ui/
    PDMark.tsx        ← Server Component (reused in Nav + Footer)
    ButtonPrimary.tsx ← Server Component
    ButtonGhost.tsx   ← Server Component
    ButtonWA.tsx      ← Server Component
    SectionLabel.tsx  ← Server Component
    RevealWrapper.tsx ← Client Component (IntersectionObserver scroll reveal)

lib/
  contact.ts          ← CONTACT constants (email, whatsapp)
  pricing.ts          ← Pricing tier data
  steps.ts            ← How It Works steps array
```
