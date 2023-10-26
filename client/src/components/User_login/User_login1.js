import React, { useState } from 'react';
import './User_login1.css';
import { Link } from 'react-router-dom';

const User_login1 = () => {
    return(
        <form className="login">
  <p>Please log in</p>
  <input type="text" placeholder="User Name" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Log In" />
  <div className="links">
    <a href="#">Forgot password</a>
    <Link to='/User_signup'>Register</Link>
  </div>
</form>

        );
    };
    
    export default User_login1;
    