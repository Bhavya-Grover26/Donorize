import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home/Home';
import Event from './components/Events/Event';
import History from './components/History/History';
import Choose from './components/Choose/Choose';
import AddEvent from './components/AddEventOrg/AddEventOrg';
import NavbarOrg from './components/NavbarOrg/NavbarOrg';
import Campaign from './components/Campaigns/Campaigns';
import User_login from './components/User_login/User_login';
import "./assets/scss/app.scss"
import Dashboard from "./pages/Dashboard"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import SideBarContainer from "./components/Layout/SideBarContainer"
import Transactions from "./pages/Transactions";

function App() {
  library.add(fas)
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/event" element={<Event />} /> 
        <Route path="/history" element={<History />} /> 
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/addevent" element={<AddEvent />} /> 
        <Route path="/org" element={<NavbarOrg />} /> 
        <Route path="/" element={<Choose />} /> 
        <Route path="/User_login" element={<User_login />} /> 
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
