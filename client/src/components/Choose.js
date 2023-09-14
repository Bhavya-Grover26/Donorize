import React from 'react';
import './Choose.css';

const Choose = () => {
  return (
    <body>
      <div className="container">
        <div className="drop" style={{ background: 'linear-gradient(135deg, #f25602, #8c6b9e)' }}>
          <div className="content">
            <h2>Organization</h2>
            <p><b>HTML</b> is the language for describing the structure of Web pages.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="drop" style={{ background: 'linear-gradient(135deg, #00a89d, #8c6b9e)' }}>
          <div className="content">
            <h2>User</h2>
            <p><b>Javascript</b> is the language for adding interactivity to Web pages.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Choose;
