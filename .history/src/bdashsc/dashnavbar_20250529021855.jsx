import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashnavbar.css';
import Folder1 from '../lessons/folder1'; 
import Book from '../lessons/book'; 
import Email from '../lessons/email'; 
import Telescope from '../lessons/telescope'; 


const icons = [
  'folder', 'book', 'email', 'calc', 'cat',
  'lock', 'info', 'star'
];

export default function DashNavbar() {
  const [showFolder1, setShowFolder1] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showTelescope, setShowTelescope] = useState(false);

  const handleIconClick = (icon) => {
    if (icon === 'folder') {
      setShowFolder1(true);
    }
    if (icon === 'book') {
      setShowBook(true);
    }
    if (icon === 'email') {
      setShowEmail(true);
    }
    if (icon === 'cat') {
      setShowTelescope(true);
    }
    else if (icon -===)

    // Add other icon-specific actions here if needed
  };

  const handleCloseFolder1 = () => {
    setShowFolder1(false);
  };

  const handleCloseBook = () => {
    setShowBook(false);
  };

  const handleCloseEmail = () => {
    setShowEmail(false);
  };

  const handleCloseTelescope = () => {
    setShowTelescope(false);
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
      {showBook && <Book onClose={handleCloseBook} />}
      {showEmail && <Email onClose={handleCloseEmail} />}
      {showTelescope && <Telescope onClose={handleCloseTelescope} />}
    </>
  );
}
