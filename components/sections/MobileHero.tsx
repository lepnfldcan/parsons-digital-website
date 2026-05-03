// Server Component — all animations are CSS keyframes defined in globals.css

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
        padding: '120px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#1e2530',
      }}
    >
      {/* Layer 1: Radial glow (top + bottom) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 100% 40% at 50% 0%, rgba(8,145,178,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 80% 40% at 50% 100%, rgba(8,145,178,0.07) 0%, transparent 70%)
          `,
        }}
      />

      {/* Layer 2: 60×60px grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(244,243,240,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,243,240,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Layer 3: Diagonal gleam — sweeps along grid lines via CSS mask */}
      <div className="hero-gleam" />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* PD Mark — 80px hero size */}
        <div
          style={{
            width: '80px',
            height: '80px',
            background: '#3d4555',
            borderRadius: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
            animation: 'markReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '34px',
              color: '#f4f3f0',
              letterSpacing: '-0.03em',
              gap: '4px',
              padding: '0 10px',
            }}
          >
            <span>P</span>
            <div
              style={{
                width: '4px',
                height: '28px',
                background: '#0891b2',
                transform: 'rotate(14deg)',
                borderRadius: '99px',
                flexShrink: 0,
              }}
            />
            <span>D</span>
          </div>
        </div>

        {/* Wordmark — 28px */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '28px',
            fontWeight: 800,
            color: '#f4f3f0',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
            animation: 'wordmarkReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both',
          }}
        >
          Parsons
          <span style={{ color: '#0891b2', margin: '0 3px' }}>/</span>
          <em style={{ fontStyle: 'normal', fontWeight: 300, letterSpacing: '-0.01em' }}>Digital</em>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7a8494',
            marginBottom: '40px',
            animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 0.9s both',
          }}
        >
          Web Design for Small Business
        </div>

        {/* Subtext */}
        <p
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgba(244,243,240,0.5)',
            maxWidth: '320px',
            lineHeight: 1.7,
            margin: '0 0 40px 0',
            animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 1.05s both',
          }}
        >
          Clean, fast websites for local businesses — from a landing page to a fully custom build.
        </p>

        {/* Buttons — stacked, both ghost/glow style */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            animation: 'taglineReveal 0.6s cubic-bezier(0.22,1,0.36,1) 1.2s both',
          }}
        >
          <a
            href="mailto:liam@liamparsonsdigital.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              background: 'rgba(8,145,178,0.12)',
              color: '#0891b2',
              fontWeight: 600,
              fontSize: '13px',
              padding: '11px 28px',
              borderRadius: '8px',
              border: '1px solid rgba(8,145,178,0.45)',
              boxShadow: '0 0 20px rgba(8,145,178,0.18), inset 0 0 16px rgba(8,145,178,0.07)',
              letterSpacing: '0.01em',
              textDecoration: 'none',
            }}
          >
            Email me
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              background: 'transparent',
              color: '#0891b2',
              fontWeight: 600,
              fontSize: '13px',
              padding: '11px 28px',
              borderRadius: '8px',
              border: '1px solid rgba(8,145,178,0.4)',
              boxShadow: '0 0 16px rgba(8,145,178,0.15), inset 0 0 12px rgba(8,145,178,0.05)',
              textDecoration: 'none',
            }}
          >
            See pricing
          </a>
        </div>
      </div>

      {/* Scroll hint — bouncing dot */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '9px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(244,243,240,0.2)',
        }}
      >
        <div
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(244,243,240,0.2)',
            animation: 'scrollBounce 1.8s ease-in-out infinite',
          }}
        />
        Scroll
      </div>
    </section>
  );
}
