import { cn } from '@/lib/utils';
import { FC } from 'react';

type TProps = {
  title?: string;
  description: string;
  className?: string;
};

const SectionTitle: FC<TProps> = (props) => {
  const { title, description, className } = props;

  return (
    <div className={cn('prose md:prose-md', className)}>
      {!!title && (
        <h2 className="text-center text-blue-700 text-md">{title}</h2>
      )}
      <p className="text-center text-3xl md:text-4xl font-semibold leading-[32px] md:leading-[44px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
