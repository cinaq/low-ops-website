import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import HowSection from '@/sections/how/Section';
import FaqSection from '@/sections/faq/FaqSection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import HeroSection from '@/sections/hero/HeroSection';
import WhySection from '@/sections/why/Section';
import StartTrialSection from '@/sections/start-trial/StartTrialSection';
import TestimonialsSection from '@/sections/testimonials/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhySection />
      <HowSection />
      <TestimonialsSection />
      <FeaturesSection />
      <StartTrialSection />
      <FaqSection />
      <Footer />
      <Toaster />
    </>
  );
};

export default Home;
