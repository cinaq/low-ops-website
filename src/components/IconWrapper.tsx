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
        'rounded-lg border-[1px] border-gray-200 flex items-center justify-center w-[48px] h-[48px] drop-shadow-xs',
        className
      )}
    >
      {icon}
    </span>
  );
};

export default IconWrapper;
