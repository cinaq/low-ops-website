'use client';

import heroMobileImage from '@/assets/hero-mobile.webp';
import heroImage from '@/assets/hero.webp';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const HeroImage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? (
    <Image
      src={heroImage}
      alt="lowops-portal-screen"
      quality={80}
      width={1400}
      height={788}
      priority
      className="w-full mx-auto hidden md:block"
    />
  ) : (
    <Image
      src={heroMobileImage}
      alt="lowops-portal-screen"
      quality={80}
      width={800}
      height={450}
      priority
      className="w-full mx-auto block md:hidden"
    />
  );
};

export default HeroImage;
