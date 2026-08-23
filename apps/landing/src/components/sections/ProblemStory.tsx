'use client';

import { motion } from 'motion/react';
import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

const ECOSYSTEM = [
  'Syllabus',
  'Standard books',
  'Lectures',
  'Class notes',
  'PYQs',
  'Current affairs',
  'Monthly compilations',
  'Mock tests',
  'Answer writing',
  'Revision',
  'Analysis',
  'Repeat',
  'Newspapers',
  'Test series',
  'Optional subject',
  'Short notes',
];

export function ProblemStory() {
  return (
    <Scene id="how-it-works" label="Information is everywhere. Clarity isn't.">
      <SceneLabel>The journey</SceneLabel>

      <Stagger stagger={0.6}>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-50">
          The dream is simple.
        </Line>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-400">
          The journey isn&rsquo;t.
        </Line>
      </Stagger>

      <motion.ul
        className="mt-20 flex flex-wrap gap-2.5"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_SOFT}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }}
      >
        {ECOSYSTEM.map((item) => (
          <motion.li
            key={item}
            className="rounded-full border border-ivory-100/12 px-4 py-2 font-sans text-sm text-ivory-400"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_CINEMA } },
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <Stagger className="mt-24 max-w-3xl" stagger={0.75}>
        <Line className="font-display text-line leading-snug font-light text-ivory-300">
          Information is everywhere.
        </Line>
        <Line className="mt-3 font-display text-line leading-snug font-light text-ivory-50">
          Clarity isn&rsquo;t.
        </Line>
        <Line className="mt-14 font-sans text-base tracking-wide text-dawn-300">
          That&rsquo;s why we built DHYEYA.
        </Line>
      </Stagger>
    </Scene>
  );
}
