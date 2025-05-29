import React from 'react';
import './book.css';

export default function Book({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Biography of Galileo Galilei</h2>
        <p>Add niyo na lang po here gehehe</p>
      </div>
    </div>
  );
}