import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import PricingSection from '@/sections/pricing/PricingSection';

const PricingPage = () => {
  return (
    <>
      <Header />
      <SectionHero title="Pricing" />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default PricingPage;
