import Footer from '@/components/footer';
import Header from '@/components/header';
import LicenseComparisonTable from '@/components/LicenseComparisonTable';
import SectionTitle from '@/components/SectionTitle';

const PricingPage = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-[calc(100vh-108px)] sm:min-h-[100vh] w-full pt-[120px] pb-[40px]">
        <section id="pricing" className="pt-8 pb-18">
          <div className="container">
            <SectionTitle
              title="Pricing"
              description="Licenses for all sizes"
              className="mb-2"
            />
            <p className="text-center text-gray-500 font-normal text-md mb-20">
              Prices reflect a 12-month subscription period.
            </p>
            <LicenseComparisonTable />
          </div>
        </section>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default PricingPage;
