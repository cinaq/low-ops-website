import quoteSvg from '@/assets/quote.svg';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
} from '@/components/ui/carousel';
import { testimonials } from '@/data/testimonials';
import { User01 } from '@untitled-ui/icons-react';
import Image from 'next/image';

const TestimonialsCarousel = () => {
  // Renders
  const renderItems = () => {
    return testimonials.map((testimonial, index) => (
      <CarouselItem key={index}>
        <div className="p-1 prose flex flex-col items-center select-none">
          <Image
            src={quoteSvg}
            alt="quote-icon"
            className="m-0 w-10 md:w-auto"
          />
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-500">
            {testimonial.text}
          </p>

          <div className="flex flex-col items-center">
            <Avatar className="mb-3">
              <AvatarFallback>
                <User01 width={28} height={28} className="text-gray-500" />
              </AvatarFallback>
            </Avatar>
            <p className="font-semibold m-0 text-base">{testimonial.author}</p>
            <p className="text-sm font-light m-0">{testimonial.company}</p>
          </div>
        </div>
      </CarouselItem>
    ));
  };

  return (
    <Carousel className="w-full relative">
      <CarouselContent>{renderItems()}</CarouselContent>
      <CarouselDot items={testimonials} />
    </Carousel>
  );
};

export default TestimonialsCarousel;
