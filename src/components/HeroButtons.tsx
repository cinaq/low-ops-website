'use client';

import { hero } from '@/data/hero';
import { cn } from '@/lib/utils';
import { LinkExternal02 } from '@untitled-ui/icons-react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Button } from './ui/button';

type TProps = {
  className?: string;
  onClick?: () => void;
};

const HeroButtons: FC<TProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div
      className={cn('flex items-center justify-center gap-4 w-full', className)}
    >
      <motion.a
        href="https://hub.cinaq.com/low-ops-trial"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <Button
          variant="secondary"
          size="lg"
          onClick={onClick}
          aria-label="Show demo"
        >
          <LinkExternal02 width={18} height={18} className="mr-2" />
          {hero.demoButton}
        </Button>
      </motion.a>
      <motion.a
        href="#contact-us"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.6 }}
      >
        <Button size="lg" onClick={onClick} aria-label="Contact us">
          {hero.contactUsButton}
        </Button>
      </motion.a>
    </div>
  );
};

export default HeroButtons;
