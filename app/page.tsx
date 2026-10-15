'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // This runs immediately when the page loads
    const appId = '33LvXr02jabdvOWfNQ5hZ'; 
    const redirectUrl = encodeURIComponent('https://netlify.app');
    
    // This forces your phone browser to instantly load the Deriv sign-in form
    window.location.href = `https://deriv.com{appId}&l=en&redirect_uri=${redirectUrl}`;
  }, []);

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold' }}>Caroline Trader</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Connecting securely to Deriv... Please wait.</p>
      
      {/* Loading animation placeholder */}
      <div style={{ width: '40px', height: '40px', border: '4px solid #f97316', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    </div>
  );
                 }
      
