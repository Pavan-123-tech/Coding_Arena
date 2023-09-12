import React, { useState } from 'react';
import './signuplogin.css'

function SignupLogin() {
  const [showSignup, setShowSignup] = useState(true); // Use state to toggle between signup and login forms

  const toggleForm = () => {
    setShowSignup((prevShowSignup) => !prevShowSignup);
  };

  return (
    <div className="signup-login">
      <h2 className='loginheading' >{showSignup ? 'Sign Up' : 'Log In'}</h2>
      <form>
        {/* Form fields for Sign Up or Log In */}
        {/* Example: */}
        {showSignup && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button className='button1' type="submit">{showSignup ? 'Sign Up' : 'Log In'}</button>
      </form>

      <p>
        {showSignup ? 'Already have an account?' : 'Don\'t have an account?'}
        <button className='button2' type="button" onClick={toggleForm}>
          {showSignup ? 'Log In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}

export default SignupLogin;
