import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Parsons Digital — Web Design for Small Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const syneData = readFileSync(
    join(process.cwd(), 'public/fonts/Syne-ExtraBold-static.ttf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#1e2530',
          padding: '80px',
          borderLeft: '6px solid #0891b2',
        }}
      >
        {/* PD Mark */}
        <div
          style={{
            width: 80,
            height: 80,
            background: '#3d4555',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span
              style={{
                fontFamily: 'Syne',
                fontWeight: 800,
                fontSize: 32,
                color: '#f4f3f0',
                lineHeight: 1,
              }}
            >
              P
            </span>
            <div
              style={{
                width: 3.5,
                height: 26,
                background: '#0891b2',
                borderRadius: 99,
                transform: 'rotate(14deg)',
              }}
            />
            <span
              style={{
                fontFamily: 'Syne',
                fontWeight: 800,
                fontSize: 32,
                color: '#f4f3f0',
                lineHeight: 1,
              }}
            >
              D
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 800,
              color: '#f4f3f0',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            Websites that work as
          </div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: '#0891b2',
                lineHeight: 1.05,
                letterSpacing: '-2px',
              }}
            >
              hard
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: '#f4f3f0',
                lineHeight: 1.05,
                letterSpacing: '-2px',
              }}
            >
              as you do.
            </span>
          </div>
        </div>

        {/* Bottom: tagline + URL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', fontSize: 22, color: '#7a8494' }}>
            Web design · Local SEO · AI tools for small business
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: '#0891b2',
              letterSpacing: 2,
            }}
          >
            parsonsdigital.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Syne',
          data: syneData,
          style: 'normal',
          weight: 800,
        },
      ],
    }
  );
}
