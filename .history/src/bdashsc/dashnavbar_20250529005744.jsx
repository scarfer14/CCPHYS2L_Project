import React, { useState } from 'react';
import './dashnavbar.css';
import Folder1 from '../lessons/folder1'; 
import Folder1 from '../lessons/folder1'; 


const icons = [
  'folder', 'book', 'email', 'calc', 'cat',
  'lock', 'fire', 'info', 'star'
];

export default function DashNavbar() {
  const [showFolder1, setShowFolder1] = useState(false);
  const [showBook, setShowbook] = useState(false);

  const handleIconClick = (icon) => {
    if (icon === 'folder') {
      setShowFolder1(true);
    }
    if (icon === 'book') {
      setShowbook(true);
    }
    // Add other icon-specific actions here if needed
  };


  const handleCloseFolder1 = () => {
    setShowFolder1(false);
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

      {showFolder1 && <Folder1 onClose={handleCloseFolder1} />}
    </>
  );
}
