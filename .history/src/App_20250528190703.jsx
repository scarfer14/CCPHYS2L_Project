import React from 'react';
import { useState } from 'react'

import Start from './astartsc/start';
import Dash from './bdashsc/dashnavbar';


function Unlock() {
  return (
    <>
    <div>
      <Start />
    </div>
    </>
  )
}

function Dashboard() {
  return (
    <>
    <div>
      <Dash />
    </div>
    </>
  )
}

function App(){
  return (
      <Router>
        <Routes>
      <Route path="/dashboard" element={<MainPage />} />
    </Routes>
  </Router>
  )

}

export default App;
