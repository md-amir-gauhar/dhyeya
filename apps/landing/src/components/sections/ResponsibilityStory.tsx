'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

export function ResponsibilityStory() {
  return (
    <Scene glow full label="The real destination">
      <SceneLabel>The real destination</SceneLabel>

      <Stagger className="max-w-2xl space-y-5" stagger={0.7}>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          A corridor. A desk with a nameplate that is still new.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          Outside, people are waiting. Files. Forms. A long morning ahead.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          Citizens, each with something that matters to them.
        </Line>
      </Stagger>

      <Stagger className="mt-24" stagger={1}>
        <Line className="font-display text-scene leading-[1.05] font-light text-balance text-ivory-300">
          The exam was never the destination.
        </Line>
        <Line className="mt-6 font-display text-scene leading-[1.05] font-light text-balance text-ivory-50">
          It was the beginning.
        </Line>
        <Line className="mt-16 font-display text-line leading-snug font-light text-dawn-300">
          The real journey starts when preparation ends.
        </Line>
      </Stagger>
    </Scene>
  );
}
