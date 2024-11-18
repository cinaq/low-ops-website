import {
  Activity,
  Bank,
  Bell02,
  Brackets,
  Database01,
  Diamond01,
  Grid01,
  LineChartUp01,
  List,
  Package,
  Settings01,
  ShieldTick,
} from '@untitled-ui/icons-react';

export const features = [
  {
    title: 'Admin & Users',
    description:
      'Effortlessly manage users, teams, and roles. Customize app templates and track all administrative activities in one centralized place.',
    icon: Bank({}),
  },
  {
    title: 'Activity',
    description:
      'Monitor all actions in your system with detailed audit logs for accountability and transparency in user and admin activities.',
    icon: Activity({}),
  },
  {
    title: 'Environments',
    description:
      'Control multiple environments with ease. Compare environments for consistency and make adjustments as needed—all from one interface.',
    icon: Grid01({}),
  },
  {
    title: 'Pipelines',
    description:
      'Streamline builds by managing pipelines, running unit tests, and enforcing best practices. Identify vulnerabilities early for smoother deployments.',
    icon: Package({}),
  },
  {
    title: 'Source Control',
    description:
      'Directly access key commits and branches from your source control, allowing seamless integration with your development workflow.',
    icon: Brackets({}),
  },
  {
    title: 'Monitoring',
    description:
      'Monitor your application’s health in real-time, tracking hardware metrics, user activity, and system status to proactively address issues.',
    icon: LineChartUp01({}),
  },
  {
    title: 'Logs',
    description:
      'Access and manage system logs with customizable log levels. Capture critical information without overwhelming your system.',
    icon: List({}),
  },
  {
    title: 'Backups',
    description:
      'Easily manage, download, and restore backups, or upload your own for safe, recoverable data.',
    icon: Database01({}),
  },
  {
    title: 'Firewall',
    description: `Configure and manage your app's firewall to safeguard against unauthorized access and protect your environments from external threats.`,
    icon: ShieldTick({}),
  },
  {
    title: 'Alerts',
    description:
      'Set up, manage, and review alerts to stay on top of critical events. View historical alerts to track issues and improve response times.',
    icon: Bell02({}),
  },
  {
    title: 'Settings',
    description:
      'Manage key settings—environment variables, runtime options, scaling, and domain configurations—via a unified dashboard.',
    icon: Settings01({}),
  },
  {
    title: 'No Alternatives',
    description:
      'Get top-tier features at unbeatable prices. With no alternatives matching our quality, you’re assured the best value for your investment.',
    icon: Diamond01({}),
  },
];
