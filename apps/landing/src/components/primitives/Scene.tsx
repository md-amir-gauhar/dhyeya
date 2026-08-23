import type { ReactNode } from 'react';

type SceneProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Ambient warm light bleeding from the desk lamp. */
  glow?: boolean;
  full?: boolean;
  label?: string;
};

/**
 * Every story beat is a Scene: a dark, grain-treated stage with generous vertical
 * breathing room so the copy lands like a title card rather than a paragraph.
 */
export function Scene({
  children,
  id,
  className = '',
  glow = false,
  full = false,
  label,
}: SceneProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`grain relative isolate overflow-hidden px-6 sm:px-10 ${
        full ? 'flex min-h-screen flex-col justify-center py-24' : 'py-28 sm:py-40'
      } ${className}`}
    >
      {glow && (
        <div className="lamp-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      )}
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SceneLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-8 block font-sans text-[0.7rem] tracking-[0.32em] text-dawn-400/80 uppercase">
      {children}
    </span>
  );
}

export function SceneHeading({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-scene leading-[1.05] font-light text-balance text-ivory-50 ${className}`}
    >
      {children}
    </h2>
  );
}
