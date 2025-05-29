import React from 'react';
import './dashnavbar.css';

const icons = [
  'folder', 'book', 'email', 'calc', 'cat',
  'lock', 'fire', 'info', 'star'
];

export default function DashNavbar({ onFolderClick }) {
  return (
    <div className="dash-navbar">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="icon-button"
          title={icon}
          onClick={icon === 'folder' ? onFolderClick : null}
        >
          <img src={`/assets/icons/${icon}.png`} alt={icon} />
        </button>
      ))}
    </div>
  );
}
