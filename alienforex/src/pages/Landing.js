import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/theme.css';

// Google Fonts for Orbitron and Share Tech Mono
const fontLinks = (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
  </>
);

const heroBg = {
  backgroundImage: `url('https://i.ibb.co/99GDshxN/IMG-1181.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
};

export default function Landing() {
  // Fix Bootstrap navbar toggler on mobile
  useEffect(() => {
    // Bootstrap 5 toggler works if bundle JS is imported
  }, []);

  // Scroll to next section
  const scrollToContent = () => {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {fontLinks}
      {/* Remove navbar from here, now handled globally in App.js */}
      <header style={heroBg}>
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center" style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', background:'rgba(13,13,13,0.7)', zIndex:2 }}>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="display-3 fw-bold mb-3"
            style={{ color: '#00ff99', fontFamily: 'Orbitron, Share Tech Mono, monospace', textShadow: '0 0 24px #00ff99, 0 0 8px #fff', letterSpacing: 2 }}
          >
            ALIEN FOREX TRADING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lead mb-4"
            style={{ color: '#eafff7', fontFamily: 'Share Tech Mono, monospace', fontSize: 22 }}
          >
            The next-gen fintech portal for mentorship, signals, and account management.<br />
            <span style={{ color: '#00ff99', fontWeight: 700 }}>Trade like an alien. Profit like a pro.</span>
          </motion.p>
          <motion.button
            className="btn btn-lg btn-outline-success neon-btn mt-2"
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #00ff99' }}
            style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: 20, borderColor: '#00ff99', color: '#00ff99', boxShadow: '0 0 12px #00ff99' }}
            onClick={scrollToContent}
          >
            Get Started
          </motion.button>
        </div>
        {/* Bouncing arrow */}
        <div className="w-100 d-flex justify-content-center position-absolute" style={{ bottom: 30, zIndex: 3 }}>
          <motion.div
            onClick={scrollToContent}
            style={{ cursor: 'pointer' }}
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M20 10 v20 M10 25 l10 10 10-10" stroke="#00ff99" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </motion.div>
        </div>
      </header>

      {/* Main content placeholder */}
      <section id="main-content" className="py-5" style={{ background: '#0d0d0d', minHeight: '60vh' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: '#00ff99', fontFamily: 'Orbitron, monospace', textShadow: '0 0 12px #00ff99' }}>
            Welcome to the Alien FX Portal
          </h2>
          <p className="lead" style={{ color: '#eafff7', fontFamily: 'Share Tech Mono, monospace' }}>
            Explore our services, results, and join the future of trading.
          </p>
        </div>
      </section>

      {/* Extra CSS for neon and animation */}
      <style>{`
        html { scroll-behavior: smooth; }
        .neon-btn:hover, .neon-btn:focus {
          color: #0d0d0d !important;
          background: #00ff99 !important;
          box-shadow: 0 0 32px #00ff99, 0 0 8px #fff;
          border-color: #00ff99 !important;
        }
        .navbar .nav-link {
          color: #eafff7;
          font-family: 'Share Tech Mono', monospace;
          font-size: 18px;
          transition: color 0.2s, text-shadow 0.2s;
        }
        .navbar .nav-link:hover, .navbar .nav-link:focus {
          color: #00ff99;
          text-shadow: 0 0 8px #00ff99;
        }
        @media (max-width: 768px) {
          .display-3 { font-size: 2.2rem; }
          .navbar-brand { font-size: 1.2rem !important; }
        }
      `}</style>
    </>
  );
}
