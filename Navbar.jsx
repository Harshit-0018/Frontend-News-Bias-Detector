import React from 'react';

function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '0 24px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 700,
            color: '#fff',
            background: '#2563eb',
          }}>
            PB
          </div>
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
            BiasDetector
          </span>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#475569', cursor: 'pointer' }}>
            Analyze
          </span>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#94a3b8', cursor: 'pointer' }}>
            About
          </span>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 500,
            background: '#f0fdf4',
            color: '#16a34a',
            border: '1px solid #bbf7d0',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#16a34a',
              display: 'inline-block',
            }} />
            Online
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
