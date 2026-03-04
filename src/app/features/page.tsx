import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import SectionHero from './SectionHero';

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <SectionHero />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default FeaturesPage;
