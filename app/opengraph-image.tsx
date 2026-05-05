import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Parsons Digital — Web Design for Small Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadSyne800(): Promise<ArrayBuffer> {
  // Fetch the Google Fonts CSS for Syne 800
  const css = await fetch(
    'https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap',
    {
      headers: {
        // Chrome UA so Google returns woff2
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
      },
    }
  ).then((r) => r.text());

  // Pull the woff2 URL out of the CSS
  const woff2Url = css.match(
    /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/
  )?.[1];

  if (!woff2Url) throw new Error('Syne woff2 URL not found');

  return fetch(woff2Url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const syneData = await loadSyne800();

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
        {/* PD Mark — using actual Syne 800 font */}
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
                letterSpacing: '-1px',
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
                letterSpacing: '-1px',
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
