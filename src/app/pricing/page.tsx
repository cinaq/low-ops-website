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
              description="Packages for all sizes"
              className="mb-2"
            />
            <p className="text-center text-gray-500 font-normal text-md mb-20">
              Simple, transparent pricing that grows with you.
            </p>
            <LicenseComparisonTable />
          </div>
        </section>
        <section className="py-10">
          <div className="container">
            <SectionTitle description="Packages" className="mb-4" />
            <p className="text-gray-700 font-normal text-md mb-4">
              We have three packages that can be selected from:{' '}
              <strong>Starter</strong>, <strong>Professional</strong> and{' '}
              <strong>Enterprise</strong>. Starter package is perfect to get a
              feeling for Low-Ops or if you are a startup. It will supercharge
              your small team to focus on building apps. Professional and
              Enterprise should be used when high availability and scalability
              are critical to your organization.
            </p>
            <p className="text-gray-700 font-normal text-md">
              Do note that above pricing grants you the right to use Low-Ops as
              a single instance within your organization. The cost is calculated
              at the end of each year based on actual usage with a minimum if
              applicable. Installation and Support services must be purchased
              separately if desired. All infrastructure cost is not included in
              Low-Ops as that depends on your actual usage. Low-Ops runs on the
              infrastructure that you provide.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="container">
            <SectionTitle description="Low-Ops Pricing" className="mb-4" />
            <p className="text-gray-700 font-normal text-md">
              The value Low-Ops brings to organizations is substantial. Missed
              business opportunities due to teams that are unable to deliver on
              time, or at all, are costly. Building and maintaining a fully
              custom platform also requires significant investment. Our pricing
              model is simple and based on the size of your infrastructure,
              which we believe reflects your success with Low-Ops.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="container">
            <SectionTitle description="Subscription Model" className="mb-4" />
            <p className="text-gray-700 font-normal text-md mb-4">
              The foundation of our pricing model is a subscription service.
              This subscription grants access to new platform versions that
              include new features, bug fixes, and security fixes, as well as
              coverage for platform defects (not feature requests).
            </p>
            <p className="text-gray-700 font-normal text-md">
              Feature requests can be submitted to the product management team
              for consideration to be added to the roadmap. However, Low-Ops is
              used by many organizations, so no guarantees can be made regarding
              specific requests. The team is committed to maintaining the scope
              and quality of the platform.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="container">
            <SectionTitle description="Support contract" className="mb-4" />
            <p className="text-gray-700 font-normal text-md mb-4">
              In case you still need customizations related to your specific
              situation, our technical support team accommodates these for you.
              Examples are but not limited to installation, configuration,
              troubleshooting and training.
            </p>
          </div>
        </section>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default PricingPage;
