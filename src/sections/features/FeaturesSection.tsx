import SectionTitle from '@/components/SectionTitle';
import { features } from '@/data/features';
import FeaturesItem from './FeaturesItem';

import React from 'react';

const FeaturesSection: React.FC = () => {
  // Renders
  const renderFeatures = () => {
    return features.map((feature) => (
      <FeaturesItem key={feature.title} {...feature} />
    ));
  };

  return (
    <section className="py-20 md:py-28" id="features">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          title="Features"
          description="Seamless Mendix Management Made Easy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20">
          {renderFeatures()}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
