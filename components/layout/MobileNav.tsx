'use client';

// DEEPSEEK VERSION — white nav, logo left, slide-in overlay from right
// To revert: git checkout main -- components/layout/MobileNav.tsx

import { useState } from 'react';

const navLinks = [
  { label: 'Pricing', href: '#services' },
  { label: 'Why Me', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Get in Touch', href: '#contact' },
];

const SYS = "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Nav bar — fixed, white */}
      <nav
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        {/* Logo — left */}
        <a href="/" style={{
          fontFamily: SYS,
          fontSize: '17px',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: '#111',
          textDecoration: 'none',
        }}>
          Parsons Digital
        </a>

        {/* Hamburger — right */}
        <button
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: '44px',
            height: '44px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            padding: 0,
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#111', borderRadius: '2px',
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#111', borderRadius: '2px',
            transition: 'opacity 0.25s ease',
            opacity: isOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: '#111', borderRadius: '2px',
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className="md:hidden"
        onClick={close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 150,
          background: 'rgba(0,0,0,0.2)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Slide-in overlay — 75% width from right */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 0, right: 0,
          width: '75%',
          maxWidth: '280px',
          height: '100%',
          zIndex: 200,
          background: '#fff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.08)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: SYS,
            fontSize: '20px',
            color: '#111',
            alignSelf: 'flex-end',
            padding: '4px 8px',
            marginBottom: '24px',
          }}
        >
          ✕
        </button>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{
                fontFamily: SYS,
                fontSize: '20px',
                fontWeight: 500,
                color: '#111',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
