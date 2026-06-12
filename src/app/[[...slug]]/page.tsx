'use client';

import { useEffect } from 'react';

const REDIRECT_URL = 'https://low-ops.ai';
const REDIRECT_DELAY_MS = 3000;

const RedirectPage = () => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(REDIRECT_URL);
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        gap: '1rem',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <p style={{ color: '#334155', fontSize: '1.125rem', margin: 0 }}>
        Redirecting to LowOps...
      </p>
      <a href={REDIRECT_URL} style={{ color: '#2563eb' }}>
        Continue to low-ops.ai
      </a>
    </main>
  );
};

export default RedirectPage;
