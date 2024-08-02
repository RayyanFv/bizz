// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Digimarket from './pages/Digimarket';
import BiztrackMonitor from './pages/BiztrackMonitor';
import BizliveInsight from './pages/BizliveInsight';
import SkillboostPro from './pages/SkillboostPro';
import BizzguidePro from './pages/BizguidePro';
import Login from './pages/Login';
import Register from './pages/Register';
import '../src/Styles/style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/digimarket" element={<Digimarket />} />
          <Route path="/biztrack-monitor" element={<BiztrackMonitor />} />
          <Route path="/bizlive-insight" element={<BizliveInsight />} />
          <Route path="/skillboost-pro" element={<SkillboostPro />} />
          <Route path="/bizzguide-pro" element={<BizzguidePro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
