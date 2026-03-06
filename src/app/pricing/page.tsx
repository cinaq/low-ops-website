import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import PricingSection from '@/sections/pricing/PricingSection';
import TechWeUseSection from '@/sections/pricing/TechWeUseSection';

const PricingPage = () => {
  return (
    <>
      <Header />
      <SectionHero title="Pricing" />
      <PricingSection />
      <TechWeUseSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default PricingPage;
