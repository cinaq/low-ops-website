import Link from 'next/link';
import { PiCaretRight } from 'react-icons/pi';

const SectionHero = () => {
  return (
    <section id="features" className="py-20 md:py-40 bg-primary/5">
      <div className="container flex flex-col items-center gap-2">
        <p className="text-[56px] font-medium">Features</p>

        <div className="flex items-center justify-center gap-1">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <PiCaretRight size={14} />
          <span className="text-primary">Features</span>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
