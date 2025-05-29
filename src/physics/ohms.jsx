import React from 'react';
import './ohms.css';

export default function Ohms ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 6: Ohm's Law </h2>
        <p>Insert here the lesson about the electric charger and fix the format.</p>
      </div>
    </div>
  );
}
