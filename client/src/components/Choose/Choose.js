import React from 'react';
import { Link } from 'react-router-dom';
import './Choose.css';

const Choose = () => {
  return (
    <div className='body'>
      <div className="containerchoose">
        <div className="drop" style={{ background: 'linear-gradient(135deg, #f25602, #8c6b9e)' }}>
          <div className="content">
            <h2>Organization</h2>
            <Link to="/Org_login">Click here</Link>
          </div>
        </div>
        <div className="drop" style={{ background: 'linear-gradient(135deg, #00a89d, #8c6b9e)' }}>
          <div className="content">
            <h2>User</h2>
            <Link to="/User_login">Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;

