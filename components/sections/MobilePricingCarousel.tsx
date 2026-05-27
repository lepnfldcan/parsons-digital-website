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
  isPopular?: boolean;
  classLabel?: string;
}

interface Props {
  cards: readonly CardData[];
}

// Pull r,g,b from 'rgba(R,G,B,A)' strings the cards already use
function toRGB(rgba: string): string {
  const m = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return m ? `${m[1]},${m[2]},${m[3]}` : '8,145,178';
}

export default function MobilePricingCarousel({ cards }: Props) {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const GAP = 12;

  // Measure card width
  useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Flash whenever active card changes
  useEffect(() => {
    setIsFlashing(true);
    const t = setTimeout(() => setIsFlashing(false), 700);
    return () => clearTimeout(t);
  }, [current]);

  // Flash once when section first scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFlashing(true);
          setTimeout(() => setIsFlashing(false), 700);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = pointerStartX.current - e.clientX;
    if (delta > 40) setCurrent(c => Math.min(cards.length - 1, c + 1));
    else if (delta < -40) setCurrent(c => Math.max(0, c - 1));
    pointerStartX.current = null;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStartX.current = null; }}
      style={{ overflow: 'hidden', cursor: 'grab', touchAction: 'pan-y' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: `${GAP}px`,
          padding: '16px 24px 28px',
          transform: `translateX(-${current * (cardWidth + GAP)}px)`,
          transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          userSelect: 'none',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={i === 0 ? cardRef : undefined}
            style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column' }}
          >
            <MobileCard
              card={card}
              isActive={i === current}
              isFlashing={i === current && isFlashing}
              isPopular={card.isPopular}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
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
              border: 'none', padding: 0, cursor: 'pointer',
              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface MobileCardProps {
  card: CardData;
  isActive: boolean;
  isFlashing: boolean;
  isPopular?: boolean;
}

function MobileCard({ card, isActive, isFlashing, isPopular }: MobileCardProps) {
  const rgb = toRGB(card.accentGlow);

  // Background: flashing → active → idle (Fix 5: idle bumped to 0.05)
  const bg = isFlashing
    ? `rgba(${rgb}, 0.14)`
    : isActive
    ? `rgba(${rgb}, 0.07)`
    : 'rgba(244,243,240,0.05)';

  // Inset glow — never clipped by overflow:hidden (Fix 5: idle gets subtle glow)
  const insetShadow = isFlashing
    ? `inset 0 0 40px rgba(${rgb}, 0.28), inset 0 -1px 0 rgba(${rgb}, 0.4)`
    : isActive
    ? `inset 0 0 20px rgba(${rgb}, 0.12)`
    : `inset 0 0 12px rgba(${rgb}, 0.06)`;

  // Border-top brightens when active (Fix 5: idle strengthened to 0.7)
  const borderTopColor = isFlashing
    ? `rgba(${rgb}, 1)`
    : isActive
    ? `rgba(${rgb}, 0.85)`
    : `rgba(${rgb}, 0.7)`;

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: bg,
        border: '1px solid rgba(244,243,240,0.1)',
        borderTop: `2px solid ${borderTopColor}`,
        borderRadius: '14px',
        boxShadow: insetShadow,
        padding: '22px 20px 20px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'background 0.5s ease, box-shadow 0.5s ease, border-top-color 0.5s ease',
      }}
    >
      {/* Most Popular badge */}
      {isPopular && (
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#f59e0b',
          background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.25)',
          padding: '2px 7px', borderRadius: '4px',
        }}>
          Most Popular
        </div>
      )}

      {/* Tier */}
      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,243,240,0.55)', marginBottom: '10px' }}>
        {card.tier}
      </div>

      {/* Price */}
      <div style={{ fontWeight: 800, fontSize: '36px', color: '#f4f3f0', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '4px' }}>
        {card.price}
      </div>

      {/* Commitment / class label */}
      <div style={{ fontSize: '11.5px', color: '#7a8494', marginBottom: '12px' }}>
        {card.classLabel ?? card.commitment}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(244,243,240,0.08)', marginBottom: '12px' }} />

      {/* Features — description removed (Fix 6A: keeps CTA visible) */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '7px', flex: 1 }}>
        {card.features.map((f) => (
          <li key={f} style={{ fontSize: '12px', color: 'rgba(244,243,240,0.65)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.35 }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <polyline points="2,6 5,9 10,3" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Fine print */}
      {card.finePrint && (
        <div style={{ fontSize: '10.5px', color: 'rgba(244,243,240,0.28)', marginBottom: '8px', lineHeight: 1.5 }}>
          {card.finePrint}
        </div>
      )}

      {/* Timeline */}
      <div style={{ fontSize: '11px', color: '#7a8494', marginBottom: '12px' }}>
        ⚡ {card.timeline}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          display: 'block', textAlign: 'center', padding: '11px 0',
          borderRadius: '7px', fontWeight: 600, fontSize: '13px',
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
