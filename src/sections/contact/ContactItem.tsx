import React, { ReactNode } from 'react';

interface TProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: ReactNode;
}

const ContactItem: React.FC<TProps> = (props) => {
  const { title, description, link, linkText, icon } = props;

  return (
    <div className="w-full rounded-lg bg-gray-50 p-8 flex flex-col items-center justify-center gap-2 prose flex-1 text-center">
      <span className="w-[48px] h-[48px] flex items-center justify-center bg-blue-500 rounded-xl mb-4 text-white">
        {icon}
      </span>
      <h3 className="text-lg">{title}</h3>
      <p className="m-0 text-base font-light">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 no-underline hover:underline text-base font-normal"
      >
        {linkText}
      </a>
    </div>
  );
};

export default ContactItem;
