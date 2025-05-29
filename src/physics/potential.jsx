import React from 'react';
import './potential.css';

export default function Potential ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 3: Electric Potential</h2>
        <p>Insert here the lesson about the electric charger and fix the format.</p>
      </div>
    </div>
  );
}
