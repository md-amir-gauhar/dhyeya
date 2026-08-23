'use client';

import { BRAND } from '@/lib/brand';
import { Scene } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

const PROMISES = [
  'For the early mornings.',
  'For the difficult chapters.',
  'For the bad scores.',
  'For the questions you can\u2019t answer.',
  'For the days you want to give up.',
  'For the next attempt.',
  'For the next question.',
  'For the next step.',
];

export function DhyeyaPromise() {
  return (
    <Scene glow label="Until then, we'll be here">
      <Stagger stagger={0.5}>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-50">
          Until then, we&rsquo;ll be here.
        </Line>

        <Line as="div">
          <ul className="mt-16 space-y-3.5">
            {PROMISES.map((promise) => (
              <li key={promise} className="font-sans text-lg text-ivory-400 sm:text-xl">
                {promise}
              </li>
            ))}
          </ul>
        </Line>

        <Line as="div" className="mt-24 border-t border-ivory-100/10 pt-14">
          <span className="block font-display text-hero leading-none font-light tracking-[0.06em] text-ivory-50">
            {BRAND.name}
          </span>
          <span className="mt-6 block font-sans text-sm tracking-[0.28em] text-dawn-400 uppercase">
            {BRAND.tagline}
          </span>
        </Line>
      </Stagger>
    </Scene>
  );
}
