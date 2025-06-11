import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// this is for start screen
import Start from './astartsc/start';

// this is for dashboard screen
import Dash from './bdashsc/dashnavbar';
import Dashbody from './bdashsc/dashbody';

import Lesosns from '.'


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

//from one page to another
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
