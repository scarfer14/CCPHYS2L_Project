import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Start from './astartsc/start';
import Dash from './bdashsc/dashnavbar';
import Dashbody from './bdashsc/dashbody';

function Unlock() {
  return (
    <div>
      <Start />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <Dash />
      <Dashbody />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Unlock />} /> 
        <Route path="/unlock" element={<Unlock />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
