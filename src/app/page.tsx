import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import ContactSection from '@/sections/contact/ContactSection';
import FaqSection from '@/sections/faq/FaqSection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import FormSection from '@/sections/form/FormSection';
import HeroSection from '@/sections/hero/HeroSection';
import ProblemsSection from '@/sections/problems/ProblemsSection';
import StartTrialSection from '@/sections/start-trial/StartTrialSection';
import TestimonialsSection from '@/sections/testimonials/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <StartTrialSection />
      <FaqSection />
      <FormSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </>
  );
};

export default Home;
