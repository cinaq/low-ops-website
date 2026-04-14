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
      <SectionHero
        title="Features"
        description="Low-ops is a fully featured platform that can be used to build and deploy any web application. It follows the best practices of platform engineering and is designed to be easy to use and maintain."
      />
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
