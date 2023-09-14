import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home/Home';
import Event from './components/Events/Event';
import Choose from './components/Choose'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/event" element={<Event />} /> 
        <Route path="/" element={<Choose />} /> 
      </Routes>
    </Router>
  );
}

export default App;
