import SectionTitle from '@/components/SectionTitle';
import Stars from '@/components/Stars';
import React from 'react';

const TESTIMONIAL_CARDS = [
  {
    nameOrCompany: 'Media Enterprise',
    role: 'Platform Product Owner',
    quote:
      "The Low-Ops platform has given us the control and flexibility we needed. The cost savings and improved deployment processes have been significant advantages for our team. We're looking forward to further enhancements, particularly in areas like automated testing and reporting capabilities.",
  },
  {
    nameOrCompany: 'Emile Wegner',
    role: 'Managing Director',
    quote:
      'For me the magic of low-ops is that us as a regulated financial services business are able to host mendix effortlessly in our own cloud and create unlimited instances for our white label clients in minutes at the push of a button.',
  },
  {
    nameOrCompany: 'Startup',
    role: 'Technical Director',
    quote:
      'We benefitted of more freedom, direct access to the dev team, and a flexible setup for running your own infrastructure.',
  },
];

const TestimonialsSection: React.FC = () => {
  const renderTestimonials = () => {
    return TESTIMONIAL_CARDS.map((card) => (
      <article
        key={card.nameOrCompany}
        className="rounded-lg border px-6 py-8 flex flex-col gap-6 border-primary/20 prose bg-[linear-gradient(to_bottom_left,hsl(var(--primary)/0.2)_0%,hsl(var(--primary)/0)_33%,hsl(var(--primary)/0)_80%,hsl(var(--primary)/0.1)_100%)] break-inside-avoid mb-6"
      >
        <div className="flex flex-col gap-1">
          <h5>{card.nameOrCompany}</h5>
          <p className="font-sans text-sm">{card.role}</p>
        </div>
        <div className="border-b border-dashed border-neutral-200" />
        <p className="text-lg font-sans font-light">{card.quote}</p>
        <Stars />
      </article>
    ));
  };

  return (
    <section className="py-20 md:py-28" id="testimonials">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Testimonials"
          title="Success Stories From Our Valued Clients"
          description="Our mission is to provide businesses with the tools they need to succeed. But don't just take our word for it—hear from the companies."
        />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-x-6 w-full max-w-6xl mx-auto">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
