import React from 'react';
import './ohms.css';

export default function Ohms ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 6: Ohm's Law </h2>
        <p>Ohm’s Law is a fundamental principle in electricity that shows the relationship between voltage, current, and resistance in an electric circuit.</p>
        <p>V = I x R, I = V/R and R = V/I </p>
        <p>While:</p>
        <p>V = Voltage (in volts, V)</p>
        <p>I = Current (in amperes, A)</p>
        <p>R = Resistance (in ohms, Ω)</p>
        <p>These formulas allow you to calculate any one of the three quantities if the other two are known.</p>
        <p>If voltage increases, current increases (if resistance stays the same). If resistance increases, current decreases (for a given voltage). </p>
        <p>This law describes how electrons flow in a conductor when a voltage is applied.</p>
      </div>
    </div>
  );
}
