import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import RoadmapSection from '@/sections/features/RoadmapSection';
import SectionHero from '../../components/SectionHero';

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <SectionHero title="Features" />
      <main>
        <FeaturesSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FeaturesPage;
