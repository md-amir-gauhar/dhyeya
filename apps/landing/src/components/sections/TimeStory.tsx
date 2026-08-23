'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const SEASONS = [
  { season: 'Monsoon', note: 'Notebook one' },
  { season: 'Winter', note: 'Notebook four' },
  { season: 'Summer', note: 'Notebook nine' },
  { season: 'Monsoon again', note: 'Notebook fourteen' },
];

export function TimeStory() {
  return (
    <Scene label="Time">
      <SceneLabel>Time</SceneLabel>

      <Reveal soft>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-ivory-100/10 sm:grid-cols-4">
          {SEASONS.map((item) => (
            <li key={item.season} className="bg-ink-900/40 px-6 py-10">
              <span className="font-sans text-xs tracking-[0.2em] text-dawn-400/70 uppercase">
                {item.season}
              </span>
              <p className="mt-3 font-display text-lg font-light text-ivory-200">{item.note}</p>
              <p className="mt-1 font-sans text-xs text-ivory-400">Same desk.</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Stagger className="mt-20 max-w-3xl" stagger={0.6}>
        <Line className="font-display text-line leading-snug font-light text-ivory-300">
          Days become months.
        </Line>
        <Line className="mt-3 font-display text-line leading-snug font-light text-ivory-300">
          Months become years.
        </Line>
        <Line className="mt-8 font-sans text-base text-ivory-400">
          Some chapters are rewritten.
        </Line>
        <Line className="mt-2 font-sans text-base text-ivory-400">
          Some dreams take longer than expected.
        </Line>
        <Line className="mt-12 font-display text-scene leading-[1.05] font-light text-ivory-50">
          But they keep showing up.
        </Line>
      </Stagger>
    </Scene>
  );
}
