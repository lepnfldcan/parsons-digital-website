import { ReactNode } from 'react';

interface ButtonWAProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function ButtonWA({
  href,
  children,
  icon,
  className = '',
}: ButtonWAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[rgba(244,243,240,0.06)] text-[rgba(244,243,240,0.75)] font-semibold text-sm px-7 py-3.5 rounded-[7px] no-underline border border-[rgba(244,243,240,0.12)] transition-[border-color,color] duration-200 hover:border-[rgba(244,243,240,0.3)] hover:text-[#f4f3f0] ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
