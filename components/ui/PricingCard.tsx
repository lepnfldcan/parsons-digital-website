'use client';

import { useState } from 'react';

interface PricingCardProps {
  tier: string;
  price: string;
  commitment: string;
  description: string;
  features: readonly string[];
  timeline: string;
  finePrint?: string;
  accentColor: string;
  accentGlow: string;
  isPopular?: boolean;
  classLabel?: string;
}

export default function PricingCard({
  tier,
  price,
  commitment,
  description,
  features,
  timeline,
  finePrint,
  accentColor,
  accentGlow,
  isPopular,
  classLabel,
}: PricingCardProps) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Sizing — fill the RevealWrapper flex container
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        // Colors
        background: hovered ? 'rgba(244,243,240,0.05)' : 'rgba(244,243,240,0.03)',
        // Border — all four sides + top override
        border: hovered
          ? '1px solid rgba(8,145,178,0.3)'
          : '1px solid rgba(244,243,240,0.08)',
        borderTop: hovered
          ? '2px solid #0891b2'
          : `2px solid ${accentColor}`,
        // Glow — bleeds upward from the top border (negative Y = upward)
        // Not a drop shadow — a color ambient from the accent border
        boxShadow: hovered
          ? '0 -1px 20px rgba(8,145,178,0.25)'
          : `0 -1px 12px ${accentGlow}`,
        borderRadius: '12px',
        // Spacing
        padding: '32px 28px',
        // All transitions 0.2s — snappy, not slow
        transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
      }}
    >

      {/* Most Popular badge */}
      {isPopular && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          fontSize: '9.5px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#f59e0b',
          background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.25)',
          padding: '3px 9px',
          borderRadius: '4px',
        }}>
          Most Popular
        </div>
      )}

      {/* 1. Tier label */}
      <div style={{
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#7a8494',
        marginBottom: classLabel ? '10px' : '16px',
      }}>
        {tier}
      </div>

      {/* 1b. Class label chip */}
      {classLabel && (
        <div style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: accentColor.replace(/[\d.]+\)$/, '1)'),
          background: accentGlow,
          border: `1px solid ${accentColor}`,
          padding: '3px 9px',
          borderRadius: '4px',
          marginBottom: '14px',
        }}>
          {classLabel}
        </div>
      )}

      {/* 2. Price */}
      <div style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 800,
        fontSize: '40px',
        color: '#f4f3f0',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '6px',
      }}>
        {price}
      </div>

      {/* 3. Commitment */}
      <div style={{
        fontSize: '12px',
        color: '#7a8494',
        marginBottom: '20px',
      }}>
        {commitment}
      </div>

      {/* 4. Description — bottom border acts as divider */}
      <div style={{
        fontSize: '13.5px',
        color: 'rgba(244,243,240,0.55)',
        lineHeight: 1.65,
        marginBottom: '24px',
        paddingBottom: '24px',
        borderBottom: '1px solid rgba(244,243,240,0.08)',
        flexShrink: 0,
      }}>
        {description}
      </div>

      {/* 5. Feature list — flex:1 keeps timeline + button pinned to bottom */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginBottom: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: 1,
      }}>
        {features.map((feature) => (
          <li
            key={feature}
            style={{
              fontSize: '13px',
              color: 'rgba(244,243,240,0.65)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              lineHeight: 1.4,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="#0891b2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: '1px' }}
            >
              <polyline points="2,6 5,9 10,3" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* 6a. Fine print — Custom card only */}
      {finePrint && (
        <div style={{
          fontSize: '11px',
          color: 'rgba(244,243,240,0.3)',
          marginBottom: '12px',
          lineHeight: 1.5,
        }}>
          {finePrint}
        </div>
      )}

      {/* 6b. Timeline */}
      <div style={{
        fontSize: '11px',
        color: '#7a8494',
        letterSpacing: '0.02em',
        marginBottom: '20px',
      }}>
        ⚡ {timeline}
      </div>

      {/* 7. CTA button — ghost, turns cyan on hover */}
      <a
        href="#contact"
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '11px 0',
          borderRadius: '7px',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 600,
          fontSize: '13px',
          textDecoration: 'none',
          border: btnHovered
            ? '1px solid #0891b2'
            : '1px solid rgba(244,243,240,0.15)',
          color: btnHovered ? '#0891b2' : 'rgba(244,243,240,0.7)',
          transition: 'border-color 0.2s, color 0.2s',
        }}
      >
        Get in Touch
      </a>
    </div>
  );
}
