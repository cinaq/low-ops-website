import logoDark from '@/assets/logo-dark.svg';
import logoLight from '@/assets/logo-light.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type TProps = {
  isDark?: boolean;
};

const AppLogo: FC<TProps> = (props) => {
  const { isDark = false } = props;

  const logo = isDark ? logoDark : logoLight;

  return (
    <Link href="/" className="w-[130px] relative aspect-5/2">
      <Image
        src={logo}
        alt="Low-Ops Platform"
        quality={90}
        fill
        priority
        sizes="130px"
        className="object-contain object-center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </Link>
  );
};

export default AppLogo;
