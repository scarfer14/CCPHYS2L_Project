import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashbody.css';

import Charger from './physics/charger';

export default function DashBody() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (lesson) => {
    setActivePopup(lesson);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    