import { cn } from '@/lib/utils';
import { FC } from 'react';
import AppLogo from '../header/AppLogo';
import HeroButtons from '../HeroButtons';
import Socials from '../Socials';

type TProps = {
  classes?: string;
};

const Footer: FC<TProps> = (props) => {
  const { classes } = props;

  return (
    <footer
      className={cn(
        'w-full flex items-center justify-center bg-primary-800 text-white pt-10 pb-4',
        classes
      )}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <h3 className="text-center text-3xl md:text-4xl font-semibold leading-[32px] md:leading-[44px] text-white">
            Having your own private application <br /> platform is easier than
            you think
          </h3>
          <p className="text-center text-base text-gray-200 font-light">
            Start delivering apps in minutes
          </p>
          <HeroButtons />
        </div>

        <div className="w-full h-[1px] bg-blue-950 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <AppLogo />
          <span className="text-xs text-gray-300 font-light text-center">
            © Copyright 2025 Low-Ops, a product of 
            <a
              href="https://cinaq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              CINAQ
            </a>
            . All rights Reserved
          </span>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
