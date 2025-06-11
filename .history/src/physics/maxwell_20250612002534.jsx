import React from 'react';
import './maxwell.css';

export default function Maxwell ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 7: Maxwell's Equations</h2>
        <p>Maxwell's Equations are a set of four fundamental equations in physics that describe how electric and magnetic fields behave and interact. 
          They are the foundation of electromagnetism, and explain how electric charges and currents produce electric and magnetic fields — and how those fields change over time.</p>
        <p>---------------------------------------------------</p>
        <p>1. Gauss’s Law for Electricity</p>
        <p>What it says: Electric charges create electric fields.</p>
        <p>∇ × E= 𝜌/𝜀0</p>
        <p>While:</p>
        <p>𝐸: Electric field</p>
        <p>𝜌: Electric charge density</p>
        <p>𝜀0: Permittivity of free space</p>
        <p>Interpretation: The electric field diverges from positive charges and converges at negative charges.</p>
        <p>---------------------------------------------------</p>
        <p>2. Gauss’s Law for Magnetism</p>
        <p>What it says: There are no magnetic monopoles (no isolated "magnetic charges").</p>
        <p>While:</p>
        <p>∇ × B = 0</p>
        <p>B: Magnetic field</p>
        <p>Interpretation: Magnetic field lines always form closed loops — they don’t start or end at any point like electric field lines.</p>
        <p>---------------------------------------------------</p>
        <p>3. Faraday’s Law of Induction</p>
        <p>What it says: A changing magnetic field creates an electric field.</p>
        <p>While:</p>
        <p>∇ × E= -(∂B/∂t)</p>
        <p>𝐸: Electric field</p>
        <p>B: Magnetic field</p>
        <p>Interpretation: This is the principle behind electric generators — moving magnets can generate electricity.</p>
        <p>---------------------------------------------------</p>
        <p>4. Ampère’s Law (with Maxwell’s Addition)</p>
        <p>While:</p>
        <p>What it says: A changing electric field or electric current creates a magnetic field.</p>
        <p>∇ × B =𝜇0𝐽 + 𝜇0𝜀0(∂E/∂t)</p>
        <p>B: Magnetic field</p>
        <p>𝐽: Current density</p>
        <p>𝜀0: Permittivity of free space</p>
        <p>𝜇0: Permeability of free space</p>
        <p>Interpretation: This is the principle behind electromagnets and wireless communication.</p>

        <p style={{ marginTop: '20px' }}>
        <a
          href="https://byjus.com/physics/maxwells-equations/"
          target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#0077ff',
      textDecoration: 'underline',
      fontFamily: 'monospace'
    }}
  >
    🔗 Click here to learn more about Maxwell's Equations →
  </a>
</p>
      </div>
    </div>
  );
}
