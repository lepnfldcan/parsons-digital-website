import ButtonPrimary from '@/components/ui/ButtonPrimary';
import ButtonGhost from '@/components/ui/ButtonGhost';

// Desktop only — MobileHero handles ≤ 768px
export default function Hero() {
  return (
    <section className="min-h-screen hidden md:flex md:flex-col justify-center px-[60px] pt-[140px] pb-[100px] relative overflow-hidden bg-[#1e2530]">
      {/* Gradient backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(8,145,178,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(8,145,178,0.04) 0%, transparent 70%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244,243,240,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,243,240,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-7 text-[#0891b2] text-[11px] font-medium tracking-[0.18em] uppercase">
          <div className="w-7 h-px bg-[#0891b2]" />
          Web Design for Small Business
        </div>

        <h1 className="mb-8 max-w-[900px] text-[clamp(48px,7vw,88px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#f4f3f0]">
          Websites that work as<br />
          <em className="text-[#0891b2] not-italic">hard</em> as you do.
        </h1>

        <p className="text-[18px] font-light text-[rgba(244,243,240,0.55)] max-w-[540px] mb-12 leading-[1.7]">
          I build fast, beautiful websites for local businesses — from simple landing pages to fully custom sites with booking, payments, and AI — so you look great online and get real results.
        </p>

        <div className="flex items-center gap-5">
          <ButtonPrimary href="#contact">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonPrimary>
          <ButtonGhost href="#services">
            See pricing
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 3v8M3 7l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonGhost>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-[60px] flex items-center gap-3 text-[11px] uppercase text-[rgba(244,243,240,0.25)]"
        style={{ letterSpacing: '0.12em' }}
      >
        <div className="w-10 h-px bg-[rgba(244,243,240,0.15)]" />
        Scroll
      </div>
    </section>
  );
}
