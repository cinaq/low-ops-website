import starsIcon from '@/assets/stars.svg';
import Image from 'next/image';

const Stars = () => {
  return (
    <Image
      src={starsIcon}
      alt="Low-Ops Platform"
      width={100}
      height={50}
      className="object-contain object-center"
    />
  );
};

export default Stars;
