import React from 'react';
import './folder1.css';

export default function Folder1({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Folder 1 Content</h2>
        <p>This is the folder's content.</p>
      </div>
    </div>
  );
}
