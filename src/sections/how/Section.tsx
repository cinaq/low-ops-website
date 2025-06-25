import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { items, metadata } from '@/data/how';

import React from 'react';

const Section: React.FC = () => {
  // Renders
  const renderItems = () => {
    return items.map((item) => (
      <Card key={item.title} className="flex flex-col gap-4 flex-1 mb-4">
        <div
          className="relative max-w-full w-full h-[250px] bg-cover bg-center bg-no-repeat rounded-t-xl"
          style={{ backgroundImage: `url(${item.imagePath.src})` }}
        />
        <div className="px-5 pt-4 pb-5">
          <h3 className="font-bold text-xl mb-2">{item.title}</h3>
          <p className="text-base text-muted-foreground">{item.description}</p>
        </div>
      </Card>
    ));
  };

  return (
    <section
      className="py-20 md:py-28 max-w-full overflow-hidden"
      id="problems"
    >
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          title={metadata.title}
          description={metadata.description}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
          {renderItems()}
        </div>
      </div>
    </section>
  );
};

export default Section;
