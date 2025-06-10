import { menu } from '@/data/header';
import React from 'react';
import HeaderNavItem from './HeaderNavItem';

const HeaderNav: React.FC = () => {
  // Renders
  const renderMenu = () => {
    return menu.map((item) => (
      <HeaderNavItem
        key={item.name}
        href={item.isPage ? `/${item?.href}` : `/#${item?.id}`}
      >
        {item.name}
      </HeaderNavItem>
    ));
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-end gap-7">{renderMenu()}</ul>
    </nav>
  );
};

export default HeaderNav;
