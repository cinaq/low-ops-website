'use client';

import socials from '@/data/socials';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Socials = () => {
  const renderSocials = () => {
    return socials.map((social) => (
      <Tooltip key={social.name}>
        <TooltipTrigger asChild>
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[20px] h-[20px] relative"
          >
            <Image src={social.icon} alt={social.name} fill objectFit="cover" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <span>{social.name}</span>
        </TooltipContent>
      </Tooltip>
    ));
  };

  return (
    <div className="flex items-start gap-5 relative z-[999999]">
      {renderSocials()}
    </div>
  );
};

export default Socials;
