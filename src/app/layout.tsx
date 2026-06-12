import type { Metadata } from 'next';
import { ReactNode } from 'react';

const REDIRECT_URL = 'https://low-ops.ai';

export const metadata: Metadata = {
  title: 'Redirecting to LowOps',
  description: 'Redirecting to low-ops.ai',
  robots: 'noindex',
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`3;url=${REDIRECT_URL}`} />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
};

export default RootLayout;
