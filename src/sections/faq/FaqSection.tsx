import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faq } from '@/data/faq';

import React from 'react';

const FaqSection: React.FC = () => {
  // Renders
  const renderFaqItems = () => {
    return faq.map((item) => (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
        <AccordionContent>{item.description}</AccordionContent>
      </AccordionItem>
    ));
  };

  return (
    <section className="py-28">
      <div className="container flex flex-col items-center gap-20 border-gray-100">
        <SectionTitle
          title="Frequently asked questions"
          description="All you need to know about our solution"
        />

        <Accordion type="single" collapsible className="w-full max-w-[700px]">
          {renderFaqItems()}
        </Accordion>

        <div className="w-full rounded-lg bg-gray-50 p-8 flex flex-col items-center justify-center gap-2 prose">
          <h4 className="text-lg">Still have questions?</h4>
          <p className="font-light text-sm">
            Can’t find the answer you’re looking for?
          </p>
          <Button className="w-fit" size="default">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
