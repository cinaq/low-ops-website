import heroImage from '@/assets/hero.webp';
import HeroButtons from '@/components/HeroButtons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section
      className={cn(
        'hero-section w-full pt-[140px] md:pt-[170px] bg-no-repeat bg-top',
        `bg-[url('../assets/hero-bg.svg')]`
      )}
      id="hero"
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="prose md:prose-md mb-6 md:mb-10 flex flex-col items-center justify-center">
          <h1 className="text-center max-w-[856px]">
            Private Cloud Infrastructure for Mendix
          </h1>
          <p className="text-center max-w-[564px] text-base md:text-xl text-gray-600 font-light">
            Low-Ops is an Internal Developer Platform (IDP) for private clouds,
            managing Mendix app development, deployment, scaling, and security,
            so you can focus on building.
          </p>
        </div>

        <HeroButtons className="mb-10 md:mb-20" />
      </div>
      <Image
        src={heroImage}
        alt="lowops-portal-screen"
        quality={100}
        objectFit="cover"
        priority
        className="max-w-[1400px] w-full mx-auto"
      />
    </section>
  );
};

export default HeroSection;
