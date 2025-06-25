import React from 'react';
import { motion } from 'framer-motion';

export default function PropFirms() {
  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Prop Firms Challenge Pricing</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-5">
          <motion.div className="glow-card p-4 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="fw-bold" style={{ color: '#39ff14' }}>Phase 1</h4>
            <div className="display-6 mb-2">$100</div>
            <p style={{ color: '#baffc9' }}>We help you pass Phase 1 of your FTMO/MyForexFunds challenge with our proven strategies.</p>
          </motion.div>
        </div>
        <div className="col-md-5">
          <motion.div className="glow-card p-4 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="fw-bold" style={{ color: '#39ff14' }}>Phase 2</h4>
            <div className="display-6 mb-2">$100</div>
            <p style={{ color: '#baffc9' }}>We guide you through Phase 2 and ensure you get funded. 100% transparency.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
