import begaImage from '@/assets/bega-lowops.png';
import viktorImage from '@/assets/viktor-lowops.png';
import xiwenImage from '@/assets/xiwen-lowops.png';

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 3,
    name: 'Bega Jumayev',
    position: 'Lead Developer',
    bio: 'Bega specializes in full stack development.',
    image: begaImage.src,
    social: {
      linkedin: 'https://www.linkedin.com/in/begmuhommet/',
      github: 'https://github.com/begmuhommet',
    },
  },
  {
    id: 2,
    name: 'Viktor Berlov',
    position: 'CTO & Co-founder',
    bio: 'Viktor leads our technical team with expertise in cloud architecture, platform engineering, and DevOps practices.',
    image: viktorImage.src,
    social: {
      linkedin: 'https://www.linkedin.com/in/viktor-berlov-728ba9110/',
      github: 'https://github.com/vktrbrlv',
    },
  },
  {
    id: 1,
    name: 'Steven (Xiwen) Cheng',
    position: 'CEO & Founder',
    bio: 'Steven has over 20 years of experience in software development and cloud infrastructure.',
    image: xiwenImage.src,
    social: {
      linkedin: 'https://linkedin.com/in/xiwen',
      github: 'https://github.com/xiwenc',
    },
  },
];
