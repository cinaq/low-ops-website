'use client';

import SectionTitle from '@/components/SectionTitle';
import { roadmapSteps } from '@/data/roadmap';
import { cn } from '@/lib/utils';

const WavyLineSvg = () => (
  <svg
    width="1317"
    height="215"
    viewBox="0 0 1317 215"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.3" filter="url(#filter0_d_15301_104)">
      <path
        d="M10.5 101.173C41.1181 133.359 125.042 197.831 215.792 198.233C239.55 200.077 304.434 193.204 373.902 150.96C413.89 124.474 497.981 68.4843 514.444 56.4147C538.872 38.1426 601.38 2.20182 655.99 4.61575C699.993 2.93946 814.703 27.3471 921.515 138.388C944.604 161.019 1013.47 203.463 1104.22 192.198C1141.86 189.852 1235.02 168.26 1306.5 100.67"
        stroke="#222E48"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_15301_104"
        x="0"
        y="0"
        width="1317"
        height="215"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0588235 0 0 0 0 0.376471 0 0 0 0 0.301961 0 0 0 0.4 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_15301_104"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_15301_104"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 md:py-28 bg-primary/5">
      <div className="container relative flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Simple Steps to Success"
          title="The roadmap to success, Start your journey now"
          description="Getting started has never been easier. Our streamlined process ensures a hassle-free experience, guiding you every step of the way."
        />

        <div className="relative flex flex-col items-center gap-12 h-[500px] w-full">
          <div className="absolute top-1/2 -translate-y-1/2">
            <WavyLineSvg />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full max-w-6xl mx-auto">
            {roadmapSteps.map((step, index) => (
              <div key={step.step} className="relative prose">
                <div
                  className={cn(
                    'absolute flex items-center gap-8 justify-center text-center max-w-[300px]',
                    step.positionClasses,
                    index === 1 ? 'flex-col-reverse' : 'flex-col'
                  )}
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    <span className="text-primary font-sans border border-primary/20 rounded-2xl py-1.5 px-6 bg-white">
                      Step {index + 1}
                    </span>
                    <h4>{step.title}</h4>
                    <p className="text-sm font-light font-sans max-w-70">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="w-[12px] h-[12px] rounded-full bg-primary" />
                  </div>
                  <span className="w-[80px] h-[80px] bg-primary rounded-full flex items-center justify-center">
                    <step.Icon size={32.5} className="text-white" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
