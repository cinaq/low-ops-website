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
        <h2 className="text-center text-black text-md border border-blue-500 w-fit mx-auto px-4 py-0.5 rounded-lg bg-blue-100 mb-2">
          {title}
        </h2>
      )}
      <p className="text-center text-xl md:text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
