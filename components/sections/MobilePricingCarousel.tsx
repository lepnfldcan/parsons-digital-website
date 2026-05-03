'use client';

import { useState, useRef, useEffect } from 'react';

interface CardData {
  id: string;
  tier: string;
  price: string;
  commitment: string;
  description: string;
  features: readonly string[];
  timeline: string;
  finePrint?: string;
  accentColor: string;
  accentGlow: string;
}

interface Props {
  cards: readonly CardData[];
}

export default function MobilePricingCarousel({ cards }: Props) {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const GAP = 12;

  useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = pointerStartX.current - e.clientX;
    if (delta > 40) setCurrent((c) => Math.min(cards.length - 1, c + 1));
    else if (delta < -40) setCurrent((c) => Math.max(0, c - 1));
    pointerStartX.current = null;
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStartX.current = null; }}
      style={{ overflow: 'hidden', cursor: 'grab', touchAction: 'pan-y' }}
    >
      {/* Track */}
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: `${GAP}px`,
          padding: '20px 24px 16px',
          transform: `translateX(-${current * (cardWidth + GAP)}px)`,
          transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          userSelect: 'none',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={i === 0 ? cardRef : undefined}
            style={{ flex: '0 0 88%', display: 'flex', flexDirection: 'column' }}
          >
            <MobileCard card={card} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px', paddingBottom: '4px' }}>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              height: '7px',
              width: i === current ? '22px' : '7px',
              borderRadius: '9999px',
              background: i === current ? '#0891b2' : 'rgba(8,145,178,0.25)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MobileCard({ card }: { card: CardData }) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(244,243,240,0.03)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(244,243,240,0.09)',
        borderTop: `2px solid ${card.accentColor}`,
        borderRadius: '14px',
        boxShadow: `0 -1px 14px ${card.accentGlow}`,
        padding: '24px 22px 22px',
      }}
    >
      {/* Tier */}
      <div style={{
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#7a8494',
        marginBottom: '12px',
      }}>
        {card.tier}
      </div>

      {/* Price */}
      <div style={{
        fontWeight: 800,
        fontSize: '36px',
        color: '#f4f3f0',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '5px',
      }}>
        {card.price}
      </div>

      {/* Commitment */}
      <div style={{ fontSize: '11.5px', color: '#7a8494', marginBottom: '18px' }}>
        {card.commitment}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(244,243,240,0.08)', marginBottom: '16px' }} />

      {/* Description */}
      <p style={{
        fontSize: '13px',
        color: 'rgba(244,243,240,0.5)',
        lineHeight: 1.6,
        marginBottom: '18px',
      }}>
        {card.description}
      </p>

      {/* Features — flex:1 pushes timeline + CTA to bottom */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
        {card.features.map((f) => (
          <li key={f} style={{ fontSize: '12.5px', color: 'rgba(244,243,240,0.65)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.35 }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <polyline points="2,6 5,9 10,3" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Fine print */}
      {card.finePrint && (
        <div style={{ fontSize: '11px', color: 'rgba(244,243,240,0.28)', marginBottom: '10px', lineHeight: 1.5 }}>
          {card.finePrint}
        </div>
      )}

      {/* Timeline */}
      <div style={{ fontSize: '11px', color: '#7a8494', marginBottom: '18px' }}>
        ⚡ {card.timeline}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '11px 0',
          borderRadius: '7px',
          fontWeight: 600,
          fontSize: '13px',
          textDecoration: 'none',
          border: '1px solid rgba(244,243,240,0.15)',
          color: 'rgba(244,243,240,0.7)',
        }}
      >
        Get in Touch
      </a>
    </div>
  );
}
