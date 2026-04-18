import React, { useState } from 'react';

function ArticleInput({ onAnalyze, isLoading }) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (text.trim()) onAnalyze(text.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) handleSubmit();
  };

  const hasText = text.trim().length > 0;

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '28px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      {/* Label */}
      <label
        htmlFor="article-input"
        style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}
      >
        Article Text
      </label>
      <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px', margin: '0 0 16px 0' }}>
        Paste a news article below to analyze its political bias, sentiment, and key entities.
      </p>

      {/* Textarea */}
      <textarea
        id="article-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Paste your news article here to analyze..."
        rows={7}
        style={{
          width: '100%',
          padding: '14px 16px',
          fontSize: '14px',
          lineHeight: '1.7',
          borderRadius: '12px',
          border: isFocused ? '1.5px solid #3b82f6' : '1px solid #e2e8f0',
          background: '#f8fafc',
          color: '#0f172a',
          fontFamily: "'Inter', system-ui, sans-serif",
          resize: 'vertical',
          outline: 'none',
          boxShadow: isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.1)' : 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxSizing: 'border-box',
        }}
      />

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '16px',
      }}>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>
          {text.length.toLocaleString()} characters · Ctrl+Enter to submit
        </span>

        <button
          id="analyze-button"
          onClick={handleSubmit}
          disabled={!hasText || isLoading}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 22px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#ffffff',
            background: hasText && !isLoading ? '#2563eb' : '#94a3b8',
            border: 'none',
            cursor: hasText && !isLoading ? 'pointer' : 'not-allowed',
            opacity: hasText || isLoading ? 1 : 0.5,
            boxShadow: hasText && !isLoading ? '0 1px 3px rgba(37,99,235,0.3)' : 'none',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            if (hasText && !isLoading) {
              e.currentTarget.style.background = '#1d4ed8';
            }
          }}
          onMouseLeave={(e) => {
            if (hasText && !isLoading) {
              e.currentTarget.style.background = '#2563eb';
            }
          }}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin" style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none">
                <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analyzing…
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              Analyze Article
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ArticleInput;
