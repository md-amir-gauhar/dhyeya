'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

export function ResultStory() {
  return (
    <Scene full className="bg-ink-950" label="The result">
      <SceneLabel>Morning</SceneLabel>

      <Stagger className="max-w-2xl space-y-5" stagger={0.8}>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          A notification. They read it once. Then again.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          No sound in the room.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          Their eyes fill before they can say anything.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">They call home.</Line>
      </Stagger>

      <Stagger className="mt-20" stagger={1.1}>
        <Line className="font-display text-scene leading-none font-light text-dawn-300">
          &ldquo;Ho gaya.&rdquo;
        </Line>
        <Line className="mt-12 font-sans text-base text-ivory-400">
          On the other side of the call, no one says anything either.
        </Line>
      </Stagger>
    </Scene>
  );
}
