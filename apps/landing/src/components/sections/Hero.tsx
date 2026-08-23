'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { BRAND, CTA } from '@/lib/brand';
import { EASE_CINEMA } from '@/lib/motion';
import { CtaButton } from '@/components/primitives/CtaButton';
import { DeskScene } from '@/components/primitives/DeskScene';

/**
 * The opening is time-based rather than scroll-based: the visitor arrives in
 * darkness at 04:59 and the room only wakes once the alarm rings.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const [awake, setAwake] = useState(Boolean(reduced));
  const [time, setTime] = useState('04:59');

  useEffect(() => {
    if (reduced) {
      setTime('05:00');
      return;
    }
    const tick = window.setTimeout(() => setTime('05:00'), 2600);
    const lamp = window.setTimeout(() => setAwake(true), 3800);
    return () => {
      window.clearTimeout(tick);
      window.clearTimeout(lamp);
    };
  }, [reduced]);

  const ringing = time === '05:00' && !awake;

  return (
    <section
      className="grain relative isolate flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-10 pb-12 sm:px-10"
      aria-label="DHYEYA — while the country sleeps"
    >
      <motion.div
        className="lamp-glow pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: awake ? 1 : 0 }}
        transition={{ duration: 2.4, ease: EASE_CINEMA }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[46vh] opacity-70 sm:h-[52vh]">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: awake ? 1 : 0.08 }}
          transition={{ duration: 3, ease: EASE_CINEMA }}
        >
          <DeskScene />
        </motion.div>
      </div>
      <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <motion.span
          className="font-display text-lg tracking-[0.34em] text-ivory-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: awake ? 1 : 0.25 }}
          transition={{ duration: 1.6 }}
        >
          {BRAND.name}
        </motion.span>
        <motion.a
          href={CTA.secondary.href}
          className="font-sans text-xs tracking-[0.18em] text-ivory-400 uppercase transition-colors hover:text-dawn-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: awake ? 1 : 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
          How it works
        </motion.a>
      </header>

      <div className="mx-auto w-full max-w-6xl">
        {/* clock */}
        <motion.div
          className="mb-14 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: EASE_CINEMA }}
        >
          <motion.span
            className="font-sans text-sm tracking-[0.4em] text-ivory-400 tabular-nums"
            animate={ringing ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
            transition={ringing ? { duration: 0.6, repeat: 2 } : { duration: 0.8 }}
          >
            {time} AM
          </motion.span>
          <motion.span
            className="h-px bg-dawn-400/40"
            initial={{ width: 0 }}
            animate={{ width: awake ? 88 : 0 }}
            transition={{ duration: 1.8, ease: EASE_CINEMA }}
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={awake ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.85, delayChildren: 0.3 } },
          }}
        >
          <motion.h1
            className="font-display text-scene leading-[1.06] font-light text-balance text-ivory-50"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: EASE_CINEMA } },
            }}
          >
            While the country sleeps&hellip;
          </motion.h1>

          <motion.p
            className="mt-5 font-display text-line leading-[1.15] font-light text-balance text-ivory-300"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: EASE_CINEMA } },
            }}
          >
            &hellip;someone is preparing for tomorrow.
          </motion.p>

          <motion.div
            className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: EASE_CINEMA } },
            }}
          >
            <CtaButton href={CTA.primary.href}>{CTA.primary.label}</CtaButton>
            <CtaButton href={CTA.secondary.href} variant="ghost">
              {CTA.secondary.label}
            </CtaButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-6xl items-end justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: awake ? 1 : 0 }}
        transition={{ duration: 1.8, delay: 2.6 }}
      >
        <p className="hidden max-w-xs font-sans text-xs leading-relaxed tracking-wide text-ivory-400 sm:block">
          An AI preparation companion for serious government-exam aspirants.
        </p>
        <span
          className="font-sans text-[0.65rem] tracking-[0.3em] text-ivory-400/60 uppercase"
          aria-hidden="true"
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
