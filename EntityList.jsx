import React from 'react';

function EntityList({ entities }) {
  const isEmpty = !entities || entities.length === 0;

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#faf5ff',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Named Entities</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>People, organizations, and locations</div>
          </div>
        </div>
        {!isEmpty && (
          <span style={{
            fontSize: '12px', fontWeight: 500, padding: '4px 10px',
            borderRadius: '9999px', background: '#faf5ff', color: '#7c3aed',
          }}>
            {entities.length} found
          </span>
        )}
      </div>

      {/* Entities */}
      {isEmpty ? (
        <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>
          No entities detected in this article.
        </p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {entities.map((entity, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 500,
                lineHeight: '1.4',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: '#475569',
                cursor: 'default',
                transition: 'all 0.2s',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                maxWidth: '100%',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#eff6ff';
                e.target.style.borderColor = '#bfdbfe';
                e.target.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f8fafc';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.color = '#475569';
              }}
            >
              {entity}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default EntityList;
