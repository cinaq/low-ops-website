import starIcon from '@/assets/star.svg';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

type TProps = {
  className?: string;
  title: string;
};

const TitleBadge: FC<TProps> = (props) => {
  const { className, title } = props;

  return (
    <div className={cn('mb-2 not-prose md:prose-md', className)}>
      <Badge
        variant="primaryOutline"
        className="rounded-full flex items-center gap-2 py-2 px-4 text-md md:text-lg font-medium leading-none"
      >
        <Image src={starIcon} alt="Star" width={24} height={24} />
        {title}
      </Badge>
    </div>
  );
};

export default TitleBadge;
