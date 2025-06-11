import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// this is for start screen
import Start from './astartsc/start';

// this is for dashboard screen
import Dash from './bdashsc/dashnavbar';
import Dashbody from './bdashsc/dashbody';

import Telescope from './lessons/telescope';


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

function DashContent() {
  return (
    <div>
      <Telescope />
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
        <Route path="/telescope" element={<Telescope />} />
<Route path="/telescope" element={<Telescope />} />

      </Routes>
    </Router>
  );
}


export default App;
