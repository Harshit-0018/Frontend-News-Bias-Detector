import React, { useEffect, useState } from 'react';

function ConfidenceChart({ confidence }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const percentage = Math.round(confidence * 100);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedWidth(percentage), 150);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getColor = () => {
    if (percentage >= 80) return { bar: '#16a34a', bg: '#f0fdf4', label: 'High' };
    if (percentage >= 60) return { bar: '#2563eb', bg: '#eff6ff', label: 'Moderate' };
    if (percentage >= 40) return { bar: '#d97706', bg: '#fffbeb', label: 'Low' };
    return { bar: '#dc2626', bg: '#fef2f2', label: 'Very Low' };
  };

  const c = getColor();

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#eff6ff',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Confidence Score</span>
        </div>
        <span style={{
          fontSize: '12px', fontWeight: 500, padding: '4px 10px',
          borderRadius: '9999px', background: c.bg, color: c.bar,
        }}>
          {c.label}
        </span>
      </div>

      {/* Score */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{ fontSize: '36px', fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>
          {percentage}
        </span>
        <span style={{ fontSize: '20px', fontWeight: 500, color: '#94a3b8', marginLeft: '2px' }}>%</span>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%', height: '10px', borderRadius: '9999px',
        background: '#f1f5f9', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: '9999px',
          width: `${animatedWidth}%`, background: c.bar,
          transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1)',
        }} />
      </div>

      {/* Scale */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>0</span>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>100</span>
      </div>
    </div>
  );
}

export default ConfidenceChart;
