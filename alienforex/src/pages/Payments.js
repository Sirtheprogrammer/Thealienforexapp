import React from 'react';
import { motion } from 'framer-motion';

export default function Payments() {
  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Payments</h2>
      <p style={{ color: '#baffc9' }}>
        Payments are handled securely via bank transfer, mobile money, or crypto. Please contact us for details and instructions.<br />
        <span style={{ color: '#39ff14' }}>Payment gateway coming soon!</span>
      </p>
    </motion.div>
  );
}
