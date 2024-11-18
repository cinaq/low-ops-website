'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <header className={cn('absolute top-0 w-full')}>
      <div className="container">
        <div className="w-full flex items-center justify-between py-6">
          <AppLogo />
          <HeaderNav />
          {!isDesktop && <MobileHeaderNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
