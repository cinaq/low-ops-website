import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import PricingSection from '@/sections/pricing/PricingSection';
import TechWeUseSection from '@/sections/pricing/TechWeUseSection';
import pricingImage from '@/assets/header-pricing.jpg';

const PricingPage = () => {
  return (
    <>
      <Header />
      <SectionHero title="Pricing" image={pricingImage.src} description="We offer flexible and transparent pricing plans to help you choose the perfect fit for your needs. Whether you're just starting or looking to scale."/>
      <main>
        <PricingSection />
        <TechWeUseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
