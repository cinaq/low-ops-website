'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { LinkExternal02 } from '@untitled-ui/icons-react';
import { FC } from 'react';
import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? '#';

type TProps = {
  classes?: string;
};

const Header: FC<TProps> = (props) => {
  const { classes } = props;
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Renders
  const renderDocsLink = () => {
    return (
      <a
        href={DOCS_URL}
        rel="noopener noreferrer"
        target="_blank"
        className={cn(
          'text-gray-600 hover:text-blue-500 transition-colors font-medium text-base flex items-center gap-2'
        )}
      >
        Docs
        <LinkExternal02 width={16} height={16} />
      </a>
    );
  };

  return (
    <header className={cn('absolute top-0 w-full', classes)}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <AppLogo />
            {renderDocsLink()}
          </div>
          <HeaderNav />
          {!isDesktop && <MobileHeaderNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
