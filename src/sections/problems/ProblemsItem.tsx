'use client';

import IconWrapper from '@/components/IconWrapper';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { CheckCircle } from '@untitled-ui/icons-react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';

type TProps = {
  title: string;
  description: string;
  imagePath: StaticImageData;
  icon: ReactNode;
  solutions: string[];
  index: number;
};

const ProblemsItem: FC<TProps> = (props) => {
  const { title, description, imagePath, icon, solutions, index } = props;

  // Hooks
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const isEven = isDesktop ? index % 2 === 0 : true;

  // Renders
  const renderSolutions = () => {
    return solutions.map((item) => (
      <li key={item} className="flex gap-2">
        <CheckCircle className="text-blue-500 leading-none w-auto mt-0.5" />
        <span className="flex-1 text-base font-light">{item}</span>
      </li>
    ));
  };

  return (
    <div
      className={cn(
        'flex prose items-stretch min-h-auto md:min-h-[520px] gap-0 md:gap-10',
        isEven ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div className="flex-1 flex flex-col justify-center gap-4 max-w-full md:max-w-1/2">
        <IconWrapper icon={icon} />
        <h3>{title}</h3>
        <p className="text-base font-light">{description}</p>
        <ul className="flex flex-col p-0 m-0 gap-2 md:gap-4">
          {renderSolutions()}
        </ul>
      </div>
      {isDesktop && (
        <div className="hidden md:block flex-1 relative">
          <motion.div
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={cn(
              'absolute inset-0 border-6 border-black rounded-xl',
              isEven ? '-mr-60' : '-ml-60'
            )}
          >
            <Image
              src={imagePath}
              alt="lowops-portal"
              quality={80}
              className={cn(
                'm-0 object-cover rounded-xl',
                isEven ? 'object-left-top' : 'object-right-top'
              )}
              fill
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

export default ProblemsItem;
