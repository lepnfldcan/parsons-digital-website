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
  { label: 'Calendly / booking', price: '$150' },
  { label: '24/7 AI Chat', price: '$200' },
  { label: 'WhatsApp button', price: '$75' },
  { label: 'Review showcase', price: '$125' },
  { label: 'Email newsletter', price: '$125' },
  { label: 'Content writing', price: '$75/hr' },
  { label: 'Rush delivery', price: '+25%' },
  { label: 'Google Business Profile', price: '$300' },
] as const;

const CARD_DELAYS = [0, 100, 200] as const;

export default function Services() {
  return (
    <section id="services" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — md and below */}
      <div className="md:hidden py-[80px]">

        {/* Header — tight, no subtext */}
        <RevealWrapper>
          <div style={{ padding: '0 24px', marginBottom: '20px' }}>
            <span style={{
              fontSize: '9px',
              fontWeight: 800,
              color: 'rgba(8,145,178,0.5)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px',
            }}>
              01 — Pricing
            </span>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#f4f3f0',
              margin: 0,
            }}>
              Simple pricing.<br />No surprises.
            </h2>
          </div>
        </RevealWrapper>

        {/* Section separator — cyan gradient rule */}
        <RevealWrapper delay={100}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, rgba(8,145,178,0.6) 0%, rgba(8,145,178,0.2) 50%, transparent 100%)',
            margin: '0 24px 4px',
          }} />
        </RevealWrapper>

        {/* Pricing carousel */}
        <div style={{ marginTop: '8px', marginBottom: '32px' }}>
          <MobilePricingCarousel cards={pricingCards} />
        </div>

        {/* Maintenance strip — left-aligned, price as hero */}
        <RevealWrapper>
          <div style={{
            margin: '0 24px',
            padding: '20px 24px',
            border: '1px solid rgba(244,243,240,0.1)',
            borderRadius: '12px',
            background: 'rgba(244,243,240,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}>
            <div>
              <div style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(244,243,240,0.4)',
                marginBottom: '4px',
              }}>
                Optional Add-On
              </div>
              <div style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#f4f3f0',
                letterSpacing: '-0.01em',
                marginBottom: '2px',
              }}>
                Monthly Maintenance
              </div>
              <div style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#0891b2',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}>
                $150<span style={{ fontSize: '13px', fontWeight: 400, color: '#7a8494' }}>/mo</span>
              </div>
            </div>
            <a href="#contact" style={{
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 20px',
              borderRadius: '8px',
              border: '1px solid rgba(8,145,178,0.35)',
              background: 'rgba(8,145,178,0.08)',
              color: '#0891b2',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 0 14px rgba(8,145,178,0.12)',
              whiteSpace: 'nowrap',
            }}>
              Add On
            </a>
          </div>
        </RevealWrapper>

        {/* À La Carte */}
        <div style={{ marginTop: '36px' }}>
          <RevealWrapper>
            <div style={{ padding: '0 24px', marginBottom: '16px' }}>
              <span style={{
                fontSize: '9px',
                fontWeight: 800,
                color: 'rgba(8,145,178,0.4)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}>
                À La Carte
              </span>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: 'rgba(244,243,240,0.08)',
              borderRadius: '12px',
              overflow: 'hidden',
              margin: '0 24px',
            }}>
              {alaCarte.map((item) => (
                <div key={item.label} style={{ background: '#1e2530', padding: '20px 18px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.3 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0891b2', letterSpacing: '-0.01em' }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
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
