'use client';

import { BRAND } from '@/lib/brand';
import { Scene } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

export function BrandReveal() {
  return (
    <Scene glow full label="Everyone has a dream">
      <Stagger className="text-center" stagger={0.9}>
        <Line className="font-display text-line leading-tight font-light text-ivory-300">
          Everyone has a dream.
        </Line>
        <Line className="mt-6 font-display text-line leading-tight font-light text-ivory-100">
          But some dreams demand more.
        </Line>

        <Line as="div" className="mt-24">
          <span className="block font-display text-hero leading-none font-light tracking-[0.06em] text-ivory-50">
            {BRAND.name}
          </span>
          <span className="mt-4 block font-deva text-2xl text-dawn-400/70 sm:text-3xl">
            {BRAND.devanagari}
          </span>
        </Line>

        <Line className="mt-10 font-sans text-sm tracking-[0.28em] text-ivory-400 uppercase">
          {BRAND.tagline}
        </Line>
      </Stagger>
    </Scene>
  );
}
