import logo from '@/assets/logo.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const SIZES = {
  default: 150,
  small: 130,
  medium: 150,
  large: 170,
};

type TProps = {
  size?: 'small' | 'medium' | 'large';
};

const AppLogo: FC<TProps> = (props) => {
  const { size } = props;
  const width = size ? SIZES[size as keyof typeof SIZES] : SIZES.default;

  return (
    <Link href="/" className={cn('relative block')}>
      <Image
        src={logo}
        alt="Low-Ops Platform"
        quality={100}
        width={width}
        className="object-contain h-auto m-0"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </Link>
  );
};

export default AppLogo;
