
'use client';

import { useAuth } from '@/hooks/use-auth';

export default function Home() {
  const { login, authState, error } = useAuth();

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
        <p>Connect your Deriv account to continue.</p>

        <button
          onClick={() => login()}
          style={{
            background: '#ff444f',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: 8,
            fontSize: 16
          }}
        >
          {authState === 'authenticating'
            ? 'Connecting...'
            : 'Login to Deriv'}
        </button>

        {error && <p>{error}</p>}
      </div>
    </main>
  );
          }
