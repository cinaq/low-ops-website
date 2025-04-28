import type { Metadata } from 'next';

export const nextMetadata: Metadata = {
  title: 'Private Cloud Infrastructure | Low-Ops',
  description:
    'Deploy and manage your applications on a secure, scalable private cloud infrastructure. Custom solutions for enterprise hosting and deployment.',
  keywords: [
    'mendix',
    'private',
    'cloud',
    'infrastructure',
    'enterprise',
    'Mendix private cloud',
    'secure Mendix hosting',
    'custom Mendix infrastructure',
    'enterprise Mendix deployment',
    'scalable Mendix platform',
    'Mendix cloud security',
    'Mendix DevOps',
    'dedicated Mendix environment',
    'Mendix application lifecycle management',
    'Mendix Kubernetes deployment',
    'Mendix microservices architecture',
    'Mendix CI/CD pipeline',
  ],
  alternates: {
    canonical: `https://low-ops.com`,
  },
  openGraph: {
    title: 'Low-Ops: Private Cloud Infrastructure',
    description:
      'Manage applications development, deployment, scaling, and security with Low-Ops IDP for private clouds.',
    url: 'https://low-ops.com',
    siteName: 'Low-Ops',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://low-ops.com/preview.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Low-Ops: Private Cloud Infrastructure',
    description:
      'Manage applications development, deployment, scaling, and security with Low-Ops IDP for private clouds.',
    images: ['https://low-ops.com/preview.webp'],
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Low-Ops',
  applicationCategory: 'WebApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial available',
  },
  description:
    'Low-Ops is an Internal Developer Platform (IDP) for private clouds, managing applications development, deployment, scaling, and security. Set up your private cloud in 10 minutes.',
  featureList:
    'Application management, Private cloud infrastructure, Automated deployment, Scaling, Security, Mendix',
  screenshot: 'https://low-ops.com/preview.wepb',
  softwareVersion: '3.5',
};
