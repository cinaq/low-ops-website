import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Low-Ops // the golden path',
  description: 'Type an idea and watch it take the Golden Path — build, scan, ship, audit — into your own cloud. Enter low-ops.ai.',
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
