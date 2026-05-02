import { ReactNode } from 'react';

interface ButtonPrimaryProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function ButtonPrimary({
  href,
  children,
  icon,
  className = '',
}: ButtonPrimaryProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 bg-[#0891b2] text-white font-bold text-sm tracking-[0.01em] px-7 py-3.5 rounded-[7px] no-underline transition-[background,transform] duration-200 hover:bg-[#0779a0] hover:-translate-y-px ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
