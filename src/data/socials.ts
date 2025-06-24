import docsIcon from '@/assets/docs.svg';
import githubIcon from '@/assets/github.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import youtubeIcon from '@/assets/youtube.svg';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://docs.low-ops.com';

const socials = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/products/cinaq-lowops-platform/',
    icon: linkedinIcon,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/playlist?list=PLj6NKZ2fu4uoT_D2sZSJtbT4cjT2RCOyW',
    icon: youtubeIcon,
  },
  { name: 'github', link: 'https://github.com/low-ops/', icon: githubIcon },
  { name: 'docs', link: DOCS_URL, icon: docsIcon },
];

export default socials;
