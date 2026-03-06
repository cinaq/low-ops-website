import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

type TProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const FeaturesItem: FC<TProps> = (props) => {
  const { title, description, icon } = props;

  return (
    <div className="flex flex-col items-center gap-3 md:gap-5 prose md:prose-md shadow-none group hover:shadow-md transition-all duration-300 rounded-lg p-4 cursor-default">
      <span
        className={cn(
          'flex items-center justify-center w-[70px] h-[70px] drop-shadow-xs bg-primary border-0 text-white rounded-full [&>svg]:text-white shrink-0'
        )}
      >
        {icon}
      </span>

      <h4>{title}</h4>
      <p className="font-sans text-center font-light">{description}</p>
    </div>
  );
};

export default FeaturesItem;
