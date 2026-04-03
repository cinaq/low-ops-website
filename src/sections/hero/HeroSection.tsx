'use client';

import storyImage from '@/assets/story.jpg';
import TitleBadge from '@/components/TitleBadge';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import HeroContent from './HeroContent';
import { hero } from '@/data/hero';

const HeroSection: FC = () => {
  const reduceMotion = useReducedMotion();
  const MotionDiv = motion.div as any;

  return (
    <section
      className="w-full pt-[120px] md:pt-[180px] pb-[60px] min-h-[calc(100vh-150px)] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="container flex flex-col h-full items-center justify-center">
        <MotionDiv
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <TitleBadge title={hero.subtitle} />
        </MotionDiv>
        <MotionDiv
          className="flex flex-col w-full items-center justify-center relative z-40"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroContent />
        </MotionDiv>
        <MotionDiv
          className="relative h-[400px] w-full max-w-[1200px]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={storyImage}
            alt="Low-Ops Platform"
            className="object-cover object-top"
            sizes="200vw"
          />
        </MotionDiv>
        <MotionDiv
          className="relative w-full max-w-[640px] mb-12"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#cta">
              <MotionDiv whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg">Get Started</Button>
              </MotionDiv>
            </a>
          </div>

        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;
