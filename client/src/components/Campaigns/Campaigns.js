import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Campaigns.css'

const Campaign = () => {
  const [donationProgress, setDonationProgress] = useState(50); // Set initial donation progress

  const handleDonate = () => {
    // Update donation progress on button click (this can be updated based on your actual donation logic)
    setDonationProgress((prevProgress) => prevProgress + 10);
  };
  return (
<div > 
         <Navbar/>
<div className="campaigns-container">
      <div className="campaign-card">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two3-274x249.jpg" alt="Event 1" />
        <h2>The Right of Childen</h2>
        <p>Description of Event 1</p>
        <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${donationProgress}%` }}
            ></div>
            <div className='progress-text'>50%</div>
          </div>
        <button>Donate</button>
      </div>

      <div className="campaign-card">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two4-274x249.jpg" alt="Event 2" />
        <h2>Event 2</h2>
        <p>Integer pulvinar elementum iaculis. Phasellus non turpis in nisi semper</p>
        <button>Donate</button>
      </div>

      <div className="campaign-card">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/08/cause-two5-274x249.jpg" alt="Event 3" />
        <h2>Event 3</h2>
        <p>Description of Event 3</p>
        <button>Donate</button>
      </div>

      <div className="campaign-card">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/07/cause-two9-274x249.jpg" alt="Event 4" />
        <h2>Event 4</h2>
        <p>Description of Event 4</p>
        <button>Donate</button>
      </div>

      <div className="campaign-card">
        <img src="https://charite.solverwp.com/wp-content/uploads/2023/07/cause-two9-274x249.jpg" alt="Event 4" />
        <h2>Event 4</h2>
        <p>Description of Event 4</p>
        <button>Donate</button>
      </div>
    </div>
    </div>
  )
}
export default Campaign;