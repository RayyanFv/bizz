// src/pages/BiztrackMonitor.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BiztrackMonitor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://uumkmdemomonitor.streamlit.app/';
  }, [navigate]);

  return (
    <div>
      <h2>Redirecting to BizTrack Monitor...</h2>
    </div>
  );
};

export default BiztrackMonitor;
