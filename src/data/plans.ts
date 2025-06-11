import { Briefcase02, Building07, Rocket02 } from '@untitled-ui/icons-react';

export const plans = [
  {
    value: 'starter',
    label: 'Starter',
    icon: Rocket02({ width: 24, height: 24 }),
    price: '50 euro/month',
    items: {
      'deployment model': 'Single (Virtual) Machine',
      scalability: 'Vertical',
      'high availability': 'No',
      'platform upgrades': 'Yes',
      'maximum number of apps': '3',
    },
    subPrice: 'free first year',
    isPopular: false,
    description: 'For test apps and MVP`s',
  },
  {
    value: 'professional',
    label: 'Professional',
    icon: Briefcase02({ width: 24, height: 24 }),
    price: 'Contact us',
    items: {
      'deployment model': 'Multi-node Kubernetes',
      scalability: 'Horizontal',
      'high availability': 'Yes',
      'platform upgrades': 'Yes',
      'maximum number of apps': '20',
    },
    isPopular: true,
    description: 'For growing teams and businesses',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    icon: Building07({ width: 24, height: 24 }),
    price: 'Contact us',
    items: {
      'deployment model': 'Multi-node Kubernetes',
      scalability: 'Horizontal',
      'high availability': 'Yes',
      'platform upgrades': 'Yes',
      'maximum number of apps': 'Unlimited',
    },
    isPopular: false,
    description: 'For large teams and enterprises',
  },
];
