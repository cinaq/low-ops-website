import AppLogo from './AppLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <div className="container">
        <div className="w-full flex items-center justify-between py-6">
          <AppLogo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
