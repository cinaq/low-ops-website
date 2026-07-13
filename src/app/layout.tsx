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
        {/* JS drives a ~5s animated hand-off; this is the no-JS fallback. */}
        <noscript>
          <meta httpEquiv="refresh" content={`5;url=${REDIRECT_URL}`} />
        </noscript>
      </head>
      <body style={{ margin: 0, background: '#05101f' }}>{children}</body>
    </html>
  );
};

export default RootLayout;
