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
        <SectionHero
          title="Frequently Asked Questions"
          description="Based on our past conversions with others like you, we have compiled a list of popular questions and answers. You are of course more than welcome to contact us if you prefer."
        />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
