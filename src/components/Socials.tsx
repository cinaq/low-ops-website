'use client';

import socials from '@/data/socials';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Socials = () => {
  const renderSocials = () => {
    return socials
      .filter((social) => social.showInHeader)
      .map((social) => (
        <Tooltip key={social.name}>
          <TooltipTrigger asChild>
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[23px] h-[23px] relative"
            >
              {social.icon(26)}
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <span>{social.name}</span>
          </TooltipContent>
        </Tooltip>
      ));
  };

  return (
    <div className="flex items-start gap-5 relative z-50">
      {renderSocials()}
    </div>
  );
};

export default Socials;
