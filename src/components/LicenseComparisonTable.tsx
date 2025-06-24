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
              <h3 className="flex items-center gap-4 text-md font-normal border-b mb-5 pb-2 w-full">
                {plan.label}
                {plan.isPopular && (
                  <Badge variant="primaryOutline">Popular</Badge>
                )}
              </h3>
            </div>
            <h1 className="text-3xl font-bold mb-3">{plan.price}</h1>
            <p className="font-light text-md text-gray-600 mb-3">
              {plan.description}
            </p>
            <a href="/contact-us">
              <Button className="mb-2">Get Started</Button>
            </a>
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
            'font-normal border-b py-3 border-gray-100 text-gray-700 pl-2',
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
                'text-center border-b py-3 border-gray-100 text-gray-900 font-medium flex items-center justify-center gap-2',
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
      <div className="flex flex-col gap-20 lg:hidden">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="flex flex-col justify-between gap-1 items-stretch h-full">
              <div className="w-full">
                <h3 className="flex items-center gap-4 text-md font-normal border-b mb-5 pb-2 w-full">
                  {plan.label}
                  {plan.isPopular && (
                    <Badge variant="primaryOutline">Popular</Badge>
                  )}
                </h3>
              </div>
              <h1 className="text-3xl font-bold mb-3">{plan.price}</h1>
              <p className="font-light text-md text-gray-600 mb-3">
                {plan.description}
              </p>
              <Button className="mb-2 max-w-[200px]">Get Started</Button>
            </div>
            <div className="">
              {Object.entries(plan.items).map(([key, value], i) => (
                <div
                  key={`${key}-${plan.value}`}
                  className={cn(
                    'flex items-center justify-between p-3 border-b border-gray-100',
                    i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  )}
                >
                  <div className="text-gray-700 font-light">
                    {capitalize(key)}
                  </div>
                  <div
                    key={`${plan.value}-${key}`}
                    className="text-gray-900 font-medium flex items-center justify-center gap-2"
                  >
                    {valuesWithIcon[
                      value.toLowerCase() as keyof typeof valuesWithIcon
                    ] ?? value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseComparisonTable;
