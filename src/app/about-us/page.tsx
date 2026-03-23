import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import AboutUsSection from '@/sections/about-us/AboutUsSection';
import CTASection from '@/sections/cta/CTASection';
import aboutUsImage from '@/assets/header-about.jpg';

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero title="About Us" description="Learn more about our team and our mission." image={aboutUsImage.src} />
        <AboutUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
