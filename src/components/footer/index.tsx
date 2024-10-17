import { socials } from '@/data/socials';
import Image from 'next/image';

const Footer = () => {
  // Renders
  const renderSocials = () => {
    return socials.map(({ alt, link, iconPath }) => (
      <a key={alt} href={link} target="_blank" rel="noopener noreferrer">
        <Image src={iconPath} alt={alt} />
      </a>
    ));
  };

  return (
    <footer className="w-full h-[108px] sm:h-[88px] flex items-center justify-center">
      <div className="container flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
        <span className="text-sm text-gray-500 font-light">
          © Copyright Low-Ops. All rights Reserved
        </span>
        <div className="flex items-center justify-end gap-6">
          {renderSocials()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
