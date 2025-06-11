import React, { useState } from 'react';
import DesmosCalc from '../components/DesmosCalc';  //import for calc api
import './dashbody.css';

// import here the jsx from physics folder
import Charger from '../physics/charger';
import Fields from '../physics/fields';
import Capacitors from '../physics/capacitors';
import Maxwell from '../physics/maxwell';
import Ohms from '../physics/ohms';
import Potential from '../physics/potential';
import Resistance from '../physics/resistance';


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

        {/* Left Grid */}
        <div className="tab fun-facts">
          <div className="tab-header">Fun Facts</div>
          <p>🤔 Did you know?</p>
          <p>Everything that you can see, you are seeing from the past because of the finite speed of light. ☄️</p>
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
            <p>🧠 Question: </p>
            <p> Interstate 70 is a highway that runs through the heartland of the United States. If traveler A drove 100 miles along Interstate 70 at 65 mph and traveler B drove the same distance at 55 mph, how much earlier would traveler A arrive?</p>
          </div>
          <div className="tab father">
            <div className="tab-header">Father of Physics</div>
            <img src="/assets/icons/isaac.jpg" alt="Galileo Galilei" />
          </div>
        </div>

        {/* Right grid  */}
        <div className="tab physics-folder">
          <div className="tab-header1">Physics Folder</div>
          <div className="folder-grid">
            <button className="folder-btn" onClick={() => openPopup('charger')}>
              <img src="/assets/icons/physics.png" alt="Folder 1" />
              <span>Electric Charge</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('fields')}> {/* insert path from the folder physics (lessons) */}
              <img src="/assets/icons/physics.png" alt="Folder 2" />
              <span>Electric Field</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('potential')}>
              <img src="/assets/icons/physics.png" alt="Folder 3" />
              <span>Electric Potential</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('capacitors')}>
              <img src="/assets/icons/physics.png" alt="Folder 4" />
              <span>Capacitors</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('resistance')}>
              <img src="/assets/icons/physics.png" alt="Folder 5" />
              <span>Resistivity & Resistance</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('ohms')}>
              <img src="/assets/icons/physics.png" alt="Folder 6" />
              <span>Ohm's Law</span>
            </button>
            <button className="folder-btn" onClick={() => openPopup('maxwell')}>
              <img src="/assets/icons/physics.png" alt="Folder 7" />
              <span>Maxwell's Equations</span>
            </button>
          </div>
        </div>

        <div className="tab calculator">
          <div className="tab-header">Calculator</div>
          <DesmosCalc />
        </div>


        {activePopup === 'charger' && <Charger onClose={closePopup} />}
        {activePopup === 'fields' && <Fields onClose={closePopup} />}
        {activePopup === 'capacitors' && <Capacitors onClose={closePopup} />}
        {activePopup === 'maxwell' && <Maxwell onClose={closePopup} />}
        {activePopup === 'ohms' && <Ohms onClose={closePopup} />}
        {activePopup === 'potential' && <Potential onClose={closePopup} />}
        {activePopup === 'resistance' && <Resistance onClose={closePopup} />}
      </div>
    </div>
  );
}