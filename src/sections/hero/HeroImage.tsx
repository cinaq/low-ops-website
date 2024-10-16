'use client';

import heroMobileImage from '@/assets/hero-mobile.webp';
import heroImage from '@/assets/hero.webp';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const HeroImage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Image
      src={isDesktop ? heroImage : heroMobileImage}
      alt="lowops-portal-screen"
      quality={80}
      width={isDesktop ? 1200 : 800}
      height={isDesktop ? 788 : 450}
      className="w-full max-w-[1200px] mx-auto"
      priority
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
    />
  );
};

export default HeroImage;
