'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

export function DoubtStory() {
  return (
    <Scene label="The doubt">
      <SceneLabel>Mock test 14</SceneLabel>

      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <Reveal soft>
          <div className="rounded-lg border border-ivory-100/10 bg-ink-900/60 p-8">
            <div className="flex items-baseline justify-between">
              <span className="font-sans text-xs tracking-[0.2em] text-ivory-400 uppercase">
                Score
              </span>
              <motion.span
                className="font-display text-6xl font-light text-ivory-100 tabular-nums"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={VIEWPORT_SOFT}
                transition={{ duration: 1.2, ease: EASE_CINEMA }}
              >
                52%
              </motion.span>
            </div>

            <div className="mt-8 space-y-2.5" aria-hidden="true">
              {[
                { correct: true, w: '82%' },
                { correct: false, w: '64%' },
                { correct: false, w: '71%' },
                { correct: true, w: '58%' },
                { correct: false, w: '76%' },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT_SOFT}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: EASE_CINEMA }}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      row.correct ? 'bg-ivory-400/50' : 'bg-red-500/70'
                    }`}
                  />
                  <span className="h-px bg-ivory-100/10" style={{ width: row.w }} />
                </motion.div>
              ))}
            </div>

            <p className="mt-8 border-t border-ivory-100/10 pt-5 font-sans text-xs tracking-wide text-ivory-400">
              Result declared. No one to tell.
            </p>
          </div>
        </Reveal>

        <div>
          <Stagger stagger={0.9}>
            <Line className="font-display text-line leading-snug font-light text-ivory-300">
              &ldquo;Maybe I&rsquo;m not good enough.&rdquo;
            </Line>
            <Line className="mt-12 font-display text-line leading-snug font-light text-ivory-100">
              &ldquo;But what if I stop now?&rdquo;
            </Line>
            <Line className="mt-6 font-display text-line leading-snug font-light text-dawn-300">
              &ldquo;I&rsquo;ll never know.&rdquo;
            </Line>
          </Stagger>

          <Reveal soft delay={0.3}>
            <p className="mt-16 font-sans text-sm leading-relaxed text-ivory-400">
              They close the screen. Open the book. Continue.
            </p>
          </Reveal>
        </div>
      </div>
    </Scene>
  );
}
