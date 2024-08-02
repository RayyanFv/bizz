// src/pages/BizliveInsight.js
import React from 'react';
import '../Styles/Bizlive.css';

const webinars = [
  {
    id: 1,
    title: "Manajemen Keuangan UMKM: Dari Dasar Sampai Mahir",
    description: "Ini deskripsi singkat webinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "#",
    date: "22 April 2024, 10:00 AM",
    image: "path-to-image-1.jpg",
  },
  {
    id: 2,
    title: "Kolaborasi dan Jaringan untuk Pertumbuhan UMKM",
    description: "Ini deskripsi singkat webinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "#",
    date: "22 April 2024, 10:00 AM",
    image: "path-to-image-2.jpg",
  },
  {
    id: 3,
    title: "Menghadapi Tantangan Ekonomi dengan Inovasi",
    description: "Ini deskripsi singkat webinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "#",
    date: "22 April 2024, 10:00 AM",
    image: "path-to-image-3.jpg",
  },
];

const BizliveInsight = () => {
  return (
    <div className="bizlive-insight">
      {/* <header className="bizlive-header"> */}
        <h1>BizLive Insight</h1>
        <nav className="bizlive-nav">
          <a href="#jadwal-webinar">Jadwal Webinar</a>
          <a href="#jadwal-webinar">Jadwal Webinar</a>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
          </div>
        </nav>
      {/* </header> */}
      <main className="bizlive-content">
        {webinars.map((webinar) => (
          <div key={webinar.id} className="webinar-card">
            <img src={webinar.image} alt={webinar.title} />
            <div className="webinar-details">
              <h2>{webinar.title}</h2>
              <p>{webinar.description}</p>
              <a href={webinar.link} className="webinar-link">Link Webinar</a>
              <p className="webinar-date">Mulai Webinar {webinar.date}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BizliveInsight;
