import React, { useState } from 'react';
import ArticleInput from '../components/ArticleInput';
import ResultCard from '../components/ResultCard';
import { predictBias } from '../services/api';

function Home() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (text) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await predictBias(text);
      setResult(data);
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.message ||
        'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      ),
      title: 'Political Leaning',
      desc: 'Advanced language models analyze content for bias',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'User Safe',
      desc: 'Articles analyzed privately and securely',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
        </svg>
      ),
      title: 'Detailed Analysis',
      desc: 'Comprehensive breakdown of bias indicators',
    },
  ];

  return (
    <section style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '48px 24px',
    }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#0f172a',
          margin: '0 0 12px 0',
          letterSpacing: '-0.01em',
        }}>
          Uncover Article Bias
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#64748b',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Paste any article text to get a comprehensive bias analysis
          across sentiment, entities, and key phrases.
        </p>
      </div>

      {/* Input Card */}
      <div style={{ marginBottom: '40px' }}>
        <ArticleInput onAnalyze={handleAnalyze} isLoading={isLoading} />
      </div>

      {/* Features (shown when no results) */}
      {!result && !isLoading && !error && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '40px',
        }}>
          {features.map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#eff6ff', margin: '0 auto 12px auto',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 4px 0' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Loading Skeletons */}
      {isLoading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="skeleton" style={{ height: '120px', width: '100%' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="skeleton" style={{ height: '160px', width: '100%' }} />
            <div className="skeleton" style={{ height: '160px', width: '100%' }} />
          </div>
          <div className="skeleton" style={{ height: '100px', width: '100%' }} />
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{
          marginBottom: '32px',
          padding: '20px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          background: '#fef2f2',
          border: '1px solid #fecaca',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#dc2626', marginBottom: '4px' }}>
              Analysis Failed
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {result && <ResultCard result={result} />}
    </section>
  );
}

export default Home;
