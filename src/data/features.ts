import {
  Activity,
  Bank,
  Bell02,
  Brackets,
  Building01,
  CoinsStacked01,
  Database01,
  Diamond01,
  Grid01,
  LineChartUp01,
  List,
  Lock01,
  Package,
  Settings01,
  Shield01,
  ShieldTick,
} from '@untitled-ui/icons-react';

export const metadata = {
  title: 'Enterprise-Ready Platform',
  description: 'Streamline your private cloud operations with our comprehensive platform for secure, scalable application deployment and management.',
};

export const features = [
  {
    title: 'Governance',
    description:
      'Centrally manage users, teams, and roles. Customize app templates and track all administrative activities in one place. Monitor all actions in your system with detailed audit logs for accountability and transparency.',
    icon: Bank({}),
  },
  {
    title: 'Scalability',
    description:
      'Start new apps in minutes, scale up or down as needed, and manage your resources with ease.',
    icon: Grid01({}),
  },
  {
    title: 'Automation',
    description:
      'Streamline builds with fully automated pipelines that runs unit tests, and checks for best practices. Identify vulnerabilities early for smoother deployments.',
    icon: Package({}),
  },
  {
    title: 'Self-Service',
    description:
      'Developers can deploy and manage their applications in your private cloud or on-premises with a few clicks.',
    icon: Brackets({}),
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Monitor your application’s health in real-time, tracking hardware metrics, user activity, and system status to proactively address issues. Access and manage applications logs with customizable log levels at ease.',
    icon: LineChartUp01({}),
  },
  {
    title: 'Disaster Recovery',
    description:
      'Easily manage, download, and restore backups, or upload from local storage. Ensure your applications are always available and can be recovered quickly in case of a disaster.',
    icon: Database01({}),
  },
  {
    title: 'Cost effective',
    description: 'All applications start small and scale as needed. You only pay for what you use. Also there is no need to employ a platform engineering team or purchase expensive tools. ',
    icon: CoinsStacked01({}),
  },
  {
    title: 'Infrastructure',
    description: 'Low-Ops is installed on any Kubernetes compatible infrastructure. This includes any cloud provider like AWS, GCP, Azure, or even on-premises.',
    icon: Building01({}),
  },
  {
    title: 'Security',
    description:
      'Developers are informed about the security of their applications and can take actions to improve the security of their applications. Low-Ops also provides timely security updates and patches to keep your applications, data and platform services secure.',
    icon: Lock01({}),
  },
];
