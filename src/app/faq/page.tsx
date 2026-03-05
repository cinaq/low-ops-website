import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import FaqSection from '@/sections/faq/FaqSection';

const FAQPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero title="FAQ" />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
