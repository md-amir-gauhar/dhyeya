'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

const SUBJECTS = [
  { name: 'Polity', score: 82 },
  { name: 'History', score: 61 },
  { name: 'Geography', score: 74 },
  { name: 'Economy', score: 48 },
];

const DRILLDOWN = [
  { label: 'Weakest area', value: 'Inflation' },
  { label: 'Repeated mistake', value: 'Monetary policy' },
  { label: 'Recommendation', value: 'Revise → Practice → Re-test' },
];

export function AnalysisSection() {
  return (
    <Scene label="Analyze">
      <SceneLabel>Analyze</SceneLabel>
      <SceneHeading className="max-w-3xl">Your mistakes are telling you something.</SceneHeading>

      <div className="mt-20 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal soft>
          <div className="rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
            <ul className="space-y-8">
              {SUBJECTS.map((subject, i) => (
                <li key={subject.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-xl font-light text-ivory-100">
                      {subject.name}
                    </span>
                    <span
                      className={`font-display text-2xl font-light tabular-nums ${
                        subject.score < 55 ? 'text-dawn-300' : 'text-ivory-300'
                      }`}
                    >
                      {subject.score}%
                    </span>
                  </div>
                  <div className="mt-3 h-px w-full bg-ivory-100/10">
                    <motion.div
                      className={`h-px ${subject.score < 55 ? 'bg-dawn-400' : 'bg-ivory-300/50'}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: subject.score / 100 }}
                      viewport={VIEWPORT_SOFT}
                      transition={{ duration: 1.3, delay: 0.15 * i, ease: EASE_CINEMA }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal soft delay={0.15}>
          <div className="h-full rounded-lg border border-dawn-400/25 bg-ink-900/40 p-8">
            <span className="font-sans text-xs tracking-[0.24em] text-dawn-400/80 uppercase">
              Economy
            </span>
            <dl className="mt-8 space-y-7">
              {DRILLDOWN.map((row) => (
                <div key={row.label}>
                  <dt className="font-sans text-[0.7rem] tracking-[0.2em] text-ivory-400 uppercase">
                    {row.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg font-light text-ivory-100">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <Stagger className="mt-16 max-w-3xl" stagger={0.6}>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          A score tells you what happened.
        </Line>
        <Line className="mt-2 font-display text-line leading-snug font-light text-ivory-50">
          Understanding your mistakes tells you what to do next.
        </Line>
      </Stagger>
    </Scene>
  );
}
