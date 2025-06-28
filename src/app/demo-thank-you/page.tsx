import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';
import profileSteven from '@/assets/xiwen.png';

const Page = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-screen w-full pt-[120px] pb-[40px]">
        <div className="container">
          <div className="relative w-full h-64 flex items-center justify-center">
            <div className="rounded-full overflow-hidden h-48 w-48 relative">
              <Image
                src={profileSteven.src}
                alt="Steven (Xiwen) Cheng, CEO & Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <h1 className="text-3xl font-medium text-center mb-10">
            Thank you for your interest in our demo!
          </h1>
          <p className="text-center">
            We will be in touch with you shortly to schedule your demo.
          </p>
          <p className="text-center">
            If you have any questions, please contact me at{' '}
            <a href="mailto:steven@cinaq.com">steven@cinaq.com</a>.
          </p>
          <p className="text-center text-sm py-4">
            Steven
          </p>
        </div>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default Page;
