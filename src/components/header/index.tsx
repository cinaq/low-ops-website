'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';
import Socials from '../Socials';
import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';
import MobileHeaderNav from './MobileHeaderNav';

type TProps = {
  classes?: string;
};

const Header: FC<TProps> = (props) => {
  const { classes } = props;

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
          <MobileHeaderNav />
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden lg:block"
          >
            <Socials />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
