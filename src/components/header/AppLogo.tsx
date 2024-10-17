import logo from '@/assets/logo.webp';
import Image from 'next/image';

const AppLogo = () => {
  return (
    <a href="#hero" className="w-full max-w-[110px] relative aspect-[5/2]">
      <Image
        src={logo}
        alt="lowops-logo"
        quality={90}
        fill
        priority
        sizes="110px"
        className="object-contain object-top"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </a>
  );
};

export default AppLogo;
