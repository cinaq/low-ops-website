import IconWrapper from '@/components/IconWrapper';
import { cn } from '@/lib/utils';
import { CheckCircle } from '@untitled-ui/icons-react';
import Image, { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';

type TProps = {
  title: string;
  imagePath: StaticImageData;
  icon: ReactNode;
  solutions: string[];
  index: number;
};

const ProblemsItem: FC<TProps> = (props) => {
  const { title, imagePath, icon, solutions, index } = props;

  const isEven = index % 2 === 0;

  // Renders
  const renderSolutions = () => {
    return solutions.map((item) => (
      <li key={item} className="flex gap-2">
        <CheckCircle className="text-blue-500 leading-none w-auto mt-0.5" />
        <span className="flex-1 text-base font-light">{item}</span>
      </li>
    ));
  };

  return (
    <div
      className={cn(
        'flex prose items-stretch min-h-full',
        isEven ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div className="flex-1 flex flex-col gap-4 max-w-1/2">
        <IconWrapper icon={icon} />
        <h3>{title}</h3>
        <ul className="flex flex-col p-0 m-0 gap-2 md:gap-4">
          {renderSolutions()}
        </ul>
      </div>
      <div className="hidden md:block flex-1 relative">
        <div className={cn('absolute inset-0', isEven ? '-mr-60' : '-ml-60')}>
          <Image
            src={imagePath}
            alt="lowops-portal"
            className={cn(
              'm-0 object-cover',
              isEven ? 'object-left-top' : 'object-right-top'
            )}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemsItem;
