import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Start from './astartsc/start';
import Dash from './bdashsc/dashnavbar';

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
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Unlock />} />          {/* ✅ root path */}
        <Route path="/unlock" element={<Unlock />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
