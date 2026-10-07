'use client';

import { useEffect, useState } from 'react';

const symbols = ['Volatility 10', 'Volatility 25', 'Volatility 50', 'Volatility 75', 'Volatility 100'];

export default function Home() {
  const [symbol, setSymbol] = useState('Volatility 50');
  const [digit, setDigit] = useState(7);
  const [stake, setStake] = useState('1');
  const [contract, setContract] = useState('Over');
  const [message, setMessage] = useState('Analysis ready');

  const [stats, setStats] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      digit: i,
      count: Math.floor(Math.random() * 20) + 1,
    }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newDigit = Math.floor(Math.random() * 10);
      setDigit(newDigit);

      setStats(prev =>
        prev.map(item =>
          item.digit === newDigit
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const total = stats.reduce((sum, item) => sum + item.count, 0);

  const percentage = (count: number) =>
    total ? ((count / total) * 100).toFixed(1) : '0.0';

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#070b14',
        color: 'white',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: 900, margin: 'auto' }}>

        <header
          style={{
            padding: '20px',
            borderRadius: 18,
            background: 'linear-gradient(135deg,#111827,#172554)',
            marginBottom: 18,
          }}
        >
          <h1 style={{ margin: 0, fontSize: 28 }}>
            Caroline Trader
          </h1>

          <p style={{ margin: '8px 0 0', color: '#94a3b8' }}>
            Digit Analysis Dashboard
          </p>
        </header>

        <div
          style={{
            background: '#111827',
            padding: 18,
            borderRadius: 16,
            marginBottom: 18,
          }}
        >
          <label>Market</label>

          <select
            value={symbol}
            onChange={e => setSymbol(e.target.value)}
            style={{
              width: '100%',
              padding: 13,
              marginTop: 8,
              borderRadius: 10,
              background: '#1f2937',
              color: 'white',
              border: '1px solid #374151',
            }}
          >
            {symbols.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
            gap: 14,
            marginBottom: 18,
          }}
        >
          <div style={cardStyle}>
            <small style={{ color: '#94a3b8' }}>Current Digit</small>
            <div style={{ fontSize: 48, fontWeight: 'bold' }}>
              {digit}
            </div>
          </div>

          <div style={cardStyle}>
            <small style={{ color: '#94a3b8' }}>Contract</small>
            <div style={{ fontSize: 25, fontWeight: 'bold' }}>
              {contract} {digit}
            </div>
          </div>

          <div style={cardStyle}>
            <small style={{ color: '#94a3b8' }}>Status</small>
            <div style={{ color: '#22c55e', fontWeight: 'bold' }}>
              LIVE ANALYSIS
            </div>
          </div>
        </div>

        <section style={cardStyle}>
          <h2 style={{ marginTop: 0 }}>Digit Statistics</h2>

          {stats.map(item => (
            <div key={item.digit} style={{ marginBottom: 12 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span>Digit {item.digit}</span>
                <span>{percentage(item.count)}%</span>
              </div>

              <div
                style={{
                  height: 9,
                  background: '#1f2937',
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${Math.min(Number(percentage(item.count)) * 4, 100)}%`,
                    height: '100%',
                    background: '#f97316',
                  }}
                />
              </div>
            </div>
          ))}
        </section>

        <section style={{ ...cardStyle, marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Trade Setup</h2>

          <div style={{ display: 'grid', gap: 12 }}>
            <select
              value={contract}
              onChange={e => setContract(e.target.value)}
              style={inputStyle}
            >
              <option>Over</option>
              <option>Under</option>
              <option>Matches</option>
              <option>Differs</option>
            </select>

            <input
              type="number"
              min="0.35"
              step="0.01"
              value={stake}
              onChange={e => setStake(e.target.value)}
              placeholder="Stake"
              style={inputStyle}
            />

            <input
              type="number"
              min="0"
              max="9"
              value={digit}
              onChange={e => setDigit(Number(e.target.value))}
              style={inputStyle}
            />

            <button
              onClick={() =>
                setMessage(
                  `Analysis selected: ${contract} ${digit} — Stake $${stake}`
                )
              }
              style={buttonStyle}
            >
              ANALYZE
            </button>

            <div
              style={{
                padding: 14,
                borderRadius: 10,
                background: '#0f172a',
                color: '#94a3b8',
              }}
            >
              {message}
            </div>
          </div>
        </section>

        <p
          style={{
            textAlign: 'center',
            color: '#64748b',
            marginTop: 25,
            fontSize: 13,
          }}
        >
          Caroline Trader • Analysis only • No guaranteed predictions
        </p>
      </div>
    </main>
  );
}

const cardStyle = {
  background: '#111827',
  padding: 18,
  borderRadius: 16,
  border: '1px solid #1f2937',
};

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box' as const,
  padding: 13,
  borderRadius: 10,
  background: '#1f2937',
  color: 'white',
  border: '1px solid #374151',
};

const buttonStyle = {
  padding: 14,
  border: 'none',
  borderRadius: 10,
  background: '#f97316',
  color: 'white',
  fontWeight: 'bold' as const,
  fontSize: 16,
};
