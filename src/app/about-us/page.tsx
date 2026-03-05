import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import AboutUsSection from '@/sections/about-us/AboutUsSection';
import CTASection from '@/sections/cta/CTASection';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero title="About Us" />
        <AboutUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
