import { ReactNode } from 'react';

interface ButtonGhostProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function ButtonGhost({
  href,
  children,
  icon,
  className = '',
}: ButtonGhostProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 text-[rgba(244,243,240,0.6)] text-sm font-medium no-underline transition-colors duration-200 hover:text-[#f4f3f0] ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
