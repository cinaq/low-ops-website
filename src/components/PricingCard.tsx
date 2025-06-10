import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Check,
  CheckCircleBroken,
  InfoCircle,
  X,
} from '@untitled-ui/icons-react';
import { FC, useMemo } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';

type TProps = {
  plan: {
    value: string;
    label: string;
    price: string;
    subPrice?: string;
    icon: React.ReactNode;
    items: Record<string, string>;
    isPopular: boolean;
    description: string;
  };
};

const PricingCard: FC<TProps> = (props) => {
  const { plan } = props;

  // Variables
  const valueIcon = useMemo(
    () => ({
      yes: <Check className="text-green-500" width={18} height={18} />,
      no: <X className="text-red-500" width={18} height={18} />,
    }),
    []
  );

  // Renders
  return (
    <Card
      key={plan.value}
      className="flex flex-col gap-2 items-center justify-between p-5"
    >
      <div className="flex flex-col items-center gap-2 w-full mb-4">
        <div className="rounded-lg border-[1px] border-gray-100 py-1 px-1.5 flex items-center gap-2">
          <Badge
            variant="outline"
            className="flex items-center text-xs font-normal gap-1"
          >
            <span className="w-[10px] h-[10px] rounded-full bg-primary-200 flex items-center justify-center">
              <span className="w-[5px] h-[5px] rounded-full bg-primary-500" />
            </span>
            {plan.label}
          </Badge>
          {plan.isPopular && <span className="text-xs">Most popular</span>}
        </div>
        <div className="flex items-start gap-1">
          <h1 className="text-3xl font-bold">{plan.price}</h1>
          <Tooltip>
            <TooltipTrigger>
              <InfoCircle width={16} height={16} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Billed annually</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-sm font-light text-gray-500">{plan.description}</p>
        {!!plan.subPrice && (
          <Badge
            variant="secondary"
            className="text-xs font-normal flex items-center gap-2"
          >
            <CheckCircleBroken width={14} height={14} />
            {plan.subPrice}
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full flex flex-col mb-3">
          <div className="h-[1px] bg-gray-100 w-full" />
          <div className="flex flex-col gap-3 py-4">
            {Object.entries(plan.items).map(([key, value]) => (
              <>
                {key === 'support' && (
                  <div className="flex items-center gap-2 capitalize text-sm">
                    {valueIcon['yes']}
                    {value} support
                  </div>
                )}

                {key !== 'support' && (
                  <div
                    key={key}
                    className="flex items-center gap-2 capitalize text-sm"
                  >
                    {valueIcon[value as keyof typeof valueIcon]}
                    {key}
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="h-[1px] bg-gray-100 w-full" />
        </div>
        <Button className="w-full">Choose license</Button>
        <Button variant="outline" className="w-full">
          Compare licenses
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
