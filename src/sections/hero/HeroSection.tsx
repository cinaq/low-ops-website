'use client';

import HeroButtons from '@/components/HeroButtons';
import { motion } from 'framer-motion';
import { FC } from 'react';
import HeroContent from './HeroContent';

const HeroSection: FC = () => {
  return (
    <section
      className="hero-section w-full bg-no-repeat pt-[140px] xl:pt-[170px] xl:pb-[20px] pb-[40px] min-h-[calc(100vh-180px)] relative bg-secondary"
      id="hero"
    >
      <div className="container flex flex-col xl:flex-row items-center justify-between overflow-hidden gap-10 h-full">
        <div className="flex flex-col w-full xl:w-[40%]">
          <HeroContent />
          <HeroButtons className="mb-6 md:mb-10" />
        </div>
        <div className="w-full xl:w-[60%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-[768px] h-full"
          >
            <video
              src="/lowops-demo.mov"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-md md:rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
