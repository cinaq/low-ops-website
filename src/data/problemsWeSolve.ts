import screen1 from '@/assets/screen1.svg';
import screen2 from '@/assets/screen2.svg';
import screen3 from '@/assets/screen3.svg';
import { Expand06, Lightning01, Shield01 } from '@untitled-ui/icons-react';

export const metadata = {
  title: 'Platform Engineering Made Simple',
  description: 'Leverage our battle-tested expertise from building 10+ enterprise platforms.',
};

export const problemsWeSolve = [
  {
    title: 'Operational Overload & High Costs',
    description: 'Are mounting operational tasks for your private cloud or on-premise applications straining your IT resources and budget? Many businesses struggle with the complexity and expense of traditional infrastructure management.',
    imagePath: screen1,
    icon: Lightning01({}),
    solutions: [
      `Low-Ops reduces private cloud setup time from months to just 1 day. It installs seamlessly on your existing infrastructure without sacrificing long-term platform maturity.`,
      `Onboarding applications no longer takes days or weeks. Low-Ops automates the process with user-friendly interfaces and preconfigured templates, enabling onboarding in minutes.`,
      `Low-Ops empowers developers with a self-service portal, reducing dependency on other teams. This boosts speed and agility, allowing faster, independent application delivery.`,
    ],
  },
  {
    title: 'Slow Innovation & Deployment Bottlenecks',
    description: 'Is the time taken to deploy and manage applications hindering your ability to innovate and respond to market changes quickly? Developer productivity often gets bogged down by infrastructure hurdles.',
    imagePath: screen2,
    icon: Shield01({}),
    solutions: [
      `Low-Ops speeds up application onboarding, enabling faster deployment and reducing delays, helping you reach the market quicker and gain a competitive edge.`,
      `Keep your applications and data secure with Low-Ops’ comprehensive security measures, ensuring full compliance.`,
      `Protect your invaluable data with Low-Ops' disaster recovery solutions, allowing quick recovery from unforeseen incidents.`,
    ],
  },
  {
    title: 'Difficulty in Scaling Expertise',
    description: 'Finding and retaining specialized DevOps or platform engineering talent can be a significant challenge and expense for growing businesses. This often leaves existing teams stretched thin.',
    imagePath: screen3,
    icon: Expand06({}),
    solutions: [
      `Low-Ops automates repetitive tasks, freeing your team to focus on strategic, value-added activities.`,
      `Easily scale as your business grows. Low-Ops handles increasing workloads effortlessly, ensuring smooth performance.`,
      `Empower developers with a user-friendly interface, tools, and resources, all in one convenient platform.`,
    ],
  },
];
