import Footer from '@/components/footer';
import Header from '@/components/header';
import IconWrapper from '@/components/IconWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { plans } from '@/data/plans';
import { Check, CheckCircleBroken, X } from '@untitled-ui/icons-react';
import { useMemo } from 'react';

const PricingPage = () => {
  // Variables
  const valueIcon = useMemo(
    () => ({
      yes: <Check className="text-green-500" width={18} height={18} />,
      no: <X className="text-red-500" width={18} height={18} />,
    }),
    []
  );

  // Renders
  const renderPlans = () => {
    return plans.map((plan) => (
      <Card
        key={plan.value}
        className="flex flex-col gap-2 items-center justify-between h-[400px] p-5"
      >
        <div className="flex flex-col items-center gap-2 w-full">
          <IconWrapper icon={plan.icon} />
          <h2 className="text-base font-medium text-primary">{plan.label}</h2>
          <h1 className="text-2xl font-bold">{plan.price}</h1>
          {!!plan.subPrice && (
            <Badge
              variant="primary"
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
        </div>
      </Card>
    ));
  };

  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-68px)] w-full pt-[120px] pb-[40px]">
        <div className="container">
          <h1 className="text-3xl font-medium text-center mb-10">
            Low-Ops Pricing
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderPlans()}
          </div>
        </div>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default PricingPage;
