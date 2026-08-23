'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

export function LonelinessStory() {
  return (
    <Scene glow full label="Some battles are fought without an audience">
      <SceneLabel>01:37 AM</SceneLabel>

      <Stagger stagger={0.8}>
        <Line className="max-w-4xl font-display text-scene leading-[1.05] font-light text-balance text-ivory-50">
          Some battles are fought without an audience.
        </Line>
      </Stagger>

      <Stagger className="mt-20 space-y-3" stagger={0.4}>
        {['No applause.', 'No scoreboard.', 'No guarantee.'].map((line) => (
          <Line key={line} className="font-sans text-lg text-ivory-400">
            {line}
          </Line>
        ))}
      </Stagger>

      <Stagger className="mt-16 space-y-2 border-l border-dawn-400/30 pl-6" stagger={0.45}>
        {['Just another page.', 'Another question.', 'Another day.'].map((line) => (
          <Line
            key={line}
            className="font-display text-line leading-tight font-light text-ivory-200"
          >
            {line}
          </Line>
        ))}
      </Stagger>
    </Scene>
  );
}
