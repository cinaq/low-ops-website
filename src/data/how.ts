<<<<<<< HEAD
import deployScreen from '@/assets/deploy-drawing.png';
import environmentsScreen from '@/assets/environments-screen.png';
import packageOverviewScreen from '@/assets/package-overview.png';

export const metadata = {
  title: 'Private App Platform',
  description: '',
=======
import architectureImage from '@/assets/architecture.jpg';
import responsibilitiesImage from '@/assets/responsibilities.jpg';
import deployImage from '@/assets/overview.png';

export const metadata = {
  title: 'Private App Platform',
  description: ''
>>>>>>> a68a8f911c4d103ad221b3ef38c449f1e04adc19
};

export const items = [
  {
    title: 'Full featured application platform',
<<<<<<< HEAD
    description: `Low-Ops is a full featured application platform that can be used to build and deploy any web applications. It follows the best practices of platform engineering and is designed to be easy to use and maintain.`,
    imagePath: packageOverviewScreen,
  },
  {
    title: 'Low maintenance and operational cost',
    description: `Your scope of responsibility is reduced to managing the applications and data. You can focus on your core business and let Low-Ops handle the rest. A small team can manage hundreds of applications. No need for specialized roles like Devops, Platform engineers, or Cloud experts.`,
    imagePath: environmentsScreen,
  },
  {
    title: 'Deploy anywhere',
    description:
      'Low-Ops can be installed on in AWS, Azure, GCP or on-premises within 2 hours. Great for data sovereignty and compliance.',
    imagePath: deployScreen,
  },
=======
    description:
    `Low-Ops is a full featured application platform that can be used to build and deploy any web applications. It follows the best practices of platform engineering and is designed to be easy to use and maintain.`,
    imagePath: architectureImage,
  },
  {
    title: 'Low maintenance and operational cost',
    description:
    `Your scope of responsibility is reduced to managing the applications and data. You can focus on your core business and let Low-Ops handle the rest. A small team can manage hundreds of applications. No need for specialized roles like Devops, Platform engineers, or Cloud experts.`,
    imagePath: responsibilitiesImage,
  },
  {
    title: 'Deploy anywhere',
    description: 'Low-Ops can be installed on in AWS, Azure, GCP or on-premises within 2 hours. Great for data sovereignty and compliance.',
    imagePath: deployImage,
  }
>>>>>>> a68a8f911c4d103ad221b3ef38c449f1e04adc19
];
