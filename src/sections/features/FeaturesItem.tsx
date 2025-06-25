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
    <div className="flex flex-col items-center gap-3 md:gap-4 prose shadow-none group hover:shadow-md transition-all duration-300 rounded-lg p-4">
      <IconWrapper
        icon={icon}
        className="group-hover:rotate-6 transition-transform duration-500"
      />
      <h3 className="text-center leading-none text-xl">{title}</h3>
      <p className="text-center text-[14px] font-normal">{description}</p>
    </div>
  );
};

export default FeaturesItem;
