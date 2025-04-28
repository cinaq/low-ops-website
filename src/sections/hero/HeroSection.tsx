import HeroButtons from '@/components/HeroButtons';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import HeroContent from './HeroContent';

const HeroSection: FC = () => {
  return (
    <section
      className={cn(
        "hero-section w-full pt-[140px] md:pt-[170px] bg-no-repeat bg-top bg-[url('../assets/hero-bg.svg')]"
      )}
      id="hero"
    >
      <div className="container flex flex-col flex-center items-center justify-between overflow-hidden gap-10">
        <div className="flex flex-col items-center lg:items-start justify-center">
          <HeroContent />
          <HeroButtons className="mb-6 md:mb-10" />
        </div>
        <div className="max-w-[768px] h-full">
          <video
            src="/lowops-demo.mov"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-md md:rounded-xl"
          />
        </div>
      </div>

      {/* <HeroImage /> */}
    </section>
  );
};

export default HeroSection;
