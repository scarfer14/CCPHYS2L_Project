import React from 'react';
import './maxwell.css';

export default function Maxwell ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 7: Maxwell's Equations</h2>
        <p>Insert here the lesson about the electric charger and fix the format.</p>
      </div>
    </div>
  );
}
