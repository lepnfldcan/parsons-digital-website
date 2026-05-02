'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface RevealWrapperProps {
  children: ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400;
  className?: string;
}

export default function RevealWrapper({
  children,
  delay = 0,
  className = '',
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set triggered state immediately — CSS transition handles the delay
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            // One-shot: never fires again
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        // Delay is in the CSS transition, not a setTimeout.
        // The element starts animating the moment it enters the viewport,
        // just with a delayed start baked into the transition.
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
