import Divider from '@/components/Divider';
import Header from '@/components/header';
import ContactSection from '@/sections/contact/ContactSection';
import FaqSection from '@/sections/faq/FaqSection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import FormSection from '@/sections/form/FormSection';
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
      <Divider />
      <FaqSection />
      <Divider />
      <ContactSection />
      <FormSection />
    </>
  );
};

export default Home;
