import { cn } from '@/lib/utils';
import Link from 'next/link';
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
      <Link
        href={href}
        className={cn(
          'text-white hover:text-primary transition-colors font-medium text-base duration-400',
          className
        )}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default HeaderNavItem;
