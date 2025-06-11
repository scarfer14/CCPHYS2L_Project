import React from 'react';
import './capacitors.css';

export default function Capacitors({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 4: Capacitors </h2>
        <p>Capacitors are electronic components that store and release electrical energy in a circuit. They act like temporary batteries, storing energy in the form of an electric field.</p>
        <p>A capacitor is made of: Two conductive plates (usually metal), separated by an insulating material called a dielectric</p>
        <p>-----------------------------------------------------</p>
        <p>When voltage is applied across the plates, one plate accumulates positive charge, and the other accumulates negative charge, creating an electric field between them.</p>
        <p>-----------------------------------------------------</p>
        <p>The ability of a capacitor to store charge is called capacitance.</p>
        <p>-----------------------------------------------------</p>
        <p>C = Q/V</p>
        <p>While:</p>
        <p>C = capacitance</p>
        <p>Q = charge stored</p>
        <p>V = voltage applied</p>

        <p style={{ marginTop: '20px' }}>
        <a
          href="https://www.electronics-tutorials.ws/capacitor/cap_1.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
      color: '#0077ff',
      textDecoration: 'underline',
      fontFamily: 'monospace'
    }}
  >
    🔗 Click here to learn more about Capacitors →
  </a>
</p>
      </div>
    </div>
  );
}