import {
  PiArrowsOutFill,
  PiBridgeFill,
  PiBuildingApartmentFill,
  PiChartLineFill,
  PiCurrencyCircleDollarFill,
  PiFalloutShelterFill,
  PiFlowArrowFill,
  PiHammerFill,
  PiLightningFill,
  PiRocketFill,
  PiShieldCheckFill,
  PiGlobeFill,
  PiBrain,
  PiPackage,
} from 'react-icons/pi';

export const metadata = {
  title: 'Features',
  description:
    'Streamline your private cloud operations with your own comprehensive private app platform for secure, scalable deployment and management.',
};

export const topFeatures = [
  {
    title: 'Low costs & Simplicity',
    description:
      'Leveraging managed cloud platforms eliminates the need for heavy investments in infrastructure, slashing operational costs through pay-as-you-go models and built-in efficiencies.',
    bullets: [
      'Small teams manage infra effortlessly.',
      'Unlimited resources & fast tech adoption.',
      'Teams scale effortlessly with growth.',
    ],
    icon: PiCurrencyCircleDollarFill({ size: 32.5 }),
  },
  {
    title: 'Accelerated Productivity',
    description:
      'Managed platforms free developers from infrastructure tasks to focus on features, speeding delivery and hitting deadlines.',
    bullets: [
      'Focus on core product development.',
      'Onboarding boosts team growth.',
      'Deployments enable instant releases.',
    ],
    icon: PiRocketFill({ size: 32.5 }),
  },
  {
    title: 'Accelerated Time to Market',
    description:
      'Fast deployment cycles and scalable infrastructure enable on-time, on-budget application delivery.',
    bullets: [
      'Automated setup deploys in minutes.',
      'Standard steps keep delivery steady.',
      'No blocks—teams deploy freely.',
    ],
    icon: PiLightningFill({ size: 32.5 }),
  },
];

export const features = [
  {
    title: 'Governance',
    description:
      'Centrally manage users, teams, and roles. Customize app templates and track all administrative activities in one place. Monitor all actions in your system with detailed audit logs for accountability and transparency.',
    icon: PiBuildingApartmentFill({ size: 32.5 }),
  },
  {
    title: 'Scalability',
    description:
      'Start new apps in minutes, scale up or down as needed, and manage your resources with ease.',
    icon: PiArrowsOutFill({ size: 32.5 }),
  },
  {
    title: 'Automation',
    description:
      'Streamline builds with fully automated pipelines that runs unit tests, and checks for best practices. Identify vulnerabilities early for smoother deployments.',
    icon: PiFlowArrowFill({ size: 32.5 }),
  },
  {
    title: 'Self-Service',
    description:
      'Developers can deploy and manage their applications in your private cloud or on-premises with a few clicks.',
    icon: PiHammerFill({ size: 32.5 }),
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Monitor your application’s health in real-time, tracking hardware metrics, user activity, and system status to proactively address issues. Access and manage applications logs with customizable log levels at ease.',
    icon: PiChartLineFill({ size: 32.5 }),
  },
  {
    title: 'Disaster Recovery',
    description:
      'Easily manage, download, and restore backups, or upload from local storage. Ensure your applications are always available and can be recovered quickly in case of a disaster.',
    icon: PiFalloutShelterFill({ size: 32.5 }),
  },
  {
    title: 'Infrastructure',
    description:
      'Low-Ops is installed on any Kubernetes compatible infrastructure. This includes any cloud provider like AWS, GCP, Azure, or even on-premises.',
    icon: PiBridgeFill({ size: 32.5 }),
  },
  {
    title: 'Security',
    description:
      'Developers are informed about the security of their applications and can take actions to improve the security of their applications. Low-Ops also provides timely security updates and patches to keep your applications, data and platform services secure.',
    icon: PiShieldCheckFill({ size: 32.5 }),
  },
  {
    title: 'Sovereignty',
    description:
      'Low-Ops is installed on your own infrastructure. This gives you complete control over your data and AI applications. ',
    icon: PiGlobeFill({ size: 32.5 }),
  },
  {
    title: 'Cost effective',
    description:
      'We prioritize resources sharing to keep costs down. For example a single database cluster is used by multiple applications. Just like onboarding a new is a few minutes, offboarding it also is just a few clicks away. Cleaning up irrelevant apps is a breeze.',
    icon: PiCurrencyCircleDollarFill({ size: 32.5 }),
  },
  {
    title: 'AI ready',
    description:
      'Our app templates are designed to be AI ready. They include specifications for the AI agent to use to build the application. This also means you are free to build your own AI-powered solutions and manage them effortlessly.',
    icon: PiBrain({ size: 32.5 }),
  },
  {
    title: 'Any App types',
    description:
      'Low-Ops does not limit you to a specific app type. You can build and deploy any type of application you need. We support a wide range of app types including web applications as long as it can be packaged with docker.',
    icon: PiPackage({ size: 32.5 }),
  },
];
