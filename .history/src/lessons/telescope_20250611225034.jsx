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

        <p> 
        The story of Galileo's telescopic observations illustrates how a tool for seeing and collecting evidence can dramatically change our understanding of the cosmos.
        Early telescopes were primarily used for making Earth-bound observations, such as surveying and military tactics. 
        Galileo Galilei (1564-1642) was part of a small group of astronomers who turned telescopes towards the heavens. 
        After hearing about the "Danish perspective glass" in 1609, Galileo constructed his own telescope. 
        He subsequently demonstrated the telescope in Venice. His demonstration of the telescope earned him a lifetime lectureship.
        After his initial success, Galileo focused on refining the instrument. 
        The initial telescope he created (and the Dutch ones it was based on) magnified objects three diameters. 
        That is, it made things look three times larger than they did with the naked eye. </p>
        
      </div>
    </div>
  );
}