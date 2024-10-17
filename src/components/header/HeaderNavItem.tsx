import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

type TProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const HeaderNavItem: FC<TProps> = (props) => {
  const { href, children, className, onClick } = props;

  return (
    <li>
      <a
        href={href}
        className={cn(
          'text-gray-600 hover:text-gray-900 transition-colors font-medium text-base',
          className
        )}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderNavItem;
