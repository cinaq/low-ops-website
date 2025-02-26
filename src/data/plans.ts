import { Briefcase02, Building07, Rocket02 } from '@untitled-ui/icons-react';

export const plans = [
  {
    value: 'starter',
    label: 'Starter',
    icon: Rocket02({ width: 24, height: 24 }),
    price: '50 euro/month',
    items: {
      'highly available': 'no',
      commercial: 'no',
      support: 'best effort',
    },
    subPrice: 'free first year',
  },
  {
    value: 'professional',
    label: 'Professional',
    icon: Briefcase02({ width: 24, height: 24 }),
    price: 'Contact us',
    items: {
      'highly available': 'no',
      commercial: 'yes',
      support: 'standard',
    },
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    icon: Building07({ width: 24, height: 24 }),
    price: 'Contact us',
    items: {
      'highly available': 'yes',
      commercial: 'yes',
      support: 'premium',
    },
  },
];
