import { FC } from 'react';

type TProps = {
  title?: string;
  description: string;
};

const SectionTitle: FC<TProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="prose md:prose-md">
      {!!title && <h2 className="text-center text-blue-500">{title}</h2>}
      <p className="text-center text-3xl md:text-4xl font-semibold leading-[32px] md:leading-[44px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
