'use client';

import HeroButtons from '@/components/HeroButtons';
import { motion } from 'framer-motion';
import { FC } from 'react';
import HeroContent from './HeroContent';
import HeroPattern from './HeroPattern';

const HeroSection: FC = () => {
  return (
    <section
      className="w-full pt-[120px] md:pt-[160px] pb-[60px] min-h-[calc(100vh-150px)] relative bg-primary-800 overflow-hidden"
      id="hero"
    >
      <div className="container flex flex-col gap-10 h-full">
        <div className="flex flex-col w-full items-center justify-center relative z-40">
          <HeroContent />
          <HeroButtons className="mb-6" />
        </div>
        <div className="relative max-w-full">
          <motion.div
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
            />
          </motion.div>
          <HeroPattern />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
