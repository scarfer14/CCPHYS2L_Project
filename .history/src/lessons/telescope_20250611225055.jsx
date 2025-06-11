import React from 'react';
import './telescope.css';

export default function Telescope({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Galileo and the Telescope</h2>
        <p>The invention of the telescope played an important role in advancing our understanding of Earth's place in the cosmos. 
          While there is evidence that the principles of telescopes were known in the late 16th century, the first telescopes were created in the Netherlands in 1608. 
          Spectacle makers Hans Lippershey & Zacharias Janssen and Jacob Metius independently created telescopes. 
          The telescope emerged from a tradition of craftsmanship and technical innovation around spectacles and developments in the science of optics traced back through Roger Bacon and a series of Islamic scientists, in particular Al-Kindi (c. 801–873), Ibn Sahl (c. 940-1000) and Ibn al-Haytham (965–1040).</p>
      </div>
    </div>
  );
}