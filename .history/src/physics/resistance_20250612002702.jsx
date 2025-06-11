import React from 'react';
import './resistance.css';

export default function Resistance ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 5: Resistivity and Resistance </h2>
        <p>Both resistivity and resistance describe how much a material or object opposes the flow of electric current — but they are not the same thing.</p>
        <p>Resistance is the opposition to the flow of electric current in a specific object or component (like a wire or resistor).</p>
        <p>-----------------------------------------------------</p>
        <p>R = V/I</p>
        <p>While:</p>
        <p>R = Resistance (in ohms, Ω)</p>
        <p>V = Voltage (in volts)</p>
        <p>I = Current (in amperes)</p>
        <p>-----------------------------------------------------</p>
        <p>Resistivity is a material property — it tells you how strongly a material resists current flow, regardless of shape or size.</p>
        <p>SI unit: Ohm-meter (Ω·m)</p>
        <p>-----------------------------------------------------</p>
        <p>Low resistivity = good conductor (e.g.,copper,silver) High resistivity = poor conductor / good insulator (e.g., rubber, glass)</p>

        <p style={{ marginTop: '20px' }}>
        <a
          href="https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/09%3A_Current_and_Resistance/9.04%3A_Resistivity_and_Resistance"
          target="_blank"
          rel="noopener noreferrer"
          style={{
      color: '#0077ff',
      textDecoration: 'underline',
      fontFamily: 'monospace'
    }}
  >
    🔗 Click here to learn more about Resistivity & Resistance →
  </a>
</p>
      </div>
    </div>
  );
}
