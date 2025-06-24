import { nextMetadata, structuredData } from '@/data/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = nextMetadata;

type TProps = Readonly<{ children: ReactNode }>;

const RootLayout = (props: TProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleAnalytics gaId="G-8HTDC4DGP8" />
      </body>
    </html>
  );
};

export default RootLayout;
