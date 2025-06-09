import { socials } from '@/data/socials';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';
import AppLogo from '../header/AppLogo';
import HeroButtons from '../HeroButtons';

type TProps = {
  classes?: string;
};

const Footer: FC<TProps> = (props) => {
  const { classes } = props;

  // Renders
  const renderSocials = () => {
    return socials.map(({ alt, link, iconPath }) => (
      <a
        key={alt}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-90 transition-opacity duration-300"
      >
        <Image width={35} height={35} src={iconPath} alt={alt} />
      </a>
    ));
  };

  return (
    <footer
      className={cn(
        'w-full flex items-center justify-center bg-primary-800 text-white pt-10 pb-2',
        classes
      )}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <h3 className="text-center text-3xl md:text-4xl font-semibold leading-[32px] md:leading-[44px] text-white">
            Let’s get started on something great
          </h3>
          <p className="text-center text-base text-gray-200 font-light">
            Join over 10 companies already growing with Low-Ops.
          </p>
          <HeroButtons />
        </div>

        <div className="w-full h-[1px] bg-blue-950 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <AppLogo />
          <div className="items-center justify-end gap-6 flex sm:hidden">
            {renderSocials()}
          </div>
          <span className="text-xs text-gray-200 font-light">
            © Copyright 2025 Low-Ops, a product of CINAQ. All rights Reserved
          </span>
          <div className="items-center justify-end gap-6 hidden sm:flex">
            {renderSocials()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
