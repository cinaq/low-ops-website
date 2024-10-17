import IconWrapper from '@/components/IconWrapper';
import { FC, ReactNode } from 'react';

type TProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const FeaturesItem: FC<TProps> = (props) => {
  const { title, description, icon } = props;

  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 prose group">
      <IconWrapper
        icon={icon}
        className="group-hover:rotate-6 transition-transform duration-500"
      />
      <h3 className="text-center leading-none text-xl">{title}</h3>
      <p className="text-center text-base font-light">{description}</p>
    </div>
  );
};

export default FeaturesItem;
