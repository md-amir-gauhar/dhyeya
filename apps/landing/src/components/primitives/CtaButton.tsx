import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export function CtaButton({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-sans text-sm tracking-wide transition-all duration-500 ease-out';

  const styles =
    variant === 'primary'
      ? 'bg-dawn-400 text-ink-950 font-medium hover:bg-dawn-300 hover:shadow-[0_0_44px_-8px_rgb(229_169_92/0.6)]'
      : 'border border-ivory-100/20 text-ivory-100 hover:border-dawn-400/60 hover:text-dawn-300';

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
