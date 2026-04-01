import SectionTitle from '@/components/SectionTitle';
import { FC } from 'react';
import SolutionTabs from './SolutionTabs';

const SolutionsSection: FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <SectionTitle
          subtitle="You have created a fantastic app"
          title="IT says: we don't have time to deploy and manage it."
          description="Most organizations are not ready to handle high influx of small innovative apps. As a result there is a high risk insecure apps end up in public clouds. Waiting to be hacked."
          className="mb-10 md:mb-12"
        />
        <SolutionTabs />
      </div>
    </section>
  );
};

export default SolutionsSection;
