import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AlienAIAssistant from './components/AlienAIAssistant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';

// Page imports (to be created)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Results from './pages/Results';
import Payments from './pages/Payments';
import Brokers from './pages/Brokers';
import PropFirms from './pages/PropFirms';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/brokers" element={<Brokers />} />
            <Route path="/prop-firms" element={<PropFirms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <AlienAIAssistant />
      </div>
    </Router>
  );
}

export default App;
