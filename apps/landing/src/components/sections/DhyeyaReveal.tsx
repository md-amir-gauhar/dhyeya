'use client';

import { BRAND } from '@/lib/brand';
import { Scene } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const UNDERSTANDS = [
  'Your exam.',
  'Your syllabus.',
  'Your progress.',
  'Your strengths.',
  'Your weaknesses.',
  'Your mistakes.',
  'Your goals.',
];

export function DhyeyaReveal() {
  return (
    <Scene glow full label="Your preparation. Your purpose.">
      <Stagger stagger={0.7}>
        <Line className="font-display text-scene leading-[1.05] font-light text-balance text-ivory-50">
          {BRAND.tagline}
        </Line>
        <Line className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-ivory-400">
          DHYEYA is an AI preparation companion built around your journey.
        </Line>
      </Stagger>

      <Reveal soft>
        <div className="mt-20 border-t border-ivory-100/10 pt-12">
          <p className="font-sans text-xs tracking-[0.24em] text-dawn-400/80 uppercase">
            It understands
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {UNDERSTANDS.map((item) => (
              <li key={item} className="font-display text-lg font-light text-ivory-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal soft delay={0.2}>
        <p className="mt-16 font-display text-line leading-snug font-light text-dawn-300">
          And helps you decide what to do next.
        </p>
      </Reveal>
    </Scene>
  );
}
