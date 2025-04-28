import { menu } from '@/data/header';
import { cn } from '@/lib/utils';
import { LinkExternal02 } from '@untitled-ui/icons-react';
import React from 'react';
import HeaderNavItem from './HeaderNavItem';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://docs.low-ops.com';

const HeaderNav: React.FC = () => {
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

  const renderMenu = () => {
    return (
      <>
        {renderDocsLink()}
        {menu.map((item) => (
          <HeaderNavItem key={item.name} href={`#${item.id}`}>
            {item.name}
          </HeaderNavItem>
        ))}
      </>
    );
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-end gap-7">{renderMenu()}</ul>
    </nav>
  );
};

export default HeaderNav;
