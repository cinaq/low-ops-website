import platformImage1 from '@/assets/platform1.jpg';
import platformImage3 from '@/assets/platform3.jpg';
import platformImage4 from '@/assets/platform4.jpg';

export const metadata = {
  title: 'Private App Platform',
  description: 'Internal developer platform that can solve all your problems',
};

export const items = [
  {
    title: 'Full featured application platform',
    description: `Low-Ops is a full featured application platform that can be used to build and deploy any web applications. It follows the best practices of platform engineering and is designed to be easy to use and maintain.`,
    imagePath: platformImage3,
  },
  {
    title: 'Low maintenance and operational cost',
    description: `Your scope of responsibility is reduced to managing the applications and data. You can focus on your core business and let Low-Ops handle the rest. A small team can manage hundreds of applications. No need for specialized roles like Devops, Platform engineers, or Cloud experts.`,
    imagePath: platformImage4,
  },
  {
    title: 'Deploy anywhere',
    description:
      'Low-Ops can be installed on in AWS, Azure, GCP or on-premises within 2 hours. Great for data sovereignty and compliance.',
    imagePath: platformImage1,
  },
];
