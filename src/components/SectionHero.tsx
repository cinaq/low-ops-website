import { capitalize } from '@/lib/utils';
import Link from 'next/link';
import { PiCaretRight } from 'react-icons/pi';

type TProps = {
  title: string;
};

const SectionHero = (props: TProps) => {
  const { title } = props;

  return (
    <section id="features" className="py-20 md:py-40 bg-primary/5">
      <div className="container flex flex-col items-center gap-2">
        <p className="text-[56px] font-medium">{capitalize(title)}</p>

        <div className="flex items-center justify-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <PiCaretRight size={14} />
          <span className="text-primary">{capitalize(title)}</span>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
