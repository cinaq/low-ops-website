import Reveal from '@/components/animations/Reveal';
import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import TopFeaturesSection from '@/sections/features/TopFeaturesSection';
import HeroSection from '@/sections/hero/HeroSection';
import StepsSection from '@/sections/hero/StepsSection';
import SolutionsSection from '@/sections/solutions/SolutionsSection';
import TestimonialsSection from '@/sections/testimonials/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Reveal y={0}>
          <HeroSection />
        </Reveal>
        <Reveal delay={0.05}>
          <StepsSection />
        </Reveal>
        <Reveal delay={0.08}>
          <SolutionsSection />
        </Reveal>
        <Reveal delay={0.1}>
          <TopFeaturesSection />
        </Reveal>
        <Reveal delay={0.12}>
          <TestimonialsSection />
        </Reveal>
        <Reveal delay={0.14}>
          <CTASection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

export default Home;
