import operationalCostImage from '@/assets/operationalcost.jpg';
import manualProvisioningImage from '@/assets/manualprovisioning.jpg';
import { ShieldDollar, Lightning02, Building01 } from '@untitled-ui/icons-react';

export const metadata = {
  title: 'Inefficient Application Delivery',
  description:
    'Are you developers struggling to deliver applications on time and within budget? Often the bottleneck is related to developers not being able to deploy applications quickly and easily.',
};

export const items = [
  {
    title: 'High Infrastructure Costs & Complexity',
    description:
      'Building and maintaining private cloud or on-premise infrastructure requires significant investment in specialized teams and resources, driving up operational costs.',
    imagePath: operationalCostImage,
    icon: ShieldDollar({}),
    subitems: [
      `Requires dedicated platform engineering teams to build and maintain infrastructure.`,
      `Limited resources make it challenging to adopt latest technologies and best practices.`,
      `Scaling platform teams becomes increasingly difficult as business grows.`,
    ],
  },
  {
    title: 'Developer Productivity Bottlenecks',
    description:
      'Developers spend excessive time on infrastructure management instead of building features, leading to delayed delivery and missed deadlines.',
    imagePath: manualProvisioningImage,
    icon: Lightning02({}),
    subitems: [
      `Developers waste time on infrastructure tasks instead of focusing on core product development.`,
      `Complex onboarding process slows down team expansion and productivity.`,
      `Manual deployment processes prevent quick and easy application releases.`,
    ],
  },
  {
    title: 'Delayed Time-to-Market',
    description:
      'Slow deployment cycles and infrastructure bottlenecks prevent teams from delivering applications on time and within budget constraints.',
    imagePath: operationalCostImage,
    icon: Building01({}),
    subitems: [
      `Manual provisioning and configuration delays application deployment by days or weeks.`,
      `Lack of standardized deployment processes leads to inconsistent delivery times.`,
      `Infrastructure dependencies create bottlenecks that block multiple development teams.`,
    ],
  },
];
