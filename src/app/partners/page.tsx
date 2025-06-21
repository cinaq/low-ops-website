'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionTitle from '@/components/SectionTitle';
import { items, metadata } from '@/data/partners';
import { FC } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type TProps = {
  title: string;
  description: string;
  imagePath: StaticImageData;
  index: number;
};

const Item: FC<TProps> = (props) => {
  const { title, description, imagePath, index, link } = props;

  // Hooks
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const isEven = isDesktop ? index % 2 === 0 : true;


  return (
    <div
      className={cn(
        'flex prose items-stretch min-h-auto gap-0 md:gap-10',
        'flex-row-reverse'
      )}
    >
      <div className="flex-1 flex flex-col justify-center gap-4 max-w-full md:max-w-1/2">
        <a href={link} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
        <p className="text-base font-light">{description}</p>
      </div>
      {isDesktop && (
        <div className="hidden md:block flex-1 relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={cn(
              'absolute inset-0',
            )}
          >
            <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
              <Image
                src={imagePath}
                alt={title}
                quality={100}
                className={cn(
                  'm-0 object-cover rounded-xl',
                  'object-right-top'
                )}

                sizes="auto"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const renderItems = () => {
  return items.map((item, index) => (
    <Item key={item.title} index={index} {...item} />
  ));
};

const Page = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-[calc(100vh-108px)] sm:min-h-[100vh] w-full pt-[120px] pb-[40px]">

        <section
          className="py-20 md:py-28 max-w-full overflow-hidden"
          id={metadata.title}
        >
          <div className="container flex flex-col items-center gap-12 md:gap-20">
            <SectionTitle
              title={metadata.title}
              description={metadata.description}
            />
            <div className="flex flex-col gap-12 md:gap-20">{renderItems()}</div>
          </div>
        </section>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default Page;
