import React from 'react';
import { Link } from 'react-router-dom';
import './Choose1.css';

const Choose1 = () => {
  return (
    <><div className="container3">
          <div className="card3">
              <div className="icon">
                  <ion-icon name="globe-outline"></ion-icon>
              </div>
              <div className="content">
                  <h2>Organization</h2>
                  <p>organization intro</p>
              </div>
          </div>
          <div className="card3">
              <div className="icon">
                  <ion-icon name="diamond-outline"></ion-icon>
              </div>
              <div className="content">
                  <h2>User</h2>
                  <p>User info</p>
              </div>
          </div>
      </div><script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script><script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script></>
  );
}

export default Choose1;

