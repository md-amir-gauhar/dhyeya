'use client';

import { Scene, SceneLabel } from '@/components/primitives/Scene';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const MOMENTS = [
  {
    time: '21:40',
    message: 'Bro, we\u2019re going out tonight. Coming?',
    response: 'Reads it. Smiles. Turns the phone face down.',
  },
  {
    time: 'Sunday',
    message: 'The whole family is downstairs.',
    response: 'The door stays half-closed. The chapter is half-finished.',
  },
  {
    time: '11:12',
    message: 'Got placed! \u{1F389}',
    response: 'Types a genuine congratulations. Then opens the book again.',
  },
  {
    time: 'December',
    message: 'A wedding invitation arrives.',
    response: 'Checks the date against the study calendar. Closes it quietly.',
  },
];

export function SacrificeStory() {
  return (
    <Scene label="The sacrifice">
      <SceneLabel>The price</SceneLabel>

      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Stagger stagger={0.55}>
            <Line className="font-display text-scene leading-[1.05] font-light text-ivory-50">
              Every dream has a price.
            </Line>
            <Line className="mt-10 font-sans text-base text-ivory-400">
              For some, it&rsquo;s time.
            </Line>
            <Line className="mt-2 font-sans text-base text-ivory-400">For some, comfort.</Line>
            <Line className="mt-2 font-sans text-base text-ivory-400">For some, years.</Line>
            <Line className="mt-2 font-sans text-base text-ivory-200">For many, all three.</Line>
          </Stagger>
        </div>

        <ul className="space-y-px">
          {MOMENTS.map((moment, index) => (
            <Reveal as="li" key={moment.message} delay={index * 0.08} soft>
              <div className="border-t border-ivory-100/10 py-8">
                <span className="font-sans text-[0.7rem] tracking-[0.24em] text-ivory-400/60 uppercase tabular-nums">
                  {moment.time}
                </span>
                <p className="mt-4 font-display text-xl leading-snug font-light text-ivory-100 sm:text-2xl">
                  {moment.message}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ivory-400">
                  {moment.response}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Scene>
  );
}
