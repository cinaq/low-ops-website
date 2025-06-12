import { Briefcase02, Building07, Rocket02 } from '@untitled-ui/icons-react';

export const plans = [
  {
    value: 'starter',
    label: 'Starter',
    icon: Rocket02({ width: 24, height: 24 }),
    price: '3,960 EUR',
    items: {
      'deployment model': 'Single (Virtual) Machine',
      scalability: 'Vertical',
      'high availability': 'No',
      'platform upgrades': 'Yes',
      'maximum number of apps': '3',
      'price annually (exclusive VAT)': '3,960 EUR (fixed)',
    },
    subPrice: 'free first year',
    isPopular: false,
    description: 'For test apps and MVP`s',
  },
  {
    value: 'professional',
    label: 'Professional',
    icon: Briefcase02({ width: 24, height: 24 }),
    price: '19,200+ EUR',
    items: {
      'deployment model': 'Multi-node Kubernetes',
      scalability: 'Horizontal',
      'high availability': 'Yes',
      'platform upgrades': 'Yes',
      'maximum number of apps': '20',
      'price annually (exclusive VAT)':
        'From 19,200 EUR, 40 GB App RAM, 480 EUR/GB',
    },
    isPopular: true,
    description: 'For growing teams and businesses',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    icon: Building07({ width: 24, height: 24 }),
    price: 'Quote',
    items: {
      'deployment model': 'Multi-node Kubernetes',
      scalability: 'Horizontal',
      'high availability': 'Yes',
      'platform upgrades': 'Yes',
      'maximum number of apps': 'Unlimited',
      'price annually (exclusive VAT)': 'Quote',
    },
    isPopular: false,
    description: 'For large teams and enterprises',
  },
];
