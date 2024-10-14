import React from 'react';

const HeaderNav: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center justify-end gap-5">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
