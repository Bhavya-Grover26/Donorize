import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './components/Home/Home';
import Event from './components/Events/Event';
import History from './components/History/History';
import Choose from './components/Choose/Choose';
import User_login1 from './components/User_login/User_login1';
import User_signup from './components/User_signup/User_signup';
import Org_login from './components/Org_login/Org_login';
import Org_signup from './components/Org_signup/Org_signup';
import Donation from './components/Donation/Donation';
import "./assets/scss/app.scss"
import Dashboard from "./pages/Dashboard"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import SideBarContainer from "./components/Layout/SideBarContainer"
import Transactions from "./pages/Transactions";
import AddEvent from './components/AddEventOrg/AddEventOrg';
import NavbarOrg from './components/NavbarOrg/NavbarOrg';
function App() {
  library.add(fas)
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Home />} />
        <Route path="/event" element={<Event />} /> 
        <Route path="/history" element={<History />} /> 
        <Route path="/addevent" element={<AddEvent />} /> 
        <Route path="/org" element={<NavbarOrg />} /> 
        <Route path="/" element={<Choose />} /> 
        <Route path="/User_login" element={<User_login1 />} /> 
        <Route path="/User_signup" element={<User_signup />} /> 
        <Route path="/Org_login" element={<Org_login />} />
        <Route path="/Org_signup" element={<Org_signup />} />
        <Route path="/Donation" element={<Donation />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
