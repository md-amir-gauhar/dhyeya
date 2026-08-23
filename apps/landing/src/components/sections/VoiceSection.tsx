'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { ChatExchange } from '@/components/primitives/ChatExchange';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';
import { VIEWPORT_SOFT } from '@/lib/motion';

const BARS = [14, 26, 44, 62, 38, 72, 50, 30, 58, 76, 42, 22, 48, 66, 34, 18];

function Waveform() {
  const reduced = useReducedMotion();

  return (
    <div className="flex h-20 items-center gap-1.5" aria-hidden="true">
      {BARS.map((height, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-dawn-400/60"
          initial={{ height: 4 }}
          whileInView={reduced ? { height } : { height: [4, height, height * 0.45, height, 4] }}
          viewport={VIEWPORT_SOFT}
          transition={
            reduced
              ? { duration: 0.4 }
              : { duration: 2.6, repeat: Infinity, delay: i * 0.07, ease: 'easeInOut' }
          }
        />
      ))}
    </div>
  );
}

export function VoiceSection() {
  return (
    <Scene glow label="Voice">
      <SceneLabel>Talk</SceneLabel>
      <SceneHeading className="max-w-3xl">Sometimes you don&rsquo;t want to type.</SceneHeading>

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <ChatExchange
            turns={[
              { from: 'student', text: 'Dhyeya, polity ka quick revision karwao.' },
              {
                from: 'dhyeya',
                text: 'Chaliye — pehle Fundamental Rights, phir DPSP. Sirf woh jo aap bhool rahe hain.',
              },
            ]}
          />
          <Reveal soft delay={0.3}>
            <Waveform />
          </Reveal>
        </div>

        <div>
          <Stagger stagger={0.5}>
            <Line className="font-display text-line leading-snug font-light text-ivory-100">
              Learn while walking.
            </Line>
            <Line className="mt-3 font-display text-line leading-snug font-light text-ivory-300">
              Revise between classes.
            </Line>
            <Line className="mt-3 font-display text-line leading-snug font-light text-ivory-400">
              Practice wherever you are.
            </Line>
          </Stagger>

          <Reveal soft delay={0.2}>
            <ul className="mt-14 flex flex-wrap gap-2.5 border-t border-ivory-100/10 pt-10">
              {['English', 'हिन्दी', 'Hinglish'].map((lang) => (
                <li
                  key={lang}
                  className="rounded-full border border-ivory-100/15 px-5 py-2 font-sans text-sm text-ivory-200"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Scene>
  );
}
