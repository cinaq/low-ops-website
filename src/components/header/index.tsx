import logo from '@/assets/logo.png';
import Image from 'next/image';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <Image src={logo} alt="lowops-logo" />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
