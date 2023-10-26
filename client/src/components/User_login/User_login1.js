import React, { useState } from 'react';
import './User_login1.css';
import M from 'materialize-css';
import { Link, useNavigate } from 'react-router-dom';

const User_login1 = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState("")
  const [password,setPasword] = useState("")


  const PostData = (e) => {
    e.preventDefault();  
    console.log("Attempting to log in with username:", username);
    console.log("Hello")

    fetch('/signinuser', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Server response:", data);
        if (data.error) {
          M.toast({ html: data.error, classes: 'red darken-3' });
            console.log("Login error:", data.error);
        } else {
            console.log("Navigating to /user");
            navigate("/user");
        }
    })
    .catch(err => {
        console.error("Error during fetch:", err);
    });
};




    return(
        <form className="login"  onSubmit={PostData}>
  <p>Please log in</p>
  <input type="text" placeholder="User Name" value={username} onChange={(e)=>setUsername(e.target.value)} />
  <input type="password" placeholder="Password" value={password} onChange={(e)=>setPasword(e.target.value)}  />
  <input type="submit" value="Log In" />
  <div className="links">
    <a href="#">Forgot password</a>
    <Link to='/User_signup'>Register</Link>
  </div>
</form>

        );
    };
    
    export default User_login1;
    