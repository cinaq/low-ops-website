'use client';

import { FC,  } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type TProps = {
  title: string;
  description: string;
  imagePath: StaticImageData;
  index: number;
};


const Item: FC<TProps> = (props) => {
  const { title, description, imagePath, index } = props;

  // Hooks
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const isEven = isDesktop ? index % 2 === 0 : true;


  return (
    <div
      className={cn(
        'flex prose items-stretch min-h-auto md:min-h-[520px] gap-0 md:gap-10',
        isEven ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div className="flex-1 flex flex-col justify-center gap-4 max-w-full md:max-w-1/2">
        <h3>{title}</h3>
        <p className="text-base font-light">{description}</p>

      </div>
      {isDesktop && (
        <div className="hidden md:block flex-1 relative">
          <motion.div
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={cn(
              'absolute inset-0',
              isEven ? '-mr-60' : '-ml-60'
            )}
          >
            <Image
              src={imagePath}
              alt={title}
              quality={100}
              className={cn(
                'm-0 object-cover rounded-xl',
                isEven ? 'object-left-top' : 'object-right-top'
              )}
              
              sizes="auto"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Item;
