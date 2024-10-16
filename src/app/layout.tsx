import { landingMetadata } from '@/data/metadata';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: landingMetadata.title,
  description: landingMetadata.description,
  keywords: landingMetadata.keywords,
  alternates: {
    canonical: `https://low-ops.com`,
  },
  openGraph: {
    title: 'Low-Ops: Private Cloud Infrastructure for Mendix',
    description:
      'Manage Mendix app development, deployment, scaling, and security with Low-Ops IDP for private clouds.',
    url: 'https://low-ops.com',
    siteName: 'Low-Ops',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://low-ops.com/hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Low-Ops: Private Cloud Infrastructure for Mendix',
    description:
      'Manage Mendix app development, deployment, scaling, and security with Low-Ops IDP for private clouds.',
    images: ['https://low-ops.com/hero.webp'],
  },
};

const structuredData = {
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
    'Low-Ops is an Internal Developer Platform (IDP) for private clouds, managing Mendix app development, deployment, scaling, and security. Set up your private cloud in 10 minutes.',
  featureList:
    'Mendix app management, Private cloud infrastructure, Automated deployment, Scaling, Security',
  screenshot: 'https://low-ops.com/hero.wepb',
  softwareVersion: '3.5',
};

type TProps = Readonly<{ children: ReactNode }>;

const RootLayout = (props: TProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </html>
  );
};

export default RootLayout;
