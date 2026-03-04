import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

type IProps = {
  icon: ReactNode;
  className?: string;
};

const IconWrapper: FC<IProps> = (props) => {
  const { icon, className } = props;

  return (
    <span
      className={cn(
        'flex items-center justify-center w-[70px] h-[70px] drop-shadow-xs',
        className
      )}
    >
      {icon}
    </span>
  );
};

export default IconWrapper;
