import PricingComparisonTable from '@/components/LicenseComparisonTable';
import SectionTitle from '@/components/SectionTitle';

const PricingSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container flex flex-col items-center gap-12 lg:gap-20">
        <SectionTitle
          subtitle="Affordable Packages"
          title="Flexible options for every budget"
          description="We offer flexible and transparent pricing plans to help you choose the perfect fit for your needs. Whether you're just starting or looking to scale."
        />

        <PricingComparisonTable />
      </div>
    </section>
  );
};

export default PricingSection;
