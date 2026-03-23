import { capitalize } from '@/lib/utils';
import Link from 'next/link';
import { PiCaretRight } from 'react-icons/pi';
import FirstDecoration from './FirstDecoration';
import SecondDecoration from './SecondDecortion';

type TProps = {
  title: string;
  description: string;
  image: string;
};

const SectionHero = (props: TProps) => {
  const { title, description, image } = props;

  return (
    <section
      id={title}
      className="relative pt-30 pb-20 md:pt-40 md:pb-40 bg-primary/5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-white/80" />
      <div className="container relative z-10 flex flex-col items-center gap-2">
        <p className="text-[56px] font-medium">{capitalize(title)}</p>

        <div className="flex items-center justify-center gap-1">
          {description}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
