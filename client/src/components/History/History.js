import React, { useState,useEffect,useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import './History.css'


const History = () => {
    
  return (
<div > 
         <Navbar/>
         <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img
              src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
              alt=""
            />
          </div>
          <div className="profile-user-settings">
            <h1 className="profile-user-name">Username</h1>
            <button className="btn profile-edit-btn">Edit Profile </button>
            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true"></i>
            </button>
          </div>
          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">123</span> Donations
              </li>
            </ul>
          </div>
        </div>
    </div>
    <div className="container2">
        {/* Donation history table */}
        <div className="donation-history">
          {/* Header row */}
          <div className="donation-row header">
            <div className="donation-cell">Campaign</div>
            <div className="donation-cell">Category</div>
            <div className="donation-cell">Amount/Item</div>
            <div className="donation-cell">Payment Method</div>
            <div className="donation-cell">Date</div>
          </div>

          {/* Donation rows */}
          <div className="donation-row">
            <div className="donation-cell">
              {/* Image and title in the first column */}
              <div className="campaign-image">
                <img
                  src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two3-274x249.jpg"
                  alt="Campaign Image"
                />
              </div>
              <div className="campaign-title">Campaign 1</div>
            </div>
            <div className="donation-cell">Category A</div>
            <div className="donation-cell">$50</div>
            <div className="donation-cell">Credit Card</div>
            <div className="donation-cell">2023-09-01</div>
          </div>

          <div className="donation-row">
            <div className="donation-cell">
              {/* Image and title in the first column */}
              <div className="campaign-image">
                <img
                  src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two4-274x249.jpg"
                  alt="Campaign Image 2"
                />
              </div>
              <div className="campaign-title">Campaign 2</div>
            </div>
            <div className="donation-cell">Category B</div>
            <div className="donation-cell">$25</div>
            <div className="donation-cell">PayPal</div>
            <div className="donation-cell">2023-09-03</div>
          </div>

          {/* Add more donation rows as needed */}
        </div>
      </div>
    </div>
  )
}

export default History;