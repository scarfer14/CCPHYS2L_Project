import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashnavbar.css';
import Folder1 from '../lessons/folder1'; 
import Book from '../lessons/book'; 
import Email from '../lessons/email'; 
import Telescope from '../lessons/telescope'; 
import DesmosCalc from '../components/desmoscalc';


const icons = [
  'folder', 'book', 'email', 'calc', 'cat',
  'star', 'lock'
];


export default function DashNavbar() {
  const navigate = useNavigate();
  const [showFolder1, setShowFolder1] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
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
    if (icon == 'calc'){
      setShowCalculator(true);
    }
    if (icon === 'cat') {
      setShowTelescope(true);
    }
    else if (icon === 'lock')
    {
        navigate('/unlock');
    }
    else if (icon === 'star')
    {
        window.open('https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html');
    }


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

  const handleCloseCalculator = () => {
    setShowCalculator(false);
  }

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
      {showCalculator && (
        <div className="popup-overlay" onClick={handleCloseCalculator}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="calc-close-btn" onClick={handleCloseCalculator}> × </button>
            <DesmosCalc />
          </div>
        </div>
      )}

      {showTelescope && <Telescope onClose={handleCloseTelescope} />}
    </>
  );
}
