import React from 'react';
import './fields.css';

export default function Fields ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 2: Electric Field</h2>
        <p>Insert here the lesson about the electric charger and fix the format.</p>
      </div>
    </div>
  );
}