import Footer from '@/components/footer';
import Header from '@/components/header';
import ContactSection from '@/sections/contact/ContactSection';
import FormSection from '@/sections/form/FormSection';

const ContactUsPage = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-[calc(100vh-108px)] sm:min-h-[100vh] w-full pt-[120px] pb-[40px]">
        <section id="contact-us" className="pt-8 pb-18">

      <FormSection />
      <ContactSection />
        </section>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default ContactUsPage;
