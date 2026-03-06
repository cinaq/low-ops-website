'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { techWeUse } from '@/data/tech-we-use';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TechWeUse = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <div className="relative w-full overflow-hidden h-[700px]">
        <div
          className="absolute left-1/2 top-full aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-full aspect-square w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-full aspect-square w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
          aria-hidden
        />

        {techWeUse.map((tech) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  'absolute flex items-center justify-center rounded-full bg-white overflow-hidden border border-primary/20 shadow-md',
                  tech.classes
                )}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={tech.iconSize}
                  height={tech.iconSize}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p className="text-sm font-light">{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default TechWeUse;
