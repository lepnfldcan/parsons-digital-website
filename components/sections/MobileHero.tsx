// DEEPSEEK VERSION — white hero, system fonts, single pill CTA
// To revert: git checkout main -- components/sections/MobileHero.tsx

const SYS = "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif";

export default function MobileHero() {
  return (
    <section
      className="md:hidden"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 24px 64px',  /* 120px top clears fixed nav + breathing room */
        background: '#ffffff',
      }}
    >
      {/* MOBILE ONLY — hero content */}
      <div style={{ maxWidth: '480px' }}>

        {/* Headline */}
        <h1
          style={{
            fontFamily: SYS,
            fontSize: 'clamp(2.2rem, 8vw, 3.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: '#111',
            marginBottom: '1rem',
          }}
        >
          Your website works<br />while you sleep.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: SYS,
            fontSize: 'clamp(1.05rem, 4vw, 1.2rem)',
            color: '#3a3a3a',
            lineHeight: 1.5,
            marginBottom: '2.5rem',
          }}
        >
          Fast, beautiful websites built for your business.
        </p>

        {/* Primary CTA — full-width pill, thumb-friendly */}
        <a
          href="#contact"
          style={{
            display: 'block',
            fontFamily: SYS,
            background: '#111',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            textAlign: 'center',
            textDecoration: 'none',
            padding: '16px 24px',
            borderRadius: '60px',
            width: '100%',
            maxWidth: '320px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}
        >
          Get a Quote →
        </a>
      </div>
    </section>
  );
}
