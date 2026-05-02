import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function WhyMe() {
  return (
    <section id="about" className="py-[120px] px-[60px] max-w-[1200px] mx-auto">
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
              <a href="mailto:liam@liamparsonsdigital.com" className="text-[#0891b2] no-underline hover:underline">
                liam@liamparsonsdigital.com
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
    </section>
  );
}
