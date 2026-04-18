import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Home />
      </main>
      <footer style={{
        padding: '32px 24px',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
      }}>
        <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>
          © 2026 Political Bias Detector. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
