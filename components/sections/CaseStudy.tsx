import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

const tags = [
  { label: 'Next.js', highlight: true },
  { label: 'Brand Design System', highlight: false },
  { label: 'Booking Integration', highlight: false },
  { label: 'SEO + OpenGraph', highlight: false },
  { label: 'Vercel Deployment', highlight: false },
];

export default function CaseStudy() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — single column, preview hidden, inline stats */}
      <div className="md:hidden py-[80px] px-8">

        {/* Section number */}
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#0891b2',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          04
        </div>

        <SectionLabel>Work</SectionLabel>
        <RevealWrapper>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0] mb-8">
            Case study
          </h2>
        </RevealWrapper>

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
              Zero to live<br />in 30 days.
            </h3>
            <p className="text-[14px] text-[rgba(244,243,240,0.5)] leading-[1.75] mb-5">
              Angela Carley, MSN, APRN-BC, spent 20 years in traditional healthcare before founding Luminary Integrative Health — a membership-based direct primary care clinic built around one idea: that care should be between patient and provider, not filtered through insurance.
            </p>
            <p className="text-[14px] text-[rgba(244,243,240,0.5)] leading-[1.75] mb-6">
              She came in with no website, no domain, and no digital presence — preparing to open her doors with a hard May 1st launch date. In 30 days: full brand design system, custom Next.js build, multi-page architecture, mobile-responsive design, booking integration, SEO setup, and Vercel deployment with custom domain.
            </p>

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
              <p className="text-[15px] font-medium text-[#f4f3f0] leading-[1.6] italic mb-2">
                &ldquo;Working with Liam was like working with a friend. It was easy and fun.&rdquo;
              </p>
              <p className="text-[12px] text-[#7a8494]">
                Angela Carley, MSN, APRN-BC · Founder, Luminary Integrative Health
              </p>
            </div>

            {/* Inline stats — flex row (replaces 2-col grid on mobile) */}
            <div
              style={{
                display: 'flex',
                gap: '0',
                marginBottom: '20px',
                borderTop: '1px solid rgba(244,243,240,0.08)',
                borderBottom: '1px solid rgba(244,243,240,0.08)',
                padding: '16px 0',
              }}
            >
              <div style={{ flex: 1, paddingRight: '16px', borderRight: '1px solid rgba(244,243,240,0.08)' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#f4f3f0', letterSpacing: '-0.02em', marginBottom: '2px' }}>30</div>
                <div style={{ fontSize: '11px', color: '#7a8494' }}>Days from brief to live</div>
              </div>
              <div style={{ flex: 1, paddingLeft: '16px' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#f4f3f0', letterSpacing: '-0.02em', marginBottom: '2px' }}>Day 1</div>
                <div style={{ fontSize: '11px', color: '#7a8494' }}>First patient inquiry</div>
              </div>
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
                Zero to live<br />in 30 days.
              </h3>
              <p className="text-[14px] text-[rgba(244,243,240,0.5)] leading-[1.75] mb-5">
                Angela Carley, MSN, APRN-BC, spent 20 years in traditional healthcare before founding Luminary Integrative Health — a membership-based direct primary care clinic built around one idea: that care should be between patient and provider, not filtered through insurance.
              </p>
              <p className="text-[14px] text-[rgba(244,243,240,0.5)] leading-[1.75] mb-6">
                She came in with no website, no domain, and no digital presence — preparing to open her doors with a hard May 1st launch date. In 30 days: full brand design system, custom Next.js build, multi-page architecture, mobile-responsive design, booking integration, SEO setup, and Vercel deployment with custom domain.
              </p>

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
                <p className="text-[15px] font-medium text-[#f4f3f0] leading-[1.6] italic mb-2">
                  &ldquo;Working with Liam was like working with a friend. It was easy and fun.&rdquo;
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

            {/* Right: site preview + stats */}
            <div className="flex flex-col gap-4">
              <div className="aspect-[16/10] bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-[10px] flex flex-col items-center justify-center gap-3">
                <div className="text-[32px] font-extrabold tracking-[-0.02em] text-[rgba(244,243,240,0.08)] leading-none">
                  luminaryihc.com
                </div>
                <a
                  href="https://www.luminaryihc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-semibold text-[#0891b2] no-underline tracking-[0.04em] hover:underline"
                >
                  Visit the live site ↗
                </a>
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-lg p-4">
                  <div className="text-[22px] font-extrabold text-[#f4f3f0] tracking-[-0.02em] mb-1">30</div>
                  <div className="text-[11px] text-[#7a8494]">Days from brief to live</div>
                </div>
                <div className="bg-[rgba(244,243,240,0.03)] border border-[rgba(244,243,240,0.08)] rounded-lg p-4">
                  <div className="text-[22px] font-extrabold text-[#f4f3f0] tracking-[-0.02em] mb-1">Day 1</div>
                  <div className="text-[11px] text-[#7a8494]">First patient inquiry received</div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
