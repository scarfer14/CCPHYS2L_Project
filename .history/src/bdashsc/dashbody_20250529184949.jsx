import React from 'react';
import './dashbody.css';

export default function DashBody() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">

        {/* Left Column */}
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

        <div className="bottom-left">
          <div className="tab problem">
            <div className="tab-header1">Problem of the Day</div>
            <p>What causes the universe’s matter-antimatter imbalance? A fundamental unsolved problem in modern physics.</p>
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
            <button className="folder-btn">
              <img src="/assets/icons/physics.png" alt="Folder 1" />
              <span>Folder 1</span>
            </button>
            <button className="folder-btn">
              <img src="/assets/icons/physics.png" alt="Folder 2" />
              <span>Folder 2</span>
            </button>
            <button className="folder-btn">
    <img src="/assets/icons/physics.png" alt="Folder 3" />
    <span>Folder 3</span>
  </button>
  <button className="folder-btn">
    <img src="/assets/icons/physics.png" alt="Folder 4" />
    <span>Folder 4</span>
  </button>
  <button className="folder-btn">
    <img src="/assets/icons/physics.png" alt="Folder 5" />
    <span>Folder 5</span>
  </button>
  <button className="folder-btn">
    <img src="/assets/icons/physics.png" alt="Folder 6" />
    <span>Folder 6</span>
  </button>
  <button className="folder-btn">
    <img src="/assets/icons/physics.png" alt="Folder 7" />
    <span>Folder 7</span>
  </button>
</div>

        </div>

        <div className="tab calculator">
          <div className="tab-header">Calculator</div>
          <p>[ Calculator UI here later ]</p>
        </div>

      </div>
    </div>
  );
}
