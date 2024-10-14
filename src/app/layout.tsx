import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Low-Ops',
  description: 'Private Cloud Infrastructure for Mendix',
};

type TProps = Readonly<{ children: ReactNode }>;

const RootLayout = (props: TProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
