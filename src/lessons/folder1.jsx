import React from 'react';
import './folder1.css';

export default function Folder1({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Physics Folder Topics</h2>
        <p>The following are the list of lessons about Physics: </p>
        <p>  1. Electric Charge </p>
        <p>  2. Electric Field </p>
        <p>  3. Electric Potential </p>
        <p>  4. Capacitors </p>
        <p>  5. Resistivity & Resistance </p>
        <p>  6. Ohm's Law </p>
        <p>  7. Maxwell's Equations </p>
      </div>
    </div>
  );
}