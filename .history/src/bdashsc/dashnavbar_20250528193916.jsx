import React from 'react';
import { useNavigate } from 'react-router-dom';
import './.css';

const icons = [
  'folder', 'book', 'email', 'calc', 'cat',
  'lock', 'fire', 'info', 'star'
];

export default function DashNavbar() {
  return (
    <div className="dash-navbar">
      {icons.map((icon, index) => (
        <button key={index} className="icon-button" title={icon}>
          <img src={`/assets/icons/${icon}.png`} alt={icon} />
        </button>
      ))}
    </div>
  );
}
