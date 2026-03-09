import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';

const PLANE_CLASSES = {
  'top-left': 'transform -rotate-95 absolute -top-3 -left-4',
  'top-right': 'transform rotate-10 absolute -top-3 -right-4',
  'bottom-left': 'transform rotate-180 absolute -bottom-4 -left-4',
  'bottom-right': 'transform rotate-95 absolute -bottom-4 -right-4',
};

type TProps = {
  text: string;
  classes: string;
  planePosition: keyof typeof PLANE_CLASSES;
};

const DecorativeLabel: FC<TProps> = (props) => {
  const { text, classes, planePosition } = props;

  return (
    <div
      className={cn('absolute hidden lg:flex items-center gap-1.5', classes)}
    >
      <div className="relative">
        <PiPaperPlaneTiltFill
          size={20}
          className={cn('text-primary shrink-0', PLANE_CLASSES[planePosition])}
        />
        <Badge variant="primary">{text}</Badge>
      </div>
    </div>
  );
};

export default DecorativeLabel;
