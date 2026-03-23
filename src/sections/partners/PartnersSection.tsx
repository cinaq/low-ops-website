import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { partnersData, partnersMetadata } from '@/data/partners';
import Image from 'next/image';

const PartnersSection = () => {
  const renderPartners = () => {
    return partnersData.map((partner) => (
      <Card
        key={partner.title}
        className="prose md:prose-md flex flex-col justify-between gap-4 bg-primary/2"
      >
        <Image
          src={partner.imagePath}
          alt={partner.title}
          width={230}
          // height={40}
        />
        <div className="flex flex-col gap-4">
          <h4>{partner.title}</h4>
          <p className="font-sans font-light text-sm">{partner.description}</p>
        </div>
      </Card>
    ));
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* <SectionTitle
          subtitle={partnersMetadata.subtitle}
          title={partnersMetadata.title}
          description={partnersMetadata.description}
          className="mb-10"
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {renderPartners()}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
