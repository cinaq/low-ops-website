import { FC, ReactNode } from 'react';

type IProps = {
  icon: ReactNode;
};

const IconWrapper: FC<IProps> = (props) => {
  const { icon } = props;

  return (
    <span className="rounded-lg border-[1px] border-gray-200 flex items-center justify-center w-[48px] h-[48px] drop-shadow-sm">
      {icon}
    </span>
  );
};

export default IconWrapper;
