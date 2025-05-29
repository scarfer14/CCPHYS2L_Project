import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Start from './astartsc/start';
import Dash from './bdashsc/dashnavbar';
import Dashbody from './bdashsc/dashbody';

import Folder1 from './lessons/folder1';
import Book from './lessons/book';

import Charger from './physics/charger';

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

function Lessons() {
  return (
    <div>
      <Folder1 />
      <Book />
    </div>
  );
}

function Lessons() {
  return (
    <div>
      <Folder1 />
      <Book />
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
        <Route path="/folder1" element={<Lessons />} />
      </Routes>
    </Router>
  );
}

export default App;
