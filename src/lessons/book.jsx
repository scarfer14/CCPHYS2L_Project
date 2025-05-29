import React from 'react';
import './book.css';

export default function Book({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Biography of Galileo Galilei (1564 - 1642)</h2>
        <p> Galileo Galilei was an Italian astronomer, physic Italian astronomer, physicist, and philosopher, widely regarded as a key figure in the Scientific Revolution. He was born in Pisa and initially studied medicine before switching to mathematics and philosophy. He became famous for his astronomical observations using a telescope, including discoveries about the Moon, Jupiter's moons, and the Sun. His support for the heliocentric model of the solar system led to conflict with the Catholic Church, resulting in his trial and house arrest. </p>
        
        <p> Inventions: </p>
        <p> 1. Improved Telescope (1609) </p>
        <p> 2. Thermoscope </p>
        <p> 3. Sector (Mathematical Compass) </p>
        <p> 4. Pendulum Clock Concept </p>
        <p> 5. Water Pump (Archimedean Screw) </p>

        <p> Contributions: </p>
        <p> 1. Law of Falling Bodies </p>
        <p> 2. Inertia and Motion </p>
        <p> 3. Heliocenetrism Support </p>
      </div>
    </div>
  );
}