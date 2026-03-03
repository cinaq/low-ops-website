import docsIcon from '@/assets/docs.svg';
import githubIcon from '@/assets/github2.svg';
import linkedinIcon from '@/assets/linkedin.svg';
import youtubeIcon from '@/assets/youtube.svg';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://docs.low-ops.com';

const socials = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/products/cinaq-lowops-platform/',
    icon: linkedinIcon,
    showInHeader: true,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/playlist?list=PLj6NKZ2fu4uoT_D2sZSJtbT4cjT2RCOyW',
    icon: youtubeIcon,
    showInHeader: false,
  },
  {
    name: 'github',
    link: 'https://github.com/low-ops/',
    icon: githubIcon,
    showInHeader: false,
  },
  {
    name: 'docs',
    link: DOCS_URL,
    icon: docsIcon,
    showInHeader: true,
  },
];

export default socials;
