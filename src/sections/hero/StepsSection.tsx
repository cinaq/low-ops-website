'use client';

import coding from '@/assets/coding.svg';
import lightBulb from '@/assets/light-bulb.svg';
import share from '@/assets/share.svg';
import Reveal from '@/components/animations/Reveal';
import TitleBadge from '@/components/TitleBadge';
import { Button } from '@/components/ui/button';
import { hero } from '@/data/hero';
import Image from 'next/image';
import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import HeroContent from './HeroContent';

const StepsSection: FC = () => {
  return (
    <section
      className="w-full pt-[120px] md:pt-[180px] pb-[60px] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="container flex flex-col h-full items-center justify-center">
        <TitleBadge title={hero.subtitle} />
        <HeroContent />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-10 py-10">
          <Reveal>
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
              <div className="w-28 h-28 bg-yellow-50 rounded-xl flex items-center justify-center">
                <Image src={lightBulb} alt="Light Bulb" />
              </div>
              <p>John is fed up with excel sheets</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex-1 flex justify-center">
              <BsArrowRight
                size={40}
                className="text-primary rotate-90 md:rotate-0"
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
              <div className="w-28 h-28 bg-blue-50 rounded-xl flex items-center justify-center">
                <Image src={coding} alt="Coding" />
              </div>
              <p>He builds an app with Claude Code</p>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex-1 flex justify-center">
              <BsArrowRight
                size={40}
                className="text-primary rotate-90 md:rotate-0"
              />
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
              <div className="w-28 h-28 bg-green-50 rounded-xl flex items-center justify-center">
                <Image src={share} alt="Share" />
              </div>
              <p>He shares the app with colleagues</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={1}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#cta">
              <Button size="lg">Get Started</Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StepsSection;
