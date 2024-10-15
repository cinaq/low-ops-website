import Header from '@/components/header';
import FaqSection from '@/sections/faq/FaqSection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import HeroSection from '@/sections/hero/HeroSection';
import ProblemsSection from '@/sections/problems/ProblemsSection';
import TestimonialsSection from '@/sections/testimonials/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ProblemsSection />
      <FaqSection />
    </>
  );
};

export default Home;
