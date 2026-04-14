'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import PartnersSection from '@/sections/partners/PartnersSection';

const PartnersPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero
          title="Partners"
          description="Together with our partners, we can help you build and deploy your applications faster and easier. Our partners are experts in their field and can help you with the installation and management of Low-Ops."
        />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PartnersPage;
