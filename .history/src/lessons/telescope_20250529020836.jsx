import React from 'react';
import './telescope.css';

export default function Telescope({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2></h2>
        <p>This is the folder's content.</p>
      </div>
    </div>
  );
}