'use client';

import { menu } from '@/data/header';
import { cn } from '@/lib/utils';
import { Menu01, XClose } from '@untitled-ui/icons-react';
import { useState } from 'react';
import HeroButtons from '../HeroButtons';
import { Button } from '../ui/button';
import AppLogo from './AppLogo';
import HeaderNavItem from './HeaderNavItem';

const MobileHeaderNav = () => {
  const [open, setOpen] = useState(false);

  // Handlers
  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Renders
  const renderMenu = () => {
    return menu.map((item) => (
      <HeaderNavItem
        key={item.name}
        href={item.isPage ? `/${item.href}` : `/#${item.id}`}
        className="flex items-center px-5 py-6 hover:bg-gray-50 active:bg-gray-50 text-lg text-gray-700 font-semibold"
        onClick={handleClose}
      >
        {item.name}
      </HeaderNavItem>
    ));
  };

  return (
    <>
      <Button
        onClick={handleToggle}
        variant="ghost"
        size="icon"
        className="flex md:hidden text-white"
        aria-label="Open menu"
      >
        <Menu01 width={28} height={28} />
      </Button>
      <div
        className={cn(
          'flex flex-col justify-between md:hidden fixed z-50 w-screen h-full max-h-screen overflow-hidden left-0 top-0 border bg-white transition-transform duration-500',
          open ? 'translate-y-0' : '-translate-y-[1800px] -z-1'
        )}
      >
        <div>
          <div className="flex items-center justify-between p-4">
            <AppLogo isDark />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggle}
              aria-label="Close menu"
            >
              <XClose />
            </Button>
          </div>
          <nav className="py-4">
            <ul className="flex flex-col">{renderMenu()}</ul>
          </nav>
        </div>

        <HeroButtons className="justify-self-end p-4" onClick={handleClose} />
      </div>
    </>
  );
};

export default MobileHeaderNav;
