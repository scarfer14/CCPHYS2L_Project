import React from 'react';
import './book.css';

export default function Folder1({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Biography of Galileo Galilie</h2>
        <p>Add niyo na lang po here gehehe</p>
      </div>
    </div>
  );
}