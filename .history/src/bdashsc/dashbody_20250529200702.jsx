import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashbody.css';

export default function DashBody() {
  const navigate = useNavigate();
  return (
    
    <div className="dashboard-wrapper">
      <div className="dashboard-content">

        {/* Left Column */}
        <div className="tab fun-facts">
          <div className="tab-header">Fun Facts</div>
          <p>Newton once put a needle in his eye to check the influence on his vision. He stuck a blunt needle into his eye socket and recorded seeing colored circles and other visual phenomena.</p>
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
            <p> Riddle: No matter the speed or where you’re at, I stay constant and precise, that’s a fact. What am I?</p>
          </div>
          <div className="tab father">
            <div className="tab-header">Father of Physics</div>
            <img src="/assets/icons/galileogalilei.jpg" alt="Galileo Galilei" />
          </div>
        </div>

        {/* Right Column */}
        <div className="tab physics-folder">
          <div className="tab-header1">Physics Folder</div>
        
        </div>

        <div className="tab calculator">
          <div className="tab-header">Calculator</div>
          <p>[ Calculator UI here later ]</p>
        </div>

      </div>
    </div>
  );
}
