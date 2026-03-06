import starsIcon from '@/assets/stars.svg';
import Image from 'next/image';

const Stars = () => {
  return (
    <Image
      src={starsIcon}
      alt="Low-Ops Platform"
      width={100}
      className="object-contain object-center h-auto"
    />
  );
};

export default Stars;
