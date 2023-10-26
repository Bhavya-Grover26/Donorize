import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User_login.css';

const Userlogin = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState('login');
  const [username,setUsername] = useState("")
  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")


  const LoginData = () =>{
    fetch('/signinuser',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username, // or usernamelog, depending on what your server expects
        password 

      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
        console.log(data)
      }
      else{
        console.log("Signed in")
        navigate('/user')
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const switchForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <section className="forms-section">
      <div className="forms">
        <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => switchForm('login')}
          >
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your username and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">Username</label>
                <input id="login-email" type="username" value={usernamelog} onChange={(e)=>setUsernamelog(e.target.value)} required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password"  value={passwordlog} onChange={(e)=>setPaswordlog(e.target.value)} required />
              </div>
            </fieldset>
            <button
  type="submit"
  className="btn-login"
  onClick={(event) => {
    event.preventDefault();
    LoginData();
  }}
>
  Login
</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Userlogin;
