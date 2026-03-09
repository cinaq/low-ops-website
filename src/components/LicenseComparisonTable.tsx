'use client';

import { plans } from '@/data/plans';
import { capitalize, cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import { Fragment, useMemo } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const PricingComparisonTable = () => {
  const allKeys = Array.from(
    new Set(plans.flatMap((plan) => Object.keys(plan.items)))
  );

  // Hooks
  // eslint-disable-next-line react-hooks/preserve-manual-memoization -- static icon mapping, memoization intentional
  const valuesWithIcon = useMemo(() => {
    return {
      yes: (
        <>
          <Check className="w-4 h-4 text-green-500" />
          Yes
        </>
      ),
      no: (
        <>
          <X className="w-4 h-4 text-red-500" />
          No
        </>
      ),
    };
  }, []);

  // Renders
  const renderPlans = () => {
    return (
      <>
        <div />
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center justify-between gap-3 h-full p-8 prose md:prose-md',
              plan.isPopular ? 'bg-primary text-white' : 'undefined',
              index === 0 ? 'bg-primary/5' : undefined
            )}
          >
            <h5
              className={cn(
                'text-neutral-500',
                plan.isPopular ? 'text-white' : undefined
              )}
            >
              {plan.label}
            </h5>
            <h2
              className={cn(
                'text-neutral-500',
                plan.isPopular ? 'text-white' : undefined
              )}
            >
              {plan.price}
            </h2>
            <p
              className={cn(
                'text-neutral-500',
                plan.isPopular ? 'text-white' : undefined
              )}
            >
              Billed annually
            </p>

            {plan.link ? (
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-block w-full px-4',
                  plan.isPopular ? 'text-primary' : undefined
                )}
              >
                <Button
                  variant={plan.isPopular ? 'secondary' : 'primaryOutline'}
                  className={'mb-2 w-full'}
                >
                  Install Now
                </Button>
              </a>
            ) : (
              <a
                href="/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-block w-full px-4',
                  plan.isPopular ? 'text-primary' : undefined
                )}
              >
                <Button
                  variant={plan.isPopular ? 'secondary' : 'primaryOutline'}
                  className={'mb-2 w-full'}
                >
                  Contact Us
                </Button>
              </a>
            )}
          </div>
        ))}
      </>
    );
  };

  const renderItems = () => {
    return allKeys.map((key, index) => (
      <Fragment key={key}>
        <div
          className={cn(
            'border-b py-3 border-primary/20 px-6 text-neutral-500 font-light',
            index === 0 ? 'border-t border-primary/20' : undefined
          )}
        >
          {capitalize(key)}
        </div>
        {plans.map((plan, i) => {
          const value = plan.items[key as keyof typeof plan.items] || '-';
          const resultValue =
            valuesWithIcon[
              value.toLowerCase() as keyof typeof valuesWithIcon
            ] ?? value;

          return (
            <div
              key={`${plan.value}-${key}`}
              className={cn(
                'border-b py-3 border-primary/20 font-light flex justify-center items-center gap-2 px-4 text-neutral-500',
                plan.isPopular
                  ? 'bg-primary text-white border-white/5'
                  : undefined,
                i === 0 ? 'bg-primary/5' : undefined,
                index === 0 ? 'border-t border-primary/20' : undefined,
                index === 0 && plan.isPopular
                  ? 'border-t border-white/5'
                  : undefined
              )}
            >
              {resultValue}
            </div>
          );
        })}
      </Fragment>
    ));
  };

  const renderMobilePlans = () => {
    return plans.map((plan, index) => (
      <Card
        key={index}
        className="flex flex-col gap-6 w-full prose md:prose-md bg-transparent"
      >
        <div className="flex flex-col items-center justify-center gap-3 h-full">
          <div className="w-full flex flex-col items-center justify-center">
            <h3>{plan.label}</h3>
            <h2 className="text-neutral-500">{plan.price}</h2>
          </div>

          <a href={plan.link} target="_blank" rel="noopener noreferrer">
            <Button variant="primaryOutline" className="mb-2 w-full">
              Get Started
            </Button>
          </a>
        </div>
        <div className="">
          {Object.entries(plan.items).map(([key, value]) => (
            <div
              key={`${key}-${plan.value}`}
              className={cn(
                'flex items-center justify-between p-3 border-b border-primary/20'
              )}
            >
              <div className="font-medium text-muted-foreground">
                {capitalize(key)}
              </div>
              <div
                key={`${plan.value}-${key}`}
                className="text-foreground font-medium flex items-center justify-center gap-2"
              >
                {valuesWithIcon[
                  value.toLowerCase() as keyof typeof valuesWithIcon
                ] ?? value}
              </div>
            </div>
          ))}
        </div>
      </Card>
    ));
  };

  return (
    <>
      <div className="flex flex-col border border-primary/20 rounded-lg">
        <div className="hidden lg:grid grid-cols-4">{renderPlans()}</div>
        <div className="hidden lg:grid grid-cols-4">{renderItems()}</div>
      </div>
      <div className="flex flex-col items-center gap-10 lg:gap-20 lg:hidden w-full">
        {renderMobilePlans()}
      </div>
    </>
  );
};

export default PricingComparisonTable;
