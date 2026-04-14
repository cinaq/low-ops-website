'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { HTMLAttributes, LiHTMLAttributes } from 'react';

type DivProps = Omit<HTMLAttributes<HTMLDivElement>, keyof MotionProps> & MotionProps;
type SpanProps = Omit<HTMLAttributes<HTMLSpanElement>, keyof MotionProps> & MotionProps;
type LiProps = Omit<LiHTMLAttributes<HTMLLIElement>, keyof MotionProps> & MotionProps;

/** Typed wrappers for framer-motion + React 19 (avoids broken `HTMLMotionProps` inference). */
export function MotionDiv(props: DivProps) {
  return <motion.div {...props} />;
}

export function MotionSpan(props: SpanProps) {
  return <motion.span {...props} />;
}

export function MotionLi(props: LiProps) {
  return <motion.li {...props} />;
}
