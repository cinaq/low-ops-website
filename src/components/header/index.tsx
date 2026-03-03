'use client';

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
        'absolute top-0 w-full z-50 border-b border-primary-25',
        classes
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4.5">
          <AppLogo />
          <HeaderNav />
          <MobileHeaderNav />
          <div className="flex items-center justify-end gap-8">
            <Socials />
            <Button size="lg">Start free trial</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
