import PDMark from '@/components/ui/PDMark';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(244,243,240,0.08)] px-[60px] py-8 flex items-center justify-between w-full">
      <div className="flex items-baseline gap-0 text-[13px] font-extrabold text-[#f4f3f0] tracking-[-0.02em]">
        <span>Parsons</span>
        <span className="text-[#0891b2] mx-0.5">/</span>
        <em className="font-light not-italic">Digital</em>
      </div>

      <div className="text-[11px] text-[rgba(244,243,240,0.25)] tracking-[0.04em]">
        liam@liamparsonsdigital.com &nbsp;·&nbsp; liamparsonsdigital.com &nbsp;·&nbsp; Remote · US & Canada
      </div>
    </footer>
  );
}
