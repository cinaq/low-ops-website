'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn('absolute top-0 w-full', isScrolled && 'bg-white')}>
      <div className="container">
        <div className="w-full flex items-center justify-between py-6">
          <AppLogo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
