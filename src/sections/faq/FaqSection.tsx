import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/data/faq';

import React from 'react';

const FaqSection: React.FC = () => {
  // Renders
  const renderFaqItems = () => {
    return faq.map((item) => (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.description}</AccordionContent>
      </AccordionItem>
    ));
  };

  return (
    <section className="py-28">
      <div className="container flex flex-col items-center gap-20">
        <SectionTitle
          title="Frequently asked questions"
          description="All you need to know about our solution"
        />

        <Accordion type="single" collapsible className="w-full max-w-[700px]">
          {renderFaqItems()}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
