import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData, faqMetadata } from '@/data/faq';
import React from 'react';
import { PiMinusBold, PiPlusBold } from 'react-icons/pi';

const FaqSection: React.FC = () => {
  const renderFaqItems = () => {
    return faqData.map((item) => (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border border-primary/20 rounded-lg bg-primary/5 font-sans text-lg font-medium group-data-[state=open]:bg-primary prose"
      >
        <AccordionTrigger
          hideDefaultIcon
          className="rounded-t-lg px-6 py-3.5 hover:opacity-100 data-[state=open]:text-white data-[state=open]:bg-primary"
        >
          <span className="group-data-[state=open]:text-white text-lg">
            {item.title}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary group-data-[state=open]:bg-white">
            <PiPlusBold
              size={15}
              className="text-white block group-data-[state=open]:hidden"
            />
            <PiMinusBold
              size={15}
              className="text-primary hidden group-data-[state=open]:block"
            />
          </span>
        </AccordionTrigger>
        <AccordionContent className="bg-primary px-6 pb-4 text-white text-sm font-light font-sans leading-relaxed rounded-b-lg">
          <div className="border-t-[0.5px] border-dashed h-4" />
          {item.description}
        </AccordionContent>
      </AccordionItem>
    ));
  };

  return (
    <section className="py-20 md:py-28" id="faq">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle={faqMetadata.subtitle}
          title={faqMetadata.title}
          description={faqMetadata.description}
        />

        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
        >
          {renderFaqItems()}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
