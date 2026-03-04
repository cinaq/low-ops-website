import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import HeroSection from '@/sections/hero/HeroSection';
import SolutionsSection from '@/sections/solutions/SolutionsSection';
import TestimonialsSection from '@/sections/testimonials/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
