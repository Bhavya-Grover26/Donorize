import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home/Home';
import Event from './components/Events/Event';
import History from './components/History/History';
import Choose from './components/Choose/Choose';
import User_login from './components/User_login/User_login';
import DashboardOrg from './components/DashboardOrg/DashboardOrg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/event" element={<Event />} /> 
        <Route path="/history" element={<History />} /> 
        <Route path="/" element={<Choose />} /> 
        <Route path="/User_login" element={<User_login />} /> 
        <Route path="/DashboardOrg" element={<DashboardOrg />} /> 
      </Routes>
    </Router>
  );
}

export default App;
