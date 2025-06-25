import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { uploadToImgBB } from '../firebase/imgbb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text || !image) {
      toast.error('All fields required!');
      return;
    }
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_IMGBB_API_KEY;
      const imageUrl = await uploadToImgBB(image, apiKey);
      await addDoc(collection(db, 'testimonials'), { name, text, imageUrl });
      toast.success('Testimonial uploaded!');
      setName(''); setText(''); setImage(null);
    } catch (err) {
      toast.error('Upload failed.');
    }
    setLoading(false);
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4" style={{ color: '#39ff14' }}>Admin: Upload Testimonial</h2>
      <form className="glow-card p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Testimonial</label>
          <textarea className="form-control" value={text} onChange={e => setText(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input className="form-control" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
        </div>
        <button className="btn btn-success" type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}
