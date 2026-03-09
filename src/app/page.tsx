import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import TopFeaturesSection from '@/sections/features/TopFeaturesSection';
import HeroSection from '@/sections/hero/HeroSection';
import SolutionsSection from '@/sections/solutions/SolutionsSection';
import TestimonialsSection from '@/sections/testimonials/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <TopFeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
