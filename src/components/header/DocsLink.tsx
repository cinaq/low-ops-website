import { cn } from '@/lib/utils';
import { LinkExternal02 } from '@untitled-ui/icons-react';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://docs.low-ops.com';

const DocsLink = () => {
  return (
    <a
      href={DOCS_URL}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'text-white hover:text-blue-400 transition-colors font-medium text-base flex items-center gap-2 cursor-pointer',
        'hidden lg:flex'
      )}
    >
      Docs
      <LinkExternal02 width={16} height={16} />
    </a>
  );
};

export default DocsLink;
