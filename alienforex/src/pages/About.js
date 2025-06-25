import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>About Us</h2>
      <p style={{ color: '#baffc9' }}>
        ALIEN FOREX TRADING is a futuristic fintech brand dedicated to empowering traders with mentorship, signals, and account management. Our team of expert traders and analysts leverages technology and experience to help you succeed in the forex markets. <br /><br />
        <span style={{ color: '#39ff14' }}>Join the alien revolution. Trade smarter, not harder.</span>
      </p>
    </motion.div>
  );
}
