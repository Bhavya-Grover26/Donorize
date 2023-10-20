import React, { useState } from 'react';
import './User_login.css';

const UserLogin = () => {
  // Use React state to manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="materialContainer">
      <div className="box">
        <div className="title">LOGIN</div>

        <div className="input">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={handleUsernameChange}
          />
          <span className="spin"></span>
        </div>

        <div className="input">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="spin"></span>
        </div>

        <div className="button login">
          <button onClick={handleLogin}>
            <span>GO</span> <i className="fa fa-check"></i>
          </button>
        </div>

        <a href="" className="pass-forgot">
          Forgot your password?
        </a>
      </div>

      <div className="overbox">
        <div className="material-button alt-2">
          <span className="shape"></span>
        </div>

        <div className="title">REGISTER</div>

        {/* Add registration input fields and logic here */}
      </div>
    </div>
  );
};

export default UserLogin;