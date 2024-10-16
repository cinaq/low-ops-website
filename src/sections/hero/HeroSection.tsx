import heroImage from '@/assets/hero-image.png';
import HeroButtons from '@/components/HeroButtons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section
      className={cn(
        'hero-section w-full pt-[170px] min-h-screen bg-no-repeat bg-center',
        `bg-[url('../assets/hero-bg.svg')]`
      )}
      id="hero"
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="prose md:prose-md mb-10 flex flex-col items-center justify-center">
          <h1 className="text-center max-w-[856px]">
            Private Cloud Infrastructure for Mendix
          </h1>
          <p className="text-center max-w-[564px] text-base md:text-xl text-gray-600 font-light">
            Low-Ops is an Internal Developer Platform (IDP) for private clouds,
            managing Mendix app development, deployment, scaling, and security,
            so you can focus on building.
          </p>
        </div>

        <HeroButtons className="mb-20" />

        <Image
          src={heroImage}
          alt="lowops-portal-screen"
          quality={100}
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
