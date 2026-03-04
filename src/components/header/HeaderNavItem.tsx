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
          'hover:text-black transition-colors text-base duration-400 cursor-pointer',
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
