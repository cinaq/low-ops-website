'use client';

import { hero } from '@/data/hero';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="prose md:prose-md mb-6 md:mb-10 flex flex-col items-center xl:items-start">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-[856px] text-center xl:text-left"
      >
        {hero.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="max-w-full lg:max-w-[768px] xl:max-w-[992px] text-center xl:text-left text-base font-light md:text-md text-gray-600"
      >
        {hero.description}
      </motion.p>
    </div>
  );
};

export default HeroContent;
