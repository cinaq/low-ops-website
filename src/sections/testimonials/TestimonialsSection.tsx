import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container flex flex-col items-center gap-20">
        <SectionTitle
          title="Testimonials"
          description="Hear from our satisfied customers"
        />

        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;