import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

const tags = [
  { label: 'Next.js', highlight: true },
  { label: 'Brand Design System', highlight: false },
  { label: 'Booking Integration', highlight: false },
  { label: 'SEO + OpenGraph', highlight: false },
  { label: 'Vercel Deployment', highlight: false },
];

// Mobile: 3 most legible tags in a scroll row
const mobileTags = [
  { label: 'Next.js', highlight: true },
  { label: 'Booking Integration', highlight: false },
  { label: 'SEO + OpenGraph', highlight: false },
];

export default function CaseStudy() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — single column, preview hidden, inline stats */}
      <div className="md:hidden py-[80px] px-8">

        {/* Section label — Fix 2+6: single line, no rule, no redundant heading */}
        <span style={{
          fontSize: '9px',
          fontWeight: 800,
          color: 'rgba(8,145,178,0.4)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '20px',
        }}>
          04 — Work
        </span>

        <RevealWrapper>
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(244,243,240,0.03)',
              border: '1px solid rgba(244,243,240,0.08)',
              borderRadius: '20px',
              padding: '32px 24px',
            }}
          >
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #0891b2, transparent)' }}
            />

            {/* Content */}
            <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#0891b2] mb-4">
              Custom Next.js · Direct Primary Care · St. Petersburg, FL
            </div>
            <h3 className="text-[28px] font-extrabold tracking-[-0.02em] text-[#f4f3f0] leading-[1.2] mb-4">
              An entire digital<br />footprint. 8 weeks.
            </h3>
            {/* Fix 1+4: one tight paragraph, full white at weight 300 */}
            <p style={{ fontSize: '14px', fontWeight: 300, color: '#f4f3f0', lineHeight: 1.75, marginBottom: '20px' }}>Angela came in with no website, no domain, no digital presence. In 8 weeks I built it all from scratch: full brand system, custom Next.js site, booking, SEO, HIPAA-compliant Google Workspace, and Vercel deployment.</p>

            {/* Fix 3: 3 tags max, horizontal scroll row — no wrapping */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', scrollbarWidth: 'none', marginBottom: '24px', paddingBottom: '4px' }}>
              {mobileTags.map((tag) => (
                <span
                  key={tag.label}
                  style={{
                    flexShrink: 0,
                    fontSize: '10.5px',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    border: tag.highlight ? '1px solid rgba(8,145,178,0.2)' : '1px solid rgba(244,243,240,0.08)',
                    background: tag.highlight ? 'rgba(8,145,178,0.1)' : 'rgba(244,243,240,0.05)',
                    color: tag.highlight ? '#0891b2' : '#7a8494',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#0891b2] pl-5 mb-6">
              <p className="text-[14px] font-medium text-[#f4f3f0] leading-[1.65] italic mb-2">
                &ldquo;I was overwhelmed with decisions and unable to see the forest through the trees. Liam built my website, Google Workspace to be HIPAA compliant, all the integrations, my logo, branding — and handled every &lsquo;can you help me with&hellip;?&rsquo; along the way. I don&rsquo;t know where I would be without him.&rdquo;
              </p>
              <p className="text-[12px] text-[#7a8494]">
                Angela Carley, MSN, APRN-BC · Founder, Luminary Integrative Health
              </p>
            </div>

            {/* Mobile site preview — between quote and stats */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{
                position: 'relative',
                width: '200px',
                height: '380px',
              }}>
                {/* Cyan glow halo behind phone */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '280px',
                  height: '420px',
                  borderRadius: '120px',
                  background: 'radial-gradient(circle, rgba(8,145,178,0.25) 0%, rgba(8,145,178,0.08) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />
                {/* Phone mockup */}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '200px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '3px solid rgba(244,243,240,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  background: '#fff',
                }}>
                <Image
                  src="/luminary-mobile-preview.png"
                  alt="Luminary Integrative Health mobile website"
                  width={390}
                  height={844}
                  sizes="200px"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <a
                  href="https://www.luminaryihc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
                    fontSize: '10px', fontWeight: 600, color: '#0891b2',
                    textDecoration: 'none', background: 'rgba(30,37,48,0.9)',
                    padding: '5px 10px', borderRadius: '6px',
                    backdropFilter: 'blur(8px)', letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Visit the site ↗
                </a>
              </div>
              </div>
            </div>

            {/* Proof points — two clean checkmark lines */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px',
                borderTop: '1px solid rgba(244,243,240,0.08)',
                borderBottom: '1px solid rgba(244,243,240,0.08)',
                padding: '18px 0',
              }}
            >
              {['Entire digital footprint in 8 weeks', 'Booking patients in week 1'].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="3,7 6,10 11,4" />
                  </svg>
                  <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#f4f3f0' }}>{point}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.luminaryihc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0891b2] no-underline hover:underline"
            >
              Visit the site
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </RevealWrapper>
      </div>

      {/* DESKTOP ONLY — never touch this */}
      <div className="hidden md:block py-[120px] px-[60px]">
        <SectionLabel>Work</SectionLabel>
        <RevealWrapper>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0] mb-10">
            Case study
          </h2>
        </RevealWrapper>

        <RevealWrapper>
          <div className="relative bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-2xl p-[60px] grid grid-cols-2 gap-[60px] items-center overflow-hidden">
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #0891b2, transparent)' }}
            />

            {/* Left: content */}
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#0891b2] mb-4">
                Custom Next.js · Direct Primary Care · St. Petersburg, FL
              </div>
              <h3 className="text-[28px] font-extrabold tracking-[-0.02em] text-[#f4f3f0] leading-[1.2] mb-4">
                An entire digital<br />footprint. 8 weeks.
              </h3>
              <p className="text-[14px] font-light leading-[1.75] mb-6" style={{ color: '#f4f3f0' }}>Angela came in with no website, no domain, no digital presence. In 8 weeks I built it all from scratch: full brand system, custom Next.js site, booking, SEO, HIPAA-compliant Google Workspace, and Vercel deployment.</p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-[10.5px] px-2.5 py-[3px] rounded-full border ${
                      tag.highlight
                        ? 'bg-[rgba(8,145,178,0.1)] border-[rgba(8,145,178,0.2)] text-[#0891b2]'
                        : 'bg-[rgba(244,243,240,0.05)] border-[rgba(244,243,240,0.08)] text-[#7a8494]'
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-2 border-[#0891b2] pl-5 mb-6">
                <p className="text-[15px] font-medium text-[#f4f3f0] leading-[1.65] italic mb-2">
                  &ldquo;I was overwhelmed with decisions and unable to see the forest through the trees. Liam built my website, Google Workspace to be HIPAA compliant, all the integrations, my logo, branding — and handled every &lsquo;can you help me with&hellip;?&rsquo; along the way. I don&rsquo;t know where I would be without him.&rdquo;
                </p>
                <p className="text-[12px] text-[#7a8494]">
                  Angela Carley, MSN, APRN-BC · Founder, Luminary Integrative Health
                </p>
              </div>

              <a
                href="https://www.luminaryihc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0891b2] no-underline hover:underline"
              >
                Visit the site
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right: mobile preview + stats */}
            <div className="flex flex-col gap-4 items-center">
              <div style={{
                position: 'relative',
                width: '240px',
                height: '450px',
              }}>
                {/* Cyan glow halo behind phone */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '340px',
                  height: '520px',
                  borderRadius: '140px',
                  background: 'radial-gradient(circle, rgba(8,145,178,0.28) 0%, rgba(8,145,178,0.1) 40%, transparent 70%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />
                {/* Phone mockup */}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '240px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '3px solid rgba(244,243,240,0.12)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                  background: '#fff',
                }}>
                <Image
                  src="/luminary-mobile-preview.png"
                  alt="Luminary Integrative Health mobile website"
                  width={390}
                  height={844}
                  sizes="240px"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <a
                  href="https://www.luminaryihc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)',
                    fontSize: '11px', fontWeight: 600, color: '#0891b2',
                    textDecoration: 'none', letterSpacing: '0.04em',
                    background: 'rgba(30,37,48,0.85)', padding: '6px 12px',
                    borderRadius: '6px', backdropFilter: 'blur(8px)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Visit the site ↗
                </a>
              </div>
              </div>

              {/* Proof points */}
              <div className="flex flex-col gap-3 mt-4 w-full max-w-[240px]">
                {['Entire digital footprint in 8 weeks', 'Booking patients in week 1'].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="3,7 6,10 11,4" />
                    </svg>
                    <span className="text-[13.5px] font-medium text-[#f4f3f0]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
