export default function Footer() {
  return (
    <footer className="border-t border-[rgba(244,243,240,0.08)] w-full">

      {/* MOBILE ONLY — stacked, centered, with email button */}
      <div className="md:hidden flex flex-col items-center text-center gap-5 px-6 py-12">
        {/* Wordmark */}
        <div className="flex items-baseline gap-0 text-[13px] font-extrabold text-[#f4f3f0] tracking-[-0.02em]">
          <span>Parsons</span>
          <span className="text-[#0891b2] mx-0.5">/</span>
          <em className="font-light not-italic">Digital</em>
        </div>

        {/* Email button — mobile only */}
        <a
          href="mailto:liam@parsonsdigital.com"
          className="inline-flex items-center gap-2 bg-[rgba(244,243,240,0.06)] text-[rgba(244,243,240,0.6)] font-semibold text-[12px] px-5 py-2.5 rounded-[7px] no-underline border border-[rgba(244,243,240,0.12)] transition-[border-color,color] duration-200 hover:border-[rgba(244,243,240,0.25)] hover:text-[#f4f3f0]"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M2 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          liam@parsonsdigital.com
        </a>

        {/* Mobile info — business contact details */}
        <div className="text-[11px] text-[rgba(244,243,240,0.35)] tracking-[0.03em] leading-[1.9]">
          <div className="text-[rgba(244,243,240,0.55)] font-semibold">Liam Parsons</div>
          <a href="tel:+525545402582" className="text-[rgba(244,243,240,0.35)] no-underline hover:text-[#f4f3f0]">
            +52 55 4540 2582
          </a>
        </div>

        {/* Mobile info — positioning */}
        <div className="text-[11px] text-[rgba(244,243,240,0.2)] tracking-[0.04em] leading-[1.7]">
          parsonsdigital.com &nbsp;·&nbsp; Remote · US & Canada
        </div>
      </div>

      {/* DESKTOP ONLY */}
      <div className="hidden md:flex items-start justify-between px-[60px] py-8">
        <div className="flex items-baseline gap-0 text-[13px] font-extrabold text-[#f4f3f0] tracking-[-0.02em]">
          <span>Parsons</span>
          <span className="text-[#0891b2] mx-0.5">/</span>
          <em className="font-light not-italic">Digital</em>
        </div>

        <div className="text-right text-[11px] text-[rgba(244,243,240,0.3)] tracking-[0.04em] leading-[1.9]">
          <div className="text-[rgba(244,243,240,0.55)] font-semibold">Liam Parsons</div>
          <div>
            <a href="tel:+525545402582" className="text-[rgba(244,243,240,0.3)] no-underline hover:text-[#f4f3f0]">+52 55 4540 2582</a>
            &nbsp;·&nbsp;
            <a href="mailto:liam@parsonsdigital.com" className="text-[rgba(244,243,240,0.3)] no-underline hover:text-[#f4f3f0]">liam@parsonsdigital.com</a>
          </div>
          <div className="text-[rgba(244,243,240,0.2)]">parsonsdigital.com &nbsp;·&nbsp; Remote · US & Canada</div>
        </div>
      </div>
    </footer>
  );
}
