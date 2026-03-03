'use client';

import starIcon from '@/assets/star.svg';
import starsIcon from '@/assets/stars.svg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MailOpenIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import HeroContent from './HeroContent';

const HeroSection: FC = () => {
  return (
    <section
      className="w-full pt-[120px] md:pt-[160px] pb-[60px] min-h-[calc(100vh-150px)] relative overflow-hidden"
      id="hero"
    >
      <div className="container flex flex-col h-full items-center justify-center">
        <div>
          <Badge
            variant="primaryOutline"
            className="rounded-full flex items-center gap-2 py-2 px-4 text-[18px] font-medium"
          >
            <Image src={starIcon} alt="Star" width={24} height={24} />
            Create, Deploy & Launch
          </Badge>
        </div>
        <div className="flex flex-col w-full items-center justify-center relative z-40">
          <HeroContent />
        </div>
        <div className="relative w-full max-w-lg">
          <div className="flex h-[50px] items-center overflow-hidden rounded-lg border border-primary bg-white shadow-xs mb-8">
            <span className="flex shrink-0 items-center pl-3 text-primary">
              <MailOpenIcon className="h-5 w-5" />
            </span>
            <Input
              placeholder="Enter your email"
              className="h-full min-w-0 flex-1 rounded-none border-0 border-transparent bg-transparent pl-2 pr-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <span className="flex shrink-0 items-center pr-1.5 text-primary">
              <Button className="">Try for free</Button>
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
          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
            className="w-full max-w-[1200px] mx-auto h-full border-[8px] md:border-[10px] border-black relative rounded-lg md:rounded-xl z-40 drop-shadow-xl"
          >
            <video
              src="/lowops-vimeo.mp4"
              controls
              preload="metadata"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster={videoBg.src}
            />
          </motion.div> */}
          {/* <HeroPattern /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
