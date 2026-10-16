
'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_DERIV_APP_ID;
    const redirectUrl = 'https://carolinetrader2030.netlify.app';

    if (!appId) {
      console.error('Missing Deriv App ID');
      return;
    }

    const url = new URL('https://oauth.deriv.com/oauth2/authorize');
    url.searchParams.set('app_id', appId);
    url.searchParams.set('l', 'EN');
    url.searchParams.set('redirect_uri', redirectUrl);

    window.location.assign(url.toString());
  }, []);

  return (
    <main style={{
      background: '#0f172a',
      color: 'white',
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: 20
    }}>
      <div>
        <h1>Caroline Trader</h1>
        <p>Connecting securely to Deriv...</p>
      </div>
    </main>
  );
      }
