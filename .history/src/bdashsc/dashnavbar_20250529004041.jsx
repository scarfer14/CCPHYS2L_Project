import React, { useState } from 'react';
import './dashnavbar.css';
import Folder1 from '../lessons/folder1'; // adjust path if needed

const icons = [
  'folder', 'book', 'email', 'calc', 'cat',
  'lock', 'fire', 'info', 'star'
];

export default function DashNavbar() {
  const [showFolder, setShowFolder] = useState(false);

  const handleIconClick = (icon) => {
    if (icon === 'folder') {
      setShowFolder(true);
    }
    // handle other icons here if needed
  };

  const closePopup = () => {
    setShowFolder(false);
  };

  return (
    <>
      <div className="dash-navbar">
        {icons.map((icon, index) => (
          <button
            key={index}
            className="icon-button"
            title={icon}
            onClick={() => handleIconClick(icon)}
          >
            <img src={`/assets/icons/${icon}.png`} alt={icon} />
          </button>
        ))}
      </div>

      {showFolder && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>×</button>
            <Folder1 />
          </div>
        </div>
      )}
    </>
  );
}
