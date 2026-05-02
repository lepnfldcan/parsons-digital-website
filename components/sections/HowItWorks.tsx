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
    <section id="process" className="py-[120px] px-[60px] max-w-[1200px] mx-auto">
      <SectionLabel>Process</SectionLabel>
      <RevealWrapper>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f4f3f0] mb-[60px]">
          How it works
        </h2>
      </RevealWrapper>

      {/* Steps grid with connecting line */}
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
            {/* Step number with dot */}
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
    </section>
  );
}
