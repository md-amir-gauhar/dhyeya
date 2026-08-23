'use client';

import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { ChatExchange } from '@/components/primitives/ChatExchange';
import { Reveal } from '@/components/primitives/Reveal';

const LADDER = [
  { step: 'Simple explanation', detail: 'Plain language, no jargon to decode first.' },
  { step: 'Real-world analogy', detail: 'Something you already understand.' },
  { step: 'Example', detail: 'How it appears in the actual exam.' },
  { step: 'Visual', detail: 'A diagram when words are the slower path.' },
  { step: 'Question', detail: 'Applied immediately, while it is fresh.' },
  { step: 'Check understanding', detail: 'Confirm it held before moving on.' },
];

export function LearnSection() {
  return (
    <Scene glow label="Learn">
      <SceneLabel>Learn</SceneLabel>
      <SceneHeading className="max-w-3xl">
        When you don&rsquo;t understand, don&rsquo;t just move on.
      </SceneHeading>

      <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <ChatExchange
            turns={[
              { from: 'student', text: 'Explain this again.' },
              { from: 'dhyeya', text: 'Of course. Let\u2019s try it differently.' },
            ]}
          />
          <Reveal soft delay={0.3}>
            <p className="mt-12 font-sans text-base leading-relaxed text-ivory-400">
              DHYEYA doesn&rsquo;t just give you an answer.
              <span className="mt-1 block text-ivory-100">It teaches you.</span>
            </p>
          </Reveal>
        </div>

        <ol className="space-y-px">
          {LADDER.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 0.06} soft>
              <div className="border-t border-ivory-100/10 py-6">
                <div className="flex items-baseline gap-5">
                  <span className="font-sans text-[0.65rem] text-dawn-400/70 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-light text-ivory-100">{item.step}</h3>
                    <p className="mt-1.5 font-sans text-sm text-ivory-400">{item.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Scene>
  );
}
