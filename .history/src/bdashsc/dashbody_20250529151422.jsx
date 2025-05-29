import React from 'react';
import './dashbody.css';

export default function DashBody() {
  return (
    <div className="dashboard-content">

      <div className="tab fun-facts">
        <div className="tab-header">Fun Facts</div>
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

      <div className="tab physics-folder">
        <div className="tab-header1">Physics Folder</div>
        <div className="folder-grid">
          <img src="/assets/icons/folder.png" alt="Folder 1" />
          <img src="/assets/icons/folder.png" alt="Folder 2" />
          <img src="/assets/icons/folder.png" alt="Folder 3" />
          <img src="/assets/icons/folder.png" alt="Folder 4" />
          <img src="/assets/icons/folder.png" alt="Folder 5" />
          <img src="/assets/icons/folder.png" alt="Folder 6" />
          <img src="/assets/icons/folder.png" alt="Folder 7" />
        </div>
      </div>

    <div className="middle-stack">
      <div className="tab father">
        <div className="tab-header">Father of Physics</div>
        <img src="/assets/icons/galileogalilei.jpg" alt="Galileo Galilei" />
      </div>

      <div className="tab calculator">
        <div className="tab-header">Calculator</div>
        <p>[ Calculator UI here later ]</p>
    </div>
    </div>


      <div className="right-stack">
        <div className="tab fun-fact-2">
          <div className="tab-header1">True or False</div>
          <p>The color bands on a resistor are just decoration. True or False.</p>
        </div>

        <div className="tab problem">
          <div className="tab-header1">Problem of the Day</div>
          <p>
            What causes the universe’s matter-antimatter imbalance? A fundamental unsolved problem in modern physics.
          </p>
        </div>
      </div>

    </div>
  );
}
