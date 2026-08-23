'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { Reveal } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

const ARTEFACTS = [
  { title: 'Timelines', example: 'Freedom struggle, 1857 → 1947' },
  { title: 'Maps', example: 'Rivers, ranges, cropping patterns' },
  { title: 'Flowcharts', example: 'How a bill becomes an Act' },
  { title: 'Structures', example: 'Union, State and Concurrent Lists' },
  { title: 'Cycles', example: 'Inflation and monetary transmission' },
  { title: 'Sequences', example: 'Panchayati Raj amendments' },
];

function BillFlow() {
  const stages = ['Bill introduced', 'Committee', 'Both Houses', 'President', 'Act'];

  return (
    <div className="rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
      <span className="font-sans text-xs tracking-[0.24em] text-ivory-400 uppercase">
        Generated for &ldquo;How does a bill become an Act?&rdquo;
      </span>
      <ol className="mt-8 space-y-px">
        {stages.map((stage, i) => (
          <motion.li
            key={stage}
            className="flex items-center gap-4 border-t border-ivory-100/10 py-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_SOFT}
            transition={{ duration: 0.7, delay: i * 0.14, ease: EASE_CINEMA }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-dawn-400/70" aria-hidden="true" />
            <span className="font-display text-lg font-light text-ivory-100">{stage}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function VisualLearningSection() {
  return (
    <Scene label="Visual learning">
      <SceneLabel>Visualize</SceneLabel>
      <SceneHeading className="max-w-3xl">Some concepts are easier to see.</SceneHeading>

      <div className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal soft>
          <BillFlow />
        </Reveal>

        <Reveal soft delay={0.15}>
          <ul className="grid h-full grid-cols-1 gap-px overflow-hidden rounded-lg border border-ivory-100/10 sm:grid-cols-2">
            {ARTEFACTS.map((artefact) => (
              <li key={artefact.title} className="bg-ink-900/40 px-6 py-7">
                <h3 className="font-display text-lg font-light text-ivory-100">{artefact.title}</h3>
                <p className="mt-1.5 font-sans text-sm text-ivory-400">{artefact.example}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal soft>
        <p className="mt-16 max-w-2xl font-sans text-base leading-relaxed text-ivory-400">
          Teaching tools, drawn for the concept in front of you — not decorative illustrations.
        </p>
      </Reveal>
    </Scene>
  );
}
