import { capitalize } from '@/lib/utils';
import GradientBg from './GradientBg';

type TProps = {
  title: string;
  description: string;
};

const SectionHero = (props: TProps) => {
  const { title, description } = props;

  return (
    <section
      id={title}
      className="relative py-20 md:py-30 bg-primary/5 bg-cover bg-center bg-no-repeat"
    >
      <GradientBg />
      <div className="container relative z-10 flex flex-col items-center gap-2">
        <p className="text-[56px] font-medium text-white">
          {capitalize(title)}
        </p>

        <div className="flex items-center justify-center gap-1 text-white/70 font-light max-w-2xl text-center">
          {description}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
