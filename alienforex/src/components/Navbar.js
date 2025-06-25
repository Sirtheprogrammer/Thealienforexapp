import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/theme.css';

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg sticky-top px-3" style={{ background: 'rgba(13,13,13,0.95)', borderBottom: '2px solid #00ff99' }}>
    <Link className="navbar-brand d-flex align-items-center" to="/" style={{ fontFamily: 'Orbitron, Share Tech Mono, monospace', fontWeight: 900, fontSize: 24, color: '#00ff99', textShadow: '0 0 12px #00ff99' }}>
      <img src="https://i.ibb.co/99GDshxN/IMG-1181.jpg" alt="logo" width="40" height="40" className="rounded-circle me-2 border border-success" style={{ boxShadow: '0 0 10px #00ff99' }} />
      ALIEN FOREX TRADING
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
            <li><NavLink className="dropdown-item" to="/services">All Services</NavLink></li>
            <li><NavLink className="dropdown-item" to="/services#mentorship">Mentorship</NavLink></li>
            <li><NavLink className="dropdown-item" to="/services#signals">Signals</NavLink></li>
            <li><NavLink className="dropdown-item" to="/services#challenges">Challenges</NavLink></li>
            <li><NavLink className="dropdown-item" to="/services#account-management">Account Management</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="/prop-firms">Prop Firms</NavLink></li>
            <li><NavLink className="dropdown-item" to="/brokers">Brokers</NavLink></li>
            <li><NavLink className="dropdown-item" to="/payments">Payments</NavLink></li>
            <li><NavLink className="dropdown-item" to="/results">Results</NavLink></li>
            <li><NavLink className="dropdown-item" to="/contact">Contact</NavLink></li>
          </ul>
        </li>
        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
