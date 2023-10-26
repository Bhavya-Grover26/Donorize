import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Org_login.css';

const Org_login = () => {
  const [activeForm, setActiveForm] = useState('login');

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
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">
            <Link to='/Dashboard'>
                 Login
            </Link>
            </button>
          </form>
        </div>
        <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
  <button
    type="button"
    className="switcher switcher-signup"
    onClick={() => switchForm('signup')}
  >
    Sign Up
    <span className="underline"></span>
  </button>
  <form className="form form-signup">
    <fieldset>
      <legend>Please, enter your email, password, and organization details for sign up.</legend>
      <div className="input-block">
        <label htmlFor="signup-org-name">Organization Name</label>
        <input id="signup-org-name" type="text" required />
      </div>
      <div className="input-block">
        <label htmlFor="signup-org-address">Organization Address</label>
        <input id="signup-org-address" type="text" required />
      </div>
      <div className="input-block">
        <label htmlFor="signup-email">E-mail</label>
        <input id="signup-email" type="email" required />
      </div>
      <div className="input-block">
        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" required />
      </div>
      <div className="input-block">
        <label htmlFor="signup-password-confirm">Confirm password</label>
        <input id="signup-password-confirm" type="password" required />
      </div>
    </fieldset>
    <button type="submit" className="btn-signup">
      Continue
    </button>
  </form>
</div>

      </div>
    </section>
  );
};

export default Org_login;
