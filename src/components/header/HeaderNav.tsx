import React from 'react';
import HeaderNavItem from './HeaderNavItem';

const menu = [
  { name: 'Features', id: 'features' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Problems we solve', id: 'problems' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' },
];

const HeaderNav: React.FC = () => {
  // Renders
  const renderMenu = () => {
    return menu.map((item) => (
      <HeaderNavItem key={item.name} href={`#${item.id}`}>
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
