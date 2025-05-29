import React from 'react';
import './book.css';

export default function Folder1({ onClose }) {
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