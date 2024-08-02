// src/pages/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Homepage.css';

const Homepage = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>1 PLATFORM UNTUK MENINGKATKAN PENGEMBANGAN USAHA BERBASIS ARTIFICIAL INTELLIGENCE</h1>
          <button className="btn-primary">Tingkatkan performa bisnismu</button>
        </div>
      </header>
      <section className="section section-intro">
        <div className="section-intro-content">
          <div className="image-content"></div>
          <div className="text-content">
            <h2>Kenalin, Platform Pembawa Perubahan Bagi UMKM di Indonesia</h2>
            <p>Upgrade UMKM merupakan platform inovatif berbasis website yang menyediakan alat dan sumber daya untuk mempercepat pertumbuhan usaha Anda. Dengan dukungan Market, skill, dan data, kami membantu UMKM dalam menghadapi tantangan transformasi digital serta penciptaan pertumbuhan ekonomi berkelanjutan di Indonesia.</p>
          </div>
        </div>
      </section>
      <section className="section section-programs">
        <h2>Program Kami</h2>
        <div className="programs">
          <div className="program-card">
            <h3>BizGuide Pro</h3>
            <p>Fitur Pendampingan Personal UMKM</p>
            <Link to="/bizguide-pro" className="btn-secondary">selengkapnya</Link>
          </div>
          <div className="program-card">
            <h3>SkillBoost Pro</h3>
            <p>Pelatihan dan Sumber Daya</p>
            <Link to="/skillboost-pro" className="btn-secondary">selengkapnya</Link>
          </div>
          <div className="program-card">
            <h3>BizTrack Monitor</h3>
            <p>Pemantauan Kinerja Bisnis</p>
            <Link to="/biztrack-monitor" className="btn-secondary">selengkapnya</Link>
          </div>
          <div className="program-card">
            <h3>DigiMarket Access</h3>
            <p>Pasar Digital</p>
            <Link to="/digimarket" className="btn-secondary">selengkapnya</Link>
          </div>
          <div className="program-card">
            <h3>BizLive Insight</h3>
            <p>Webinar Upgrade UMKM</p>
            <Link to="/bizlive-insight" className="btn-secondary">selengkapnya</Link>
          </div>
          <div className="program-card">
            <h3>BizConnect Hub</h3>
            <p>Jaringan dan Kolaborasi</p>
            <Link to="/bizconnect-hub" className="btn-secondary">selengkapnya</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
