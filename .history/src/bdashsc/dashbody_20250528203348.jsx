import React from 'react';
import './dashbody.css';

export default function DashBody() {
  return (
    <div className="dashboard-content">
      <div className="tab fun-fact">
        <p>Did you know? Neutron stars can spin at a rate of 600 rotations per second!</p>
      </div>

      <div className="tab multimedia">
        <iframe
          src="https://www.youtube.com/embed/z0gAo9wFErg"
          title="Physics Video"
          allowFullScreen
        ></iframe>
      </div>

      <div className="tab folders">
        <button>Folder 1</button>
        <button>Folder 2</button>
        <button>Folder 3</button>
      </div>

      <div className="tab image">
        <img src="/assets/icons/folder.png" alt="Sample" />
      </div>

      <div className="tab physics-problem">
        <p>
          What causes the universe’s matter-antimatter imbalance? A fundamental unsolved problem in modern physics.
        </p>
      </div>

      <div className="tab fun-fact-2">
        <p>The coldest place in the universe is the Boomerang Nebula at -458°F!</p>
      </div>

      <div className="tab calculator">
        <p>[ Calculator UI here later ]</p>
      </div>
    </div>
  );
}
