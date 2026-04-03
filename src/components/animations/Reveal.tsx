'use client';

import { MotionProps, motion, useReducedMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}>;

const Reveal = ({ children, delay = 0, y = 28, once = true, className }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const MotionDiv = motion.div as any;

  const transition: MotionProps['transition'] = {
    duration: reduceMotion ? 0 : 0.55,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={transition}
    >
      {children}
    </MotionDiv>
  );
};

export default Reveal;
