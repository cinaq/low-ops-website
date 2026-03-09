export const QUICK_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About Us', href: '/about-us' },
];

export const DECORATIVE_LABELS = [
  { text: 'Automation', classes: 'top-2 left-32', planePosition: 'top-left' },
  {
    text: 'Cost Effective',
    classes: 'bottom-12 left-16',
    planePosition: 'bottom-left',
  },
  { text: 'Security', classes: 'top-8 right-8', planePosition: 'top-right' },
  {
    text: 'Self-Service',
    classes: 'bottom-24 right-32',
    planePosition: 'bottom-right',
  },
] as const;
