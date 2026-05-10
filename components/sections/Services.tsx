import SectionLabel from '@/components/ui/SectionLabel';
import PricingCard from '@/components/ui/PricingCard';
import RevealWrapper from '@/components/ui/RevealWrapper';
import MobilePricingCarousel from '@/components/sections/MobilePricingCarousel';

const pricingCards = [
  {
    id: 'quick-launch',
    tier: 'Quick Launch',
    price: '$2,500',
    commitment: 'One-time · Yours forever',
    description: "A clean, credible online presence built fast — no templates, no shortcuts.",
    features: [
      '5-page custom website',
      'Mobile-responsive design',
      'Contact form · spam-protected · email delivery',
      'Basic local SEO · metadata, sitemap, structured data',
      '2 revision rounds',
    ] as const,
    timeline: '2 week turnaround',
    isPopular: false,
    accentColor: 'rgba(16,185,129,0.6)',
    accentGlow: 'rgba(16,185,129,0.15)',
  },
  {
    id: 'professional',
    tier: 'Professional',
    price: '$7,500',
    commitment: 'One-time · Yours forever',
    description: "Built to look established and rank in local search. For service businesses that need more than a presence.",
    features: [
      'Everything in Quick Launch',
      'Custom mobile experience · animations',
      'Full SEO · structured data, FAQPage schema, GSC setup',
      'GA4 + Tag Manager · Resend email integration',
      'Lighthouse 90+ guaranteed · 3 revision rounds',
    ] as const,
    timeline: '3–4 week turnaround',
    isPopular: true,
    accentColor: 'rgba(59,130,246,0.6)',
    accentGlow: 'rgba(59,130,246,0.15)',
  },
  {
    id: 'premium',
    tier: 'Premium',
    price: '$12,500',
    commitment: 'One-time · Yours forever',
    description: "For professional services clients who need a site that competes with larger practices.",
    features: [
      'Everything in Professional',
      'Bespoke motion design · scroll reveals, transitions',
      'Multi-page architecture · bio, booking, resources',
      'FAQPage rich results · WCAG AA · Lighthouse 100',
      '30 days post-launch support included',
    ] as const,
    timeline: '5–6 week turnaround',
    isPopular: false,
    accentColor: 'rgba(245,158,11,0.6)',
    accentGlow: 'rgba(245,158,11,0.15)',
  },
] as const;

const oneTimeAddOns = [
  {
    id: 'voice',
    label: 'AI Voice Receptionist',
    price: '$1,200',
    description: 'Never miss a call. Your practice, represented professionally 24/7.',
    detail: 'AI voice agent configured for your business, trained on your FAQs, call routing, after-hours handling.',
    featured: true,
  },
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    price: '$600',
    description: 'Answer the questions you get asked every day — automatically.',
    detail: 'FAQ-trained chatbot, booking handoff flow, 30-day testing window.',
    featured: false,
  },
  {
    id: 'gbp-setup',
    label: 'GBP Setup',
    price: '$350',
    description: 'Get found in local search and Google Maps from day one.',
    detail: 'Profile creation, photo upload, category setup, Q&A seeding, review request template.',
    featured: false,
  },
  {
    id: 'booking',
    label: 'Booking Integration',
    price: '$200',
    description: 'Connect Calendly, Jane, or your preferred scheduler to your site.',
    detail: '',
    featured: false,
  },
] as const;

const monthlyAddOns = [
  {
    id: 'gbp-monthly',
    label: 'GBP Management + Local SEO',
    price: '$150/mo',
    description: 'Keep your Google presence active and your rankings climbing.',
    detail: 'Weekly posts, review response, Q&A updates, monthly performance report.',
  },
  {
    id: 'voice-monthly',
    label: 'AI Voice Agent Hosting',
    price: '$150/mo',
    description: 'Uptime, script updates, call log review, monthly performance summary.',
    detail: '',
  },
  {
    id: 'maintenance',
    label: 'Site Maintenance',
    price: '$100/mo',
    description: 'Content edits, dependency updates, uptime monitoring, priority support.',
    detail: '',
  },
  {
    id: 'chatbot-monthly',
    label: 'AI Chatbot Hosting',
    price: '$75/mo',
    description: 'Uptime, retraining when FAQs change, monthly usage report.',
    detail: '',
  },
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

        {/* One-Time Setups */}
        <div style={{ marginTop: '40px' }}>
          <RevealWrapper>
            <div style={{ padding: '0 24px', marginBottom: '16px' }}>
              <span style={{
                fontSize: '9px',
                fontWeight: 800,
                color: 'rgba(8,145,178,0.5)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                display: 'block',
              }}>
                One-Time Setups
              </span>
            </div>
          </RevealWrapper>

          {/* Featured: AI Voice Receptionist */}
          <RevealWrapper delay={100}>
            <div style={{
              margin: '0 24px 12px',
              padding: '20px 22px',
              border: '1px solid rgba(245,158,11,0.2)',
              borderTop: '2px solid rgba(245,158,11,0.55)',
              borderRadius: '12px',
              background: 'rgba(245,158,11,0.04)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <div>
                  <div style={{
                    fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#f59e0b', marginBottom: '5px',
                  }}>
                    Featured
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#f4f3f0', letterSpacing: '-0.01em' }}>
                    AI Voice Receptionist
                  </div>
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#f4f3f0', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  $1,200
                </div>
              </div>
              <div style={{ fontSize: '12.5px', color: 'rgba(244,243,240,0.55)', lineHeight: 1.55, marginBottom: '8px' }}>
                Never miss a call. Your practice, represented professionally 24/7.
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(244,243,240,0.3)', lineHeight: 1.5, marginBottom: '16px' }}>
                AI voice agent configured for your business, trained on your FAQs, call routing, after-hours handling.
              </div>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '10px 18px', borderRadius: '7px',
                border: '1px solid rgba(245,158,11,0.3)',
                background: 'rgba(245,158,11,0.07)',
                color: '#f59e0b', fontSize: '12px', fontWeight: 600,
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
                Add On
              </a>
            </div>
          </RevealWrapper>

          {/* Other one-time items — 2-col grid */}
          <RevealWrapper delay={200}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
              background: 'rgba(244,243,240,0.08)', borderRadius: '12px', overflow: 'hidden',
              margin: '0 24px',
            }}>
              {oneTimeAddOns.filter(item => !item.featured).map((item, index, arr) => (
                <div key={item.id} style={{
                  background: '#1e2530', padding: '18px 16px',
                  display: 'flex', flexDirection: 'column',
                  gridColumn: arr.length % 2 !== 0 && index === arr.length - 1 ? 'span 2' : undefined,
                }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.3 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0891b2', letterSpacing: '-0.01em', marginBottom: '5px' }}>
                    {item.price}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(244,243,240,0.4)', lineHeight: 1.4 }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Monthly Plans */}
        <div style={{ marginTop: '36px' }}>
          <RevealWrapper>
            <div style={{ padding: '0 24px', marginBottom: '16px' }}>
              <span style={{
                fontSize: '9px',
                fontWeight: 800,
                color: 'rgba(8,145,178,0.5)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                display: 'block',
              }}>
                Monthly Plans
              </span>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
              background: 'rgba(244,243,240,0.08)', borderRadius: '12px', overflow: 'hidden',
              margin: '0 24px',
            }}>
              {monthlyAddOns.map(item => (
                <div key={item.id} style={{
                  background: '#1e2530', padding: '18px 16px',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.3 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0891b2', letterSpacing: '-0.01em', marginBottom: '5px' }}>
                    {item.price}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(244,243,240,0.4)', lineHeight: 1.4 }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* White-label note */}
        <RevealWrapper>
          <p style={{
            margin: '28px 24px 0',
            fontSize: '13px',
            color: 'rgba(244,243,240,0.45)',
            textAlign: 'center',
            lineHeight: 1.6,
          }}>
            Agency or consultant?{' '}
            <a
              href="#contact"
              style={{
                color: 'rgba(244,243,240,0.65)',
                textDecoration: 'underline',
                textDecorationColor: 'rgba(244,243,240,0.2)',
              }}
            >
              White-label arrangements available.
            </a>
          </p>
        </RevealWrapper>
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
                finePrint={'finePrint' in card ? (card as { finePrint?: string }).finePrint : undefined}
                isPopular={card.isPopular}
                accentColor={card.accentColor}
                accentGlow={card.accentGlow}
              />
            </RevealWrapper>
          ))}
        </div>

        {/* One-Time Setups */}
        <div className="mt-12">
          <SectionLabel>One-Time Setups</SectionLabel>

          {/* Featured: AI Voice Receptionist */}
          <RevealWrapper>
            <div style={{
              marginTop: '16px',
              padding: '28px 32px',
              border: '1px solid rgba(245,158,11,0.2)',
              borderTop: '2px solid rgba(245,158,11,0.55)',
              borderRadius: '10px',
              background: 'rgba(245,158,11,0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '40px',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: '#f59e0b', marginBottom: '6px',
                }}>
                  Featured Add-On
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#f4f3f0', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                  AI Voice Receptionist
                  <span style={{ fontWeight: 600, fontSize: '14px', color: '#f59e0b', marginLeft: '14px' }}>$1,200</span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(244,243,240,0.55)', lineHeight: 1.6, marginBottom: '4px' }}>
                  Never miss a call. Your practice, represented professionally 24/7.
                </div>
                <div style={{ fontSize: '11.5px', color: 'rgba(244,243,240,0.3)', lineHeight: 1.5 }}>
                  AI voice agent configured for your business, trained on your FAQs, call routing, after-hours handling.
                </div>
              </div>
              <a
                href="#contact"
                className="flex-shrink-0 whitespace-nowrap px-6 py-[10px] rounded-[7px] font-semibold text-[13px] no-underline transition-[border-color,color,background] duration-200 hover:border-[rgba(245,158,11,0.5)] hover:bg-[rgba(245,158,11,0.1)]"
                style={{
                  border: '1px solid rgba(245,158,11,0.3)',
                  color: '#f59e0b',
                  background: 'rgba(245,158,11,0.06)',
                }}
              >
                Add On
              </a>
            </div>
          </RevealWrapper>

          {/* Other one-time items — 3-col grid */}
          <RevealWrapper delay={100}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
              background: 'rgba(244,243,240,0.08)', borderRadius: '10px', overflow: 'hidden',
              marginTop: '12px',
            }}>
              {oneTimeAddOns.filter(item => !item.featured).map(item => (
                <div key={item.id} style={{ background: '#1e2530', padding: '24px 28px' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0891b2', marginBottom: '8px' }}>
                    {item.price}
                  </div>
                  <div style={{ fontSize: '12px', color: '#7a8494', lineHeight: 1.5 }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Monthly Plans */}
        <div className="mt-8">
          <SectionLabel>Monthly Plans</SectionLabel>
          <RevealWrapper delay={100}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px',
              background: 'rgba(244,243,240,0.08)', borderRadius: '10px', overflow: 'hidden',
              marginTop: '16px',
            }}>
              {monthlyAddOns.map(item => (
                <div key={item.id} style={{ background: '#1e2530', padding: '24px 28px' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#f4f3f0', marginBottom: '4px', lineHeight: 1.4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0891b2', marginBottom: '8px' }}>
                    {item.price}
                  </div>
                  <div style={{ fontSize: '12px', color: '#7a8494', lineHeight: 1.5 }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
          <p className="mt-5 text-[13px] text-[rgba(244,243,240,0.45)]">
            Agency or consultant?{' '}
            <a
              href="#contact"
              className="text-[rgba(244,243,240,0.65)] underline underline-offset-2 decoration-[rgba(244,243,240,0.2)] hover:text-[#f4f3f0] hover:decoration-[rgba(244,243,240,0.4)] transition-colors duration-150"
            >
              White-label and partnership arrangements available.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
