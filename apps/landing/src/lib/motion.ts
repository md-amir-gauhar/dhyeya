import type { Variants } from 'motion/react';

export const EASE_CINEMA = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE_CINEMA },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.4, ease: EASE_CINEMA } },
};

/** Staggers children so cinematic lines land one after another, not all at once. */
export const lineStagger = (stagger = 0.55, delay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const VIEWPORT = { once: true, amount: 0.4 } as const;
export const VIEWPORT_SOFT = { once: true, amount: 0.2 } as const;
