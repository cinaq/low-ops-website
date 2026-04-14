import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import ComparisonSection from '@/sections/comparison/ComparisonSection';
import CTASection from '@/sections/cta/CTASection';

const ComparisonPage = () => {
  return (
    <>
      <Header />
      <SectionHero
        title="Comparison"
        description="We compare Low-Ops with other platforms to help you choose the perfect fit for your needs."
      />
      <main>
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ComparisonPage;
