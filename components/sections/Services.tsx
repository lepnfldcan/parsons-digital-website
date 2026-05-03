import SectionLabel from '@/components/ui/SectionLabel';
import PricingCard from '@/components/ui/PricingCard';
import RevealWrapper from '@/components/ui/RevealWrapper';
import MobilePricingCarousel from '@/components/sections/MobilePricingCarousel';

const pricingCards = [
  {
    id: 'carrd',
    tier: 'Carrd Landing Page',
    price: '$500',
    commitment: 'One-time · Yours forever',
    description: "Get online fast without the headache. One sharp, focused page: who you are, what you do, how people reach you.",
    features: [
      'Single-page custom site on Carrd',
      'Contact form + social links + SEO basics',
      'Mobile-ready + SSL',
      "Revisions until it's right",
    ] as const,
    timeline: '5–7 day turnaround',
    accentColor: 'rgba(16,185,129,0.6)',
    accentGlow: 'rgba(16,185,129,0.15)',
  },
  {
    id: 'wordpress',
    tier: 'WordPress Site',
    price: '$1,800',
    commitment: 'One-time · 1 year hosting included',
    description: "More than one page can say. Multiple services, room to grow, built on the platform that powers 43% of the web.",
    features: [
      'Custom theme · 5–8 pages built',
      'Contact forms + Google Analytics + SEO setup',
      'Daily backups · SSL · malware scanning',
      "Revisions until it's right",
    ] as const,
    timeline: '2–3 week turnaround',
    accentColor: 'rgba(59,130,246,0.6)',
    accentGlow: 'rgba(59,130,246,0.15)',
  },
  {
    id: 'custom',
    tier: 'Custom Build',
    price: '$3,500',
    commitment: 'One-time · 1 year hosting included',
    description: "Built from scratch around what your business actually needs. Booking systems, third-party integrations, payments, AI tools — scoped to your specific situation.",
    features: [
      'Fully custom-coded · Next.js · no templates',
      'Advanced SEO + e-commerce + integrations',
      'Enterprise-grade security + post-launch support',
      "Revisions until it's right",
    ] as const,
    finePrint: 'Complex integrations and custom functionality scoped individually.',
    timeline: '3–4 week turnaround',
    accentColor: 'rgba(245,158,11,0.6)',
    accentGlow: 'rgba(245,158,11,0.15)',
  },
] as const;

const alaCarte = [
  { label: 'Extra pages', price: '$150 each' },
  { label: 'CRM integration (HubSpot, Pipedrive)', price: '$400–600' },
  { label: 'AI lead intake form', price: '$500' },
  { label: 'Calendly + booking setup', price: '$150' },
  { label: 'Google Analytics + Search Console', price: '$150' },
  { label: 'Content writing', price: '$75/hr' },
  { label: 'Rush delivery (under 2 weeks)', price: '+25%' },
  { label: 'White-label / partnership', price: "Let's talk" },
] as const;

const CARD_DELAYS = [0, 100, 200] as const;

export default function Services() {
  return (
    <section id="services" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — md and below */}
      <div className="md:hidden py-[80px]">

        {/* Section number */}
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#0891b2',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
          paddingLeft: '32px',
        }}>
          01
        </div>

        {/* Header — single column */}
        <div style={{ padding: '0 32px', marginBottom: '8px' }}>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0]">
            Simple pricing.<br />No surprises.
          </h2>
          <p className="text-base font-light text-[rgba(244,243,240,0.5)] leading-[1.7] mt-4">
            All sites are mobile-responsive, fully secured, and yours to keep. One-time payments — no subscriptions, no lock-in.
          </p>
        </div>

        {/* Pricing carousel — GIO-style drag carousel, 88% wide cards */}
        <div style={{ marginTop: '24px', marginBottom: '32px' }}>
          <MobilePricingCarousel cards={pricingCards} />
        </div>

        {/* Maintenance strip — stacked, centered */}
        <div style={{ margin: '0 32px' }}>
          <RevealWrapper>
            <div style={{
              padding: '20px 24px',
              border: '1px dashed rgba(244,243,240,0.12)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center',
            }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#f4f3f0', marginBottom: '4px' }}>
                  Optional Add-On &nbsp;·&nbsp;{' '}
                  <span style={{ color: '#0891b2' }}>Monthly Maintenance · $150/mo</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(244,243,240,0.45)', lineHeight: 1.5 }}>
                  Entirely optional. Security updates, performance checks, minor content changes (up to 5/month), priority support.
                </div>
              </div>
              <a
                href="#contact"
                className="flex-shrink-0 whitespace-nowrap border border-[rgba(244,243,240,0.15)] text-[rgba(244,243,240,0.7)] hover:border-[#0891b2] hover:text-[#0891b2] px-6 py-[10px] rounded-[7px] font-semibold text-[13px] no-underline transition-[border-color,color] duration-200"
              >
                Add On
              </a>
            </div>
          </RevealWrapper>
        </div>

        {/* À La Carte — 2 columns */}
        <div style={{ padding: '0 32px', marginTop: '20px' }}>
          <SectionLabel>À La Carte</SectionLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(244,243,240,0.08)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '16px',
          }}>
            {alaCarte.map((item) => (
              <div key={item.label} style={{ background: '#1e2530', padding: '20px' }}>
                <div style={{ fontWeight: 600, fontSize: '13px', color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.4 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '12px', color: '#7a8494' }}>{item.price}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-[rgba(244,243,240,0.25)] italic">
            Agencies and consultants looking for white-label or partnership arrangements — let&apos;s talk.
          </p>
        </div>
      </div>

      {/* DESKTOP ONLY — never touch this */}
      <div className="hidden md:block py-[120px] px-[60px]">

        {/* Header — no reveal */}
        <div className="grid grid-cols-2 gap-10 items-end mb-16">
          <div>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0]">
              Simple pricing.<br />No surprises.
            </h2>
          </div>
          <p className="text-base font-light text-[rgba(244,243,240,0.5)] max-w-[480px] leading-[1.7] self-end">
            All sites are mobile-responsive, fully secured, and yours to keep. One-time payments — no subscriptions, no lock-in.
          </p>
        </div>

        {/* Pricing Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          {pricingCards.map((card, index) => (
            <RevealWrapper key={card.id} delay={CARD_DELAYS[index]} className="flex flex-col">
              <PricingCard
                tier={card.tier}
                price={card.price}
                commitment={card.commitment}
                description={card.description}
                features={card.features}
                timeline={card.timeline}
                finePrint={'finePrint' in card ? card.finePrint : undefined}
                accentColor={card.accentColor}
                accentGlow={card.accentGlow}
              />
            </RevealWrapper>
          ))}
        </div>

        {/* Maintenance strip */}
        <RevealWrapper>
          <div style={{
            marginTop: '20px',
            padding: '20px 28px',
            border: '1px dashed rgba(244,243,240,0.12)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#f4f3f0', marginBottom: '4px' }}>
                Optional Add-On &nbsp;·&nbsp;{' '}
                <span style={{ color: '#0891b2' }}>Monthly Maintenance · $150/mo</span>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(244,243,240,0.45)', lineHeight: 1.5, maxWidth: '500px' }}>
                Entirely optional. Security updates, performance checks, minor content changes (up to 5/month), priority support.
              </div>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 whitespace-nowrap border border-[rgba(244,243,240,0.15)] text-[rgba(244,243,240,0.7)] hover:border-[#0891b2] hover:text-[#0891b2] px-6 py-[10px] rounded-[7px] font-semibold text-[13px] no-underline transition-[border-color,color] duration-200"
            >
              Add On
            </a>
          </div>
        </RevealWrapper>

        {/* À La Carte — no reveal per spec */}
        <div className="mt-5">
          <SectionLabel>À La Carte</SectionLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(244,243,240,0.08)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '16px',
          }}>
            {alaCarte.map((item) => (
              <div key={item.label} style={{ background: '#1e2530', padding: '24px 28px' }}>
                <div style={{ fontWeight: 600, fontSize: '13px', color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.4 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '12px', color: '#7a8494' }}>{item.price}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-[rgba(244,243,240,0.25)] italic">
            Agencies and consultants looking for white-label or partnership arrangements — let&apos;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}
