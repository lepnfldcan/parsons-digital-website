'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-[60px] py-6 hidden md:flex items-center justify-between transition-[background,padding] duration-[400ms] ${
        isScrolled
          ? 'bg-[rgba(30,37,48,0.95)] backdrop-blur-md !py-4 border-b border-[rgba(244,243,240,0.08)]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo lockup */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>

        {/* 40px mark — exact inline styles, no Tailwind */}
        <div style={{
          width: '40px',
          height: '40px',
          background: '#2b3240',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '16px',
            color: '#f4f3f0',
            letterSpacing: '-0.03em',
            gap: '2px',
            padding: '0 4px',
          }}>
            <span>P</span>
            <div style={{
              width: '2px',
              height: '13px',
              background: '#0891b2',
              transform: 'rotate(14deg)',
              borderRadius: '2px',
              flexShrink: 0,
            }} />
            <span>D</span>
          </div>
        </div>

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            fontSize: '15px',
            color: '#f4f3f0',
            letterSpacing: '-0.02em',
          }}>Parsons</span>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            fontSize: '15px',
            color: '#0891b2',
            margin: '0 2px',
          }}>/</span>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 300,
            fontSize: '15px',
            color: '#f4f3f0',
            letterSpacing: '-0.01em',
          }}>Digital</span>
        </div>

      </Link>

      {/* CTA */}
      <a
        href="#contact"
        className="text-[13px] font-semibold text-[#f4f3f0] no-underline px-5 py-[9px] border border-[rgba(244,243,240,0.2)] rounded-md transition-[border-color,color] duration-200 hover:border-[#0891b2] hover:text-[#0891b2]"
      >
        Get in Touch
      </a>
    </nav>
  );
}
