import { FC, ReactNode } from 'react';

type TProps = {
  href: string;
  children: ReactNode;
};

const HeaderNavItem: FC<TProps> = (props) => {
  const { href, children } = props;

  return (
    <li>
      <a
        href={href}
        className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-base"
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderNavItem;
