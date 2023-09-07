import React from 'react';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';

const Navbar=()=>{
  return(
    <nav>
    <div className="navbar">
      <i className='bx bx-menu'></i>
      <div className="logo"><a href="#">CodingLab</a></div>
      <div className="nav-links">
        <div className="sidebar-logo">
          <span className="logo-name">CodingLab</span>
          <i className='bx bx-x' ></i>
        </div>
        <ul className="links">
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">EVENTS</a>
          </li>
          <li>
            <a href="#">CAMPAIGNS</a>
            
          </li>
          <li><a href="#">HISTORY</a></li>
          <li><a href="#">LOG IN</a></li>
          <li><i className='bx bx-search icon-large'><BsSearch/></i></li>
          <li><i className='bx bx-user icon-large'><BiUser/></i></li>
          <li><i className='bx bx-notif icon-large'><IoNotificationsOutline/></i></li>

      
        </ul>
      </div>
      <div className="contact-box">
        <p>Donate Now</p>
      </div>
      <div className="search-box">
        <i className='bx bx-search'></i>
        <div className="input-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar