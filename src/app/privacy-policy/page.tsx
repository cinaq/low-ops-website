import Footer from '@/components/footer';
import Header from '@/components/header';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-screen w-full pt-[120px] pb-[40px]">
        <div className="container">
          <h1 className="text-3xl font-medium text-center mb-10">
            Privacy Policy
          </h1>
          
          <div className="max-w-4xl mx-auto prose prose-gray">
            <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Introduction</h2>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. 
                Please read this Privacy Policy carefully. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Information We Collect</h2>
              <p>We may collect information about you in various ways, including:</p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide.</li>
                <li><strong>Usage Data:</strong> Information on how you access and use our service, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our service and hold certain information.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our service</li>
                <li>Notify you about changes to our service</li>
                <li>Allow you to participate in interactive features when you choose to do so</li>
                <li>Provide customer support</li>
                <li>Monitor the usage of our service</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Disclosure of Your Information</h2>
              <p>We may disclose your information in the following situations:</p>
              <ul>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale of company assets, financing, or acquisition.</li>
                <li><strong>With Affiliates:</strong> With our parent company, subsidiaries, joint ventures, or other companies under common control.</li>
                <li><strong>With Business Partners:</strong> With trusted business partners to provide certain services or conduct business operations.</li>
                <li><strong>With Your Consent:</strong> With your consent or at your direction.</li>
                <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Your Data Protection Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification if your information is inaccurate or incomplete</li>
                <li>The right to object to our processing of your personal data</li>
                <li>The right to request restriction of processing your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Children's Privacy</h2>
              <p>
                Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
                If we discover that a child under 13 has provided us with personal information, we will delete such information from our servers immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@example.com<br />
                <strong>Address:</strong> 123 Privacy Street, Tech City, TC 12345
              </p>
            </section>
          </div>

        </div>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default PrivacyPolicyPage;
