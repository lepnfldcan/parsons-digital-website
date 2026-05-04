import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function WhyMe() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — md and below */}
      <div className="md:hidden py-[80px] px-8" style={{ overflow: 'visible' }}>

        {/* Section label — Fix 6: single line */}
        <span style={{
          fontSize: '9px',
          fontWeight: 800,
          color: 'rgba(8,145,178,0.4)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '24px',
        }}>
          02 — Why Me
        </span>

        {/* Photo — Fix 2: edge treatment + accent box, Fix 3: tighter gap */}
        <RevealWrapper>
          <div style={{ maxWidth: '280px', margin: '0 auto 24px', position: 'relative' }}>
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden" style={{ border: '1px solid rgba(244,243,240,0.18)' }}>
              <Image
                src="/images/liam.jpg"
                alt="Liam Parsons"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 280px, 40vw"
              />
            </div>
            {/* Cyan accent box — offset bottom-right */}
            <div style={{
              position: 'absolute',
              bottom: '-14px',
              right: '-14px',
              width: '56px',
              height: '56px',
              border: '2px solid rgba(8,145,178,0.5)',
              borderRadius: '10px',
              pointerEvents: 'none',
              zIndex: 10,
            }} />
          </div>
        </RevealWrapper>

        {/* Quote */}
        <RevealWrapper>
          <p
            className="font-bold leading-[1.3] tracking-[-0.01em] text-[#f4f3f0] mb-7"
            style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}
          >
            I&apos;m not an agency.<br />
            <em className="not-italic text-[#0891b2]">I&apos;m one person</em> who builds,<br />
            responds, and follows through.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p className="text-[15px] font-light text-[rgba(244,243,240,0.55)] leading-[1.8] mb-9">
            Most web people disappear after launch. I don&apos;t. You&apos;ll have my direct contact, and your site will get the attention it deserves. No account managers. No hand-offs. Just me.
          </p>
        </RevealWrapper>

        {/* Fix 5: email as standalone tappable element */}
        <RevealWrapper delay={200}>
          <p style={{ fontSize: '13px', color: 'rgba(244,243,240,0.4)', lineHeight: 1.7, marginBottom: '8px' }}>
            Got a project in mind? Reach out — I&apos;ll get back to you same day.
          </p>
          <a href="mailto:liam@parsonsdigital.com" style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '13px',
            fontWeight: 600,
            color: '#0891b2',
            textDecoration: 'none',
            padding: '10px 0',
            minHeight: '44px',
            letterSpacing: '0.01em',
          }}>
            liam@parsonsdigital.com
          </a>
        </RevealWrapper>

        {/* Stats — Fix 1: horizontal row, not stacked */}
        <RevealWrapper delay={300}>
          <div style={{
            borderTop: '1px solid rgba(244,243,240,0.08)',
            marginTop: '36px',
            paddingTop: '32px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px', borderRight: '1px solid rgba(244,243,240,0.08)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#f4f3f0', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px', whiteSpace: 'nowrap' }}>
                6–12<span style={{ color: '#0891b2' }}>hr</span>
              </div>
              <div style={{ fontSize: '10px', color: '#7a8494', textAlign: 'center', lineHeight: 1.4, maxWidth: '72px' }}>Support response</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px', borderRight: '1px solid rgba(244,243,240,0.08)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#f4f3f0', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>
                100<span style={{ color: '#0891b2' }}>%</span>
              </div>
              <div style={{ fontSize: '10px', color: '#7a8494', textAlign: 'center', lineHeight: 1.4, maxWidth: '72px' }}>Mobile-ready</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#f4f3f0', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>
                Forever<span style={{ color: '#0891b2' }}>.</span>
              </div>
              <div style={{ fontSize: '10px', color: '#7a8494', textAlign: 'center', lineHeight: 1.4, maxWidth: '72px' }}>You own the code</div>
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* DESKTOP ONLY — never touch this */}
      <div className="hidden md:block py-[120px] px-[60px]">
        <div className="grid grid-cols-[1fr_1.4fr] gap-20 items-center">

          {/* Photo column */}
          <RevealWrapper>
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/liam.jpg"
                  alt="Liam Parsons"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              {/* Decorative accent box */}
              <div className="absolute -bottom-5 -right-5 w-[120px] h-[120px] border-2 border-[rgba(8,145,178,0.3)] rounded-xl pointer-events-none" />
            </div>
          </RevealWrapper>

          {/* Content column */}
          <div>
            <SectionLabel>Why Me</SectionLabel>

            <RevealWrapper>
              <p className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.3] tracking-[-0.01em] text-[#f4f3f0] mb-7">
                I&apos;m not an agency.<br />
                <em className="not-italic text-[#0891b2]">I&apos;m one person</em> who builds,<br />
                responds, and follows through.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <p className="text-[15px] font-light text-[rgba(244,243,240,0.55)] leading-[1.8] mb-9">
                Most web people disappear after launch. I don&apos;t. You&apos;ll have my direct contact, and your site will get the attention it deserves. No account managers. No hand-offs. Just me.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={200}>
              <p className="text-[13px] text-[rgba(244,243,240,0.4)] leading-[1.7]">
                Got a project in mind? Reach out — I&apos;ll get back to you same day.<br />
                <a href="mailto:liam@parsonsdigital.com" className="text-[#0891b2] no-underline hover:underline">
                  liam@parsonsdigital.com
                </a>
              </p>
            </RevealWrapper>

            {/* Stats */}
            <RevealWrapper delay={300}>
            <div className="flex gap-10 mt-10 pt-10 border-t border-[rgba(244,243,240,0.08)]">
              <div>
                <div className="text-[28px] font-extrabold text-[#f4f3f0] tracking-[-0.02em] mb-1">
                  6–12<span className="text-[#0891b2]">hr</span>
                </div>
                <div className="text-[11px] text-[#7a8494] leading-[1.4]">Support response time</div>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#f4f3f0] tracking-[-0.02em] mb-1">
                  100<span className="text-[#0891b2]">%</span>
                </div>
                <div className="text-[11px] text-[#7a8494] leading-[1.4]">Mobile-responsive builds</div>
              </div>
              <div>
                <div className="text-[28px] font-extrabold text-[#f4f3f0] tracking-[-0.02em] mb-1">
                  Forever<span className="text-[#0891b2]">.</span>
                </div>
                <div className="text-[11px] text-[#7a8494] leading-[1.4]">You own every file, every line of code</div>
              </div>
            </div>
            </RevealWrapper>

          </div>
        </div>
      </div>
    </section>
  );
}
