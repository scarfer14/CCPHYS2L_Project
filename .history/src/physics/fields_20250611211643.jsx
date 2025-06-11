import React from 'react';
import './fields.css';

export default function Fields ({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Lesson 2: Electric Field</h2>
        <p>An electric field is a region around a charged object where other electric charges experience a force. It is a way of describing how electric charges interact without touching.</p>
        <p>-----------------------------------------------------</p>
        <p>The electric field (𝐸) at a point in space is defined as the force (𝐹) experienced by a small positive test charge (𝑞) placed at that point:</p>
        <p>E = F/q</p>
        <p>-----------------------------------------------------</p>
        <p>Vector quantity: It has both magnitude and direction Direction: Always away from positive charges, toward negative charges.</p>
        <p>-----------------------------------------------------</p>
        <p>SI unit: Newtons per coulomb (N/C), also expressed as volts per meter (V/m)</p>
        
      </div>
    </div>
  );
}