import { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a8494] mb-5 flex items-center gap-3 ${className}`}
    >
      {children}
      <div className="flex-1 h-px bg-[rgba(244,243,240,0.08)] max-w-[60px]" />
    </div>
  );
}
