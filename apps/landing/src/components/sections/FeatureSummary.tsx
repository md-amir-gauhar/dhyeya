'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Reveal } from '@/components/primitives/Reveal';

const FEATURES = [
  { name: 'Learn', detail: 'Personalized AI explanations.' },
  { name: 'Practice', detail: 'Targeted questions and PYQs.' },
  { name: 'Analyze', detail: 'Understand your strengths and weaknesses.' },
  { name: 'Revise', detail: 'Intelligent revision.' },
  { name: 'Plan', detail: 'Know what to study next.' },
  { name: 'Talk', detail: 'Voice-based learning.' },
  { name: 'Visualize', detail: 'Visual explanations.' },
];

export function FeatureSummary() {
  return (
    <Scene label="What DHYEYA helps you do">
      <SceneLabel>In short</SceneLabel>

      <Reveal soft>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-ivory-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <li key={feature.name} className="bg-ink-900/40 px-6 py-8">
              <h3 className="font-sans text-xs tracking-[0.24em] text-dawn-400/80 uppercase">
                {feature.name}
              </h3>
              <p className="mt-3 font-display text-lg leading-snug font-light text-ivory-200">
                {feature.detail}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Scene>
  );
}
