import Footer from '@/components/footer';
import Header from '@/components/header';
import LicenseComparisonTable from '@/components/LicenseComparisonTable';
import PricingCard from '@/components/PricingCard';
import SectionTitle from '@/components/SectionTitle';
import { plans } from '@/data/plans';

const PricingPage = () => {
  // Renders
  const renderPlans = () => {
    return plans.map((plan) => <PricingCard key={plan.value} plan={plan} />);
  };

  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-[calc(100vh-108px)] sm:min-h-[calc(100vh-68px)] w-full pt-[120px] pb-[40px]">
        <section id="pricing" className="pt-8 pb-18">
          <div className="container">
            <SectionTitle
              description="Licenses for all sizes"
              className="mb-15"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderPlans()}
            </div>
          </div>
        </section>

        <section id="compare" className="py-18">
          <div className="container">
            <SectionTitle description="Compare licenses" className="mb-15" />
            <LicenseComparisonTable />
          </div>
        </section>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default PricingPage;
