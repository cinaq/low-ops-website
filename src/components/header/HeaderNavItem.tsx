import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type TProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  liClassName?: string;
};

const HeaderNavItem: FC<TProps> = (props) => {
  const { href, children, className, onClick, liClassName } = props;

  return (
    <li className={cn(liClassName)}>
      <Link
        href={href}
        className={cn(
          'hover:text-neutral-500 transition-colors duration-400 cursor-pointer',
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
