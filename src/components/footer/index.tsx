import linkedinIcon from '@/assets/linkedin.svg';
import xIcon from '@/assets/x.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full h-[108px] sm:h-[88px] flex items-center justify-center">
      <div className="container flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
        <span className="text-sm text-gray-500 font-light">
          © Copyright Low-Ops. All rights Reserved
        </span>
        <div className="flex items-center justify-end gap-6">
          <a
            href="https://x.com/cinaq_com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xIcon} alt="X (Twitter) icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/cinaq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
