import { Expand06, Lightning01, Shield01 } from '@untitled-ui/icons-react';

export const problemsWeSolve = [
  {
    title: 'Speed and Control',
    imagePath: require('../assets/hero-image.png'),
    icon: Lightning01({}),
    solutions: [
      `Low-Ops reduces private cloud setup time from months to just 10 minutes. It installs seamlessly on your existing infrastructure without sacrificing long-term platform maturity.`,
      `Onboarding applications no longer takes days or weeks. Low-Ops automates the process with user-friendly interfaces and preconfigured templates, enabling onboarding in minutes.`,
      `Low-Ops empowers developers with a self-service platform, reducing dependency on other teams. This boosts speed and agility, allowing faster, independent application delivery.`,
    ],
  },
  {
    title: 'Focus',
    imagePath: require('../assets/hero-image.png'),
    icon: Shield01({}),
    solutions: [
      `Low-Ops speeds up application onboarding, enabling faster deployment and reducing delays, helping you reach the market quicker and gain a competitive edge.`,
      `Keep your applications and data secure with Low-Ops’ comprehensive security measures, ensuring full compliance.`,
      `Protect your invaluable data with Low-Ops' disaster recovery solutions, allowing quick recovery from unforeseen incidents.`,
    ],
  },
  {
    title: 'Flexibility',
    imagePath: require('../assets/hero-image.png'),
    icon: Expand06({}),
    solutions: [
      `Low-Ops automates repetitive tasks, freeing your team to focus on strategic, value-added activities.`,
      `Easily scale as your business grows. Low-Ops handles increasing workloads effortlessly, ensuring smooth performance.`,
      `Empower developers with a user-friendly interface, tools, and resources, all in one convenient platform.`,
    ],
  },
];
