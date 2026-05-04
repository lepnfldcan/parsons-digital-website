'use client';

// HYBRID VERSION — logo left, slide-in dark panel from right
// Claude: centered wordmark + full-screen overlay
// Deepseek: logo left + slide from right
// Hybrid: logo left + slide from right, but dark brand aesthetic throughout

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Pricing', href: '#services' },
  { label: 'Why Me', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Nav bar */}
      <nav
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: isScrolled ? '14px 24px' : '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled ? 'rgba(30,37,48,0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(244,243,240,0.08)' : '1px solid transparent',
          transition: 'background 0.4s, padding 0.4s, border-color 0.4s',
        }}
      >
        {/* Wordmark — LEFT */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '17px',
            fontWeight: 800,
            color: '#f4f3f0',
            letterSpacing: '-0.02em',
          }}>
            Parsons
            <span style={{ color: '#0891b2', margin: '0 2px' }}>/</span>
            <em style={{ fontStyle: 'normal', fontWeight: 300, letterSpacing: '-0.01em' }}>Digital</em>
          </div>
        </a>

        {/* Hamburger — RIGHT */}
        <button
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            width: '44px', height: '44px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '5px', background: 'none', border: 'none',
            cursor: 'pointer', padding: 0,
          }}
        >
          {[
            isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            'none',
            isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          ].map((transform, i) => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#f4f3f0', borderRadius: '2px',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform,
              opacity: i === 1 && isOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className="md:hidden"
        onClick={close}
        style={{
          position: 'fixed', inset: 0, zIndex: 190,
          background: 'rgba(0,0,0,0.5)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Slide-in panel — dark, from right */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0, right: 0,
          width: '72%', maxWidth: '300px',
          height: '100%',
          zIndex: 200,
          background: '#151c26',
          borderLeft: '1px solid rgba(244,243,240,0.06)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '28px 28px 40px',
        }}
      >
        {/* Close */}
        <button
          onClick={close}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(244,243,240,0.4)', fontSize: '20px',
            alignSelf: 'flex-end', padding: '4px', marginBottom: '40px',
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                color: 'rgba(244,243,240,0.5)',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid rgba(244,243,240,0.06)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f4f3f0')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,243,240,0.5)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Email at bottom */}
        <div style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '12px',
          color: 'rgba(244,243,240,0.2)',
          letterSpacing: '0.04em',
          marginTop: '32px',
        }}>
          liam@parsonsdigital.com
        </div>
      </div>
    </>
  );
}
