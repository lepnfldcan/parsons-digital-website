// FORTUNE 500 VERSION — all 6 design changes applied
// Change 1: Ghost buttons (8px radius, glow border, NOT pill)
// Change 2: Headline copy kept, styling upgraded (Plus Jakarta Sans 800, -0.03em)
// Change 3: Mark tight eyebrow (marginBottom 16px) + cyan connector line
// Change 4: Proof point below buttons, "Fast. Beautiful." removed
// Change 5: Everything left-aligned
// Change 6: 3-layer bg — radial glow + 60px grid + diagonal circuit gleam

export default function MobileHero() {
  return (
    <section
      className="md:hidden"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '140px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'left',
        background: '#1e2530',
      }}
    >
      {/* Layer 1 — Radial ambient glow */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 120% 45% at 50% 0%, rgba(8,145,178,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 80% 35% at 50% 100%, rgba(8,145,178,0.07) 0%, transparent 65%)
          `,
        }}
      />

      {/* Layer 2 — 60px grid */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(244,243,240,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,243,240,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Layer 3 — Diagonal circuit gleam masked to grid lines */}
      <div className="hero-gleam" />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', width: '100%',
      }}>

        {/* PD Mark */}
        <div
          style={{
            width: '72px', height: '72px',
            background: '#3d4555',
            borderRadius: '13px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
            boxShadow: '0 0 28px rgba(8,145,178,0.38), 0 0 60px rgba(8,145,178,0.14)',
            animation: 'markReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both',
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: '30px', color: '#f4f3f0',
            letterSpacing: '-0.03em', gap: '4px', padding: '0 8px',
          }}>
            <span>P</span>
            <div style={{ width: '3.5px', height: '24px', background: '#0891b2', transform: 'rotate(14deg)', borderRadius: '99px', flexShrink: 0 }} />
            <span>D</span>
          </div>
        </div>

        {/* Cyan connector line */}
        <div style={{
          width: '32px', height: '1px',
          background: '#0891b2',
          margin: '0 0 12px',
          opacity: 0.6,
          animation: 'markReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s both',
        }} />

        {/* Eyebrow — matches desktop hero */}
        <div style={{
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#0891b2',
          marginBottom: '20px',
          animation: 'markReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s both',
        }}>
          Web Design for Small Business
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: 'clamp(36px, 9vw, 52px)',
            fontWeight: 800,
            color: '#f4f3f0',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            maxWidth: '340px',
            marginBottom: '20px',
            textAlign: 'left',
            animation: 'heroHeadlineReveal 0.9s cubic-bezier(0.22,1,0.36,1) 0.55s both',
          } as React.CSSProperties}
        >
          Your website should be{' '}
          <em style={{ fontStyle: 'normal', color: '#0891b2' }}>working</em>{' '}
          while you sleep.
        </h1>

        {/* Tagline — concrete, tells visitor exactly what you do */}
        <p
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(244,243,240,0.6)',
            lineHeight: 1.65,
            marginBottom: '32px',
            textAlign: 'left',
            animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 0.72s both',
          }}
        >
          Custom builds, Carrd, and WordPress for small businesses across the US and Canada.
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', gap: '16px',
          animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 0.85s both',
        }}>

          {/* Primary CTA */}
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(8,145,178,0.1)',
              color: '#0891b2',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              padding: '13px 32px',
              borderRadius: '8px',
              border: '1px solid rgba(8,145,178,0.45)',
              boxShadow: '0 0 24px rgba(8,145,178,0.18), inset 0 0 16px rgba(8,145,178,0.07)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            Get in Touch
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: '#0891b2',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              padding: '13px 32px',
              borderRadius: '8px',
              border: '1px solid rgba(8,145,178,0.25)',
              boxShadow: '0 0 12px rgba(8,145,178,0.1)',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            See pricing
          </a>
        </div>

        {/* Proof point — trust builder, higher contrast, directly under CTAs */}
        <p style={{
          fontSize: '11px',
          fontWeight: 400,
          color: 'rgba(244,243,240,0.55)',
          letterSpacing: '0.06em',
          textAlign: 'left',
          marginTop: '20px',
          lineHeight: 1.6,
          animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 1.05s both',
        }}>
          30-day builds &nbsp;·&nbsp; No lock-in &nbsp;·&nbsp; Yours forever
        </p>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute', bottom: '28px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '6px',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '9px', letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(244,243,240,0.18)',
        }}
      >
        <div style={{
          width: '4px', height: '4px', borderRadius: '50%',
          background: 'rgba(244,243,240,0.18)',
          animation: 'scrollBounce 1.8s ease-in-out infinite',
        }} />
        Scroll
      </div>
    </section>
  );
}
