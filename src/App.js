// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import BiztrackMonitor from './pages/BiztrackMonitor';
import Digimarket from './pages/Digimarket';
import BizliveInsight from './pages/BizliveInsight';
import BizguidePro from './pages/BizguidePro';
import SkillboostPro from './pages/SkillboostPro';
// import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute if you have

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/biztrack-monitor" element={<BiztrackMonitor />} />
            <Route path="/digimarket" element={<Digimarket />} />
            <Route path="/bizlive-insight" element={<BizliveInsight />} />
            <Route path="/bizguide-pro" element={<BizguidePro />} />
            <Route path="/skillboost-pro" element={<SkillboostPro />} />
          </Route>
          {/* Tambahkan rute fallback */}
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
