import React from 'react';
import './charger.css';

export default function Charger({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 1: Electric Charge</h2>
        <p>Electric charge is a fundamental property of matter that causes it to experience a force when placed in an electric or magnetic field. It is the source of electric phenomena and is carried by subatomic particles like electrons and protons.
        </p>
        <p>-----------------------------------------------------</p>
        <p>Types of Charge: There are two types — positive and negative.
        </p>
        <p>Protons have a positive charge.
        </p>
        <p>Electrons have a negative charge.
        </p>
        <p>Neutrons have no charge.
        </p>
        <p>-----------------------------------------------------</p>
        <p>Like charges repel, and opposite charges attract.
        </p>

        <p style={{ marginTop: '20px' }}>
        <a
          href="https://byjus.com/physics/electric-charge/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
      color: '#0077ff',
      textDecoration: 'underline',
      fontFamily: 'monospace'
    }}
  >
    🔗 Click here to learn more about Electric Charge →
  </a>
</p>
      </div>
    </div>
  );
}