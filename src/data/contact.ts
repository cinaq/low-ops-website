import { Mail03, MarkerPin02 } from '@untitled-ui/icons-react';

export const contact = [
  {
    title: 'Location',
    description: 'Cinaq HQ (Appointment only)',
    linkText: 'Bajonetstraat 50 3014 ZK, Rotterdam The Netherlands',
    link: 'https://www.google.com/maps/search/?api=1&query=Bajonetstraat+50+3014+ZK+Rotterdam+Netherlands',
    icon: MarkerPin02({ className: 'text-white' }),
  },
  {
    title: 'Email',
    description: 'We’re here to help.',
    linkText: 'low-ops@cinaq.com',
    link: 'mailto:low-ops@cinaq.com',
    icon: Mail03({ className: 'text-white' }),
  },
];
