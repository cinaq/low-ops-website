'use client';

import { menu } from '@/data/header';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { PiList, PiX } from 'react-icons/pi';
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
        href={item.href}
        onClick={handleClose}
        className={cn(
          'flex items-center hover:bg-gray-50 active:bg-gray-50 text-lg font-medium'
        )}
        liClassName="p-6"
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
        className="flex lg:hidden"
        aria-label="Open menu"
      >
        <PiList size={28} />
      </Button>
      <div
        className={cn(
          'flex flex-col justify-between lg:hidden fixed z-50 w-screen h-screen max-h-screen overflow-hidden left-0 top-0 border bg-white transition-transform duration-500',
          open ? 'translate-y-0' : '-translate-y-[1800px] -z-1'
        )}
      >
        <div>
          <div className="flex items-center justify-between p-6">
            <AppLogo />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggle}
              aria-label="Close menu"
            >
              <PiX size={24} />
            </Button>
          </div>
          <nav className="py-4">
            <ul className="flex flex-col">{renderMenu()}</ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileHeaderNav;
