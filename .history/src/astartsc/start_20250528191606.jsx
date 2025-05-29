import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import the hook
import ""

function Start() {
  const navigate = useNavigate(); // ✅ Initialize the navigate function

  const handleUnlock = () => {
    navigate('/dashboard'); // ✅ Navigate to /dashboard
  };

  return (
    <div className="screen">
      <div className="welcome">WELCOME TO</div>
      <div className="title">PHYSICS<br />BLAST</div>
      <button className="unlock-btn" onClick={handleUnlock}>PRESS TO UNLOCK</button>
    </div>
  );
}

export default Start;
