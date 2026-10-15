'use client';

import React from 'react';

export default function Home() {
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const appId = '33LvXr02jabdvOWfNQ5hZ'; 
    const redirectUrl = encodeURIComponent('https://netlify.app');
    
    // Hii amri inalazimisha browser ifungue ukurasa wa login
    window.location.assign(`https://deriv.com{appId}&l=en&redirect_uri=${redirectUrl}`);
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold' }}>Caroline Trader</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Digit Analysis Dashboard</p>
      
      <button 
        onClick={handleLogin} 
        type="button"
        style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', width: '100%', maxWidth: '300px' }}
      >
        Login via Deriv
      </button>
    </div>
  );
                 }
          
