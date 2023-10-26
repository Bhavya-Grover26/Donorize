import React, { useState } from 'react';
import './Org_signup.css';

const Org_signup = () => {
    return(
        <form className="login">
  <p>Please Sign Up</p>
  <input type="text" placeholder="Organization Name" />
  <input type="text" placeholder="Organization Address" />
  <input type="text" placeholder="E-mail" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Sign Up " />
</form>

        );
    };
    
    export default Org_signup;
    