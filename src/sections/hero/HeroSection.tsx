import HeroButtons from '@/components/HeroButtons';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroSection: FC = () => {
  return (
    <section
      className={cn(
        "hero-section w-full pt-[140px] md:pt-[170px] bg-no-repeat bg-top bg-[url('../assets/hero-bg.svg')]"
      )}
      id="hero"
    >
      <div className="container flex flex-col items-center justify-center">
        <HeroContent />
        <HeroButtons className="mb-10 md:mb-20" />
      </div>

      <HeroImage />
    </section>
  );
};

export default HeroSection;
