import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home/Home';
import Event from './components/Events/Event';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} /> 
      </Routes>
    </Router>
  );
}

export default App;
