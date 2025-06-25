import React from 'react';
import { motion } from 'framer-motion';

export default function Brokers() {
  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Recommended Brokers</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-neon">IC Markets</li>
        <li className="list-group-item bg-dark text-neon">Exness</li>
        <li className="list-group-item bg-dark text-neon">Pepperstone</li>
        <li className="list-group-item bg-dark text-neon">Eightcap</li>
      </ul>
      <p className="mt-3" style={{ color: '#baffc9' }}>
        We recommend regulated brokers for the best trading experience. Contact us for personalized advice.
      </p>
    </motion.div>
  );
}
