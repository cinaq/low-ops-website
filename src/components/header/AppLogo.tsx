import logoDark from '@/assets/logo-dark.svg';
import Image from 'next/image';

const AppLogo = () => {
  return (
    <a href="#hero" className="w-full max-w-[120px] relative aspect-[5/2]">
      <Image
        src={logoDark}
        alt="lowops-logo"
        quality={90}
        fill
        priority
        sizes="110px"
        className="object-contain object-center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </a>
  );
};

export default AppLogo;
