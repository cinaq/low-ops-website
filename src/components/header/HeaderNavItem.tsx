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
        className="text-gray-500 hover:text-gray-800 transition-colors font-semibold text-base"
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderNavItem;
