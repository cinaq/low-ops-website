import Header from '@/components/header';
import FeaturesSection from '@/sections/features/FeaturesSection';
import HeroSection from '@/sections/hero/HeroSection';
import SolutionsSection from '@/sections/solutions/SolutionsSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
    </>
  );
};

export default Home;
