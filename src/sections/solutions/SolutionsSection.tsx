import SectionTitle from '@/components/SectionTitle';
import { FC } from 'react';
import SolutionTabs from './SolutionTabs';

const SolutionsSection: FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <SectionTitle
          subtitle="Solutions"
          title="Everything you need to succeed"
          description="Depend on what your role is you can get everything you need to achieve your goals as fast as possible"
          className="mb-10 md:mb-12"
        />
        <SolutionTabs />
      </div>
    </section>
  );
};

export default SolutionsSection;
