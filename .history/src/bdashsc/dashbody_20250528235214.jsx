import React from 'react';
import './dashbody.css';

export default function DashBody() {
  return (
    <div className="dashboard-content">
      
      <div className="tab fun-fact">
        <div className="tab-header">Fun Fact</div>
        <p>Did you know? Neutron stars can spin at a rate of 600 rotations per second!</p>
      </div>

      <div className="tab multimedia">
        <div className="tab-header1">Multimedia</div>
        <iframe
          src="https://www.youtube.com/embed/pSHVbLPWA28"
          title="Physics Video"
          allowFullScreen
        ></iframe>
      </div>

      <div className="tab folders">
        <div className="tab-header1">Folders</div>
        <button>Folder 1</button>
        <button>Folder 2</button>
        <button>Folder 3</button>
      </div>

      <div className="tab image">
        <div className="tab-header">Image</div>
        <img src="/assets/icons/folder.png" alt="Sample" />
      </div>

      <div className="tab physics-problem">
        <div className="tab-header1">Unsolved Problem</div>
        <p>
          What causes the universe’s matter-antimatter imbalance? A fundamental unsolved problem in modern physics.
        </p>
      </div>

      <div className="tab fun-fact-2">
        <div className="tab-header1">Another Fun Fact</div>
        <p>The coldest place in the universe is the Boomerang Nebula at -458°F!</p>
      </div>

      <div className="tab calculator">
        <div className="tab-header">Calculator</div>
        <p>[ Calculator UI here later ]</p>
      </div>

    </div>
  );
}
