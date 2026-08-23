'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

type Subject = { name: string; level: number; label: string };

const ASPIRANT_A: Subject[] = [
  { name: 'Polity', level: 0.86, label: 'Strong' },
  { name: 'History', level: 0.58, label: 'Medium' },
  { name: 'Economy', level: 0.3, label: 'Weak' },
];

const ASPIRANT_B: Subject[] = [
  { name: 'Polity', level: 0.56, label: 'Medium' },
  { name: 'History', level: 0.28, label: 'Weak' },
  { name: 'Economy', level: 0.84, label: 'Strong' },
];

function Profile({ title, subjects }: { title: string; subjects: Subject[] }) {
  return (
    <div className="rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
      <h3 className="font-sans text-xs tracking-[0.24em] text-ivory-400 uppercase">{title}</h3>
      <ul className="mt-8 space-y-6">
        {subjects.map((subject, i) => (
          <li key={subject.name}>
            <div className="flex items-baseline justify-between">
              <span className="font-display text-lg font-light text-ivory-100">{subject.name}</span>
              <span className="font-sans text-xs tracking-wide text-ivory-400">
                {subject.label}
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-ivory-100/10">
              <motion.div
                className="h-px bg-dawn-400/70"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: subject.level }}
                viewport={VIEWPORT_SOFT}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: EASE_CINEMA }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonalizationSection() {
  return (
    <Scene label="No two aspirants begin from the same place">
      <SceneLabel>Personalised</SceneLabel>
      <SceneHeading className="max-w-3xl">No two aspirants begin from the same place.</SceneHeading>

      <Reveal soft>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Profile title="Aspirant A" subjects={ASPIRANT_A} />
          <Profile title="Aspirant B" subjects={ASPIRANT_B} />
        </div>
      </Reveal>

      <Stagger className="mt-16" stagger={0.6}>
        <Line className="font-display text-line leading-snug font-light text-ivory-400">
          The syllabus may be the same.
        </Line>
        <Line className="mt-3 font-display text-line leading-snug font-light text-ivory-50">
          Your journey isn&rsquo;t.
        </Line>
      </Stagger>
    </Scene>
  );
}
