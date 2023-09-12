import React, { useState } from "react";

import "./header.css";
import LoginModal from "../loginmodal/LoginModal";
import { Link } from "react-router-dom";



function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication status

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSignup = () => {
    // Perform signup logic here

    // After successful signup, set isAuthenticated to true
    setIsAuthenticated(true);

    // Close the modal
    closeModal();
  };

  const handleLogout = () => {
    // Perform logout logic here

    // After logout, set isAuthenticated to false
    setIsAuthenticated(false);
  };

  
  return (
    <header>
      <div className="logo">
        <img src="./images/logo2.png" alt="" />
      </div>
      <div className="logoname">CODING ARENA</div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">HOME</Link>
            </li>
          <li className="menu-item">
           <Link to="/course">COURSES</Link>
          </li>
          <li className="menu-item">
            <Link to="/cart">CART</Link>
          </li>
          <li className="menu-item">
          WISHLIST
           </li>
          <li className="menu-item">
           <Link to="/profile">PROFILE</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout} className="button">Logout</button>
          </>
        ) : (
          <button onClick={openModal} className="button">
            {isModalOpen ? 'Sign Up' : 'Login'}
          </button>
        )}
      </div>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} onSignup={handleSignup} />
    </header>
  );
}

export default Header;
