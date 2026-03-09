import { capitalize } from '@/lib/utils';
import Link from 'next/link';
import { PiCaretRight } from 'react-icons/pi';
import FirstDecoration from './FirstDecoration';
import SecondDecoration from './SecondDecortion';

type TProps = {
  title: string;
};

const SectionHero = (props: TProps) => {
  const { title } = props;

  return (
    <section
      id="features"
      className="pt-30 pb-20 md:pt-40 md:pb-40 bg-primary/5"
    >
      <div className="container flex flex-col items-center gap-2 relative">
        <p className="text-[56px] font-medium">{capitalize(title)}</p>

        <div className="flex items-center justify-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <PiCaretRight size={14} />
          <span className="text-primary">{capitalize(title)}</span>
        </div>

        <div className="absolute -top-10 left-10">
          <FirstDecoration />
        </div>
        <div className="absolute top-2 right-10">
          <SecondDecoration />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
