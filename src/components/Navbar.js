// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [menuActive, setMenuActive] = useState(false);

  const handleLogout = () => {
    auth.signOut();
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-text">UPGRADE UMKM</Link>
        </div>
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuActive(false)}>HOME</Link></li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">PROGRAMS</button>
              <div className="dropdown-content">
                <Link to="/biztrack-monitor" onClick={() => setMenuActive(false)}>Biztrack Monitor</Link>
                <Link to="/digimarket" onClick={() => setMenuActive(false)}>Digimarket</Link>
                <Link to="/bizlive-insight" onClick={() => setMenuActive(false)}>Bizlive Insight</Link>
                <Link to="/bizguide-pro" onClick={() => setMenuActive(false)}>BizGuide Pro</Link>
                <Link to="/skillboost-pro" onClick={() => setMenuActive(false)}>Skillboost Pro</Link>
              </div>
            </div>
          </li>
          <li><Link to="/mentors" onClick={() => setMenuActive(false)}>MENTORS</Link></li>
          <li><Link to="/personal" onClick={() => setMenuActive(false)}>PERSONAL</Link></li>
          <li><Link to="/business" onClick={() => setMenuActive(false)}>BUSINESS</Link></li>
          {user ? (
            <>
              <li><button className="logout-button" onClick={() => { handleLogout(); setMenuActive(false); }}>Logout</button></li>
              <li className="navbar-user-email">{user.email}</li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="login-link" onClick={() => setMenuActive(false)}>Login</Link></li>
              <li><Link to="/register" className="register-link" onClick={() => setMenuActive(false)}>Register</Link></li>
            </>
          )}
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
