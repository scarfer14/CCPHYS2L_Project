import React from 'react';
import './folder1.css';

export default function Folder1({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Physics Folder Topics</h2>
        <p>The following are the list of lessons about Physics:
          1. 
        </p>
      </div>
    </div>
  );
}