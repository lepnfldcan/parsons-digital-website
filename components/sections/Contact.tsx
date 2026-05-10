import SectionLabel from '@/components/ui/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper';
import ContactForm from '@/components/ui/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto">

      {/* MOBILE ONLY */}
      <div className="md:hidden py-[80px] px-6 relative overflow-hidden">
        {/* Radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(8,145,178,0.06) 0%, transparent 70%)',
        }} />

        <div className="relative z-10">
          <span style={{
            fontSize: '9px', fontWeight: 800, color: 'rgba(8,145,178,0.4)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            display: 'block', textAlign: 'center', marginBottom: '20px',
          }}>
            05 — Get in touch
          </span>

          <RevealWrapper>
            <h2 style={{
              fontSize: '36px', fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.08, color: '#f4f3f0',
              marginBottom: '12px', textAlign: 'center',
            }}>
              Ready to get started?
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <p style={{
              fontSize: '15px', fontWeight: 300, color: 'rgba(244,243,240,0.45)',
              lineHeight: 1.7, textAlign: 'center',
              maxWidth: '300px', margin: '0 auto 32px',
            }}>
              Tell me what you&apos;re working with. I&apos;ll get back to you same day.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <ContactForm />
          </RevealWrapper>
        </div>
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden md:block py-[120px] px-[60px]">
        <div className="flex justify-center mb-7">
          <SectionLabel>Get in touch</SectionLabel>
        </div>

        <RevealWrapper>
          <h2 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#f4f3f0] mb-4 max-w-[700px] mx-auto text-center">
            Ready to get started?
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <p className="text-[16px] font-light text-[rgba(244,243,240,0.45)] max-w-[420px] mx-auto mb-12 leading-[1.7] text-center">
            Send me a message and tell me what you&apos;re working with. I&apos;ll get back to you same day.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <ContactForm />
        </RevealWrapper>
      </div>
    </section>
  );
}
