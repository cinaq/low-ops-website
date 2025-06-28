'use client';

import { plans } from '@/data/plans';
import { capitalize, cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import { Fragment, useMemo } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const LicenseComparisonTable = () => {
  const allKeys = Array.from(
    new Set(plans.flatMap((plan) => Object.keys(plan.items)))
  );

  // Hooks
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
            className="flex flex-col justify-between gap-1 items-stretch h-full px-6"
          >
            <div className="w-full">
              <h3 className="flex gap-4 text-md font-normal border-b mb-5 pb-2 w-full">
                {plan.label}
                {plan.isPopular && (
                  <Badge variant="primaryOutline">Popular</Badge>
                )}
              </h3>
            </div>

            {plan.free ? (
              <>
                <h1 className="text-3xl font-bold mb-3"><span className="line-through">{plan.price}</span> Free</h1>
                <p className="font-light text-md text-gray-600 mb-3">
                  Limited time offer: Free for first 3 months.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-3">{plan.price}</h1>
                <p className="font-light text-md text-gray-600 mb-3">
                  {' '}
                </p>
              </>
            )}
            <p className="font-light text-md text-gray-600 mb-3">
              {plan.description}
            </p>
            {plan.link ? (
              <a href={plan.link}>
                <Button className="mb-2">Install Now</Button>
              </a>
            ) : (
              <a href="/contact-us">
                <Button className="mb-2">Contact Us</Button>
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
            'font-bold border-b py-3 border-gray-100 text-gray-700 pl-2',
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          )}
        >
          {capitalize(key)}
        </div>
        {plans.map((plan) => {
          const value = plan.items[key as keyof typeof plan.items] || '-';
          const resultValue =
            valuesWithIcon[
            value.toLowerCase() as keyof typeof valuesWithIcon
            ] ?? value;

          return (
            <div
              key={`${plan.value}-${key}`}
              className={cn(
                'border-b py-3 border-gray-100 text-gray-900 font-medium flex gap-2 pl-6',
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              )}
            >
              {resultValue}
            </div>
          );
        })}
      </Fragment>
    ));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="hidden lg:grid grid-cols-4">{renderPlans()}</div>
      <div className="hidden lg:grid grid-cols-4">{renderItems()}</div>
    </div>
  );
};

export default LicenseComparisonTable;
