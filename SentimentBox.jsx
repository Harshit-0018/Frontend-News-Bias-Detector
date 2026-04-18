import React from 'react';

const SENTIMENT_CONFIG = {
  positive: {
    label: 'Positive',
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    description: 'The article conveys a generally positive and optimistic tone.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  negative: {
    label: 'Negative',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
    description: 'The article conveys a generally negative and critical tone.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  neutral: {
    label: 'Neutral',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    description: 'The article maintains a balanced and objective neutral tone.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="8" y1="15" x2="16" y2="15" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
};

function SentimentBox({ sentiment }) {
  const key = sentiment?.toLowerCase() || 'neutral';
  const config = SENTIMENT_CONFIG[key] || SENTIMENT_CONFIG.neutral;

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      height: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: config.bg,
        }}>
          {config.icon}
        </div>
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
          Sentiment Analysis
        </span>
      </div>

      {/* Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 600,
        background: config.bg,
        border: `1px solid ${config.border}`,
        color: config.color,
        marginBottom: '16px',
      }}>
        {config.icon}
        {config.label}
      </div>

      {/* Description */}
      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#64748b', margin: 0 }}>
        {config.description}
      </p>
    </div>
  );
}

export default SentimentBox;
