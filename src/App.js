import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SignupLogin from './components/SignupLogin';


function App() {
  const [showSignupLogin, setShowSignupLogin] = useState(false); // State to control showing/hiding the signup/login form

  const toggleSignupLogin = () => {
    setShowSignupLogin((prevShowSignupLogin) => !prevShowSignupLogin);
  }


  return (
  
    <>
      
      <Header/>
      <Main/>
     
      {showSignupLogin && <SignupLogin />} {/* Conditionally render the SignupLogin component */}
      
    </>
    
  );
}

export default App;
