'use client';

import { motion } from 'motion/react';
import { BRAND, CTA } from '@/lib/brand';
import { CtaButton } from '@/components/primitives/CtaButton';
import { DeskScene } from '@/components/primitives/DeskScene';
import { Line, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

export function FinalCta() {
  return (
    <section
      id="start"
      aria-label="Start preparing with DHYEYA"
      className="grain relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 py-32 sm:px-10"
    >
      {/* the same desk, now in daylight */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[45vh] opacity-60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={VIEWPORT_SOFT}
        transition={{ duration: 2.4, ease: EASE_CINEMA }}
      >
        <DeskScene light="dawn" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_75%_15%,rgb(246_217_168/0.14),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl">
        <Stagger stagger={0.7}>
          <Line className="font-display text-scene leading-[1.05] font-light text-balance text-ivory-50">
            You&rsquo;ve already chosen the journey.
          </Line>
          <Line className="mt-5 font-display text-line leading-snug font-light text-ivory-300">
            Now make every day count.
          </Line>

          <Line as="div" className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href="#start">{CTA.final.label}</CtaButton>
            <CtaButton href={CTA.finalSecondary.href} variant="ghost">
              {CTA.finalSecondary.label}
            </CtaButton>
          </Line>

          <Line as="div" className="mt-28 border-t border-ivory-100/10 pt-14">
            <p className="font-display text-line leading-snug font-light text-ivory-400">
              {BRAND.philosophy.milestone}
            </p>
            <p className="mt-2 font-display text-line leading-snug font-light text-ivory-100">
              {BRAND.philosophy.destination}
            </p>
          </Line>
        </Stagger>
      </div>
    </section>
  );
}
