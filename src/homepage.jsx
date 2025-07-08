import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <VideoBackground />

      <div className="content">
        <h1>Welcome Adventurers!!</h1>
        <p>Begin Your Quest...</p>

        <button onClick={() => navigate('/sessions')} className="btn">
          View Sessions
        </button>
      </div>
    </>
  );
}
