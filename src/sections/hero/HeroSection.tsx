import HeroButtons from '@/components/HeroButtons';
import { hero } from '@/data/hero';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import HeroImage from './HeroImage';

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
          <h1 className="text-center max-w-[856px]">{hero.title}</h1>
          <p className="text-center max-w-[564px] text-base md:text-xl text-gray-600 font-light">
            {hero.description}
          </p>
        </div>

        <HeroButtons className="mb-10 md:mb-20" />
      </div>

      <HeroImage />
    </section>
  );
};

export default HeroSection;
