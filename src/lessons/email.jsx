import React from 'react';
import './email.css';

export default function Email({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Interactive Physics Notebook</h2>
        <p>This engaging and educational project combines core physics lessons with interactive and fun elements to enhance learning. Here's what it includes: </p>

        <p>🧮 Calculator: A built-in tool for solving physics problems quickly and accurately. </p>
        <p>🎥 Video: A visual explanation or demonstration of how big is the universe. </p>
        <p>🧠 Riddle: A brain-teasing physics riddle to stimulate curiosity and critical thinking. </p>
        <p>📚 Physics Lessons: Comprehensive, student-friendly lessons covering the main topics in physics curriculum. </p>
        <p>🤓 Fun Fact: A cool or surprising physics-related fact to spark interest. </p>
        <p>🧔‍♂️ Biography of Galileo Galilei: A brief look into the life and legacy of one of the founding fathers of modern physics.</p>
      </div>
    </div>
  );
}