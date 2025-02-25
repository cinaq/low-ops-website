'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

type TProps = {
  classes?: string;
};

const Header: FC<TProps> = (props) => {
  const { classes } = props;
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <header className={cn('absolute top-0 w-full', classes)}>
      <div className="container">
        <div className="w-full flex items-center justify-between py-4">
          <AppLogo />
          <HeaderNav />
          {!isDesktop && <MobileHeaderNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
