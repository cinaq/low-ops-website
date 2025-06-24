import SectionTitle from '@/components/SectionTitle';
import { contactInfo } from '@/data/contactInfo';
import React from 'react';
import ContactItem from './ContactItem';

const ContactSection: React.FC = () => {
  // Renders
  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle title="Contact" description="Our contact information" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full prose">
          <ContactItem {...contactInfo[0]} />
          <ContactItem {...contactInfo[1]} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
