import comotionImage from '@/assets/logo_comotion.png';
import inntelligenceImage from '@/assets/logo_inntelligence.png';
import lowcodelabsImage from '@/assets/logo_lowcodelabs.png';

export const metadata = {
  title: 'Partners',
  description:
    'Together with our partners, we can help you build and deploy your applications faster and easier. Our partners are experts in their field and can help you with the implementation and customization of Low-Ops.',
};

export const items = [
  {
    title: 'Comotion',
    description:
    `Comotion is based in South Africa. They are certified in both Mendix app development and Low-Ops implementation.`,
    imagePath: comotionImage,
    link: 'https://www.comotion.us/',
  },
  {
    title: 'Lowcode Labs',
    description:
    `Lowcode Labs is based in India. They are experts in Mendix development and Low-Ops implementation.`,
    imagePath: lowcodelabsImage,
    link: 'https://lowcodelabs.in/',
  },
  {
    title: 'Inntelligence AI',
    description:
    `Inntelligence AI platform enables you to build custom AI workflows and agents for your business. All fully integrated within Low-Ops for a scalable and low maintenance.`,
    imagePath: inntelligenceImage,
    link: 'https://inntelligence.nl/',
  },
];
