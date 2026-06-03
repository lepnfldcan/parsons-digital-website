import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Message Sent — Parsons Digital',
  description: 'Your message has been received.',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main
      className="bg-[#1e2530] flex-1 flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 140px)' }}
    >
      <div style={{ textAlign: 'center', padding: '60px 24px', maxWidth: '480px', margin: '0 auto' }}>

        {/* Check circle */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(16,185,129,0.08)',
          border: '1px solid rgba(16,185,129,0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 28px',
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
            stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="5,13 11,19 21,7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontSize: '28px',
          fontWeight: 800,
          color: '#f4f3f0',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          Message received.
        </h1>

        {/* Body */}
        <p style={{
          fontSize: '15px',
          color: 'rgba(244,243,240,0.5)',
          lineHeight: 1.7,
          marginBottom: '36px',
        }}>
          I&apos;ll get back to you today. If it&apos;s urgent, you can also reach me on{' '}
          <a
            href="https://wa.me/525545402582"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0891b2', textDecoration: 'none' }}
          >
            WhatsApp
          </a>
          .
        </p>

        {/* Back home */}
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            borderRadius: '8px',
            background: 'rgba(8,145,178,0.08)',
            border: '1px solid rgba(8,145,178,0.35)',
            color: '#0891b2',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
