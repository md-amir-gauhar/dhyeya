'use client';

import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const PLAN = [
  { duration: '30m', task: 'Economy revision', reason: 'Weakest subject' },
  { duration: '45m', task: 'Fundamental Rights practice', reason: 'Repeated mistakes' },
  { duration: '30m', task: 'Current Affairs', reason: 'Daily habit' },
  { duration: '45m', task: 'Mock questions', reason: 'Mixed recall' },
];

const INPUTS = [
  'Exam date',
  'Time you actually have',
  'Your weak areas',
  'Recent performance',
  'What is due for revision',
];

export function PlanningSection() {
  return (
    <Scene label="Plan">
      <SceneLabel>Plan</SceneLabel>
      <SceneHeading className="max-w-3xl">Stop asking what to study today.</SceneHeading>

      <div className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal soft>
          <div className="rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
            <div className="flex items-baseline justify-between border-b border-ivory-100/10 pb-6">
              <span className="font-sans text-xs tracking-[0.24em] text-ivory-400 uppercase">
                Today
              </span>
              <span className="font-display text-3xl font-light text-ivory-100 tabular-nums">
                2h 30m
              </span>
            </div>

            <ul className="mt-2">
              {PLAN.map((slot) => (
                <li
                  key={slot.task}
                  className="flex items-baseline gap-6 border-b border-ivory-100/10 py-5 last:border-0"
                >
                  <span className="w-12 shrink-0 font-sans text-sm text-dawn-300 tabular-nums">
                    {slot.duration}
                  </span>
                  <span className="flex-1 font-display text-lg font-light text-ivory-100">
                    {slot.task}
                  </span>
                  <span className="hidden font-sans text-xs text-ivory-400 sm:block">
                    {slot.reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal soft delay={0.15}>
          <div className="h-full rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8">
            <p className="font-sans text-xs tracking-[0.24em] text-dawn-400/80 uppercase">
              Rebuilt daily from
            </p>
            <ul className="mt-8 space-y-px">
              {INPUTS.map((input) => (
                <li
                  key={input}
                  className="border-t border-ivory-100/10 py-3.5 font-sans text-sm text-ivory-300"
                >
                  {input}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Stagger className="mt-16" stagger={0.5}>
        <Line className="font-display text-line leading-snug font-light text-ivory-50">
          Every hour has a purpose.
        </Line>
      </Stagger>
    </Scene>
  );
}
