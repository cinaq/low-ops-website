'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';
import AppLogo from './AppLogo';
import DocsLink from './DocsLink';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

type TProps = {
  classes?: string;
};

const Header: FC<TProps> = (props) => {
  const { classes } = props;
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Renders
  return (
    <header
      className={cn('absolute top-0 w-full z-50 bg-primary-800', classes)}
    >
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center gap-6"
          >
            <AppLogo />
          </motion.div>
          <HeaderNav />
          {!isDesktop && <MobileHeaderNav />}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <DocsLink />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
