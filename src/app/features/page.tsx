import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import SectionHero from '../../components/SectionHero';

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <SectionHero title="Features" />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default FeaturesPage;
