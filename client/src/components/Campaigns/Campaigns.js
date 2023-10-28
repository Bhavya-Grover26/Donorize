import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Campaigns.css';

const Campaign = () => {
  const [data, setData] = useState([]);

  const [donationProgress, setDonationProgress] = useState(50); // Set initial donation progress

  const handleDonate = () => {
    // Update donation progress on button click (this can be updated based on your actual donation logic)
    setDonationProgress(prevProgress => prevProgress + 10);
  };

  useEffect(() => {
    fetch('/allevent', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Received data:", result);
        if (result && result.posts) {
          setData(result.posts);
        } else {
          console.error("Invalid data format:", result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div className="home">
      <Navbar />

      <div className="campaigns-container">
        {data.map((campaign) => (
          <div key={campaign._id} className="campaign-card">
            <img src={campaign.photo} alt={campaign.name} />
            <h2>{campaign.name}</h2>
            <p>{campaign.shortdesc}</p>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${campaign.donationProgress}%` }}
              ></div>
              <div className='progress-text'>{Math.round(campaign.objective)}%</div>
            </div>
            <button onClick={handleDonate}>Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
