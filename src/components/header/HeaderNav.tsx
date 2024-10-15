import React from 'react';
import HeaderNavItem from './HeaderNavItem';

const menu = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Problems we solve', href: '#problemsolve' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

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
    <nav className="hidden md:block">
      <ul className="flex items-center justify-end gap-7">{renderMenu()}</ul>
    </nav>
  );
};

export default HeaderNav;
