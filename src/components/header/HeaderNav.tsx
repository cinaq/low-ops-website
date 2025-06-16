import { menu } from '@/data/header';
import { motion } from 'framer-motion';
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
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex items-center justify-end gap-7"
      >
        {renderMenu()}
      </motion.ul>
    </nav>
  );
};

export default HeaderNav;
