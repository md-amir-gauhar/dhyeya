'use client';

import { Scene, SceneLabel, SceneHeading } from '@/components/primitives/Scene';
import { ChatExchange } from '@/components/primitives/ChatExchange';
import { Line, Reveal, Stagger } from '@/components/primitives/Reveal';

const FLOW = [
  'Concept explanation',
  'Targeted question',
  'Evaluation',
  'Misconception found',
  'Reinforcement',
  'Revision',
];

export function TutorSection() {
  return (
    <Scene label="A companion, not a chatbot">
      <SceneLabel>The companion</SceneLabel>
      <SceneHeading className="max-w-3xl">A tutor who already knows where you are.</SceneHeading>

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <ChatExchange
            turns={[
              {
                from: 'student',
                text: 'Dhyeya, I keep getting questions on Fundamental Rights wrong.',
              },
              { from: 'dhyeya', text: 'Let\u2019s find out why.' },
            ]}
          />

          <Reveal soft delay={0.2}>
            <ol className="mt-12 space-y-px">
              {FLOW.map((step, i) => (
                <li
                  key={step}
                  className="flex items-baseline gap-4 border-t border-ivory-100/10 py-3.5"
                >
                  <span className="font-sans text-[0.65rem] text-dawn-400/70 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-sm text-ivory-300">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="lg:pt-10">
          <ChatExchange
            turns={[
              { from: 'student', text: 'I only have three hours today.' },
              { from: 'dhyeya', text: 'Then let\u2019s make those three hours count.' },
            ]}
          />

          <Stagger className="mt-12 border-t border-ivory-100/10 pt-10" stagger={0.5}>
            <Line className="font-sans text-base leading-relaxed text-ivory-400">
              It doesn&rsquo;t hand you an answer and move on.
            </Line>
            <Line className="mt-3 font-sans text-base leading-relaxed text-ivory-200">
              It stays until the concept holds.
            </Line>
          </Stagger>
        </div>
      </div>
    </Scene>
  );
}
