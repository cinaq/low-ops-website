import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Low-Ops // autonomous ops agent',
  description: 'Enter low-ops.ai — the app platform for everyone.',
  robots: 'noindex',
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#05101f' }}>{children}</body>
    </html>
  );
};

export default RootLayout;
