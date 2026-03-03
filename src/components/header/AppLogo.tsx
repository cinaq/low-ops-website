import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const AppLogo: FC = () => {
  return (
    <Link href="/" className="w-[150px] relative aspect-5/2">
      <Image
        src={logo}
        alt="Low-Ops Platform"
        quality={100}
        fill
        priority
        sizes="140px"
        className="object-contain object-center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </Link>
  );
};

export default AppLogo;
