import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaPhone, FaEnvelope, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const contacts = [
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+255613886635', link: 'https://wa.me/255613886635' },
  { icon: <FaPhone />, label: 'Call', value: '+255613886635', link: 'tel:+255613886635' },
  { icon: <FaEnvelope />, label: 'Email', value: 'thealienforex255@gmail.com', link: 'mailto:thealienforex255@gmail.com' },
  { icon: <FaInstagram />, label: 'Instagram', value: '@samprofx_255', link: 'https://instagram.com/samprofx_255' },
  { icon: <FaTiktok />, label: 'TikTok', value: '@samprofx_255', link: 'https://tiktok.com/@samprofx_255' },
  { icon: <FaTelegram />, label: 'Telegram', value: '@samprofx_255', link: 'https://t.me/samprofx_255' },
  { icon: <FaTwitter />, label: 'Twitter', value: '@samprofx_255', link: 'https://twitter.com/samprofx_255' },
];

export default function Contact() {
  return (
    <motion.div className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Contact Us</h2>
      <div className="row g-4 justify-content-center">
        {contacts.map((c, i) => (
          <div className="col-6 col-md-4 col-lg-3" key={i}>
            <motion.a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card d-block p-4 text-center text-decoration-none"
              whileHover={{ scale: 1.07, boxShadow: '0 0 40px #39ff14' }}
              style={{ color: '#39ff14', fontSize: 28 }}
            >
              <div>{c.icon}</div>
              <div className="fw-bold mt-2">{c.label}</div>
              <div style={{ fontSize: 16, color: '#baffc9' }}>{c.value}</div>
            </motion.a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
