'use client';

import heroBg from '@/assets/hero-bg.png';
import logsImage from '@/assets/logs.png';
import starsIcon from '@/assets/stars.svg';
import TitleBadge from '@/components/TitleBadge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MailOpenIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import HeroContent from './HeroContent';

const HeroSection: FC = () => {
  return (
    <section
      className="w-full pt-[120px] md:pt-[180px] pb-[60px] min-h-[calc(100vh-150px)] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      id="hero"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container flex flex-col h-full items-center justify-center">
        <TitleBadge title="Create, Deploy & Launch" />
        <div className="flex flex-col w-full items-center justify-center relative z-40">
          <HeroContent />
        </div>
        <div className="relative w-full max-w-[640px] mb-12">
          <div className="flex h-[59px] items-center overflow-hidden rounded-lg border border-primary bg-white shadow-xs mb-8">
            <span className="flex pl-3 text-primary mb-1">
              <MailOpenIcon className="h-5 w-5" />
            </span>
            <Input
              id="email"
              name="email"
              placeholder="Email address"
              className="h-full min-w-0 flex-1 rounded-none border-0 border-transparent bg-transparent pl-2 pr-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <span className="flex shrink-0 items-center pr-1.5 text-primary">
              <Button className="px-8">Try for free</Button>
            </span>
          </div>

          <div className="flex justify-center items-center gap-2 font-light">
            <span>Excellent</span>
            <Image
              src={starsIcon}
              alt="Low-Ops Platform"
              width={100}
              height={100}
              className="object-contain object-center"
            />
            <span>Based on 10+ reviews.</span>
          </div>
        </div>
        <div className="relative h-[800px] w-full max-w-[1200px]">
          <Image
            src={logsImage}
            alt="Low-Ops Platform"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
