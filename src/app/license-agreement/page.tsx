import Footer from '@/components/footer';
import Header from '@/components/header';

const LicenseAgreementPage = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-screen w-full pt-[120px] pb-[40px]">
        <div className="container">
          <h1 className="text-3xl font-medium text-center mb-10">
            Low-Ops License Agreement
          </h1>

          <h6 className="text-xl font-bold mb-2">1. Acceptance of Terms</h6>
          <p className="mb-8 font-normal text-base">
            By accessing and using LowOps Portal (the &apos;Service&apos;), you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions. If you do not agree to these terms,
            please do not use the Service. We reserve the right to modify these
            terms at any time, and such modifications shall be effective
            immediately upon posting on the Service. Your continued use of the
            Service following any modifications indicates your acceptance of the
            modified terms.
          </p>

          <h6 className="text-xl font-bold mb-2">
            2. License Usage and Restrictions
          </h6>
          <p className="mb-3 font-normal text-base">
            2.1. The license key provided is for use on a single domain only.
            You may not transfer, sell, lease, rent, share, or otherwise make
            available your license key to any third parties.
          </p>
          <p className="mb-3 font-normal text-base">
            2.2. You agree not to modify, reverse engineer, decompile, or
            attempt to extract the source code of the Service or any part
            thereof.
          </p>
          <p className="mb-3 font-normal text-base">
            2.3. You shall not use the Service for any illegal or unauthorized
            purpose nor may you, in the use of the Service, violate any laws in
            your jurisdiction.
          </p>
          <p className="mb-8 font-normal text-base">
            2.4. Multiple installations or usage on different domains requires
            separate license purchases.
          </p>

          <h6 className="text-xl font-bold mb-2">
            3. User Responsibilities and Account Security
          </h6>
          <p className="mb-3 font-normal text-base">
            3.1. You are responsible for maintaining the confidentiality of your
            license key and account information.
          </p>
          <p className="mb-3 font-normal text-base">
            3.2. You are responsible for all activities that occur under your
            account or license key.
          </p>
          <p className="mb-3 font-normal text-base">
            3.3. You must immediately notify us of any unauthorized use of your
            account or any other breach of security.
          </p>
          <p className="mb-8 font-normal text-base">
            3.4. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>

          <h6 className="text-xl font-bold mb-2">
            4. Service Availability and Updates
          </h6>
          <p className="mb-8 font-normal text-base">
            4.1. While we strive to provide uninterrupted service, we do not
            guarantee that the service will be available at all times. We may
            experience hardware, software, or other problems resulting in
            interruptions, delays, or errors.
          </p>
          <h6 className="text-xl font-bold mb-2">
            4.2. We reserve the right to modify, suspend, or discontinue the
            Service at any time with or without notice.
          </h6>
          <p className="mb-8 font-normal text-base">
            4.3. We may perform maintenance or updates that could cause
            temporary interruptions to the Service.
          </p>

          <h6 className="text-xl font-bold mb-2">
            5. Privacy and Data Protection
          </h6>
          <p className="mb-3 font-normal text-base">
            5.1. Your use of LowOps Portal is also governed by our Privacy
            Policy, which is incorporated into these Terms by reference.
          </p>
          <p className="mb-3 font-normal text-base">
            5.2. We collect and process personal data in accordance with our
            Privacy Policy and applicable data protection laws.
          </p>
          <p className="mb-8 font-normal text-base">
            5.3. You retain all rights to your data. We will not share or sell
            your personal information to third parties except as described in
            our Privacy Policy.
          </p>

          <h6 className="text-xl font-bold mb-2">
            6. Intellectual Property Rights
          </h6>
          <p className="mb-3 font-normal text-base">
            6.1. The Service and its original content, features, and
            functionality are owned by LowOps and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property laws.
          </p>
          <p className="mb-8 font-normal text-base">
            6.2. You may not copy, modify, create derivative works of, publicly
            display, publicly perform, republish, download, store, or transmit
            any materials from the Service without our explicit consent.
          </p>

          <h6 className="text-xl font-bold mb-2">7. Limitation of Liability</h6>
          <p className="mb-3 font-normal text-base">
            7.1. In no event shall LowOps, its directors, employees, partners,
            agents, suppliers, or affiliates be liable for any indirect,
            incidental, special, consequential, or punitive damages.
          </p>
          <p className="mb-8 font-normal text-base">
            7.2. Our liability is limited to the maximum extent permitted by law
            and shall not exceed the amount paid by you, if any, for accessing
            the Service.
          </p>

          <h6 className="text-xl font-bold mb-2">8. Termination</h6>
          <p className="mb-3 font-normal text-base">
            8.1. We may terminate or suspend your access to the Service
            immediately, without prior notice or liability, for any reason.
          </p>
          <p className="mb-8 font-normal text-base">
            8.2. Upon termination, your right to use the Service will
            immediately cease.
          </p>

          <h6 className="text-xl font-bold mb-2">9. Governing Law</h6>
          <p className="mb-8 font-normal text-base">
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction], without regard to its conflict of
            law provisions.
          </p>

          <h6 className="text-xl font-bold mb-2">10. Contact Information</h6>
          <p className="mb-3 font-normal text-base">
            For any questions about these Terms, please contact us at
            [contact@email.com].
          </p>
        </div>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default LicenseAgreementPage;
