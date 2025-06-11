import React from 'react';
import './potential.css';

export default function Potential ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 3: Electric Potential</h2>
        <p>Electric potential is the amount of electric potential energy per unit charge at a specific point in an electric field. It tells you how much work is needed to move a unit positive charge from a reference point (usually infinity) to that point.</p>
        <p>-----------------------------------------------------</p>
        <p>V = U/q</p>
        <p>While:</p>
        <p>V = Electric potential (in volts)</p>
        <p>U = Electric potential energy (in joules)</p>
        <p>q = Electric charge (in coulombs)</p>
        <p>-----------------------------------------------------</p>
        <p>Electric potential is like height in a gravitational field.
            Just as water flows from high to low elevation, electric charges move from high potential to low potential.</p>
        <p>It doesn’t describe the force, but rather the “energy landscape” that charges move through.</p>   

        <p style={{ marginTop: '20px' }}>
        <a
          href="https://www.physicsclassroom.com/class/circuits/Lesson-1/Electric-Potential"
          target="_blank"
          rel="noopener noreferrer"
          style={{
      color: '#0077ff',
      textDecoration: 'underline',
      fontFamily: 'monospace'
    }}
  >
    🔗 Click here to learn more about Electric Potential →
  </a>
</p> 
      </div>
    </div>
  );
}
