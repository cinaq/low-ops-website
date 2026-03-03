import { menu } from '@/data/header';
import { motion } from 'framer-motion';
import React from 'react';
import HeaderNavItem from './HeaderNavItem';

const HeaderNav: React.FC = () => {
  // Renders
  const renderMenu = () => {
    return menu.map((item) => (
      <HeaderNavItem key={item.name} href={item.href}>
        {item.name}
      </HeaderNavItem>
    ));
  };

  return (
    <nav className="hidden lg:block">
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.75rem' }}
      >
        {renderMenu()}
      </motion.ul>
    </nav>
  );
};

export default HeaderNav;
