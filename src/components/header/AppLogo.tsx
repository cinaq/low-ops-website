import logo from '@/assets/logo.webp';
import Image from 'next/image';

const AppLogo = () => {
  return (
    <a href="#hero">
      <Image src={logo} alt="lowops-logo" width={110} height={32} />
    </a>
  );
};

export default AppLogo;
