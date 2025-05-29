import React from 'react';
import './email.css';

export default function Folder1({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Interactive Physics Notebook</h2>
        <p>What is this project all about? </p>
      </div>
    </div>
  );
}