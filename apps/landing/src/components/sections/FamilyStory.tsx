'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

export function FamilyStory() {
  return (
    <Scene glow full label="They're not preparing alone">
      <SceneLabel>02:10 AM</SceneLabel>

      <Stagger className="max-w-3xl space-y-6" stagger={0.75}>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          The house is asleep.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          A mother leaves tea near the desk. She doesn&rsquo;t say anything.
        </Line>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          A father walks past the room, sees the light still on, and keeps walking.
        </Line>
      </Stagger>

      <Stagger className="mt-24" stagger={1}>
        <Line className="font-display text-scene leading-[1.05] font-light text-balance text-ivory-50">
          They&rsquo;re not preparing alone.
        </Line>
        <Line className="mt-10 font-display text-line leading-snug font-light text-ivory-300">
          Every aspirant has people who believe in them.
        </Line>
        <Line className="mt-4 font-display text-line leading-snug font-light text-dawn-300">
          Sometimes, even when they don&rsquo;t believe in themselves.
        </Line>
      </Stagger>
    </Scene>
  );
}
