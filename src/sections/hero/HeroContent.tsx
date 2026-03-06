'use client';

import { hero } from '@/data/hero';

const HeroContent = () => {
  return (
    <div className="prose md:prose-md mb-6 md:mb-10 flex flex-col items-center justify-center gap-8">
      <h1 className="text-center max-w-[850px]">
        {hero.title} <br />
        <span className="inline-block bg-primary rounded-md px-3 py-0 text-white leading-tight rotate-[-1.3deg]">
          {hero.titleHighlight}
        </span>
      </h1>
      <p className="max-w-full lg:max-w-[900px] w-full text-center text-md lg:text-xl font-light">
        {hero.description}
      </p>
    </div>
  );
};

export default HeroContent;
