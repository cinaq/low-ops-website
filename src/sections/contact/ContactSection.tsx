import SectionTitle from '@/components/SectionTitle';

import { contact } from '@/data/contact';
import React from 'react';
import ContactItem from './ContactItem';

const ContactSection: React.FC = () => {
  // Renders
  return (
    <section className="py-28" id="contact">
      <div className="container flex flex-col items-center gap-20">
        <SectionTitle title="Contact" description="Our contact information" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full prose">
          <ContactItem {...contact[0]} />
          <ContactItem {...contact[1]} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
