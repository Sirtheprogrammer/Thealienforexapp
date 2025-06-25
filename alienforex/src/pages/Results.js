import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';

export default function Results() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      setTestimonials(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchTestimonials();
  }, []);

  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Results & Testimonials</h2>
      <div className="row g-4">
        {testimonials.length === 0 && <div className="text-center text-muted">No testimonials yet.</div>}
        {testimonials.map((t, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <motion.div className="glow-card p-4 h-100 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <img src={t.imageUrl} alt={t.name} className="rounded-circle mb-3" style={{ width: 80, height: 80, objectFit: 'cover', border: '2px solid #39ff14' }} />
              <h5 style={{ color: '#39ff14' }}>{t.name}</h5>
              <p style={{ color: '#baffc9' }}>{t.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
