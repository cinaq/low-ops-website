import { socials } from '@/data/socials';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

type TProps = {
  classes?: string;
};

const Footer: FC<TProps> = (props) => {
  const { classes } = props;

  // Renders
  const renderSocials = () => {
    return socials.map(({ alt, link, iconPath }) => (
      <a key={alt} href={link} target="_blank" rel="noopener noreferrer">
        <Image src={iconPath} alt={alt} />
      </a>
    ));
  };

  return (
    <footer
      className={cn(
        'w-full h-[108px] sm:h-[68px] flex items-center justify-center',
        classes
      )}
    >
      <div className="container flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
        <span className="text-sm text-gray-500 font-light">
          © Copyright 2025 Low-Ops, a product of CINAQ. All rights Reserved
        </span>
        <div className="flex items-center justify-end gap-6">
          {renderSocials()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
