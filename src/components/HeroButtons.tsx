import { cn } from '@/lib/utils';
import { LinkExternal02 } from '@untitled-ui/icons-react';
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
      <a
        href="https://hub.cinaq.com/low-ops-trial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="secondary"
          size="lg"
          onClick={onClick}
          aria-label="Show demo"
        >
          <LinkExternal02 width={18} height={18} className="mr-2" />
          Demo
        </Button>
      </a>
      <a href="#contact-us">
        <Button size="lg" onClick={onClick} aria-label="Contact us">
          Contact us
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;
