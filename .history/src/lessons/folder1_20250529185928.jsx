import React from 'react';
import './folder1.css';

export default function Folder1({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Physics Folder Topics</h2>
        <p>The following are the list of lessons about Physics:
          1. Electric Charger
          2. Electric Field
          3. Electric Potential
          4. Capacitors
          5. Resistivity & Resistance
          6. Ohm's Law
          7. Maxwell's 
        </p>
      </div>
    </div>
  );
}