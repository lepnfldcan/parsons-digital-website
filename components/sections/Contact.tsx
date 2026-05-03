import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY — centered, full-width buttons, radial glow */}
      <div className="md:hidden py-[80px] px-6 text-center relative overflow-hidden">
        {/* Radial glow (replaces ::before pseudo-element) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(8,145,178,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10">
          {/* Section number */}
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#0891b2',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            05
          </div>

          <div className="flex justify-center mb-7">
            <SectionLabel>Get in touch</SectionLabel>
          </div>

          <RevealWrapper>
            <h2
              className="font-extrabold tracking-[-0.03em] leading-[1.08] text-[#f4f3f0] mb-5 max-w-[700px] mx-auto"
              style={{ fontSize: 'clamp(28px, 8vw, 48px)' }}
            >
              Ready to get started?
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <p className="text-[16px] font-light text-[rgba(244,243,240,0.45)] max-w-[420px] mx-auto mb-10 leading-[1.7]">
              Send me a message and tell me what you&apos;re working with. I&apos;ll get back to you same day.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="flex flex-col gap-3">
              {/* Primary: Email — full width */}
              <a
                href="mailto:liam@parsonsdigital.com"
                className="flex items-center justify-center gap-2 bg-[#0891b2] text-white font-bold text-[14px] tracking-[0.01em] px-7 py-[14px] rounded-[7px] no-underline transition-[background,transform] duration-200 hover:bg-[#0779a0]"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Email me
              </a>

              {/* Secondary: WhatsApp — full width */}
              <a
                href="https://wa.me/525545402582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[rgba(244,243,240,0.06)] text-[rgba(244,243,240,0.75)] font-semibold text-[14px] px-7 py-[14px] rounded-[7px] no-underline border border-[rgba(244,243,240,0.12)] transition-[border-color,color] duration-200 hover:border-[rgba(244,243,240,0.3)] hover:text-[#f4f3f0]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.054 23.617a.5.5 0 0 0 .609.61l5.88-1.516A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.031-1.388l-.36-.214-3.733.962.993-3.63-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* DESKTOP ONLY — never touch this */}
      <div className="hidden md:block py-[120px] px-[60px] text-center">
        <div className="flex justify-center mb-7">
          <SectionLabel>Get in touch</SectionLabel>
        </div>

        <RevealWrapper>
          <h2 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#f4f3f0] mb-5 max-w-[700px] mx-auto">
            Ready to get started?
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p className="text-[16px] font-light text-[rgba(244,243,240,0.45)] max-w-[420px] mx-auto mb-12 leading-[1.7]">
            Send me a message and tell me what you&apos;re working with. I&apos;ll get back to you same day.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Primary: Email */}
            <a
              href="mailto:liam@parsonsdigital.com"
              className="inline-flex items-center gap-2 bg-[#0891b2] text-white font-bold text-[14px] tracking-[0.01em] px-7 py-[14px] rounded-[7px] no-underline transition-[background,transform] duration-200 hover:bg-[#0779a0] hover:-translate-y-px"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Email me
            </a>

            {/* Secondary: WhatsApp */}
            <a
              href="https://wa.me/525545402582"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(244,243,240,0.06)] text-[rgba(244,243,240,0.75)] font-semibold text-[14px] px-7 py-[14px] rounded-[7px] no-underline border border-[rgba(244,243,240,0.12)] transition-[border-color,color] duration-200 hover:border-[rgba(244,243,240,0.3)] hover:text-[#f4f3f0]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.054 23.617a.5.5 0 0 0 .609.61l5.88-1.516A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.031-1.388l-.36-.214-3.733.962.993-3.63-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
