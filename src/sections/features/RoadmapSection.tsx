'use client';

import SectionTitle from '@/components/SectionTitle';
import { roadmapSteps } from '@/data/roadmap';
import { cn } from '@/lib/utils';
import WavyLineSvg from '@/sections/features/WavyLine';

const RoadmapSection = () => {
  const renderRoadmapSteps = () => {
    return roadmapSteps.map((step, index) => (
      <div key={step.step} className="relative mx-auto xl:mx-0">
        <div
          className={cn(
            'relative xl:absolute flex items-center gap-4 xl:gap-8 justify-center text-center max-w-[300px]',
            step.positionClasses,
            index === 1 ? 'flex-col xl:flex-col-reverse' : 'flex-col'
          )}
        >
          <div className="flex flex-col items-center gap-4 text-center prose md:prose-md">
            <span className="text-primary font-sans border border-primary/20 rounded-2xl py-1.5 px-6 bg-white">
              Step {index + 1}
            </span>
            <h4>{step.title}</h4>
            <p className="text-sm font-light font-sans max-w-70">
              {step.description}
            </p>
          </div>
          <div className="hidden xl:flex w-[36px] h-[36px] rounded-full bg-white items-center justify-center shadow-md">
            <span className="w-[12px] h-[12px] rounded-full bg-primary" />
          </div>
          <span className="w-[80px] h-[80px] bg-primary rounded-full flex items-center justify-center">
            <step.Icon size={32.5} className="text-white" />
          </span>
        </div>
      </div>
    ));
  };

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-primary/5">
      <div className="container relative flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Simple Steps to Success"
          title="The roadmap to success, Start your journey now"
          description="Getting started has never been easier. Our streamlined process ensures a hassle-free experience, guiding you every step of the way."
        />

        <div className="relative flex flex-col items-center gap-12 h-auto xl:h-[500px] w-full">
          <div className="hidden xl:block absolute top-1/2 -translate-y-1/2">
            <WavyLineSvg />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-10 w-full max-w-6xl mx-auto">
            {renderRoadmapSteps()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
