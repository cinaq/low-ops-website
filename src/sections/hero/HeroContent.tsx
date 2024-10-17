'use client';

import { hero } from '@/data/hero';

const HeroContent = () => {
  return (
    <div className="prose md:prose-md mb-6 md:mb-10 flex flex-col items-center justify-center">
      <h1 className="text-center max-w-[856px]">{hero.title}</h1>
      <p className="text-center max-w-[564px] text-base md:text-xl text-gray-600 font-light">
        {hero.description}
      </p>
    </div>
  );
};

export default HeroContent;
