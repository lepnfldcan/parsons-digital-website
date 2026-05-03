'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Pricing', href: '#services' },
  { label: 'Why Me', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
];

export default function MobileNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Nav bar — mobile only */}
      <nav
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: isScrolled ? '14px 24px' : '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isScrolled ? 'rgba(30,37,48,0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(244,243,240,0.08)' : '1px solid transparent',
          transition: 'background 0.4s, padding 0.4s, border-color 0.4s',
        }}
      >
        {/* Centered wordmark */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '15px',
            fontWeight: 800,
            color: '#f4f3f0',
            letterSpacing: '-0.02em',
          }}>
            Parsons
            <span style={{ color: '#0891b2', margin: '0 2px' }}>/</span>
            <em style={{ fontStyle: 'normal', fontWeight: 300, letterSpacing: '-0.01em' }}>Digital</em>
          </div>
        </a>

        {/* Hamburger — 44×44px touch target, absolute right */}
        <button
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#f4f3f0',
            borderRadius: '2px',
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: isOpen ? '0px' : '22px',
            height: '1.5px',
            background: '#f4f3f0',
            borderRadius: '2px',
            transition: 'opacity 0.3s ease, width 0.3s ease',
            opacity: isOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: '#f4f3f0',
            borderRadius: '2px',
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Full-screen overlay — sits below nav bar (z-index: 150 < 200) */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 150,
          background: 'rgba(30,37,48,0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      >
        {/* Nav links */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '36px',
                fontWeight: 800,
                color: 'rgba(244,243,240,0.35)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f4f3f0')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,243,240,0.35)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          onClick={close}
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            background: '#0891b2',
            color: '#fff',
            fontWeight: 700,
            fontSize: '15px',
            padding: '16px 36px',
            borderRadius: '8px',
            marginTop: '16px',
            textDecoration: 'none',
          }}
        >
          Get in Touch
        </a>

        {/* Contact info */}
        <div style={{
          marginTop: '48px',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '12px',
          color: 'rgba(244,243,240,0.25)',
          letterSpacing: '0.06em',
          textAlign: 'center',
          lineHeight: 1.8,
        }}>
          liam@parsonsdigital.com<br />
          liamparsonsdigital.com
        </div>
      </div>
    </>
  );
}
