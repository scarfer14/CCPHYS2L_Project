import React from 'react';
import './start.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function start() {
  return (
    <div className="screen">
      <div className="welcome">WELCOME TO</div>
      <div className="title">PHYSICS<br />BLAST</div>
      <button className="unlock-btn">PRESS TO UNLOCK</button>
    </div>
  );
}

export default start;
