'use client';

import { hero } from '@/data/hero';
import { cn } from '@/lib/utils';
import { LinkExternal01 } from '@untitled-ui/icons-react';
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
          size="lg"
          variant="secondary"
          onClick={onClick}
          aria-label="Show demo"
          className="min-w-[200px] flex items-center gap-2 "
        >
          <LinkExternal01 className="w-5 h-5" />
          {hero.demoButton}
        </Button>
      </motion.a>
    </div>
  );
};

export default HeroButtons;
