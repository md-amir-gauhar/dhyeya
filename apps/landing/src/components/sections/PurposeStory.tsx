'use client';

import { BRAND } from '@/lib/brand';
import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const PLACES = [
  'A government school',
  'A district hospital',
  'A village road',
  'A public office',
  'A farmer waiting on a season',
  'A teacher with forty students',
  'A service counter queue',
  'A child walking into class',
];

export function PurposeStory() {
  return (
    <Scene glow label="Purpose worth preparing for">
      <SceneLabel>Where it lands</SceneLabel>

      <Stagger stagger={0.6}>
        <Line className="max-w-3xl font-display text-line leading-snug font-light text-ivory-100">
          Every policy eventually reaches a person.
        </Line>
        <Line className="mt-4 max-w-3xl font-display text-line leading-snug font-light text-ivory-300">
          Every decision affects someone.
        </Line>
        <Line className="mt-4 max-w-3xl font-display text-line leading-snug font-light text-ivory-400">
          Every public institution is built by people who choose to serve.
        </Line>
      </Stagger>

      <Reveal soft>
        <ul className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ivory-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {PLACES.map((place) => (
            <li
              key={place}
              className="bg-ink-900/40 px-6 py-8 font-sans text-sm leading-relaxed text-ivory-400 transition-colors duration-500 hover:bg-ink-800/60 hover:text-ivory-100"
            >
              {place}
            </li>
          ))}
        </ul>
      </Reveal>

      <Stagger className="mt-24 text-center" stagger={0.9}>
        <Line className="font-display text-line leading-snug font-light text-ivory-300">
          Maybe that&rsquo;s why they keep going.
        </Line>
        <Line as="div" className="mt-16">
          <span className="block font-display text-hero leading-none font-light tracking-[0.06em] text-ivory-50">
            {BRAND.name}
          </span>
          <span className="mt-6 block font-sans text-sm tracking-[0.28em] text-dawn-400 uppercase">
            Purpose worth preparing for.
          </span>
        </Line>
      </Stagger>
    </Scene>
  );
}
