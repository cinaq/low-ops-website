'use client';

import { hero } from '@/data/hero';

const HeroContent = () => {
  return (
    <div className="prose md:prose-md mb-6 md:mb-10 flex flex-col items-center lg:items-start justify-center">
      <h1 className="max-w-[856px] text-center lg:text-left">{hero.title}</h1>
      <p className="max-w-[400px] lg:max-w-[564px] text-center lg:text-left text-base md:text-md text-gray-600 font-extralight">
        {hero.description}
      </p>
    </div>
  );
};

export default HeroContent;
