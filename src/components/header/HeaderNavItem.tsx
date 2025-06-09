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
          'text-white hover:text-gray-200 transition-colors font-medium text-base duration-400',
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
