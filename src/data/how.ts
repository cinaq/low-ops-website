import architectureImage from '@/assets/architecture.jpg';
import responsibilitiesImage from '@/assets/responsibilities.jpg';

export const metadata = {
  title: 'App Platform Architecture',
  description:
    'We have built over 10+ enterprise platforms',
};

export const items = [
  {
    title: 'Full featured application platform',
    description:
    `Low-Ops is a full featured application platform that can be used to build and deploy any web applications. It follows the best practices of platform engineering and is designed to be easy to use and maintain. It can be installed on your existing infrastructure or on a new one within 2 hours`,
    imagePath: architectureImage,
  },
  {
    title: 'Low maintenance and operational cost',
    description:
    `Your scope of responsibility is reduced to managing the applications and data. You can focus on your core business and let Low-Ops handle the rest. A small team can manage hundreds of applications. No need for specialized roles like Devops, Platform engineering, or Cloud expertise.`,
    imagePath: responsibilitiesImage,
  },
];
