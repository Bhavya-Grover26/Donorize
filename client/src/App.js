import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home/Home';
import Event from './components/Events/Event';
import History from './components/History/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} /> 
        <Route path="/history" element={<History />} /> 
      </Routes>
    </Router>
  );
}

export default App;
