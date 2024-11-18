import SectionTitle from '@/components/SectionTitle';
import { problemsWeSolve } from '@/data/problemsWeSolve';
import React from 'react';
import ProblemsItem from './ProblemsItem';

const ProblemsSection: React.FC = () => {
  // Renders
  const renderFeatures = () => {
    return problemsWeSolve.map((problem, index) => (
      <ProblemsItem key={problem.title} index={index} {...problem} />
    ));
  };

  return (
    <section
      className="py-20 md:py-28 max-w-full overflow-hidden"
      id="problems"
    >
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          title="Problems we solve"
          description="Solutions to Your Pain Points"
        />

        <div className="flex flex-col gap-12 md:gap-20">{renderFeatures()}</div>
      </div>
    </section>
  );
};

export default ProblemsSection;
