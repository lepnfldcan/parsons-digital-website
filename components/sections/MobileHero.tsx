// HYBRID VERSION — dark brand, logo-left nav, single CTA, stripped back
// Keeps: dark bg, PD mark, Syne headline, cyan accent, zoom animation
// Drops: grid, gleam, word-sweep, second button
// Takes from Deepseek: breathing room, single action, cleaner hierarchy

export default function MobileHero() {
  return (
    <section
      className="md:hidden"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 36px 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#1e2530',
      }}
    >
      {/* Radial glow only — no grid, no gleam */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 110% 45% at 50% 0%, rgba(8,145,178,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 80% 35% at 50% 100%, rgba(8,145,178,0.07) 0%, transparent 70%)
          `,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

        {/* PD Mark */}
        <div
          style={{
            width: '72px', height: '72px',
            background: '#3d4555',
            borderRadius: '13px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '36px',
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

        {/* Headline — Syne 700, zooms toward viewer */}
        <h1
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: 'clamp(36px, 10vw, 44px)',
            fontWeight: 700,
            color: '#f4f3f0',
            letterSpacing: '-0.02em',
            lineHeight: 1.18,
            maxWidth: '300px',
            marginBottom: '24px',
            textWrap: 'balance',
            animation: 'heroHeadlineReveal 0.9s cubic-bezier(0.22,1,0.36,1) 0.55s both',
          } as React.CSSProperties}
        >
          Your website should be{' '}
          <span style={{ color: '#0891b2' }}>working</span>{' '}
          while you sleep.
        </h1>

        {/* Subheadline — clean tagline with white glow */}
        <p
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            color: '#f4f3f0',
            letterSpacing: '0.02em',
            lineHeight: 1.6,
            marginBottom: '48px',
            textShadow: '0 0 18px rgba(255,255,255,0.45), 0 0 40px rgba(255,255,255,0.18)',
            animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 0.9s both',
          }}
        >
          Fast. Beautiful. Built for your business.
        </p>

        {/* Single CTA — full-width cyan pill */}
        <a
          href="#contact"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '280px',
            textAlign: 'center',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#fff',
            background: '#0891b2',
            padding: '16px 24px',
            borderRadius: '60px',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            boxShadow: '0 0 32px rgba(8,145,178,0.35)',
            animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 1.1s both',
          }}
        >
          Get in Touch
        </a>
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
