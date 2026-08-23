'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const RITUAL = [
  'Alarm',
  'Tea',
  'Opening books',
  'Writing notes',
  'Solving questions',
  'Watching a lecture',
  'Highlighting pages',
  'Making flashcards',
  'Checking the syllabus',
];

export function MorningStory() {
  return (
    <Scene label="Another morning">
      <SceneLabel>05:00 AM</SceneLabel>

      <Stagger stagger={0.7}>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-50">
          Another morning.
        </Line>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-300">
          Another attempt.
        </Line>
      </Stagger>

      <Reveal soft>
        <ul className="mt-20 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ivory-100/10 pt-10 sm:grid-cols-3">
          {RITUAL.map((item) => (
            <li
              key={item}
              className="font-sans text-sm tracking-wide text-ivory-400 transition-colors duration-500 hover:text-ivory-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Stagger className="mt-24 max-w-2xl" stagger={0.6}>
        <Line className="font-display text-line leading-snug font-light text-ivory-100">
          Nobody sees these hours.
        </Line>
        <Line className="mt-4 font-sans text-base leading-relaxed text-ivory-400">
          The hours before the world wakes up.
        </Line>
        <Line className="mt-2 font-sans text-base leading-relaxed text-ivory-400">
          The hours that slowly become a dream.
        </Line>
      </Stagger>
    </Scene>
  );
}
