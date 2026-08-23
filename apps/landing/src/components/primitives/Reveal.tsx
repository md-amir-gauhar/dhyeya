'use client';

import { motion, type Variants } from 'motion/react';
import type { ElementType, ReactNode } from 'react';
import { fadeUp, lineStagger, VIEWPORT, VIEWPORT_SOFT } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variants?: Variants;
  delay?: number;
  soft?: boolean;
};

/** Single element that fades up once when it enters the viewport. */
export function Reveal({
  children,
  className,
  as = 'div',
  variants = fadeUp,
  delay = 0,
  soft = false,
}: RevealProps) {
  const MotionTag = motion[as as 'div'];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={soft ? VIEWPORT_SOFT : VIEWPORT}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  delay?: number;
  soft?: boolean;
};

/** Parent wrapper — pair with <Line /> children for sequential cinematic reveals. */
export function Stagger({
  children,
  className,
  as = 'div',
  stagger = 0.55,
  delay = 0.1,
  soft = true,
}: StaggerProps) {
  const MotionTag = motion[as as 'div'];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={soft ? VIEWPORT_SOFT : VIEWPORT}
      variants={lineStagger(stagger, delay)}
    >
      {children}
    </MotionTag>
  );
}

type LineProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Line({ children, className, as = 'p' }: LineProps) {
  const MotionTag = motion[as as 'p'];

  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
