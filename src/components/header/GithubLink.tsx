import { cn } from '@/lib/utils';
import { GitPullRequest } from '@untitled-ui/icons-react';


const GithubLink = () => {
  return (
    <a
      href="https://github.com/low-ops/"
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'text-white hover:text-blue-400 transition-colors font-medium text-base flex items-center gap-2 cursor-pointer',
        'hidden lg:flex'
      )}
    >
      Github
      <GitPullRequest width={16} height={16} />
    </a>
  );
};

export default GithubLink;
