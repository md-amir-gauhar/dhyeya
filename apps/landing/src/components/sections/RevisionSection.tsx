'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

const LOOP = ['Learn', 'Practice', 'Recall', 'Revise', 'Master'];

export function RevisionSection() {
  return (
    <Scene glow label="Revision">
      <SceneLabel>Revise</SceneLabel>
      <SceneHeading className="max-w-3xl">
        Because learning isn&rsquo;t remembering once.
      </SceneHeading>

      <Reveal soft>
        <div className="mt-20 rounded-lg border border-ivory-100/10 bg-ink-900/40 p-8 sm:p-12">
          {/* forgetting curve */}
          <svg
            viewBox="0 0 640 180"
            className="h-auto w-full"
            role="img"
            aria-label="Recall decays over time until DHYEYA brings the concept back"
          >
            <line
              x1="0"
              y1="150"
              x2="640"
              y2="150"
              stroke="currentColor"
              className="text-ivory-100/15"
              strokeWidth="1"
            />
            <motion.path
              d="M0 30 C 90 90, 150 120, 260 134"
              fill="none"
              stroke="currentColor"
              className="text-ivory-400/50"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={VIEWPORT_SOFT}
              transition={{ duration: 1.6, ease: EASE_CINEMA }}
            />
            <motion.line
              x1="260"
              y1="134"
              x2="260"
              y2="34"
              stroke="currentColor"
              className="text-dawn-400"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT_SOFT}
              transition={{ duration: 0.6, delay: 1.5 }}
            />
            <motion.path
              d="M260 34 C 350 92, 420 122, 540 138"
              fill="none"
              stroke="currentColor"
              className="text-ivory-400/50"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={VIEWPORT_SOFT}
              transition={{ duration: 1.4, delay: 1.8, ease: EASE_CINEMA }}
            />
            <motion.circle
              cx="260"
              cy="34"
              r="4"
              className="fill-dawn-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={VIEWPORT_SOFT}
              transition={{ duration: 0.5, delay: 1.9, ease: EASE_CINEMA }}
            />
          </svg>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="font-sans text-xs tracking-[0.2em] text-ivory-400 uppercase">
              Recall over time
            </span>
            <span className="font-sans text-xs tracking-[0.2em] text-dawn-400 uppercase">
              DHYEYA brings it back
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal soft delay={0.15}>
        <ol className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
          {LOOP.map((stage, i) => (
            <li key={stage} className="flex items-center gap-3">
              <span className="rounded-full border border-ivory-100/15 px-5 py-2 font-sans text-sm text-ivory-200">
                {stage}
              </span>
              {i < LOOP.length - 1 && (
                <span aria-hidden="true" className="text-dawn-400/50">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <Stagger className="mt-16 max-w-2xl" stagger={0.6}>
        <Line className="font-sans text-base leading-relaxed text-ivory-400">
          DHYEYA remembers what you&rsquo;ve learned.
        </Line>
        <Line className="mt-2 font-display text-line leading-snug font-light text-ivory-50">
          So you don&rsquo;t have to remember what to revise.
        </Line>
      </Stagger>
    </Scene>
  );
}
