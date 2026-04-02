'use client';

import storyImage from '@/assets/story.jpg';
import DecorativeLabel from '@/components/DecorativeLabel';
import TitleBadge from '@/components/TitleBadge';
import { Button } from '@/components/ui/button';
import { DECORATIVE_LABELS } from '@/data/footer';
import Image from 'next/image';
import { FC } from 'react';
import HeroContent from './HeroContent';
import { hero } from '@/data/hero';

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
      className="w-full pt-[120px] md:pt-[180px] pb-[60px] min-h-[calc(100vh-150px)] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="container flex flex-col h-full items-center justify-center">
        <TitleBadge title={hero.subtitle} />
        <div className="flex flex-col w-full items-center justify-center relative z-40">
          <HeroContent />
          {/* {renderDecorativeLabels()} */}
        </div>
        <div className="relative h-[400px] w-full max-w-[1200px]">
          <Image
            src={storyImage}
            alt="Low-Ops Platform"
            className="object-cover object-top"
            sizes="200vw"
          />
        </div>
        <div className="relative w-full max-w-[640px] mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#cta">
              <Button size="lg">Get Started</Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
