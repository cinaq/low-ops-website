import SectionTitle from '@/components/SectionTitle';
import { FC } from 'react';
import SolutionTabs from './SolutionTabs';

const SolutionsSection: FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <SectionTitle
          subtitle="Problem"
          title="App deployment and management in private clouds are complex and expensive."
          description="Organizations typically have 2 types of apps. The first is large and complex that require specialized infra and dedicated teams. The second type is small and simple yet require a lot of manual work to deploy and manage. As a result, innovation slows down as small initiatives are blocked by lack of budget or prioritization. In the age of generative AI, many are now able to build apps by themselves but are unable to share them securely with their colleagues."
          className="mb-10 md:mb-12"
        />
        <SolutionTabs />
      </div>
    </section>
  );
};

export default SolutionsSection;
