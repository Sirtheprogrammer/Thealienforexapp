import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(servicesData);
      setLoading(false);
    };
    fetchServices();
  }, []);

  if (loading) {
    return <div className="container text-center py-5"><div className="spinner-border text-success" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  }

  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Our Services</h2>
      <div className="row g-4">
        {services.map((s) => (
          <div className="col-md-6 col-lg-3" key={s.id}>
            <motion.div className="glow-card p-4 h-100 text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px #39ff14' }}
            >
              <h4 className="fw-bold" style={{ color: '#39ff14' }}>{s.title}</h4>
              <div className="display-6 mb-2">{s.price}</div>
              <p style={{ color: '#baffc9' }}>{s.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
