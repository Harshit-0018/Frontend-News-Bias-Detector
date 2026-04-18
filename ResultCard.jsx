import React from 'react';
import ConfidenceChart from './ConfidenceChart';
import SentimentBox from './SentimentBox';
import EntityList from './EntityList';

const BIAS_CONFIG = {
  left: {
    label: 'Left-Leaning',
    color: '#2563eb',
    bg: '#eff6ff',
    border: '#bfdbfe',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
      </svg>
    ),
  },
  right: {
    label: 'Right-Leaning',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7-7-7" /><path d="M5 12h14" />
      </svg>
    ),
  },
  center: {
    label: 'Center / Neutral',
    color: '#7c3aed',
    bg: '#faf5ff',
    border: '#ddd6fe',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
};

function ResultCard({ result }) {
  if (!result) return null;

  const { bias, confidence, sentiment, entities, important_phrases } = result;
  const biasKey = bias?.toLowerCase() || 'center';
  const biasConfig = BIAS_CONFIG[biasKey] || BIAS_CONFIG.center;

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  };

  return (
    <div>
      {/* Section Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>
          Analysis Results
        </h2>
        <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>
          Here is the breakdown of the article&apos;s political bias analysis.
        </p>
      </div>

      {/* Bias Card */}
      <div style={{ ...cardStyle, marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: biasConfig.bg,
          }}>
            {biasConfig.icon}
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Detected Bias</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Predicted political leaning</div>
          </div>
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: 600,
          background: biasConfig.bg,
          border: `1px solid ${biasConfig.border}`,
          color: biasConfig.color,
        }}>
          {biasConfig.icon}
          {biasConfig.label}
        </div>
      </div>

      {/* 2-Column Grid: Confidence + Sentiment */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        marginBottom: '24px',
      }}>
        <ConfidenceChart confidence={confidence} />
        <SentimentBox sentiment={sentiment} />
      </div>

      {/* Entities */}
      <div style={{ marginBottom: '24px' }}>
        <EntityList entities={entities} />
      </div>

      {/* Important Phrases */}
      {important_phrases && important_phrases.length > 0 && (
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#fffbeb',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Important Phrases</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Key phrases that influenced the prediction</div>
              </div>
            </div>
            <span style={{
              fontSize: '12px', fontWeight: 500, padding: '4px 10px',
              borderRadius: '9999px', background: '#fffbeb', color: '#d97706',
            }}>
              {important_phrases.length} phrases
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {important_phrases.map((phrase, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#fffbeb'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; }}
              >
                <span style={{
                  fontSize: '12px', fontWeight: 600,
                  width: '22px', height: '22px', minWidth: '22px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '6px', background: '#fffbeb', color: '#d97706',
                }}>
                  {index + 1}
                </span>
                <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
                  &ldquo;{phrase}&rdquo;
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
