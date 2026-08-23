'use client';

import { Scene } from '@/components/primitives/Scene';
import { Line, Stagger } from '@/components/primitives/Reveal';

const ANSWERS = [
  'For their family.',
  'For a better life.',
  'For the people they hope to serve.',
  'For the chance to make a difference.',
  'For something larger than themselves.',
];

export function WhyStory() {
  return (
    <Scene full className="bg-ink-950" label="Why do they keep going?">
      <Stagger stagger={0.7}>
        <Line className="font-display text-scene leading-[1.05] font-light text-ivory-50">
          Why do they keep going?
        </Line>

        <Line as="div">
          <ul className="mt-16 space-y-4">
            {ANSWERS.map((answer) => (
              <li key={answer} className="font-sans text-lg text-ivory-400 sm:text-xl">
                {answer}
              </li>
            ))}
          </ul>
        </Line>
      </Stagger>

      <Stagger className="mt-24 border-t border-ivory-100/10 pt-14" stagger={1}>
        <Line className="font-display text-line leading-snug font-light text-ivory-300">
          They aren&rsquo;t preparing for a job.
        </Line>
        <Line className="mt-5 font-display text-scene leading-[1.08] font-light text-balance text-ivory-50">
          They&rsquo;re preparing for a responsibility.
        </Line>
      </Stagger>
    </Scene>
  );
}
