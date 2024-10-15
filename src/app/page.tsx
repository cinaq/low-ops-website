import Header from '@/components/header';
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
    </>
  );
};

export default Home;
