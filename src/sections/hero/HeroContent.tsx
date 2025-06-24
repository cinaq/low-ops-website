'use client';

import { hero } from '@/data/hero';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="prose md:prose-md mb-6 md:mb-10 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-center text-white max-w-[850px] text-5xl lg:text-7xl font-bold leading-tight"
      >
        {hero.title} <br />{' '}
        <span className="text-primary-400">{hero.titleHighlight}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="max-w-full lg:max-w-[850px] w-full text-center text-sm lg:text-xl font-light text-gray-50 leading-normal"
      >
        {hero.description}
      </motion.p>
    </div>
  );
};

export default HeroContent;
