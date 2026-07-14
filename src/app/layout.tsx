import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Low-Ops // prompt to production',
  description: 'Prompt Claude Code to build your app, deploy it to Low-Ops with one more prompt. Enter low-ops.ai.',
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
