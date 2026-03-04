import {
  PiFileDocLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiYoutubeLogoLight,
} from 'react-icons/pi';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://docs.low-ops.com';

const socials = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/products/cinaq-lowops-platform/',
    icon: (size?: number) => PiLinkedinLogoLight({ size: size ?? 26 }),
    showInHeader: true,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/playlist?list=PLj6NKZ2fu4uoT_D2sZSJtbT4cjT2RCOyW',
    icon: (size?: number) => PiYoutubeLogoLight({ size: size ?? 26 }),
    showInHeader: false,
  },
  {
    name: 'github',
    link: 'https://github.com/low-ops/',
    icon: (size?: number) => PiGithubLogoLight({ size: size ?? 26 }),
    showInHeader: false,
  },
  {
    name: 'docs',
    link: DOCS_URL,
    icon: (size?: number) => PiFileDocLight({ size: size ?? 26 }),
    showInHeader: true,
  },
];

export default socials;
