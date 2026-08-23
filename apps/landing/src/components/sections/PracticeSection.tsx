'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

const CONTEXT = [
  { label: 'Topic', value: 'Indian Polity' },
  { label: 'Concept', value: 'Fundamental Rights' },
  { label: 'Weak area', value: 'Article 14' },
];

const CHAIN = ['Question', 'Concept', 'Topic', 'Exam', 'Difficulty', 'Your weakness'];

export function PracticeSection() {
  return (
    <Scene label="Practice">
      <SceneLabel>Practice</SceneLabel>

      <Stagger stagger={0.55}>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-400">
          Not more questions.
        </Line>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-50">
          The right questions.
        </Line>
      </Stagger>

      <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal soft>
          <div className="h-full rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
            <dl className="space-y-6">
              {CONTEXT.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-6">
                  <dt className="font-sans text-xs tracking-[0.2em] text-ivory-400 uppercase">
                    {row.label}
                  </dt>
                  <dd className="font-display text-lg font-light text-ivory-100">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-ivory-100/10 pt-8">
              <div className="flex items-baseline justify-between">
                <span className="font-sans text-xs tracking-[0.2em] text-ivory-400 uppercase">
                  Mastery
                </span>
                <span className="font-display text-4xl font-light text-dawn-300 tabular-nums">
                  64%
                </span>
              </div>
              <div className="mt-4 h-px w-full bg-ivory-100/10">
                <motion.div
                  className="h-px bg-dawn-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.64 }}
                  viewport={VIEWPORT_SOFT}
                  transition={{ duration: 1.4, ease: EASE_CINEMA }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal soft delay={0.15}>
          <div className="h-full rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
            <p className="font-sans text-xs tracking-[0.24em] text-dawn-400/80 uppercase">
              Every question is mapped to
            </p>
            <ul className="mt-8 space-y-px">
              {CHAIN.map((node) => (
                <li
                  key={node}
                  className="border-t border-ivory-100/10 py-3.5 font-sans text-sm text-ivory-300"
                >
                  {node}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-sans text-sm leading-relaxed text-ivory-400">
              So practice moves toward what you haven&rsquo;t mastered — including previous
              years&rsquo; questions, in the pattern your exam actually uses.
            </p>
          </div>
        </Reveal>
      </div>
    </Scene>
  );
}
