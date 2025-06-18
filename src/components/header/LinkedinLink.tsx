import { cn } from '@/lib/utils';
import { Paperclip } from '@untitled-ui/icons-react';


const LinkedinLink = () => {
  return (
    <a
      href="https://www.linkedin.com/products/cinaq-lowops-platform/"
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'text-white hover:text-blue-400 transition-colors font-medium text-base flex items-center gap-2 cursor-pointer',
        'hidden lg:flex'
      )}
    >
      LinkedIn
      <Paperclip width={16} height={16} />
    </a>
  );
};

export default LinkedinLink;
