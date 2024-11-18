'use client';

import heroMobileImage from '@/assets/hero-mobile.webp';
import heroImage from '@/assets/hero.webp';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroImage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-[1200px] mx-auto relative aspect-[5/2]"
    >
      <Image
        src={isDesktop ? heroImage : heroMobileImage}
        alt="lowops-portal-screen"
        fill
        priority
        quality={80}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-contain object-top"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </motion.div>
  );
};

export default HeroImage;
