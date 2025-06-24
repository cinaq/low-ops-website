import SectionTitle from '@/components/SectionTitle';
import { items, metadata } from '@/data/how';
import Item from './Item';

import React from 'react';

const Section: React.FC = () => {
  // Renders
  const renderItems = () => {
    return items.map((item, index) => (
      <Item key={item.title} index={index} {...item} />
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
        <div className="flex flex-col gap-12 md:gap-20">{renderItems()}</div>
      </div>
    </section>
  );
};

export default Section;
