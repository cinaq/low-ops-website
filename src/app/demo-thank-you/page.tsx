import Footer from '@/components/footer';
import Header from '@/components/header';

const Page = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-screen w-full pt-[120px] pb-[40px]">
        <div className="container">
          <h1 className="text-3xl font-medium text-center mb-10">
            Thank you for your interest in our demo!
          </h1>
          <p className="text-center">
            We will be in touch with you shortly to schedule your demo.
          </p>
          <p className="text-center">
            If you have any questions, please contact us at{' '}
            <a href="mailto:low-ops@cinaq.com">low-ops@cinaq.com</a>.
          </p>
        </div>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default Page;
