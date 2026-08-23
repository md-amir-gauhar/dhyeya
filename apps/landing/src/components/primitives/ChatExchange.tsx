'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { EASE_CINEMA, VIEWPORT_SOFT } from '@/lib/motion';

type Turn = {
  from: 'student' | 'dhyeya';
  text: ReactNode;
};

/** Conversation, not chatbot UI — no avatars, no bubbles competing with the copy. */
export function ChatExchange({ turns, className = '' }: { turns: Turn[]; className?: string }) {
  return (
    <motion.div
      className={`space-y-6 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_SOFT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.5 } } }}
    >
      {turns.map((turn, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_CINEMA } },
          }}
          className={turn.from === 'student' ? '' : 'border-l-2 border-dawn-400/50 pl-5'}
        >
          <span className="mb-2 block font-sans text-[0.65rem] tracking-[0.24em] text-ivory-400/60 uppercase">
            {turn.from === 'student' ? 'Aspirant' : 'DHYEYA'}
          </span>
          <p
            className={`font-display leading-snug font-light ${
              turn.from === 'student'
                ? 'text-xl text-ivory-300 sm:text-2xl'
                : 'text-xl text-ivory-50 sm:text-2xl'
            }`}
          >
            {turn.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
