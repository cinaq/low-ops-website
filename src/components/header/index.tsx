'use client';

import data from '@/data';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import Socials from '../Socials';
import { Button } from '../ui/button';
import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

type TProps = {
  classes?: string;
};

const Header: FC<TProps> = (props) => {
  const { classes } = props;

  // Renders
  return (
    <header
      className={cn(
        'sticky top-0 w-full z-90 bg-white border-b border-primary/20',
        classes
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <AppLogo />
          <HeaderNav />
          <div className="flex items-center justify-end gap-4 lg:gap-8">
            <Socials />
            <a
              href={data.cta.freeAccessLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="hidden lg:block">
                Free Access
              </Button>
            </a>
            <MobileHeaderNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
