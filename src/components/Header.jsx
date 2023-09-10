import React, { useState } from 'react';
import SignupLogin from './SignupLogin';
import './header.css'
import LoginModal from './LoginModal';

function Header() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);

        }
  return (
    <header>
        <div className="logo">
            <img src="./images/logo2.png" alt="" />
        </div>
        <div className="logoname">
            CODING ARENA
        </div>
      <nav>
        <ul className="menu">
       
          <li className="menu-item">HOME</li>
          <li className="menu-item dropdown">
            <span className="dropdown-button">COURSES &#9662;</span>
            <div className="dropdown-content">
              <a href="#">Item 1</a>
              <a href="#">Item 2</a>
              <a href="#">Item 3</a>
            </div> </li>
          <li className="menu-item">CART</li>
          <li className="menu-item">WISHLIST</li>

        </ul>
      </nav>
      <div className="buttons">
      
        
        <button className="button" onClick={openModal}>SignUp</button>
      </div>
     
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />

    </header>
  );
}

export default Header;
