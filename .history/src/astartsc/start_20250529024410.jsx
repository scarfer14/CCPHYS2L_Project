import React from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';

function Start() {
  const navigate = useNavigate();

  //navigate to the dashboard
  const handleUnlock = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="screen">
      <div className="welcome">WELCOME TO</div>
      <div className="title">INTERACTIVE<br />PHYSICS EXPLORER</div>
      <button className="unlock-btn" onClick={handleUnlock}>PRESS TO UNLOCK</button>
    </div>
  );
}

export default Start;
