import { cn } from '@/lib/utils';
import { FC } from 'react';
import TitleBadge from './TitleBadge';

type TProps = {
  subtitle?: string;
  title?: string;
  description: string;
  className?: string;
};

const SectionTitle: FC<TProps> = (props) => {
  const { title, description, className, subtitle } = props;

  return (
    <div
      className={cn(
        'prose md:prose-md flex flex-col items-center justify-center gap-3',
        className
      )}
    >
      {subtitle && <TitleBadge title={subtitle} />}
      <h2>{title}</h2>
      <p className="font-sans font-light text-neutral-500">{description}</p>
    </div>
  );
};

export default SectionTitle;
