import React, { useState } from 'react';
import './User_signup.css';

const User_signup = () => {
    return(
        <form className="login">
  <p>Please Sign Up</p>
  <input type="text" placeholder="User Name" />
  <input type="text" placeholder="E-mail" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Sign Up " />
</form>

        );
    };
    
    export default User_signup;
    