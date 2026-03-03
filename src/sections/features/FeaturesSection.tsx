import IconWrapper from '@/components/IconWrapper';
import SectionTitle from '@/components/SectionTitle';
import { topFeatures } from '@/data/features';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import adminAppsTableImage from '@/assets/admin-apps-table.png';
import envOverviewImage from '@/assets/env-overview.png';
import packagesImage from '@/assets/packages.png';
import { cn } from '@/lib/utils';

const FEATURE_IMAGES = [
  adminAppsTableImage,
  envOverviewImage,
  packagesImage,
] as const;

const FeaturesSection: React.FC = () => {
  const renderFeatures = () => {
    return topFeatures.map((feature, index) => {
      const isReversed = index % 2 === 1;
      const imageSrc = FEATURE_IMAGES[index];

      return (
        <div
          key={feature.title}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-[3fr_5fr] gap-3 lg:gap-6 items-center prose',
            isReversed && 'lg:grid-cols-[5fr_3fr] prose-md'
          )}
        >
          <div
            className={cn(
              'w-full rounded-lg border border-primary/20 overflow-hidden bg-primary/1 h-full p-8 flex flex-col gap-4',
              isReversed && 'lg:order-2'
            )}
          >
            <IconWrapper
              icon={feature.icon}
              className="bg-primary border-0 text-white w-12 h-12 rounded-lg mb-4 [&>svg]:text-white"
            />
            <h4>{feature.title}</h4>
            <p className="text-sm text-neutral-500 font-sans">
              {feature.description}
            </p>
            <span className="block" />
            <ul className="flex flex-col gap-3">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-base font-sans">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={isReversed ? 'lg:order-1' : undefined}>
            <div className="relative w-full rounded-lg border border-primary/20 overflow-hidden bg-primary/1 aspect-5/3 h-full p-8">
              <Image
                src={imageSrc}
                alt={feature.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="py-20 md:py-28" id="features">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Top Features"
          title="Platform that Boosts Security and Productivity"
          description="Enhance your business with features designed to streamline operations, automate tasks, and deliver applications to the production."
        />

        <div className="flex flex-col gap-y-3 md:gap-y-6 w-full max-w-6xl mx-auto">
          {renderFeatures()}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
