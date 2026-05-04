import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

const STEP_DELAYS = [0, 100, 200, 300] as const;

const steps = [
  {
    num: '01',
    title: 'Drop me a message',
    desc: "Tell me what you're working with. No forms, no calls required to get started.",
  },
  {
    num: '02',
    title: 'Clear scope & timeline',
    desc: "I'll send you a clear scope and timeline. No fluff, no surprises.",
  },
  {
    num: '03',
    title: 'Build together',
    desc: "You review, I revise. We work until it's right.",
  },
  {
    num: '04',
    title: 'Launch & hand off',
    desc: 'Launch, hand it over, done. Post-launch support included.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — vertical timeline */}
      <div className="md:hidden py-[80px] px-8">

        {/* Section label — Fix 1: single line */}
        <span style={{
          fontSize: '9px',
          fontWeight: 800,
          color: 'rgba(8,145,178,0.4)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '24px',
        }}>
          03 — Process
        </span>
        <RevealWrapper>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0] mb-10">
            How it works
          </h2>
        </RevealWrapper>

        {/* Vertical stack with left-side connecting line */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line — Fix 3: aligned to dot center, fades at bottom */}
          <div
            style={{
              position: 'absolute',
              left: '4px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'linear-gradient(180deg, rgba(8,145,178,0.5) 0%, rgba(8,145,178,0.5) 85%, transparent 100%)',
            }}
          />

          {steps.map((step, index) => (
            <RevealWrapper key={step.num} delay={STEP_DELAYS[index]}>
              {/* Fix 2: tighter spacing; last step no bottom padding */}
              <div style={{ padding: index === steps.length - 1 ? '0 0 0 40px' : '0 0 24px 40px', position: 'relative' }}>
                {/* Dot — Fix 3: left: 0, top: 4px — center at 5px, line at 4px */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#0891b2',
                  }}
                />
                {/* Step number */}
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#0891b2',
                  letterSpacing: '0.06em',
                  marginBottom: '8px',
                }}>
                  {step.num}
                </div>
                <h3 className="text-[16px] font-bold text-[#f4f3f0] tracking-[-0.01em] mb-2.5">
                  {step.title}
                </h3>
                {/* Fix 4: full white, light weight — readable */}
                <p style={{ fontSize: '13px', color: '#f4f3f0', fontWeight: 300, lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* DESKTOP ONLY — grid-cols-4 with horizontal connecting line */}
      <div className="hidden md:block py-[120px] px-[60px]">
        <SectionLabel>Process</SectionLabel>
        <RevealWrapper>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0] mb-[60px]">
            How it works
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-4 gap-0 relative">
          {/* Connecting line across the top */}
          <div
            className="absolute top-[20px] pointer-events-none"
            style={{
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(8,145,178,0.3), rgba(8,145,178,0.3), transparent)',
            }}
          />

          {steps.map((step, index) => (
            <RevealWrapper key={step.num} delay={STEP_DELAYS[index]}>
              <div className="px-6 relative">
                <div className="flex items-center gap-2 text-[11px] font-extrabold text-[#0891b2] tracking-[0.06em] mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0891b2] flex-shrink-0" />
                  {step.num}
                </div>
                <h3 className="text-[16px] font-bold text-[#f4f3f0] tracking-[-0.01em] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[rgba(244,243,240,0.45)] leading-[1.65]">
                  {step.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
