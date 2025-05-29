import React, { useState } from 'react';
import './dashbody.css';

import Charger from '../physics/charger';

export default function DashBody() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (lesson) => {
    setActivePopup(lesson);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
     <div className="dashboard-wrapper">
      <div className="dashboard-content">

        {/* Left Column */}
        <div className="tab fun-facts">
          <div className="tab-header">Fun Facts</div>
          <p>Newton once put a needle in his eye to check the influence on his vision...</p>
        </div>

        <div className="tab multimedia">
          <div className="tab-header1">Multimedia</div>
          <iframe
            src="https://www.youtube.com/embed/pSHVbLPWA28"
            title="Physics Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bottom-left">
          <div className="tab problem">
            <div className="tab-header1">Problem of the Day</div>
            <p>Riddle: No matter the speed or where you’re at, I stay constant and precise...</p>
          </div>
          <div className="tab father">
            <div className="tab-header">Father of Physics</div>
            <img src="/assets/icons/galileogalilei.jpg" alt="Galileo Galilei" />
          </div>
        </div>

        {/* Right Column */}
        <div className="tab physics-folder">
          <div className="tab-header1">Physics Folder</div>
          <div className="folder-grid">
            <button className="folder-btn" onClick={() => openPopup('charger')}>
              <img src="/assets/icons/physics.png" alt="Folder 1" />
              <span>Electric Charger</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('')}> {/* insert here the path from the folder physics for the lessons. */}
              <img src="/assets/icons/physics.png" alt="Folder 2" />
              <span>Electric Field</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('folder3')}>
              <img src="/assets/icons/physics.png" alt="Folder 3" />
              <span>Electric Potential</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('folder4')}>
              <img src="/assets/icons/physics.png" alt="Folder 4" />
              <span>Capacitors</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('folder5')}>
              <img src="/assets/icons/physics.png" alt="Folder 5" />
              <span>Resistivity & Resistance</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('folder6')}>
              <img src="/assets/icons/physics.png" alt="Folder 6" />
              <span>Ohm's Law</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('folder7')}>
              <img src="/assets/icons/physics.png" alt="Folder 7" />
              <span>Maxwell's Equations</span>
            </button>
          </div>
        </div>

        <div className="tab calculator">
          <div className="tab-header">Calculator</div>
          <p>[ Calculator UI here later ]</p>
        </div>

        {/* Popups */}
        {activePopup === 'charger' && <Charger onClose={closePopup} />}
        {/* Add more popup components as needed:
            {activePopup === 'folder2' && <Folder2 onClose={closePopup} />} */}
      </div>
    </div>
  );
}