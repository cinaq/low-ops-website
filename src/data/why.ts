import operationalCostImage from '@/assets/operationalcost.jpg';
import manualProvisioningImage from '@/assets/manualprovisioning.jpg';
import { Expand06, Lightning01, Shield01 } from '@untitled-ui/icons-react';

export const metadata = {
  title: 'Challenges with Data Sovereignty',
  description:
    'Data sovereignty is a critical concern for organizations, especially those operating in regulated industries like financial services, healthcare, manufacturing, and government.',
};

export const items = [
  {
    title: 'Increased operational cost',
    description:
      'Having to build your own private cloud or on-premise infrastructure is expensive and time-consuming. It also requires a lot of expertise and resources.',
    imagePath: operationalCostImage,
    icon: Lightning01({}),
    subitems: [
      `Large platform teams are required to build and maintain private cloud or on-premise infrastructure.`,
      `With limited resources, it is difficult to keep up with the latest technologies and best practices.`,
      `It is difficult to scale your platform team to meet the needs of your business.`,
    ],
  },
  {
    title: 'Slow Innovation & Deployment Bottlenecks',
    description:
      'Decreased developer experience and productivity resulting in missed deadlines.',
    imagePath: manualProvisioningImage,
    icon: Shield01({}),
    subitems: [
      `Developers are often burdened with managing infrastructure, which takes away from their ability to focus on building new features and products.`,
      `It is difficult to onboard new developers.`,
      `App developers are not able to deploy their applications quickly and easily.`,
    ],
  },
];
