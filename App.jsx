import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#f8fafc',
        }}
      >
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer
          style={{
            padding: '32px 24px',
            textAlign: 'center',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: '#94a3b8',
              margin: 0,
            }}
          >
            © 2026 News Perspective AI. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;