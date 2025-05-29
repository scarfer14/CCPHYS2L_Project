import React from 'react';
import './resistance.css';

export default function Resistance ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 5: Resistivity and Resistance </h2>
        <p>Insert here the lesson about the electric charger and fix the format.</p>
      </div>
    </div>
  );
}
