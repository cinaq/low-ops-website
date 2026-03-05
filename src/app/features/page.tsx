import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import SectionHero from '../../components/SectionHero';
import RoadmapSection from '@/sections/features/RoadmapSection';

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <SectionHero title="Features" />
      <FeaturesSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default FeaturesPage;
