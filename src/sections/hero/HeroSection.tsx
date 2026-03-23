'use client';

import logsImage from '@/assets/logs.png';
import DecorativeLabel from '@/components/DecorativeLabel';
import Stars from '@/components/Stars';
import TitleBadge from '@/components/TitleBadge';
import { Button } from '@/components/ui/button';
import { DECORATIVE_LABELS } from '@/data/footer';
import Image from 'next/image';
import { FC } from 'react';
import HeroContent from './HeroContent';

const HeroSection: FC = () => {
  const renderDecorativeLabels = () => {
    return DECORATIVE_LABELS.map((label) => (
      <DecorativeLabel
        key={label.text}
        text={label.text}
        classes={label.classes}
        planePosition={label.planePosition}
      />
    ));
  };

  return (
    <section
      className="w-full pt-[120px] md:pt-[180px] pb-[60px] min-h-[calc(100vh-150px)] relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.png')]"
      id="hero"
    >
      <div className="container flex flex-col h-full items-center justify-center">
        <TitleBadge title="Deploy your vibe coded app in your secure private cloud" />
        <div className="flex flex-col w-full items-center justify-center relative z-40">
          <HeroContent />
          {renderDecorativeLabels()}
        </div>
        <div className="relative w-full max-w-[640px] mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#cta">
              <Button size="lg">Get Started</Button>
            </a>
          </div>

          <div className="justify-center items-center gap-2 font-light hidden md:flex">
            <span>Excellent</span>
            <Stars />
            <span>Based on 10+ reviews.</span>
          </div>
        </div>
        <div className="relative h-[600px] w-full max-w-[1200px] overflow-hidden">
          <Image
            src={logsImage}
            alt="Low-Ops Platform"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
