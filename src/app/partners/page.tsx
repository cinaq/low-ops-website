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
        <SectionHero title="Partners" />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PartnersPage;
